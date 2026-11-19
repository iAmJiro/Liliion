// Ability clues use Riot's champion pages. Stat, class and title clues use the bundled catalogue.
const abilityQuestions = [
  {
    id: "bastion",
    champion: "Taric",
    prompt: "Whose spells can also be cast from the position of an ally linked by Bastion?",
    rule: "Identify the champion who creates the link.",
    hint: "Bastion is a basic ability.",
    explanation: "Taric shields and links to an ally with Bastion, then his spells can also originate from that ally.",
  },
  {
    id: "chimes",
    champion: "Bard",
    prompt: "Which champion picks up chimes that grant experience and restore mana?",
    rule: "Use the champion's own passive.",
    hint: "The chimes appear around the map.",
    explanation: "Bard picks up chimes through Traveler's Call. They also boost his out-of-combat move speed.",
  },
  {
    id: "experience-gift",
    champion: "Zilean",
    prompt: "Which champion can give an ally stored experience to finish that ally's level-up?",
    rule: "The champion directly grants experience from their own passive.",
    hint: "The ally must be near their next level.",
    explanation: "Zilean stores experience with Time In A Bottle. When he grants enough to level an ally up, he gains the same amount.",
  },
  {
    id: "groves",
    champion: "Ivern",
    prompt: "Who plants groves at jungle camps and collects their rewards by freeing the monsters?",
    rule: "The clue refers to standard non-epic camps on Summoner's Rift.",
    hint: "The grove grows before the camp can be freed.",
    explanation: "Friend of the Forest allows Ivern to prepare a camp and free its monsters once the grove matures.",
  },
  {
    id: "hostile-takeover",
    champion: "Renata",
    prompt: "Whose ultimate can force enemy champions to basic-attack their own teammates?",
    rule: "Name the champion who casts the ultimate.",
    hint: "Affected enemies also gain attack speed.",
    explanation: "Renata Glasc's Hostile Takeover berserks affected enemies, turning their basic attacks against nearby allies.",
  },
  {
    id: "remount",
    champion: "Kled",
    prompt: "Which champion builds Courage while dismounted and remounts when the resource is full?",
    rule: "Name the champion who rides the mount.",
    hint: "Fighting enemies helps recover Courage.",
    explanation: "Kled dismounts when Skaarl runs out of health. At full Courage, Skaarl returns and Kled remounts.",
  },
  {
    id: "spirit-damage",
    champion: "Illaoi",
    prompt: "Who pulls out a spirit that echoes part of the damage it takes back to the champion it came from?",
    rule: "Name the champion who pulls out the spirit.",
    hint: "The spirit is created by a basic ability.",
    explanation: "Illaoi's Test of Spirit extracts a spirit that relays some of the damage it takes to the original target.",
  },
  {
    id: "terrashape",
    champion: "Qiyana",
    prompt: "Who uses Terrashape to dash and imbue their weapon with an element?",
    rule: "Use the champion's base ability kit.",
    hint: "The enchantment empowers the champion's attacks and abilities.",
    explanation: "Qiyana enchants her weapon with Terrashape, which gives her attacks and abilities bonus damage while enchanted.",
  },
];

export function championQuestions(catalog) {
  const champions = catalog.filter((entity) => entity.category === "champions");
  const topAttackDamage = Math.max(...champions.map((champion) => champion.stats.attackdamage));
  const topAttackSpeed = Math.max(...champions.map((champion) => champion.stats.attackspeed));
  const baseStats = "Uses the listed base stats in the bundled Data Dragon snapshot.";
  const titles = "Use the official title shown in the bundled champion catalogue.";
  const catalogueQuestions = [
    {
      id: "base-armor",
      prompt: "Name a champion with at least 40 base armor.",
      rule: baseStats,
      hint: "Use the value before armor growth.",
      explanation: "The threshold is 40 armor at level one, before bonus armor.",
      matches: (champion) => champion.stats.armor >= 40,
    },
    {
      id: "base-attack-damage-leaders",
      prompt: "Name a champion tied for the highest base attack damage.",
      rule: baseStats,
      hint: "Several champions share the top value.",
      explanation: `The highest listed base attack damage is ${topAttackDamage}.`,
      matches: (champion) => champion.stats.attackdamage === topAttackDamage,
    },
    {
      id: "base-attack-speed-leader",
      prompt: "Who has the highest listed base attack speed?",
      rule: baseStats,
      hint: "Attack speed growth per level is a separate stat.",
      explanation: `The highest listed base attack speed is ${topAttackSpeed} attacks per second.`,
      matches: (champion) => champion.stats.attackspeed === topAttackSpeed,
    },
    {
      id: "resource-free-tank",
      prompt: "Name a champion tagged Tank whose listed resource is None.",
      rule: "The resource and class tag both come from the bundled Data Dragon snapshot.",
      hint: "Focus on champions without a named resource bar.",
      explanation: "Dr. Mundo, Garen and Zac each have Riot's Tank tag and a resource listed as None.",
      matches: (champion) => champion.tags.includes("Tank") && champion.resource === "None",
    },
    {
      id: "short-range-mage-support",
      prompt: "Name a champion tagged both Mage and Support with less than 500 base attack range.",
      rule: "Uses the bundled Data Dragon class tags and listed base attack range.",
      hint: "Both class tags must appear on the same champion.",
      explanation: "Fiddlesticks, Ivern, Morgana and Yuumi meet both class requirements and have a listed base attack range below 500.",
      matches: (champion) =>
        champion.tags.includes("Mage") && champion.tags.includes("Support") && champion.stats.attackrange < 500,
    },
    {
      id: "slow-short-range",
      prompt: "Name a champion with at most 200 base attack range and at most 330 base movement speed.",
      rule: baseStats,
      hint: "Both thresholds include their endpoint.",
      explanation: "The snapshot lists six champions meeting both limits. Ability, item and form bonuses are outside the listed values.",
      matches: (champion) => champion.stats.attackrange <= 200 && champion.stats.movespeed <= 330,
    },
    {
      id: "title-sands",
      prompt: "Which champion has an official title ending in “of the Sands”?",
      rule: titles,
      hint: "The phrase must appear at the end of the title.",
      explanation: "Azir is the Emperor of the Sands, Nasus is the Curator of the Sands, and Renekton is the Butcher of the Sands.",
      matches: (champion) => champion.title.endsWith("of the Sands"),
    },
    {
      id: "title-twilight",
      prompt: "Name a champion whose official title ends in “of Twilight”.",
      rule: titles,
      hint: "Think of the champion's title on the roster.",
      explanation: "Shen is the Eye of Twilight and Zoe is the Aspect of Twilight.",
      matches: (champion) => champion.title.endsWith("of Twilight"),
    },
  ];

  return [
    ...abilityQuestions.map(({ champion, ...question }) => ({
      ...question,
      answerIds: [`champion:${champion}`],
    })),
    ...catalogueQuestions.map(({ matches, ...question }) => ({
      ...question,
      answerIds: champions.filter(matches).map((champion) => champion.id).sort(),
    })),
  ].map((question) => ({
    ...question,
    id: `c-niche-${question.id}`,
    category: "champions",
  }));
}
