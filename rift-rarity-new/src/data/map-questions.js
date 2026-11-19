const drake = "Name the elemental drake.";
const monster = "Name the neutral monster or its camp.";
const plant = "Name the base jungle plant.";

// Dragon soul effects: Riot patch 9.23 and the Rise of the Elements gameplay preview.
// Chemtech and Hextech terrain: Riot patches 12.22 and 11.23, respectively.
// Jungle mechanics: Riot's 2017 Season Update and patches 12.22, 14.1, and 26.1.
export const mapQuestions = [
  {
    id: "blue-buff",
    prompt: "Which jungle monster grants the Crest of Insight?",
    rule: monster,
    explanation: "Blue Sentinel grants Crest of Insight, commonly called blue buff.",
    answerIds: ["blue-sentinel"],
  },
  {
    id: "chemtech-plants",
    prompt: "Which drake's version of the Rift makes fruit grant a shield and Blast Cones launch units farther?",
    rule: drake,
    explanation: "The Chemtech Rift upgrades the jungle plants. Its fruit grants a shield, and its Blast Cones knock units farther.",
    answerIds: ["chemtech-drake"],
  },
  {
    id: "cloud-ultimate",
    prompt: "Which drake's Dragon Soul gives you an extra burst of move speed after you cast your ultimate?",
    rule: drake,
    explanation: "Cloud Soul grants move speed, with a larger boost after an ultimate cast.",
    answerIds: ["cloud-drake"],
  },
  {
    id: "elder-execute",
    prompt: "Which neutral objective's temporary buff can execute low-health enemy champions?",
    rule: "Name the monster that grants the buff.",
    explanation: "Elder Dragon grants a short-lived burn effect that can execute enemy champions below its health threshold.",
    answerIds: ["elder-dragon"],
  },
  {
    id: "herald-eye",
    prompt: "Which epic monster takes extra damage when you attack the eye on its back?",
    rule: "Name the monster on Summoner's Rift.",
    explanation: "Rift Herald's exposed rear eye is a weak point. Position behind it to land the hit.",
    answerIds: ["rift-herald"],
  },
  {
    id: "hextech-gates",
    prompt: "Which drake's terrain adds paired gates you can channel through to cross the jungle?",
    rule: drake,
    explanation: "The Hextech Rift adds pairs of Hexgates for fast travel across the map.",
    answerIds: ["hextech-drake"],
  },
  {
    id: "honeyfruit-heal",
    prompt: "Which plant drops pickups that restore both health and mana?",
    rule: plant,
    explanation: "Attacking Honeyfruit scatters fruit on the ground. Walk over the pieces to restore health and mana.",
    answerIds: ["honeyfruit"],
  },
  {
    id: "krug-split",
    prompt: "Which jungle camp's large and medium monsters break apart into smaller monsters when killed?",
    rule: monster,
    explanation: "The Ancient Krug and the medium Krug split into Mini Krugs on death.",
    answerIds: ["krugs"],
  },
  {
    id: "late-camp-spawn",
    prompt: "In patch 26.1, which standard camp first spawns at 1:07, twelve seconds after the buff camps?",
    rule: "Name either camp that fits. Use the regular Summoner's Rift queue.",
    explanation: "Krugs and Gromp first spawn at 1:07 in patch 26.1. The buff camps first spawn at 0:55.",
    answerIds: ["gromp", "krugs"],
  },
  {
    id: "mountain-shield",
    prompt: "Which drake's Dragon Soul gives you a shield that returns after you go a few seconds without taking damage?",
    rule: drake,
    explanation: "Mountain Soul restores its shield after a short period without taking damage.",
    answerIds: ["mountain-drake"],
  },
  {
    id: "scryers-pollen",
    prompt: "Which jungle plant releases a cone of vision away from the champion who strikes it?",
    rule: plant,
    explanation: "Scryer's Bloom sends out pollen that reveals targets along its path.",
    answerIds: ["scryers-bloom"],
  },
  {
    id: "voidmite-siege",
    prompt: "Which epic camp can earn your team allied Voidmites that help attack enemy turrets?",
    rule: "Name the camp you defeat to earn the reward.",
    explanation: "Taking enough Void Grubs earns Voidmites that join your team's siege.",
    answerIds: ["void-grubs"],
  },
].map(({ id, prompt, rule, explanation, answerIds }) => ({
  id: `m-niche-${id}`,
  category: "map",
  prompt,
  rule,
  hint: rule,
  explanation,
  answerIds: answerIds.map((id) => `map:${id}`),
}));
