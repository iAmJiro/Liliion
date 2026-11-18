// Generated offline by scripts/update-data.mjs. Do not hand-edit.
export const CONTENT_VERSION = "rr4-ddragon-16.23.1-1";
export const CONTENT_META = {
  "patch": "16.23.1",
  "champions": 173,
  "items": 210,
  "map": 36,
  "questions": 80,
  "sourceUrls": [
    "https://developer.riotgames.com/docs/lol#data-dragon",
    "https://ddragon.leagueoflegends.com/cdn/16.23.1/data/en_US/champion.json",
    "https://ddragon.leagueoflegends.com/cdn/16.23.1/data/en_US/item.json",
    "https://www.leagueoflegends.com/en-us/how-to-play/",
    "https://www.leagueoflegends.com/en-gb/news/game-updates/patch-26-1-notes/"
  ],
  "rarityModel": "Editorial familiarity bands; not live pick rates or player-answer statistics.",
  "itemScope": "Base Data Dragon map-11 shop records, canonical-name deduplication, 3 named auto-upgrades, known ARAM-only Guardian entries and Cappa Juice excluded. Published data is a versioned reference, not a claim of real-time shop parity."
};
export const CATALOG = [
  {
    "id": "champion:Aatrox",
    "name": "Aatrox",
    "category": "champions",
    "aliases": [],
    "tier": 2,
    "tags": [
      "Fighter"
    ],
    "resource": "Blood Well",
    "title": "the Darkin Blade",
    "stats": {
      "hp": 650,
      "hpperlevel": 114,
      "mp": 0,
      "mpperlevel": 0,
      "movespeed": 345,
      "armor": 38,
      "armorperlevel": 4.8,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 175,
      "hpregen": 3,
      "hpregenperlevel": 0.5,
      "mpregen": 0,
      "mpregenperlevel": 0,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 60,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.5,
      "attackspeed": 0.651
    },
    "image": "/assets/champions/Aatrox.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Aatrox.png"
  },
  {
    "id": "item:8020",
    "name": "Abyssal Mask",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Health",
      "SpellBlock",
      "CooldownReduction",
      "MagicResist",
      "AbilityHaste"
    ],
    "stats": {
      "FlatSpellBlockMod": 45,
      "FlatHPPoolMod": 350
    },
    "statsText": "350 Health 45 Magic Resist 15 Ability Haste",
    "cost": 2650,
    "shop": true,
    "from": [
      "item:3067",
      "item:1057"
    ],
    "image": "/assets/items/8020.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/8020.png"
  },
  {
    "id": "item:2522",
    "name": "Actualizer",
    "category": "items",
    "aliases": [],
    "tier": 5,
    "tags": [
      "SpellDamage",
      "Mana",
      "AbilityHaste"
    ],
    "stats": {
      "FlatMPPoolMod": 300,
      "FlatMagicDamageMod": 90
    },
    "statsText": "90 Ability Power 300 Mana 10 Ability Haste",
    "cost": 2800,
    "shop": true,
    "from": [
      "item:3802",
      "item:1026"
    ],
    "image": "/assets/items/2522.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/2522.png"
  },
  {
    "id": "item:3113",
    "name": "Aether Wisp",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "NonbootsMovement",
      "SpellDamage"
    ],
    "stats": {
      "FlatMagicDamageMod": 30,
      "PercentMovementSpeedMod": 0.04
    },
    "statsText": "30 Ability Power 4% Move Speed",
    "cost": 900,
    "shop": true,
    "from": [
      "item:1052"
    ],
    "image": "/assets/items/3113.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3113.png"
  },
  {
    "id": "champion:Ahri",
    "name": "Ahri",
    "category": "champions",
    "aliases": [],
    "tier": 1,
    "tags": [
      "Mage",
      "Assassin"
    ],
    "resource": "Mana",
    "title": "the Nine-Tailed Fox",
    "stats": {
      "hp": 590,
      "hpperlevel": 104,
      "mp": 418,
      "mpperlevel": 25,
      "movespeed": 330,
      "armor": 21,
      "armorperlevel": 4.2,
      "spellblock": 30,
      "spellblockperlevel": 1.3,
      "attackrange": 550,
      "hpregen": 2.5,
      "hpregenperlevel": 0.6,
      "mpregen": 8,
      "mpregenperlevel": 0.8,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 53,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.2,
      "attackspeed": 0.668
    },
    "image": "/assets/champions/Ahri.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Ahri.png"
  },
  {
    "id": "champion:Akali",
    "name": "Akali",
    "category": "champions",
    "aliases": [],
    "tier": 2,
    "tags": [
      "Assassin"
    ],
    "resource": "Energy",
    "title": "the Rogue Assassin",
    "stats": {
      "hp": 600,
      "hpperlevel": 119,
      "mp": 200,
      "mpperlevel": 0,
      "movespeed": 345,
      "armor": 23,
      "armorperlevel": 4.7,
      "spellblock": 37,
      "spellblockperlevel": 2.05,
      "attackrange": 125,
      "hpregen": 9,
      "hpregenperlevel": 0.9,
      "mpregen": 50,
      "mpregenperlevel": 0,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 62,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 3.2,
      "attackspeed": 0.625
    },
    "image": "/assets/champions/Akali.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Akali.png"
  },
  {
    "id": "champion:Akshan",
    "name": "Akshan",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Marksman",
      "Assassin"
    ],
    "resource": "Mana",
    "title": "the Rogue Sentinel",
    "stats": {
      "hp": 610,
      "hpperlevel": 107,
      "mp": 350,
      "mpperlevel": 40,
      "movespeed": 330,
      "armor": 26,
      "armorperlevel": 4.7,
      "spellblock": 33,
      "spellblockperlevel": 1.1,
      "attackrange": 500,
      "hpregen": 3.75,
      "hpregenperlevel": 0.65,
      "mpregen": 8.2,
      "mpregenperlevel": 0.7,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 52,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 4,
      "attackspeed": 0.638
    },
    "image": "/assets/champions/Akshan.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Akshan.png"
  },
  {
    "id": "champion:Alistar",
    "name": "Alistar",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Tank",
      "Support"
    ],
    "resource": "Mana",
    "title": "the Minotaur",
    "stats": {
      "hp": 685,
      "hpperlevel": 120,
      "mp": 350,
      "mpperlevel": 40,
      "movespeed": 335,
      "armor": 40,
      "armorperlevel": 4.7,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 125,
      "hpregen": 8.5,
      "hpregenperlevel": 0.85,
      "mpregen": 8.5,
      "mpregenperlevel": 0.8,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 62,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.125,
      "attackspeed": 0.625
    },
    "image": "/assets/champions/Alistar.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Alistar.png"
  },
  {
    "id": "champion:Ambessa",
    "name": "Ambessa",
    "category": "champions",
    "aliases": [],
    "tier": 4,
    "tags": [
      "Fighter",
      "Assassin"
    ],
    "resource": "Energy",
    "title": "Matriarch of War",
    "stats": {
      "hp": 630,
      "hpperlevel": 110,
      "mp": 200,
      "mpperlevel": 0,
      "movespeed": 335,
      "armor": 35,
      "armorperlevel": 4.9,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 125,
      "hpregen": 8.5,
      "hpregenperlevel": 0.75,
      "mpregen": 50,
      "mpregenperlevel": 0,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 63,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.5,
      "attackspeed": 0.625
    },
    "image": "/assets/champions/Ambessa.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Ambessa.png"
  },
  {
    "id": "item:1052",
    "name": "Amplifying Tome",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "SpellDamage"
    ],
    "stats": {
      "FlatMagicDamageMod": 20
    },
    "statsText": "20 Ability Power",
    "cost": 400,
    "shop": true,
    "from": [],
    "image": "/assets/items/1052.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/1052.png"
  },
  {
    "id": "champion:Amumu",
    "name": "Amumu",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Tank",
      "Support"
    ],
    "resource": "Mana",
    "title": "the Sad Mummy",
    "stats": {
      "hp": 685,
      "hpperlevel": 94,
      "mp": 285,
      "mpperlevel": 40,
      "movespeed": 335,
      "armor": 33,
      "armorperlevel": 4,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 125,
      "hpregen": 9,
      "hpregenperlevel": 0.85,
      "mpregen": 7.4,
      "mpregenperlevel": 0.55,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 57,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.18,
      "attackspeed": 0.736
    },
    "image": "/assets/champions/Amumu.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Amumu.png"
  },
  {
    "id": "champion:Anivia",
    "name": "Anivia",
    "category": "champions",
    "aliases": [],
    "tier": 4,
    "tags": [
      "Mage"
    ],
    "resource": "Mana",
    "title": "the Cryophoenix",
    "stats": {
      "hp": 550,
      "hpperlevel": 92,
      "mp": 495,
      "mpperlevel": 45,
      "movespeed": 325,
      "armor": 19,
      "armorperlevel": 4.1,
      "spellblock": 30,
      "spellblockperlevel": 1.3,
      "attackrange": 600,
      "hpregen": 5.5,
      "hpregenperlevel": 0.55,
      "mpregen": 8,
      "mpregenperlevel": 0.8,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 51,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 1.68,
      "attackspeed": 0.658
    },
    "image": "/assets/champions/Anivia.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Anivia.png"
  },
  {
    "id": "champion:Annie",
    "name": "Annie",
    "category": "champions",
    "aliases": [],
    "tier": 2,
    "tags": [
      "Mage",
      "Support"
    ],
    "resource": "Mana",
    "title": "the Dark Child",
    "stats": {
      "hp": 560,
      "hpperlevel": 96,
      "mp": 418,
      "mpperlevel": 25,
      "movespeed": 335,
      "armor": 23,
      "armorperlevel": 4,
      "spellblock": 30,
      "spellblockperlevel": 1.3,
      "attackrange": 625,
      "hpregen": 5.5,
      "hpregenperlevel": 0.55,
      "mpregen": 8,
      "mpregenperlevel": 0.8,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 50,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 1.36,
      "attackspeed": 0.61
    },
    "image": "/assets/champions/Annie.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Annie.png"
  },
  {
    "id": "champion:Aphelios",
    "name": "Aphelios",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Marksman"
    ],
    "resource": "Mana",
    "title": "the Weapon of the Faithful",
    "stats": {
      "hp": 600,
      "hpperlevel": 102,
      "mp": 348,
      "mpperlevel": 42,
      "movespeed": 325,
      "armor": 26,
      "armorperlevel": 4.2,
      "spellblock": 33,
      "spellblockperlevel": 1.1,
      "attackrange": 550,
      "hpregen": 3.25,
      "hpregenperlevel": 0.55,
      "mpregen": 6.5,
      "mpregenperlevel": 0.4,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 55,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.1,
      "attackspeed": 0.665
    },
    "image": "/assets/champions/Aphelios.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Aphelios.png"
  },
  {
    "id": "item:3003",
    "name": "Archangel's Staff",
    "category": "items",
    "aliases": [
      "archangels"
    ],
    "tier": 3,
    "tags": [
      "SpellDamage",
      "Mana",
      "AbilityHaste"
    ],
    "stats": {
      "FlatMPPoolMod": 600,
      "FlatMagicDamageMod": 70
    },
    "statsText": "70 Ability Power 600 Mana 25 Ability Haste",
    "cost": 2900,
    "shop": true,
    "from": [
      "item:3070",
      "item:3802",
      "item:3108"
    ],
    "image": "/assets/items/3003.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3003.png"
  },
  {
    "id": "item:3504",
    "name": "Ardent Censer",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "AttackSpeed",
      "SpellDamage",
      "ManaRegen",
      "NonbootsMovement"
    ],
    "stats": {
      "FlatMagicDamageMod": 45,
      "PercentMovementSpeedMod": 0.04
    },
    "statsText": "45 Ability Power 10% Heal and Shield Power 125% Base Mana Regen 4% Move Speed",
    "cost": 2200,
    "shop": true,
    "from": [
      "item:3113",
      "item:3114"
    ],
    "image": "/assets/items/3504.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3504.png"
  },
  {
    "id": "item:3174",
    "name": "Armored Advance",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Armor",
      "Boots"
    ],
    "stats": {
      "FlatMovementSpeedMod": 45,
      "FlatArmorMod": 35
    },
    "statsText": "35 Armor 45 Move Speed",
    "cost": 1200,
    "shop": true,
    "from": [
      "item:3047"
    ],
    "image": "/assets/items/3174.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3174.png"
  },
  {
    "id": "champion:Ashe",
    "name": "Ashe",
    "category": "champions",
    "aliases": [],
    "tier": 1,
    "tags": [
      "Marksman",
      "Support"
    ],
    "resource": "Mana",
    "title": "the Frost Archer",
    "stats": {
      "hp": 610,
      "hpperlevel": 101,
      "mp": 280,
      "mpperlevel": 35,
      "movespeed": 325,
      "armor": 26,
      "armorperlevel": 4.6,
      "spellblock": 33,
      "spellblockperlevel": 1.1,
      "attackrange": 600,
      "hpregen": 3.5,
      "hpregenperlevel": 0.55,
      "mpregen": 7,
      "mpregenperlevel": 0.65,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 59,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 3,
      "attackspeed": 0.658
    },
    "image": "/assets/champions/Ashe.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Ashe.png"
  },
  {
    "id": "champion:AurelionSol",
    "name": "Aurelion Sol",
    "category": "champions",
    "aliases": [
      "asol",
      "a sol"
    ],
    "tier": 4,
    "tags": [
      "Mage"
    ],
    "resource": "Mana",
    "title": "The Star Forger",
    "stats": {
      "hp": 600,
      "hpperlevel": 90,
      "mp": 530,
      "mpperlevel": 40,
      "movespeed": 340,
      "armor": 22,
      "armorperlevel": 4,
      "spellblock": 30,
      "spellblockperlevel": 1.3,
      "attackrange": 550,
      "hpregen": 5.5,
      "hpregenperlevel": 0.55,
      "mpregen": 8,
      "mpregenperlevel": 0.75,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 58,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 1.5,
      "attackspeed": 0.625
    },
    "image": "/assets/champions/AurelionSol.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/AurelionSol.png"
  },
  {
    "id": "champion:Aurora",
    "name": "Aurora",
    "category": "champions",
    "aliases": [],
    "tier": 4,
    "tags": [
      "Mage",
      "Assassin"
    ],
    "resource": "Mana",
    "title": "the Witch Between Worlds",
    "stats": {
      "hp": 607,
      "hpperlevel": 110,
      "mp": 475,
      "mpperlevel": 30,
      "movespeed": 335,
      "armor": 23,
      "armorperlevel": 4.5,
      "spellblock": 32,
      "spellblockperlevel": 1.3,
      "attackrange": 550,
      "hpregen": 6,
      "hpregenperlevel": 0.55,
      "mpregen": 8,
      "mpregenperlevel": 0.8,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 53,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2,
      "attackspeed": 0.668
    },
    "image": "/assets/champions/Aurora.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Aurora.png"
  },
  {
    "id": "item:6696",
    "name": "Axiom Arc",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Damage",
      "ArmorPenetration",
      "AbilityHaste"
    ],
    "stats": {
      "FlatPhysicalDamageMod": 55
    },
    "statsText": "55 Attack Damage 18 Lethality 20 Ability Haste",
    "cost": 2750,
    "shop": true,
    "from": [
      "item:2020",
      "item:3133"
    ],
    "image": "/assets/items/6696.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/6696.png"
  },
  {
    "id": "champion:Azir",
    "name": "Azir",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Mage",
      "Marksman"
    ],
    "resource": "Mana",
    "title": "the Emperor of the Sands",
    "stats": {
      "hp": 575,
      "hpperlevel": 108,
      "mp": 320,
      "mpperlevel": 50,
      "movespeed": 330,
      "armor": 25,
      "armorperlevel": 5,
      "spellblock": 30,
      "spellblockperlevel": 1.3,
      "attackrange": 550,
      "hpregen": 7,
      "hpregenperlevel": 0.75,
      "mpregen": 8,
      "mpregenperlevel": 0.8,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 56,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 5,
      "attackspeed": 0.625
    },
    "image": "/assets/champions/Azir.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Azir.png"
  },
  {
    "id": "item:1038",
    "name": "B. F. Sword",
    "category": "items",
    "aliases": [
      "bf sword",
      "bf"
    ],
    "tier": 3,
    "tags": [
      "Damage"
    ],
    "stats": {
      "FlatPhysicalDamageMod": 40
    },
    "statsText": "40 Attack Damage",
    "cost": 1300,
    "shop": true,
    "from": [],
    "image": "/assets/items/1038.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/1038.png"
  },
  {
    "id": "item:6660",
    "name": "Bami's Cinder",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Health",
      "AbilityHaste"
    ],
    "stats": {
      "FlatHPPoolMod": 150
    },
    "statsText": "150 Health 5 Ability Haste",
    "cost": 900,
    "shop": true,
    "from": [
      "item:1028",
      "item:2022"
    ],
    "image": "/assets/items/6660.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/6660.png"
  },
  {
    "id": "item:4642",
    "name": "Bandleglass Mirror",
    "category": "items",
    "aliases": [],
    "tier": 4,
    "tags": [
      "SpellDamage",
      "ManaRegen",
      "CooldownReduction",
      "AbilityHaste"
    ],
    "stats": {
      "FlatMagicDamageMod": 20
    },
    "statsText": "20 Ability Power 100% Base Mana Regen 10 Ability Haste",
    "cost": 900,
    "shop": true,
    "from": [
      "item:1004",
      "item:1052",
      "item:2022"
    ],
    "image": "/assets/items/4642.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/4642.png"
  },
  {
    "id": "item:2524",
    "name": "Bandlepipes",
    "category": "items",
    "aliases": [],
    "tier": 5,
    "tags": [
      "Health",
      "SpellBlock",
      "Armor",
      "AttackSpeed",
      "NonbootsMovement",
      "AbilityHaste"
    ],
    "stats": {
      "FlatSpellBlockMod": 20,
      "FlatHPPoolMod": 200,
      "FlatArmorMod": 20
    },
    "statsText": "200 Health 15 Ability Haste 20 Armor 20 Magic Resist",
    "cost": 2300,
    "shop": true,
    "from": [
      "item:3067",
      "item:1029",
      "item:1033"
    ],
    "image": "/assets/items/2524.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/2524.png"
  },
  {
    "id": "item:3102",
    "name": "Banshee's Veil",
    "category": "items",
    "aliases": [
      "banshees"
    ],
    "tier": 3,
    "tags": [
      "SpellBlock",
      "SpellDamage"
    ],
    "stats": {
      "FlatSpellBlockMod": 40,
      "FlatMagicDamageMod": 105
    },
    "statsText": "105 Ability Power 40 Magic Resist",
    "cost": 3000,
    "shop": true,
    "from": [
      "item:1058",
      "item:4632"
    ],
    "image": "/assets/items/3102.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3102.png"
  },
  {
    "id": "champion:Bard",
    "name": "Bard",
    "category": "champions",
    "aliases": [],
    "tier": 4,
    "tags": [
      "Support",
      "Mage"
    ],
    "resource": "Mana",
    "title": "the Wandering Caretaker",
    "stats": {
      "hp": 630,
      "hpperlevel": 103,
      "mp": 350,
      "mpperlevel": 50,
      "movespeed": 335,
      "armor": 32,
      "armorperlevel": 4.7,
      "spellblock": 30,
      "spellblockperlevel": 1.3,
      "attackrange": 500,
      "hpregen": 5.5,
      "hpregenperlevel": 0.55,
      "mpregen": 6,
      "mpregenperlevel": 0.45,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 52,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2,
      "attackspeed": 0.658
    },
    "image": "/assets/champions/Bard.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Bard.png"
  },
  {
    "id": "map:baron-nashor",
    "name": "Baron Nashor",
    "category": "map",
    "aliases": [
      "baron",
      "nashor"
    ],
    "tier": 1,
    "tags": [
      "monster",
      "epic",
      "void"
    ]
  },
  {
    "id": "item:2520",
    "name": "Bastionbreaker",
    "category": "items",
    "aliases": [],
    "tier": 5,
    "tags": [
      "Damage",
      "ArmorPenetration",
      "AbilityHaste"
    ],
    "stats": {
      "FlatPhysicalDamageMod": 55
    },
    "statsText": "55 Attack Damage 18 Lethality 15 Ability Haste",
    "cost": 3000,
    "shop": true,
    "from": [
      "item:2020",
      "item:3134"
    ],
    "image": "/assets/items/2520.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/2520.png"
  },
  {
    "id": "champion:Belveth",
    "name": "Bel'Veth",
    "category": "champions",
    "aliases": [
      "bel veth"
    ],
    "tier": 3,
    "tags": [
      "Fighter"
    ],
    "resource": "",
    "title": "the Empress of the Void",
    "stats": {
      "hp": 580,
      "hpperlevel": 105,
      "mp": 45,
      "mpperlevel": 0,
      "movespeed": 340,
      "armor": 28,
      "armorperlevel": 5,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 150,
      "hpregen": 6,
      "hpregenperlevel": 0.6,
      "mpregen": 0,
      "mpregenperlevel": 0,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 55,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 0,
      "attackspeed": 0.67
    },
    "image": "/assets/champions/Belveth.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Belveth.png"
  },
  {
    "id": "item:3006",
    "name": "Berserker's Greaves",
    "category": "items",
    "aliases": [
      "berserkers",
      "zerkers"
    ],
    "tier": 3,
    "tags": [
      "AttackSpeed",
      "Boots"
    ],
    "stats": {
      "FlatMovementSpeedMod": 45,
      "PercentAttackSpeedMod": 0.3
    },
    "statsText": "30% Attack Speed 45 Move Speed",
    "cost": 1100,
    "shop": true,
    "from": [
      "item:1001",
      "item:1042",
      "item:1042"
    ],
    "image": "/assets/items/3006.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3006.png"
  },
  {
    "id": "item:3071",
    "name": "Black Cleaver",
    "category": "items",
    "aliases": [
      "cleaver",
      "bc"
    ],
    "tier": 3,
    "tags": [
      "Health",
      "Damage",
      "CooldownReduction",
      "OnHit",
      "NonbootsMovement",
      "ArmorPenetration",
      "AbilityHaste"
    ],
    "stats": {
      "FlatHPPoolMod": 400,
      "FlatPhysicalDamageMod": 45
    },
    "statsText": "45 Attack Damage 400 Health 20 Ability Haste",
    "cost": 3000,
    "shop": true,
    "from": [
      "item:3044",
      "item:3067",
      "item:1037"
    ],
    "image": "/assets/items/3071.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3071.png"
  },
  {
    "id": "item:2503",
    "name": "Blackfire Torch",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "SpellDamage",
      "Mana",
      "CooldownReduction",
      "AbilityHaste"
    ],
    "stats": {
      "FlatMPPoolMod": 600,
      "FlatMagicDamageMod": 80
    },
    "statsText": "80 Ability Power 600 Mana 20 Ability Haste",
    "cost": 2800,
    "shop": true,
    "from": [
      "item:3802",
      "item:2508"
    ],
    "image": "/assets/items/2503.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/2503.png"
  },
  {
    "id": "item:3153",
    "name": "Blade of The Ruined King",
    "category": "items",
    "aliases": [
      "bork",
      "botrk",
      "blade of the ruined king"
    ],
    "tier": 3,
    "tags": [
      "Damage",
      "AttackSpeed",
      "LifeSteal",
      "Slow",
      "OnHit"
    ],
    "stats": {
      "FlatPhysicalDamageMod": 40,
      "PercentAttackSpeedMod": 0.25,
      "PercentLifeStealMod": 0.1
    },
    "statsText": "40 Attack Damage 25% Attack Speed 10% Life Steal",
    "cost": 3200,
    "shop": true,
    "from": [
      "item:1053",
      "item:1043",
      "item:1037"
    ],
    "image": "/assets/items/3153.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3153.png"
  },
  {
    "id": "map:blast-cone",
    "name": "Blast Cone",
    "category": "map",
    "aliases": [
      "blast plant",
      "blastcone"
    ],
    "tier": 3,
    "tags": [
      "plant"
    ]
  },
  {
    "id": "item:1026",
    "name": "Blasting Wand",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "SpellDamage"
    ],
    "stats": {
      "FlatMagicDamageMod": 45
    },
    "statsText": "45 Ability Power",
    "cost": 850,
    "shop": true,
    "from": [],
    "image": "/assets/items/1026.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/1026.png"
  },
  {
    "id": "item:4630",
    "name": "Blighting Jewel",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "MagicPenetration",
      "SpellDamage"
    ],
    "stats": {
      "FlatMagicDamageMod": 25
    },
    "statsText": "25 Ability Power 13% Magic Penetration",
    "cost": 1100,
    "shop": true,
    "from": [
      "item:1052"
    ],
    "image": "/assets/items/4630.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/4630.png"
  },
  {
    "id": "champion:Blitzcrank",
    "name": "Blitzcrank",
    "category": "champions",
    "aliases": [
      "blitz"
    ],
    "tier": 3,
    "tags": [
      "Tank",
      "Support"
    ],
    "resource": "Mana",
    "title": "the Great Steam Golem",
    "stats": {
      "hp": 600,
      "hpperlevel": 109,
      "mp": 267,
      "mpperlevel": 40,
      "movespeed": 325,
      "armor": 37,
      "armorperlevel": 4.7,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 125,
      "hpregen": 7.5,
      "hpregenperlevel": 0.75,
      "mpregen": 8.5,
      "mpregenperlevel": 0.8,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 62,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 1.13,
      "attackspeed": 0.625
    },
    "image": "/assets/champions/Blitzcrank.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Blitzcrank.png"
  },
  {
    "id": "item:8010",
    "name": "Bloodletter's Curse",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Health",
      "SpellDamage",
      "CooldownReduction",
      "MagicPenetration"
    ],
    "stats": {
      "FlatHPPoolMod": 400,
      "FlatMagicDamageMod": 65
    },
    "statsText": "65 Ability Power 400 Health 15 Ability Haste",
    "cost": 2900,
    "shop": true,
    "from": [
      "item:3147",
      "item:3108"
    ],
    "image": "/assets/items/8010.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/8010.png"
  },
  {
    "id": "item:3877",
    "name": "Bloodsong",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Health",
      "HealthRegen",
      "ManaRegen",
      "Vision",
      "GoldPer",
      "Lane"
    ],
    "stats": {
      "FlatHPPoolMod": 200
    },
    "statsText": "200 Health 75% Base Health Regen 75% Base Mana Regen 9 Gold Per 10 Seconds",
    "cost": 400,
    "shop": true,
    "from": [
      "item:3867"
    ],
    "image": "/assets/items/3877.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3877.png"
  },
  {
    "id": "item:3072",
    "name": "Bloodthirster",
    "category": "items",
    "aliases": [
      "bt"
    ],
    "tier": 2,
    "tags": [
      "Damage",
      "LifeSteal"
    ],
    "stats": {
      "FlatPhysicalDamageMod": 80,
      "PercentLifeStealMod": 0.15
    },
    "statsText": "80 Attack Damage 15% Life Steal",
    "cost": 3400,
    "shop": true,
    "from": [
      "item:1038",
      "item:1037",
      "item:1053"
    ],
    "image": "/assets/items/3072.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3072.png"
  },
  {
    "id": "map:blue-sentinel",
    "name": "Blue Sentinel",
    "category": "map",
    "aliases": [
      "blue",
      "blue buff",
      "blue golem"
    ],
    "tier": 2,
    "tags": [
      "monster",
      "camp",
      "buff"
    ]
  },
  {
    "id": "item:1001",
    "name": "Boots",
    "category": "items",
    "aliases": [],
    "tier": 1,
    "tags": [
      "Boots"
    ],
    "stats": {
      "FlatMovementSpeedMod": 25
    },
    "statsText": "25 Move Speed",
    "cost": 300,
    "shop": true,
    "from": [],
    "image": "/assets/items/1001.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/1001.png"
  },
  {
    "id": "item:3009",
    "name": "Boots of Swiftness",
    "category": "items",
    "aliases": [
      "swifties",
      "swift boots"
    ],
    "tier": 3,
    "tags": [
      "Boots"
    ],
    "stats": {
      "FlatMovementSpeedMod": 55
    },
    "statsText": "55 Move Speed",
    "cost": 1000,
    "shop": true,
    "from": [
      "item:1001"
    ],
    "image": "/assets/items/3009.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3009.png"
  },
  {
    "id": "map:bot-lane",
    "name": "Bot Lane",
    "category": "map",
    "aliases": [
      "bot",
      "bottom",
      "bottom lane",
      "botlane"
    ],
    "tier": 1,
    "tags": [
      "lane"
    ]
  },
  {
    "id": "item:3076",
    "name": "Bramble Vest",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Armor"
    ],
    "stats": {
      "FlatArmorMod": 30
    },
    "statsText": "30 Armor",
    "cost": 800,
    "shop": true,
    "from": [
      "item:1029",
      "item:1029"
    ],
    "image": "/assets/items/3076.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3076.png"
  },
  {
    "id": "champion:Brand",
    "name": "Brand",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Mage",
      "Support"
    ],
    "resource": "Mana",
    "title": "the Burning Vengeance",
    "stats": {
      "hp": 570,
      "hpperlevel": 105,
      "mp": 469,
      "mpperlevel": 21,
      "movespeed": 340,
      "armor": 24,
      "armorperlevel": 4.2,
      "spellblock": 30,
      "spellblockperlevel": 1.3,
      "attackrange": 550,
      "hpregen": 5.5,
      "hpregenperlevel": 0.55,
      "mpregen": 11,
      "mpregenperlevel": 0.6,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 57,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2,
      "attackspeed": 0.681
    },
    "image": "/assets/champions/Brand.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Brand.png"
  },
  {
    "id": "champion:Braum",
    "name": "Braum",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Tank",
      "Support"
    ],
    "resource": "Mana",
    "title": "the Heart of the Freljord",
    "stats": {
      "hp": 610,
      "hpperlevel": 112,
      "mp": 311,
      "mpperlevel": 45,
      "movespeed": 335,
      "armor": 35,
      "armorperlevel": 5,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 125,
      "hpregen": 8.5,
      "hpregenperlevel": 1,
      "mpregen": 7,
      "mpregenperlevel": 0.8,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 55,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 3.5,
      "attackspeed": 0.644
    },
    "image": "/assets/champions/Braum.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Braum.png"
  },
  {
    "id": "champion:Briar",
    "name": "Briar",
    "category": "champions",
    "aliases": [],
    "tier": 4,
    "tags": [
      "Fighter",
      "Assassin"
    ],
    "resource": "Fury",
    "title": "the Restrained Hunger",
    "stats": {
      "hp": 625,
      "hpperlevel": 95,
      "mp": 0,
      "mpperlevel": 0,
      "movespeed": 340,
      "armor": 30,
      "armorperlevel": 4.5,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 125,
      "hpregen": 0,
      "hpregenperlevel": 0,
      "mpregen": 0,
      "mpregenperlevel": 0,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 60,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2,
      "attackspeed": 0.644
    },
    "image": "/assets/champions/Briar.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Briar.png"
  },
  {
    "id": "map:brush",
    "name": "Brush",
    "category": "map",
    "aliases": [
      "bush",
      "bushes",
      "brushes"
    ],
    "tier": 3,
    "tags": [
      "area"
    ]
  },
  {
    "id": "champion:Caitlyn",
    "name": "Caitlyn",
    "category": "champions",
    "aliases": [
      "cait"
    ],
    "tier": 2,
    "tags": [
      "Marksman"
    ],
    "resource": "Mana",
    "title": "the Sheriff of Piltover",
    "stats": {
      "hp": 580,
      "hpperlevel": 107,
      "mp": 315,
      "mpperlevel": 40,
      "movespeed": 325,
      "armor": 27,
      "armorperlevel": 4.7,
      "spellblock": 33,
      "spellblockperlevel": 1.1,
      "attackrange": 650,
      "hpregen": 3.5,
      "hpregenperlevel": 0.55,
      "mpregen": 7.4,
      "mpregenperlevel": 0.7,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 62,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 4,
      "attackspeed": 0.681
    },
    "image": "/assets/champions/Caitlyn.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Caitlyn.png"
  },
  {
    "id": "champion:Camille",
    "name": "Camille",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Fighter",
      "Assassin"
    ],
    "resource": "Mana",
    "title": "the Steel Shadow",
    "stats": {
      "hp": 650,
      "hpperlevel": 99,
      "mp": 375,
      "mpperlevel": 52,
      "movespeed": 340,
      "armor": 35,
      "armorperlevel": 4.5,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 125,
      "hpregen": 8.5,
      "hpregenperlevel": 0.8,
      "mpregen": 8.15,
      "mpregenperlevel": 0.75,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 68,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.5,
      "attackspeed": 0.644
    },
    "image": "/assets/champions/Camille.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Camille.png"
  },
  {
    "id": "champion:Cassiopeia",
    "name": "Cassiopeia",
    "category": "champions",
    "aliases": [
      "cass",
      "cassio"
    ],
    "tier": 4,
    "tags": [
      "Mage"
    ],
    "resource": "Mana",
    "title": "the Serpent's Embrace",
    "stats": {
      "hp": 610,
      "hpperlevel": 98,
      "mp": 450,
      "mpperlevel": 40,
      "movespeed": 335,
      "armor": 18,
      "armorperlevel": 4.7,
      "spellblock": 32,
      "spellblockperlevel": 1.3,
      "attackrange": 550,
      "hpregen": 5.5,
      "hpregenperlevel": 0.5,
      "mpregen": 8,
      "mpregenperlevel": 0.8,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 53,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 1.5,
      "attackspeed": 0.647
    },
    "image": "/assets/champions/Cassiopeia.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Cassiopeia.png"
  },
  {
    "id": "map:caster-minion",
    "name": "Caster Minion",
    "category": "map",
    "aliases": [
      "caster",
      "casters",
      "caster minions",
      "ranged minion"
    ],
    "tier": 3,
    "tags": [
      "minion"
    ]
  },
  {
    "id": "item:3803",
    "name": "Catalyst of Aeons",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Health",
      "HealthRegen",
      "Mana",
      "ManaRegen"
    ],
    "stats": {
      "FlatMPPoolMod": 375,
      "FlatHPPoolMod": 300
    },
    "statsText": "300 Health 375 Mana",
    "cost": 1300,
    "shop": true,
    "from": [
      "item:1028",
      "item:1028",
      "item:1027"
    ],
    "image": "/assets/items/3803.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3803.png"
  },
  {
    "id": "item:3133",
    "name": "Caulfield's Warhammer",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Damage",
      "CooldownReduction",
      "AbilityHaste"
    ],
    "stats": {
      "FlatPhysicalDamageMod": 20
    },
    "statsText": "20 Attack Damage 10 Ability Haste",
    "cost": 1050,
    "shop": true,
    "from": [
      "item:1036",
      "item:2022",
      "item:1036"
    ],
    "image": "/assets/items/3133.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3133.png"
  },
  {
    "id": "item:3869",
    "name": "Celestial Opposition",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Health",
      "HealthRegen",
      "ManaRegen",
      "Vision",
      "GoldPer",
      "Lane"
    ],
    "stats": {
      "FlatHPPoolMod": 200
    },
    "statsText": "200 Health 75% Base Health Regen 75% Base Mana Regen 9 Gold Per 10 Seconds",
    "cost": 400,
    "shop": true,
    "from": [
      "item:3867"
    ],
    "image": "/assets/items/3869.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3869.png"
  },
  {
    "id": "item:1031",
    "name": "Chain Vest",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Armor"
    ],
    "stats": {
      "FlatArmorMod": 40
    },
    "statsText": "40 Armor",
    "cost": 800,
    "shop": true,
    "from": [
      "item:1029"
    ],
    "image": "/assets/items/1031.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/1031.png"
  },
  {
    "id": "item:3173",
    "name": "Chainlaced Crushers",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "SpellBlock",
      "Boots",
      "Tenacity",
      "MagicResist"
    ],
    "stats": {
      "FlatSpellBlockMod": 25,
      "FlatMovementSpeedMod": 45
    },
    "statsText": "25 Magic Resist 45 Move Speed 30% Tenacity",
    "cost": 1250,
    "shop": true,
    "from": [
      "item:3111"
    ],
    "image": "/assets/items/3173.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3173.png"
  },
  {
    "id": "item:6609",
    "name": "Chempunk Chainsword",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Health",
      "Damage",
      "CooldownReduction",
      "AbilityHaste"
    ],
    "stats": {
      "FlatHPPoolMod": 450,
      "FlatPhysicalDamageMod": 45
    },
    "statsText": "45 Attack Damage 450 Health 15 Ability Haste",
    "cost": 3000,
    "shop": true,
    "from": [
      "item:3123",
      "item:1011",
      "item:3133"
    ],
    "image": "/assets/items/6609.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/6609.png"
  },
  {
    "id": "map:chemtech-drake",
    "name": "Chemtech Drake",
    "category": "map",
    "aliases": [
      "chemtech",
      "chemtech dragon"
    ],
    "tier": 4,
    "tags": [
      "monster",
      "epic",
      "dragon",
      "elemental"
    ]
  },
  {
    "id": "champion:Chogath",
    "name": "Cho'Gath",
    "category": "champions",
    "aliases": [
      "cho"
    ],
    "tier": 3,
    "tags": [
      "Tank",
      "Mage"
    ],
    "resource": "Mana",
    "title": "the Terror of the Void",
    "stats": {
      "hp": 644,
      "hpperlevel": 94,
      "mp": 270,
      "mpperlevel": 60,
      "movespeed": 345,
      "armor": 38,
      "armorperlevel": 4.5,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 125,
      "hpregen": 9,
      "hpregenperlevel": 0.85,
      "mpregen": 7.2,
      "mpregenperlevel": 0.45,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 69,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 1.44,
      "attackspeed": 0.658
    },
    "image": "/assets/champions/Chogath.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Chogath.png"
  },
  {
    "id": "item:1018",
    "name": "Cloak of Agility",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "CriticalStrike"
    ],
    "stats": {
      "FlatCritChanceMod": 0.15
    },
    "statsText": "15% Critical Strike Chance",
    "cost": 600,
    "shop": true,
    "from": [],
    "image": "/assets/items/1018.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/1018.png"
  },
  {
    "id": "item:1029",
    "name": "Cloth Armor",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Armor"
    ],
    "stats": {
      "FlatArmorMod": 15
    },
    "statsText": "15 Armor",
    "cost": 300,
    "shop": true,
    "from": [],
    "image": "/assets/items/1029.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/1029.png"
  },
  {
    "id": "map:cloud-drake",
    "name": "Cloud Drake",
    "category": "map",
    "aliases": [
      "cloud",
      "cloud dragon",
      "air dragon"
    ],
    "tier": 3,
    "tags": [
      "monster",
      "epic",
      "dragon",
      "elemental"
    ]
  },
  {
    "id": "item:2055",
    "name": "Control Ward",
    "category": "items",
    "aliases": [
      "pink ward",
      "pink"
    ],
    "tier": 1,
    "tags": [
      "Consumable",
      "Lane",
      "Stealth",
      "Vision"
    ],
    "stats": {},
    "statsText": "",
    "cost": 75,
    "shop": true,
    "from": [],
    "image": "/assets/items/2055.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/2055.png"
  },
  {
    "id": "champion:Corki",
    "name": "Corki",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Marksman",
      "Mage"
    ],
    "resource": "Mana",
    "title": "the Daring Bombardier",
    "stats": {
      "hp": 610,
      "hpperlevel": 100,
      "mp": 350,
      "mpperlevel": 40,
      "movespeed": 325,
      "armor": 27,
      "armorperlevel": 4.5,
      "spellblock": 33,
      "spellblockperlevel": 1.1,
      "attackrange": 550,
      "hpregen": 5.5,
      "hpregenperlevel": 0.55,
      "mpregen": 7.4,
      "mpregenperlevel": 0.7,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 52,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.8,
      "attackspeed": 0.644
    },
    "image": "/assets/champions/Corki.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Corki.png"
  },
  {
    "id": "item:4629",
    "name": "Cosmic Drive",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Health",
      "SpellDamage",
      "NonbootsMovement",
      "AbilityHaste"
    ],
    "stats": {
      "FlatHPPoolMod": 350,
      "FlatMagicDamageMod": 70,
      "PercentMovementSpeedMod": 0.04
    },
    "statsText": "70 Ability Power 350 Health 25 Ability Haste 4% Move Speed",
    "cost": 3000,
    "shop": true,
    "from": [
      "item:3067",
      "item:3113",
      "item:3108"
    ],
    "image": "/assets/items/4629.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/4629.png"
  },
  {
    "id": "item:3171",
    "name": "Crimson Lucidity",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "CooldownReduction",
      "Boots"
    ],
    "stats": {
      "FlatMovementSpeedMod": 45
    },
    "statsText": "20 Ability Haste 45 Move Speed",
    "cost": 900,
    "shop": true,
    "from": [
      "item:3158"
    ],
    "image": "/assets/items/3171.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3171.png"
  },
  {
    "id": "item:3137",
    "name": "Cryptbloom",
    "category": "items",
    "aliases": [],
    "tier": 4,
    "tags": [
      "SpellDamage",
      "MagicPenetration",
      "AbilityHaste"
    ],
    "stats": {
      "FlatMagicDamageMod": 75
    },
    "statsText": "75 Ability Power 30% Magic Penetration 20 Ability Haste",
    "cost": 3000,
    "shop": true,
    "from": [
      "item:4630",
      "item:3108",
      "item:3108"
    ],
    "image": "/assets/items/3137.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3137.png"
  },
  {
    "id": "item:3801",
    "name": "Crystalline Bracer",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Health",
      "HealthRegen"
    ],
    "stats": {
      "FlatHPPoolMod": 200
    },
    "statsText": "200 Health 100% Base Health Regen",
    "cost": 800,
    "shop": true,
    "from": [
      "item:1028",
      "item:1006"
    ],
    "image": "/assets/items/3801.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3801.png"
  },
  {
    "id": "item:1083",
    "name": "Cull",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Damage",
      "OnHit",
      "Lane"
    ],
    "stats": {
      "FlatPhysicalDamageMod": 7
    },
    "statsText": "7 Attack Damage",
    "cost": 450,
    "shop": true,
    "from": [],
    "image": "/assets/items/1083.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/1083.png"
  },
  {
    "id": "item:1042",
    "name": "Dagger",
    "category": "items",
    "aliases": [],
    "tier": 1,
    "tags": [
      "AttackSpeed"
    ],
    "stats": {
      "PercentAttackSpeedMod": 0.1
    },
    "statsText": "10% Attack Speed",
    "cost": 250,
    "shop": true,
    "from": [],
    "image": "/assets/items/1042.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/1042.png"
  },
  {
    "id": "champion:Darius",
    "name": "Darius",
    "category": "champions",
    "aliases": [],
    "tier": 2,
    "tags": [
      "Fighter",
      "Tank"
    ],
    "resource": "Mana",
    "title": "the Hand of Noxus",
    "stats": {
      "hp": 652,
      "hpperlevel": 114,
      "mp": 263,
      "mpperlevel": 58,
      "movespeed": 340,
      "armor": 37,
      "armorperlevel": 5.2,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 175,
      "hpregen": 10,
      "hpregenperlevel": 0.95,
      "mpregen": 6.6,
      "mpregenperlevel": 0.35,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 64,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 1,
      "attackspeed": 0.625
    },
    "image": "/assets/champions/Darius.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Darius.png"
  },
  {
    "id": "item:1082",
    "name": "Dark Seal",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Health",
      "SpellDamage",
      "Lane"
    ],
    "stats": {
      "FlatHPPoolMod": 50,
      "FlatMagicDamageMod": 15
    },
    "statsText": "15 Ability Power 50 Health",
    "cost": 350,
    "shop": true,
    "from": [],
    "image": "/assets/items/1082.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/1082.png"
  },
  {
    "id": "item:6621",
    "name": "Dawncore",
    "category": "items",
    "aliases": [],
    "tier": 4,
    "tags": [
      "SpellDamage",
      "ManaRegen"
    ],
    "stats": {
      "FlatMagicDamageMod": 45
    },
    "statsText": "45 Ability Power 16% Heal and Shield Power 100% Base Mana Regen",
    "cost": 2500,
    "shop": true,
    "from": [
      "item:1026",
      "item:3114",
      "item:3114"
    ],
    "image": "/assets/items/6621.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/6621.png"
  },
  {
    "id": "item:3742",
    "name": "Dead Man's Plate",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Health",
      "Armor",
      "Slow",
      "NonbootsMovement"
    ],
    "stats": {
      "FlatHPPoolMod": 350,
      "FlatArmorMod": 55,
      "PercentMovementSpeedMod": 0.04
    },
    "statsText": "350 Health 55 Armor 4% Move Speed",
    "cost": 2900,
    "shop": true,
    "from": [
      "item:3066",
      "item:1028",
      "item:1031"
    ],
    "image": "/assets/items/3742.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3742.png"
  },
  {
    "id": "item:6333",
    "name": "Death's Dance",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Armor",
      "Damage",
      "AbilityHaste"
    ],
    "stats": {
      "FlatArmorMod": 50,
      "FlatPhysicalDamageMod": 60
    },
    "statsText": "60 Attack Damage 50 Armor 15 Ability Haste",
    "cost": 3300,
    "shop": true,
    "from": [
      "item:2019",
      "item:1037",
      "item:3133"
    ],
    "image": "/assets/items/6333.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/6333.png"
  },
  {
    "id": "champion:Diana",
    "name": "Diana",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Fighter",
      "Assassin"
    ],
    "resource": "Mana",
    "title": "Scorn of the Moon",
    "stats": {
      "hp": 640,
      "hpperlevel": 109,
      "mp": 375,
      "mpperlevel": 25,
      "movespeed": 345,
      "armor": 31,
      "armorperlevel": 4.3,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 150,
      "hpregen": 6.5,
      "hpregenperlevel": 0.85,
      "mpregen": 8,
      "mpregenperlevel": 0.8,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 57,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2,
      "attackspeed": 0.625
    },
    "image": "/assets/champions/Diana.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Diana.png"
  },
  {
    "id": "item:1055",
    "name": "Doran's Blade",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Health",
      "Damage",
      "LifeSteal",
      "SpellVamp",
      "Lane"
    ],
    "stats": {
      "FlatHPPoolMod": 80,
      "FlatPhysicalDamageMod": 10
    },
    "statsText": "10 Attack Damage 80 Health 2.5% Omnivamp",
    "cost": 450,
    "shop": true,
    "from": [],
    "image": "/assets/items/1055.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/1055.png"
  },
  {
    "id": "item:1086",
    "name": "Doran's Bow",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Damage",
      "AttackSpeed",
      "SpellVamp",
      "Lane"
    ],
    "stats": {
      "FlatPhysicalDamageMod": 7,
      "PercentAttackSpeedMod": 0.15
    },
    "statsText": "7 Attack Damage 15% Attack Speed 1.5% Omnivamp",
    "cost": 400,
    "shop": true,
    "from": [],
    "image": "/assets/items/1086.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/1086.png"
  },
  {
    "id": "item:1120",
    "name": "Doran's Helm",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Health",
      "SpellBlock",
      "Armor",
      "Lane"
    ],
    "stats": {
      "FlatSpellBlockMod": 8,
      "FlatHPPoolMod": 150,
      "FlatArmorMod": 8
    },
    "statsText": "150 Health 8 Armor 8 Magic Resist",
    "cost": 450,
    "shop": true,
    "from": [],
    "image": "/assets/items/1120.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/1120.png"
  },
  {
    "id": "item:1056",
    "name": "Doran's Ring",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Health",
      "Lane",
      "ManaRegen",
      "SpellDamage"
    ],
    "stats": {
      "FlatHPPoolMod": 90,
      "FlatMagicDamageMod": 18
    },
    "statsText": "18 Ability Power 90 Health",
    "cost": 400,
    "shop": true,
    "from": [],
    "image": "/assets/items/1056.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/1056.png"
  },
  {
    "id": "item:1054",
    "name": "Doran's Shield",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Health",
      "HealthRegen",
      "Lane"
    ],
    "stats": {
      "FlatHPPoolMod": 110,
      "FlatHPRegenMod": 0.8
    },
    "statsText": "110 Health",
    "cost": 450,
    "shop": true,
    "from": [],
    "image": "/assets/items/1054.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/1054.png"
  },
  {
    "id": "champion:DrMundo",
    "name": "Dr. Mundo",
    "category": "champions",
    "aliases": [
      "mundo",
      "doctor mundo"
    ],
    "tier": 3,
    "tags": [
      "Tank",
      "Fighter"
    ],
    "resource": "None",
    "title": "the Madman of Zaun",
    "stats": {
      "hp": 640,
      "hpperlevel": 103,
      "mp": 0,
      "mpperlevel": 0,
      "movespeed": 345,
      "armor": 32,
      "armorperlevel": 4.5,
      "spellblock": 29,
      "spellblockperlevel": 2.3,
      "attackrange": 125,
      "hpregen": 7,
      "hpregenperlevel": 0.5,
      "mpregen": 0,
      "mpregenperlevel": 0,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 61,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 3.3,
      "attackspeed": 0.67
    },
    "image": "/assets/champions/DrMundo.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/DrMundo.png"
  },
  {
    "id": "champion:Draven",
    "name": "Draven",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Marksman"
    ],
    "resource": "Mana",
    "title": "the Glorious Executioner",
    "stats": {
      "hp": 675,
      "hpperlevel": 104,
      "mp": 361,
      "mpperlevel": 39,
      "movespeed": 330,
      "armor": 29,
      "armorperlevel": 4.5,
      "spellblock": 33,
      "spellblockperlevel": 1.1,
      "attackrange": 550,
      "hpregen": 3.75,
      "hpregenperlevel": 0.7,
      "mpregen": 8.05,
      "mpregenperlevel": 0.65,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 64,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.7,
      "attackspeed": 0.679
    },
    "image": "/assets/champions/Draven.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Draven.png"
  },
  {
    "id": "item:3870",
    "name": "Dream Maker",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Health",
      "HealthRegen",
      "ManaRegen",
      "Vision",
      "GoldPer",
      "Lane"
    ],
    "stats": {
      "FlatHPPoolMod": 200
    },
    "statsText": "200 Health 75% Base Health Regen 75% Base Mana Regen 9 Gold Per 10 Seconds",
    "cost": 400,
    "shop": true,
    "from": [
      "item:3867"
    ],
    "image": "/assets/items/3870.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3870.png"
  },
  {
    "id": "item:2510",
    "name": "Dusk and Dawn",
    "category": "items",
    "aliases": [],
    "tier": 5,
    "tags": [
      "Health",
      "AttackSpeed",
      "SpellDamage",
      "OnHit",
      "AbilityHaste"
    ],
    "stats": {
      "FlatHPPoolMod": 300,
      "FlatMagicDamageMod": 60,
      "PercentAttackSpeedMod": 0.2
    },
    "statsText": "300 Health 60 Ability Power 20 Ability Haste 20% Attack Speed",
    "cost": 3100,
    "shop": true,
    "from": [
      "item:3057",
      "item:1026",
      "item:3067",
      "item:1042"
    ],
    "image": "/assets/items/2510.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/2510.png"
  },
  {
    "id": "item:6620",
    "name": "Echoes of Helia",
    "category": "items",
    "aliases": [
      "helia"
    ],
    "tier": 4,
    "tags": [
      "Health",
      "SpellDamage",
      "ManaRegen",
      "CooldownReduction",
      "AbilityHaste"
    ],
    "stats": {
      "FlatHPPoolMod": 200,
      "FlatMagicDamageMod": 35
    },
    "statsText": "35 Ability Power 200 Health 20 Ability Haste 125% Base Mana Regen",
    "cost": 2200,
    "shop": true,
    "from": [
      "item:3067",
      "item:4642"
    ],
    "image": "/assets/items/6620.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/6620.png"
  },
  {
    "id": "item:6692",
    "name": "Eclipse",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Damage",
      "CooldownReduction",
      "AbilityHaste"
    ],
    "stats": {
      "FlatPhysicalDamageMod": 60
    },
    "statsText": "60 Attack Damage 15 Ability Haste",
    "cost": 2900,
    "shop": true,
    "from": [
      "item:3133",
      "item:1037",
      "item:1036"
    ],
    "image": "/assets/items/6692.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/6692.png"
  },
  {
    "id": "item:3814",
    "name": "Edge of Night",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Health",
      "Damage",
      "ArmorPenetration"
    ],
    "stats": {
      "FlatHPPoolMod": 250,
      "FlatPhysicalDamageMod": 50
    },
    "statsText": "50 Attack Damage 15 Lethality 250 Health",
    "cost": 3000,
    "shop": true,
    "from": [
      "item:3134",
      "item:2021"
    ],
    "image": "/assets/items/3814.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3814.png"
  },
  {
    "id": "champion:Ekko",
    "name": "Ekko",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Assassin",
      "Mage"
    ],
    "resource": "Mana",
    "title": "the Boy Who Shattered Time",
    "stats": {
      "hp": 655,
      "hpperlevel": 99,
      "mp": 280,
      "mpperlevel": 70,
      "movespeed": 340,
      "armor": 32,
      "armorperlevel": 4.2,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 125,
      "hpregen": 9,
      "hpregenperlevel": 0.9,
      "mpregen": 7,
      "mpregenperlevel": 0.8,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 58,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 3.3,
      "attackspeed": 0.688
    },
    "image": "/assets/champions/Ekko.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Ekko.png"
  },
  {
    "id": "map:elder-dragon",
    "name": "Elder Dragon",
    "category": "map",
    "aliases": [
      "elder",
      "elder drake"
    ],
    "tier": 2,
    "tags": [
      "monster",
      "epic",
      "dragon"
    ]
  },
  {
    "id": "champion:Elise",
    "name": "Elise",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Assassin",
      "Mage"
    ],
    "resource": "Mana",
    "title": "the Spider Queen",
    "stats": {
      "hp": 620,
      "hpperlevel": 109,
      "mp": 324,
      "mpperlevel": 50,
      "movespeed": 330,
      "armor": 30,
      "armorperlevel": 4.5,
      "spellblock": 30,
      "spellblockperlevel": 1.3,
      "attackrange": 550,
      "hpregen": 5.5,
      "hpregenperlevel": 0.6,
      "mpregen": 6,
      "mpregenperlevel": 0.8,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 55,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 1.75,
      "attackspeed": 0.625
    },
    "image": "/assets/champions/Elise.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Elise.png"
  },
  {
    "id": "item:2138",
    "name": "Elixir of Iron",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Health",
      "Consumable",
      "NonbootsMovement",
      "Tenacity"
    ],
    "stats": {},
    "statsText": "",
    "cost": 500,
    "shop": true,
    "from": [],
    "image": "/assets/items/2138.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/2138.png"
  },
  {
    "id": "item:2139",
    "name": "Elixir of Sorcery",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Consumable",
      "ManaRegen",
      "SpellDamage"
    ],
    "stats": {},
    "statsText": "",
    "cost": 500,
    "shop": true,
    "from": [],
    "image": "/assets/items/2139.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/2139.png"
  },
  {
    "id": "item:2140",
    "name": "Elixir of Wrath",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Consumable",
      "Damage",
      "LifeSteal",
      "SpellVamp"
    ],
    "stats": {},
    "statsText": "",
    "cost": 500,
    "shop": true,
    "from": [],
    "image": "/assets/items/2140.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/2140.png"
  },
  {
    "id": "item:2517",
    "name": "Endless Hunger",
    "category": "items",
    "aliases": [],
    "tier": 5,
    "tags": [
      "Damage",
      "LifeSteal",
      "SpellVamp",
      "Tenacity",
      "AbilityHaste"
    ],
    "stats": {
      "FlatPhysicalDamageMod": 65
    },
    "statsText": "65 Attack Damage 5% Omnivamp 20% Tenacity",
    "cost": 3100,
    "shop": true,
    "from": [
      "item:3133",
      "item:1037",
      "item:1036"
    ],
    "image": "/assets/items/2517.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/2517.png"
  },
  {
    "id": "item:3508",
    "name": "Essence Reaver",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Damage",
      "CriticalStrike",
      "ManaRegen",
      "CooldownReduction",
      "OnHit",
      "AbilityHaste"
    ],
    "stats": {
      "FlatCritChanceMod": 0.25,
      "FlatPhysicalDamageMod": 50
    },
    "statsText": "50 Attack Damage 20 Ability Haste 25% Critical Strike Chance",
    "cost": 3050,
    "shop": true,
    "from": [
      "item:3057",
      "item:3133",
      "item:1018"
    ],
    "image": "/assets/items/3508.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3508.png"
  },
  {
    "id": "champion:Evelynn",
    "name": "Evelynn",
    "category": "champions",
    "aliases": [
      "eve"
    ],
    "tier": 3,
    "tags": [
      "Assassin",
      "Mage"
    ],
    "resource": "Mana",
    "title": "Agony's Embrace",
    "stats": {
      "hp": 642,
      "hpperlevel": 98,
      "mp": 315,
      "mpperlevel": 42,
      "movespeed": 335,
      "armor": 37,
      "armorperlevel": 4.7,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 125,
      "hpregen": 8.5,
      "hpregenperlevel": 0.75,
      "mpregen": 8.11,
      "mpregenperlevel": 0.6,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 61,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.1,
      "attackspeed": 0.667
    },
    "image": "/assets/champions/Evelynn.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Evelynn.png"
  },
  {
    "id": "item:3123",
    "name": "Executioner's Calling",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Damage"
    ],
    "stats": {
      "FlatPhysicalDamageMod": 15
    },
    "statsText": "15 Attack Damage",
    "cost": 800,
    "shop": true,
    "from": [
      "item:1036"
    ],
    "image": "/assets/items/3123.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3123.png"
  },
  {
    "id": "item:3073",
    "name": "Experimental Hexplate",
    "category": "items",
    "aliases": [],
    "tier": 4,
    "tags": [
      "Health",
      "Damage",
      "AttackSpeed",
      "CooldownReduction",
      "NonbootsMovement",
      "AbilityHaste"
    ],
    "stats": {
      "FlatHPPoolMod": 450,
      "FlatPhysicalDamageMod": 40,
      "PercentAttackSpeedMod": 0.2
    },
    "statsText": "40 Attack Damage 20% Attack Speed 450 Health",
    "cost": 3000,
    "shop": true,
    "from": [
      "item:2021",
      "item:1042",
      "item:3044"
    ],
    "image": "/assets/items/3073.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3073.png"
  },
  {
    "id": "champion:Ezreal",
    "name": "Ezreal",
    "category": "champions",
    "aliases": [],
    "tier": 2,
    "tags": [
      "Marksman",
      "Mage"
    ],
    "resource": "Mana",
    "title": "the Prodigal Explorer",
    "stats": {
      "hp": 600,
      "hpperlevel": 102,
      "mp": 375,
      "mpperlevel": 70,
      "movespeed": 325,
      "armor": 24,
      "armorperlevel": 4.2,
      "spellblock": 33,
      "spellblockperlevel": 1.1,
      "attackrange": 550,
      "hpregen": 4,
      "hpregenperlevel": 0.65,
      "mpregen": 8.5,
      "mpregenperlevel": 1,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 60,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.5,
      "attackspeed": 0.625
    },
    "image": "/assets/champions/Ezreal.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Ezreal.png"
  },
  {
    "id": "item:1004",
    "name": "Faerie Charm",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "ManaRegen"
    ],
    "stats": {},
    "statsText": "50% Base Mana Regen",
    "cost": 200,
    "shop": true,
    "from": [],
    "image": "/assets/items/1004.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/1004.png"
  },
  {
    "id": "item:3363",
    "name": "Farsight Alteration",
    "category": "items",
    "aliases": [
      "blue trinket"
    ],
    "tier": 3,
    "tags": [
      "Active",
      "Trinket",
      "Vision"
    ],
    "stats": {},
    "statsText": "",
    "cost": 0,
    "shop": true,
    "from": [],
    "image": "/assets/items/3363.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3363.png"
  },
  {
    "id": "item:2508",
    "name": "Fated Ashes",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "SpellDamage"
    ],
    "stats": {
      "FlatMagicDamageMod": 30
    },
    "statsText": "30 Ability Power",
    "cost": 900,
    "shop": true,
    "from": [
      "item:1052"
    ],
    "image": "/assets/items/2508.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/2508.png"
  },
  {
    "id": "champion:Fiddlesticks",
    "name": "Fiddlesticks",
    "category": "champions",
    "aliases": [
      "fiddle",
      "fiddles"
    ],
    "tier": 3,
    "tags": [
      "Mage",
      "Support"
    ],
    "resource": "Mana",
    "title": "the Ancient Fear",
    "stats": {
      "hp": 650,
      "hpperlevel": 106,
      "mp": 500,
      "mpperlevel": 28,
      "movespeed": 335,
      "armor": 34,
      "armorperlevel": 4.7,
      "spellblock": 30,
      "spellblockperlevel": 1.3,
      "attackrange": 480,
      "hpregen": 5.5,
      "hpregenperlevel": 0.6,
      "mpregen": 8,
      "mpregenperlevel": 0.8,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 55,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.11,
      "attackspeed": 0.625
    },
    "image": "/assets/champions/Fiddlesticks.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Fiddlesticks.png"
  },
  {
    "id": "item:2512",
    "name": "Fiendhunter Bolts",
    "category": "items",
    "aliases": [],
    "tier": 4,
    "tags": [
      "CriticalStrike",
      "AttackSpeed",
      "NonbootsMovement",
      "AbilityHaste"
    ],
    "stats": {
      "FlatCritChanceMod": 0.25,
      "PercentAttackSpeedMod": 0.45,
      "PercentMovementSpeedMod": 0.04
    },
    "statsText": "45% Attack Speed 25% Critical Strike Chance 4% Move Speed",
    "cost": 2650,
    "shop": true,
    "from": [
      "item:3086",
      "item:3144"
    ],
    "image": "/assets/items/2512.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/2512.png"
  },
  {
    "id": "item:3108",
    "name": "Fiendish Codex",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "SpellDamage",
      "CooldownReduction",
      "AbilityHaste"
    ],
    "stats": {
      "FlatMagicDamageMod": 25
    },
    "statsText": "25 Ability Power 10 Ability Haste",
    "cost": 850,
    "shop": true,
    "from": [
      "item:1052",
      "item:2022"
    ],
    "image": "/assets/items/3108.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3108.png"
  },
  {
    "id": "item:3121",
    "name": "Fimbulwinter",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Health",
      "Mana",
      "AbilityHaste"
    ],
    "stats": {
      "FlatMPPoolMod": 1000,
      "FlatHPPoolMod": 550
    },
    "statsText": "550 Health 1000 Mana 15 Ability Haste",
    "cost": 2400,
    "shop": false,
    "from": [],
    "image": "/assets/items/3121.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3121.png"
  },
  {
    "id": "champion:Fiora",
    "name": "Fiora",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Fighter",
      "Assassin"
    ],
    "resource": "Mana",
    "title": "the Grand Duelist",
    "stats": {
      "hp": 620,
      "hpperlevel": 105,
      "mp": 300,
      "mpperlevel": 60,
      "movespeed": 345,
      "armor": 33,
      "armorperlevel": 4.7,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 150,
      "hpregen": 8.5,
      "hpregenperlevel": 0.55,
      "mpregen": 8,
      "mpregenperlevel": 0.7,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 66,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 3.2,
      "attackspeed": 0.69
    },
    "image": "/assets/champions/Fiora.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Fiora.png"
  },
  {
    "id": "champion:Fizz",
    "name": "Fizz",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Assassin",
      "Fighter"
    ],
    "resource": "Mana",
    "title": "the Tidal Trickster",
    "stats": {
      "hp": 640,
      "hpperlevel": 106,
      "mp": 317,
      "mpperlevel": 52,
      "movespeed": 335,
      "armor": 26,
      "armorperlevel": 4.6,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 175,
      "hpregen": 8,
      "hpregenperlevel": 0.7,
      "mpregen": 6,
      "mpregenperlevel": 0.8,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 58,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 3.1,
      "attackspeed": 0.658
    },
    "image": "/assets/champions/Fizz.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Fizz.png"
  },
  {
    "id": "item:3114",
    "name": "Forbidden Idol",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "ManaRegen"
    ],
    "stats": {},
    "statsText": "50% Base Mana Regen 8% Heal and Shield Power",
    "cost": 600,
    "shop": true,
    "from": [
      "item:1004"
    ],
    "image": "/assets/items/3114.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3114.png"
  },
  {
    "id": "item:4401",
    "name": "Force of Nature",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Health",
      "SpellBlock",
      "NonbootsMovement"
    ],
    "stats": {
      "FlatSpellBlockMod": 55,
      "FlatHPPoolMod": 400,
      "PercentMovementSpeedMod": 0.04
    },
    "statsText": "400 Health 55 Magic Resist 4% Move Speed",
    "cost": 2800,
    "shop": true,
    "from": [
      "item:1057",
      "item:1028",
      "item:3066"
    ],
    "image": "/assets/items/4401.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/4401.png"
  },
  {
    "id": "map:fountain",
    "name": "Fountain",
    "category": "map",
    "aliases": [
      "spawn",
      "spawn platform"
    ],
    "tier": 3,
    "tags": [
      "area"
    ]
  },
  {
    "id": "item:3110",
    "name": "Frozen Heart",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Armor",
      "Mana",
      "Aura",
      "CooldownReduction",
      "AbilityHaste"
    ],
    "stats": {
      "FlatMPPoolMod": 400,
      "FlatArmorMod": 75
    },
    "statsText": "75 Armor 400 Mana 20 Ability Haste",
    "cost": 2500,
    "shop": true,
    "from": [
      "item:3082",
      "item:3024"
    ],
    "image": "/assets/items/3110.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3110.png"
  },
  {
    "id": "champion:Galio",
    "name": "Galio",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Tank",
      "Mage"
    ],
    "resource": "Mana",
    "title": "the Colossus",
    "stats": {
      "hp": 600,
      "hpperlevel": 126,
      "mp": 410,
      "mpperlevel": 40,
      "movespeed": 340,
      "armor": 24,
      "armorperlevel": 4.7,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 150,
      "hpregen": 8,
      "hpregenperlevel": 0.8,
      "mpregen": 9.5,
      "mpregenperlevel": 0.7,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 59,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 1.5,
      "attackspeed": 0.625
    },
    "image": "/assets/champions/Galio.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Galio.png"
  },
  {
    "id": "champion:Gangplank",
    "name": "Gangplank",
    "category": "champions",
    "aliases": [
      "gp"
    ],
    "tier": 3,
    "tags": [
      "Fighter"
    ],
    "resource": "Mana",
    "title": "the Saltwater Scourge",
    "stats": {
      "hp": 630,
      "hpperlevel": 114,
      "mp": 280,
      "mpperlevel": 60,
      "movespeed": 345,
      "armor": 31,
      "armorperlevel": 4.7,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 125,
      "hpregen": 6,
      "hpregenperlevel": 0.6,
      "mpregen": 8,
      "mpregenperlevel": 0.7,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 64,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 3.2,
      "attackspeed": 0.658
    },
    "image": "/assets/champions/Gangplank.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Gangplank.png"
  },
  {
    "id": "champion:Garen",
    "name": "Garen",
    "category": "champions",
    "aliases": [],
    "tier": 1,
    "tags": [
      "Fighter",
      "Tank"
    ],
    "resource": "None",
    "title": "The Might of Demacia",
    "stats": {
      "hp": 690,
      "hpperlevel": 98,
      "mp": 0,
      "mpperlevel": 0,
      "movespeed": 340,
      "armor": 38,
      "armorperlevel": 4.2,
      "spellblock": 32,
      "spellblockperlevel": 1.55,
      "attackrange": 175,
      "hpregen": 8,
      "hpregenperlevel": 0.5,
      "mpregen": 0,
      "mpregenperlevel": 0,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 69,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 3.65,
      "attackspeed": 0.625
    },
    "image": "/assets/champions/Garen.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Garen.png"
  },
  {
    "id": "item:1011",
    "name": "Giant's Belt",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Health"
    ],
    "stats": {
      "FlatHPPoolMod": 350
    },
    "statsText": "350 Health",
    "cost": 900,
    "shop": true,
    "from": [
      "item:1028"
    ],
    "image": "/assets/items/1011.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/1011.png"
  },
  {
    "id": "item:3024",
    "name": "Glacial Buckler",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Armor",
      "Mana",
      "CooldownReduction",
      "AbilityHaste"
    ],
    "stats": {
      "FlatMPPoolMod": 300,
      "FlatArmorMod": 25
    },
    "statsText": "25 Armor 300 Mana 10 Ability Haste",
    "cost": 900,
    "shop": true,
    "from": [
      "item:1029",
      "item:1027",
      "item:2022"
    ],
    "image": "/assets/items/3024.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3024.png"
  },
  {
    "id": "item:2022",
    "name": "Glowing Mote",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "CooldownReduction"
    ],
    "stats": {},
    "statsText": "5 Ability Haste",
    "cost": 250,
    "shop": true,
    "from": [],
    "image": "/assets/items/2022.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/2022.png"
  },
  {
    "id": "item:3008",
    "name": "Gluttonous Greaves",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "LifeSteal",
      "SpellVamp",
      "Boots"
    ],
    "stats": {
      "FlatMovementSpeedMod": 45
    },
    "statsText": "45 Move Speed 4% Omnivamp",
    "cost": 1100,
    "shop": true,
    "from": [
      "item:1001"
    ],
    "image": "/assets/items/3008.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3008.png"
  },
  {
    "id": "champion:Gnar",
    "name": "Gnar",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Fighter",
      "Tank"
    ],
    "resource": "Rage",
    "title": "the Missing Link",
    "stats": {
      "hp": 540,
      "hpperlevel": 79,
      "mp": 100,
      "mpperlevel": 0,
      "movespeed": 335,
      "armor": 32,
      "armorperlevel": 3.7,
      "spellblock": 30,
      "spellblockperlevel": 1.3,
      "attackrange": 175,
      "hpregen": 4.5,
      "hpregenperlevel": 1.25,
      "mpregen": 0,
      "mpregenperlevel": 0,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 60,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 6,
      "attackspeed": 0.625
    },
    "image": "/assets/champions/Gnar.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Gnar.png"
  },
  {
    "id": "champion:Gragas",
    "name": "Gragas",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Fighter",
      "Mage"
    ],
    "resource": "Mana",
    "title": "the Rabble Rouser",
    "stats": {
      "hp": 640,
      "hpperlevel": 115,
      "mp": 400,
      "mpperlevel": 47,
      "movespeed": 330,
      "armor": 38,
      "armorperlevel": 5,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 125,
      "hpregen": 5.5,
      "hpregenperlevel": 0.5,
      "mpregen": 6,
      "mpregenperlevel": 0.8,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 64,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.05,
      "attackspeed": 0.675
    },
    "image": "/assets/champions/Gragas.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Gragas.png"
  },
  {
    "id": "champion:Graves",
    "name": "Graves",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Marksman"
    ],
    "resource": "Mana",
    "title": "the Outlaw",
    "stats": {
      "hp": 625,
      "hpperlevel": 106,
      "mp": 325,
      "mpperlevel": 40,
      "movespeed": 340,
      "armor": 33,
      "armorperlevel": 4.6,
      "spellblock": 33,
      "spellblockperlevel": 1.1,
      "attackrange": 425,
      "hpregen": 8,
      "hpregenperlevel": 0.7,
      "mpregen": 8,
      "mpregenperlevel": 0.7,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 66,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 3,
      "attackspeed": 0.475
    },
    "image": "/assets/champions/Graves.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Graves.png"
  },
  {
    "id": "map:gromp",
    "name": "Gromp",
    "category": "map",
    "aliases": [
      "frog",
      "gromps"
    ],
    "tier": 2,
    "tags": [
      "monster",
      "camp"
    ]
  },
  {
    "id": "item:3026",
    "name": "Guardian Angel",
    "category": "items",
    "aliases": [
      "ga"
    ],
    "tier": 3,
    "tags": [
      "Armor",
      "Damage"
    ],
    "stats": {
      "FlatArmorMod": 45,
      "FlatPhysicalDamageMod": 55
    },
    "statsText": "55 Attack Damage 45 Armor",
    "cost": 3200,
    "shop": true,
    "from": [
      "item:2019",
      "item:1038"
    ],
    "image": "/assets/items/3026.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3026.png"
  },
  {
    "id": "item:3124",
    "name": "Guinsoo's Rageblade",
    "category": "items",
    "aliases": [
      "guinsoos",
      "rageblade"
    ],
    "tier": 3,
    "tags": [
      "Damage",
      "AttackSpeed",
      "SpellDamage",
      "OnHit"
    ],
    "stats": {
      "FlatMagicDamageMod": 30,
      "FlatPhysicalDamageMod": 30,
      "PercentAttackSpeedMod": 0.25
    },
    "statsText": "30 Attack Damage 30 Ability Power 25% Attack Speed",
    "cost": 3000,
    "shop": true,
    "from": [
      "item:1052",
      "item:1043",
      "item:1037"
    ],
    "image": "/assets/items/3124.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3124.png"
  },
  {
    "id": "item:3172",
    "name": "Gunmetal Greaves",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "AttackSpeed",
      "LifeSteal",
      "NonbootsMovement"
    ],
    "stats": {
      "FlatMovementSpeedMod": 45,
      "PercentAttackSpeedMod": 0.45,
      "PercentLifeStealMod": 0.05
    },
    "statsText": "45% Attack Speed 45 Move Speed 5% Life Steal",
    "cost": 1100,
    "shop": true,
    "from": [
      "item:3006"
    ],
    "image": "/assets/items/3172.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3172.png"
  },
  {
    "id": "item:1102",
    "name": "Gustwalker Hatchling",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Jungle"
    ],
    "stats": {},
    "statsText": "",
    "cost": 450,
    "shop": true,
    "from": [],
    "image": "/assets/items/1102.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/1102.png"
  },
  {
    "id": "champion:Gwen",
    "name": "Gwen",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Fighter"
    ],
    "resource": "Mana",
    "title": "The Hallowed Seamstress",
    "stats": {
      "hp": 620,
      "hpperlevel": 115,
      "mp": 330,
      "mpperlevel": 40,
      "movespeed": 340,
      "armor": 39,
      "armorperlevel": 4.9,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 150,
      "hpregen": 9,
      "hpregenperlevel": 0.9,
      "mpregen": 7.5,
      "mpregenperlevel": 0.7,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 63,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.25,
      "attackspeed": 0.69
    },
    "image": "/assets/champions/Gwen.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Gwen.png"
  },
  {
    "id": "item:3147",
    "name": "Haunting Guise",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Health",
      "SpellDamage"
    ],
    "stats": {
      "FlatHPPoolMod": 200,
      "FlatMagicDamageMod": 30
    },
    "statsText": "30 Ability Power 200 Health",
    "cost": 1300,
    "shop": true,
    "from": [
      "item:1052",
      "item:1028"
    ],
    "image": "/assets/items/3147.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3147.png"
  },
  {
    "id": "item:2003",
    "name": "Health Potion",
    "category": "items",
    "aliases": [],
    "tier": 1,
    "tags": [
      "HealthRegen",
      "Consumable",
      "Lane",
      "Jungle"
    ],
    "stats": {},
    "statsText": "",
    "cost": 50,
    "shop": true,
    "from": [],
    "image": "/assets/items/2003.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/2003.png"
  },
  {
    "id": "item:3051",
    "name": "Hearthbound Axe",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Damage",
      "AttackSpeed"
    ],
    "stats": {
      "FlatPhysicalDamageMod": 20,
      "PercentAttackSpeedMod": 0.2
    },
    "statsText": "20 Attack Damage 20% Attack Speed",
    "cost": 1200,
    "shop": true,
    "from": [
      "item:1036",
      "item:1042",
      "item:1036"
    ],
    "image": "/assets/items/3051.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3051.png"
  },
  {
    "id": "item:3084",
    "name": "Heartsteel",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Health",
      "HealthRegen"
    ],
    "stats": {
      "FlatHPPoolMod": 900
    },
    "statsText": "900 Health 100% Base Health Regen",
    "cost": 3000,
    "shop": true,
    "from": [
      "item:1011",
      "item:3801",
      "item:1011"
    ],
    "image": "/assets/items/3084.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3084.png"
  },
  {
    "id": "champion:Hecarim",
    "name": "Hecarim",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Fighter",
      "Tank"
    ],
    "resource": "Mana",
    "title": "the Shadow of War",
    "stats": {
      "hp": 625,
      "hpperlevel": 106,
      "mp": 280,
      "mpperlevel": 40,
      "movespeed": 345,
      "armor": 32,
      "armorperlevel": 5.45,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 175,
      "hpregen": 7,
      "hpregenperlevel": 0.75,
      "mpregen": 7,
      "mpregenperlevel": 0.8,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 66,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.5,
      "attackspeed": 0.67
    },
    "image": "/assets/champions/Hecarim.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Hecarim.png"
  },
  {
    "id": "champion:Heimerdinger",
    "name": "Heimerdinger",
    "category": "champions",
    "aliases": [
      "heimer",
      "donger"
    ],
    "tier": 4,
    "tags": [
      "Mage",
      "Support"
    ],
    "resource": "Mana",
    "title": "the Revered Inventor",
    "stats": {
      "hp": 558,
      "hpperlevel": 105,
      "mp": 385,
      "mpperlevel": 20,
      "movespeed": 340,
      "armor": 19,
      "armorperlevel": 4.2,
      "spellblock": 30,
      "spellblockperlevel": 1.3,
      "attackrange": 550,
      "hpregen": 7,
      "hpregenperlevel": 0.55,
      "mpregen": 8,
      "mpregenperlevel": 0.8,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 56,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 1.36,
      "attackspeed": 0.658
    },
    "image": "/assets/champions/Heimerdinger.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Heimerdinger.png"
  },
  {
    "id": "item:3155",
    "name": "Hexdrinker",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Damage",
      "SpellBlock"
    ],
    "stats": {
      "FlatSpellBlockMod": 25,
      "FlatPhysicalDamageMod": 25
    },
    "statsText": "25 Attack Damage 25 Magic Resist",
    "cost": 1300,
    "shop": true,
    "from": [
      "item:1036",
      "item:1033",
      "item:1036"
    ],
    "image": "/assets/items/3155.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3155.png"
  },
  {
    "id": "item:2523",
    "name": "Hexoptics C44",
    "category": "items",
    "aliases": [],
    "tier": 4,
    "tags": [
      "Damage",
      "CriticalStrike"
    ],
    "stats": {
      "FlatCritChanceMod": 0.25,
      "FlatPhysicalDamageMod": 55
    },
    "statsText": "55 Attack Damage 25% Critical Strike Chance",
    "cost": 2800,
    "shop": true,
    "from": [
      "item:1037",
      "item:6670",
      "item:1036"
    ],
    "image": "/assets/items/2523.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/2523.png"
  },
  {
    "id": "item:3145",
    "name": "Hextech Alternator",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "SpellDamage"
    ],
    "stats": {
      "FlatMagicDamageMod": 45
    },
    "statsText": "45 Ability Power",
    "cost": 1100,
    "shop": true,
    "from": [
      "item:1052",
      "item:1052"
    ],
    "image": "/assets/items/3145.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3145.png"
  },
  {
    "id": "map:hextech-drake",
    "name": "Hextech Drake",
    "category": "map",
    "aliases": [
      "hextech",
      "hextech dragon"
    ],
    "tier": 4,
    "tags": [
      "monster",
      "epic",
      "dragon",
      "elemental"
    ]
  },
  {
    "id": "item:3146",
    "name": "Hextech Gunblade",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Damage",
      "LifeSteal",
      "SpellDamage",
      "Active",
      "SpellVamp"
    ],
    "stats": {
      "FlatMagicDamageMod": 80,
      "FlatPhysicalDamageMod": 40
    },
    "statsText": "80 Ability Power 40 Attack Damage 10% Omnivamp",
    "cost": 3000,
    "shop": true,
    "from": [
      "item:1053",
      "item:3145",
      "item:1052"
    ],
    "image": "/assets/items/3146.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3146.png"
  },
  {
    "id": "item:3152",
    "name": "Hextech Rocketbelt",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Health",
      "SpellDamage",
      "Active",
      "CooldownReduction",
      "NonbootsMovement",
      "AbilityHaste"
    ],
    "stats": {
      "FlatHPPoolMod": 350,
      "FlatMagicDamageMod": 60
    },
    "statsText": "60 Ability Power 350 Health 10 Ability Haste",
    "cost": 2650,
    "shop": true,
    "from": [
      "item:3145",
      "item:3067",
      "item:1028"
    ],
    "image": "/assets/items/3152.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3152.png"
  },
  {
    "id": "item:6664",
    "name": "Hollow Radiance",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Health",
      "SpellBlock",
      "HealthRegen",
      "Aura",
      "MagicResist",
      "AbilityHaste"
    ],
    "stats": {
      "FlatSpellBlockMod": 40,
      "FlatHPPoolMod": 400
    },
    "statsText": "400 Health 40 Magic Resist 10 Ability Haste 100% Base Health Regen",
    "cost": 2800,
    "shop": true,
    "from": [
      "item:6660",
      "item:3211"
    ],
    "image": "/assets/items/6664.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/6664.png"
  },
  {
    "id": "map:honeyfruit",
    "name": "Honeyfruit",
    "category": "map",
    "aliases": [
      "honey fruit",
      "fruit",
      "healing plant"
    ],
    "tier": 3,
    "tags": [
      "plant"
    ]
  },
  {
    "id": "item:4628",
    "name": "Horizon Focus",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "SpellDamage",
      "AbilityHaste"
    ],
    "stats": {
      "FlatMagicDamageMod": 75
    },
    "statsText": "75 Ability Power 25 Ability Haste",
    "cost": 2700,
    "shop": true,
    "from": [
      "item:3108",
      "item:3108",
      "item:1052"
    ],
    "image": "/assets/items/4628.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/4628.png"
  },
  {
    "id": "map:howling-abyss",
    "name": "Howling Abyss",
    "category": "map",
    "aliases": [
      "ha",
      "aram map"
    ],
    "tier": 3,
    "tags": [
      "map"
    ]
  },
  {
    "id": "item:6697",
    "name": "Hubris",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Damage",
      "Active",
      "CooldownReduction",
      "ArmorPenetration",
      "AbilityHaste"
    ],
    "stats": {
      "FlatPhysicalDamageMod": 55
    },
    "statsText": "55 Attack Damage 18 Lethality 10 Ability Haste",
    "cost": 2800,
    "shop": true,
    "from": [
      "item:3134",
      "item:3133"
    ],
    "image": "/assets/items/6697.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/6697.png"
  },
  {
    "id": "item:3181",
    "name": "Hullbreaker",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Health",
      "Damage",
      "NonbootsMovement"
    ],
    "stats": {
      "FlatHPPoolMod": 500,
      "FlatPhysicalDamageMod": 40,
      "PercentMovementSpeedMod": 0.04
    },
    "statsText": "40 Attack Damage 500 Health 4% Move Speed",
    "cost": 3000,
    "shop": true,
    "from": [
      "item:2021",
      "item:3066",
      "item:1037"
    ],
    "image": "/assets/items/3181.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3181.png"
  },
  {
    "id": "champion:Hwei",
    "name": "Hwei",
    "category": "champions",
    "aliases": [],
    "tier": 4,
    "tags": [
      "Mage",
      "Support"
    ],
    "resource": "Mana",
    "title": "the Visionary",
    "stats": {
      "hp": 580,
      "hpperlevel": 109,
      "mp": 480,
      "mpperlevel": 30,
      "movespeed": 330,
      "armor": 21,
      "armorperlevel": 4.7,
      "spellblock": 30,
      "spellblockperlevel": 1.3,
      "attackrange": 550,
      "hpregen": 5.5,
      "hpregenperlevel": 0.55,
      "mpregen": 7.5,
      "mpregenperlevel": 0.75,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 54,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.5,
      "attackspeed": 0.69
    },
    "image": "/assets/champions/Hwei.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Hwei.png"
  },
  {
    "id": "item:6662",
    "name": "Iceborn Gauntlet",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Health",
      "Armor",
      "CooldownReduction",
      "Slow",
      "OnHit",
      "AbilityHaste"
    ],
    "stats": {
      "FlatHPPoolMod": 300,
      "FlatArmorMod": 50
    },
    "statsText": "300 Health 50 Armor 15 Ability Haste",
    "cost": 2900,
    "shop": true,
    "from": [
      "item:3057",
      "item:1028",
      "item:1031"
    ],
    "image": "/assets/items/6662.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/6662.png"
  },
  {
    "id": "champion:Illaoi",
    "name": "Illaoi",
    "category": "champions",
    "aliases": [],
    "tier": 4,
    "tags": [
      "Fighter",
      "Tank"
    ],
    "resource": "Mana",
    "title": "the Kraken Priestess",
    "stats": {
      "hp": 656,
      "hpperlevel": 115,
      "mp": 350,
      "mpperlevel": 50,
      "movespeed": 350,
      "armor": 35,
      "armorperlevel": 5,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 125,
      "hpregen": 9.5,
      "hpregenperlevel": 0.8,
      "mpregen": 7.5,
      "mpregenperlevel": 0.75,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 65,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.5,
      "attackspeed": 0.625
    },
    "image": "/assets/champions/Illaoi.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Illaoi.png"
  },
  {
    "id": "item:3168",
    "name": "Immortal Path",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "LifeSteal",
      "SpellVamp",
      "Boots"
    ],
    "stats": {
      "FlatMovementSpeedMod": 45
    },
    "statsText": "45 Move Speed 4% Omnivamp",
    "cost": 1100,
    "shop": true,
    "from": [
      "item:3008"
    ],
    "image": "/assets/items/3168.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3168.png"
  },
  {
    "id": "item:6673",
    "name": "Immortal Shieldbow",
    "category": "items",
    "aliases": [
      "shieldbow"
    ],
    "tier": 3,
    "tags": [
      "Damage",
      "CriticalStrike"
    ],
    "stats": {
      "FlatCritChanceMod": 0.25,
      "FlatPhysicalDamageMod": 55
    },
    "statsText": "55 Attack Damage 25% Critical Strike Chance",
    "cost": 3000,
    "shop": true,
    "from": [
      "item:1037",
      "item:6670"
    ],
    "image": "/assets/items/6673.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/6673.png"
  },
  {
    "id": "item:4005",
    "name": "Imperial Mandate",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "SpellDamage",
      "ManaRegen",
      "CooldownReduction",
      "AbilityHaste"
    ],
    "stats": {
      "FlatMagicDamageMod": 60
    },
    "statsText": "60 Ability Power 15 Ability Haste 150% Base Mana Regen",
    "cost": 2400,
    "shop": true,
    "from": [
      "item:1052",
      "item:4642",
      "item:1052"
    ],
    "image": "/assets/items/4005.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/4005.png"
  },
  {
    "id": "map:infernal-drake",
    "name": "Infernal Drake",
    "category": "map",
    "aliases": [
      "infernal",
      "fire dragon",
      "infernal dragon",
      "fire drake"
    ],
    "tier": 3,
    "tags": [
      "monster",
      "epic",
      "dragon",
      "elemental"
    ]
  },
  {
    "id": "item:3031",
    "name": "Infinity Edge",
    "category": "items",
    "aliases": [
      "ie"
    ],
    "tier": 2,
    "tags": [
      "CriticalStrike",
      "Damage"
    ],
    "stats": {
      "FlatCritChanceMod": 0.25,
      "FlatPhysicalDamageMod": 75
    },
    "statsText": "75 Attack Damage 25% Critical Strike Chance 30% Critical Strike Damage",
    "cost": 3500,
    "shop": true,
    "from": [
      "item:1038",
      "item:1037",
      "item:1018"
    ],
    "image": "/assets/items/3031.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3031.png"
  },
  {
    "id": "map:inhibitor",
    "name": "Inhibitor",
    "category": "map",
    "aliases": [
      "inhib",
      "inhibitors"
    ],
    "tier": 2,
    "tags": [
      "structure"
    ]
  },
  {
    "id": "item:3158",
    "name": "Ionian Boots of Lucidity",
    "category": "items",
    "aliases": [
      "lucidity boots",
      "ionian boots"
    ],
    "tier": 3,
    "tags": [
      "Boots",
      "CooldownReduction"
    ],
    "stats": {
      "FlatMovementSpeedMod": 45
    },
    "statsText": "10 Ability Haste 45 Move Speed",
    "cost": 900,
    "shop": true,
    "from": [
      "item:1001",
      "item:2022"
    ],
    "image": "/assets/items/3158.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3158.png"
  },
  {
    "id": "champion:Irelia",
    "name": "Irelia",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Fighter",
      "Assassin"
    ],
    "resource": "Mana",
    "title": "the Blade Dancer",
    "stats": {
      "hp": 630,
      "hpperlevel": 115,
      "mp": 350,
      "mpperlevel": 50,
      "movespeed": 335,
      "armor": 36,
      "armorperlevel": 4.7,
      "spellblock": 30,
      "spellblockperlevel": 2.05,
      "attackrange": 200,
      "hpregen": 3.5,
      "hpregenperlevel": 0.85,
      "mpregen": 8,
      "mpregenperlevel": 0.8,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 65,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.5,
      "attackspeed": 0.656
    },
    "image": "/assets/champions/Irelia.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Irelia.png"
  },
  {
    "id": "champion:Ivern",
    "name": "Ivern",
    "category": "champions",
    "aliases": [],
    "tier": 5,
    "tags": [
      "Support",
      "Mage"
    ],
    "resource": "Mana",
    "title": "the Green Father",
    "stats": {
      "hp": 630,
      "hpperlevel": 99,
      "mp": 450,
      "mpperlevel": 60,
      "movespeed": 330,
      "armor": 27,
      "armorperlevel": 4.7,
      "spellblock": 30,
      "spellblockperlevel": 1.3,
      "attackrange": 475,
      "hpregen": 7,
      "hpregenperlevel": 0.85,
      "mpregen": 6,
      "mpregenperlevel": 0.75,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 50,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 3.4,
      "attackspeed": 0.644
    },
    "image": "/assets/champions/Ivern.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Ivern.png"
  },
  {
    "id": "item:6665",
    "name": "Jak'Sho, The Protean",
    "category": "items",
    "aliases": [
      "jaksho"
    ],
    "tier": 3,
    "tags": [
      "Health",
      "SpellBlock",
      "Armor",
      "MagicResist"
    ],
    "stats": {
      "FlatSpellBlockMod": 45,
      "FlatHPPoolMod": 350,
      "FlatArmorMod": 45
    },
    "statsText": "350 Health 45 Armor 45 Magic Resist",
    "cost": 3200,
    "shop": true,
    "from": [
      "item:1011",
      "item:1031",
      "item:1057"
    ],
    "image": "/assets/items/6665.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/6665.png"
  },
  {
    "id": "champion:Janna",
    "name": "Janna",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Support",
      "Mage"
    ],
    "resource": "Mana",
    "title": "the Storm's Fury",
    "stats": {
      "hp": 570,
      "hpperlevel": 90,
      "mp": 360,
      "mpperlevel": 50,
      "movespeed": 325,
      "armor": 28,
      "armorperlevel": 4.5,
      "spellblock": 30,
      "spellblockperlevel": 1.3,
      "attackrange": 550,
      "hpregen": 5.5,
      "hpregenperlevel": 0.55,
      "mpregen": 11.5,
      "mpregenperlevel": 0.4,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 47,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 3,
      "attackspeed": 0.625
    },
    "image": "/assets/champions/Janna.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Janna.png"
  },
  {
    "id": "champion:JarvanIV",
    "name": "Jarvan IV",
    "category": "champions",
    "aliases": [
      "j4",
      "jarvan",
      "jarvan 4"
    ],
    "tier": 3,
    "tags": [
      "Fighter",
      "Tank"
    ],
    "resource": "Mana",
    "title": "the Exemplar of Demacia",
    "stats": {
      "hp": 640,
      "hpperlevel": 104,
      "mp": 300,
      "mpperlevel": 55,
      "movespeed": 340,
      "armor": 36,
      "armorperlevel": 4.6,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 175,
      "hpregen": 8,
      "hpregenperlevel": 0.7,
      "mpregen": 6.5,
      "mpregenperlevel": 0.45,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 64,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.5,
      "attackspeed": 0.658
    },
    "image": "/assets/champions/JarvanIV.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/JarvanIV.png"
  },
  {
    "id": "champion:Jax",
    "name": "Jax",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Fighter"
    ],
    "resource": "Mana",
    "title": "Grandmaster at Arms",
    "stats": {
      "hp": 650,
      "hpperlevel": 103,
      "mp": 339,
      "mpperlevel": 52,
      "movespeed": 350,
      "armor": 36,
      "armorperlevel": 4.2,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 125,
      "hpregen": 8.5,
      "hpregenperlevel": 0.55,
      "mpregen": 8.2,
      "mpregenperlevel": 0.7,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 68,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 3.4,
      "attackspeed": 0.638
    },
    "image": "/assets/champions/Jax.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Jax.png"
  },
  {
    "id": "champion:Jayce",
    "name": "Jayce",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Fighter",
      "Marksman"
    ],
    "resource": "Mana",
    "title": "the Defender of Tomorrow",
    "stats": {
      "hp": 590,
      "hpperlevel": 109,
      "mp": 375,
      "mpperlevel": 45,
      "movespeed": 335,
      "armor": 22,
      "armorperlevel": 5,
      "spellblock": 30,
      "spellblockperlevel": 1.3,
      "attackrange": 125,
      "hpregen": 6,
      "hpregenperlevel": 0.6,
      "mpregen": 6,
      "mpregenperlevel": 0.8,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 59,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 3,
      "attackspeed": 0.658
    },
    "image": "/assets/champions/Jayce.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Jayce.png"
  },
  {
    "id": "champion:Jhin",
    "name": "Jhin",
    "category": "champions",
    "aliases": [],
    "tier": 2,
    "tags": [
      "Marksman",
      "Mage"
    ],
    "resource": "Mana",
    "title": "the Virtuoso",
    "stats": {
      "hp": 655,
      "hpperlevel": 107,
      "mp": 300,
      "mpperlevel": 50,
      "movespeed": 330,
      "armor": 24,
      "armorperlevel": 4.7,
      "spellblock": 33,
      "spellblockperlevel": 1.1,
      "attackrange": 550,
      "hpregen": 3.75,
      "hpregenperlevel": 0.55,
      "mpregen": 6,
      "mpregenperlevel": 0.8,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 61,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 0,
      "attackspeed": 0.625
    },
    "image": "/assets/champions/Jhin.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Jhin.png"
  },
  {
    "id": "champion:Jinx",
    "name": "Jinx",
    "category": "champions",
    "aliases": [],
    "tier": 1,
    "tags": [
      "Marksman"
    ],
    "resource": "Mana",
    "title": "the Loose Cannon",
    "stats": {
      "hp": 610,
      "hpperlevel": 105,
      "mp": 260,
      "mpperlevel": 50,
      "movespeed": 325,
      "armor": 26,
      "armorperlevel": 4.2,
      "spellblock": 33,
      "spellblockperlevel": 1.1,
      "attackrange": 525,
      "hpregen": 3.75,
      "hpregenperlevel": 0.5,
      "mpregen": 6.7,
      "mpregenperlevel": 1,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 59,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 1,
      "attackspeed": 0.625
    },
    "image": "/assets/champions/Jinx.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Jinx.png"
  },
  {
    "id": "map:jungle",
    "name": "Jungle",
    "category": "map",
    "aliases": [
      "jg",
      "jgl"
    ],
    "tier": 3,
    "tags": [
      "area"
    ]
  },
  {
    "id": "champion:KSante",
    "name": "K'Sante",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Tank",
      "Fighter"
    ],
    "resource": "Mana",
    "title": "the Pride of Nazumah",
    "stats": {
      "hp": 625,
      "hpperlevel": 120,
      "mp": 320,
      "mpperlevel": 60,
      "movespeed": 330,
      "armor": 36,
      "armorperlevel": 5.2,
      "spellblock": 30,
      "spellblockperlevel": 2.1,
      "attackrange": 150,
      "hpregen": 9.5,
      "hpregenperlevel": 1,
      "mpregen": 7,
      "mpregenperlevel": 1,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 64,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.5,
      "attackspeed": 0.688
    },
    "image": "/assets/champions/KSante.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/KSante.png"
  },
  {
    "id": "item:2504",
    "name": "Kaenic Rookern",
    "category": "items",
    "aliases": [],
    "tier": 4,
    "tags": [
      "Health",
      "SpellBlock",
      "HealthRegen"
    ],
    "stats": {
      "FlatSpellBlockMod": 80,
      "FlatHPPoolMod": 400
    },
    "statsText": "400 Health 80 Magic Resist 100% Base Health Regen",
    "cost": 2900,
    "shop": true,
    "from": [
      "item:3211",
      "item:1057"
    ],
    "image": "/assets/items/2504.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/2504.png"
  },
  {
    "id": "champion:Kaisa",
    "name": "Kai'Sa",
    "category": "champions",
    "aliases": [
      "kai sa"
    ],
    "tier": 3,
    "tags": [
      "Marksman",
      "Mage"
    ],
    "resource": "Mana",
    "title": "Daughter of the Void",
    "stats": {
      "hp": 640,
      "hpperlevel": 102,
      "mp": 345,
      "mpperlevel": 40,
      "movespeed": 335,
      "armor": 25,
      "armorperlevel": 4.2,
      "spellblock": 33,
      "spellblockperlevel": 1.1,
      "attackrange": 525,
      "hpregen": 4,
      "hpregenperlevel": 0.55,
      "mpregen": 8.2,
      "mpregenperlevel": 0.7,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 59,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 1.8,
      "attackspeed": 0.644
    },
    "image": "/assets/champions/Kaisa.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Kaisa.png"
  },
  {
    "id": "champion:Kalista",
    "name": "Kalista",
    "category": "champions",
    "aliases": [],
    "tier": 4,
    "tags": [
      "Marksman"
    ],
    "resource": "Mana",
    "title": "the Spear of Vengeance",
    "stats": {
      "hp": 560,
      "hpperlevel": 114,
      "mp": 300,
      "mpperlevel": 45,
      "movespeed": 330,
      "armor": 24,
      "armorperlevel": 5.2,
      "spellblock": 33,
      "spellblockperlevel": 1.1,
      "attackrange": 525,
      "hpregen": 4,
      "hpregenperlevel": 0.75,
      "mpregen": 6.3,
      "mpregenperlevel": 0.8,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 57,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 4.5,
      "attackspeed": 0.694
    },
    "image": "/assets/champions/Kalista.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Kalista.png"
  },
  {
    "id": "champion:Karma",
    "name": "Karma",
    "category": "champions",
    "aliases": [],
    "tier": 4,
    "tags": [
      "Mage",
      "Support"
    ],
    "resource": "Mana",
    "title": "the Enlightened One",
    "stats": {
      "hp": 630,
      "hpperlevel": 109,
      "mp": 374,
      "mpperlevel": 40,
      "movespeed": 335,
      "armor": 28,
      "armorperlevel": 5,
      "spellblock": 30,
      "spellblockperlevel": 1.3,
      "attackrange": 525,
      "hpregen": 5.5,
      "hpregenperlevel": 0.55,
      "mpregen": 13,
      "mpregenperlevel": 0.8,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 49,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.3,
      "attackspeed": 0.625
    },
    "image": "/assets/champions/Karma.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Karma.png"
  },
  {
    "id": "champion:Karthus",
    "name": "Karthus",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Mage"
    ],
    "resource": "Mana",
    "title": "the Deathsinger",
    "stats": {
      "hp": 620,
      "hpperlevel": 110,
      "mp": 467,
      "mpperlevel": 31,
      "movespeed": 335,
      "armor": 21,
      "armorperlevel": 4.7,
      "spellblock": 30,
      "spellblockperlevel": 1.3,
      "attackrange": 450,
      "hpregen": 6.5,
      "hpregenperlevel": 0.55,
      "mpregen": 8,
      "mpregenperlevel": 0.8,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 46,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.11,
      "attackspeed": 0.625
    },
    "image": "/assets/champions/Karthus.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Karthus.png"
  },
  {
    "id": "champion:Kassadin",
    "name": "Kassadin",
    "category": "champions",
    "aliases": [
      "kass"
    ],
    "tier": 3,
    "tags": [
      "Assassin",
      "Mage"
    ],
    "resource": "Mana",
    "title": "the Void Walker",
    "stats": {
      "hp": 646,
      "hpperlevel": 113,
      "mp": 400,
      "mpperlevel": 87,
      "movespeed": 335,
      "armor": 21,
      "armorperlevel": 4,
      "spellblock": 30,
      "spellblockperlevel": 1.3,
      "attackrange": 150,
      "hpregen": 6,
      "hpregenperlevel": 0.5,
      "mpregen": 6,
      "mpregenperlevel": 0.8,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 59,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 3.7,
      "attackspeed": 0.64
    },
    "image": "/assets/champions/Kassadin.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Kassadin.png"
  },
  {
    "id": "champion:Katarina",
    "name": "Katarina",
    "category": "champions",
    "aliases": [
      "kat",
      "kata"
    ],
    "tier": 3,
    "tags": [
      "Assassin",
      "Mage"
    ],
    "resource": "None",
    "title": "the Sinister Blade",
    "stats": {
      "hp": 672,
      "hpperlevel": 108,
      "mp": 0,
      "mpperlevel": 0,
      "movespeed": 335,
      "armor": 32,
      "armorperlevel": 4.7,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 125,
      "hpregen": 7.5,
      "hpregenperlevel": 0.7,
      "mpregen": 0,
      "mpregenperlevel": 0,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 58,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.74,
      "attackspeed": 0.658
    },
    "image": "/assets/champions/Katarina.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Katarina.png"
  },
  {
    "id": "champion:Kayle",
    "name": "Kayle",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Marksman",
      "Mage"
    ],
    "resource": "Mana",
    "title": "the Righteous",
    "stats": {
      "hp": 670,
      "hpperlevel": 92,
      "mp": 330,
      "mpperlevel": 50,
      "movespeed": 335,
      "armor": 26,
      "armorperlevel": 4.2,
      "spellblock": 22,
      "spellblockperlevel": 1.3,
      "attackrange": 175,
      "hpregen": 5,
      "hpregenperlevel": 0.5,
      "mpregen": 8,
      "mpregenperlevel": 0.8,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 50,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 1.5,
      "attackspeed": 0.625
    },
    "image": "/assets/champions/Kayle.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Kayle.png"
  },
  {
    "id": "champion:Kayn",
    "name": "Kayn",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Fighter",
      "Assassin"
    ],
    "resource": "Mana",
    "title": "the Shadow Reaper",
    "stats": {
      "hp": 655,
      "hpperlevel": 103,
      "mp": 410,
      "mpperlevel": 50,
      "movespeed": 340,
      "armor": 38,
      "armorperlevel": 4.5,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 175,
      "hpregen": 8,
      "hpregenperlevel": 0.75,
      "mpregen": 11.5,
      "mpregenperlevel": 0.95,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 68,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.7,
      "attackspeed": 0.669
    },
    "image": "/assets/champions/Kayn.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Kayn.png"
  },
  {
    "id": "champion:Kennen",
    "name": "Kennen",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Mage"
    ],
    "resource": "Energy",
    "title": "the Heart of the Tempest",
    "stats": {
      "hp": 580,
      "hpperlevel": 98,
      "mp": 200,
      "mpperlevel": 0,
      "movespeed": 335,
      "armor": 29,
      "armorperlevel": 4.95,
      "spellblock": 30,
      "spellblockperlevel": 1.3,
      "attackrange": 550,
      "hpregen": 5.5,
      "hpregenperlevel": 0.65,
      "mpregen": 50,
      "mpregenperlevel": 0,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 48,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 3.4,
      "attackspeed": 0.625
    },
    "image": "/assets/champions/Kennen.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Kennen.png"
  },
  {
    "id": "champion:Khazix",
    "name": "Kha'Zix",
    "category": "champions",
    "aliases": [
      "kha",
      "khaziks",
      "kha ziks"
    ],
    "tier": 3,
    "tags": [
      "Assassin"
    ],
    "resource": "Mana",
    "title": "the Voidreaver",
    "stats": {
      "hp": 643,
      "hpperlevel": 99,
      "mp": 327,
      "mpperlevel": 40,
      "movespeed": 345,
      "armor": 32,
      "armorperlevel": 4.2,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 125,
      "hpregen": 7.5,
      "hpregenperlevel": 0.75,
      "mpregen": 7.59,
      "mpregenperlevel": 0.5,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 60,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.7,
      "attackspeed": 0.668
    },
    "image": "/assets/champions/Khazix.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Khazix.png"
  },
  {
    "id": "item:3067",
    "name": "Kindlegem",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Health",
      "CooldownReduction",
      "AbilityHaste"
    ],
    "stats": {
      "FlatHPPoolMod": 200
    },
    "statsText": "200 Health 10 Ability Haste",
    "cost": 800,
    "shop": true,
    "from": [
      "item:1028",
      "item:2022"
    ],
    "image": "/assets/items/3067.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3067.png"
  },
  {
    "id": "champion:Kindred",
    "name": "Kindred",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Marksman"
    ],
    "resource": "Mana",
    "title": "The Eternal Hunters",
    "stats": {
      "hp": 595,
      "hpperlevel": 104,
      "mp": 300,
      "mpperlevel": 35,
      "movespeed": 325,
      "armor": 29,
      "armorperlevel": 4.7,
      "spellblock": 33,
      "spellblockperlevel": 1.1,
      "attackrange": 500,
      "hpregen": 7,
      "hpregenperlevel": 0.55,
      "mpregen": 7,
      "mpregenperlevel": 0.4,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 65,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 3.5,
      "attackspeed": 0.625
    },
    "image": "/assets/champions/Kindred.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Kindred.png"
  },
  {
    "id": "champion:Kled",
    "name": "Kled",
    "category": "champions",
    "aliases": [],
    "tier": 5,
    "tags": [
      "Fighter"
    ],
    "resource": "Courage",
    "title": "the Cantankerous Cavalier",
    "stats": {
      "hp": 410,
      "hpperlevel": 84,
      "mp": 100,
      "mpperlevel": 0,
      "movespeed": 345,
      "armor": 35,
      "armorperlevel": 5.2,
      "spellblock": 28,
      "spellblockperlevel": 2.05,
      "attackrange": 125,
      "hpregen": 6,
      "hpregenperlevel": 0.75,
      "mpregen": 0,
      "mpregenperlevel": 0,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 65,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 3.5,
      "attackspeed": 0.625
    },
    "image": "/assets/champions/Kled.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Kled.png"
  },
  {
    "id": "item:3109",
    "name": "Knight's Vow",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Health",
      "HealthRegen",
      "Armor",
      "Aura",
      "Active",
      "CooldownReduction",
      "AbilityHaste"
    ],
    "stats": {
      "FlatHPPoolMod": 200,
      "FlatArmorMod": 40
    },
    "statsText": "200 Health 40 Armor 10 Ability Haste 100% Base Health Regen",
    "cost": 2300,
    "shop": true,
    "from": [
      "item:3067",
      "item:1031",
      "item:1006"
    ],
    "image": "/assets/items/3109.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3109.png"
  },
  {
    "id": "champion:KogMaw",
    "name": "Kog'Maw",
    "category": "champions",
    "aliases": [
      "kog"
    ],
    "tier": 4,
    "tags": [
      "Marksman",
      "Mage"
    ],
    "resource": "Mana",
    "title": "the Mouth of the Abyss",
    "stats": {
      "hp": 635,
      "hpperlevel": 99,
      "mp": 325,
      "mpperlevel": 40,
      "movespeed": 330,
      "armor": 24,
      "armorperlevel": 4.45,
      "spellblock": 33,
      "spellblockperlevel": 1.1,
      "attackrange": 500,
      "hpregen": 3.75,
      "hpregenperlevel": 0.55,
      "mpregen": 8.75,
      "mpregenperlevel": 0.7,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 61,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.65,
      "attackspeed": 0.665
    },
    "image": "/assets/champions/KogMaw.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/KogMaw.png"
  },
  {
    "id": "item:6672",
    "name": "Kraken Slayer",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Damage",
      "AttackSpeed",
      "OnHit",
      "NonbootsMovement"
    ],
    "stats": {
      "FlatPhysicalDamageMod": 45,
      "PercentAttackSpeedMod": 0.4,
      "PercentMovementSpeedMod": 0.04
    },
    "statsText": "45 Attack Damage 40% Attack Speed 4% Move Speed",
    "cost": 3000,
    "shop": true,
    "from": [
      "item:6690",
      "item:3051",
      "item:1043"
    ],
    "image": "/assets/items/6672.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/6672.png"
  },
  {
    "id": "map:krugs",
    "name": "Krugs",
    "category": "map",
    "aliases": [
      "krug",
      "ancient krug",
      "rocks",
      "golems"
    ],
    "tier": 3,
    "tags": [
      "monster",
      "camp"
    ]
  },
  {
    "id": "item:3035",
    "name": "Last Whisper",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "ArmorPenetration",
      "Damage"
    ],
    "stats": {
      "FlatPhysicalDamageMod": 20
    },
    "statsText": "20 Attack Damage 18% Armor Penetration",
    "cost": 1450,
    "shop": true,
    "from": [
      "item:1036",
      "item:1036"
    ],
    "image": "/assets/items/3035.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3035.png"
  },
  {
    "id": "champion:Leblanc",
    "name": "LeBlanc",
    "category": "champions",
    "aliases": [
      "lb",
      "le blanc"
    ],
    "tier": 3,
    "tags": [
      "Assassin",
      "Mage"
    ],
    "resource": "Mana",
    "title": "the Deceiver",
    "stats": {
      "hp": 598,
      "hpperlevel": 108,
      "mp": 400,
      "mpperlevel": 25,
      "movespeed": 340,
      "armor": 22,
      "armorperlevel": 4.2,
      "spellblock": 30,
      "spellblockperlevel": 1.3,
      "attackrange": 525,
      "hpregen": 7.5,
      "hpregenperlevel": 0.55,
      "mpregen": 8,
      "mpregenperlevel": 0.8,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 55,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 1.5,
      "attackspeed": 0.658
    },
    "image": "/assets/champions/Leblanc.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Leblanc.png"
  },
  {
    "id": "champion:LeeSin",
    "name": "Lee Sin",
    "category": "champions",
    "aliases": [
      "lee"
    ],
    "tier": 2,
    "tags": [
      "Fighter",
      "Assassin"
    ],
    "resource": "Energy",
    "title": "the Blind Monk",
    "stats": {
      "hp": 645,
      "hpperlevel": 108,
      "mp": 200,
      "mpperlevel": 0,
      "movespeed": 345,
      "armor": 36,
      "armorperlevel": 4.5,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 125,
      "hpregen": 7.5,
      "hpregenperlevel": 0.7,
      "mpregen": 50,
      "mpregenperlevel": 0,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 66,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 3,
      "attackspeed": 0.651
    },
    "image": "/assets/champions/LeeSin.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/LeeSin.png"
  },
  {
    "id": "champion:Leona",
    "name": "Leona",
    "category": "champions",
    "aliases": [],
    "tier": 2,
    "tags": [
      "Tank",
      "Support"
    ],
    "resource": "Mana",
    "title": "the Radiant Dawn",
    "stats": {
      "hp": 646,
      "hpperlevel": 101,
      "mp": 302,
      "mpperlevel": 40,
      "movespeed": 335,
      "armor": 43,
      "armorperlevel": 4.8,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 125,
      "hpregen": 8.5,
      "hpregenperlevel": 0.85,
      "mpregen": 6,
      "mpregenperlevel": 0.8,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 60,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.9,
      "attackspeed": 0.625
    },
    "image": "/assets/champions/Leona.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Leona.png"
  },
  {
    "id": "item:6653",
    "name": "Liandry's Torment",
    "category": "items",
    "aliases": [
      "liandrys"
    ],
    "tier": 3,
    "tags": [
      "Health",
      "SpellDamage"
    ],
    "stats": {
      "FlatHPPoolMod": 300,
      "FlatMagicDamageMod": 60
    },
    "statsText": "60 Ability Power 300 Health",
    "cost": 3000,
    "shop": true,
    "from": [
      "item:3147",
      "item:2508"
    ],
    "image": "/assets/items/6653.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/6653.png"
  },
  {
    "id": "item:3100",
    "name": "Lich Bane",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "SpellDamage",
      "OnHit",
      "NonbootsMovement",
      "AbilityHaste"
    ],
    "stats": {
      "FlatMagicDamageMod": 100,
      "PercentMovementSpeedMod": 0.06
    },
    "statsText": "100 Ability Power 6% Move Speed 10 Ability Haste",
    "cost": 2900,
    "shop": true,
    "from": [
      "item:3057",
      "item:3113",
      "item:1026"
    ],
    "image": "/assets/items/3100.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3100.png"
  },
  {
    "id": "champion:Lillia",
    "name": "Lillia",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Fighter",
      "Mage"
    ],
    "resource": "Mana",
    "title": "the Bashful Bloom",
    "stats": {
      "hp": 605,
      "hpperlevel": 105,
      "mp": 410,
      "mpperlevel": 50,
      "movespeed": 330,
      "armor": 24,
      "armorperlevel": 4.5,
      "spellblock": 32,
      "spellblockperlevel": 1.55,
      "attackrange": 325,
      "hpregen": 2.5,
      "hpregenperlevel": 0.55,
      "mpregen": 11.5,
      "mpregenperlevel": 0.95,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 61,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.7,
      "attackspeed": 0.625
    },
    "image": "/assets/champions/Lillia.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Lillia.png"
  },
  {
    "id": "champion:Lissandra",
    "name": "Lissandra",
    "category": "champions",
    "aliases": [
      "liss"
    ],
    "tier": 4,
    "tags": [
      "Mage"
    ],
    "resource": "Mana",
    "title": "the Ice Witch",
    "stats": {
      "hp": 620,
      "hpperlevel": 110,
      "mp": 475,
      "mpperlevel": 30,
      "movespeed": 325,
      "armor": 22,
      "armorperlevel": 4.2,
      "spellblock": 30,
      "spellblockperlevel": 1.3,
      "attackrange": 550,
      "hpregen": 7,
      "hpregenperlevel": 0.55,
      "mpregen": 8,
      "mpregenperlevel": 0.4,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 55,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 1.5,
      "attackspeed": 0.656
    },
    "image": "/assets/champions/Lissandra.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Lissandra.png"
  },
  {
    "id": "champion:Locke",
    "name": "Locke",
    "category": "champions",
    "aliases": [],
    "tier": 4,
    "tags": [
      "Assassin",
      "Mage"
    ],
    "resource": "Mana",
    "title": "the Ashen Exorcist",
    "stats": {
      "hp": 620,
      "hpperlevel": 109,
      "mp": 280,
      "mpperlevel": 60,
      "movespeed": 340,
      "armor": 32,
      "armorperlevel": 4.2,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 125,
      "hpregen": 9,
      "hpregenperlevel": 0.9,
      "mpregen": 7,
      "mpregenperlevel": 0.8,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 58,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 3.3,
      "attackspeed": 0.688
    },
    "image": "/assets/champions/Locke.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Locke.png"
  },
  {
    "id": "item:3190",
    "name": "Locket of the Iron Solari",
    "category": "items",
    "aliases": [
      "locket"
    ],
    "tier": 3,
    "tags": [
      "Health",
      "SpellBlock",
      "Armor",
      "Aura",
      "Active",
      "MagicResist",
      "AbilityHaste"
    ],
    "stats": {
      "FlatSpellBlockMod": 30,
      "FlatHPPoolMod": 200,
      "FlatArmorMod": 30
    },
    "statsText": "200 Health 30 Armor 30 Magic Resist 10 Ability Haste",
    "cost": 2200,
    "shop": true,
    "from": [
      "item:3067",
      "item:1029",
      "item:1033"
    ],
    "image": "/assets/items/3190.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3190.png"
  },
  {
    "id": "item:1036",
    "name": "Long Sword",
    "category": "items",
    "aliases": [],
    "tier": 1,
    "tags": [
      "Damage",
      "Lane"
    ],
    "stats": {
      "FlatPhysicalDamageMod": 10
    },
    "statsText": "10 Attack Damage",
    "cost": 350,
    "shop": true,
    "from": [],
    "image": "/assets/items/1036.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/1036.png"
  },
  {
    "id": "item:3036",
    "name": "Lord Dominik's Regards",
    "category": "items",
    "aliases": [
      "ldr",
      "lord doms"
    ],
    "tier": 3,
    "tags": [
      "Damage",
      "CriticalStrike",
      "ArmorPenetration"
    ],
    "stats": {
      "FlatCritChanceMod": 0.25,
      "FlatPhysicalDamageMod": 35
    },
    "statsText": "35 Attack Damage 35% Armor Penetration 25% Critical Strike Chance",
    "cost": 3300,
    "shop": true,
    "from": [
      "item:3035",
      "item:6670"
    ],
    "image": "/assets/items/3036.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3036.png"
  },
  {
    "id": "item:3802",
    "name": "Lost Chapter",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "SpellDamage",
      "Mana",
      "ManaRegen",
      "CooldownReduction",
      "AbilityHaste"
    ],
    "stats": {
      "FlatMPPoolMod": 300,
      "FlatMagicDamageMod": 40
    },
    "statsText": "40 Ability Power 300 Mana 10 Ability Haste",
    "cost": 1200,
    "shop": true,
    "from": [
      "item:1052",
      "item:1027",
      "item:2022"
    ],
    "image": "/assets/items/3802.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3802.png"
  },
  {
    "id": "champion:Lucian",
    "name": "Lucian",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Marksman",
      "Assassin"
    ],
    "resource": "Mana",
    "title": "the Purifier",
    "stats": {
      "hp": 641,
      "hpperlevel": 100,
      "mp": 320,
      "mpperlevel": 43,
      "movespeed": 335,
      "armor": 28,
      "armorperlevel": 4.2,
      "spellblock": 33,
      "spellblockperlevel": 1.1,
      "attackrange": 500,
      "hpregen": 3.75,
      "hpregenperlevel": 0.65,
      "mpregen": 7,
      "mpregenperlevel": 0.8,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 60,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.5,
      "attackspeed": 0.638
    },
    "image": "/assets/champions/Lucian.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Lucian.png"
  },
  {
    "id": "item:6655",
    "name": "Luden's Echo",
    "category": "items",
    "aliases": [
      "ludens"
    ],
    "tier": 3,
    "tags": [
      "SpellDamage",
      "Mana",
      "CooldownReduction",
      "AbilityHaste"
    ],
    "stats": {
      "FlatMPPoolMod": 600,
      "FlatMagicDamageMod": 100
    },
    "statsText": "100 Ability Power 600 Mana 10 Ability Haste",
    "cost": 2750,
    "shop": true,
    "from": [
      "item:3802",
      "item:3145"
    ],
    "image": "/assets/items/6655.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/6655.png"
  },
  {
    "id": "champion:Lulu",
    "name": "Lulu",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Support",
      "Mage"
    ],
    "resource": "Mana",
    "title": "the Fae Sorceress",
    "stats": {
      "hp": 565,
      "hpperlevel": 92,
      "mp": 350,
      "mpperlevel": 55,
      "movespeed": 330,
      "armor": 26,
      "armorperlevel": 4.6,
      "spellblock": 30,
      "spellblockperlevel": 1.3,
      "attackrange": 550,
      "hpregen": 6,
      "hpregenperlevel": 0.6,
      "mpregen": 11,
      "mpregenperlevel": 0.6,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 47,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.25,
      "attackspeed": 0.625
    },
    "image": "/assets/champions/Lulu.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Lulu.png"
  },
  {
    "id": "champion:Lux",
    "name": "Lux",
    "category": "champions",
    "aliases": [],
    "tier": 1,
    "tags": [
      "Mage",
      "Support"
    ],
    "resource": "Mana",
    "title": "the Lady of Luminosity",
    "stats": {
      "hp": 580,
      "hpperlevel": 99,
      "mp": 440,
      "mpperlevel": 23.5,
      "movespeed": 330,
      "armor": 21,
      "armorperlevel": 5.2,
      "spellblock": 30,
      "spellblockperlevel": 1.3,
      "attackrange": 550,
      "hpregen": 5.5,
      "hpregenperlevel": 0.55,
      "mpregen": 9,
      "mpregenperlevel": 0.8,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 54,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 3,
      "attackspeed": 0.669
    },
    "image": "/assets/champions/Lux.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Lux.png"
  },
  {
    "id": "item:3118",
    "name": "Malignance",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "SpellDamage",
      "Mana",
      "AbilityHaste"
    ],
    "stats": {
      "FlatMPPoolMod": 600,
      "FlatMagicDamageMod": 90
    },
    "statsText": "90 Ability Power 600 Mana 15 Ability Haste",
    "cost": 2700,
    "shop": true,
    "from": [
      "item:3802",
      "item:1026"
    ],
    "image": "/assets/items/3118.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3118.png"
  },
  {
    "id": "champion:Malphite",
    "name": "Malphite",
    "category": "champions",
    "aliases": [
      "malph"
    ],
    "tier": 2,
    "tags": [
      "Tank",
      "Mage"
    ],
    "resource": "Mana",
    "title": "Shard of the Monolith",
    "stats": {
      "hp": 665,
      "hpperlevel": 104,
      "mp": 280,
      "mpperlevel": 60,
      "movespeed": 335,
      "armor": 40,
      "armorperlevel": 4.95,
      "spellblock": 28,
      "spellblockperlevel": 2.05,
      "attackrange": 125,
      "hpregen": 7,
      "hpregenperlevel": 0.55,
      "mpregen": 7.3,
      "mpregenperlevel": 0.55,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 62,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 3.4,
      "attackspeed": 0.736
    },
    "image": "/assets/champions/Malphite.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Malphite.png"
  },
  {
    "id": "champion:Malzahar",
    "name": "Malzahar",
    "category": "champions",
    "aliases": [
      "malz"
    ],
    "tier": 3,
    "tags": [
      "Mage"
    ],
    "resource": "Mana",
    "title": "the Prophet of the Void",
    "stats": {
      "hp": 580,
      "hpperlevel": 101,
      "mp": 375,
      "mpperlevel": 28,
      "movespeed": 335,
      "armor": 18,
      "armorperlevel": 4.7,
      "spellblock": 30,
      "spellblockperlevel": 1.3,
      "attackrange": 500,
      "hpregen": 6,
      "hpregenperlevel": 0.6,
      "mpregen": 8,
      "mpregenperlevel": 0.8,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 55,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 1.5,
      "attackspeed": 0.625
    },
    "image": "/assets/champions/Malzahar.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Malzahar.png"
  },
  {
    "id": "item:3004",
    "name": "Manamune",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Damage",
      "Mana",
      "CooldownReduction",
      "OnHit",
      "AbilityHaste"
    ],
    "stats": {
      "FlatMPPoolMod": 500,
      "FlatPhysicalDamageMod": 35
    },
    "statsText": "35 Attack Damage 500 Mana 15 Ability Haste",
    "cost": 2900,
    "shop": true,
    "from": [
      "item:3070",
      "item:3133",
      "item:1036"
    ],
    "image": "/assets/items/3004.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3004.png"
  },
  {
    "id": "champion:Maokai",
    "name": "Maokai",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Tank",
      "Support"
    ],
    "resource": "Mana",
    "title": "the Twisted Treant",
    "stats": {
      "hp": 665,
      "hpperlevel": 109,
      "mp": 375,
      "mpperlevel": 43,
      "movespeed": 335,
      "armor": 35,
      "armorperlevel": 5.2,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 125,
      "hpregen": 5,
      "hpregenperlevel": 0.75,
      "mpregen": 6,
      "mpregenperlevel": 0.6,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 64,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.125,
      "attackspeed": 0.8
    },
    "image": "/assets/champions/Maokai.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Maokai.png"
  },
  {
    "id": "champion:MasterYi",
    "name": "Master Yi",
    "category": "champions",
    "aliases": [
      "yi"
    ],
    "tier": 1,
    "tags": [
      "Fighter",
      "Assassin"
    ],
    "resource": "Mana",
    "title": "the Wuju Bladesman",
    "stats": {
      "hp": 640,
      "hpperlevel": 105,
      "mp": 251,
      "mpperlevel": 42,
      "movespeed": 355,
      "armor": 33,
      "armorperlevel": 5,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 175,
      "hpregen": 7.5,
      "hpregenperlevel": 0.65,
      "mpregen": 7.25,
      "mpregenperlevel": 0.45,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 65,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.5,
      "attackspeed": 0.679
    },
    "image": "/assets/champions/MasterYi.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/MasterYi.png"
  },
  {
    "id": "item:3156",
    "name": "Maw of Malmortius",
    "category": "items",
    "aliases": [
      "maw"
    ],
    "tier": 3,
    "tags": [
      "SpellBlock",
      "Damage",
      "LifeSteal",
      "SpellVamp",
      "AbilityHaste"
    ],
    "stats": {
      "FlatSpellBlockMod": 40,
      "FlatPhysicalDamageMod": 60
    },
    "statsText": "60 Attack Damage 15 Ability Haste 40 Magic Resist",
    "cost": 3100,
    "shop": true,
    "from": [
      "item:3155",
      "item:3133"
    ],
    "image": "/assets/items/3156.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3156.png"
  },
  {
    "id": "item:3041",
    "name": "Mejai's Soulstealer",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Health",
      "SpellDamage",
      "NonbootsMovement"
    ],
    "stats": {
      "FlatHPPoolMod": 100,
      "FlatMagicDamageMod": 20
    },
    "statsText": "20 Ability Power 100 Health",
    "cost": 1500,
    "shop": true,
    "from": [
      "item:1082"
    ],
    "image": "/assets/items/3041.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3041.png"
  },
  {
    "id": "champion:Mel",
    "name": "Mel",
    "category": "champions",
    "aliases": [],
    "tier": 4,
    "tags": [
      "Mage",
      "Support"
    ],
    "resource": "Mana",
    "title": "the Soul's Reflection",
    "stats": {
      "hp": 590,
      "hpperlevel": 107,
      "mp": 455,
      "mpperlevel": 38,
      "movespeed": 330,
      "armor": 21,
      "armorperlevel": 5.4,
      "spellblock": 30,
      "spellblockperlevel": 1.3,
      "attackrange": 550,
      "hpregen": 6,
      "hpregenperlevel": 0.55,
      "mpregen": 9,
      "mpregenperlevel": 0.9,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 52,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.75,
      "attackspeed": 0.625
    },
    "image": "/assets/champions/Mel.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Mel.png"
  },
  {
    "id": "map:melee-minion",
    "name": "Melee Minion",
    "category": "map",
    "aliases": [
      "melee",
      "melee minions"
    ],
    "tier": 3,
    "tags": [
      "minion"
    ]
  },
  {
    "id": "item:3139",
    "name": "Mercurial Scimitar",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "SpellBlock",
      "Damage",
      "LifeSteal",
      "Active",
      "NonbootsMovement",
      "Tenacity"
    ],
    "stats": {
      "FlatSpellBlockMod": 35,
      "FlatPhysicalDamageMod": 50,
      "PercentLifeStealMod": 0.1
    },
    "statsText": "50 Attack Damage 35 Magic Resist 10% Life Steal",
    "cost": 3200,
    "shop": true,
    "from": [
      "item:3140",
      "item:1037",
      "item:1053"
    ],
    "image": "/assets/items/3139.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3139.png"
  },
  {
    "id": "item:3111",
    "name": "Mercury's Treads",
    "category": "items",
    "aliases": [
      "mercs",
      "mercury treads"
    ],
    "tier": 3,
    "tags": [
      "Boots",
      "SpellBlock",
      "Tenacity"
    ],
    "stats": {
      "FlatSpellBlockMod": 20,
      "FlatMovementSpeedMod": 45
    },
    "statsText": "20 Magic Resist 45 Move Speed 30% Tenacity",
    "cost": 1250,
    "shop": true,
    "from": [
      "item:1001",
      "item:1033"
    ],
    "image": "/assets/items/3111.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3111.png"
  },
  {
    "id": "map:mid-lane",
    "name": "Mid Lane",
    "category": "map",
    "aliases": [
      "mid",
      "middle",
      "middle lane",
      "midlane"
    ],
    "tier": 1,
    "tags": [
      "lane"
    ]
  },
  {
    "id": "item:3222",
    "name": "Mikael's Blessing",
    "category": "items",
    "aliases": [],
    "tier": 4,
    "tags": [
      "Health",
      "ManaRegen",
      "Active",
      "CooldownReduction",
      "Tenacity",
      "AbilityHaste"
    ],
    "stats": {
      "FlatHPPoolMod": 250
    },
    "statsText": "250 Health 100% Base Mana Regen 12% Heal and Shield Power 15 Ability Haste",
    "cost": 2300,
    "shop": true,
    "from": [
      "item:3067",
      "item:3114"
    ],
    "image": "/assets/items/3222.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3222.png"
  },
  {
    "id": "champion:Milio",
    "name": "Milio",
    "category": "champions",
    "aliases": [],
    "tier": 4,
    "tags": [
      "Support",
      "Mage"
    ],
    "resource": "Mana",
    "title": "The Gentle Flame",
    "stats": {
      "hp": 560,
      "hpperlevel": 88,
      "mp": 365,
      "mpperlevel": 43,
      "movespeed": 330,
      "armor": 26,
      "armorperlevel": 4.6,
      "spellblock": 30,
      "spellblockperlevel": 1.3,
      "attackrange": 525,
      "hpregen": 5,
      "hpregenperlevel": 0.5,
      "mpregen": 11.5,
      "mpregenperlevel": 0.4,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 48,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 3,
      "attackspeed": 0.625
    },
    "image": "/assets/champions/Milio.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Milio.png"
  },
  {
    "id": "champion:MissFortune",
    "name": "Miss Fortune",
    "category": "champions",
    "aliases": [
      "mf",
      "missfortun"
    ],
    "tier": 1,
    "tags": [
      "Marksman",
      "Mage"
    ],
    "resource": "Mana",
    "title": "the Bounty Hunter",
    "stats": {
      "hp": 625,
      "hpperlevel": 100,
      "mp": 300,
      "mpperlevel": 40,
      "movespeed": 325,
      "armor": 25,
      "armorperlevel": 4,
      "spellblock": 33,
      "spellblockperlevel": 1.1,
      "attackrange": 550,
      "hpregen": 3.75,
      "hpregenperlevel": 0.65,
      "mpregen": 8,
      "mpregenperlevel": 0.8,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 55,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 3,
      "attackspeed": 0.656
    },
    "image": "/assets/champions/MissFortune.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/MissFortune.png"
  },
  {
    "id": "item:6617",
    "name": "Moonstone Renewer",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Health",
      "SpellDamage",
      "ManaRegen",
      "CooldownReduction",
      "AbilityHaste"
    ],
    "stats": {
      "FlatHPPoolMod": 200,
      "FlatMagicDamageMod": 25
    },
    "statsText": "25 Ability Power 200 Health 20 Ability Haste 125% Base Mana Regen",
    "cost": 2200,
    "shop": true,
    "from": [
      "item:3067",
      "item:4642"
    ],
    "image": "/assets/items/6617.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/6617.png"
  },
  {
    "id": "champion:Mordekaiser",
    "name": "Mordekaiser",
    "category": "champions",
    "aliases": [
      "morde",
      "mord"
    ],
    "tier": 3,
    "tags": [
      "Fighter",
      "Mage"
    ],
    "resource": "Shield",
    "title": "the Iron Revenant",
    "stats": {
      "hp": 645,
      "hpperlevel": 104,
      "mp": 100,
      "mpperlevel": 0,
      "movespeed": 335,
      "armor": 37,
      "armorperlevel": 4.2,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 175,
      "hpregen": 5,
      "hpregenperlevel": 0.75,
      "mpregen": 0,
      "mpregenperlevel": 0,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 61,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 1,
      "attackspeed": 0.625
    },
    "image": "/assets/champions/Mordekaiser.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Mordekaiser.png"
  },
  {
    "id": "item:3165",
    "name": "Morellonomicon",
    "category": "items",
    "aliases": [
      "morello",
      "morellos"
    ],
    "tier": 3,
    "tags": [
      "Health",
      "SpellDamage",
      "CooldownReduction",
      "AbilityHaste"
    ],
    "stats": {
      "FlatHPPoolMod": 350,
      "FlatMagicDamageMod": 75
    },
    "statsText": "75 Ability Power 350 Health 15 Ability Haste",
    "cost": 2850,
    "shop": true,
    "from": [
      "item:3916",
      "item:1026",
      "item:3067"
    ],
    "image": "/assets/items/3165.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3165.png"
  },
  {
    "id": "champion:Morgana",
    "name": "Morgana",
    "category": "champions",
    "aliases": [
      "morg"
    ],
    "tier": 2,
    "tags": [
      "Support",
      "Mage"
    ],
    "resource": "Mana",
    "title": "the Fallen",
    "stats": {
      "hp": 630,
      "hpperlevel": 104,
      "mp": 340,
      "mpperlevel": 60,
      "movespeed": 335,
      "armor": 25,
      "armorperlevel": 4.2,
      "spellblock": 30,
      "spellblockperlevel": 1.3,
      "attackrange": 450,
      "hpregen": 5.5,
      "hpregenperlevel": 0.4,
      "mpregen": 11,
      "mpregenperlevel": 0.4,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 56,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 1.53,
      "attackspeed": 0.625
    },
    "image": "/assets/champions/Morgana.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Morgana.png"
  },
  {
    "id": "item:3033",
    "name": "Mortal Reminder",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Damage",
      "CriticalStrike",
      "ArmorPenetration"
    ],
    "stats": {
      "FlatCritChanceMod": 0.25,
      "FlatPhysicalDamageMod": 35
    },
    "statsText": "35 Attack Damage 30% Armor Penetration 25% Critical Strike Chance",
    "cost": 3000,
    "shop": true,
    "from": [
      "item:3123",
      "item:3035",
      "item:1018"
    ],
    "image": "/assets/items/3033.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3033.png"
  },
  {
    "id": "item:1103",
    "name": "Mosstomper Seedling",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Jungle"
    ],
    "stats": {},
    "statsText": "",
    "cost": 450,
    "shop": true,
    "from": [],
    "image": "/assets/items/1103.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/1103.png"
  },
  {
    "id": "map:mountain-drake",
    "name": "Mountain Drake",
    "category": "map",
    "aliases": [
      "mountain",
      "mountain dragon",
      "earth dragon"
    ],
    "tier": 3,
    "tags": [
      "monster",
      "epic",
      "dragon",
      "elemental"
    ]
  },
  {
    "id": "item:3042",
    "name": "Muramana",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Damage",
      "Mana",
      "CooldownReduction",
      "OnHit",
      "ArmorPenetration"
    ],
    "stats": {
      "FlatMPPoolMod": 1000,
      "FlatPhysicalDamageMod": 35
    },
    "statsText": "35 Attack Damage 1000 Mana 15 Ability Haste",
    "cost": 2900,
    "shop": false,
    "from": [],
    "image": "/assets/items/3042.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3042.png"
  },
  {
    "id": "map:wolves",
    "name": "Murk Wolves",
    "category": "map",
    "aliases": [
      "wolves",
      "wolf",
      "greater murk wolf",
      "murk wolf"
    ],
    "tier": 3,
    "tags": [
      "monster",
      "camp"
    ]
  },
  {
    "id": "champion:Naafiri",
    "name": "Naafiri",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Assassin",
      "Fighter"
    ],
    "resource": "Mana",
    "title": "the Hound of a Hundred Bites",
    "stats": {
      "hp": 610,
      "hpperlevel": 105,
      "mp": 400,
      "mpperlevel": 55,
      "movespeed": 340,
      "armor": 28,
      "armorperlevel": 4.2,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 125,
      "hpregen": 6.25,
      "hpregenperlevel": 0.6,
      "mpregen": 7.5,
      "mpregenperlevel": 1,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 55,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.1,
      "attackspeed": 0.663
    },
    "image": "/assets/champions/Naafiri.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Naafiri.png"
  },
  {
    "id": "champion:Nami",
    "name": "Nami",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Support",
      "Mage"
    ],
    "resource": "Mana",
    "title": "the Tidecaller",
    "stats": {
      "hp": 560,
      "hpperlevel": 88,
      "mp": 365,
      "mpperlevel": 43,
      "movespeed": 335,
      "armor": 29,
      "armorperlevel": 5.2,
      "spellblock": 30,
      "spellblockperlevel": 1.3,
      "attackrange": 550,
      "hpregen": 5.5,
      "hpregenperlevel": 0.55,
      "mpregen": 11.5,
      "mpregenperlevel": 0.4,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 54,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.61,
      "attackspeed": 0.644
    },
    "image": "/assets/champions/Nami.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Nami.png"
  },
  {
    "id": "item:3115",
    "name": "Nashor's Tooth",
    "category": "items",
    "aliases": [
      "nashors"
    ],
    "tier": 3,
    "tags": [
      "AttackSpeed",
      "SpellDamage",
      "OnHit",
      "AbilityHaste"
    ],
    "stats": {
      "FlatMagicDamageMod": 80,
      "PercentAttackSpeedMod": 0.5
    },
    "statsText": "80 Ability Power 50% Attack Speed 15 Ability Haste",
    "cost": 2900,
    "shop": true,
    "from": [
      "item:1043",
      "item:1026",
      "item:3108"
    ],
    "image": "/assets/items/3115.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3115.png"
  },
  {
    "id": "champion:Nasus",
    "name": "Nasus",
    "category": "champions",
    "aliases": [],
    "tier": 2,
    "tags": [
      "Fighter",
      "Tank"
    ],
    "resource": "Mana",
    "title": "the Curator of the Sands",
    "stats": {
      "hp": 650,
      "hpperlevel": 104,
      "mp": 326,
      "mpperlevel": 62,
      "movespeed": 350,
      "armor": 34,
      "armorperlevel": 4.7,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 125,
      "hpregen": 9,
      "hpregenperlevel": 0.9,
      "mpregen": 7.45,
      "mpregenperlevel": 0.5,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 67,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 3.48,
      "attackspeed": 0.638
    },
    "image": "/assets/champions/Nasus.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Nasus.png"
  },
  {
    "id": "champion:Nautilus",
    "name": "Nautilus",
    "category": "champions",
    "aliases": [
      "naut"
    ],
    "tier": 3,
    "tags": [
      "Tank",
      "Support"
    ],
    "resource": "Mana",
    "title": "the Titan of the Depths",
    "stats": {
      "hp": 646,
      "hpperlevel": 100,
      "mp": 400,
      "mpperlevel": 47,
      "movespeed": 325,
      "armor": 39,
      "armorperlevel": 4.95,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 175,
      "hpregen": 8.5,
      "hpregenperlevel": 0.55,
      "mpregen": 8.65,
      "mpregenperlevel": 0.5,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 58,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 1,
      "attackspeed": 0.706
    },
    "image": "/assets/champions/Nautilus.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Nautilus.png"
  },
  {
    "id": "item:6675",
    "name": "Navori Flickerblade",
    "category": "items",
    "aliases": [
      "navori"
    ],
    "tier": 3,
    "tags": [
      "CriticalStrike",
      "AttackSpeed",
      "NonbootsMovement"
    ],
    "stats": {
      "FlatCritChanceMod": 0.25,
      "PercentAttackSpeedMod": 0.4,
      "PercentMovementSpeedMod": 0.04
    },
    "statsText": "40% Attack Speed 25% Critical Strike Chance 4% Move Speed",
    "cost": 2650,
    "shop": true,
    "from": [
      "item:1042",
      "item:3086",
      "item:1042"
    ],
    "image": "/assets/items/6675.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/6675.png"
  },
  {
    "id": "item:1058",
    "name": "Needlessly Large Rod",
    "category": "items",
    "aliases": [
      "nlr"
    ],
    "tier": 3,
    "tags": [
      "SpellDamage"
    ],
    "stats": {
      "FlatMagicDamageMod": 65
    },
    "statsText": "65 Ability Power",
    "cost": 1200,
    "shop": true,
    "from": [],
    "image": "/assets/items/1058.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/1058.png"
  },
  {
    "id": "champion:Neeko",
    "name": "Neeko",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Mage",
      "Support"
    ],
    "resource": "Mana",
    "title": "the Curious Chameleon",
    "stats": {
      "hp": 610,
      "hpperlevel": 104,
      "mp": 450,
      "mpperlevel": 30,
      "movespeed": 340,
      "armor": 21,
      "armorperlevel": 5.2,
      "spellblock": 30,
      "spellblockperlevel": 1.3,
      "attackrange": 550,
      "hpregen": 7.5,
      "hpregenperlevel": 0.75,
      "mpregen": 7,
      "mpregenperlevel": 0.7,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 48,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 3.5,
      "attackspeed": 0.625
    },
    "image": "/assets/champions/Neeko.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Neeko.png"
  },
  {
    "id": "item:1057",
    "name": "Negatron Cloak",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "SpellBlock"
    ],
    "stats": {
      "FlatSpellBlockMod": 45
    },
    "statsText": "45 Magic Resist",
    "cost": 850,
    "shop": true,
    "from": [
      "item:1033"
    ],
    "image": "/assets/items/1057.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/1057.png"
  },
  {
    "id": "map:nexus",
    "name": "Nexus",
    "category": "map",
    "aliases": [],
    "tier": 1,
    "tags": [
      "structure"
    ]
  },
  {
    "id": "champion:Nidalee",
    "name": "Nidalee",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Assassin",
      "Mage"
    ],
    "resource": "Mana",
    "title": "the Bestial Huntress",
    "stats": {
      "hp": 610,
      "hpperlevel": 109,
      "mp": 295,
      "mpperlevel": 45,
      "movespeed": 335,
      "armor": 32,
      "armorperlevel": 5,
      "spellblock": 30,
      "spellblockperlevel": 1.45,
      "attackrange": 525,
      "hpregen": 6,
      "hpregenperlevel": 0.6,
      "mpregen": 6,
      "mpregenperlevel": 0.8,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 58,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 3.22,
      "attackspeed": 0.638
    },
    "image": "/assets/champions/Nidalee.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Nidalee.png"
  },
  {
    "id": "champion:Nilah",
    "name": "Nilah",
    "category": "champions",
    "aliases": [],
    "tier": 5,
    "tags": [
      "Fighter",
      "Assassin"
    ],
    "resource": "Mana",
    "title": "the Joy Unbound",
    "stats": {
      "hp": 570,
      "hpperlevel": 101,
      "mp": 350,
      "mpperlevel": 35,
      "movespeed": 340,
      "armor": 27,
      "armorperlevel": 4.2,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 225,
      "hpregen": 6,
      "hpregenperlevel": 0.9,
      "mpregen": 8.2,
      "mpregenperlevel": 0.7,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 58,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 1.25,
      "attackspeed": 0.697
    },
    "image": "/assets/champions/Nilah.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Nilah.png"
  },
  {
    "id": "champion:Nocturne",
    "name": "Nocturne",
    "category": "champions",
    "aliases": [
      "noc"
    ],
    "tier": 3,
    "tags": [
      "Fighter",
      "Assassin"
    ],
    "resource": "Mana",
    "title": "the Eternal Nightmare",
    "stats": {
      "hp": 640,
      "hpperlevel": 109,
      "mp": 275,
      "mpperlevel": 35,
      "movespeed": 345,
      "armor": 36,
      "armorperlevel": 4.2,
      "spellblock": 32,
      "spellblockperlevel": 1.55,
      "attackrange": 125,
      "hpregen": 7,
      "hpregenperlevel": 0.75,
      "mpregen": 7,
      "mpregenperlevel": 0.45,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 62,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.7,
      "attackspeed": 0.721
    },
    "image": "/assets/champions/Nocturne.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Nocturne.png"
  },
  {
    "id": "item:6670",
    "name": "Noonquiver",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Damage",
      "CriticalStrike"
    ],
    "stats": {
      "FlatCritChanceMod": 0.2,
      "FlatPhysicalDamageMod": 15
    },
    "statsText": "15 Attack Damage 20% Critical Strike Chance",
    "cost": 1300,
    "shop": true,
    "from": [
      "item:1036",
      "item:1018"
    ],
    "image": "/assets/items/6670.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/6670.png"
  },
  {
    "id": "item:1033",
    "name": "Null-Magic Mantle",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "SpellBlock"
    ],
    "stats": {
      "FlatSpellBlockMod": 20
    },
    "statsText": "20 Magic Resist",
    "cost": 400,
    "shop": true,
    "from": [],
    "image": "/assets/items/1033.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/1033.png"
  },
  {
    "id": "champion:Nunu",
    "name": "Nunu & Willump",
    "category": "champions",
    "aliases": [
      "nunu",
      "willump",
      "nunu and willump"
    ],
    "tier": 3,
    "tags": [
      "Tank",
      "Mage"
    ],
    "resource": "Mana",
    "title": "the Boy and His Yeti",
    "stats": {
      "hp": 610,
      "hpperlevel": 90,
      "mp": 280,
      "mpperlevel": 42,
      "movespeed": 345,
      "armor": 29,
      "armorperlevel": 4.2,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 125,
      "hpregen": 5,
      "hpregenperlevel": 0.8,
      "mpregen": 7,
      "mpregenperlevel": 0.5,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 61,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.25,
      "attackspeed": 0.625
    },
    "image": "/assets/champions/Nunu.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Nunu.png"
  },
  {
    "id": "item:3916",
    "name": "Oblivion Orb",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "SpellDamage"
    ],
    "stats": {
      "FlatMagicDamageMod": 25
    },
    "statsText": "25 Ability Power",
    "cost": 800,
    "shop": true,
    "from": [
      "item:1052"
    ],
    "image": "/assets/items/3916.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3916.png"
  },
  {
    "id": "map:ocean-drake",
    "name": "Ocean Drake",
    "category": "map",
    "aliases": [
      "ocean",
      "ocean dragon",
      "water dragon"
    ],
    "tier": 3,
    "tags": [
      "monster",
      "epic",
      "dragon",
      "elemental"
    ]
  },
  {
    "id": "champion:Olaf",
    "name": "Olaf",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Fighter",
      "Tank"
    ],
    "resource": "Mana",
    "title": "the Berserker",
    "stats": {
      "hp": 645,
      "hpperlevel": 119,
      "mp": 316,
      "mpperlevel": 50,
      "movespeed": 350,
      "armor": 35,
      "armorperlevel": 4.2,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 125,
      "hpregen": 6.5,
      "hpregenperlevel": 0.6,
      "mpregen": 7.5,
      "mpregenperlevel": 0.6,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 68,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.7,
      "attackspeed": 0.72
    },
    "image": "/assets/champions/Olaf.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Olaf.png"
  },
  {
    "id": "item:3364",
    "name": "Oracle Lens",
    "category": "items",
    "aliases": [
      "red trinket",
      "sweeper"
    ],
    "tier": 3,
    "tags": [
      "Active",
      "Trinket",
      "Vision"
    ],
    "stats": {},
    "statsText": "",
    "cost": 0,
    "shop": true,
    "from": [],
    "image": "/assets/items/3364.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3364.png"
  },
  {
    "id": "champion:Orianna",
    "name": "Orianna",
    "category": "champions",
    "aliases": [
      "ori"
    ],
    "tier": 3,
    "tags": [
      "Mage",
      "Support"
    ],
    "resource": "Mana",
    "title": "the Lady of Clockwork",
    "stats": {
      "hp": 565,
      "hpperlevel": 110,
      "mp": 418,
      "mpperlevel": 25,
      "movespeed": 325,
      "armor": 20,
      "armorperlevel": 4.2,
      "spellblock": 26,
      "spellblockperlevel": 1.3,
      "attackrange": 525,
      "hpregen": 7,
      "hpregenperlevel": 0.55,
      "mpregen": 8,
      "mpregenperlevel": 0.8,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 44,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 3.5,
      "attackspeed": 0.658
    },
    "image": "/assets/champions/Orianna.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Orianna.png"
  },
  {
    "id": "champion:Ornn",
    "name": "Ornn",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Tank"
    ],
    "resource": "Mana",
    "title": "The Fire below the Mountain",
    "stats": {
      "hp": 660,
      "hpperlevel": 109,
      "mp": 341,
      "mpperlevel": 65,
      "movespeed": 335,
      "armor": 33,
      "armorperlevel": 5.2,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 175,
      "hpregen": 9,
      "hpregenperlevel": 0.9,
      "mpregen": 8,
      "mpregenperlevel": 0.6,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 69,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2,
      "attackspeed": 0.625
    },
    "image": "/assets/champions/Ornn.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Ornn.png"
  },
  {
    "id": "item:2501",
    "name": "Overlord's Bloodmail",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Health",
      "Damage"
    ],
    "stats": {
      "FlatHPPoolMod": 550,
      "FlatPhysicalDamageMod": 40
    },
    "statsText": "40 Attack Damage 550 Health",
    "cost": 3300,
    "shop": true,
    "from": [
      "item:2021",
      "item:2021"
    ],
    "image": "/assets/items/2501.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/2501.png"
  },
  {
    "id": "champion:Pantheon",
    "name": "Pantheon",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Fighter",
      "Assassin"
    ],
    "resource": "Mana",
    "title": "the Unbreakable Spear",
    "stats": {
      "hp": 650,
      "hpperlevel": 109,
      "mp": 317,
      "mpperlevel": 31,
      "movespeed": 345,
      "armor": 40,
      "armorperlevel": 4.95,
      "spellblock": 28,
      "spellblockperlevel": 2.05,
      "attackrange": 175,
      "hpregen": 6,
      "hpregenperlevel": 0.65,
      "mpregen": 7.35,
      "mpregenperlevel": 0.45,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 64,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.95,
      "attackspeed": 0.658
    },
    "image": "/assets/champions/Pantheon.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Pantheon.png"
  },
  {
    "id": "item:3044",
    "name": "Phage",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Health",
      "Damage",
      "NonbootsMovement"
    ],
    "stats": {
      "FlatHPPoolMod": 200,
      "FlatPhysicalDamageMod": 15
    },
    "statsText": "15 Attack Damage 200 Health",
    "cost": 1100,
    "shop": true,
    "from": [
      "item:1028",
      "item:1036"
    ],
    "image": "/assets/items/3044.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3044.png"
  },
  {
    "id": "item:3046",
    "name": "Phantom Dancer",
    "category": "items",
    "aliases": [
      "pd"
    ],
    "tier": 3,
    "tags": [
      "CriticalStrike",
      "AttackSpeed",
      "NonbootsMovement"
    ],
    "stats": {
      "FlatCritChanceMod": 0.25,
      "PercentAttackSpeedMod": 0.65,
      "PercentMovementSpeedMod": 0.1
    },
    "statsText": "65% Attack Speed 25% Critical Strike Chance 10% Move Speed",
    "cost": 2650,
    "shop": true,
    "from": [
      "item:1042",
      "item:3086",
      "item:1042"
    ],
    "image": "/assets/items/3046.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3046.png"
  },
  {
    "id": "item:1037",
    "name": "Pickaxe",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Damage"
    ],
    "stats": {
      "FlatPhysicalDamageMod": 25
    },
    "statsText": "25 Attack Damage",
    "cost": 875,
    "shop": true,
    "from": [],
    "image": "/assets/items/1037.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/1037.png"
  },
  {
    "id": "item:3047",
    "name": "Plated Steelcaps",
    "category": "items",
    "aliases": [
      "tabi",
      "tabis",
      "ninja tabi",
      "steelcaps"
    ],
    "tier": 3,
    "tags": [
      "Armor",
      "Boots"
    ],
    "stats": {
      "FlatMovementSpeedMod": 45,
      "FlatArmorMod": 25
    },
    "statsText": "25 Armor 45 Move Speed",
    "cost": 1200,
    "shop": true,
    "from": [
      "item:1001",
      "item:1029"
    ],
    "image": "/assets/items/3047.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3047.png"
  },
  {
    "id": "champion:Poppy",
    "name": "Poppy",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Tank",
      "Fighter"
    ],
    "resource": "Mana",
    "title": "Keeper of the Hammer",
    "stats": {
      "hp": 610,
      "hpperlevel": 110,
      "mp": 300,
      "mpperlevel": 45,
      "movespeed": 345,
      "armor": 35,
      "armorperlevel": 5,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 125,
      "hpregen": 9,
      "hpregenperlevel": 0.8,
      "mpregen": 7,
      "mpregenperlevel": 0.7,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 56,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.5,
      "attackspeed": 0.658
    },
    "image": "/assets/champions/Poppy.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Poppy.png"
  },
  {
    "id": "item:6698",
    "name": "Profane Hydra",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Damage",
      "Active",
      "CooldownReduction",
      "ArmorPenetration",
      "AbilityHaste"
    ],
    "stats": {
      "FlatPhysicalDamageMod": 55
    },
    "statsText": "55 Attack Damage 18 Lethality 10 Ability Haste",
    "cost": 2850,
    "shop": true,
    "from": [
      "item:3077",
      "item:2020"
    ],
    "image": "/assets/items/6698.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/6698.png"
  },
  {
    "id": "item:2525",
    "name": "Protoplasm Harness",
    "category": "items",
    "aliases": [],
    "tier": 4,
    "tags": [
      "Health",
      "NonbootsMovement",
      "Tenacity",
      "AbilityHaste"
    ],
    "stats": {
      "FlatHPPoolMod": 600
    },
    "statsText": "600 Health 20 Ability Haste",
    "cost": 2600,
    "shop": true,
    "from": [
      "item:3067",
      "item:1011"
    ],
    "image": "/assets/items/2525.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/2525.png"
  },
  {
    "id": "champion:Pyke",
    "name": "Pyke",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Support",
      "Assassin"
    ],
    "resource": "Mana",
    "title": "the Bloodharbor Ripper",
    "stats": {
      "hp": 670,
      "hpperlevel": 110,
      "mp": 415,
      "mpperlevel": 50,
      "movespeed": 330,
      "armor": 37,
      "armorperlevel": 4.7,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 150,
      "hpregen": 7,
      "hpregenperlevel": 0.5,
      "mpregen": 8,
      "mpregenperlevel": 1,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 62,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.5,
      "attackspeed": 0.667
    },
    "image": "/assets/champions/Pyke.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Pyke.png"
  },
  {
    "id": "champion:Qiyana",
    "name": "Qiyana",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Assassin"
    ],
    "resource": "Mana",
    "title": "Empress of the Elements",
    "stats": {
      "hp": 590,
      "hpperlevel": 115,
      "mp": 375,
      "mpperlevel": 60,
      "movespeed": 335,
      "armor": 31,
      "armorperlevel": 4.5,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 150,
      "hpregen": 8,
      "hpregenperlevel": 0.9,
      "mpregen": 8,
      "mpregenperlevel": 0.7,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 64,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.1,
      "attackspeed": 0.688
    },
    "image": "/assets/champions/Qiyana.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Qiyana.png"
  },
  {
    "id": "item:3140",
    "name": "Quicksilver Sash",
    "category": "items",
    "aliases": [
      "qss"
    ],
    "tier": 3,
    "tags": [
      "Active",
      "SpellBlock"
    ],
    "stats": {
      "FlatSpellBlockMod": 30
    },
    "statsText": "30 Magic Resist",
    "cost": 1300,
    "shop": true,
    "from": [
      "item:1033"
    ],
    "image": "/assets/items/3140.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3140.png"
  },
  {
    "id": "champion:Quinn",
    "name": "Quinn",
    "category": "champions",
    "aliases": [],
    "tier": 4,
    "tags": [
      "Marksman",
      "Assassin"
    ],
    "resource": "Mana",
    "title": "Demacia's Wings",
    "stats": {
      "hp": 565,
      "hpperlevel": 107,
      "mp": 269,
      "mpperlevel": 35,
      "movespeed": 330,
      "armor": 28,
      "armorperlevel": 4.7,
      "spellblock": 33,
      "spellblockperlevel": 1.1,
      "attackrange": 525,
      "hpregen": 5.5,
      "hpregenperlevel": 0.55,
      "mpregen": 7,
      "mpregenperlevel": 0.4,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 59,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 3.1,
      "attackspeed": 0.668
    },
    "image": "/assets/champions/Quinn.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Quinn.png"
  },
  {
    "id": "item:3089",
    "name": "Rabadon's Deathcap",
    "category": "items",
    "aliases": [
      "rabadons",
      "deathcap",
      "dcap"
    ],
    "tier": 2,
    "tags": [
      "SpellDamage"
    ],
    "stats": {
      "FlatMagicDamageMod": 130
    },
    "statsText": "130 Ability Power",
    "cost": 3500,
    "shop": true,
    "from": [
      "item:1058",
      "item:1058"
    ],
    "image": "/assets/items/3089.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3089.png"
  },
  {
    "id": "champion:Rakan",
    "name": "Rakan",
    "category": "champions",
    "aliases": [],
    "tier": 4,
    "tags": [
      "Support"
    ],
    "resource": "Mana",
    "title": "The Charmer",
    "stats": {
      "hp": 610,
      "hpperlevel": 99,
      "mp": 315,
      "mpperlevel": 50,
      "movespeed": 335,
      "armor": 30,
      "armorperlevel": 4.9,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 300,
      "hpregen": 5,
      "hpregenperlevel": 0.5,
      "mpregen": 8.75,
      "mpregenperlevel": 0.5,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 62,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 3,
      "attackspeed": 0.635
    },
    "image": "/assets/champions/Rakan.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Rakan.png"
  },
  {
    "id": "champion:Rammus",
    "name": "Rammus",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Tank"
    ],
    "resource": "Mana",
    "title": "the Armordillo",
    "stats": {
      "hp": 645,
      "hpperlevel": 100,
      "mp": 310,
      "mpperlevel": 33,
      "movespeed": 335,
      "armor": 35,
      "armorperlevel": 4.5,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 125,
      "hpregen": 8,
      "hpregenperlevel": 0.55,
      "mpregen": 7.85,
      "mpregenperlevel": 0.5,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 65,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.215,
      "attackspeed": 0.7
    },
    "image": "/assets/champions/Rammus.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Rammus.png"
  },
  {
    "id": "item:3143",
    "name": "Randuin's Omen",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Health",
      "Armor",
      "Active",
      "Slow"
    ],
    "stats": {
      "FlatHPPoolMod": 350,
      "FlatArmorMod": 75
    },
    "statsText": "350 Health 75 Armor",
    "cost": 2700,
    "shop": true,
    "from": [
      "item:3082",
      "item:1011"
    ],
    "image": "/assets/items/3143.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3143.png"
  },
  {
    "id": "item:3094",
    "name": "Rapid Firecannon",
    "category": "items",
    "aliases": [
      "rfc",
      "rapidfire cannon"
    ],
    "tier": 3,
    "tags": [
      "CriticalStrike",
      "AttackSpeed",
      "NonbootsMovement"
    ],
    "stats": {
      "FlatCritChanceMod": 0.25,
      "PercentAttackSpeedMod": 0.35,
      "PercentMovementSpeedMod": 0.04
    },
    "statsText": "35% Attack Speed 25% Critical Strike Chance 4% Move Speed",
    "cost": 2650,
    "shop": true,
    "from": [
      "item:3086",
      "item:3144"
    ],
    "image": "/assets/items/3094.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3094.png"
  },
  {
    "id": "map:raptors",
    "name": "Raptors",
    "category": "map",
    "aliases": [
      "raptor",
      "chickens",
      "crimson raptor",
      "crimson raptors"
    ],
    "tier": 3,
    "tags": [
      "monster",
      "camp"
    ]
  },
  {
    "id": "item:3074",
    "name": "Ravenous Hydra",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Damage",
      "LifeSteal",
      "CooldownReduction",
      "OnHit",
      "AbilityHaste"
    ],
    "stats": {
      "FlatPhysicalDamageMod": 65,
      "PercentLifeStealMod": 0.12
    },
    "statsText": "65 Attack Damage 15 Ability Haste 12% Life Steal",
    "cost": 3300,
    "shop": true,
    "from": [
      "item:3077",
      "item:1053",
      "item:3133"
    ],
    "image": "/assets/items/3074.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3074.png"
  },
  {
    "id": "item:6690",
    "name": "Rectrix",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Damage",
      "NonbootsMovement"
    ],
    "stats": {
      "FlatPhysicalDamageMod": 15,
      "PercentMovementSpeedMod": 0.04
    },
    "statsText": "15 Attack Damage 4% Move Speed",
    "cost": 775,
    "shop": true,
    "from": [
      "item:1036"
    ],
    "image": "/assets/items/6690.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/6690.png"
  },
  {
    "id": "item:1043",
    "name": "Recurve Bow",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "AttackSpeed",
      "OnHit"
    ],
    "stats": {
      "PercentAttackSpeedMod": 0.15
    },
    "statsText": "15% Attack Speed",
    "cost": 700,
    "shop": true,
    "from": [
      "item:1042"
    ],
    "image": "/assets/items/1043.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/1043.png"
  },
  {
    "id": "map:red-brambleback",
    "name": "Red Brambleback",
    "category": "map",
    "aliases": [
      "red",
      "red buff",
      "red lizard"
    ],
    "tier": 2,
    "tags": [
      "monster",
      "camp",
      "buff"
    ]
  },
  {
    "id": "item:3107",
    "name": "Redemption",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "SpellDamage",
      "ManaRegen",
      "CooldownReduction",
      "AbilityHaste"
    ],
    "stats": {
      "FlatMagicDamageMod": 30
    },
    "statsText": "30 Ability Power 15 Ability Haste 100% Base Mana Regen 10% Heal and Shield Power",
    "cost": 2300,
    "shop": true,
    "from": [
      "item:3108",
      "item:3114"
    ],
    "image": "/assets/items/3107.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3107.png"
  },
  {
    "id": "item:2031",
    "name": "Refillable Potion",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "HealthRegen",
      "Consumable",
      "Active",
      "Lane",
      "Jungle"
    ],
    "stats": {},
    "statsText": "",
    "cost": 150,
    "shop": true,
    "from": [],
    "image": "/assets/items/2031.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/2031.png"
  },
  {
    "id": "item:1006",
    "name": "Rejuvenation Bead",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "HealthRegen"
    ],
    "stats": {},
    "statsText": "100% Base Health Regen",
    "cost": 300,
    "shop": true,
    "from": [],
    "image": "/assets/items/1006.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/1006.png"
  },
  {
    "id": "champion:RekSai",
    "name": "Rek'Sai",
    "category": "champions",
    "aliases": [],
    "tier": 4,
    "tags": [
      "Fighter",
      "Tank"
    ],
    "resource": "Rage",
    "title": "the Void Burrower",
    "stats": {
      "hp": 600,
      "hpperlevel": 99,
      "mp": 100,
      "mpperlevel": 0,
      "movespeed": 340,
      "armor": 35,
      "armorperlevel": 4.5,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 175,
      "hpregen": 2.5,
      "hpregenperlevel": 0.5,
      "mpregen": 0,
      "mpregenperlevel": 0,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 62,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2,
      "attackspeed": 0.667
    },
    "image": "/assets/champions/RekSai.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/RekSai.png"
  },
  {
    "id": "champion:Rell",
    "name": "Rell",
    "category": "champions",
    "aliases": [],
    "tier": 5,
    "tags": [
      "Tank",
      "Support"
    ],
    "resource": "Mana",
    "title": "the Iron Maiden",
    "stats": {
      "hp": 620,
      "hpperlevel": 104,
      "mp": 320,
      "mpperlevel": 40,
      "movespeed": 315,
      "armor": 30,
      "armorperlevel": 4,
      "spellblock": 28,
      "spellblockperlevel": 1.8,
      "attackrange": 175,
      "hpregen": 7.5,
      "hpregenperlevel": 0.85,
      "mpregen": 7,
      "mpregenperlevel": 0.7,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 55,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2,
      "attackspeed": 0.625
    },
    "image": "/assets/champions/Rell.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Rell.png"
  },
  {
    "id": "champion:Renata",
    "name": "Renata Glasc",
    "category": "champions",
    "aliases": [
      "renata"
    ],
    "tier": 4,
    "tags": [
      "Support",
      "Mage"
    ],
    "resource": "Mana",
    "title": "the Chem-Baroness",
    "stats": {
      "hp": 545,
      "hpperlevel": 94,
      "mp": 350,
      "mpperlevel": 50,
      "movespeed": 330,
      "armor": 27,
      "armorperlevel": 4.7,
      "spellblock": 30,
      "spellblockperlevel": 1.3,
      "attackrange": 550,
      "hpregen": 5.5,
      "hpregenperlevel": 0.55,
      "mpregen": 11.5,
      "mpregenperlevel": 0.5,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 49,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.11,
      "attackspeed": 0.625
    },
    "image": "/assets/champions/Renata.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Renata.png"
  },
  {
    "id": "champion:Renekton",
    "name": "Renekton",
    "category": "champions",
    "aliases": [
      "renek"
    ],
    "tier": 3,
    "tags": [
      "Fighter",
      "Tank"
    ],
    "resource": "Fury",
    "title": "the Butcher of the Sands",
    "stats": {
      "hp": 660,
      "hpperlevel": 111,
      "mp": 100,
      "mpperlevel": 0,
      "movespeed": 345,
      "armor": 35,
      "armorperlevel": 5.2,
      "spellblock": 28,
      "spellblockperlevel": 2.05,
      "attackrange": 125,
      "hpregen": 8,
      "hpregenperlevel": 0.75,
      "mpregen": 0,
      "mpregenperlevel": 0,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 69,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.75,
      "attackspeed": 0.665
    },
    "image": "/assets/champions/Renekton.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Renekton.png"
  },
  {
    "id": "champion:Rengar",
    "name": "Rengar",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Assassin",
      "Fighter"
    ],
    "resource": "Ferocity",
    "title": "the Pridestalker",
    "stats": {
      "hp": 590,
      "hpperlevel": 104,
      "mp": 4,
      "mpperlevel": 0,
      "movespeed": 345,
      "armor": 34,
      "armorperlevel": 4.2,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 125,
      "hpregen": 6,
      "hpregenperlevel": 0.5,
      "mpregen": 0,
      "mpregenperlevel": 0,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 68,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 3,
      "attackspeed": 0.667
    },
    "image": "/assets/champions/Rengar.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Rengar.png"
  },
  {
    "id": "map:rift-herald",
    "name": "Rift Herald",
    "category": "map",
    "aliases": [
      "herald",
      "shelly"
    ],
    "tier": 2,
    "tags": [
      "monster",
      "epic",
      "void"
    ]
  },
  {
    "id": "map:rift-scuttler",
    "name": "Rift Scuttler",
    "category": "map",
    "aliases": [
      "scuttle",
      "scuttler",
      "scuttle crab",
      "crab"
    ],
    "tier": 3,
    "tags": [
      "monster",
      "river"
    ]
  },
  {
    "id": "item:4633",
    "name": "Riftmaker",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Health",
      "SpellDamage",
      "CooldownReduction",
      "SpellVamp"
    ],
    "stats": {
      "FlatHPPoolMod": 350,
      "FlatMagicDamageMod": 70
    },
    "statsText": "70 Ability Power 350 Health 15 Ability Haste",
    "cost": 3100,
    "shop": true,
    "from": [
      "item:3147",
      "item:3108"
    ],
    "image": "/assets/items/4633.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/4633.png"
  },
  {
    "id": "champion:Riven",
    "name": "Riven",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Fighter",
      "Assassin"
    ],
    "resource": "None",
    "title": "the Exile",
    "stats": {
      "hp": 630,
      "hpperlevel": 100,
      "mp": 0,
      "mpperlevel": 0,
      "movespeed": 340,
      "armor": 33,
      "armorperlevel": 4.4,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 125,
      "hpregen": 8.5,
      "hpregenperlevel": 0.5,
      "mpregen": 0,
      "mpregenperlevel": 0,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 64,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 3.5,
      "attackspeed": 0.625
    },
    "image": "/assets/champions/Riven.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Riven.png"
  },
  {
    "id": "map:river",
    "name": "River",
    "category": "map",
    "aliases": [],
    "tier": 3,
    "tags": [
      "area"
    ]
  },
  {
    "id": "item:6657",
    "name": "Rod of Ages",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Health",
      "HealthRegen",
      "SpellDamage",
      "Mana",
      "ManaRegen"
    ],
    "stats": {
      "FlatMPPoolMod": 500,
      "FlatHPPoolMod": 350,
      "FlatMagicDamageMod": 45
    },
    "statsText": "45 Ability Power 350 Health 500 Mana",
    "cost": 2600,
    "shop": true,
    "from": [
      "item:1026",
      "item:3803"
    ],
    "image": "/assets/items/6657.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/6657.png"
  },
  {
    "id": "item:1028",
    "name": "Ruby Crystal",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Health"
    ],
    "stats": {
      "FlatHPPoolMod": 150
    },
    "statsText": "150 Health",
    "cost": 400,
    "shop": true,
    "from": [],
    "image": "/assets/items/1028.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/1028.png"
  },
  {
    "id": "champion:Rumble",
    "name": "Rumble",
    "category": "champions",
    "aliases": [],
    "tier": 4,
    "tags": [
      "Fighter",
      "Mage"
    ],
    "resource": "Heat",
    "title": "the Mechanized Menace",
    "stats": {
      "hp": 640,
      "hpperlevel": 105,
      "mp": 150,
      "mpperlevel": 0,
      "movespeed": 345,
      "armor": 36,
      "armorperlevel": 4.7,
      "spellblock": 28,
      "spellblockperlevel": 1.55,
      "attackrange": 125,
      "hpregen": 7,
      "hpregenperlevel": 0.6,
      "mpregen": 0,
      "mpregenperlevel": 0,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 64,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 1.85,
      "attackspeed": 0.644
    },
    "image": "/assets/champions/Rumble.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Rumble.png"
  },
  {
    "id": "item:3085",
    "name": "Runaan's Hurricane",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "CriticalStrike",
      "AttackSpeed",
      "OnHit",
      "NonbootsMovement"
    ],
    "stats": {
      "FlatCritChanceMod": 0.25,
      "PercentAttackSpeedMod": 0.4,
      "PercentMovementSpeedMod": 0.05
    },
    "statsText": "40% Attack Speed 25% Critical Strike Chance 5% Move Speed",
    "cost": 2650,
    "shop": true,
    "from": [
      "item:3086",
      "item:3144"
    ],
    "image": "/assets/items/3085.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3085.png"
  },
  {
    "id": "item:3116",
    "name": "Rylai's Crystal Scepter",
    "category": "items",
    "aliases": [
      "rylais"
    ],
    "tier": 3,
    "tags": [
      "Health",
      "SpellDamage",
      "Slow"
    ],
    "stats": {
      "FlatHPPoolMod": 400,
      "FlatMagicDamageMod": 65
    },
    "statsText": "65 Ability Power 400 Health",
    "cost": 2600,
    "shop": true,
    "from": [
      "item:1026",
      "item:1011",
      "item:1052"
    ],
    "image": "/assets/items/3116.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3116.png"
  },
  {
    "id": "champion:Ryze",
    "name": "Ryze",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Mage"
    ],
    "resource": "Mana",
    "title": "the Rune Mage",
    "stats": {
      "hp": 620,
      "hpperlevel": 124,
      "mp": 300,
      "mpperlevel": 70,
      "movespeed": 340,
      "armor": 22,
      "armorperlevel": 4.7,
      "spellblock": 32,
      "spellblockperlevel": 1.3,
      "attackrange": 550,
      "hpregen": 8,
      "hpregenperlevel": 0.8,
      "mpregen": 8,
      "mpregenperlevel": 1,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 55,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.11,
      "attackspeed": 0.658
    },
    "image": "/assets/champions/Ryze.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Ryze.png"
  },
  {
    "id": "champion:Samira",
    "name": "Samira",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Marksman",
      "Assassin"
    ],
    "resource": "Mana",
    "title": "the Desert Rose",
    "stats": {
      "hp": 630,
      "hpperlevel": 108,
      "mp": 349,
      "mpperlevel": 38,
      "movespeed": 335,
      "armor": 26,
      "armorperlevel": 4.7,
      "spellblock": 33,
      "spellblockperlevel": 1.1,
      "attackrange": 500,
      "hpregen": 3.25,
      "hpregenperlevel": 0.55,
      "mpregen": 8.2,
      "mpregenperlevel": 0.7,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 57,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 3.3,
      "attackspeed": 0.658
    },
    "image": "/assets/champions/Samira.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Samira.png"
  },
  {
    "id": "item:1027",
    "name": "Sapphire Crystal",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Mana"
    ],
    "stats": {
      "FlatMPPoolMod": 300
    },
    "statsText": "300 Mana",
    "cost": 300,
    "shop": true,
    "from": [],
    "image": "/assets/items/1027.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/1027.png"
  },
  {
    "id": "item:1101",
    "name": "Scorchclaw Pup",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Jungle"
    ],
    "stats": {},
    "statsText": "",
    "cost": 450,
    "shop": true,
    "from": [],
    "image": "/assets/items/1101.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/1101.png"
  },
  {
    "id": "item:3144",
    "name": "Scout's Slingshot",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "AttackSpeed"
    ],
    "stats": {
      "PercentAttackSpeedMod": 0.2
    },
    "statsText": "20% Attack Speed",
    "cost": 600,
    "shop": true,
    "from": [
      "item:1042",
      "item:1042"
    ],
    "image": "/assets/items/3144.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3144.png"
  },
  {
    "id": "map:scryers-bloom",
    "name": "Scryer's Bloom",
    "category": "map",
    "aliases": [
      "scryers bloom",
      "vision plant",
      "scryer bloom"
    ],
    "tier": 4,
    "tags": [
      "plant"
    ]
  },
  {
    "id": "item:2420",
    "name": "Seeker's Armguard",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Armor",
      "SpellDamage",
      "Active"
    ],
    "stats": {
      "FlatMagicDamageMod": 40,
      "FlatArmorMod": 25
    },
    "statsText": "40 Ability Power 25 Armor",
    "cost": 1600,
    "shop": true,
    "from": [
      "item:1052",
      "item:1029",
      "item:1052"
    ],
    "image": "/assets/items/2420.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/2420.png"
  },
  {
    "id": "champion:Sejuani",
    "name": "Sejuani",
    "category": "champions",
    "aliases": [
      "sej"
    ],
    "tier": 3,
    "tags": [
      "Tank"
    ],
    "resource": "Mana",
    "title": "Fury of the North",
    "stats": {
      "hp": 630,
      "hpperlevel": 114,
      "mp": 400,
      "mpperlevel": 40,
      "movespeed": 340,
      "armor": 34,
      "armorperlevel": 5.45,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 150,
      "hpregen": 8.5,
      "hpregenperlevel": 1,
      "mpregen": 7,
      "mpregenperlevel": 0.7,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 66,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 3.5,
      "attackspeed": 0.688
    },
    "image": "/assets/champions/Sejuani.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Sejuani.png"
  },
  {
    "id": "champion:Senna",
    "name": "Senna",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Support",
      "Marksman"
    ],
    "resource": "Mana",
    "title": "the Redeemer",
    "stats": {
      "hp": 530,
      "hpperlevel": 89,
      "mp": 350,
      "mpperlevel": 45,
      "movespeed": 330,
      "armor": 25,
      "armorperlevel": 4,
      "spellblock": 33,
      "spellblockperlevel": 1.1,
      "attackrange": 600,
      "hpregen": 3.5,
      "hpregenperlevel": 0.55,
      "mpregen": 11.5,
      "mpregenperlevel": 0.7,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 50,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.6,
      "attackspeed": 0.625
    },
    "image": "/assets/champions/Senna.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Senna.png"
  },
  {
    "id": "item:3040",
    "name": "Seraph's Embrace",
    "category": "items",
    "aliases": [
      "seraphs"
    ],
    "tier": 3,
    "tags": [
      "SpellDamage",
      "Mana",
      "AbilityHaste"
    ],
    "stats": {
      "FlatMPPoolMod": 1000,
      "FlatMagicDamageMod": 70
    },
    "statsText": "70 Ability Power 1000 Mana 25 Ability Haste",
    "cost": 2900,
    "shop": false,
    "from": [],
    "image": "/assets/items/3040.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3040.png"
  },
  {
    "id": "champion:Seraphine",
    "name": "Seraphine",
    "category": "champions",
    "aliases": [
      "sera"
    ],
    "tier": 3,
    "tags": [
      "Support",
      "Mage"
    ],
    "resource": "Mana",
    "title": "the Starry-Eyed Songstress",
    "stats": {
      "hp": 570,
      "hpperlevel": 95,
      "mp": 360,
      "mpperlevel": 40,
      "movespeed": 330,
      "armor": 26,
      "armorperlevel": 4.2,
      "spellblock": 30,
      "spellblockperlevel": 1.3,
      "attackrange": 525,
      "hpregen": 6.5,
      "hpregenperlevel": 0.6,
      "mpregen": 11.5,
      "mpregenperlevel": 0.95,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 50,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2,
      "attackspeed": 0.669
    },
    "image": "/assets/champions/Seraphine.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Seraphine.png"
  },
  {
    "id": "item:6695",
    "name": "Serpent's Fang",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Damage",
      "ArmorPenetration"
    ],
    "stats": {
      "FlatPhysicalDamageMod": 55
    },
    "statsText": "55 Attack Damage 15 Lethality",
    "cost": 2500,
    "shop": true,
    "from": [
      "item:3134",
      "item:1037"
    ],
    "image": "/assets/items/6695.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/6695.png"
  },
  {
    "id": "item:3134",
    "name": "Serrated Dirk",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Damage",
      "ArmorPenetration"
    ],
    "stats": {
      "FlatPhysicalDamageMod": 20
    },
    "statsText": "20 Attack Damage 10 Lethality",
    "cost": 1000,
    "shop": true,
    "from": [
      "item:1036",
      "item:1036"
    ],
    "image": "/assets/items/3134.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3134.png"
  },
  {
    "id": "item:6694",
    "name": "Serylda's Grudge",
    "category": "items",
    "aliases": [
      "seryldas"
    ],
    "tier": 3,
    "tags": [
      "Damage",
      "CooldownReduction",
      "ArmorPenetration",
      "AbilityHaste"
    ],
    "stats": {
      "FlatPhysicalDamageMod": 45
    },
    "statsText": "45 Attack Damage 35% Armor Penetration 15 Ability Haste",
    "cost": 3000,
    "shop": true,
    "from": [
      "item:3133",
      "item:3035"
    ],
    "image": "/assets/items/6694.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/6694.png"
  },
  {
    "id": "champion:Sett",
    "name": "Sett",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Fighter",
      "Tank"
    ],
    "resource": "Grit",
    "title": "the Boss",
    "stats": {
      "hp": 670,
      "hpperlevel": 114,
      "mp": 0,
      "mpperlevel": 0,
      "movespeed": 340,
      "armor": 33,
      "armorperlevel": 4.7,
      "spellblock": 28,
      "spellblockperlevel": 2.05,
      "attackrange": 125,
      "hpregen": 7,
      "hpregenperlevel": 0.5,
      "mpregen": 0,
      "mpregenperlevel": 0,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 60,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 1.75,
      "attackspeed": 0.625
    },
    "image": "/assets/champions/Sett.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Sett.png"
  },
  {
    "id": "champion:Shaco",
    "name": "Shaco",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Assassin"
    ],
    "resource": "Mana",
    "title": "the Demon Jester",
    "stats": {
      "hp": 630,
      "hpperlevel": 99,
      "mp": 297,
      "mpperlevel": 40,
      "movespeed": 345,
      "armor": 30,
      "armorperlevel": 4,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 125,
      "hpregen": 8.5,
      "hpregenperlevel": 0.55,
      "mpregen": 6,
      "mpregenperlevel": 0.35,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 63,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 3,
      "attackspeed": 0.694
    },
    "image": "/assets/champions/Shaco.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Shaco.png"
  },
  {
    "id": "item:4645",
    "name": "Shadowflame",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "SpellDamage",
      "MagicPenetration"
    ],
    "stats": {
      "FlatMagicDamageMod": 110
    },
    "statsText": "110 Ability Power 15 Magic Penetration",
    "cost": 3200,
    "shop": true,
    "from": [
      "item:3145",
      "item:1058"
    ],
    "image": "/assets/items/4645.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/4645.png"
  },
  {
    "id": "item:2421",
    "name": "Shattered Armguard",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [],
    "stats": {
      "FlatMagicDamageMod": 40,
      "FlatArmorMod": 25
    },
    "statsText": "40 Ability Power 25 Armor",
    "cost": 1600,
    "shop": true,
    "from": [
      "item:1052",
      "item:1029",
      "item:1052"
    ],
    "image": "/assets/items/2421.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/2421.png"
  },
  {
    "id": "item:3057",
    "name": "Sheen",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "OnHit",
      "AbilityHaste"
    ],
    "stats": {},
    "statsText": "10 Ability Haste",
    "cost": 900,
    "shop": true,
    "from": [
      "item:2022"
    ],
    "image": "/assets/items/3057.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3057.png"
  },
  {
    "id": "champion:Shen",
    "name": "Shen",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Tank"
    ],
    "resource": "Energy",
    "title": "the Eye of Twilight",
    "stats": {
      "hp": 610,
      "hpperlevel": 99,
      "mp": 400,
      "mpperlevel": 0,
      "movespeed": 340,
      "armor": 34,
      "armorperlevel": 4.2,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 125,
      "hpregen": 8.5,
      "hpregenperlevel": 0.75,
      "mpregen": 50,
      "mpregenperlevel": 0,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 64,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 3,
      "attackspeed": 0.751
    },
    "image": "/assets/champions/Shen.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Shen.png"
  },
  {
    "id": "item:2065",
    "name": "Shurelya's Battlesong",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "SpellDamage",
      "ManaRegen",
      "Active",
      "CooldownReduction",
      "NonbootsMovement",
      "AbilityHaste"
    ],
    "stats": {
      "FlatMagicDamageMod": 50,
      "PercentMovementSpeedMod": 0.04
    },
    "statsText": "50 Ability Power 15 Ability Haste 4% Move Speed 125% Base Mana Regen",
    "cost": 2200,
    "shop": true,
    "from": [
      "item:3113",
      "item:4642"
    ],
    "image": "/assets/items/2065.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/2065.png"
  },
  {
    "id": "champion:Shyvana",
    "name": "Shyvana",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Fighter",
      "Tank"
    ],
    "resource": "Fury",
    "title": "the Half-Dragon",
    "stats": {
      "hp": 625,
      "hpperlevel": 95,
      "mp": 100,
      "mpperlevel": 0,
      "movespeed": 350,
      "armor": 35,
      "armorperlevel": 4,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 150,
      "hpregen": 7,
      "hpregenperlevel": 0.65,
      "mpregen": 0,
      "mpregenperlevel": 0,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 62,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2,
      "attackspeed": 0.638
    },
    "image": "/assets/champions/Shyvana.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Shyvana.png"
  },
  {
    "id": "map:siege-minion",
    "name": "Siege Minion",
    "category": "map",
    "aliases": [
      "cannon",
      "cannon minion",
      "siege",
      "siege minions"
    ],
    "tier": 3,
    "tags": [
      "minion"
    ]
  },
  {
    "id": "champion:Singed",
    "name": "Singed",
    "category": "champions",
    "aliases": [],
    "tier": 4,
    "tags": [
      "Tank",
      "Mage"
    ],
    "resource": "Mana",
    "title": "the Mad Chemist",
    "stats": {
      "hp": 650,
      "hpperlevel": 96,
      "mp": 330,
      "mpperlevel": 45,
      "movespeed": 345,
      "armor": 34,
      "armorperlevel": 4.2,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 125,
      "hpregen": 9.5,
      "hpregenperlevel": 0.55,
      "mpregen": 7.5,
      "mpregenperlevel": 0.55,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 63,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 1.9,
      "attackspeed": 0.7
    },
    "image": "/assets/champions/Singed.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Singed.png"
  },
  {
    "id": "champion:Sion",
    "name": "Sion",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Tank",
      "Fighter"
    ],
    "resource": "Mana",
    "title": "The Undead Juggernaut",
    "stats": {
      "hp": 655,
      "hpperlevel": 95,
      "mp": 400,
      "mpperlevel": 52,
      "movespeed": 345,
      "armor": 36,
      "armorperlevel": 4.2,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 175,
      "hpregen": 9,
      "hpregenperlevel": 0.8,
      "mpregen": 8,
      "mpregenperlevel": 0.6,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 68,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 1.3,
      "attackspeed": 0.679
    },
    "image": "/assets/champions/Sion.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Sion.png"
  },
  {
    "id": "champion:Sivir",
    "name": "Sivir",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Marksman"
    ],
    "resource": "Mana",
    "title": "the Battle Mistress",
    "stats": {
      "hp": 600,
      "hpperlevel": 104,
      "mp": 340,
      "mpperlevel": 45,
      "movespeed": 335,
      "armor": 30,
      "armorperlevel": 4,
      "spellblock": 33,
      "spellblockperlevel": 1.1,
      "attackrange": 500,
      "hpregen": 3.25,
      "hpregenperlevel": 0.55,
      "mpregen": 6,
      "mpregenperlevel": 0.8,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 60,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 1.6,
      "attackspeed": 0.625
    },
    "image": "/assets/champions/Sivir.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Sivir.png"
  },
  {
    "id": "champion:Skarner",
    "name": "Skarner",
    "category": "champions",
    "aliases": [],
    "tier": 5,
    "tags": [
      "Tank",
      "Fighter"
    ],
    "resource": "Mana",
    "title": "the Primordial Sovereign",
    "stats": {
      "hp": 630,
      "hpperlevel": 110,
      "mp": 320,
      "mpperlevel": 40,
      "movespeed": 335,
      "armor": 33,
      "armorperlevel": 4.5,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 150,
      "hpregen": 7.5,
      "hpregenperlevel": 0.75,
      "mpregen": 7.2,
      "mpregenperlevel": 0.75,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 63,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2,
      "attackspeed": 0.625
    },
    "image": "/assets/champions/Skarner.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Skarner.png"
  },
  {
    "id": "champion:Smolder",
    "name": "Smolder",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Marksman",
      "Mage"
    ],
    "resource": "Mana",
    "title": "the Fiery Fledgling",
    "stats": {
      "hp": 575,
      "hpperlevel": 100,
      "mp": 300,
      "mpperlevel": 40,
      "movespeed": 330,
      "armor": 24,
      "armorperlevel": 4,
      "spellblock": 33,
      "spellblockperlevel": 1.1,
      "attackrange": 550,
      "hpregen": 3.75,
      "hpregenperlevel": 0.6,
      "mpregen": 8.5,
      "mpregenperlevel": 0.7,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 58,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 4,
      "attackspeed": 0.638
    },
    "image": "/assets/champions/Smolder.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Smolder.png"
  },
  {
    "id": "item:3876",
    "name": "Solstice Sleigh",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Health",
      "HealthRegen",
      "ManaRegen",
      "Vision",
      "GoldPer",
      "Lane"
    ],
    "stats": {
      "FlatHPPoolMod": 200
    },
    "statsText": "200 Health 75% Base Health Regen 75% Base Mana Regen 9 Gold Per 10 Seconds",
    "cost": 400,
    "shop": true,
    "from": [
      "item:3867"
    ],
    "image": "/assets/items/3876.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3876.png"
  },
  {
    "id": "champion:Sona",
    "name": "Sona",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Support",
      "Mage"
    ],
    "resource": "Mana",
    "title": "Maven of the Strings",
    "stats": {
      "hp": 550,
      "hpperlevel": 91,
      "mp": 340,
      "mpperlevel": 45,
      "movespeed": 325,
      "armor": 26,
      "armorperlevel": 4.2,
      "spellblock": 30,
      "spellblockperlevel": 1.3,
      "attackrange": 550,
      "hpregen": 5.5,
      "hpregenperlevel": 0.55,
      "mpregen": 11.5,
      "mpregenperlevel": 0.4,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 49,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.3,
      "attackspeed": 0.644
    },
    "image": "/assets/champions/Sona.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Sona.png"
  },
  {
    "id": "champion:Soraka",
    "name": "Soraka",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Support",
      "Mage"
    ],
    "resource": "Mana",
    "title": "the Starchild",
    "stats": {
      "hp": 605,
      "hpperlevel": 88,
      "mp": 425,
      "mpperlevel": 40,
      "movespeed": 325,
      "armor": 32,
      "armorperlevel": 5,
      "spellblock": 30,
      "spellblockperlevel": 1.3,
      "attackrange": 550,
      "hpregen": 2.5,
      "hpregenperlevel": 0.5,
      "mpregen": 11.5,
      "mpregenperlevel": 0.4,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 50,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.14,
      "attackspeed": 0.625
    },
    "image": "/assets/champions/Soraka.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Soraka.png"
  },
  {
    "id": "item:3020",
    "name": "Sorcerer's Shoes",
    "category": "items",
    "aliases": [
      "sorcs",
      "sorc shoes"
    ],
    "tier": 3,
    "tags": [
      "Boots",
      "MagicPenetration"
    ],
    "stats": {
      "FlatMovementSpeedMod": 45
    },
    "statsText": "12 Magic Penetration 45 Move Speed",
    "cost": 1100,
    "shop": true,
    "from": [
      "item:1001"
    ],
    "image": "/assets/items/3020.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3020.png"
  },
  {
    "id": "item:3161",
    "name": "Spear of Shojin",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Health",
      "Damage",
      "AbilityHaste"
    ],
    "stats": {
      "FlatHPPoolMod": 450,
      "FlatPhysicalDamageMod": 45
    },
    "statsText": "45 Attack Damage 450 Health",
    "cost": 3100,
    "shop": true,
    "from": [
      "item:1037",
      "item:2021",
      "item:1028"
    ],
    "image": "/assets/items/3161.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3161.png"
  },
  {
    "id": "item:3211",
    "name": "Spectre's Cowl",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Health",
      "HealthRegen",
      "SpellBlock"
    ],
    "stats": {
      "FlatSpellBlockMod": 35,
      "FlatHPPoolMod": 200
    },
    "statsText": "200 Health 35 Magic Resist 100% Base Health Regen",
    "cost": 1250,
    "shop": true,
    "from": [
      "item:1028",
      "item:1033",
      "item:1006"
    ],
    "image": "/assets/items/3211.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3211.png"
  },
  {
    "id": "item:3175",
    "name": "Spellslinger's Shoes",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Boots",
      "MagicPenetration"
    ],
    "stats": {
      "FlatMovementSpeedMod": 45
    },
    "statsText": "20 Magic Penetration 8% Magic Penetration 45 Move Speed",
    "cost": 1100,
    "shop": true,
    "from": [
      "item:3020"
    ],
    "image": "/assets/items/3175.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3175.png"
  },
  {
    "id": "item:3065",
    "name": "Spirit Visage",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Health",
      "SpellBlock",
      "HealthRegen",
      "CooldownReduction",
      "AbilityHaste"
    ],
    "stats": {
      "FlatSpellBlockMod": 50,
      "FlatHPPoolMod": 400
    },
    "statsText": "400 Health 50 Magic Resist 10 Ability Haste 100% Base Health Regen",
    "cost": 2700,
    "shop": true,
    "from": [
      "item:3211",
      "item:3067"
    ],
    "image": "/assets/items/3065.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3065.png"
  },
  {
    "id": "item:6616",
    "name": "Staff of Flowing Water",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "SpellDamage",
      "ManaRegen",
      "CooldownReduction",
      "AbilityHaste"
    ],
    "stats": {
      "FlatMagicDamageMod": 35
    },
    "statsText": "35 Ability Power 10% Heal and Shield Power 125% Base Mana Regen 10 Ability Haste",
    "cost": 2250,
    "shop": true,
    "from": [
      "item:3108",
      "item:3114"
    ],
    "image": "/assets/items/6616.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/6616.png"
  },
  {
    "id": "item:3087",
    "name": "Statikk Shiv",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Damage",
      "AttackSpeed",
      "SpellDamage",
      "OnHit",
      "NonbootsMovement"
    ],
    "stats": {
      "FlatMagicDamageMod": 45,
      "FlatPhysicalDamageMod": 45,
      "PercentAttackSpeedMod": 0.3,
      "PercentMovementSpeedMod": 0.04
    },
    "statsText": "45 Attack Damage 45 Ability Power 30% Attack Speed 4% Move Speed",
    "cost": 3000,
    "shop": true,
    "from": [
      "item:3144",
      "item:3113",
      "item:1037"
    ],
    "image": "/assets/items/3087.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3087.png"
  },
  {
    "id": "item:3340",
    "name": "Stealth Ward",
    "category": "items",
    "aliases": [
      "yellow trinket"
    ],
    "tier": 3,
    "tags": [
      "Active",
      "Jungle",
      "Lane",
      "Trinket",
      "Vision"
    ],
    "stats": {},
    "statsText": "",
    "cost": 0,
    "shop": true,
    "from": [],
    "image": "/assets/items/3340.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3340.png"
  },
  {
    "id": "item:2019",
    "name": "Steel Sigil",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Armor",
      "Damage"
    ],
    "stats": {
      "FlatArmorMod": 30,
      "FlatPhysicalDamageMod": 15
    },
    "statsText": "15 Attack Damage 30 Armor",
    "cost": 1100,
    "shop": true,
    "from": [
      "item:1029",
      "item:1036",
      "item:1029"
    ],
    "image": "/assets/items/2019.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/2019.png"
  },
  {
    "id": "item:3053",
    "name": "Sterak's Gage",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Health",
      "Damage",
      "Tenacity"
    ],
    "stats": {
      "FlatHPPoolMod": 400
    },
    "statsText": "400 Health 20% Tenacity",
    "cost": 3200,
    "shop": true,
    "from": [
      "item:1037",
      "item:2021",
      "item:1028"
    ],
    "image": "/assets/items/3053.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3053.png"
  },
  {
    "id": "item:3095",
    "name": "Stormrazor",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Damage",
      "CriticalStrike",
      "AttackSpeed",
      "NonbootsMovement"
    ],
    "stats": {
      "FlatCritChanceMod": 0.25,
      "FlatPhysicalDamageMod": 50,
      "PercentAttackSpeedMod": 0.25
    },
    "statsText": "50 Attack Damage 25% Attack Speed 25% Critical Strike Chance",
    "cost": 3200,
    "shop": true,
    "from": [
      "item:1038",
      "item:1018",
      "item:3144"
    ],
    "image": "/assets/items/3095.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3095.png"
  },
  {
    "id": "item:4646",
    "name": "Stormsurge",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "SpellDamage",
      "GoldPer",
      "NonbootsMovement",
      "MagicPenetration"
    ],
    "stats": {
      "FlatMagicDamageMod": 90,
      "PercentMovementSpeedMod": 0.06
    },
    "statsText": "90 Ability Power 15 Magic Penetration 6% Move Speed",
    "cost": 2800,
    "shop": true,
    "from": [
      "item:3145",
      "item:3113"
    ],
    "image": "/assets/items/4646.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/4646.png"
  },
  {
    "id": "item:6631",
    "name": "Stridebreaker",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Health",
      "Damage",
      "AttackSpeed",
      "Slow"
    ],
    "stats": {
      "FlatHPPoolMod": 450,
      "FlatPhysicalDamageMod": 40,
      "PercentAttackSpeedMod": 0.25
    },
    "statsText": "40 Attack Damage 25% Attack Speed 450 Health",
    "cost": 3300,
    "shop": true,
    "from": [
      "item:3077",
      "item:3044",
      "item:1042"
    ],
    "image": "/assets/items/6631.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/6631.png"
  },
  {
    "id": "map:summoners-rift",
    "name": "Summoner's Rift",
    "category": "map",
    "aliases": [
      "sr",
      "the rift",
      "summoners rift"
    ],
    "tier": 3,
    "tags": [
      "map"
    ]
  },
  {
    "id": "item:6610",
    "name": "Sundered Sky",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Health",
      "Damage",
      "CooldownReduction",
      "AbilityHaste"
    ],
    "stats": {
      "FlatHPPoolMod": 400,
      "FlatPhysicalDamageMod": 40
    },
    "statsText": "40 Attack Damage 400 Health 10 Ability Haste",
    "cost": 3100,
    "shop": true,
    "from": [
      "item:2021",
      "item:3133"
    ],
    "image": "/assets/items/6610.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/6610.png"
  },
  {
    "id": "item:3068",
    "name": "Sunfire Aegis",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Health",
      "Armor",
      "Aura",
      "AbilityHaste"
    ],
    "stats": {
      "FlatHPPoolMod": 350,
      "FlatArmorMod": 50
    },
    "statsText": "350 Health 50 Armor 10 Ability Haste",
    "cost": 2800,
    "shop": true,
    "from": [
      "item:6660",
      "item:1031",
      "item:1028"
    ],
    "image": "/assets/items/3068.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3068.png"
  },
  {
    "id": "map:super-minion",
    "name": "Super Minion",
    "category": "map",
    "aliases": [
      "super",
      "super minions"
    ],
    "tier": 3,
    "tags": [
      "minion"
    ]
  },
  {
    "id": "champion:Swain",
    "name": "Swain",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Mage",
      "Support"
    ],
    "resource": "Mana",
    "title": "the Noxian Grand General",
    "stats": {
      "hp": 595,
      "hpperlevel": 99,
      "mp": 400,
      "mpperlevel": 29,
      "movespeed": 330,
      "armor": 23,
      "armorperlevel": 4.7,
      "spellblock": 34,
      "spellblockperlevel": 1.55,
      "attackrange": 525,
      "hpregen": 3,
      "hpregenperlevel": 0.5,
      "mpregen": 10,
      "mpregenperlevel": 0.8,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 58,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.11,
      "attackspeed": 0.625
    },
    "image": "/assets/champions/Swain.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Swain.png"
  },
  {
    "id": "item:3170",
    "name": "Swiftmarch",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Boots"
    ],
    "stats": {
      "FlatMovementSpeedMod": 65
    },
    "statsText": "65 Move Speed",
    "cost": 1000,
    "shop": true,
    "from": [
      "item:3009"
    ],
    "image": "/assets/items/3170.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3170.png"
  },
  {
    "id": "champion:Sylas",
    "name": "Sylas",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Mage",
      "Assassin"
    ],
    "resource": "Mana",
    "title": "the Unshackled",
    "stats": {
      "hp": 600,
      "hpperlevel": 122,
      "mp": 400,
      "mpperlevel": 70,
      "movespeed": 340,
      "armor": 29,
      "armorperlevel": 5.2,
      "spellblock": 32,
      "spellblockperlevel": 2.55,
      "attackrange": 175,
      "hpregen": 9,
      "hpregenperlevel": 0.9,
      "mpregen": 8,
      "mpregenperlevel": 0.8,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 61,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 3.5,
      "attackspeed": 0.645
    },
    "image": "/assets/champions/Sylas.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Sylas.png"
  },
  {
    "id": "champion:Syndra",
    "name": "Syndra",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Mage"
    ],
    "resource": "Mana",
    "title": "the Dark Sovereign",
    "stats": {
      "hp": 583,
      "hpperlevel": 100,
      "mp": 480,
      "mpperlevel": 40,
      "movespeed": 330,
      "armor": 25,
      "armorperlevel": 4,
      "spellblock": 30,
      "spellblockperlevel": 1.3,
      "attackrange": 550,
      "hpregen": 6.5,
      "hpregenperlevel": 0.6,
      "mpregen": 8,
      "mpregenperlevel": 0.8,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 54,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2,
      "attackspeed": 0.658
    },
    "image": "/assets/champions/Syndra.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Syndra.png"
  },
  {
    "id": "champion:TahmKench",
    "name": "Tahm Kench",
    "category": "champions",
    "aliases": [
      "tahm",
      "kench"
    ],
    "tier": 3,
    "tags": [
      "Tank",
      "Support"
    ],
    "resource": "Mana",
    "title": "The River King",
    "stats": {
      "hp": 640,
      "hpperlevel": 103,
      "mp": 325,
      "mpperlevel": 50,
      "movespeed": 335,
      "armor": 39,
      "armorperlevel": 4.7,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 175,
      "hpregen": 6.5,
      "hpregenperlevel": 0.55,
      "mpregen": 8,
      "mpregenperlevel": 1,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 56,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.5,
      "attackspeed": 0.658
    },
    "image": "/assets/champions/TahmKench.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/TahmKench.png"
  },
  {
    "id": "champion:Taliyah",
    "name": "Taliyah",
    "category": "champions",
    "aliases": [],
    "tier": 4,
    "tags": [
      "Mage",
      "Support"
    ],
    "resource": "Mana",
    "title": "the Stoneweaver",
    "stats": {
      "hp": 550,
      "hpperlevel": 104,
      "mp": 470,
      "mpperlevel": 30,
      "movespeed": 330,
      "armor": 18,
      "armorperlevel": 4.7,
      "spellblock": 28,
      "spellblockperlevel": 1.3,
      "attackrange": 525,
      "hpregen": 6.5,
      "hpregenperlevel": 0.65,
      "mpregen": 8,
      "mpregenperlevel": 0.8,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 58,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 1.36,
      "attackspeed": 0.658
    },
    "image": "/assets/champions/Taliyah.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Taliyah.png"
  },
  {
    "id": "champion:Talon",
    "name": "Talon",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Assassin"
    ],
    "resource": "Mana",
    "title": "the Blade's Shadow",
    "stats": {
      "hp": 658,
      "hpperlevel": 109,
      "mp": 400,
      "mpperlevel": 37,
      "movespeed": 335,
      "armor": 30,
      "armorperlevel": 4.7,
      "spellblock": 36,
      "spellblockperlevel": 2.05,
      "attackrange": 125,
      "hpregen": 8.5,
      "hpregenperlevel": 0.75,
      "mpregen": 7.6,
      "mpregenperlevel": 0.8,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 68,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.9,
      "attackspeed": 0.625
    },
    "image": "/assets/champions/Talon.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Talon.png"
  },
  {
    "id": "champion:Taric",
    "name": "Taric",
    "category": "champions",
    "aliases": [],
    "tier": 5,
    "tags": [
      "Support",
      "Tank"
    ],
    "resource": "Mana",
    "title": "the Shield of Valoran",
    "stats": {
      "hp": 645,
      "hpperlevel": 99,
      "mp": 300,
      "mpperlevel": 60,
      "movespeed": 340,
      "armor": 40,
      "armorperlevel": 4.3,
      "spellblock": 28,
      "spellblockperlevel": 2.05,
      "attackrange": 150,
      "hpregen": 6,
      "hpregenperlevel": 0.5,
      "mpregen": 8.5,
      "mpregenperlevel": 0.8,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 55,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2,
      "attackspeed": 0.625
    },
    "image": "/assets/champions/Taric.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Taric.png"
  },
  {
    "id": "item:3070",
    "name": "Tear of the Goddess",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Mana",
      "ManaRegen"
    ],
    "stats": {
      "FlatMPPoolMod": 240
    },
    "statsText": "240 Mana",
    "cost": 400,
    "shop": true,
    "from": [],
    "image": "/assets/items/3070.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3070.png"
  },
  {
    "id": "champion:Teemo",
    "name": "Teemo",
    "category": "champions",
    "aliases": [],
    "tier": 1,
    "tags": [
      "Marksman",
      "Mage"
    ],
    "resource": "Mana",
    "title": "the Swift Scout",
    "stats": {
      "hp": 615,
      "hpperlevel": 104,
      "mp": 334,
      "mpperlevel": 25,
      "movespeed": 330,
      "armor": 24,
      "armorperlevel": 4.5,
      "spellblock": 30,
      "spellblockperlevel": 1.3,
      "attackrange": 500,
      "hpregen": 5.5,
      "hpregenperlevel": 0.65,
      "mpregen": 9.6,
      "mpregenperlevel": 0.45,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 54,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 3.38,
      "attackspeed": 0.69
    },
    "image": "/assets/champions/Teemo.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Teemo.png"
  },
  {
    "id": "item:3302",
    "name": "Terminus",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Damage",
      "AttackSpeed",
      "OnHit",
      "MagicPenetration",
      "ArmorPenetration"
    ],
    "stats": {
      "FlatPhysicalDamageMod": 30,
      "PercentAttackSpeedMod": 0.35
    },
    "statsText": "30 Attack Damage 35% Attack Speed",
    "cost": 3000,
    "shop": true,
    "from": [
      "item:3051",
      "item:1043"
    ],
    "image": "/assets/items/3302.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3302.png"
  },
  {
    "id": "item:2020",
    "name": "The Brutalizer",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Damage",
      "CooldownReduction",
      "ArmorPenetration"
    ],
    "stats": {
      "FlatPhysicalDamageMod": 25
    },
    "statsText": "25 Attack Damage 10 Ability Haste 5 Lethality",
    "cost": 1337,
    "shop": true,
    "from": [
      "item:2022",
      "item:1037"
    ],
    "image": "/assets/items/2020.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/2020.png"
  },
  {
    "id": "item:6676",
    "name": "The Collector",
    "category": "items",
    "aliases": [
      "collector"
    ],
    "tier": 3,
    "tags": [
      "Damage",
      "CriticalStrike",
      "ArmorPenetration"
    ],
    "stats": {
      "FlatCritChanceMod": 0.25,
      "FlatPhysicalDamageMod": 50
    },
    "statsText": "50 Attack Damage 10 Lethality 25% Critical Strike Chance",
    "cost": 3000,
    "shop": true,
    "from": [
      "item:1037",
      "item:3134",
      "item:1018"
    ],
    "image": "/assets/items/6676.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/6676.png"
  },
  {
    "id": "item:3075",
    "name": "Thornmail",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Health",
      "Armor"
    ],
    "stats": {
      "FlatHPPoolMod": 150,
      "FlatArmorMod": 75
    },
    "statsText": "150 Health 75 Armor",
    "cost": 2450,
    "shop": true,
    "from": [
      "item:3076",
      "item:1031",
      "item:1028"
    ],
    "image": "/assets/items/3075.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3075.png"
  },
  {
    "id": "champion:Thresh",
    "name": "Thresh",
    "category": "champions",
    "aliases": [],
    "tier": 2,
    "tags": [
      "Support",
      "Tank"
    ],
    "resource": "Mana",
    "title": "the Chain Warden",
    "stats": {
      "hp": 620,
      "hpperlevel": 120,
      "mp": 274,
      "mpperlevel": 44,
      "movespeed": 330,
      "armor": 33,
      "armorperlevel": 0,
      "spellblock": 30,
      "spellblockperlevel": 1.55,
      "attackrange": 450,
      "hpregen": 7,
      "hpregenperlevel": 0.55,
      "mpregen": 6,
      "mpregenperlevel": 0.8,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 54,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 3.5,
      "attackspeed": 0.625
    },
    "image": "/assets/champions/Thresh.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Thresh.png"
  },
  {
    "id": "item:3077",
    "name": "Tiamat",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Damage",
      "OnHit"
    ],
    "stats": {
      "FlatPhysicalDamageMod": 25
    },
    "statsText": "25 Attack Damage",
    "cost": 1200,
    "shop": true,
    "from": [
      "item:1036",
      "item:1036"
    ],
    "image": "/assets/items/3077.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3077.png"
  },
  {
    "id": "item:3748",
    "name": "Titanic Hydra",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Health",
      "HealthRegen",
      "Damage",
      "OnHit"
    ],
    "stats": {
      "FlatHPPoolMod": 600,
      "FlatPhysicalDamageMod": 40
    },
    "statsText": "40 Attack Damage 600 Health",
    "cost": 3300,
    "shop": true,
    "from": [
      "item:3077",
      "item:2021",
      "item:1011"
    ],
    "image": "/assets/items/3748.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3748.png"
  },
  {
    "id": "map:top-lane",
    "name": "Top Lane",
    "category": "map",
    "aliases": [
      "top",
      "toplane"
    ],
    "tier": 1,
    "tags": [
      "lane"
    ]
  },
  {
    "id": "item:3078",
    "name": "Trinity Force",
    "category": "items",
    "aliases": [
      "triforce",
      "trinity"
    ],
    "tier": 2,
    "tags": [
      "Health",
      "Damage",
      "AttackSpeed",
      "CooldownReduction",
      "OnHit",
      "NonbootsMovement",
      "AbilityHaste"
    ],
    "stats": {
      "FlatHPPoolMod": 333,
      "FlatPhysicalDamageMod": 36,
      "PercentAttackSpeedMod": 0.3
    },
    "statsText": "36 Attack Damage 30% Attack Speed 333 Health 15 Ability Haste",
    "cost": 3333,
    "shop": true,
    "from": [
      "item:3057",
      "item:3044",
      "item:3051"
    ],
    "image": "/assets/items/3078.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3078.png"
  },
  {
    "id": "champion:Tristana",
    "name": "Tristana",
    "category": "champions",
    "aliases": [
      "trist"
    ],
    "tier": 3,
    "tags": [
      "Marksman",
      "Assassin"
    ],
    "resource": "Mana",
    "title": "the Yordle Gunner",
    "stats": {
      "hp": 640,
      "hpperlevel": 102,
      "mp": 300,
      "mpperlevel": 32,
      "movespeed": 325,
      "armor": 30,
      "armorperlevel": 4,
      "spellblock": 33,
      "spellblockperlevel": 1.1,
      "attackrange": 550,
      "hpregen": 4,
      "hpregenperlevel": 0.5,
      "mpregen": 7.2,
      "mpregenperlevel": 0.45,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 60,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 1.5,
      "attackspeed": 0.656
    },
    "image": "/assets/champions/Tristana.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Tristana.png"
  },
  {
    "id": "champion:Trundle",
    "name": "Trundle",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Fighter",
      "Tank"
    ],
    "resource": "Mana",
    "title": "the Troll King",
    "stats": {
      "hp": 650,
      "hpperlevel": 110,
      "mp": 340,
      "mpperlevel": 45,
      "movespeed": 350,
      "armor": 37,
      "armorperlevel": 4.5,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 175,
      "hpregen": 6,
      "hpregenperlevel": 0.75,
      "mpregen": 7.5,
      "mpregenperlevel": 0.6,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 68,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.9,
      "attackspeed": 0.67
    },
    "image": "/assets/champions/Trundle.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Trundle.png"
  },
  {
    "id": "champion:Tryndamere",
    "name": "Tryndamere",
    "category": "champions",
    "aliases": [
      "trynd",
      "trynda"
    ],
    "tier": 3,
    "tags": [
      "Fighter",
      "Assassin"
    ],
    "resource": "Fury",
    "title": "the Barbarian King",
    "stats": {
      "hp": 696,
      "hpperlevel": 108,
      "mp": 100,
      "mpperlevel": 0,
      "movespeed": 345,
      "armor": 33,
      "armorperlevel": 4.8,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 175,
      "hpregen": 8.5,
      "hpregenperlevel": 0.9,
      "mpregen": 0,
      "mpregenperlevel": 0,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 66,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 3.4,
      "attackspeed": 0.67
    },
    "image": "/assets/champions/Tryndamere.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Tryndamere.png"
  },
  {
    "id": "item:2021",
    "name": "Tunneler",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Health",
      "Damage"
    ],
    "stats": {
      "FlatHPPoolMod": 250,
      "FlatPhysicalDamageMod": 15
    },
    "statsText": "15 Attack Damage 250 Health",
    "cost": 1150,
    "shop": true,
    "from": [
      "item:1036",
      "item:1028"
    ],
    "image": "/assets/items/2021.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/2021.png"
  },
  {
    "id": "map:turret",
    "name": "Turret",
    "category": "map",
    "aliases": [
      "tower",
      "turrets",
      "towers"
    ],
    "tier": 2,
    "tags": [
      "structure"
    ]
  },
  {
    "id": "champion:TwistedFate",
    "name": "Twisted Fate",
    "category": "champions",
    "aliases": [
      "tf"
    ],
    "tier": 3,
    "tags": [
      "Mage",
      "Marksman"
    ],
    "resource": "Mana",
    "title": "the Card Master",
    "stats": {
      "hp": 604,
      "hpperlevel": 108,
      "mp": 333,
      "mpperlevel": 39,
      "movespeed": 330,
      "armor": 24,
      "armorperlevel": 4.35,
      "spellblock": 30,
      "spellblockperlevel": 1.3,
      "attackrange": 525,
      "hpregen": 5.5,
      "hpregenperlevel": 0.6,
      "mpregen": 8,
      "mpregenperlevel": 0.8,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 52,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.5,
      "attackspeed": 0.625
    },
    "image": "/assets/champions/TwistedFate.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/TwistedFate.png"
  },
  {
    "id": "champion:Twitch",
    "name": "Twitch",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Marksman",
      "Assassin"
    ],
    "resource": "Mana",
    "title": "the Plague Rat",
    "stats": {
      "hp": 630,
      "hpperlevel": 98,
      "mp": 300,
      "mpperlevel": 40,
      "movespeed": 330,
      "armor": 27,
      "armorperlevel": 4,
      "spellblock": 33,
      "spellblockperlevel": 1.1,
      "attackrange": 550,
      "hpregen": 3.75,
      "hpregenperlevel": 0.6,
      "mpregen": 7.25,
      "mpregenperlevel": 0.7,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 59,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 3,
      "attackspeed": 0.679
    },
    "image": "/assets/champions/Twitch.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Twitch.png"
  },
  {
    "id": "champion:Udyr",
    "name": "Udyr",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Fighter",
      "Tank"
    ],
    "resource": "Mana",
    "title": "the Spirit Walker",
    "stats": {
      "hp": 664,
      "hpperlevel": 92,
      "mp": 271,
      "mpperlevel": 50,
      "movespeed": 350,
      "armor": 31,
      "armorperlevel": 4.7,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 125,
      "hpregen": 6,
      "hpregenperlevel": 0.75,
      "mpregen": 7.5,
      "mpregenperlevel": 0.45,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 62,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 3,
      "attackspeed": 0.65
    },
    "image": "/assets/champions/Udyr.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Udyr.png"
  },
  {
    "id": "item:3179",
    "name": "Umbral Glaive",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Damage",
      "Vision",
      "CooldownReduction",
      "ArmorPenetration",
      "AbilityHaste"
    ],
    "stats": {
      "FlatPhysicalDamageMod": 60
    },
    "statsText": "60 Attack Damage 18 Lethality 15 Ability Haste",
    "cost": 2800,
    "shop": true,
    "from": [
      "item:3134",
      "item:3133"
    ],
    "image": "/assets/items/3179.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3179.png"
  },
  {
    "id": "item:2502",
    "name": "Unending Despair",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Health",
      "Armor",
      "CooldownReduction",
      "AbilityHaste"
    ],
    "stats": {
      "FlatHPPoolMod": 400,
      "FlatArmorMod": 50
    },
    "statsText": "400 Health 50 Armor 15 Ability Haste",
    "cost": 2800,
    "shop": true,
    "from": [
      "item:1031",
      "item:3067",
      "item:1028"
    ],
    "image": "/assets/items/2502.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/2502.png"
  },
  {
    "id": "champion:Urgot",
    "name": "Urgot",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Fighter",
      "Tank"
    ],
    "resource": "Mana",
    "title": "the Dreadnought",
    "stats": {
      "hp": 655,
      "hpperlevel": 102,
      "mp": 340,
      "mpperlevel": 45,
      "movespeed": 330,
      "armor": 36,
      "armorperlevel": 5,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 350,
      "hpregen": 7.5,
      "hpregenperlevel": 0.7,
      "mpregen": 7.25,
      "mpregenperlevel": 0.8,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 63,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 3.75,
      "attackspeed": 0.625
    },
    "image": "/assets/champions/Urgot.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Urgot.png"
  },
  {
    "id": "item:1053",
    "name": "Vampiric Scepter",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Damage",
      "LifeSteal"
    ],
    "stats": {
      "FlatPhysicalDamageMod": 15,
      "PercentLifeStealMod": 0.07
    },
    "statsText": "15 Attack Damage 7% Life Steal",
    "cost": 900,
    "shop": true,
    "from": [
      "item:1036"
    ],
    "image": "/assets/items/1053.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/1053.png"
  },
  {
    "id": "champion:Varus",
    "name": "Varus",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Marksman",
      "Mage"
    ],
    "resource": "Mana",
    "title": "the Arrow of Retribution",
    "stats": {
      "hp": 600,
      "hpperlevel": 105,
      "mp": 320,
      "mpperlevel": 40,
      "movespeed": 330,
      "armor": 24,
      "armorperlevel": 4,
      "spellblock": 33,
      "spellblockperlevel": 1.1,
      "attackrange": 575,
      "hpregen": 3.5,
      "hpregenperlevel": 0.55,
      "mpregen": 8,
      "mpregenperlevel": 0.8,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 59,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 3.5,
      "attackspeed": 0.658
    },
    "image": "/assets/champions/Varus.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Varus.png"
  },
  {
    "id": "champion:Vayne",
    "name": "Vayne",
    "category": "champions",
    "aliases": [],
    "tier": 2,
    "tags": [
      "Marksman",
      "Assassin"
    ],
    "resource": "Mana",
    "title": "the Night Hunter",
    "stats": {
      "hp": 580,
      "hpperlevel": 98,
      "mp": 232,
      "mpperlevel": 35,
      "movespeed": 330,
      "armor": 23,
      "armorperlevel": 4.6,
      "spellblock": 33,
      "spellblockperlevel": 1.1,
      "attackrange": 550,
      "hpregen": 5.5,
      "hpregenperlevel": 0.4,
      "mpregen": 7,
      "mpregenperlevel": 0.4,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 60,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.8,
      "attackspeed": 0.658
    },
    "image": "/assets/champions/Vayne.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Vayne.png"
  },
  {
    "id": "champion:Veigar",
    "name": "Veigar",
    "category": "champions",
    "aliases": [
      "veegar",
      "vegar"
    ],
    "tier": 2,
    "tags": [
      "Mage"
    ],
    "resource": "Mana",
    "title": "the Tiny Master of Evil",
    "stats": {
      "hp": 580,
      "hpperlevel": 108,
      "mp": 490,
      "mpperlevel": 26,
      "movespeed": 340,
      "armor": 18,
      "armorperlevel": 5.2,
      "spellblock": 32,
      "spellblockperlevel": 1.3,
      "attackrange": 550,
      "hpregen": 6.5,
      "hpregenperlevel": 0.6,
      "mpregen": 8,
      "mpregenperlevel": 0.8,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 52,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.24,
      "attackspeed": 0.625
    },
    "image": "/assets/champions/Veigar.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Veigar.png"
  },
  {
    "id": "champion:Velkoz",
    "name": "Vel'Koz",
    "category": "champions",
    "aliases": [
      "vel koz"
    ],
    "tier": 3,
    "tags": [
      "Mage",
      "Support"
    ],
    "resource": "Mana",
    "title": "the Eye of the Void",
    "stats": {
      "hp": 590,
      "hpperlevel": 102,
      "mp": 469,
      "mpperlevel": 21,
      "movespeed": 340,
      "armor": 22,
      "armorperlevel": 4.7,
      "spellblock": 30,
      "spellblockperlevel": 1.3,
      "attackrange": 525,
      "hpregen": 5.5,
      "hpregenperlevel": 0.55,
      "mpregen": 8,
      "mpregenperlevel": 0.8,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 55,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 1.59,
      "attackspeed": 0.643
    },
    "image": "/assets/champions/Velkoz.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Velkoz.png"
  },
  {
    "id": "item:4632",
    "name": "Verdant Barrier",
    "category": "items",
    "aliases": [],
    "tier": 4,
    "tags": [
      "SpellBlock",
      "SpellDamage"
    ],
    "stats": {
      "FlatSpellBlockMod": 25,
      "FlatMagicDamageMod": 40
    },
    "statsText": "40 Ability Power 25 Magic Resist",
    "cost": 1600,
    "shop": true,
    "from": [
      "item:1052",
      "item:1033",
      "item:1052"
    ],
    "image": "/assets/items/4632.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/4632.png"
  },
  {
    "id": "champion:Vex",
    "name": "Vex",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Mage"
    ],
    "resource": "Mana",
    "title": "the Gloomist",
    "stats": {
      "hp": 590,
      "hpperlevel": 104,
      "mp": 490,
      "mpperlevel": 32,
      "movespeed": 335,
      "armor": 23,
      "armorperlevel": 4.45,
      "spellblock": 28,
      "spellblockperlevel": 1.3,
      "attackrange": 550,
      "hpregen": 6.5,
      "hpregenperlevel": 0.6,
      "mpregen": 6,
      "mpregenperlevel": 0.8,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 54,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 1,
      "attackspeed": 0.669
    },
    "image": "/assets/champions/Vex.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Vex.png"
  },
  {
    "id": "champion:Vi",
    "name": "Vi",
    "category": "champions",
    "aliases": [],
    "tier": 2,
    "tags": [
      "Fighter",
      "Assassin"
    ],
    "resource": "Mana",
    "title": "the Piltover Enforcer",
    "stats": {
      "hp": 655,
      "hpperlevel": 105,
      "mp": 295,
      "mpperlevel": 65,
      "movespeed": 340,
      "armor": 30,
      "armorperlevel": 4.7,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 125,
      "hpregen": 10,
      "hpregenperlevel": 1,
      "mpregen": 8,
      "mpregenperlevel": 0.65,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 61,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2,
      "attackspeed": 0.644
    },
    "image": "/assets/champions/Vi.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Vi.png"
  },
  {
    "id": "champion:Viego",
    "name": "Viego",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Fighter",
      "Assassin"
    ],
    "resource": "None",
    "title": "The Ruined King",
    "stats": {
      "hp": 630,
      "hpperlevel": 109,
      "mp": 10000,
      "mpperlevel": 0,
      "movespeed": 345,
      "armor": 34,
      "armorperlevel": 4.6,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 200,
      "hpregen": 7,
      "hpregenperlevel": 0.7,
      "mpregen": 0,
      "mpregenperlevel": 0,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 57,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.75,
      "attackspeed": 0.658
    },
    "image": "/assets/champions/Viego.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Viego.png"
  },
  {
    "id": "champion:Viktor",
    "name": "Viktor",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Mage"
    ],
    "resource": "Mana",
    "title": "the Herald of the Arcane",
    "stats": {
      "hp": 600,
      "hpperlevel": 105,
      "mp": 405,
      "mpperlevel": 45,
      "movespeed": 330,
      "armor": 23,
      "armorperlevel": 4.4,
      "spellblock": 30,
      "spellblockperlevel": 1.3,
      "attackrange": 525,
      "hpregen": 8,
      "hpregenperlevel": 0.65,
      "mpregen": 8,
      "mpregenperlevel": 0.8,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 53,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.11,
      "attackspeed": 0.658
    },
    "image": "/assets/champions/Viktor.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Viktor.png"
  },
  {
    "id": "champion:Vladimir",
    "name": "Vladimir",
    "category": "champions",
    "aliases": [
      "vlad"
    ],
    "tier": 3,
    "tags": [
      "Mage",
      "Fighter"
    ],
    "resource": "Crimson Rush",
    "title": "the Crimson Reaper",
    "stats": {
      "hp": 600,
      "hpperlevel": 110,
      "mp": 2,
      "mpperlevel": 0,
      "movespeed": 330,
      "armor": 24,
      "armorperlevel": 4.5,
      "spellblock": 30,
      "spellblockperlevel": 1.3,
      "attackrange": 450,
      "hpregen": 7,
      "hpregenperlevel": 0.6,
      "mpregen": 0,
      "mpregenperlevel": 0,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 55,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2,
      "attackspeed": 0.658
    },
    "image": "/assets/champions/Vladimir.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Vladimir.png"
  },
  {
    "id": "map:void-grubs",
    "name": "Void Grubs",
    "category": "map",
    "aliases": [
      "voidgrubs",
      "grubs",
      "void grub"
    ],
    "tier": 3,
    "tags": [
      "monster",
      "epic",
      "void"
    ]
  },
  {
    "id": "item:3135",
    "name": "Void Staff",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "MagicPenetration",
      "SpellDamage"
    ],
    "stats": {
      "FlatMagicDamageMod": 95
    },
    "statsText": "95 Ability Power 40% Magic Penetration",
    "cost": 3000,
    "shop": true,
    "from": [
      "item:4630",
      "item:1026"
    ],
    "image": "/assets/items/3135.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3135.png"
  },
  {
    "id": "champion:Volibear",
    "name": "Volibear",
    "category": "champions",
    "aliases": [
      "voli"
    ],
    "tier": 3,
    "tags": [
      "Fighter",
      "Tank"
    ],
    "resource": "Mana",
    "title": "the Relentless Storm",
    "stats": {
      "hp": 650,
      "hpperlevel": 104,
      "mp": 350,
      "mpperlevel": 70,
      "movespeed": 340,
      "armor": 35,
      "armorperlevel": 5.2,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 150,
      "hpregen": 9,
      "hpregenperlevel": 0.75,
      "mpregen": 6.25,
      "mpregenperlevel": 0.5,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 65,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2,
      "attackspeed": 0.625
    },
    "image": "/assets/champions/Volibear.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Volibear.png"
  },
  {
    "id": "item:6699",
    "name": "Voltaic Cyclosword",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Damage",
      "Active",
      "CooldownReduction",
      "ArmorPenetration",
      "AbilityHaste"
    ],
    "stats": {
      "FlatPhysicalDamageMod": 55
    },
    "statsText": "55 Attack Damage 10 Lethality 10 Ability Haste",
    "cost": 3000,
    "shop": true,
    "from": [
      "item:2020",
      "item:1036",
      "item:1036"
    ],
    "image": "/assets/items/6699.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/6699.png"
  },
  {
    "id": "item:3082",
    "name": "Warden's Mail",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Armor"
    ],
    "stats": {
      "FlatArmorMod": 40
    },
    "statsText": "40 Armor",
    "cost": 1000,
    "shop": true,
    "from": [
      "item:1029",
      "item:1029"
    ],
    "image": "/assets/items/3082.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3082.png"
  },
  {
    "id": "item:3083",
    "name": "Warmog's Armor",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Health",
      "HealthRegen"
    ],
    "stats": {
      "FlatHPPoolMod": 1000
    },
    "statsText": "1000 Health 100% Base Health Regen",
    "cost": 3100,
    "shop": true,
    "from": [
      "item:1011",
      "item:1011",
      "item:3801"
    ],
    "image": "/assets/items/3083.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3083.png"
  },
  {
    "id": "champion:Warwick",
    "name": "Warwick",
    "category": "champions",
    "aliases": [
      "ww"
    ],
    "tier": 2,
    "tags": [
      "Fighter",
      "Tank"
    ],
    "resource": "Mana",
    "title": "the Uncaged Wrath of Zaun",
    "stats": {
      "hp": 620,
      "hpperlevel": 99,
      "mp": 280,
      "mpperlevel": 35,
      "movespeed": 335,
      "armor": 33,
      "armorperlevel": 4.4,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 125,
      "hpregen": 4,
      "hpregenperlevel": 0.75,
      "mpregen": 7.45,
      "mpregenperlevel": 0.6,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 65,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2,
      "attackspeed": 0.638
    },
    "image": "/assets/champions/Warwick.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Warwick.png"
  },
  {
    "id": "item:2526",
    "name": "Whispering Circlet",
    "category": "items",
    "aliases": [],
    "tier": 5,
    "tags": [
      "Health",
      "Mana",
      "ManaRegen"
    ],
    "stats": {
      "FlatMPPoolMod": 300,
      "FlatHPPoolMod": 200
    },
    "statsText": "200 Health 8% Heal and Shield Power 75% Base Mana Regen 300 Mana",
    "cost": 2250,
    "shop": true,
    "from": [
      "item:3114",
      "item:1028",
      "item:3070"
    ],
    "image": "/assets/items/2526.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/2526.png"
  },
  {
    "id": "item:3066",
    "name": "Winged Moonplate",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Health",
      "NonbootsMovement"
    ],
    "stats": {
      "FlatHPPoolMod": 200,
      "PercentMovementSpeedMod": 0.04
    },
    "statsText": "200 Health 4% Move Speed",
    "cost": 800,
    "shop": true,
    "from": [
      "item:1028"
    ],
    "image": "/assets/items/3066.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3066.png"
  },
  {
    "id": "item:3119",
    "name": "Winter's Approach",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Health",
      "Mana",
      "AbilityHaste"
    ],
    "stats": {
      "FlatMPPoolMod": 500,
      "FlatHPPoolMod": 550
    },
    "statsText": "550 Health 500 Mana 15 Ability Haste",
    "cost": 2400,
    "shop": true,
    "from": [
      "item:3070",
      "item:1011",
      "item:3067"
    ],
    "image": "/assets/items/3119.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3119.png"
  },
  {
    "id": "item:3091",
    "name": "Wit's End",
    "category": "items",
    "aliases": [
      "wits end"
    ],
    "tier": 3,
    "tags": [
      "SpellBlock",
      "AttackSpeed",
      "OnHit",
      "Tenacity"
    ],
    "stats": {
      "FlatSpellBlockMod": 45,
      "PercentAttackSpeedMod": 0.5
    },
    "statsText": "50% Attack Speed 45 Magic Resist 20% Tenacity",
    "cost": 2800,
    "shop": true,
    "from": [
      "item:1043",
      "item:1057",
      "item:1043"
    ],
    "image": "/assets/items/3091.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3091.png"
  },
  {
    "id": "item:3865",
    "name": "World Atlas",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Health",
      "ManaRegen",
      "Vision",
      "GoldPer",
      "Lane"
    ],
    "stats": {},
    "statsText": "",
    "cost": 400,
    "shop": true,
    "from": [],
    "image": "/assets/items/3865.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3865.png"
  },
  {
    "id": "champion:MonkeyKing",
    "name": "Wukong",
    "category": "champions",
    "aliases": [
      "monkey king"
    ],
    "tier": 3,
    "tags": [
      "Fighter",
      "Tank"
    ],
    "resource": "Mana",
    "title": "the Monkey King",
    "stats": {
      "hp": 610,
      "hpperlevel": 99,
      "mp": 330,
      "mpperlevel": 65,
      "movespeed": 340,
      "armor": 31,
      "armorperlevel": 4.7,
      "spellblock": 28,
      "spellblockperlevel": 2.05,
      "attackrange": 175,
      "hpregen": 5.5,
      "hpregenperlevel": 0.65,
      "mpregen": 8,
      "mpregenperlevel": 0.8,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 66,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 3,
      "attackspeed": 0.69
    },
    "image": "/assets/champions/MonkeyKing.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/MonkeyKing.png"
  },
  {
    "id": "champion:Xayah",
    "name": "Xayah",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Marksman"
    ],
    "resource": "Mana",
    "title": "the Rebel",
    "stats": {
      "hp": 630,
      "hpperlevel": 107,
      "mp": 340,
      "mpperlevel": 40,
      "movespeed": 330,
      "armor": 25,
      "armorperlevel": 4.2,
      "spellblock": 33,
      "spellblockperlevel": 1.1,
      "attackrange": 525,
      "hpregen": 3.25,
      "hpregenperlevel": 0.75,
      "mpregen": 8.25,
      "mpregenperlevel": 0.8,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 60,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 3.9,
      "attackspeed": 0.658
    },
    "image": "/assets/champions/Xayah.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Xayah.png"
  },
  {
    "id": "champion:Xerath",
    "name": "Xerath",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Mage",
      "Support"
    ],
    "resource": "Mana",
    "title": "the Magus Ascendant",
    "stats": {
      "hp": 575,
      "hpperlevel": 106,
      "mp": 400,
      "mpperlevel": 22,
      "movespeed": 340,
      "armor": 22,
      "armorperlevel": 4.7,
      "spellblock": 30,
      "spellblockperlevel": 1.3,
      "attackrange": 525,
      "hpregen": 5.5,
      "hpregenperlevel": 0.55,
      "mpregen": 6.85,
      "mpregenperlevel": 0.8,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 55,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 1.36,
      "attackspeed": 0.658
    },
    "image": "/assets/champions/Xerath.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Xerath.png"
  },
  {
    "id": "champion:XinZhao",
    "name": "Xin Zhao",
    "category": "champions",
    "aliases": [
      "xin"
    ],
    "tier": 3,
    "tags": [
      "Fighter",
      "Tank"
    ],
    "resource": "Mana",
    "title": "the Seneschal of Demacia",
    "stats": {
      "hp": 620,
      "hpperlevel": 106,
      "mp": 274,
      "mpperlevel": 55,
      "movespeed": 345,
      "armor": 35,
      "armorperlevel": 4.4,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 175,
      "hpregen": 8,
      "hpregenperlevel": 0.7,
      "mpregen": 7.25,
      "mpregenperlevel": 0.45,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 63,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 3.5,
      "attackspeed": 0.645
    },
    "image": "/assets/champions/XinZhao.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/XinZhao.png"
  },
  {
    "id": "champion:Yasuo",
    "name": "Yasuo",
    "category": "champions",
    "aliases": [],
    "tier": 1,
    "tags": [
      "Fighter",
      "Assassin"
    ],
    "resource": "Flow",
    "title": "the Unforgiven",
    "stats": {
      "hp": 590,
      "hpperlevel": 110,
      "mp": 100,
      "mpperlevel": 0,
      "movespeed": 345,
      "armor": 32,
      "armorperlevel": 4.6,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 175,
      "hpregen": 6.5,
      "hpregenperlevel": 0.9,
      "mpregen": 0,
      "mpregenperlevel": 0,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 60,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 3.5,
      "attackspeed": 0.697
    },
    "image": "/assets/champions/Yasuo.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Yasuo.png"
  },
  {
    "id": "champion:Yone",
    "name": "Yone",
    "category": "champions",
    "aliases": [],
    "tier": 2,
    "tags": [
      "Fighter",
      "Assassin"
    ],
    "resource": "Flow",
    "title": "the Unforgotten",
    "stats": {
      "hp": 620,
      "hpperlevel": 105,
      "mp": 500,
      "mpperlevel": 0,
      "movespeed": 345,
      "armor": 33,
      "armorperlevel": 4.6,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 175,
      "hpregen": 7.5,
      "hpregenperlevel": 0.75,
      "mpregen": 0,
      "mpregenperlevel": 0,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 62,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 3.5,
      "attackspeed": 0.625
    },
    "image": "/assets/champions/Yone.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Yone.png"
  },
  {
    "id": "champion:Yorick",
    "name": "Yorick",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Fighter",
      "Tank"
    ],
    "resource": "Mana",
    "title": "Shepherd of Souls",
    "stats": {
      "hp": 650,
      "hpperlevel": 114,
      "mp": 300,
      "mpperlevel": 60,
      "movespeed": 340,
      "armor": 36,
      "armorperlevel": 4.5,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 175,
      "hpregen": 8,
      "hpregenperlevel": 0.8,
      "mpregen": 7.5,
      "mpregenperlevel": 0.75,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 62,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2,
      "attackspeed": 0.625
    },
    "image": "/assets/champions/Yorick.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Yorick.png"
  },
  {
    "id": "item:3142",
    "name": "Youmuu's Ghostblade",
    "category": "items",
    "aliases": [
      "youmuus",
      "ghostblade"
    ],
    "tier": 3,
    "tags": [
      "Damage",
      "Active",
      "NonbootsMovement",
      "ArmorPenetration"
    ],
    "stats": {
      "FlatPhysicalDamageMod": 55,
      "PercentMovementSpeedMod": 0.04
    },
    "statsText": "55 Attack Damage 18 Lethality 4% Move Speed",
    "cost": 2800,
    "shop": true,
    "from": [
      "item:3134",
      "item:6690",
      "item:1036"
    ],
    "image": "/assets/items/3142.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3142.png"
  },
  {
    "id": "item:3032",
    "name": "Yun Tal Wildarrows",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Damage",
      "CriticalStrike",
      "AttackSpeed"
    ],
    "stats": {
      "FlatPhysicalDamageMod": 50,
      "PercentAttackSpeedMod": 0.45
    },
    "statsText": "50 Attack Damage 45% Attack Speed 0% Critical Strike Chance",
    "cost": 3000,
    "shop": true,
    "from": [
      "item:1038",
      "item:3144",
      "item:1036"
    ],
    "image": "/assets/items/3032.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3032.png"
  },
  {
    "id": "champion:Yunara",
    "name": "Yunara",
    "category": "champions",
    "aliases": [],
    "tier": 4,
    "tags": [
      "Marksman"
    ],
    "resource": "Mana",
    "title": "the Unbroken Faith",
    "stats": {
      "hp": 590,
      "hpperlevel": 110,
      "mp": 275,
      "mpperlevel": 45,
      "movespeed": 325,
      "armor": 25,
      "armorperlevel": 4.4,
      "spellblock": 33,
      "spellblockperlevel": 1.1,
      "attackrange": 575,
      "hpregen": 4,
      "hpregenperlevel": 0.55,
      "mpregen": 7.5,
      "mpregenperlevel": 0.75,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 55,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2,
      "attackspeed": 0.65
    },
    "image": "/assets/champions/Yunara.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Yunara.png"
  },
  {
    "id": "champion:Yuumi",
    "name": "Yuumi",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Support",
      "Mage"
    ],
    "resource": "Mana",
    "title": "the Magical Cat",
    "stats": {
      "hp": 500,
      "hpperlevel": 69,
      "mp": 440,
      "mpperlevel": 45,
      "movespeed": 330,
      "armor": 25,
      "armorperlevel": 4.2,
      "spellblock": 25,
      "spellblockperlevel": 1.1,
      "attackrange": 425,
      "hpregen": 5,
      "hpregenperlevel": 0.55,
      "mpregen": 10,
      "mpregenperlevel": 0.4,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 49,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 1,
      "attackspeed": 0.625
    },
    "image": "/assets/champions/Yuumi.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Yuumi.png"
  },
  {
    "id": "champion:Zaahen",
    "name": "Zaahen",
    "category": "champions",
    "aliases": [],
    "tier": 4,
    "tags": [
      "Fighter"
    ],
    "resource": "Mana",
    "title": "The Unsundered",
    "stats": {
      "hp": 640,
      "hpperlevel": 114,
      "mp": 350,
      "mpperlevel": 55,
      "movespeed": 345,
      "armor": 36,
      "armorperlevel": 5,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 175,
      "hpregen": 7.5,
      "hpregenperlevel": 0.8,
      "mpregen": 8.15,
      "mpregenperlevel": 0.75,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 63,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.5,
      "attackspeed": 0.625
    },
    "image": "/assets/champions/Zaahen.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Zaahen.png"
  },
  {
    "id": "champion:Zac",
    "name": "Zac",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Tank",
      "Fighter"
    ],
    "resource": "None",
    "title": "the Secret Weapon",
    "stats": {
      "hp": 685,
      "hpperlevel": 109,
      "mp": 0,
      "mpperlevel": 0,
      "movespeed": 340,
      "armor": 33,
      "armorperlevel": 5.2,
      "spellblock": 32,
      "spellblockperlevel": 2.05,
      "attackrange": 175,
      "hpregen": 5,
      "hpregenperlevel": 0.5,
      "mpregen": 0,
      "mpregenperlevel": 0,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 60,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 1.6,
      "attackspeed": 0.736
    },
    "image": "/assets/champions/Zac.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Zac.png"
  },
  {
    "id": "item:3871",
    "name": "Zaz'Zak's Realmspike",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Health",
      "HealthRegen",
      "ManaRegen",
      "Vision",
      "GoldPer",
      "Lane"
    ],
    "stats": {
      "FlatHPPoolMod": 200
    },
    "statsText": "200 Health 75% Base Health Regen 75% Base Mana Regen 9 Gold Per 10 Seconds",
    "cost": 400,
    "shop": true,
    "from": [
      "item:3867"
    ],
    "image": "/assets/items/3871.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3871.png"
  },
  {
    "id": "item:3086",
    "name": "Zeal",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "CriticalStrike",
      "AttackSpeed",
      "NonbootsMovement"
    ],
    "stats": {
      "FlatCritChanceMod": 0.15,
      "PercentAttackSpeedMod": 0.15,
      "PercentMovementSpeedMod": 0.04
    },
    "statsText": "15% Attack Speed 15% Critical Strike Chance 4% Move Speed",
    "cost": 1200,
    "shop": true,
    "from": [
      "item:1018",
      "item:1042"
    ],
    "image": "/assets/items/3086.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3086.png"
  },
  {
    "id": "champion:Zed",
    "name": "Zed",
    "category": "champions",
    "aliases": [],
    "tier": 1,
    "tags": [
      "Assassin"
    ],
    "resource": "Energy",
    "title": "the Master of Shadows",
    "stats": {
      "hp": 654,
      "hpperlevel": 99,
      "mp": 200,
      "mpperlevel": 0,
      "movespeed": 345,
      "armor": 32,
      "armorperlevel": 4.7,
      "spellblock": 29,
      "spellblockperlevel": 2.05,
      "attackrange": 125,
      "hpregen": 7,
      "hpregenperlevel": 0.65,
      "mpregen": 50,
      "mpregenperlevel": 0,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 63,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 3.3,
      "attackspeed": 0.651
    },
    "image": "/assets/champions/Zed.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Zed.png"
  },
  {
    "id": "item:3050",
    "name": "Zeke's Convergence",
    "category": "items",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Health",
      "SpellBlock",
      "Armor",
      "AbilityHaste"
    ],
    "stats": {
      "FlatSpellBlockMod": 25,
      "FlatHPPoolMod": 300,
      "FlatArmorMod": 25
    },
    "statsText": "300 Health 25 Armor 25 Magic Resist 10 Ability Haste",
    "cost": 2200,
    "shop": true,
    "from": [
      "item:3067",
      "item:1029",
      "item:1033"
    ],
    "image": "/assets/items/3050.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3050.png"
  },
  {
    "id": "champion:Zeri",
    "name": "Zeri",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Marksman"
    ],
    "resource": "Mana",
    "title": "The Spark of Zaun",
    "stats": {
      "hp": 600,
      "hpperlevel": 110,
      "mp": 250,
      "mpperlevel": 45,
      "movespeed": 330,
      "armor": 24,
      "armorperlevel": 4.2,
      "spellblock": 33,
      "spellblockperlevel": 1.1,
      "attackrange": 550,
      "hpregen": 3.25,
      "hpregenperlevel": 0.7,
      "mpregen": 6,
      "mpregenperlevel": 0.8,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 56,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2,
      "attackspeed": 0.658
    },
    "image": "/assets/champions/Zeri.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Zeri.png"
  },
  {
    "id": "item:3157",
    "name": "Zhonya's Hourglass",
    "category": "items",
    "aliases": [
      "zhonyas",
      "zhonya",
      "hourglass"
    ],
    "tier": 2,
    "tags": [
      "Armor",
      "SpellDamage",
      "Active"
    ],
    "stats": {
      "FlatMagicDamageMod": 105,
      "FlatArmorMod": 50
    },
    "statsText": "105 Ability Power 50 Armor",
    "cost": 3250,
    "shop": true,
    "from": [
      "item:1058",
      "item:2420"
    ],
    "image": "/assets/items/3157.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/item/3157.png"
  },
  {
    "id": "champion:Ziggs",
    "name": "Ziggs",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Mage"
    ],
    "resource": "Mana",
    "title": "the Hexplosives Expert",
    "stats": {
      "hp": 606,
      "hpperlevel": 106,
      "mp": 480,
      "mpperlevel": 23.5,
      "movespeed": 325,
      "armor": 21,
      "armorperlevel": 4.7,
      "spellblock": 30,
      "spellblockperlevel": 1.3,
      "attackrange": 550,
      "hpregen": 6.5,
      "hpregenperlevel": 0.6,
      "mpregen": 8,
      "mpregenperlevel": 0.8,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 55,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2,
      "attackspeed": 0.656
    },
    "image": "/assets/champions/Ziggs.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Ziggs.png"
  },
  {
    "id": "champion:Zilean",
    "name": "Zilean",
    "category": "champions",
    "aliases": [
      "zil"
    ],
    "tier": 5,
    "tags": [
      "Support",
      "Mage"
    ],
    "resource": "Mana",
    "title": "the Chronokeeper",
    "stats": {
      "hp": 574,
      "hpperlevel": 96,
      "mp": 452,
      "mpperlevel": 50,
      "movespeed": 335,
      "armor": 24,
      "armorperlevel": 5,
      "spellblock": 30,
      "spellblockperlevel": 1.3,
      "attackrange": 550,
      "hpregen": 5.5,
      "hpregenperlevel": 0.5,
      "mpregen": 11.35,
      "mpregenperlevel": 0.8,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 52,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.13,
      "attackspeed": 0.658
    },
    "image": "/assets/champions/Zilean.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Zilean.png"
  },
  {
    "id": "champion:Zoe",
    "name": "Zoe",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Mage"
    ],
    "resource": "Mana",
    "title": "the Aspect of Twilight",
    "stats": {
      "hp": 630,
      "hpperlevel": 106,
      "mp": 425,
      "mpperlevel": 25,
      "movespeed": 340,
      "armor": 21,
      "armorperlevel": 4.7,
      "spellblock": 30,
      "spellblockperlevel": 1.3,
      "attackrange": 550,
      "hpregen": 7.5,
      "hpregenperlevel": 0.6,
      "mpregen": 8,
      "mpregenperlevel": 0.65,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 58,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.5,
      "attackspeed": 0.658
    },
    "image": "/assets/champions/Zoe.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Zoe.png"
  },
  {
    "id": "champion:Zyra",
    "name": "Zyra",
    "category": "champions",
    "aliases": [],
    "tier": 3,
    "tags": [
      "Mage",
      "Support"
    ],
    "resource": "Mana",
    "title": "Rise of the Thorns",
    "stats": {
      "hp": 574,
      "hpperlevel": 93,
      "mp": 418,
      "mpperlevel": 25,
      "movespeed": 340,
      "armor": 29,
      "armorperlevel": 4.2,
      "spellblock": 30,
      "spellblockperlevel": 1.3,
      "attackrange": 575,
      "hpregen": 5.5,
      "hpregenperlevel": 0.5,
      "mpregen": 7,
      "mpregenperlevel": 0.8,
      "crit": 0,
      "critperlevel": 0,
      "attackdamage": 53,
      "attackdamageperlevel": 0,
      "attackspeedperlevel": 2.11,
      "attackspeed": 0.681
    },
    "image": "/assets/champions/Zyra.png",
    "art": "https://ddragon.leagueoflegends.com/cdn/16.23.1/img/champion/Zyra.png"
  }
];
export const QUESTIONS = [
  {
    "id": "c-any",
    "category": "champions",
    "prompt": "Name any League of Legends champion.",
    "answerIds": [
      "champion:Aatrox",
      "champion:Ahri",
      "champion:Akali",
      "champion:Akshan",
      "champion:Alistar",
      "champion:Ambessa",
      "champion:Amumu",
      "champion:Anivia",
      "champion:Annie",
      "champion:Aphelios",
      "champion:Ashe",
      "champion:AurelionSol",
      "champion:Aurora",
      "champion:Azir",
      "champion:Bard",
      "champion:Belveth",
      "champion:Blitzcrank",
      "champion:Brand",
      "champion:Braum",
      "champion:Briar",
      "champion:Caitlyn",
      "champion:Camille",
      "champion:Cassiopeia",
      "champion:Chogath",
      "champion:Corki",
      "champion:Darius",
      "champion:Diana",
      "champion:DrMundo",
      "champion:Draven",
      "champion:Ekko",
      "champion:Elise",
      "champion:Evelynn",
      "champion:Ezreal",
      "champion:Fiddlesticks",
      "champion:Fiora",
      "champion:Fizz",
      "champion:Galio",
      "champion:Gangplank",
      "champion:Garen",
      "champion:Gnar",
      "champion:Gragas",
      "champion:Graves",
      "champion:Gwen",
      "champion:Hecarim",
      "champion:Heimerdinger",
      "champion:Hwei",
      "champion:Illaoi",
      "champion:Irelia",
      "champion:Ivern",
      "champion:Janna",
      "champion:JarvanIV",
      "champion:Jax",
      "champion:Jayce",
      "champion:Jhin",
      "champion:Jinx",
      "champion:KSante",
      "champion:Kaisa",
      "champion:Kalista",
      "champion:Karma",
      "champion:Karthus",
      "champion:Kassadin",
      "champion:Katarina",
      "champion:Kayle",
      "champion:Kayn",
      "champion:Kennen",
      "champion:Khazix",
      "champion:Kindred",
      "champion:Kled",
      "champion:KogMaw",
      "champion:Leblanc",
      "champion:LeeSin",
      "champion:Leona",
      "champion:Lillia",
      "champion:Lissandra",
      "champion:Locke",
      "champion:Lucian",
      "champion:Lulu",
      "champion:Lux",
      "champion:Malphite",
      "champion:Malzahar",
      "champion:Maokai",
      "champion:MasterYi",
      "champion:Mel",
      "champion:Milio",
      "champion:MissFortune",
      "champion:MonkeyKing",
      "champion:Mordekaiser",
      "champion:Morgana",
      "champion:Naafiri",
      "champion:Nami",
      "champion:Nasus",
      "champion:Nautilus",
      "champion:Neeko",
      "champion:Nidalee",
      "champion:Nilah",
      "champion:Nocturne",
      "champion:Nunu",
      "champion:Olaf",
      "champion:Orianna",
      "champion:Ornn",
      "champion:Pantheon",
      "champion:Poppy",
      "champion:Pyke",
      "champion:Qiyana",
      "champion:Quinn",
      "champion:Rakan",
      "champion:Rammus",
      "champion:RekSai",
      "champion:Rell",
      "champion:Renata",
      "champion:Renekton",
      "champion:Rengar",
      "champion:Riven",
      "champion:Rumble",
      "champion:Ryze",
      "champion:Samira",
      "champion:Sejuani",
      "champion:Senna",
      "champion:Seraphine",
      "champion:Sett",
      "champion:Shaco",
      "champion:Shen",
      "champion:Shyvana",
      "champion:Singed",
      "champion:Sion",
      "champion:Sivir",
      "champion:Skarner",
      "champion:Smolder",
      "champion:Sona",
      "champion:Soraka",
      "champion:Swain",
      "champion:Sylas",
      "champion:Syndra",
      "champion:TahmKench",
      "champion:Taliyah",
      "champion:Talon",
      "champion:Taric",
      "champion:Teemo",
      "champion:Thresh",
      "champion:Tristana",
      "champion:Trundle",
      "champion:Tryndamere",
      "champion:TwistedFate",
      "champion:Twitch",
      "champion:Udyr",
      "champion:Urgot",
      "champion:Varus",
      "champion:Vayne",
      "champion:Veigar",
      "champion:Velkoz",
      "champion:Vex",
      "champion:Vi",
      "champion:Viego",
      "champion:Viktor",
      "champion:Vladimir",
      "champion:Volibear",
      "champion:Warwick",
      "champion:Xayah",
      "champion:Xerath",
      "champion:XinZhao",
      "champion:Yasuo",
      "champion:Yone",
      "champion:Yorick",
      "champion:Yunara",
      "champion:Yuumi",
      "champion:Zaahen",
      "champion:Zac",
      "champion:Zed",
      "champion:Zeri",
      "champion:Ziggs",
      "champion:Zilean",
      "champion:Zoe",
      "champion:Zyra"
    ],
    "rule": "All 173 champions in the bundled PC League snapshot qualify.",
    "hint": "Go beyond your usual picks. Nicknames and close typos are accepted.",
    "explanation": "All 173 champions in the bundled PC League snapshot qualify."
  },
  {
    "id": "c-class-assassin",
    "category": "champions",
    "prompt": "Name a champion with Riot’s assassin class tag.",
    "answerIds": [
      "champion:Ahri",
      "champion:Akali",
      "champion:Akshan",
      "champion:Ambessa",
      "champion:Aurora",
      "champion:Briar",
      "champion:Camille",
      "champion:Diana",
      "champion:Ekko",
      "champion:Elise",
      "champion:Evelynn",
      "champion:Fiora",
      "champion:Fizz",
      "champion:Irelia",
      "champion:Kassadin",
      "champion:Katarina",
      "champion:Kayn",
      "champion:Khazix",
      "champion:Leblanc",
      "champion:LeeSin",
      "champion:Locke",
      "champion:Lucian",
      "champion:MasterYi",
      "champion:Naafiri",
      "champion:Nidalee",
      "champion:Nilah",
      "champion:Nocturne",
      "champion:Pantheon",
      "champion:Pyke",
      "champion:Qiyana",
      "champion:Quinn",
      "champion:Rengar",
      "champion:Riven",
      "champion:Samira",
      "champion:Shaco",
      "champion:Sylas",
      "champion:Talon",
      "champion:Tristana",
      "champion:Tryndamere",
      "champion:Twitch",
      "champion:Vayne",
      "champion:Vi",
      "champion:Viego",
      "champion:Yasuo",
      "champion:Yone",
      "champion:Zed"
    ],
    "rule": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Either primary or secondary assassin tag counts; lane roles can differ.",
    "hint": "Think class, rather than the lane you last played.",
    "explanation": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Either primary or secondary assassin tag counts; lane roles can differ."
  },
  {
    "id": "c-class-fighter",
    "category": "champions",
    "prompt": "Name a champion with Riot’s fighter class tag.",
    "answerIds": [
      "champion:Aatrox",
      "champion:Ambessa",
      "champion:Belveth",
      "champion:Briar",
      "champion:Camille",
      "champion:Darius",
      "champion:Diana",
      "champion:DrMundo",
      "champion:Fiora",
      "champion:Fizz",
      "champion:Gangplank",
      "champion:Garen",
      "champion:Gnar",
      "champion:Gragas",
      "champion:Gwen",
      "champion:Hecarim",
      "champion:Illaoi",
      "champion:Irelia",
      "champion:JarvanIV",
      "champion:Jax",
      "champion:Jayce",
      "champion:KSante",
      "champion:Kayn",
      "champion:Kled",
      "champion:LeeSin",
      "champion:Lillia",
      "champion:MasterYi",
      "champion:MonkeyKing",
      "champion:Mordekaiser",
      "champion:Naafiri",
      "champion:Nasus",
      "champion:Nilah",
      "champion:Nocturne",
      "champion:Olaf",
      "champion:Pantheon",
      "champion:Poppy",
      "champion:RekSai",
      "champion:Renekton",
      "champion:Rengar",
      "champion:Riven",
      "champion:Rumble",
      "champion:Sett",
      "champion:Shyvana",
      "champion:Sion",
      "champion:Skarner",
      "champion:Trundle",
      "champion:Tryndamere",
      "champion:Udyr",
      "champion:Urgot",
      "champion:Vi",
      "champion:Viego",
      "champion:Vladimir",
      "champion:Volibear",
      "champion:Warwick",
      "champion:XinZhao",
      "champion:Yasuo",
      "champion:Yone",
      "champion:Yorick",
      "champion:Zaahen",
      "champion:Zac"
    ],
    "rule": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Either primary or secondary fighter tag counts; lane roles can differ.",
    "hint": "Think class, rather than the lane you last played.",
    "explanation": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Either primary or secondary fighter tag counts; lane roles can differ."
  },
  {
    "id": "c-class-mage",
    "category": "champions",
    "prompt": "Name a champion with Riot’s mage class tag.",
    "answerIds": [
      "champion:Ahri",
      "champion:Anivia",
      "champion:Annie",
      "champion:AurelionSol",
      "champion:Aurora",
      "champion:Azir",
      "champion:Bard",
      "champion:Brand",
      "champion:Cassiopeia",
      "champion:Chogath",
      "champion:Corki",
      "champion:Ekko",
      "champion:Elise",
      "champion:Evelynn",
      "champion:Ezreal",
      "champion:Fiddlesticks",
      "champion:Galio",
      "champion:Gragas",
      "champion:Heimerdinger",
      "champion:Hwei",
      "champion:Ivern",
      "champion:Janna",
      "champion:Jhin",
      "champion:Kaisa",
      "champion:Karma",
      "champion:Karthus",
      "champion:Kassadin",
      "champion:Katarina",
      "champion:Kayle",
      "champion:Kennen",
      "champion:KogMaw",
      "champion:Leblanc",
      "champion:Lillia",
      "champion:Lissandra",
      "champion:Locke",
      "champion:Lulu",
      "champion:Lux",
      "champion:Malphite",
      "champion:Malzahar",
      "champion:Mel",
      "champion:Milio",
      "champion:MissFortune",
      "champion:Mordekaiser",
      "champion:Morgana",
      "champion:Nami",
      "champion:Neeko",
      "champion:Nidalee",
      "champion:Nunu",
      "champion:Orianna",
      "champion:Renata",
      "champion:Rumble",
      "champion:Ryze",
      "champion:Seraphine",
      "champion:Singed",
      "champion:Smolder",
      "champion:Sona",
      "champion:Soraka",
      "champion:Swain",
      "champion:Sylas",
      "champion:Syndra",
      "champion:Taliyah",
      "champion:Teemo",
      "champion:TwistedFate",
      "champion:Varus",
      "champion:Veigar",
      "champion:Velkoz",
      "champion:Vex",
      "champion:Viktor",
      "champion:Vladimir",
      "champion:Xerath",
      "champion:Yuumi",
      "champion:Ziggs",
      "champion:Zilean",
      "champion:Zoe",
      "champion:Zyra"
    ],
    "rule": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Either primary or secondary mage tag counts; lane roles can differ.",
    "hint": "Think class, rather than the lane you last played.",
    "explanation": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Either primary or secondary mage tag counts; lane roles can differ."
  },
  {
    "id": "c-class-marksman",
    "category": "champions",
    "prompt": "Name a champion with Riot’s marksman class tag.",
    "answerIds": [
      "champion:Akshan",
      "champion:Aphelios",
      "champion:Ashe",
      "champion:Azir",
      "champion:Caitlyn",
      "champion:Corki",
      "champion:Draven",
      "champion:Ezreal",
      "champion:Graves",
      "champion:Jayce",
      "champion:Jhin",
      "champion:Jinx",
      "champion:Kaisa",
      "champion:Kalista",
      "champion:Kayle",
      "champion:Kindred",
      "champion:KogMaw",
      "champion:Lucian",
      "champion:MissFortune",
      "champion:Quinn",
      "champion:Samira",
      "champion:Senna",
      "champion:Sivir",
      "champion:Smolder",
      "champion:Teemo",
      "champion:Tristana",
      "champion:TwistedFate",
      "champion:Twitch",
      "champion:Varus",
      "champion:Vayne",
      "champion:Xayah",
      "champion:Yunara",
      "champion:Zeri"
    ],
    "rule": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Either primary or secondary marksman tag counts; lane roles can differ.",
    "hint": "Think class, rather than the lane you last played.",
    "explanation": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Either primary or secondary marksman tag counts; lane roles can differ."
  },
  {
    "id": "c-class-support",
    "category": "champions",
    "prompt": "Name a champion with Riot’s support class tag.",
    "answerIds": [
      "champion:Alistar",
      "champion:Amumu",
      "champion:Annie",
      "champion:Ashe",
      "champion:Bard",
      "champion:Blitzcrank",
      "champion:Brand",
      "champion:Braum",
      "champion:Fiddlesticks",
      "champion:Heimerdinger",
      "champion:Hwei",
      "champion:Ivern",
      "champion:Janna",
      "champion:Karma",
      "champion:Leona",
      "champion:Lulu",
      "champion:Lux",
      "champion:Maokai",
      "champion:Mel",
      "champion:Milio",
      "champion:Morgana",
      "champion:Nami",
      "champion:Nautilus",
      "champion:Neeko",
      "champion:Orianna",
      "champion:Pyke",
      "champion:Rakan",
      "champion:Rell",
      "champion:Renata",
      "champion:Senna",
      "champion:Seraphine",
      "champion:Sona",
      "champion:Soraka",
      "champion:Swain",
      "champion:TahmKench",
      "champion:Taliyah",
      "champion:Taric",
      "champion:Thresh",
      "champion:Velkoz",
      "champion:Xerath",
      "champion:Yuumi",
      "champion:Zilean",
      "champion:Zyra"
    ],
    "rule": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Either primary or secondary support tag counts; lane roles can differ.",
    "hint": "Think class, rather than the lane you last played.",
    "explanation": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Either primary or secondary support tag counts; lane roles can differ."
  },
  {
    "id": "c-class-tank",
    "category": "champions",
    "prompt": "Name a champion with Riot’s tank class tag.",
    "answerIds": [
      "champion:Alistar",
      "champion:Amumu",
      "champion:Blitzcrank",
      "champion:Braum",
      "champion:Chogath",
      "champion:Darius",
      "champion:DrMundo",
      "champion:Galio",
      "champion:Garen",
      "champion:Gnar",
      "champion:Hecarim",
      "champion:Illaoi",
      "champion:JarvanIV",
      "champion:KSante",
      "champion:Leona",
      "champion:Malphite",
      "champion:Maokai",
      "champion:MonkeyKing",
      "champion:Nasus",
      "champion:Nautilus",
      "champion:Nunu",
      "champion:Olaf",
      "champion:Ornn",
      "champion:Poppy",
      "champion:Rammus",
      "champion:RekSai",
      "champion:Rell",
      "champion:Renekton",
      "champion:Sejuani",
      "champion:Sett",
      "champion:Shen",
      "champion:Shyvana",
      "champion:Singed",
      "champion:Sion",
      "champion:Skarner",
      "champion:TahmKench",
      "champion:Taric",
      "champion:Thresh",
      "champion:Trundle",
      "champion:Udyr",
      "champion:Urgot",
      "champion:Volibear",
      "champion:Warwick",
      "champion:XinZhao",
      "champion:Yorick",
      "champion:Zac"
    ],
    "rule": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Either primary or secondary tank tag counts; lane roles can differ.",
    "hint": "Think class, rather than the lane you last played.",
    "explanation": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Either primary or secondary tank tag counts; lane roles can differ."
  },
  {
    "id": "c-mana",
    "category": "champions",
    "prompt": "Name a champion whose resource is mana.",
    "answerIds": [
      "champion:Ahri",
      "champion:Akshan",
      "champion:Alistar",
      "champion:Amumu",
      "champion:Anivia",
      "champion:Annie",
      "champion:Aphelios",
      "champion:Ashe",
      "champion:AurelionSol",
      "champion:Aurora",
      "champion:Azir",
      "champion:Bard",
      "champion:Blitzcrank",
      "champion:Brand",
      "champion:Braum",
      "champion:Caitlyn",
      "champion:Camille",
      "champion:Cassiopeia",
      "champion:Chogath",
      "champion:Corki",
      "champion:Darius",
      "champion:Diana",
      "champion:Draven",
      "champion:Ekko",
      "champion:Elise",
      "champion:Evelynn",
      "champion:Ezreal",
      "champion:Fiddlesticks",
      "champion:Fiora",
      "champion:Fizz",
      "champion:Galio",
      "champion:Gangplank",
      "champion:Gragas",
      "champion:Graves",
      "champion:Gwen",
      "champion:Hecarim",
      "champion:Heimerdinger",
      "champion:Hwei",
      "champion:Illaoi",
      "champion:Irelia",
      "champion:Ivern",
      "champion:Janna",
      "champion:JarvanIV",
      "champion:Jax",
      "champion:Jayce",
      "champion:Jhin",
      "champion:Jinx",
      "champion:KSante",
      "champion:Kaisa",
      "champion:Kalista",
      "champion:Karma",
      "champion:Karthus",
      "champion:Kassadin",
      "champion:Kayle",
      "champion:Kayn",
      "champion:Khazix",
      "champion:Kindred",
      "champion:KogMaw",
      "champion:Leblanc",
      "champion:Leona",
      "champion:Lillia",
      "champion:Lissandra",
      "champion:Locke",
      "champion:Lucian",
      "champion:Lulu",
      "champion:Lux",
      "champion:Malphite",
      "champion:Malzahar",
      "champion:Maokai",
      "champion:MasterYi",
      "champion:Mel",
      "champion:Milio",
      "champion:MissFortune",
      "champion:MonkeyKing",
      "champion:Morgana",
      "champion:Naafiri",
      "champion:Nami",
      "champion:Nasus",
      "champion:Nautilus",
      "champion:Neeko",
      "champion:Nidalee",
      "champion:Nilah",
      "champion:Nocturne",
      "champion:Nunu",
      "champion:Olaf",
      "champion:Orianna",
      "champion:Ornn",
      "champion:Pantheon",
      "champion:Poppy",
      "champion:Pyke",
      "champion:Qiyana",
      "champion:Quinn",
      "champion:Rakan",
      "champion:Rammus",
      "champion:Rell",
      "champion:Renata",
      "champion:Ryze",
      "champion:Samira",
      "champion:Sejuani",
      "champion:Senna",
      "champion:Seraphine",
      "champion:Shaco",
      "champion:Singed",
      "champion:Sion",
      "champion:Sivir",
      "champion:Skarner",
      "champion:Smolder",
      "champion:Sona",
      "champion:Soraka",
      "champion:Swain",
      "champion:Sylas",
      "champion:Syndra",
      "champion:TahmKench",
      "champion:Taliyah",
      "champion:Talon",
      "champion:Taric",
      "champion:Teemo",
      "champion:Thresh",
      "champion:Tristana",
      "champion:Trundle",
      "champion:TwistedFate",
      "champion:Twitch",
      "champion:Udyr",
      "champion:Urgot",
      "champion:Varus",
      "champion:Vayne",
      "champion:Veigar",
      "champion:Velkoz",
      "champion:Vex",
      "champion:Vi",
      "champion:Viktor",
      "champion:Volibear",
      "champion:Warwick",
      "champion:Xayah",
      "champion:Xerath",
      "champion:XinZhao",
      "champion:Yorick",
      "champion:Yunara",
      "champion:Yuumi",
      "champion:Zaahen",
      "champion:Zeri",
      "champion:Ziggs",
      "champion:Zilean",
      "champion:Zoe",
      "champion:Zyra"
    ],
    "rule": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Uses the listed resource type.",
    "hint": "Most spellcasters fit, but there are plenty of other choices.",
    "explanation": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Uses the listed resource type."
  },
  {
    "id": "c-not-mana",
    "category": "champions",
    "prompt": "Name a champion who does not use mana.",
    "answerIds": [
      "champion:Aatrox",
      "champion:Akali",
      "champion:Ambessa",
      "champion:Belveth",
      "champion:Briar",
      "champion:DrMundo",
      "champion:Garen",
      "champion:Gnar",
      "champion:Katarina",
      "champion:Kennen",
      "champion:Kled",
      "champion:LeeSin",
      "champion:Mordekaiser",
      "champion:RekSai",
      "champion:Renekton",
      "champion:Rengar",
      "champion:Riven",
      "champion:Rumble",
      "champion:Sett",
      "champion:Shen",
      "champion:Shyvana",
      "champion:Tryndamere",
      "champion:Viego",
      "champion:Vladimir",
      "champion:Yasuo",
      "champion:Yone",
      "champion:Zac",
      "champion:Zed"
    ],
    "rule": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Energy, resource-free and special-resource champions all count.",
    "hint": "Energy, rage, heat, or no resource at all.",
    "explanation": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Energy, resource-free and special-resource champions all count."
  },
  {
    "id": "c-energy",
    "category": "champions",
    "prompt": "Name a champion who uses energy.",
    "answerIds": [
      "champion:Akali",
      "champion:Ambessa",
      "champion:Kennen",
      "champion:LeeSin",
      "champion:Shen",
      "champion:Zed"
    ],
    "rule": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. The resource field must say Energy.",
    "hint": "There is more than one ninja in this answer pool.",
    "explanation": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. The resource field must say Energy."
  },
  {
    "id": "c-special-resource",
    "category": "champions",
    "prompt": "Name a champion with a special resource other than mana or energy.",
    "answerIds": [
      "champion:Aatrox",
      "champion:Briar",
      "champion:Gnar",
      "champion:Kled",
      "champion:Mordekaiser",
      "champion:RekSai",
      "champion:Renekton",
      "champion:Rengar",
      "champion:Rumble",
      "champion:Sett",
      "champion:Shyvana",
      "champion:Tryndamere",
      "champion:Vladimir",
      "champion:Yasuo",
      "champion:Yone"
    ],
    "rule": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Fury, flow, ferocity, grit, heat and other named special resources count.",
    "hint": "A resource bar can have a very different job from mana.",
    "explanation": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Fury, flow, ferocity, grit, heat and other named special resources count."
  },
  {
    "id": "c-high-range",
    "category": "champions",
    "prompt": "Name a champion with at least 550 base attack range.",
    "answerIds": [
      "champion:Ahri",
      "champion:Anivia",
      "champion:Annie",
      "champion:Aphelios",
      "champion:Ashe",
      "champion:AurelionSol",
      "champion:Aurora",
      "champion:Azir",
      "champion:Brand",
      "champion:Caitlyn",
      "champion:Cassiopeia",
      "champion:Corki",
      "champion:Draven",
      "champion:Elise",
      "champion:Ezreal",
      "champion:Heimerdinger",
      "champion:Hwei",
      "champion:Janna",
      "champion:Jhin",
      "champion:Kennen",
      "champion:Lissandra",
      "champion:Lulu",
      "champion:Lux",
      "champion:Mel",
      "champion:MissFortune",
      "champion:Nami",
      "champion:Neeko",
      "champion:Renata",
      "champion:Ryze",
      "champion:Senna",
      "champion:Smolder",
      "champion:Sona",
      "champion:Soraka",
      "champion:Syndra",
      "champion:Tristana",
      "champion:Twitch",
      "champion:Varus",
      "champion:Vayne",
      "champion:Veigar",
      "champion:Vex",
      "champion:Yunara",
      "champion:Zeri",
      "champion:Ziggs",
      "champion:Zilean",
      "champion:Zoe",
      "champion:Zyra"
    ],
    "rule": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Base range only; temporary effects and transformed range do not count.",
    "hint": "Think of champions who can attack from a distance.",
    "explanation": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Base range only; temporary effects and transformed range do not count."
  },
  {
    "id": "c-close-range",
    "category": "champions",
    "prompt": "Name a champion with at most 200 base attack range.",
    "answerIds": [
      "champion:Aatrox",
      "champion:Akali",
      "champion:Alistar",
      "champion:Ambessa",
      "champion:Amumu",
      "champion:Belveth",
      "champion:Blitzcrank",
      "champion:Braum",
      "champion:Briar",
      "champion:Camille",
      "champion:Chogath",
      "champion:Darius",
      "champion:Diana",
      "champion:DrMundo",
      "champion:Ekko",
      "champion:Evelynn",
      "champion:Fiora",
      "champion:Fizz",
      "champion:Galio",
      "champion:Gangplank",
      "champion:Garen",
      "champion:Gnar",
      "champion:Gragas",
      "champion:Gwen",
      "champion:Hecarim",
      "champion:Illaoi",
      "champion:Irelia",
      "champion:JarvanIV",
      "champion:Jax",
      "champion:Jayce",
      "champion:KSante",
      "champion:Kassadin",
      "champion:Katarina",
      "champion:Kayle",
      "champion:Kayn",
      "champion:Khazix",
      "champion:Kled",
      "champion:LeeSin",
      "champion:Leona",
      "champion:Locke",
      "champion:Malphite",
      "champion:Maokai",
      "champion:MasterYi",
      "champion:MonkeyKing",
      "champion:Mordekaiser",
      "champion:Naafiri",
      "champion:Nasus",
      "champion:Nautilus",
      "champion:Nocturne",
      "champion:Nunu",
      "champion:Olaf",
      "champion:Ornn",
      "champion:Pantheon",
      "champion:Poppy",
      "champion:Pyke",
      "champion:Qiyana",
      "champion:Rammus",
      "champion:RekSai",
      "champion:Rell",
      "champion:Renekton",
      "champion:Rengar",
      "champion:Riven",
      "champion:Rumble",
      "champion:Sejuani",
      "champion:Sett",
      "champion:Shaco",
      "champion:Shen",
      "champion:Shyvana",
      "champion:Singed",
      "champion:Sion",
      "champion:Skarner",
      "champion:Sylas",
      "champion:TahmKench",
      "champion:Talon",
      "champion:Taric",
      "champion:Trundle",
      "champion:Tryndamere",
      "champion:Udyr",
      "champion:Vi",
      "champion:Viego",
      "champion:Volibear",
      "champion:Warwick",
      "champion:XinZhao",
      "champion:Yasuo",
      "champion:Yone",
      "champion:Yorick",
      "champion:Zaahen",
      "champion:Zac",
      "champion:Zed"
    ],
    "rule": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Uses the numeric base attack-range stat.",
    "hint": "Think close-range fighters and tanks.",
    "explanation": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Uses the numeric base attack-range stat."
  },
  {
    "id": "c-multi-class",
    "category": "champions",
    "prompt": "Name a champion with two class tags.",
    "answerIds": [
      "champion:Ahri",
      "champion:Akshan",
      "champion:Alistar",
      "champion:Ambessa",
      "champion:Amumu",
      "champion:Annie",
      "champion:Ashe",
      "champion:Aurora",
      "champion:Azir",
      "champion:Bard",
      "champion:Blitzcrank",
      "champion:Brand",
      "champion:Braum",
      "champion:Briar",
      "champion:Camille",
      "champion:Chogath",
      "champion:Corki",
      "champion:Darius",
      "champion:Diana",
      "champion:DrMundo",
      "champion:Ekko",
      "champion:Elise",
      "champion:Evelynn",
      "champion:Ezreal",
      "champion:Fiddlesticks",
      "champion:Fiora",
      "champion:Fizz",
      "champion:Galio",
      "champion:Garen",
      "champion:Gnar",
      "champion:Gragas",
      "champion:Hecarim",
      "champion:Heimerdinger",
      "champion:Hwei",
      "champion:Illaoi",
      "champion:Irelia",
      "champion:Ivern",
      "champion:Janna",
      "champion:JarvanIV",
      "champion:Jayce",
      "champion:Jhin",
      "champion:KSante",
      "champion:Kaisa",
      "champion:Karma",
      "champion:Kassadin",
      "champion:Katarina",
      "champion:Kayle",
      "champion:Kayn",
      "champion:KogMaw",
      "champion:Leblanc",
      "champion:LeeSin",
      "champion:Leona",
      "champion:Lillia",
      "champion:Locke",
      "champion:Lucian",
      "champion:Lulu",
      "champion:Lux",
      "champion:Malphite",
      "champion:Maokai",
      "champion:MasterYi",
      "champion:Mel",
      "champion:Milio",
      "champion:MissFortune",
      "champion:MonkeyKing",
      "champion:Mordekaiser",
      "champion:Morgana",
      "champion:Naafiri",
      "champion:Nami",
      "champion:Nasus",
      "champion:Nautilus",
      "champion:Neeko",
      "champion:Nidalee",
      "champion:Nilah",
      "champion:Nocturne",
      "champion:Nunu",
      "champion:Olaf",
      "champion:Orianna",
      "champion:Pantheon",
      "champion:Poppy",
      "champion:Pyke",
      "champion:Quinn",
      "champion:RekSai",
      "champion:Rell",
      "champion:Renata",
      "champion:Renekton",
      "champion:Rengar",
      "champion:Riven",
      "champion:Rumble",
      "champion:Samira",
      "champion:Senna",
      "champion:Seraphine",
      "champion:Sett",
      "champion:Shyvana",
      "champion:Singed",
      "champion:Sion",
      "champion:Skarner",
      "champion:Smolder",
      "champion:Sona",
      "champion:Soraka",
      "champion:Swain",
      "champion:Sylas",
      "champion:TahmKench",
      "champion:Taliyah",
      "champion:Taric",
      "champion:Teemo",
      "champion:Thresh",
      "champion:Tristana",
      "champion:Trundle",
      "champion:Tryndamere",
      "champion:TwistedFate",
      "champion:Twitch",
      "champion:Udyr",
      "champion:Urgot",
      "champion:Varus",
      "champion:Vayne",
      "champion:Velkoz",
      "champion:Vi",
      "champion:Viego",
      "champion:Vladimir",
      "champion:Volibear",
      "champion:Warwick",
      "champion:Xerath",
      "champion:XinZhao",
      "champion:Yasuo",
      "champion:Yone",
      "champion:Yorick",
      "champion:Yuumi",
      "champion:Zac",
      "champion:Zilean",
      "champion:Zyra"
    ],
    "rule": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Both of Riot’s listed class tags count.",
    "hint": "Some champions sit between two archetypes.",
    "explanation": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Both of Riot’s listed class tags count."
  },
  {
    "id": "c-sole-class",
    "category": "champions",
    "prompt": "Name a champion with exactly one class tag.",
    "answerIds": [
      "champion:Aatrox",
      "champion:Akali",
      "champion:Anivia",
      "champion:Aphelios",
      "champion:AurelionSol",
      "champion:Belveth",
      "champion:Caitlyn",
      "champion:Cassiopeia",
      "champion:Draven",
      "champion:Gangplank",
      "champion:Graves",
      "champion:Gwen",
      "champion:Jax",
      "champion:Jinx",
      "champion:Kalista",
      "champion:Karthus",
      "champion:Kennen",
      "champion:Khazix",
      "champion:Kindred",
      "champion:Kled",
      "champion:Lissandra",
      "champion:Malzahar",
      "champion:Ornn",
      "champion:Qiyana",
      "champion:Rakan",
      "champion:Rammus",
      "champion:Ryze",
      "champion:Sejuani",
      "champion:Shaco",
      "champion:Shen",
      "champion:Sivir",
      "champion:Syndra",
      "champion:Talon",
      "champion:Veigar",
      "champion:Vex",
      "champion:Viktor",
      "champion:Xayah",
      "champion:Yunara",
      "champion:Zaahen",
      "champion:Zed",
      "champion:Zeri",
      "champion:Ziggs",
      "champion:Zoe"
    ],
    "rule": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Uses Riot’s list, not a tier-list role.",
    "hint": "Some kits have one especially clear identity.",
    "explanation": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Uses Riot’s list, not a tier-list role."
  },
  {
    "id": "c-mage-support",
    "category": "champions",
    "prompt": "Name a champion tagged as both mage and support.",
    "answerIds": [
      "champion:Annie",
      "champion:Bard",
      "champion:Brand",
      "champion:Fiddlesticks",
      "champion:Heimerdinger",
      "champion:Hwei",
      "champion:Ivern",
      "champion:Janna",
      "champion:Karma",
      "champion:Lulu",
      "champion:Lux",
      "champion:Mel",
      "champion:Milio",
      "champion:Morgana",
      "champion:Nami",
      "champion:Neeko",
      "champion:Orianna",
      "champion:Renata",
      "champion:Seraphine",
      "champion:Sona",
      "champion:Soraka",
      "champion:Swain",
      "champion:Taliyah",
      "champion:Velkoz",
      "champion:Xerath",
      "champion:Yuumi",
      "champion:Zilean",
      "champion:Zyra"
    ],
    "rule": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Both tags must be present.",
    "hint": "Utility and magic can share a kit.",
    "explanation": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Both tags must be present."
  },
  {
    "id": "c-fighter-tank",
    "category": "champions",
    "prompt": "Name a champion tagged as both fighter and tank.",
    "answerIds": [
      "champion:Darius",
      "champion:DrMundo",
      "champion:Garen",
      "champion:Gnar",
      "champion:Hecarim",
      "champion:Illaoi",
      "champion:JarvanIV",
      "champion:KSante",
      "champion:MonkeyKing",
      "champion:Nasus",
      "champion:Olaf",
      "champion:Poppy",
      "champion:RekSai",
      "champion:Renekton",
      "champion:Sett",
      "champion:Shyvana",
      "champion:Sion",
      "champion:Skarner",
      "champion:Trundle",
      "champion:Udyr",
      "champion:Urgot",
      "champion:Volibear",
      "champion:Warwick",
      "champion:XinZhao",
      "champion:Yorick",
      "champion:Zac"
    ],
    "rule": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Both tags must be present.",
    "hint": "Think durable champions who also like a brawl.",
    "explanation": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Both tags must be present."
  },
  {
    "id": "c-initial-a",
    "category": "champions",
    "prompt": "Name a champion whose name begins with A.",
    "answerIds": [
      "champion:Aatrox",
      "champion:Ahri",
      "champion:Akali",
      "champion:Akshan",
      "champion:Alistar",
      "champion:Ambessa",
      "champion:Amumu",
      "champion:Anivia",
      "champion:Annie",
      "champion:Aphelios",
      "champion:Ashe",
      "champion:AurelionSol",
      "champion:Aurora",
      "champion:Azir"
    ],
    "rule": "Use the champion’s official display name; nicknames still resolve to that name.",
    "hint": "There are 14 qualifying champions in this snapshot.",
    "explanation": "Use the champion’s official display name; nicknames still resolve to that name."
  },
  {
    "id": "c-initial-b",
    "category": "champions",
    "prompt": "Name a champion whose name begins with B.",
    "answerIds": [
      "champion:Bard",
      "champion:Belveth",
      "champion:Blitzcrank",
      "champion:Brand",
      "champion:Braum",
      "champion:Briar"
    ],
    "rule": "Use the champion’s official display name; nicknames still resolve to that name.",
    "hint": "There are 6 qualifying champions in this snapshot.",
    "explanation": "Use the champion’s official display name; nicknames still resolve to that name."
  },
  {
    "id": "c-initial-c",
    "category": "champions",
    "prompt": "Name a champion whose name begins with C.",
    "answerIds": [
      "champion:Caitlyn",
      "champion:Camille",
      "champion:Cassiopeia",
      "champion:Chogath",
      "champion:Corki"
    ],
    "rule": "Use the champion’s official display name; nicknames still resolve to that name.",
    "hint": "There are 5 qualifying champions in this snapshot.",
    "explanation": "Use the champion’s official display name; nicknames still resolve to that name."
  },
  {
    "id": "c-initial-d",
    "category": "champions",
    "prompt": "Name a champion whose name begins with D.",
    "answerIds": [
      "champion:Darius",
      "champion:Diana",
      "champion:DrMundo",
      "champion:Draven"
    ],
    "rule": "Use the champion’s official display name; nicknames still resolve to that name.",
    "hint": "There are 4 qualifying champions in this snapshot.",
    "explanation": "Use the champion’s official display name; nicknames still resolve to that name."
  },
  {
    "id": "c-initial-g",
    "category": "champions",
    "prompt": "Name a champion whose name begins with G.",
    "answerIds": [
      "champion:Galio",
      "champion:Gangplank",
      "champion:Garen",
      "champion:Gnar",
      "champion:Gragas",
      "champion:Graves",
      "champion:Gwen"
    ],
    "rule": "Use the champion’s official display name; nicknames still resolve to that name.",
    "hint": "There are 7 qualifying champions in this snapshot.",
    "explanation": "Use the champion’s official display name; nicknames still resolve to that name."
  },
  {
    "id": "c-initial-k",
    "category": "champions",
    "prompt": "Name a champion whose name begins with K.",
    "answerIds": [
      "champion:KSante",
      "champion:Kaisa",
      "champion:Kalista",
      "champion:Karma",
      "champion:Karthus",
      "champion:Kassadin",
      "champion:Katarina",
      "champion:Kayle",
      "champion:Kayn",
      "champion:Kennen",
      "champion:Khazix",
      "champion:Kindred",
      "champion:Kled",
      "champion:KogMaw"
    ],
    "rule": "Use the champion’s official display name; nicknames still resolve to that name.",
    "hint": "There are 14 qualifying champions in this snapshot.",
    "explanation": "Use the champion’s official display name; nicknames still resolve to that name."
  },
  {
    "id": "c-initial-l",
    "category": "champions",
    "prompt": "Name a champion whose name begins with L.",
    "answerIds": [
      "champion:Leblanc",
      "champion:LeeSin",
      "champion:Leona",
      "champion:Lillia",
      "champion:Lissandra",
      "champion:Locke",
      "champion:Lucian",
      "champion:Lulu",
      "champion:Lux"
    ],
    "rule": "Use the champion’s official display name; nicknames still resolve to that name.",
    "hint": "There are 9 qualifying champions in this snapshot.",
    "explanation": "Use the champion’s official display name; nicknames still resolve to that name."
  },
  {
    "id": "c-initial-m",
    "category": "champions",
    "prompt": "Name a champion whose name begins with M.",
    "answerIds": [
      "champion:Malphite",
      "champion:Malzahar",
      "champion:Maokai",
      "champion:MasterYi",
      "champion:Mel",
      "champion:Milio",
      "champion:MissFortune",
      "champion:Mordekaiser",
      "champion:Morgana"
    ],
    "rule": "Use the champion’s official display name; nicknames still resolve to that name.",
    "hint": "There are 9 qualifying champions in this snapshot.",
    "explanation": "Use the champion’s official display name; nicknames still resolve to that name."
  },
  {
    "id": "c-initial-n",
    "category": "champions",
    "prompt": "Name a champion whose name begins with N.",
    "answerIds": [
      "champion:Naafiri",
      "champion:Nami",
      "champion:Nasus",
      "champion:Nautilus",
      "champion:Neeko",
      "champion:Nidalee",
      "champion:Nilah",
      "champion:Nocturne",
      "champion:Nunu"
    ],
    "rule": "Use the champion’s official display name; nicknames still resolve to that name.",
    "hint": "There are 9 qualifying champions in this snapshot.",
    "explanation": "Use the champion’s official display name; nicknames still resolve to that name."
  },
  {
    "id": "c-initial-r",
    "category": "champions",
    "prompt": "Name a champion whose name begins with R.",
    "answerIds": [
      "champion:Rakan",
      "champion:Rammus",
      "champion:RekSai",
      "champion:Rell",
      "champion:Renata",
      "champion:Renekton",
      "champion:Rengar",
      "champion:Riven",
      "champion:Rumble",
      "champion:Ryze"
    ],
    "rule": "Use the champion’s official display name; nicknames still resolve to that name.",
    "hint": "There are 10 qualifying champions in this snapshot.",
    "explanation": "Use the champion’s official display name; nicknames still resolve to that name."
  },
  {
    "id": "c-initial-s",
    "category": "champions",
    "prompt": "Name a champion whose name begins with S.",
    "answerIds": [
      "champion:Samira",
      "champion:Sejuani",
      "champion:Senna",
      "champion:Seraphine",
      "champion:Sett",
      "champion:Shaco",
      "champion:Shen",
      "champion:Shyvana",
      "champion:Singed",
      "champion:Sion",
      "champion:Sivir",
      "champion:Skarner",
      "champion:Smolder",
      "champion:Sona",
      "champion:Soraka",
      "champion:Swain",
      "champion:Sylas",
      "champion:Syndra"
    ],
    "rule": "Use the champion’s official display name; nicknames still resolve to that name.",
    "hint": "There are 18 qualifying champions in this snapshot.",
    "explanation": "Use the champion’s official display name; nicknames still resolve to that name."
  },
  {
    "id": "c-initial-t",
    "category": "champions",
    "prompt": "Name a champion whose name begins with T.",
    "answerIds": [
      "champion:TahmKench",
      "champion:Taliyah",
      "champion:Talon",
      "champion:Taric",
      "champion:Teemo",
      "champion:Thresh",
      "champion:Tristana",
      "champion:Trundle",
      "champion:Tryndamere",
      "champion:TwistedFate",
      "champion:Twitch"
    ],
    "rule": "Use the champion’s official display name; nicknames still resolve to that name.",
    "hint": "There are 11 qualifying champions in this snapshot.",
    "explanation": "Use the champion’s official display name; nicknames still resolve to that name."
  },
  {
    "id": "c-initial-v",
    "category": "champions",
    "prompt": "Name a champion whose name begins with V.",
    "answerIds": [
      "champion:Varus",
      "champion:Vayne",
      "champion:Veigar",
      "champion:Velkoz",
      "champion:Vex",
      "champion:Vi",
      "champion:Viego",
      "champion:Viktor",
      "champion:Vladimir",
      "champion:Volibear"
    ],
    "rule": "Use the champion’s official display name; nicknames still resolve to that name.",
    "hint": "There are 10 qualifying champions in this snapshot.",
    "explanation": "Use the champion’s official display name; nicknames still resolve to that name."
  },
  {
    "id": "c-initial-z",
    "category": "champions",
    "prompt": "Name a champion whose name begins with Z.",
    "answerIds": [
      "champion:Zaahen",
      "champion:Zac",
      "champion:Zed",
      "champion:Zeri",
      "champion:Ziggs",
      "champion:Zilean",
      "champion:Zoe",
      "champion:Zyra"
    ],
    "rule": "Use the champion’s official display name; nicknames still resolve to that name.",
    "hint": "There are 8 qualifying champions in this snapshot.",
    "explanation": "Use the champion’s official display name; nicknames still resolve to that name."
  },
  {
    "id": "c-apostrophe",
    "category": "champions",
    "prompt": "Name a champion with an apostrophe in their name.",
    "answerIds": [
      "champion:Belveth",
      "champion:Chogath",
      "champion:KSante",
      "champion:Kaisa",
      "champion:Khazix",
      "champion:KogMaw",
      "champion:RekSai",
      "champion:Velkoz"
    ],
    "rule": "The official display name must contain an apostrophe. You do not have to type it.",
    "hint": "The Void is a good place to start.",
    "explanation": "The official display name must contain an apostrophe. You do not have to type it."
  },
  {
    "id": "c-multiple-words",
    "category": "champions",
    "prompt": "Name a champion whose name contains a space.",
    "answerIds": [
      "champion:AurelionSol",
      "champion:DrMundo",
      "champion:JarvanIV",
      "champion:LeeSin",
      "champion:MasterYi",
      "champion:MissFortune",
      "champion:Nunu",
      "champion:Renata",
      "champion:TahmKench",
      "champion:TwistedFate",
      "champion:XinZhao"
    ],
    "rule": "The official display name must contain a space. Aliases still work.",
    "hint": "Titles and two-part names both count.",
    "explanation": "The official display name must contain a space. Aliases still work."
  },
  {
    "id": "c-short-name",
    "category": "champions",
    "prompt": "Name a champion with four or fewer letters in their name.",
    "answerIds": [
      "champion:Ahri",
      "champion:Ashe",
      "champion:Azir",
      "champion:Bard",
      "champion:Ekko",
      "champion:Fizz",
      "champion:Gnar",
      "champion:Gwen",
      "champion:Hwei",
      "champion:Jax",
      "champion:Jhin",
      "champion:Jinx",
      "champion:Kayn",
      "champion:Kled",
      "champion:Lulu",
      "champion:Lux",
      "champion:Mel",
      "champion:Nami",
      "champion:Olaf",
      "champion:Ornn",
      "champion:Pyke",
      "champion:Rell",
      "champion:Ryze",
      "champion:Sett",
      "champion:Shen",
      "champion:Sion",
      "champion:Sona",
      "champion:Udyr",
      "champion:Vex",
      "champion:Vi",
      "champion:Yone",
      "champion:Zac",
      "champion:Zed",
      "champion:Zeri",
      "champion:Zoe",
      "champion:Zyra"
    ],
    "rule": "Count letters only; spaces and punctuation are ignored.",
    "hint": "Short name. Big potential.",
    "explanation": "Count letters only; spaces and punctuation are ignored."
  },
  {
    "id": "c-long-name",
    "category": "champions",
    "prompt": "Name a champion with ten or more letters in their name.",
    "answerIds": [
      "champion:AurelionSol",
      "champion:Blitzcrank",
      "champion:Cassiopeia",
      "champion:Fiddlesticks",
      "champion:Heimerdinger",
      "champion:MissFortune",
      "champion:Mordekaiser",
      "champion:Nunu",
      "champion:Renata",
      "champion:Tryndamere",
      "champion:TwistedFate"
    ],
    "rule": "Count letters only; spaces and punctuation are ignored. The & in Nunu & Willump counts as “and”.",
    "hint": "Some names barely fit on the loading screen.",
    "explanation": "Count letters only; spaces and punctuation are ignored. The & in Nunu & Willump counts as “and”."
  },
  {
    "id": "i-any",
    "category": "items",
    "prompt": "Name any item in this Summoner’s Rift catalogue.",
    "answerIds": [
      "item:1001",
      "item:1004",
      "item:1006",
      "item:1011",
      "item:1018",
      "item:1026",
      "item:1027",
      "item:1028",
      "item:1029",
      "item:1031",
      "item:1033",
      "item:1036",
      "item:1037",
      "item:1038",
      "item:1042",
      "item:1043",
      "item:1052",
      "item:1053",
      "item:1054",
      "item:1055",
      "item:1056",
      "item:1057",
      "item:1058",
      "item:1082",
      "item:1083",
      "item:1086",
      "item:1101",
      "item:1102",
      "item:1103",
      "item:1120",
      "item:2003",
      "item:2019",
      "item:2020",
      "item:2021",
      "item:2022",
      "item:2031",
      "item:2055",
      "item:2065",
      "item:2138",
      "item:2139",
      "item:2140",
      "item:2420",
      "item:2421",
      "item:2501",
      "item:2502",
      "item:2503",
      "item:2504",
      "item:2508",
      "item:2510",
      "item:2512",
      "item:2517",
      "item:2520",
      "item:2522",
      "item:2523",
      "item:2524",
      "item:2525",
      "item:2526",
      "item:3003",
      "item:3004",
      "item:3006",
      "item:3008",
      "item:3009",
      "item:3020",
      "item:3024",
      "item:3026",
      "item:3031",
      "item:3032",
      "item:3033",
      "item:3035",
      "item:3036",
      "item:3040",
      "item:3041",
      "item:3042",
      "item:3044",
      "item:3046",
      "item:3047",
      "item:3050",
      "item:3051",
      "item:3053",
      "item:3057",
      "item:3065",
      "item:3066",
      "item:3067",
      "item:3068",
      "item:3070",
      "item:3071",
      "item:3072",
      "item:3073",
      "item:3074",
      "item:3075",
      "item:3076",
      "item:3077",
      "item:3078",
      "item:3082",
      "item:3083",
      "item:3084",
      "item:3085",
      "item:3086",
      "item:3087",
      "item:3089",
      "item:3091",
      "item:3094",
      "item:3095",
      "item:3100",
      "item:3102",
      "item:3107",
      "item:3108",
      "item:3109",
      "item:3110",
      "item:3111",
      "item:3113",
      "item:3114",
      "item:3115",
      "item:3116",
      "item:3118",
      "item:3119",
      "item:3121",
      "item:3123",
      "item:3124",
      "item:3133",
      "item:3134",
      "item:3135",
      "item:3137",
      "item:3139",
      "item:3140",
      "item:3142",
      "item:3143",
      "item:3144",
      "item:3145",
      "item:3146",
      "item:3147",
      "item:3152",
      "item:3153",
      "item:3155",
      "item:3156",
      "item:3157",
      "item:3158",
      "item:3161",
      "item:3165",
      "item:3168",
      "item:3170",
      "item:3171",
      "item:3172",
      "item:3173",
      "item:3174",
      "item:3175",
      "item:3179",
      "item:3181",
      "item:3190",
      "item:3211",
      "item:3222",
      "item:3302",
      "item:3340",
      "item:3363",
      "item:3364",
      "item:3504",
      "item:3508",
      "item:3742",
      "item:3748",
      "item:3801",
      "item:3802",
      "item:3803",
      "item:3814",
      "item:3865",
      "item:3869",
      "item:3870",
      "item:3871",
      "item:3876",
      "item:3877",
      "item:3916",
      "item:4005",
      "item:4401",
      "item:4628",
      "item:4629",
      "item:4630",
      "item:4632",
      "item:4633",
      "item:4642",
      "item:4645",
      "item:4646",
      "item:6333",
      "item:6609",
      "item:6610",
      "item:6616",
      "item:6617",
      "item:6620",
      "item:6621",
      "item:6631",
      "item:6653",
      "item:6655",
      "item:6657",
      "item:6660",
      "item:6662",
      "item:6664",
      "item:6665",
      "item:6670",
      "item:6672",
      "item:6673",
      "item:6675",
      "item:6676",
      "item:6690",
      "item:6692",
      "item:6694",
      "item:6695",
      "item:6696",
      "item:6697",
      "item:6698",
      "item:6699",
      "item:8010",
      "item:8020"
    ],
    "rule": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Base shop entries and Seraph’s Embrace, Muramana and Fimbulwinter count; alternate-mode variants are excluded.",
    "hint": "Components count too. You do not need a completed item.",
    "explanation": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Base shop entries and Seraph’s Embrace, Muramana and Fimbulwinter count; alternate-mode variants are excluded."
  },
  {
    "id": "i-stat-ad",
    "category": "items",
    "prompt": "Name an item with attack damage in its base stats.",
    "answerIds": [
      "item:1036",
      "item:1037",
      "item:1038",
      "item:1053",
      "item:1055",
      "item:1083",
      "item:1086",
      "item:2019",
      "item:2020",
      "item:2021",
      "item:2501",
      "item:2517",
      "item:2520",
      "item:2523",
      "item:3004",
      "item:3026",
      "item:3031",
      "item:3032",
      "item:3033",
      "item:3035",
      "item:3036",
      "item:3042",
      "item:3044",
      "item:3051",
      "item:3071",
      "item:3072",
      "item:3073",
      "item:3074",
      "item:3077",
      "item:3078",
      "item:3087",
      "item:3095",
      "item:3123",
      "item:3124",
      "item:3133",
      "item:3134",
      "item:3139",
      "item:3142",
      "item:3146",
      "item:3153",
      "item:3155",
      "item:3156",
      "item:3161",
      "item:3179",
      "item:3181",
      "item:3302",
      "item:3508",
      "item:3748",
      "item:3814",
      "item:6333",
      "item:6609",
      "item:6610",
      "item:6631",
      "item:6670",
      "item:6672",
      "item:6673",
      "item:6676",
      "item:6690",
      "item:6692",
      "item:6694",
      "item:6695",
      "item:6696",
      "item:6697",
      "item:6698",
      "item:6699"
    ],
    "rule": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Must grant attack damage as a listed base stat, not just through a situational passive.",
    "hint": "Both components and completed items can qualify.",
    "explanation": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Must grant attack damage as a listed base stat, not just through a situational passive."
  },
  {
    "id": "i-stat-ap",
    "category": "items",
    "prompt": "Name an item with ability power in its base stats.",
    "answerIds": [
      "item:1026",
      "item:1052",
      "item:1056",
      "item:1058",
      "item:1082",
      "item:2065",
      "item:2420",
      "item:2421",
      "item:2503",
      "item:2508",
      "item:2510",
      "item:2522",
      "item:3003",
      "item:3040",
      "item:3041",
      "item:3087",
      "item:3089",
      "item:3100",
      "item:3102",
      "item:3107",
      "item:3108",
      "item:3113",
      "item:3115",
      "item:3116",
      "item:3118",
      "item:3124",
      "item:3135",
      "item:3137",
      "item:3145",
      "item:3146",
      "item:3147",
      "item:3152",
      "item:3157",
      "item:3165",
      "item:3504",
      "item:3802",
      "item:3916",
      "item:4005",
      "item:4628",
      "item:4629",
      "item:4630",
      "item:4632",
      "item:4633",
      "item:4642",
      "item:4645",
      "item:4646",
      "item:6616",
      "item:6617",
      "item:6620",
      "item:6621",
      "item:6653",
      "item:6655",
      "item:6657",
      "item:8010"
    ],
    "rule": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Must grant ability power as a listed base stat, not just through a situational passive.",
    "hint": "Both components and completed items can qualify.",
    "explanation": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Must grant ability power as a listed base stat, not just through a situational passive."
  },
  {
    "id": "i-stat-armor",
    "category": "items",
    "prompt": "Name an item with armor in its base stats.",
    "answerIds": [
      "item:1029",
      "item:1031",
      "item:1120",
      "item:2019",
      "item:2420",
      "item:2421",
      "item:2502",
      "item:2524",
      "item:3024",
      "item:3026",
      "item:3047",
      "item:3050",
      "item:3068",
      "item:3075",
      "item:3076",
      "item:3082",
      "item:3109",
      "item:3110",
      "item:3143",
      "item:3157",
      "item:3174",
      "item:3190",
      "item:3742",
      "item:6333",
      "item:6662",
      "item:6665"
    ],
    "rule": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Must grant armor as a listed base stat, not just through a situational passive.",
    "hint": "Both components and completed items can qualify.",
    "explanation": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Must grant armor as a listed base stat, not just through a situational passive."
  },
  {
    "id": "i-stat-mr",
    "category": "items",
    "prompt": "Name an item with magic resistance in its base stats.",
    "answerIds": [
      "item:1033",
      "item:1057",
      "item:1120",
      "item:2504",
      "item:2524",
      "item:3050",
      "item:3065",
      "item:3091",
      "item:3102",
      "item:3111",
      "item:3139",
      "item:3140",
      "item:3155",
      "item:3156",
      "item:3173",
      "item:3190",
      "item:3211",
      "item:4401",
      "item:4632",
      "item:6664",
      "item:6665",
      "item:8020"
    ],
    "rule": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Must grant magic resistance as a listed base stat, not just through a situational passive.",
    "hint": "Both components and completed items can qualify.",
    "explanation": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Must grant magic resistance as a listed base stat, not just through a situational passive."
  },
  {
    "id": "i-stat-health",
    "category": "items",
    "prompt": "Name an item with health in its base stats.",
    "answerIds": [
      "item:1011",
      "item:1028",
      "item:1054",
      "item:1055",
      "item:1056",
      "item:1082",
      "item:1120",
      "item:2021",
      "item:2501",
      "item:2502",
      "item:2504",
      "item:2510",
      "item:2524",
      "item:2525",
      "item:2526",
      "item:3041",
      "item:3044",
      "item:3050",
      "item:3053",
      "item:3065",
      "item:3066",
      "item:3067",
      "item:3068",
      "item:3071",
      "item:3073",
      "item:3075",
      "item:3078",
      "item:3083",
      "item:3084",
      "item:3109",
      "item:3116",
      "item:3119",
      "item:3121",
      "item:3143",
      "item:3147",
      "item:3152",
      "item:3161",
      "item:3165",
      "item:3181",
      "item:3190",
      "item:3211",
      "item:3222",
      "item:3742",
      "item:3748",
      "item:3801",
      "item:3803",
      "item:3814",
      "item:3869",
      "item:3870",
      "item:3871",
      "item:3876",
      "item:3877",
      "item:4401",
      "item:4629",
      "item:4633",
      "item:6609",
      "item:6610",
      "item:6617",
      "item:6620",
      "item:6631",
      "item:6653",
      "item:6657",
      "item:6660",
      "item:6662",
      "item:6664",
      "item:6665",
      "item:8010",
      "item:8020"
    ],
    "rule": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Must grant health as a listed base stat, not just through a situational passive.",
    "hint": "Both components and completed items can qualify.",
    "explanation": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Must grant health as a listed base stat, not just through a situational passive."
  },
  {
    "id": "i-stat-mana",
    "category": "items",
    "prompt": "Name an item with mana in its base stats.",
    "answerIds": [
      "item:1027",
      "item:2503",
      "item:2522",
      "item:2526",
      "item:3003",
      "item:3004",
      "item:3024",
      "item:3040",
      "item:3042",
      "item:3070",
      "item:3110",
      "item:3118",
      "item:3119",
      "item:3121",
      "item:3802",
      "item:3803",
      "item:6655",
      "item:6657"
    ],
    "rule": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Must grant mana as a listed base stat, not just through a situational passive.",
    "hint": "Both components and completed items can qualify.",
    "explanation": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Must grant mana as a listed base stat, not just through a situational passive."
  },
  {
    "id": "i-stat-as",
    "category": "items",
    "prompt": "Name an item with attack speed in its base stats.",
    "answerIds": [
      "item:1042",
      "item:1043",
      "item:1086",
      "item:2510",
      "item:2512",
      "item:3006",
      "item:3032",
      "item:3046",
      "item:3051",
      "item:3073",
      "item:3078",
      "item:3085",
      "item:3086",
      "item:3087",
      "item:3091",
      "item:3094",
      "item:3095",
      "item:3115",
      "item:3124",
      "item:3144",
      "item:3153",
      "item:3172",
      "item:3302",
      "item:6631",
      "item:6672",
      "item:6675"
    ],
    "rule": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Must grant attack speed as a listed base stat, not just through a situational passive.",
    "hint": "Both components and completed items can qualify.",
    "explanation": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Must grant attack speed as a listed base stat, not just through a situational passive."
  },
  {
    "id": "i-stat-crit",
    "category": "items",
    "prompt": "Name an item with critical strike chance in its base stats.",
    "answerIds": [
      "item:1018",
      "item:2512",
      "item:2523",
      "item:3031",
      "item:3033",
      "item:3036",
      "item:3046",
      "item:3085",
      "item:3086",
      "item:3094",
      "item:3095",
      "item:3508",
      "item:6670",
      "item:6673",
      "item:6675",
      "item:6676"
    ],
    "rule": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Must grant critical strike chance as a listed base stat, not just through a situational passive.",
    "hint": "Both components and completed items can qualify.",
    "explanation": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Must grant critical strike chance as a listed base stat, not just through a situational passive."
  },
  {
    "id": "i-stat-lifesteal",
    "category": "items",
    "prompt": "Name an item with life steal in its base stats.",
    "answerIds": [
      "item:1053",
      "item:3072",
      "item:3074",
      "item:3139",
      "item:3153",
      "item:3172"
    ],
    "rule": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Must grant life steal as a listed base stat, not just through a situational passive.",
    "hint": "Both components and completed items can qualify.",
    "explanation": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Must grant life steal as a listed base stat, not just through a situational passive."
  },
  {
    "id": "i-stat-haste",
    "category": "items",
    "prompt": "Name an item with ability haste in its base stats.",
    "answerIds": [
      "item:2020",
      "item:2022",
      "item:2065",
      "item:2502",
      "item:2503",
      "item:2510",
      "item:2520",
      "item:2522",
      "item:2524",
      "item:2525",
      "item:3003",
      "item:3004",
      "item:3024",
      "item:3040",
      "item:3042",
      "item:3050",
      "item:3057",
      "item:3065",
      "item:3067",
      "item:3068",
      "item:3071",
      "item:3074",
      "item:3078",
      "item:3100",
      "item:3107",
      "item:3108",
      "item:3109",
      "item:3110",
      "item:3115",
      "item:3118",
      "item:3119",
      "item:3121",
      "item:3133",
      "item:3137",
      "item:3152",
      "item:3156",
      "item:3158",
      "item:3165",
      "item:3171",
      "item:3179",
      "item:3190",
      "item:3222",
      "item:3508",
      "item:3802",
      "item:4005",
      "item:4628",
      "item:4629",
      "item:4633",
      "item:4642",
      "item:6333",
      "item:6609",
      "item:6610",
      "item:6616",
      "item:6617",
      "item:6620",
      "item:6655",
      "item:6660",
      "item:6662",
      "item:6664",
      "item:6692",
      "item:6694",
      "item:6696",
      "item:6697",
      "item:6698",
      "item:6699",
      "item:8010",
      "item:8020"
    ],
    "rule": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. The published stats block must list ability haste.",
    "hint": "Check the stat line, rather than a triggered effect.",
    "explanation": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. The published stats block must list ability haste."
  },
  {
    "id": "i-stat-health-regen",
    "category": "items",
    "prompt": "Name an item with health regeneration in its base stats.",
    "answerIds": [
      "item:1006",
      "item:2504",
      "item:3065",
      "item:3083",
      "item:3084",
      "item:3109",
      "item:3211",
      "item:3801",
      "item:3869",
      "item:3870",
      "item:3871",
      "item:3876",
      "item:3877",
      "item:6664"
    ],
    "rule": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. The published stats block must list health regeneration.",
    "hint": "Check the stat line, rather than a triggered effect.",
    "explanation": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. The published stats block must list health regeneration."
  },
  {
    "id": "i-stat-mana-regen",
    "category": "items",
    "prompt": "Name an item with mana regeneration in its base stats.",
    "answerIds": [
      "item:1004",
      "item:2065",
      "item:2526",
      "item:3107",
      "item:3114",
      "item:3222",
      "item:3504",
      "item:3869",
      "item:3870",
      "item:3871",
      "item:3876",
      "item:3877",
      "item:4005",
      "item:4642",
      "item:6616",
      "item:6617",
      "item:6620",
      "item:6621"
    ],
    "rule": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. The published stats block must list mana regeneration.",
    "hint": "Check the stat line, rather than a triggered effect.",
    "explanation": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. The published stats block must list mana regeneration."
  },
  {
    "id": "i-tag-boots",
    "category": "items",
    "prompt": "Name a boot item.",
    "answerIds": [
      "item:1001",
      "item:3006",
      "item:3008",
      "item:3009",
      "item:3020",
      "item:3047",
      "item:3111",
      "item:3158",
      "item:3168",
      "item:3170",
      "item:3171",
      "item:3173",
      "item:3174",
      "item:3175"
    ],
    "rule": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Uses the item’s published Boots tag.",
    "hint": "Basic boots and their upgrades can qualify.",
    "explanation": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Uses the item’s published Boots tag."
  },
  {
    "id": "i-tag-consumable",
    "category": "items",
    "prompt": "Name a shop item classified as a consumable.",
    "answerIds": [
      "item:2003",
      "item:2031",
      "item:2055",
      "item:2138",
      "item:2139",
      "item:2140"
    ],
    "rule": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Uses the item’s published Consumable tag.",
    "hint": "Potions and elixirs are useful starting points.",
    "explanation": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Uses the item’s published Consumable tag."
  },
  {
    "id": "i-tag-trinket",
    "category": "items",
    "prompt": "Name a trinket.",
    "answerIds": [
      "item:3340",
      "item:3363",
      "item:3364"
    ],
    "rule": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Uses the item’s published Trinket tag.",
    "hint": "Think of the vision slot.",
    "explanation": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Uses the item’s published Trinket tag."
  },
  {
    "id": "i-tag-jungle",
    "category": "items",
    "prompt": "Name a jungle shop item.",
    "answerIds": [
      "item:1101",
      "item:1102",
      "item:1103",
      "item:2003",
      "item:2031",
      "item:3340"
    ],
    "rule": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Uses the item’s published Jungle tag.",
    "hint": "Think of the pets you bring into the jungle.",
    "explanation": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Uses the item’s published Jungle tag."
  },
  {
    "id": "i-tag-magicpenetration",
    "category": "items",
    "prompt": "Name an item with a magic-penetration tag.",
    "answerIds": [
      "item:3020",
      "item:3135",
      "item:3137",
      "item:3175",
      "item:3302",
      "item:4630",
      "item:4645",
      "item:4646",
      "item:8010"
    ],
    "rule": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Uses the item’s published MagicPenetration tag.",
    "hint": "Percentage and flat penetration both count.",
    "explanation": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Uses the item’s published MagicPenetration tag."
  },
  {
    "id": "i-tag-armorpenetration",
    "category": "items",
    "prompt": "Name an item with an armor-penetration tag.",
    "answerIds": [
      "item:2020",
      "item:2520",
      "item:3033",
      "item:3035",
      "item:3036",
      "item:3042",
      "item:3071",
      "item:3134",
      "item:3142",
      "item:3179",
      "item:3302",
      "item:3814",
      "item:6676",
      "item:6694",
      "item:6695",
      "item:6696",
      "item:6697",
      "item:6698",
      "item:6699"
    ],
    "rule": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Uses the item’s published ArmorPenetration tag.",
    "hint": "This includes lethality and percentage penetration items.",
    "explanation": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Uses the item’s published ArmorPenetration tag."
  },
  {
    "id": "i-tag-onhit",
    "category": "items",
    "prompt": "Name an item with an on-hit tag.",
    "answerIds": [
      "item:1043",
      "item:1083",
      "item:2510",
      "item:3004",
      "item:3042",
      "item:3057",
      "item:3071",
      "item:3074",
      "item:3077",
      "item:3078",
      "item:3085",
      "item:3087",
      "item:3091",
      "item:3100",
      "item:3115",
      "item:3124",
      "item:3153",
      "item:3302",
      "item:3508",
      "item:3748",
      "item:6662",
      "item:6672"
    ],
    "rule": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Uses the item’s published OnHit tag.",
    "hint": "Think of items that reward repeated basic attacks.",
    "explanation": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Uses the item’s published OnHit tag."
  },
  {
    "id": "i-tag-vision",
    "category": "items",
    "prompt": "Name an item with a vision tag.",
    "answerIds": [
      "item:2055",
      "item:3179",
      "item:3340",
      "item:3363",
      "item:3364",
      "item:3865",
      "item:3869",
      "item:3870",
      "item:3871",
      "item:3876",
      "item:3877"
    ],
    "rule": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Uses the item’s published Vision tag.",
    "hint": "Placing vision is not the only way to interact with it.",
    "explanation": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Uses the item’s published Vision tag."
  },
  {
    "id": "i-cost-cheap",
    "category": "items",
    "prompt": "Name a shop item with a total cost of 500 gold or less.",
    "answerIds": [
      "item:1001",
      "item:1004",
      "item:1006",
      "item:1027",
      "item:1028",
      "item:1029",
      "item:1033",
      "item:1036",
      "item:1042",
      "item:1052",
      "item:1054",
      "item:1055",
      "item:1056",
      "item:1082",
      "item:1083",
      "item:1086",
      "item:1101",
      "item:1102",
      "item:1103",
      "item:1120",
      "item:2003",
      "item:2022",
      "item:2031",
      "item:2055",
      "item:2138",
      "item:2139",
      "item:2140",
      "item:3070",
      "item:3340",
      "item:3363",
      "item:3364",
      "item:3865",
      "item:3869",
      "item:3870",
      "item:3871",
      "item:3876",
      "item:3877"
    ],
    "rule": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Total listed cost, not the recipe/combine cost.",
    "hint": "Components and completed items are both eligible.",
    "explanation": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Total listed cost, not the recipe/combine cost."
  },
  {
    "id": "i-cost-mid",
    "category": "items",
    "prompt": "Name a shop item with a total cost of 501–1,500 gold.",
    "answerIds": [
      "item:1011",
      "item:1018",
      "item:1026",
      "item:1031",
      "item:1037",
      "item:1038",
      "item:1043",
      "item:1053",
      "item:1057",
      "item:1058",
      "item:2019",
      "item:2020",
      "item:2021",
      "item:2508",
      "item:3006",
      "item:3008",
      "item:3009",
      "item:3020",
      "item:3024",
      "item:3035",
      "item:3041",
      "item:3044",
      "item:3047",
      "item:3051",
      "item:3057",
      "item:3066",
      "item:3067",
      "item:3076",
      "item:3077",
      "item:3082",
      "item:3086",
      "item:3108",
      "item:3111",
      "item:3113",
      "item:3114",
      "item:3123",
      "item:3133",
      "item:3134",
      "item:3140",
      "item:3144",
      "item:3145",
      "item:3147",
      "item:3155",
      "item:3158",
      "item:3168",
      "item:3170",
      "item:3171",
      "item:3172",
      "item:3173",
      "item:3174",
      "item:3175",
      "item:3211",
      "item:3801",
      "item:3802",
      "item:3803",
      "item:3916",
      "item:4630",
      "item:4642",
      "item:6660",
      "item:6670",
      "item:6690"
    ],
    "rule": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Total listed cost, not the recipe/combine cost.",
    "hint": "Components and completed items are both eligible.",
    "explanation": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Total listed cost, not the recipe/combine cost."
  },
  {
    "id": "i-cost-expensive",
    "category": "items",
    "prompt": "Name a shop item with a total cost of 3,000 gold or more.",
    "answerIds": [
      "item:2501",
      "item:2510",
      "item:2517",
      "item:2520",
      "item:3026",
      "item:3031",
      "item:3032",
      "item:3033",
      "item:3036",
      "item:3053",
      "item:3071",
      "item:3072",
      "item:3073",
      "item:3074",
      "item:3078",
      "item:3083",
      "item:3084",
      "item:3087",
      "item:3089",
      "item:3095",
      "item:3102",
      "item:3124",
      "item:3135",
      "item:3137",
      "item:3139",
      "item:3146",
      "item:3153",
      "item:3156",
      "item:3157",
      "item:3161",
      "item:3181",
      "item:3302",
      "item:3508",
      "item:3748",
      "item:3814",
      "item:4629",
      "item:4633",
      "item:4645",
      "item:6333",
      "item:6609",
      "item:6610",
      "item:6631",
      "item:6653",
      "item:6665",
      "item:6672",
      "item:6673",
      "item:6676",
      "item:6694",
      "item:6699"
    ],
    "rule": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Total listed cost, not the recipe/combine cost.",
    "hint": "Components and completed items are both eligible.",
    "explanation": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Total listed cost, not the recipe/combine cost."
  },
  {
    "id": "i-ap-health",
    "category": "items",
    "prompt": "Name an item that gives both ability power and health.",
    "answerIds": [
      "item:1056",
      "item:1082",
      "item:2510",
      "item:3041",
      "item:3116",
      "item:3147",
      "item:3152",
      "item:3165",
      "item:4629",
      "item:4633",
      "item:6617",
      "item:6620",
      "item:6653",
      "item:6657",
      "item:8010"
    ],
    "rule": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Both must be listed base stats.",
    "hint": "Think durable magic users.",
    "explanation": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Both must be listed base stats."
  },
  {
    "id": "i-ad-crit",
    "category": "items",
    "prompt": "Name an item that gives both attack damage and critical strike chance.",
    "answerIds": [
      "item:2523",
      "item:3031",
      "item:3033",
      "item:3036",
      "item:3095",
      "item:3508",
      "item:6670",
      "item:6673",
      "item:6676"
    ],
    "rule": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Both must be listed base stats.",
    "hint": "A marksman’s shopping list is a good place to start.",
    "explanation": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Both must be listed base stats."
  },
  {
    "id": "i-build-longsword",
    "category": "items",
    "prompt": "Name an item built directly from Long Sword.",
    "answerIds": [
      "item:1053",
      "item:2019",
      "item:2021",
      "item:2517",
      "item:2523",
      "item:3004",
      "item:3032",
      "item:3035",
      "item:3044",
      "item:3051",
      "item:3077",
      "item:3123",
      "item:3133",
      "item:3134",
      "item:3142",
      "item:3155",
      "item:6670",
      "item:6690",
      "item:6692",
      "item:6699"
    ],
    "rule": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Long Sword must appear in the immediate recipe, not several upgrades earlier.",
    "hint": "Only the next step in the build tree counts.",
    "explanation": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Long Sword must appear in the immediate recipe, not several upgrades earlier."
  },
  {
    "id": "i-build-amplifyingtome",
    "category": "items",
    "prompt": "Name an item built directly from Amplifying Tome.",
    "answerIds": [
      "item:2420",
      "item:2421",
      "item:2508",
      "item:3108",
      "item:3113",
      "item:3116",
      "item:3124",
      "item:3145",
      "item:3146",
      "item:3147",
      "item:3802",
      "item:3916",
      "item:4005",
      "item:4628",
      "item:4630",
      "item:4632",
      "item:4642"
    ],
    "rule": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Amplifying Tome must appear in the immediate recipe, not several upgrades earlier.",
    "hint": "Only the next step in the build tree counts.",
    "explanation": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Amplifying Tome must appear in the immediate recipe, not several upgrades earlier."
  },
  {
    "id": "i-build-rubycrystal",
    "category": "items",
    "prompt": "Name an item built directly from Ruby Crystal.",
    "answerIds": [
      "item:1011",
      "item:2021",
      "item:2502",
      "item:2526",
      "item:3044",
      "item:3053",
      "item:3066",
      "item:3067",
      "item:3068",
      "item:3075",
      "item:3147",
      "item:3152",
      "item:3161",
      "item:3211",
      "item:3742",
      "item:3801",
      "item:3803",
      "item:4401",
      "item:6660",
      "item:6662"
    ],
    "rule": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Ruby Crystal must appear in the immediate recipe, not several upgrades earlier.",
    "hint": "Only the next step in the build tree counts.",
    "explanation": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Ruby Crystal must appear in the immediate recipe, not several upgrades earlier."
  },
  {
    "id": "i-build-clotharmor",
    "category": "items",
    "prompt": "Name an item built directly from Cloth Armor.",
    "answerIds": [
      "item:1031",
      "item:2019",
      "item:2420",
      "item:2421",
      "item:2524",
      "item:3024",
      "item:3047",
      "item:3050",
      "item:3076",
      "item:3082",
      "item:3190"
    ],
    "rule": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Cloth Armor must appear in the immediate recipe, not several upgrades earlier.",
    "hint": "Only the next step in the build tree counts.",
    "explanation": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Cloth Armor must appear in the immediate recipe, not several upgrades earlier."
  },
  {
    "id": "i-build-dagger",
    "category": "items",
    "prompt": "Name an item built directly from Dagger.",
    "answerIds": [
      "item:1043",
      "item:2510",
      "item:3006",
      "item:3046",
      "item:3051",
      "item:3073",
      "item:3086",
      "item:3144",
      "item:6631",
      "item:6675"
    ],
    "rule": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Dagger must appear in the immediate recipe, not several upgrades earlier.",
    "hint": "Only the next step in the build tree counts.",
    "explanation": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Dagger must appear in the immediate recipe, not several upgrades earlier."
  },
  {
    "id": "i-build-sapphirecrystal",
    "category": "items",
    "prompt": "Name an item built directly from Sapphire Crystal.",
    "answerIds": [
      "item:3024",
      "item:3802",
      "item:3803"
    ],
    "rule": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Sapphire Crystal must appear in the immediate recipe, not several upgrades earlier.",
    "hint": "Only the next step in the build tree counts.",
    "explanation": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Sapphire Crystal must appear in the immediate recipe, not several upgrades earlier."
  },
  {
    "id": "i-build-pickaxe",
    "category": "items",
    "prompt": "Name an item built directly from Pickaxe.",
    "answerIds": [
      "item:2020",
      "item:2517",
      "item:2523",
      "item:3031",
      "item:3053",
      "item:3071",
      "item:3072",
      "item:3087",
      "item:3124",
      "item:3139",
      "item:3153",
      "item:3161",
      "item:3181",
      "item:6333",
      "item:6673",
      "item:6676",
      "item:6692",
      "item:6695"
    ],
    "rule": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Pickaxe must appear in the immediate recipe, not several upgrades earlier.",
    "hint": "Only the next step in the build tree counts.",
    "explanation": "Uses the bundled Riot Data Dragon 16.23.1 snapshot. Pickaxe must appear in the immediate recipe, not several upgrades earlier."
  },
  {
    "id": "m-monsters",
    "category": "map",
    "prompt": "Name a neutral monster or monster camp on Summoner’s Rift.",
    "answerIds": [
      "map:baron-nashor",
      "map:blue-sentinel",
      "map:chemtech-drake",
      "map:cloud-drake",
      "map:elder-dragon",
      "map:gromp",
      "map:hextech-drake",
      "map:infernal-drake",
      "map:krugs",
      "map:mountain-drake",
      "map:ocean-drake",
      "map:raptors",
      "map:red-brambleback",
      "map:rift-herald",
      "map:rift-scuttler",
      "map:void-grubs",
      "map:wolves"
    ],
    "rule": "Named camps, epic monsters and individual elemental drakes all count. Atakhan is not in this season’s pool.",
    "hint": "The river and jungle both have answers.",
    "explanation": "Named camps, epic monsters and individual elemental drakes all count. Atakhan is not in this season’s pool."
  },
  {
    "id": "m-camps",
    "category": "map",
    "prompt": "Name a standard non-epic jungle camp.",
    "answerIds": [
      "map:blue-sentinel",
      "map:gromp",
      "map:krugs",
      "map:raptors",
      "map:red-brambleback",
      "map:wolves"
    ],
    "rule": "Blue Sentinel, Red Brambleback, Gromp, Wolves, Raptors and Krugs count. The river Scuttler is outside this pool.",
    "hint": "Think of a normal six-camp jungle clear.",
    "explanation": "Blue Sentinel, Red Brambleback, Gromp, Wolves, Raptors and Krugs count. The river Scuttler is outside this pool."
  },
  {
    "id": "m-epic",
    "category": "map",
    "prompt": "Name an epic monster on Summoner’s Rift.",
    "answerIds": [
      "map:baron-nashor",
      "map:chemtech-drake",
      "map:cloud-drake",
      "map:elder-dragon",
      "map:hextech-drake",
      "map:infernal-drake",
      "map:mountain-drake",
      "map:ocean-drake",
      "map:rift-herald",
      "map:void-grubs"
    ],
    "rule": "Baron, Herald, Void Grubs and the named dragons count. Atakhan was removed in 26.1.",
    "hint": "Some objectives live in the top river pit; others live in the bottom one.",
    "explanation": "Baron, Herald, Void Grubs and the named dragons count. Atakhan was removed in 26.1."
  },
  {
    "id": "m-dragons",
    "category": "map",
    "prompt": "Name a type of dragon on Summoner’s Rift.",
    "answerIds": [
      "map:chemtech-drake",
      "map:cloud-drake",
      "map:elder-dragon",
      "map:hextech-drake",
      "map:infernal-drake",
      "map:mountain-drake",
      "map:ocean-drake"
    ],
    "rule": "Any of the six elemental drakes or Elder Dragon counts. Use a specific type rather than “dragon”.",
    "hint": "Its element is enough; you do not need to type “Drake”.",
    "explanation": "Any of the six elemental drakes or Elder Dragon counts. Use a specific type rather than “dragon”."
  },
  {
    "id": "m-elements",
    "category": "map",
    "prompt": "Name an elemental drake.",
    "answerIds": [
      "map:chemtech-drake",
      "map:cloud-drake",
      "map:hextech-drake",
      "map:infernal-drake",
      "map:mountain-drake",
      "map:ocean-drake"
    ],
    "rule": "Infernal, Mountain, Ocean, Cloud, Hextech and Chemtech count. Elder is not elemental.",
    "hint": "There are six different elements.",
    "explanation": "Infernal, Mountain, Ocean, Cloud, Hextech and Chemtech count. Elder is not elemental."
  },
  {
    "id": "m-void",
    "category": "map",
    "prompt": "Name a Void objective on Summoner’s Rift.",
    "answerIds": [
      "map:baron-nashor",
      "map:rift-herald",
      "map:void-grubs"
    ],
    "rule": "Baron Nashor, Rift Herald and Void Grubs count. Void champions are not map objectives.",
    "hint": "Think of the top-side river pit.",
    "explanation": "Baron Nashor, Rift Herald and Void Grubs count. Void champions are not map objectives."
  },
  {
    "id": "m-buffs",
    "category": "map",
    "prompt": "Name a jungle camp that gives red or blue buff.",
    "answerIds": [
      "map:blue-sentinel",
      "map:red-brambleback"
    ],
    "rule": "Name the monster or use its common buff nickname.",
    "hint": "The color alone is accepted.",
    "explanation": "Name the monster or use its common buff nickname."
  },
  {
    "id": "m-plants",
    "category": "map",
    "prompt": "Name a standard jungle plant.",
    "answerIds": [
      "map:blast-cone",
      "map:honeyfruit",
      "map:scryers-bloom"
    ],
    "rule": "Blast Cone, Honeyfruit and Scryer’s Bloom count. Champion-created plants and removed Blood Roses do not.",
    "hint": "Some move you, some heal you, some reveal the map.",
    "explanation": "Blast Cone, Honeyfruit and Scryer’s Bloom count. Champion-created plants and removed Blood Roses do not."
  },
  {
    "id": "m-structures",
    "category": "map",
    "prompt": "Name a destroyable structure type on Summoner’s Rift.",
    "answerIds": [
      "map:inhibitor",
      "map:nexus",
      "map:turret"
    ],
    "rule": "Turret, Inhibitor and Nexus count. Jungle monsters are not structures.",
    "hint": "Think of what stands between you and the victory screen.",
    "explanation": "Turret, Inhibitor and Nexus count. Jungle monsters are not structures."
  },
  {
    "id": "m-lanes",
    "category": "map",
    "prompt": "Name one of Summoner’s Rift’s three lanes.",
    "answerIds": [
      "map:bot-lane",
      "map:mid-lane",
      "map:top-lane"
    ],
    "rule": "Top, mid/middle and bot/bottom count. Jungle and support are roles, not additional lanes.",
    "hint": "A short lane nickname is enough.",
    "explanation": "Top, mid/middle and bot/bottom count. Jungle and support are roles, not additional lanes."
  },
  {
    "id": "m-minions",
    "category": "map",
    "prompt": "Name a lane-minion type.",
    "answerIds": [
      "map:caster-minion",
      "map:melee-minion",
      "map:siege-minion",
      "map:super-minion"
    ],
    "rule": "Melee, Caster, Siege/Cannon and Super minions count. Jungle monsters do not.",
    "hint": "You last-hit them for gold.",
    "explanation": "Melee, Caster, Siege/Cannon and Super minions count. Jungle monsters do not."
  },
  {
    "id": "m-maps",
    "category": "map",
    "prompt": "Name the PC map used for standard 5v5 or classic ARAM.",
    "answerIds": [
      "map:howling-abyss",
      "map:summoners-rift"
    ],
    "rule": "Summoner’s Rift and Howling Abyss count. This question is about map names, not queue names.",
    "hint": "The Rift and the frozen bridge.",
    "explanation": "Summoner’s Rift and Howling Abyss count. This question is about map names, not queue names."
  }
];
