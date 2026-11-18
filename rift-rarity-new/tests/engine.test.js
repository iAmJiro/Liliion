import test from 'node:test';
import assert from 'node:assert/strict';
import { CATALOG, QUESTIONS } from '../src/data/content.js';
import { resolveInput, suggestions, editDistance, norm, chooseQuestions, award, comboMultiplier, BIOMES, biomeFor, levelFor, validateBank, getEntity } from '../src/engine.js';

const fake = [
  { id: 'champion:Veigar', name: 'Veigar', category: 'champions', aliases: ['veegar'], tier: 3 },
  { id: 'champion:Vex', name: 'Vex', category: 'champions', aliases: [], tier: 4 },
  { id: 'champion:Vi', name: 'Vi', category: 'champions', aliases: [], tier: 2 },
  { id: 'champion:Sona', name: 'Sona', category: 'champions', aliases: [], tier: 2 },
  { id: 'champion:Senna', name: 'Senna', category: 'champions', aliases: [], tier: 2 },
  { id: 'champion:AurelionSol', name: 'Aurelion Sol', category: 'champions', aliases: ['asol'], tier: 5 },
  { id: 'item:IE', name: 'Infinity Edge', category: 'items', aliases: ['IE'], tier: 1 },
];
test('entire generated bank contains only valid known answers and categories', () => {
  assert.deepEqual(validateBank(QUESTIONS), []);
  assert.ok(QUESTIONS.length >= 40);
  assert.ok(CATALOG.length > 200);
  assert.ok(CATALOG.every(e => !e.category.includes('esport')));
});
test('seven questions are balanced, unique, deterministic and category filter works', () => {
  const one = chooseQuestions(QUESTIONS, 'test-seed'), two = chooseQuestions(QUESTIONS, 'test-seed');
  assert.equal(one.length, 7);
  assert.deepEqual(one, two);
  assert.equal(new Set(one.map(x => x.id)).size, 7);
  assert.equal(one.filter(x => x.category === 'champions').length, 3);
  assert.equal(one.filter(x => x.category === 'items').length, 2);
  assert.equal(one.filter(x => x.category === 'map').length, 2);
  assert.ok(chooseQuestions(QUESTIONS, 'filtered', 7, 'map').every(q => q.category === 'map'));
});
test('normalization accepts punctuation, accents, ampersands and whitespace', () => {
  assert.equal(norm("  KAI’SA!  "), 'kaisa');
  assert.equal(norm('Núnu & Willump'), 'nunuandwillump');
});
test('exact names always win, including short names and names in another category', () => {
  assert.equal(resolveInput('Vi', 'champions', fake).entity.name, 'Vi');
  assert.equal(resolveInput('Sona', 'champions', fake).entity.name, 'Sona');
  assert.equal(resolveInput('Infinity Edge', 'champions', fake).entity.name, 'Infinity Edge');
  assert.equal(resolveInput('Vi', 'items', fake).entity.name, 'Vi');
});
test('nicknames and Veegar are accepted without fabricating answer identities', () => {
  assert.equal(resolveInput('veegar', 'champions', fake).entity.name, 'Veigar');
  assert.equal(resolveInput('veegar', 'champions', fake).corrected, true);
  assert.equal(resolveInput('IE', 'items', fake).entity.name, 'Infinity Edge');
  assert.equal(resolveInput('asol', 'champions', fake).entity.name, 'Aurelion Sol');
});
test('transposition and missing-letter typos are supported', () => {
  assert.equal(editDistance('veigar', 'vegiar'), 1);
  assert.equal(resolveInput('vegiar', 'champions', fake).entity.name, 'Veigar');
  assert.equal(resolveInput('vegar', 'champions', fake).entity.name, 'Veigar');
});
test('short guesses and nonsense do not accidentally award champions', () => {
  for (const value of ['v', 've', 'vii', 'zzzzzzzzzz', '']) assert.equal(resolveInput(value, 'champions', fake).status, 'unknown');
});
test('unique meaningful prefixes accepted; ambiguous prefixes require a choice', () => {
  assert.equal(resolveInput('aure', 'champions', fake).entity.name, 'Aurelion Sol');
  const pool = [{ id: 'a', name: 'Alpha One', category: 'map', aliases: [] }, { id: 'b', name: 'Alpha Two', category: 'map', aliases: [] }];
  const result = resolveInput('alph', 'map', pool);
  assert.equal(result.status, 'ambiguous');
  assert.equal(result.entity, null);
  assert.equal(result.candidates.length, 2);
});
test('equal-distance corrections and colliding aliases never silently pick one', () => {
  const pool = [{ id: 'a', name: 'Garen', category: 'champions', aliases: ['warrior'] }, { id: 'b', name: 'Garin', category: 'champions', aliases: ['warrior'] }];
  assert.equal(resolveInput('garon', 'champions', pool).status, 'ambiguous');
  assert.equal(resolveInput('warrior', 'champions', pool).status, 'ambiguous');
});
test('exact canonical names outrank another entity’s alias', () => {
  const pool = [{ id: 'a', name: 'Vi', category: 'champions', aliases: [] }, { id: 'b', name: 'Viego', category: 'champions', aliases: ['vi'] }];
  assert.equal(resolveInput('Vi', 'champions', pool).entity.id, 'a');
});
test('name assist searches category identities rather than current eligible answers', () => {
  assert.deepEqual(suggestions('ve', 'champions', fake).map(e => e.name), ['Veigar', 'Vex']);
  assert.deepEqual(suggestions('ve', 'items', fake), []);
  assert.deepEqual(suggestions('i', 'items', fake), []);
  assert.equal(suggestions('veegar', 'champions', fake)[0].name, 'Veigar');
});
test('every canonical catalogue name resolves to itself, without eligibility bias', () => {
  for (const entity of CATALOG) {
    const result = resolveInput(entity.name, entity.category);
    assert.equal(result.status, 'matched', entity.name);
    assert.equal(result.entity.id, entity.id, entity.name);
  }
});
test('depth rewards, combo cap and biome thresholds stay stable', () => {
  assert.deepEqual([1, 2, 3, 4, 5].map(tier => award({ tier }, 1).depth), [100, 200, 350, 550, 800]);
  assert.equal(award({ tier: 5 }, 5).depth, 1120);
  assert.equal(comboMultiplier(200), 1.4);
  assert.equal(biomeFor(2500).key, 'forest');
  assert.equal(BIOMES.length, 5);
  assert.equal(levelFor(600), 3);
  assert.ok(getEntity('champion:Veigar'));
});
