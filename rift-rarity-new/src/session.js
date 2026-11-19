/** Deterministic expedition transitions. The UI supplies performance.now() before dispatch. */
import { CATALOG, QUESTIONS, CONTENT_VERSION } from "./data/content.js";
import {
  chooseQuestions,
  dailyKey,
  hashSeed,
  resolveInput,
  award,
  getEntity,
  BIOMES,
} from "./engine.js";

export const TURN_MS = 25_000;
export const MODES = ["classic", "daily", "endless", "practice"];
function clock(now) {
  if (!Number.isFinite(now) || now < 0)
    throw new TypeError("Supply a non-negative monotonic time as options.now.");
  return now;
}
export function newExpedition(mode = "classic", options = {}) {
  if (!MODES.includes(mode)) throw new TypeError("Unknown game mode.");
  const now = clock(options.now);
  const day = options.day || dailyKey();
  const category =
    mode === "daily"
      ? "all"
      : ["champions", "items", "map"].includes(options.category)
        ? options.category
        : "all";
  const seed =
    mode === "daily"
      ? `daily:${CONTENT_VERSION}:${day}`
      : String(options.seed ?? `expedition:${day}:${now}`);
  const bank = options.questions || QUESTIONS;
  const questions = chooseQuestions(
    bank,
    seed,
    mode === "endless" ? bank.length : 7,
    category,
  );
  if (questions.length < 7)
    throw new Error("This category needs at least seven complete questions.");
  const durationMs = mode === "practice" ? 0 : TURN_MS;
  return {
    id: options.id || `${mode}-${hashSeed(seed)}-${Math.round(now * 1000)}`,
    mode,
    category,
    seed,
    day,
    bankVersion: CONTENT_VERSION,
    questions,
    index: 0,
    depth: 0,
    correct: 0,
    streak: 0,
    bestStreak: 0,
    peakCombo: 1,
    lives: 3,
    status: "answering",
    durationMs,
    deadline: durationMs ? now + durationMs : null,
    lastNow: now,
    cycle: 0,
    log: [],
    last: null,
    notice: null,
    newRelics: [],
  };
}
function examplesFor(question) {
  return question.answerIds
    .map((id) => getEntity(id))
    .filter(Boolean)
    .sort(
      (a, b) => (b.tier || 1) - (a.tier || 1) || a.name.localeCompare(b.name),
    )
    .slice(0, 5)
    .map((entity) => ({ id: entity.id, name: entity.name, tier: entity.tier }));
}
export function settle(game, value = "", options = {}) {
  if (!game || game.status !== "answering") return game;
  const now = clock(options.now);
  const question = game.questions[game.index];
  const expired = game.deadline !== null && now >= game.deadline;
  // An early timer event cannot force timeout before the authoritative deadline.
  if (options.timedOut && !expired) return game;
  if (now < game.lastNow)
    return {
      ...game,
      notice: {
        kind: "clock",
        message:
          "Timing changed. Please return to shore and start a fresh dive.",
      },
    };
  const input = String(value ?? "")
    .trim()
    .slice(0, 80);
  const resolved = expired || !input
    ? null
    : resolveInput(input, question.category, CATALOG, { allowApproximate: false });
  const entity = resolved?.entity || null;
  const correct = Boolean(entity && question.answerIds.includes(entity.id));
  if (!expired && input && !correct) {
    return {
      ...game,
      lastNow: now,
      notice: { kind: "retry", message: "Try again" },
    };
  }
  const streak = correct ? game.streak + 1 : 0;
  const score = correct ? award(entity, streak) : null;
  const depth = game.depth + (score?.depth || 0);
  const kind = correct ? "correct" : expired ? "timeout" : "skipped";
  const explanation =
    question.explanation ||
    question.rule ||
    "Check the question’s scope before your next guess.";
  let detail;
  if (correct)
    detail = `${resolved.corrected ? `Recognised as ${entity.name}. ` : ""}${score.base} m base × ${score.multiplier.toFixed(1)} streak bonus. ${explanation}`;
  else if (expired)
    detail = "Time is up. Your existing depth is safe; the streak resets.";
  else
    detail =
      "Question skipped. Your existing depth is safe; the streak resets.";
  const last = {
    questionId: question.id,
    question: question.prompt,
    category: question.category,
    input,
    entityId: entity?.id || null,
    answer: entity?.name || input || "—",
    rarity:
      score?.tierName ||
      (expired ? "Time expired" : "Skipped"),
    gain: score?.depth || 0,
    tier: score?.tier || 0,
    detail,
    correct,
    kind,
    corrected: Boolean(correct && resolved.corrected),
    examples: examplesFor(question),
  };
  // Unlock every crossed milestone, including those skipped by a large reward.
  const newRelics = [
    ...new Set([
      ...game.newRelics,
      ...BIOMES.filter((b) => correct && depth >= b.min).map((b) => b.key),
    ]),
  ];
  return {
    ...game,
    depth,
    streak,
    bestStreak: Math.max(game.bestStreak, streak),
    correct: game.correct + Number(correct),
    peakCombo: Math.max(game.peakCombo, score?.multiplier || 1),
    lives:
      game.mode === "endless" && !correct
        ? Math.max(0, game.lives - 1)
        : game.lives,
    status: "revealing",
    last,
    log: [...game.log, last],
    notice: null,
    newRelics,
    lastNow: now,
  };
}
export function nextQuestion(game, options = {}) {
  if (!game || game.status !== "revealing") return game;
  const now = clock(options.now);
  const index = game.index + 1;
  if (
    (game.mode === "endless" && game.lives <= 0) ||
    (game.mode !== "endless" && index >= game.questions.length)
  ) {
    return { ...game, status: "complete", notice: null, lastNow: now };
  }
  let questions = game.questions,
    cycle = game.cycle;
  if (index >= questions.length) {
    cycle++;
    const fresh = chooseQuestions(
      QUESTIONS,
      `${game.seed}:cycle:${cycle}`,
      QUESTIONS.length,
      game.category,
    );
    // Avoid the same prompt across an endless-cycle boundary where possible.
    if (fresh.length > 1 && fresh[0].id === questions.at(-1).id)
      [fresh[0], fresh[1]] = [fresh[1], fresh[0]];
    questions = [...questions, ...fresh];
  }
  return {
    ...game,
    questions,
    cycle,
    index,
    status: "answering",
    last: null,
    notice: null,
    deadline: game.durationMs ? now + game.durationMs : null,
    lastNow: now,
  };
}
export function finishRun(game) {
  if (!game || game.status === "complete" || game.mode !== "endless")
    return game;
  return { ...game, status: "complete", notice: null };
}
