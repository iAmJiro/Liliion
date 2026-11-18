/** Optional real-browser verification. Run against `npm run preview -- --port 4173`.
 * Install Playwright separately if desired: npm install --no-save playwright
 * BROWSER_BASE_URL and CHROMIUM_EXECUTABLE can select a local test server/browser.
 */
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { mkdir, writeFile, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { CATALOG, QUESTIONS, CONTENT_VERSION } from '../src/data/content.js';
import { newExpedition } from '../src/session.js';

const require = createRequire(import.meta.url);
let playwright;
try { playwright = require('playwright'); }
catch (error) {
  if (!process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES) throw error;
  playwright = require(path.join(process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES, 'playwright'));
}
const base = process.env.BROWSER_BASE_URL || 'http://127.0.0.1:4173';
const output = process.env.BROWSER_ARTIFACTS || path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../qa/browser');
await mkdir(output, { recursive: true });
const options = { headless: true };
if (process.env.CHROMIUM_EXECUTABLE) options.executablePath = process.env.CHROMIUM_EXECUTABLE;
const browser = await playwright.chromium.launch(options);
const results = [], errors = [], consoleErrors = [], pages = [];
const fixedDate = new Date('2026-11-18T12:00:00Z');
const entities = new Map(CATALOG.map(e => [e.id, e]));
const questionFor = async page => {
  const prompt = await page.getByTestId('question-prompt').innerText();
  const question = QUESTIONS.find(q => q.prompt === prompt);
  assert.ok(question, `Visible question exists in bundled content: ${prompt}`);
  return question;
};
const saveKey = 'rift-rarity-redesign-v1';
async function context(viewport = { width: 1440, height: 1000 }) {
  const context = await browser.newContext({ viewport, reducedMotion: 'reduce' });
  const page = await context.newPage();
  pages.push(page);
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => { if (message.type() === 'error') consoleErrors.push(message.text()); });
  await page.clock.install({ time: fixedDate });
  await page.clock.pauseAt(fixedDate);
  return { context, page };
}
async function check(name, run) {
  try { await run(); results.push({ name, passed: true }); console.log('PASS', name); }
  catch (error) { results.push({ name, passed: false, error: error.stack }); console.error('FAIL', name, error.message); }
}
async function noOverflow(page) {
  const sizes = await page.evaluate(() => ({ viewport: innerWidth, body: document.body.scrollWidth, root: document.documentElement.scrollWidth }));
  assert.ok(sizes.body <= sizes.viewport + 1 && sizes.root <= sizes.viewport + 1, JSON.stringify(sizes));
}
async function openHome(page) { await page.goto(base); await page.locator('#home-screen').waitFor(); }
async function startChallenge(page, seed, category = 'champions') {
  const url = new URL(base);
  url.searchParams.set('challenge', seed);
  url.searchParams.set('category', category);
  url.searchParams.set('v', CONTENT_VERSION);
  await page.goto(url.href);
  await page.getByRole('button', { name: /Accept challenge/ }).click();
  await page.getByTestId('answer-input').waitFor();
}
const veigar = CATALOG.find(e => e.name === 'Veigar');
let veigarSeed;
for (let i = 0; i < 1000; i++) {
  const seed = `browser-veigar-${i}`;
  if (newExpedition('classic', { now: 0, day: '2026-11-18', category: 'champions', seed }).questions[0].answerIds.includes(veigar.id)) { veigarSeed = seed; break; }
}
assert.ok(veigarSeed, 'Found deterministic Veigar-eligible first question');

try {
  await check('Desktop home and local image assets render without overflow', async () => {
    const { context: ctx, page } = await context();
    await openHome(page);
    await noOverflow(page);
    assert.ok(await page.getByRole('button', { name: /Let.s dive in/ }).isVisible());
    await page.screenshot({ path: path.join(output, 'home-desktop.png'), fullPage: true });
    await ctx.close();
  });
  await check('Unknown spelling retries, Veegar works, seven answers complete and persist once', async () => {
    const { context: ctx, page } = await context();
    await startChallenge(page, veigarSeed);
    const firstPrompt = await page.getByTestId('question-prompt').innerText();
    await page.getByTestId('answer-input').fill('zzzzqqqqnotaname');
    await page.getByTestId('answer-submit').click();
    await page.getByTestId('answer-notice').waitFor();
    assert.equal(await page.getByTestId('question-prompt').innerText(), firstPrompt);
    assert.ok(await page.getByTestId('answer-input').isEnabled());
    assert.equal(await page.getByTestId('next-question').count(), 0);
    await page.getByTestId('answer-input').fill('veegar');
    await page.getByTestId('answer-submit').click();
    await page.getByTestId('next-question').waitFor();
    assert.match(await page.locator('.answer-reveal').innerText(), /Veigar/);
    assert.match(await page.locator('.answer-reveal').getAttribute('class'), /success/);
    await page.screenshot({ path: path.join(output, 'correct-desktop.png'), fullPage: true });
    for (let i = 1; i < 7; i++) {
      await page.getByTestId('next-question').click();
      const question = await questionFor(page);
      const answer = question.answerIds.map(id => entities.get(id)).sort((a, b) => b.tier - a.tier)[0];
      await page.getByTestId('answer-input').fill(answer.name);
      await page.getByTestId('answer-submit').click();
      await page.getByTestId('next-question').waitFor();
      assert.match(await page.locator('.answer-reveal').getAttribute('class'), /success/);
    }
    await page.getByTestId('next-question').click();
    await page.getByTestId('results').waitFor();
    await noOverflow(page);
    await page.waitForFunction(key => JSON.parse(localStorage.getItem(key) || '{}').runs === 1, saveKey);
    const before = await page.evaluate(key => JSON.parse(localStorage.getItem(key)), saveKey);
    assert.equal(before.stats.correct, 7);
    assert.equal(before.stats.answered, 7);
    assert.ok(before.bests.classic > 0);
    await page.screenshot({ path: path.join(output, 'results-desktop.png'), fullPage: true });
    await page.reload();
    await page.locator('#home-screen').waitFor();
    const after = await page.evaluate(key => JSON.parse(localStorage.getItem(key)), saveKey);
    assert.equal(after.runs, 1);
    assert.equal(after.xp, before.xp);
    await ctx.close();
  });
  await check('Recognised but ineligible champion is explained instead of silently corrected', async () => {
    const { context: ctx, page } = await context();
    let seed;
    for (let i = 0; i < 100; i++) {
      const candidate = `browser-wrong-${i}`;
      if (newExpedition('classic', { now: 0, category: 'champions', seed: candidate }).questions[0].answerIds.length < 100) { seed = candidate; break; }
    }
    await startChallenge(page, seed);
    const question = await questionFor(page);
    const wrong = CATALOG.find(e => e.category === 'champions' && !question.answerIds.includes(e.id));
    await page.getByTestId('answer-input').fill(wrong.name);
    await page.getByTestId('answer-submit').click();
    await page.getByTestId('next-question').waitFor();
    assert.match(await page.locator('.answer-reveal').getAttribute('class'), /miss/);
    assert.ok((await page.locator('.answer-reveal').innerText()).includes(wrong.name));
    assert.match(await page.locator('.answer-reveal').innerText(), /recognised/);
    await ctx.close();
  });
  await check('Mobile 390/360 home, practice, keyboard name assist and no horizontal overflow', async () => {
    for (const width of [390, 360]) {
      const { context: ctx, page } = await context({ width, height: 844 });
      await openHome(page);
      await noOverflow(page);
      await page.getByRole('button', { name: 'Champions', exact: true }).click();
      await page.getByRole('button', { name: /NO PRESSURE.*Practice|Practice.*NO PRESSURE/ }).click();
      await page.getByTestId('answer-input').waitFor();
      assert.equal((await questionFor(page)).category, 'champions');
      assert.ok(await page.getByLabel('No time limit').isVisible());
      await page.clock.fastForward(30_000);
      assert.ok(await page.getByTestId('answer-input').isVisible());
      await page.getByTestId('answer-input').fill('Veeg');
      await page.getByTestId('answer-input').press('ArrowDown');
      await page.getByTestId('answer-input').press('Enter');
      assert.equal(await page.getByTestId('answer-input').inputValue(), 'Veigar');
      await noOverflow(page);
      await page.screenshot({ path: path.join(output, `game-mobile-${width}.png`), fullPage: true });
      await ctx.close();
    }
  });
  await check('Timed run actually expires after 25 seconds', async () => {
    const { context: ctx, page } = await context();
    await startChallenge(page, veigarSeed);
    await page.clock.fastForward(26_000);
    await page.getByTestId('next-question').waitFor();
    assert.match(await page.locator('.answer-reveal').innerText(), /Time expired|Time to resurface/);
    await ctx.close();
  });
  await check('Corrupt nested legacy storage does not blank the app', async () => {
    const { context: ctx, page } = await context();
    await page.addInitScript(key => localStorage.setItem(key, JSON.stringify({version:1, xp:'bad', history:[null,{mode:44},{mode:'classic',depth:{},correct:null}],bests:[],daily:[],relics:[null,{}]})), saveKey);
    await openHome(page);
    assert.ok(await page.getByRole('button', { name: /Let.s dive in/ }).isVisible());
    await ctx.close();
  });
  await check('No browser runtime exceptions or console errors', async () => {
    assert.deepEqual(errors, []);
    assert.deepEqual(consoleErrors, []);
  });
} finally {
  await browser.close();
  const report = { base, results, runtimeErrors: errors, consoleErrors };
  await writeFile(path.join(output, 'browser-results.json'), JSON.stringify(report, null, 2));
}
if (results.some(result => !result.passed)) process.exitCode = 1;
