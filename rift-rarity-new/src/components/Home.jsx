import { BIOMES, BASE_DEPTH, TIER_NAMES, formatDepth, levelFor } from '../engine.js';
import { CONTENT_META, QUESTIONS } from '../data/content.js';
import { bestTimedDepth } from '../storage.js';
import Icon from './Icon.jsx';
import './mode-picker.css';

export const CATEGORY_LABELS = {
  all: 'All categories',
  champions: 'Champions',
  items: 'Items',
  map: 'The Rift',
};

export const MODE_NAMES = {
  classic: 'Classic Dive',
  daily: 'Daily Seven',
  endless: 'Endless Abyss',
  practice: 'Practice',
  common: 'Common Wins',
  deep: 'Deep Cuts',
  timebank: 'Time Bank',
};

export const categoryIcon = {
  all: 'compass',
  champions: 'sword',
  items: 'gem',
  map: 'map',
};

const modes = [
  {
    id: 'classic',
    icon: 'compass',
    description: 'Seven timed questions to beat your best.',
    details: '25s per question',
  },
  {
    id: 'common',
    icon: 'trophy',
    description: 'Familiar answers score most.',
    details: '800 m base for Common',
  },
  {
    id: 'deep',
    icon: 'map',
    description: 'Champion abilities, tricky recipes, and Rift mechanics.',
    details: '7 niche questions',
  },
  {
    id: 'timebank',
    icon: 'clock',
    description: 'Share one timer across seven questions.',
    details: '60s total',
  },
  {
    id: 'daily',
    icon: 'flag',
    description: 'A shared set of seven questions, refreshed daily.',
    details: 'All categories',
  },
  {
    id: 'endless',
    icon: 'infinity',
    description: 'Keep diving until you run out of lives.',
    details: '3 lives · save anytime',
  },
  {
    id: 'practice',
    icon: 'book',
    description: 'Take your time with the full question bank.',
    details: '7 questions · no timer',
  },
  {
    id: 'mystery',
    title: 'Mystery Dive',
    icon: 'spark',
    description: 'Play one of six modes at random.',
    details: 'Keeps your category',
  },
];

export function CategoryPicker({ value, onChange, compact = false }) {
  return (
    <div className={`category-picker${compact ? ' compact' : ''}`} role="group" aria-label="Question category">
      {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
        <button
          key={key}
          className={value === key ? 'selected' : ''}
          aria-pressed={value === key}
          onClick={() => onChange(key)}
        >
          <Icon name={categoryIcon[key]} size={16} />
          {label}
        </button>
      ))}
    </div>
  );
}

export function RarityLegend() {
  return (
    <div className="rarity-legend">
      {TIER_NAMES.map((name, index) => (
        <div className={`rarity-item tier-${index + 1}`} key={name}>
          <span className="rarity-dot" />
          <span>{name}</span>
          <b>{BASE_DEPTH[index]}<small>m</small></b>
        </div>
      ))}
    </div>
  );
}

export default function Home({
  profile,
  category,
  onCategoryChange,
  onPlay,
  onJournal,
  challenge,
  onDismissChallenge,
}) {
  const best = bestTimedDepth(profile);
  const stats = [
    ['trophy', 'Personal best', formatDepth(best)],
    ['compass', 'Expeditions', profile.runs],
    ['spark', 'Explorer level', levelFor(profile.xp)],
    ['gem', 'Relics found', `${profile.relics.length} / ${BIOMES.length}`],
  ];

  return (
    <section id="home-screen" className="screen">
      {challenge && (
        <div className="challenge-banner">
          <Icon name="flag" />
          <div>
            <b>A friend has challenged you</b>
            <span>Play the same seven questions and try to beat their depth.</span>
          </div>
          <button className="button button-small" onClick={() => onPlay('classic', challenge)}>
            Accept challenge <Icon name="arrow" size={16} />
          </button>
          <button className="icon-button" onClick={onDismissChallenge} aria-label="Dismiss challenge">
            <Icon name="close" />
          </button>
        </div>
      )}

      <section className="hero-grid" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">League of Legends trivia</p>
          <h1 id="hero-title">How deep can<br /><em>you dive?</em></h1>
          <p className="hero-description">
            Answer questions about champions, items, and Rift objectives.
          </p>
          <div className="hero-actions">
            <button className="button button-primary" onClick={() => onPlay('classic', { category })}>
              Let's dive in <Icon name="arrow" />
            </button>
            <a className="button button-quiet" href="#choose-dive">
              Browse modes <Icon name="down" size={18} />
            </a>
          </div>
          <div className="hero-metrics">
            <div><b>{QUESTIONS.length}</b><span>questions</span></div>
            <div><b>{Object.keys(MODE_NAMES).length}</b><span>game modes</span></div>
          </div>
        </div>
      </section>

      <section className="expedition-select" id="choose-dive" tabIndex={-1} aria-labelledby="modes-title">
        <div className="section-heading">
          <h2 id="modes-title">Choose your dive</h2>
        </div>
        <div className="mode-category-bar">
          <div className="mode-category-copy">
            <p>Question category</p>
            <span>Daily Seven always uses all categories.</span>
          </div>
          <CategoryPicker value={category} onChange={onCategoryChange} />
        </div>
        <div className="mode-grid home-mode-grid">
          {modes.map(({ id, title = MODE_NAMES[id], icon, description, details }) => (
            <button
              className={`mode-card mode-${id}`}
              key={id}
              aria-labelledby={`mode-${id}-title`}
              aria-describedby={`mode-${id}-description mode-${id}-details`}
              onClick={() => onPlay(id, id === 'daily' ? undefined : { category })}
            >
              <span className="mode-card-top">
                <span className="mode-icon"><Icon name={icon} size={22} /></span>
                <span className="mode-title" id={`mode-${id}-title`}>{title}</span>
              </span>
              <span className="mode-description" id={`mode-${id}-description`}>{description}</span>
              <span className="mode-card-bottom">
                <span id={`mode-${id}-details`}>{details}</span>
                <Icon name="arrow" size={18} />
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="rarity-panel" aria-labelledby="rarity-title">
        <div>
          <Icon name="spark" />
          <h3 id="rarity-title">Standard depth by rarity</h3>
        </div>
        <RarityLegend />
      </section>

      <section className="journey-preview" aria-labelledby="journey-title">
        <div className="section-heading">
          <h2 id="journey-title">Your progress</h2>
          <button className="text-button" onClick={onJournal}>
            Expedition journal <Icon name="arrow" size={16} />
          </button>
        </div>
        <div className="stats-grid">
          {stats.map(([icon, label, value]) => (
            <div className="stat-card" key={label}>
              <Icon name={icon} size={21} />
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </section>

      <div className="content-note">
        <span>{CONTENT_META.champions} champions · {CONTENT_META.items} items · {QUESTIONS.length} questions</span>
        <span>Patch {CONTENT_META.patch}</span>
      </div>
    </section>
  );
}
