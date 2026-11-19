/** React interaction regressions in a simulated DOM. These are not visual/browser tests. */
import { test, before, after, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, rm } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';
import React, { act, StrictMode } from 'react';
import { JSDOM } from 'jsdom';
import { build } from 'esbuild';
import { CATALOG, QUESTIONS, CONTENT_VERSION } from '../src/data/content.js';
import { newExpedition } from '../src/session.js';

const project = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SAVE_KEY = 'rift-rarity-redesign-v1';
const catalog = new Map(CATALOG.map(entity => [entity.id, entity]));
let dom, App, createRoot, root, temp, now = 1000, intervalId = 0;
const intervals = new Map();
const originalGlobals = new Map();
const originalSetInterval = globalThis.setInterval;
const originalClearInterval = globalThis.clearInterval;
const timer = () => now;

before(async () => {
  dom = new JSDOM('<!doctype html><html><body></body></html>', {
    url: 'http://localhost:4173/', pretendToBeVisual: true,
  });
  const globals = {
    window: dom.window, document: dom.window.document, navigator: dom.window.navigator,
    HTMLElement: dom.window.HTMLElement, HTMLInputElement: dom.window.HTMLInputElement,
    Event: dom.window.Event, MouseEvent: dom.window.MouseEvent, KeyboardEvent: dom.window.KeyboardEvent,
    Node: dom.window.Node, MutationObserver: dom.window.MutationObserver,
    localStorage: dom.window.localStorage, IS_REACT_ACT_ENVIRONMENT: true,
    performance: { now: timer },
  };
  for (const [key, value] of Object.entries(globals)) {
    originalGlobals.set(key, Object.getOwnPropertyDescriptor(globalThis, key));
    Object.defineProperty(globalThis, key, { configurable: true, writable: true, value });
  }
  dom.window.scrollTo = () => {};
  dom.window.matchMedia = () => ({ matches: true, media: '', addEventListener() {}, removeEventListener() {} });
  dom.window.HTMLDialogElement.prototype.showModal = function () { this.setAttribute('open', ''); };
  dom.window.HTMLDialogElement.prototype.close = function () { this.removeAttribute('open'); };
  globalThis.setInterval = callback => { const id = ++intervalId; intervals.set(id, callback); return id; };
  globalThis.clearInterval = id => intervals.delete(id);
  // React DOM must see the DOM before its module is initialized.
  ({ createRoot } = await import('react-dom/client'));
  // A temporary local bundle avoids requiring a JSX loader in the user's test command.
  temp = await mkdtemp(path.join(project, 'node_modules', '.rift-ui-test-'));
  const outfile = path.join(temp, 'app.mjs');
  await build({
    entryPoints: [path.join(project, 'src/App.jsx')], outfile,
    bundle: true, format: 'esm', platform: 'node', jsx: 'automatic',
    external: ['react', 'react-dom', 'react/jsx-runtime'], logLevel: 'silent',
  });
  ({ default: App } = await import(pathToFileURL(outfile).href));
});

afterEach(async () => {
  if (root) { await act(async () => root.unmount()); root = null; }
  intervals.clear();
});
after(async () => {
  globalThis.setInterval = originalSetInterval;
  globalThis.clearInterval = originalClearInterval;
  dom?.window.close();
  for (const [key, descriptor] of originalGlobals) {
    if (descriptor) Object.defineProperty(globalThis, key, descriptor);
    else delete globalThis[key];
  }
  if (temp) await rm(temp, { recursive: true, force: true });
});

function byTestId(id) { return document.querySelector(`[data-testid="${id}"]`); }
function button(name) {
  return [...document.querySelectorAll('button')].find(el => typeof name === 'string'
    ? el.textContent.trim() === name || el.getAttribute('aria-label') === name
    : name.test(el.textContent.trim()) || name.test(el.getAttribute('aria-label') || ''));
}
async function mount({ query = '', rawSave, strict = false } = {}) {
  if (root) { await act(async () => root.unmount()); root = null; }
  intervals.clear();
  now = 1000;
  localStorage.clear();
  if (rawSave !== undefined) localStorage.setItem(SAVE_KEY, rawSave);
  dom.window.history.replaceState(null, '', `http://localhost:4173/${query}`);
  document.body.innerHTML = '<div id="root"></div>';
  root = createRoot(document.getElementById('root'));
  await act(async () => root.render(strict
    ? React.createElement(StrictMode, null, React.createElement(App))
    : React.createElement(App)));
  assert.ok(document.getElementById('home-screen'), 'Home renders');
}
async function click(target) {
  const el = typeof target === 'string' || target instanceof RegExp ? button(target) : target;
  assert.ok(el, `Expected interactive element: ${String(target)}`);
  now += 10;
  await act(async () => el.click());
}
async function input(value) {
  const element = byTestId('answer-input');
  assert.ok(element, 'Answer input exists');
  now += 10;
  await act(async () => {
    Object.getOwnPropertyDescriptor(dom.window.HTMLInputElement.prototype, 'value').set.call(element, value);
    element.dispatchEvent(new dom.window.Event('input', { bubbles: true }));
  });
}
async function submit(value) { await input(value); await click(byTestId('answer-submit')); }
function currentQuestion() {
  const prompt = byTestId('question-prompt')?.textContent;
  const question = QUESTIONS.find(q => q.prompt === prompt);
  assert.ok(question, `Question belongs to bundled content: ${prompt}`);
  return question;
}
function findSeed(predicate) {
  for (let i = 0; i < 1000; i++) {
    const seed = `component-check-${i}`;
    const question = newExpedition('classic', { now: 0, category: 'champions', seed }).questions[0];
    if (predicate(question)) return seed;
  }
  throw new Error('No deterministic seed found');
}
async function startChallenge(seed, strict = false) {
  const query = `?challenge=${encodeURIComponent(seed)}&category=champions&v=${encodeURIComponent(CONTENT_VERSION)}`;
  await mount({ query, strict });
  await click(/Accept challenge/);
  assert.ok(byTestId('answer-input'));
}
async function finishPerfectRun() {
  for (let i = 0; i < 7; i++) {
    const question = currentQuestion();
    const answer = catalog.get(question.answerIds[0]);
    await submit(answer.name);
    assert.ok(document.querySelector('.answer-reveal.success'), `Correct answer accepted: ${answer.name}`);
    await click(byTestId('next-question'));
  }
  assert.ok(byTestId('results'), 'Results rendered after seven questions');
}

test('React home, navigation, Codex search and help dialog mount correctly', async () => {
  await mount();
  assert.ok(button(/Let.s dive in/));
  await click('Codex');
  assert.match(document.body.textContent, /The Rift Codex/);
  const search = document.getElementById('codex-search');
  await act(async () => {
    Object.getOwnPropertyDescriptor(dom.window.HTMLInputElement.prototype, 'value').set.call(search, 'veegar');
    search.dispatchEvent(new dom.window.Event('input', { bubbles: true }));
  });
  assert.equal(document.querySelectorAll('.codex-entry').length, 1);
  assert.match(document.querySelector('.codex-entry').textContent, /Veigar/);
  await click('Journal');
  assert.match(document.body.textContent, /Your expedition journal/);
  await click('How to play');
  assert.ok(document.querySelector('dialog[open]'));
  assert.match(document.querySelector('dialog').textContent, /Spelling should be easy/);
  await click('Close dialog');
  assert.equal(document.querySelector('dialog'), null);
});

test('Unknown guesses show Try again, and a spelling suggestion can be selected', async () => {
  const veigar = CATALOG.find(e => e.name === 'Veigar');
  await startChallenge(findSeed(q => q.answerIds.includes(veigar.id)));
  const beforePrompt = byTestId('question-prompt').textContent;
  await submit('zzzzqqqqnotachampion');
  assert.equal(byTestId('answer-notice').textContent.trim(), 'Try again');
  assert.equal(byTestId('question-prompt').textContent, beforePrompt);
  assert.ok(byTestId('answer-input'));
  assert.equal(byTestId('next-question'), null);
  assert.equal(byTestId('depth-value').textContent, '0m');
  await input('vegiar');
  assert.ok(document.querySelector('[role="option"]').textContent.includes('Veigar'));
  await click(byTestId('answer-submit'));
  assert.equal(byTestId('answer-notice').textContent.trim(), 'Try again');
  await input('Veigra');
  await act(async () => document.querySelector('[role="option"]').dispatchEvent(
    new dom.window.MouseEvent('pointerdown', { bubbles: true, cancelable: true }),
  ));
  assert.equal(byTestId('answer-input').value, 'Veigar');
  await click(byTestId('answer-submit'));
  assert.match(document.querySelector('.answer-reveal.success').textContent, /Veigar/);
  assert.equal(byTestId('answer-input'), null);
  assert.equal(document.activeElement, byTestId('next-question'), 'Keyboard focus moves to Continue');
  assert.notEqual(byTestId('depth-value').textContent, '0m');
});

test('Recognised wrong answers show Try again without revealing answers', async () => {
  await startChallenge(findSeed(q => q.answerIds.length < 100));
  const question = currentQuestion();
  const wrong = CATALOG.find(e => e.category === 'champions' && !question.answerIds.includes(e.id));
  await submit(wrong.name);
  assert.equal(byTestId('answer-notice').textContent.trim(), 'Try again');
  assert.equal(document.querySelector('.answer-reveal'), null);
  assert.ok(byTestId('answer-input'));
  assert.equal(byTestId('next-question'), null);
  assert.equal(byTestId('depth-value').textContent, '0m');
});

test('A previous challenge link still opens its original first question', async () => {
  await mount({ query: '?challenge=legacy-content-regression&category=all&v=rr4-ddragon-16.23.1-1' });
  await click(/Accept challenge/);
  assert.equal(currentQuestion().id, 'c-initial-b');
});

test('A full seven-answer run produces results and one saved award even under StrictMode', async () => {
  await startChallenge(findSeed(() => true), true);
  await finishPerfectRun();
  const profile = JSON.parse(localStorage.getItem(SAVE_KEY));
  assert.equal(profile.runs, 1);
  assert.equal(profile.stats.correct, 7);
  assert.equal(profile.stats.answered, 7);
  assert.equal(profile.history.length, 1);
  assert.ok(profile.bests.classic > 0);
  assert.ok(profile.xp > 0);
  await click('Back to shore');
  assert.equal(JSON.parse(localStorage.getItem(SAVE_KEY)).runs, 1);
  await click('Journal');
  assert.match(document.body.textContent, /Classic Dive/);
  await mount({ rawSave: JSON.stringify(profile) });
  assert.equal(JSON.parse(localStorage.getItem(SAVE_KEY)).runs, 1);
  assert.equal(JSON.parse(localStorage.getItem(SAVE_KEY)).xp, profile.xp);
});

test('Category selection, untimed Practice and keyboard nickname assist work together', async () => {
  await mount();
  await click('Champions');
  await click(document.querySelector('.mode-practice'));
  assert.equal(currentQuestion().category, 'champions');
  assert.match(document.body.textContent, /No timer/);
  now += 60_000;
  await act(async () => { for (const callback of [...intervals.values()]) callback(); });
  assert.ok(byTestId('answer-input'), 'Practice remains active after a minute');
  await input('Veig');
  assert.equal(document.querySelector('[role="listbox"]'), null);
  await input('Veiagr');
  await act(async () => {
    byTestId('answer-input').dispatchEvent(new dom.window.KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));
  });
  await act(async () => {
    byTestId('answer-input').dispatchEvent(new dom.window.KeyboardEvent('keydown', { key: 'Enter', bubbles: true, cancelable: true }));
  });
  assert.equal(byTestId('answer-input').value, 'Veigar');
  assert.ok(byTestId('answer-input'), 'Choosing a suggestion does not submit it');
});

test('Late answer submission expires even without a scheduled timer tick', async () => {
  const veigar = CATALOG.find(e => e.name === 'Veigar');
  await startChallenge(findSeed(q => q.answerIds.includes(veigar.id)));
  await input('Veigar');
  now += 26_000;
  await click(byTestId('answer-submit'));
  assert.match(document.querySelector('.answer-reveal').textContent, /Time expired|Time to resurface/);
  assert.equal(byTestId('depth-value').textContent, '0m');
});

test('Daily starts with the same question for the same UTC date', async () => {
  await mount();
  await click(/Daily Seven/);
  const first = currentQuestion().id;
  await mount();
  await click('Items');
  await click(/Daily Seven/);
  assert.equal(currentQuestion().id, first);
});

test('Endless can surface and save, and a fresh empty run awards no progress', async () => {
  await mount();
  await click(/Endless Abyss/);
  await click(/Surface & save/);
  assert.ok(byTestId('results'));
  assert.equal(JSON.parse(localStorage.getItem(SAVE_KEY)).runs, 0);
  await click(/Dive again/);
  const answer = catalog.get(currentQuestion().answerIds[0]);
  await submit(answer.name);
  await click(/Surface & save/);
  assert.ok(byTestId('results'));
  assert.equal(JSON.parse(localStorage.getItem(SAVE_KEY)).runs, 1);
});

test('Malformed legacy progress does not blank React and valid old records migrate', async () => {
  await mount({ rawSave: JSON.stringify({ version: 1, xp: 'broken', history: [null, { mode: 77 }], bests: [], daily: [], relics: [null, {}] }) });
  assert.ok(button(/Let.s dive in/));
  await mount({ rawSave: JSON.stringify({ version: 1, xp: 150, runs: 4, bests: { classic: 2400 }, history: [{mode:'classic',date:'2026-11-01',depth:2400,correct:6}],relics:['shoals'] }) });
  const profile = JSON.parse(localStorage.getItem(SAVE_KEY));
  assert.equal(profile.xp, 150);
  assert.equal(profile.runs, 4);
  assert.equal(profile.bests.classic, 2400);
  assert.ok(profile.relics.includes('shoals'));
});

test('ArrowUp begins at the last name suggestion; pointer selection keeps the field usable', async () => {
  await mount();
  await click('Champions');
  await click(document.querySelector('.mode-practice'));
  await input('son');
  const options = [...document.querySelectorAll('[role="option"]')];
  assert.ok(options.length > 1);
  await act(async () => byTestId('answer-input').dispatchEvent(new dom.window.KeyboardEvent('keydown', { key: 'ArrowUp', bubbles: true, cancelable: true })));
  assert.equal(document.querySelector('[role="option"][aria-selected="true"]').id, options.at(-1).id);
  const chosen = options[0].querySelector('span:nth-child(2)').textContent;
  await act(async () => options[0].dispatchEvent(new dom.window.MouseEvent('pointerdown', { bubbles: true, cancelable: true })));
  assert.equal(byTestId('answer-input').value, chosen);
  assert.equal(document.querySelector('[role="listbox"]'), null);
});

test('Endless progress strip follows the current question beyond twelve and early continue clears dive animation', async () => {
  await mount();
  await click(/Endless Abyss/);
  for (let i = 0; i < 13; i++) {
    const answer = catalog.get(currentQuestion().answerIds[0]);
    await submit(answer.name);
    await click(byTestId('next-question'));
    assert.equal(document.querySelector('.ocean-scene.is-diving'), null);
  }
  assert.match(byTestId('question-number').textContent, /^14/);
  assert.equal(document.querySelectorAll('.question-dots i').length, 12);
  assert.equal(document.querySelectorAll('.question-dots .current').length, 1);
});
