import test from 'node:test';
import assert from 'node:assert/strict';
import { CATALOG, CONTENT_VERSION, QUESTIONS } from '../src/data/content.js';
import { getEntity } from '../src/engine.js';
import { newExpedition, settle, nextQuestion, finishRun } from '../src/session.js';

const make = (mode = 'classic', extra = {}) => newExpedition(mode, { now: 1000, seed: 'test', day: '2026-11-18', ...extra });
const valid = g => getEntity(g.questions[g.index].answerIds[0]).name;
function complete(mode = 'classic') {
  let game = make(mode);
  for (let i = 0; i < 7; i++) {
    game = settle(game, valid(game), { now: 1000 + i * 10 });
    game = nextQuestion(game, { now: 1005 + i * 10 });
  }
  return game;
}
test('classic has seven timed questions and practice is untimed', () => {
  assert.equal(make().questions.length, 7);
  assert.equal(make().deadline, 26000);
  assert.equal(make('practice').deadline, null);
  assert.equal(make('practice').durationMs, 0);
});
test('a previous challenge bank keeps the original seeded question order', () => {
  const bankVersion = 'rr4-ddragon-16.23.1-1';
  const game = make('classic', { seed: 'legacy-content-regression', bankVersion });

  assert.equal(game.bankVersion, bankVersion);
  assert.deepEqual(game.questions.map(q => q.id), [
    'c-initial-b',
    'c-initial-d',
    'i-stat-ap',
    'c-energy',
    'i-stat-health',
    'm-epic',
    'm-monsters',
  ]);
});
test('a new run uses the expanded question bank', () => {
  const game = make('endless');

  assert.equal(game.bankVersion, CONTENT_VERSION);
  assert.ok(game.questions.length > 80);
  assert.deepEqual(new Set(game.questions.map(q => q.id)), new Set(QUESTIONS.map(q => q.id)));
});
test('a success scores once; revealing ignores extra submissions', () => {
  const game = make();
  const result = settle(game, valid(game), { now: 2000 });
  assert.equal(result.status, 'revealing');
  assert.equal(result.correct, 1);
  assert.ok(result.depth >= 100);
  assert.equal(settle(result, valid(game), { now: 2001 }), result);
  assert.equal(nextQuestion(result, { now: 3000 }).index, 1);
});
test('correct reveals show only other answers and a skip shows the single valid answer', () => {
  const game = make();
  const submittedId = 'champion:Veigar';
  const otherId = 'champion:Lulu';
  const question = { ...game.questions[game.index], category: 'champions', answerIds: [submittedId] };
  const singleAnswerGame = { ...game, questions: [question] };
  const multipleAnswerGame = {
    ...game,
    questions: [{ ...question, answerIds: [submittedId, otherId] }],
  };

  const correct = settle(singleAnswerGame, 'Veigar', { now: 2000 });
  const skipped = settle(singleAnswerGame, '', { now: 2000 });
  const correctWithOtherAnswer = settle(multipleAnswerGame, 'Veigar', { now: 2000 });

  assert.equal(correct.last.kind, 'correct');
  assert.deepEqual(correct.last.examples, []);
  assert.equal(skipped.last.kind, 'skipped');
  assert.deepEqual(skipped.last.examples.map(e => e.id), [submittedId]);
  assert.deepEqual(correctWithOtherAnswer.last.examples.map(e => e.id), [otherId]);
});
test('unknown spelling does not consume question, depth, life, streak or time', () => {
  const game = { ...make('endless'), streak: 3, depth: 650 };
  const result = settle(game, 'zzzzzzzzzzzz', { now: 2000 });
  assert.equal(result.status, 'answering');
  assert.equal(result.notice.message, 'Try again');
  for (const key of ['deadline', 'depth', 'lives', 'streak', 'index']) assert.equal(result[key], game[key]);
  assert.equal(result.log.length, 0);
  assert.equal(settle(result, valid(game), { now: 2200 }).correct, 1);
});
test('a partial item name shows only the retry message', () => {
  const game = make('classic', { category: 'items' });
  const result = settle(game, 'dora', { now: 2000 });
  assert.equal(result.status, 'answering');
  assert.deepEqual(result.notice, { kind: 'retry', message: 'Try again' });
  assert.equal(result.log.length, 0);
  assert.equal(result.deadline, game.deadline);
});
test('a known but ineligible name keeps the turn open for a correct answer', () => {
  const question = QUESTIONS.find(q => q.category === 'champions' && q.answerIds.length < 100);
  const original = make();
  const game = { ...original, questions: [question, ...original.questions.slice(1)] };
  const other = CATALOG.find(e => e.category === question.category && !question.answerIds.includes(e.id));
  assert.ok(other);
  const result = settle(game, other.name, { now: 1200 });
  assert.equal(result.status, 'answering');
  assert.equal(result.correct, 0);
  assert.equal(result.notice.message, 'Try again');
  assert.equal(result.last, null);
  assert.equal(result.log.length, 0);
  assert.equal(settle(result, valid(game), { now: 1300 }).correct, 1);
});
test('an entity in the wrong category can be retried', () => {
  const game = make('classic', { category: 'items' });
  const result = settle(game, 'Veigar', { now: 1500 });
  assert.equal(result.status, 'answering');
  assert.equal(result.notice.message, 'Try again');
  assert.equal(result.depth, 0);
});
test('submission at or after deadline is timeout even when the UI has not ticked', () => {
  for (const delta of [0, 1, 300]) {
    const game = make();
    const result = settle(game, valid(game), { now: game.deadline + delta });
    assert.equal(result.last.kind, 'timeout');
    assert.equal(result.depth, 0);
  }
});
test('early timeout tick ignored; untimed practice never expires', () => {
  const game = make();
  assert.equal(settle(game, '', { now: 2000, timedOut: true }), game);
  const practice = make('practice');
  assert.equal(settle(practice, valid(practice), { now: 10000000 }).last.kind, 'correct');
});
test('daily is deterministic for UTC day and content, regardless of category or supplied seed', () => {
  const one = make('daily', { seed: 'one', category: 'map' });
  const two = make('daily', { seed: 'two', category: 'items', now: 90000 });
  assert.equal(one.category, 'all');
  assert.deepEqual(one.questions, two.questions);
  assert.notEqual(one.id, two.id);
  assert.notEqual(one.seed, make('daily', { day: '2026-11-19' }).seed);
});
test('endless consumes exactly three lives, and can voluntarily bank a run', () => {
  let game = make('endless');
  for (let i = 0; i < 3; i++) {
    game = settle(game, '', { now: 1000 + i * 10 });
    assert.equal(game.lives, 2 - i);
    game = nextQuestion(game, { now: 1005 + i * 10 });
  }
  assert.equal(game.status, 'complete');
  assert.equal(finishRun(make('endless')).status, 'complete');
  assert.equal(finishRun(make()).status, 'answering');
});
test('seven successful questions complete cleanly with all milestone unlocks crossed', () => {
  const game = complete();
  assert.equal(game.status, 'complete');
  assert.equal(game.correct, 7);
  assert.equal(game.log.length, 7);
  assert.equal(game.bestStreak, 7);
  const expected = game.depth >= 2500 ? ['shoals', 'temple', 'forest'] : game.depth >= 1000 ? ['shoals', 'temple'] : ['shoals'];
  for (const id of expected) assert.ok(game.newRelics.includes(id));
});
test('monotonic time is required; late invalid inputs cannot keep a timed question alive', () => {
  assert.throws(() => newExpedition('classic'), /monotonic/);
  const game = make();
  assert.equal(settle(game, 'nonsense', { now: 27000 }).last.kind, 'timeout');
});
