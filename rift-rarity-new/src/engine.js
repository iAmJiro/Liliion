/** Pure catalogue lookup and scoring rules. No DOM, timers or network requests. */
import { CATALOG } from "./data/content.js";

export const TIER_NAMES = ["Common", "Uncommon", "Rare", "Epic", "Mythic"];
export const BASE_DEPTH = [100, 200, 350, 550, 800];
export const BIOMES = [
  {
    min: 0,
    key: "shoals",
    name: "SUNLIT SHOALS",
    relic: "Pearl of the Shoals",
    color: "#61dadd",
  },
  {
    min: 1000,
    key: "temple",
    name: "SUNKEN TEMPLE",
    relic: "Temple Compass",
    color: "#65b9ee",
  },
  {
    min: 2500,
    key: "forest",
    name: "ABYSSAL FOREST",
    relic: "Luminous Frond",
    color: "#8aa8ff",
  },
  {
    min: 4000,
    key: "trench",
    name: "VOID TRENCH",
    relic: "Voidglass Shard",
    color: "#c08cff",
  },
  {
    min: 6000,
    key: "celestial",
    name: "CELESTIAL DEEP",
    relic: "Starlit Crown",
    color: "#f1cf79",
  },
];
export const norm = (value) =>
  String(value ?? "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]/g, "");

export function hashSeed(value) {
  let n = 2166136261;
  for (const char of String(value)) {
    n ^= char.charCodeAt(0);
    n = Math.imul(n, 16777619);
  }
  return n >>> 0;
}
export function mulberry32(seed) {
  return () => {
    let n = (seed += 0x6d2b79f5);
    n = Math.imul(n ^ (n >>> 15), n | 1);
    n ^= n + Math.imul(n ^ (n >>> 7), n | 61);
    return ((n ^ (n >>> 14)) >>> 0) / 4294967296;
  };
}
export function shuffle(values, random) {
  const result = [...values];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
export function chooseQuestions(bank, seed, count = 7, category = "all") {
  const rng = mulberry32(hashSeed(seed));
  const available = bank.filter(
    (q) => category === "all" || q.category === category,
  );
  const chosen = [];
  if (count === 7 && category === "all") {
    for (const [group, amount] of [
      ["champions", 3],
      ["items", 2],
      ["map", 2],
    ]) {
      chosen.push(
        ...shuffle(
          available.filter((q) => q.category === group),
          rng,
        ).slice(0, amount),
      );
    }
  }
  const ids = new Set(chosen.map((q) => q.id));
  const remaining = shuffle(
    available.filter((q) => !ids.has(q.id)),
    rng,
  );
  chosen.push(...remaining.slice(0, Math.max(0, count - chosen.length)));
  return shuffle(chosen, rng);
}

const catalogIndices = new WeakMap();
function indexFor(catalog) {
  if (catalogIndices.has(catalog)) return catalogIndices.get(catalog);
  const exact = new Map(),
    aliases = new Map(),
    byId = new Map();
  const append = (map, key, entity) => {
    if (!key) return;
    if (!map.has(key)) map.set(key, []);
    if (!map.get(key).some((x) => x.id === entity.id))
      map.get(key).push(entity);
  };
  for (const entity of catalog) {
    byId.set(entity.id, entity);
    append(exact, norm(entity.name), entity);
    for (const alias of entity.aliases || [])
      append(aliases, norm(alias), entity);
  }
  const index = { exact, aliases, byId };
  catalogIndices.set(catalog, index);
  return index;
}
export function getEntity(id, catalog = CATALOG) {
  return indexFor(catalog).byId.get(id) || null;
}

/** Optimal-string-alignment distance: adjacent transpositions count as one typo. */
export function editDistance(a, b, max = Infinity) {
  if (Math.abs(a.length - b.length) > max) return max + 1;
  const rows = [Array.from({ length: b.length + 1 }, (_, j) => j)];
  for (let i = 1; i <= a.length; i++) {
    const row = [i];
    for (let j = 1; j <= b.length; j++) {
      row[j] = Math.min(
        rows[i - 1][j] + 1,
        row[j - 1] + 1,
        rows[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1),
      );
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
        row[j] = Math.min(row[j], rows[i - 2][j - 2] + 1);
      }
    }
    rows.push(row);
  }
  return rows[a.length][b.length];
}
const unresolved = (status, candidates = []) => ({
  status,
  entity: null,
  corrected: false,
  candidates,
});
const matched = (entity, corrected, method) => ({
  status: "matched",
  entity,
  corrected,
  candidates: [],
  method,
});

/** Resolve identity first. Eligibility belongs to the question, never to spelling correction. */
export function resolveInput(
  input,
  category = "all",
  catalog = CATALOG,
  { allowApproximate = true } = {},
) {
  const key = norm(input);
  if (!key || key.length > 80) return unresolved("unknown");
  const { exact, aliases } = indexFor(catalog);
  // A real name ALWAYS wins over aliases or fuzzy matches, even in another category.
  for (const [map, method] of [
    [exact, "exact"],
    [aliases, "alias"],
  ]) {
    const found = map.get(key);
    if (found?.length === 1)
      return matched(
        found[0],
        method === "alias" && norm(found[0].name) !== key,
        method,
      );
    if (found?.length > 1) return unresolved("ambiguous", [...found]);
  }
  // Short guesses such as V, Vi and Jax are only recognised by exact identity/alias.
  if (!allowApproximate || key.length < 4) return unresolved("unknown");
  const pool = catalog.filter(
    (e) => category === "all" || e.category === category,
  );
  const prefixes = pool.filter((e) => norm(e.name).startsWith(key));
  if (prefixes.length === 1) return matched(prefixes[0], true, "prefix");
  if (prefixes.length > 1) return unresolved("ambiguous", prefixes.slice(0, 6));
  const maxDistance = key.length >= 8 ? 2 : 1;
  const scored = pool
    .map((entity) => {
      // Do not fuzz short nicknames; explicit aliases remain generously accepted.
      const names = [
        entity.name,
        ...(entity.aliases || []).filter((alias) => norm(alias).length >= 5),
      ];
      const distances = names.map((name) => {
        const canonical = norm(name);
        const distance = editDistance(key, canonical, maxDistance);
        return distance / Math.max(key.length, canonical.length) <= 0.25
          ? distance
          : Infinity;
      });
      return { entity, distance: Math.min(...distances) };
    })
    .filter((x) => x.distance <= maxDistance)
    .sort(
      (a, b) =>
        a.distance - b.distance || a.entity.name.localeCompare(b.entity.name),
    );
  if (!scored.length) return unresolved("unknown");
  const closest = scored.filter((x) => x.distance === scored[0].distance);
  if (closest.length > 1)
    return unresolved(
      "ambiguous",
      closest.slice(0, 6).map((x) => x.entity),
    );
  return matched(closest[0].entity, true, "typo");
}

/** Name assist searches the entire category, not the answers to the current question. */
export function suggestions(
  input,
  category = "all",
  catalog = CATALOG,
  limit = 6,
) {
  const key = norm(input);
  if (key.length < 3 || key.length > 80 || indexFor(catalog).exact.has(key)) {
    return [];
  }
  const maxDistance = key.length >= 8 ? 2 : 1;
  return catalog
    .filter((entity) => category === "all" || entity.category === category)
    .map((entity) => {
      const name = norm(entity.name);
      const distance = name.length < 3 ? Infinity : editDistance(key, name, maxDistance);
      return { entity, distance };
    })
    .filter(({ distance }) => distance <= maxDistance)
    .sort((a, b) => a.distance - b.distance || a.entity.name.localeCompare(b.entity.name))
    .slice(0, limit)
    .map(({ entity }) => entity);
}

/** Rarity is an editorial knowledge score, not a claim about live player pick rates. */
export function rarityFor(entity) {
  const tier = entity?.tier ?? entity?.priorTier ?? 2;
  return Number.isInteger(tier) ? Math.max(1, Math.min(5, tier)) : 2;
}
export function comboMultiplier(streak) {
  return Math.min(1.4, 1 + Math.max(0, streak - 1) * 0.1);
}
export function award(entity, streak) {
  const tier = rarityFor(entity),
    multiplier = comboMultiplier(streak);
  return {
    tier,
    tierName: TIER_NAMES[tier - 1],
    base: BASE_DEPTH[tier - 1],
    multiplier,
    depth: Math.round(BASE_DEPTH[tier - 1] * multiplier),
  };
}
export function biomeFor(depth) {
  return [...BIOMES].reverse().find((b) => depth >= b.min) || BIOMES[0];
}
export function dailyKey(now = new Date()) {
  return now.toISOString().slice(0, 10);
}
export function levelFor(xp) {
  return Math.floor(Math.sqrt(Math.max(0, xp) / 150)) + 1;
}
export function formatDepth(depth) {
  return `${new Intl.NumberFormat("en-NZ").format(Math.round(depth))} m`;
}
export function validateBank(bank, catalog = CATALOG) {
  const errors = [],
    ids = new Set();
  for (const q of bank) {
    if (!q.id || ids.has(q.id))
      errors.push(`Duplicate or missing question id: ${q.id}`);
    ids.add(q.id);
    if (!["champions", "items", "map"].includes(q.category))
      errors.push(`Invalid category: ${q.id}`);
    if (!q.prompt || !Array.isArray(q.answerIds) || !q.answerIds.length)
      errors.push(`Empty question: ${q.id}`);
    if (new Set(q.answerIds).size !== q.answerIds.length)
      errors.push(`Duplicate answers: ${q.id}`);
    for (const id of q.answerIds || []) {
      const entity = getEntity(id, catalog);
      if (!entity || entity.category !== q.category)
        errors.push(`Invalid answer ${id} for ${q.id}`);
    }
  }
  return errors;
}
