const BASE_STATS_SCOPE = "Use the shop item's listed base stats. Bonuses from passives, stacks, and actives do not count.";
const RECIPE_SCOPE = "Only direct recipe components count. Ignore components used to build other ingredients.";

const grantsStats = (...stats) => (item) => stats.every((stat) => item.stats[stat] > 0);
const hasHaste = (item) => /\bAbility Haste\b/i.test(item.statsText);

const rules = [
  {
    id: "ad-armor",
    prompt: "Name an item that grants both attack damage and armor.",
    rule: BASE_STATS_SCOPE,
    explanation: "Both attack damage and armor must appear as base stats on the same item.",
    matches: grantsStats("FlatPhysicalDamageMod", "FlatArmorMod"),
  },
  {
    id: "ad-magic-resist",
    prompt: "Name an item that grants both attack damage and magic resist.",
    rule: BASE_STATS_SCOPE,
    explanation: "A shield against magic damage does not qualify by itself. The item must also grant flat magic resist.",
    matches: grantsStats("FlatPhysicalDamageMod", "FlatSpellBlockMod"),
  },
  {
    id: "ap-armor",
    prompt: "Name an item that grants both ability power and armor.",
    rule: BASE_STATS_SCOPE,
    explanation: "Both ability power and armor must appear as base stats on the same item.",
    matches: grantsStats("FlatMagicDamageMod", "FlatArmorMod"),
  },
  {
    id: "armor-mr-haste",
    prompt: "Name an item that grants armor, magic resist, and ability haste.",
    rule: BASE_STATS_SCOPE,
    explanation: "Look for all three bonuses in the same stat block. Armor and magic resist alone are insufficient.",
    matches: (item) => item.stats.FlatArmorMod > 0 && item.stats.FlatSpellBlockMod > 0 && hasHaste(item),
  },
  {
    id: "base-omnivamp",
    prompt: "Name an item with omnivamp in its base stats.",
    rule: BASE_STATS_SCOPE,
    explanation: "Omnivamp and life steal are separate stats in the shop. Check for omnivamp on the stat line.",
    matches: (item) => /\bOmnivamp\b/i.test(item.statsText),
  },
  {
    id: "cost-1300-componentless",
    prompt: "Which item has a listed cost of 1,300 gold and no recipe components?",
    rule: "Use the listed total cost and the direct recipe in the bundled patch.",
    explanation: "B. F. Sword is listed at 1,300 gold and has no component items in its recipe.",
    matches: (item) => item.cost === 1300 && item.from.length === 0,
  },
  {
    id: "cost-900-haste",
    prompt: "Name an item with a listed total cost of 900 gold and base ability haste.",
    rule: "Use the catalogue's listed total cost and base stats.",
    explanation: "Some item descriptions show a smaller combine fee after ingredients are owned. The listed total cost includes the ingredients.",
    matches: (item) => item.cost === 900 && hasHaste(item),
  },
  {
    id: "health-attack-speed",
    prompt: "Name an item that grants both health and attack speed.",
    rule: BASE_STATS_SCOPE,
    explanation: "Temporary attack speed from a passive or active is excluded. Both bonuses must appear on the base stat line.",
    matches: grantsStats("FlatHPPoolMod", "PercentAttackSpeedMod"),
  },
  {
    id: "mana-armor",
    prompt: "Name an item that grants both maximum mana and armor.",
    rule: BASE_STATS_SCOPE,
    explanation: "The item must raise the size of the mana pool. Mana regeneration does not qualify.",
    matches: grantsStats("FlatMPPoolMod", "FlatArmorMod"),
  },
  {
    id: "recipe-double-dagger",
    prompt: "Name an item that uses two Daggers in its direct recipe.",
    rule: RECIPE_SCOPE,
    explanation: "Two separate copies of Dagger must appear at the top level of the recipe.",
    matches: (item) => item.from.filter((component) => component === "item:1042").length === 2,
  },
  {
    id: "recipe-executioners-calling",
    prompt: "Name an item built directly from Executioner's Calling.",
    rule: RECIPE_SCOPE,
    explanation: "Chempunk Chainsword and Mortal Reminder both use Executioner's Calling directly.",
    matches: (item) => item.from.includes("item:3123"),
  },
  {
    id: "recipe-haunting-guise",
    prompt: "Name an item that uses Haunting Guise as a direct ingredient.",
    rule: RECIPE_SCOPE,
    explanation: "Bloodletter's Curse, Liandry's Torment, and Riftmaker all have Haunting Guise in their direct recipes.",
    matches: (item) => item.from.includes("item:3147"),
  },
  {
    id: "recipe-kindlegem-aether-wisp",
    prompt: "Which item builds directly from both Kindlegem and Aether Wisp?",
    rule: RECIPE_SCOPE,
    explanation: "Cosmic Drive combines Kindlegem, Aether Wisp, and Fiendish Codex.",
    matches: (item) => item.from.includes("item:3067") && item.from.includes("item:3113"),
  },
  {
    id: "recipe-last-whisper",
    prompt: "Name an item that uses Last Whisper as a direct ingredient.",
    rule: RECIPE_SCOPE,
    explanation: "Last Whisper is used directly by Lord Dominik's Regards, Mortal Reminder, and Serylda's Grudge.",
    matches: (item) => item.from.includes("item:3035"),
  },
];

export function itemQuestions(catalog) {
  const shop = catalog.filter((entity) => entity.category === "items" && entity.shop);
  return rules.map(({ id, prompt, rule, explanation, matches }) => ({
    id: `i-niche-${id}`,
    category: "items",
    prompt,
    rule,
    hint: rule,
    explanation,
    answerIds: shop.filter(matches).map((item) => item.id).sort(),
  }));
}
