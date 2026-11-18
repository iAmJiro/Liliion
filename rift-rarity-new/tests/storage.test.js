import test from 'node:test';
import assert from 'node:assert/strict';
import { freshProfile, sanitiseProfile, loadProfile, saveProfile, completeRun, PROFILE_KEY } from '../src/storage.js';
import { newExpedition, settle, nextQuestion } from '../src/session.js';
import { getEntity } from '../src/engine.js';
const run = () => {
  let g = newExpedition('classic', { seed: 'storage', now: 1000, day: '2026-11-18' });
  for (let i = 0; i < 7; i++) {
    g = settle(g, getEntity(g.questions[g.index].answerIds[0]).name, { now: 1000 + i * 10 });
    g = nextQuestion(g, { now: 1005 + i * 10 });
  }
  return g;
};
test('old progress migrates without losing legitimate XP, records or relics', () => {
  const p = sanitiseProfile({ version: 1, xp: 1234, runs: 5, bests: { classic: 4000 }, relics: ['forest'], history: [{ mode: 'classic', date: '2026-11-17', depth: 4000, correct: 7 }], audio: true });
  assert.equal(p.version, 2);
  assert.equal(p.xp, 1234);
  assert.equal(p.bests.classic, 4000);
  assert.equal(p.history[0].correct, 7);
  assert.equal(p.audio, true);
  assert.ok(p.stats);
});
test('malformed nested save data is sanitised instead of breaking React rendering', () => {
  const p = sanitiseProfile({ version: 1, xp: 'bad', runs: -100, bests: null, relics: [null, {}, 'nope'], history: [null, {}, { mode: 33 }, { mode: 'daily', depth: 'oops' }], stats: [], daily: { invalid: {} }, audio: 'true' });
  assert.equal(p.xp, 0);
  assert.equal(p.runs, 0);
  assert.deepEqual(p.relics, []);
  assert.equal(p.history.length, 1);
  assert.equal(p.history[0].depth, 0);
  assert.equal(p.audio, false);
});
test('invalid JSON and unavailable storage do not throw', () => {
  assert.deepEqual(loadProfile({ getItem() { return '{broken'; } }), freshProfile());
  const blocked = { getItem() { throw Error('denied'); }, setItem() { throw Error('full'); } };
  assert.deepEqual(loadProfile(blocked), freshProfile());
  assert.equal(saveProfile(freshProfile(), blocked), false);
});
test('profile roundtrip saves the original key and sanitized state', () => {
  const memory = new Map();
  const store = { getItem: key => memory.get(key), setItem: (key, value) => memory.set(key, value) };
  const p = { ...freshProfile(), xp: 900 };
  assert.equal(saveProfile(p, store), true);
  assert.ok(memory.has(PROFILE_KEY));
  assert.equal(loadProfile(store).xp, 900);
});
test('completed expedition rewards are idempotent and accumulate personal statistics', () => {
  const game = run();
  const first = completeRun(freshProfile(), game);
  const again = completeRun(first, game);
  assert.equal(again, first);
  assert.equal(first.runs, 1);
  assert.equal(first.stats.correct, 7);
  assert.equal(first.stats.answered, 7);
  assert.equal(first.stats.perfectRuns, 1);
  assert.ok(first.achievements.includes('clean-seven'));
  assert.ok(first.discoveries.length >= 1);
  assert.equal(first.history.length, 1);
});
test('unfinished or empty endless expeditions do not grant XP', () => {
  const profile = freshProfile();
  const game = newExpedition('endless', { now: 1000, seed: 'empty' });
  assert.equal(completeRun(profile, game), profile);
  assert.equal(completeRun(profile, { ...game, status: 'complete' }), profile);
});
test('daily saved correctness belongs to the retained best score', () => {
  const g = { ...run(), mode: 'daily' };
  const first = completeRun(freshProfile(), g);
  const weaker = { ...g, id: 'second', depth: 100, correct: 1 };
  const second = completeRun(first, weaker);
  assert.equal(second.daily[g.day].depth, first.daily[g.day].depth);
  assert.equal(second.daily[g.day].correct, first.daily[g.day].correct);
});
