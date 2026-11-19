import { useState } from 'react';
import { BIOMES, formatDepth } from '../engine.js';
import { earnedXp } from '../storage.js';
import { MODE_NAMES } from './Home.jsx';
import { Riftling } from './Ocean.jsx';
import Icon from './Icon.jsx';

export default function Results({ game, onReplay, onHome, onJournal }) {
  const [shareText, setShareText] = useState('');
  const [copied, setCopied] = useState(false);
  const modeName = MODE_NAMES[game.mode];
  const commonWins = game.mode === 'common';
  const sharedClockExpired = game.mode === 'timebank' && game.timeBankRemainingMs === 0;
  const questionCount = game.mode === 'endless' ? game.log.length : game.questions.length;
  const topAnswers = commonWins
    ? game.log.filter(answer => answer.correct && answer.rewardBase === answer.bestRewardBase).length
    : 0;
  const personalBest = game.depth > game.previousBest;
  const perfectRun = questionCount > 0 && game.correct === questionCount;

  async function share() {
    const url = new URL(window.location.href);
    url.search = '';
    url.hash = '';
    if (game.mode === 'classic') {
      url.searchParams.set('challenge', game.seed);
      url.searchParams.set('category', game.category);
      url.searchParams.set('v', game.bankVersion);
    }
    const shareable = /^https?:$/.test(url.protocol)
      && !['localhost', '127.0.0.1', '0.0.0.0'].includes(url.hostname);
    const extraScore = commonWins ? `${topAnswers} top picks` : `×${game.peakCombo.toFixed(1)} best combo`;
    const text = [
      `RIFT RARITY · ${modeName}${game.mode === 'daily' ? ' ' + game.day : ''}`,
      `${formatDepth(game.depth)} below the surface`,
      `${game.correct}/${questionCount} correct · ${extraScore}`,
      game.log.map(answer => answer.correct ? '🟩' : '⬜').join(''),
      'Can you dive deeper?',
      ...(shareable ? [url.href] : []),
    ].join('\n');

    setShareText(text);
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section className="screen results-screen" data-testid="results">
      <div className="results-card">
        <div className="result-mascot"><Riftling /></div>
        <p className="eyebrow">{game.mystery ? `Mystery Dive · ${modeName}` : modeName}</p>
        <h1>Expedition complete</h1>
        <div className="final-depth">{game.depth.toLocaleString()}<span>metres</span></div>
        {(personalBest || perfectRun) && (
          <p className="result-description result-milestone">
            <Icon name={personalBest ? 'trophy' : 'spark'} size={16} />
            {personalBest && 'New personal best'}
            {personalBest && perfectRun && ' · '}
            {perfectRun && 'Perfect run'}
          </p>
        )}
        {sharedClockExpired && <p className="result-description">The shared clock ran out.</p>}
        <div className="result-stats">
          <div>
            <span>CORRECT ANSWERS</span>
            <strong>{game.correct}<small> / {questionCount}</small></strong>
          </div>
          {commonWins ? (
            <div>
              <span>TOP-PAYING PICKS</span>
              <strong>{topAnswers}<small> / {questionCount}</small></strong>
            </div>
          ) : (
            <div>
              <span>BEST COMBO</span>
              <strong>×{game.peakCombo.toFixed(1)}</strong>
            </div>
          )}
          <div>
            <span>XP EARNED</span>
            <strong>+{earnedXp(game)}</strong>
          </div>
        </div>
        <div className="result-actions">
          {game.mystery && (
            <button
              className="button button-primary"
              onClick={() => onReplay('mystery', { category: game.category, previousMode: game.mode })}
            >
              Roll another mode <Icon name="shuffle" size={18} />
            </button>
          )}
          <button
            className={`button ${game.mystery ? 'button-secondary' : 'button-primary'}`}
            onClick={() => onReplay(game.mode, { category: game.category })}
          >
            {game.mystery ? `Replay ${modeName}` : 'Dive again'} <Icon name="arrow" />
          </button>
          <button className="button button-secondary" onClick={share}>
            <Icon name="link" size={18} />{copied ? 'Copied!' : 'Share your dive'}
          </button>
          <button className="button button-quiet" onClick={onHome}>Back to shore</button>
        </div>
        {shareText && (
          <div className="share-result" role="status">
            <p>{copied ? 'Result copied' : 'Copy the result below.'}</p>
            <textarea readOnly aria-label="Shareable expedition result" value={shareText} onFocus={event => event.target.select()} />
          </div>
        )}
      </div>

      {game.newRelics.length > 0 && (
        <div className="relic-discovery">
          <Icon name="gem" size={25} />
          <div>
            <b>Places you reached</b>
            <span>{game.newRelics.map(key => BIOMES.find(biome => biome.key === key)?.relic).filter(Boolean).join(' · ')}</span>
          </div>
          <button className="text-button" onClick={onJournal}>View journal <Icon name="arrow" size={16} /></button>
        </div>
      )}

      {game.log.length > 0 && (
        <>
          <div className="section-heading"><h2>Answer log</h2></div>
          <div className="answer-log-list">
            {game.log.map((answer, index) => (
              <div className={`answer-log tier-${answer.rewardTier || answer.tier || 0}`} key={index}>
                <span className="answer-log-number">{String(index + 1).padStart(2, '0')}</span>
                <span className={`answer-log-status ${answer.correct ? 'right' : ''}`}>
                  <Icon name={answer.correct ? 'check' : 'close'} size={18} />
                </span>
                <div>
                  <span>{answer.question}</span>
                  <b>{answer.answer || 'Skipped'}</b>
                </div>
                <div className="answer-log-score">
                  <strong>{answer.gain ? `+${formatDepth(answer.gain)}` : '—'}</strong>
                  <span>{commonWins && answer.correct && answer.rewardBase === answer.bestRewardBase ? 'Top pick' : answer.rarity}</span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
