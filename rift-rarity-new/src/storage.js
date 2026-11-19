/** Device-local progress with defensive migration from the earlier React release. */
import { BIOMES, getEntity } from './engine.js';
import { MODES } from './session.js';

export const PROFILE_KEY = 'rift-rarity-redesign-v1';
const object = value => value && typeof value === 'object' && !Array.isArray(value) ? value : {};
const count = (value, max = 1_000_000_000) => typeof value === 'number' && Number.isFinite(value) ? Math.max(0, Math.min(max, Math.floor(value))) : 0;
const strings = (value, limit = 5000) => Array.isArray(value) ? [...new Set(value.filter(x => typeof x === 'string' && x.length <= 180))].slice(0, limit) : [];
const day = value => typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value) ? value : 'Unknown date';
export const freshProfile = () => ({
  version: 2, xp: 0, runs: 0,
  bests: Object.fromEntries(MODES.map(mode => [mode, 0])),
  relics: [], discoveries: [], history: [], daily: {}, audio: false,
  stats: { answered: 0, correct: 0, bestStreak: 0, mythic: 0, perfectRuns: 0 },
  achievements: [], completedRunIds: [],
});

export function bestTimedDepth(profile) {
  return Math.max(0, ...MODES.filter(mode => mode !== 'practice').map(mode => count(profile.bests[mode])));
}

export function sanitiseProfile(value) {
  const input = object(value), fresh = freshProfile();
  if (![1, 2].includes(input.version)) return fresh;
  const bests = object(input.bests), rawStats = object(input.stats);
  const history = (Array.isArray(input.history) ? input.history : []).filter(x => x && typeof x === 'object' && MODES.includes(x.mode)).slice(0, 30).map(x => ({
    id: typeof x.id === 'string' ? x.id.slice(0, 180) : '', mode: x.mode,
    category: ['champions', 'items', 'map', 'all'].includes(x.category) ? x.category : 'all',
    date: day(x.date), depth: count(x.depth), correct: count(x.correct), answered: count(x.answered),
    seed: typeof x.seed === 'string' ? x.seed.slice(0, 200) : '', bestStreak: count(x.bestStreak),
  }));
  const daily = {};
  for (const [key, entry] of Object.entries(object(input.daily)).slice(-365)) {
    if (day(key) === 'Unknown date' || !entry || typeof entry !== 'object') continue;
    daily[key] = { depth: count(entry.depth), correct: count(entry.correct, 7) };
  }
  return {
    ...fresh, xp: count(input.xp), runs: count(input.runs),
    bests: Object.fromEntries(MODES.map(mode => [mode, count(bests[mode])])),
    relics: strings(input.relics).filter(id => BIOMES.some(b => b.key === id)),
    discoveries: strings(input.discoveries).filter(id => getEntity(id)), history, daily,
    audio: input.audio === true,
    stats: Object.fromEntries(Object.keys(fresh.stats).map(key => [key, count(rawStats[key])])),
    achievements: strings(input.achievements, 50), completedRunIds: strings(input.completedRunIds),
  };
}
export function loadProfile(storage) {
  try {
    const store = storage ?? globalThis.localStorage;
    const raw = store?.getItem(PROFILE_KEY);
    return raw ? sanitiseProfile(JSON.parse(raw)) : freshProfile();
  } catch { return freshProfile(); }
}
export function saveProfile(profile, storage) {
  try {
    const store = storage ?? globalThis.localStorage;
    if (!store) return false;
    store.setItem(PROFILE_KEY, JSON.stringify(sanitiseProfile(profile)));
    return true;
  } catch { return false; }
}
export const ACHIEVEMENTS = [
  { id: 'first-dive', name: 'First descent', description: 'Complete an expedition.' },
  { id: 'clean-seven', name: 'Flawless seven', description: 'Answer all seven questions correctly.' },
  { id: 'deep-diver', name: 'Into the abyss', description: 'Reach 2,500 m in one run.' },
  { id: 'abyss-walker', name: 'Voidwalker', description: 'Reach 4,000 m in one run.' },
  { id: 'mythic-finder', name: 'Myth seeker', description: 'Discover a Mythic answer.' },
  { id: 'streak-master', name: 'Unbroken', description: 'Build a seven-answer streak.' },
  { id: 'collector', name: 'Lore collector', description: 'Discover 25 different answers.' },
];
function achievementIds(profile) {
  const checks = [profile.runs >= 1, profile.stats.perfectRuns >= 1,
    Math.max(...Object.values(profile.bests)) >= 2500, Math.max(...Object.values(profile.bests)) >= 4000,
    profile.stats.mythic >= 1, profile.stats.bestStreak >= 7, profile.discoveries.length >= 25];
  return ACHIEVEMENTS.filter((_, i) => checks[i]).map(a => a.id);
}
export function earnedXp(game) {
  if (!game?.log?.length) return 0;
  return 50 + game.log.filter(row => row.correct).length * 35 + Math.min(250, Math.floor(game.depth / 50));
}
/** Pure and idempotent: React can repeat this transition without doubling rewards. */
export function completeRun(oldProfile, game) {
  if (!game || game.status !== 'complete' || !MODES.includes(game.mode)) return oldProfile;
  const profile = sanitiseProfile(oldProfile);
  if (profile.completedRunIds.includes(game.id)) return oldProfile;
  // An empty endless run is not an XP-farming expedition.
  if (!game.log.length) return oldProfile;
  const correctRows = game.log.filter(row => row.correct);
  const xp = earnedXp(game);
  const p = {
    ...profile, xp: profile.xp + xp, runs: profile.runs + 1,
    bests: { ...profile.bests, [game.mode]: Math.max(profile.bests[game.mode] || 0, game.depth) },
    relics: [...new Set([...profile.relics, ...game.newRelics])],
    discoveries: [...new Set([...profile.discoveries, ...correctRows.map(row => row.entityId).filter(Boolean)])],
    completedRunIds: [game.id, ...profile.completedRunIds].slice(0, 5000),
    history: [{ id: game.id, mode: game.mode, category: game.category, date: game.day, depth: game.depth,
      correct: game.correct, answered: game.log.length, seed: game.seed, bestStreak: game.bestStreak }, ...profile.history].slice(0, 30),
    daily: { ...profile.daily },
    stats: {
      answered: profile.stats.answered + game.log.length,
      correct: profile.stats.correct + correctRows.length,
      bestStreak: Math.max(profile.stats.bestStreak, game.bestStreak),
      mythic: profile.stats.mythic + correctRows.filter(row => row.tier === 5).length,
      perfectRuns: profile.stats.perfectRuns + Number(game.mode !== 'endless' && game.log.length === 7 && game.correct === 7),
    },
  };
  if (game.mode === 'daily') {
    const previous = profile.daily[game.day];
    if (!previous || game.depth > previous.depth || (game.depth === previous.depth && game.correct > previous.correct)) {
      p.daily[game.day] = { depth: game.depth, correct: game.correct };
    }
  }
  p.achievements = [...new Set([...profile.achievements, ...achievementIds(p)])];
  return p;
}
