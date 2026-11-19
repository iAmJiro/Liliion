import { useRef, useState } from 'react';
import { BIOMES, formatDepth } from '../engine.js';
import { earnedXp } from '../storage.js';
import { MODE_NAMES } from './Home.jsx';
import { Riftling } from './Ocean.jsx';
import Icon from './Icon.jsx';
import './answer-review.css';

function AnswerReviewRow({ answer, index, question, commonWins }) {
  const explanation = question?.explanation || answer.detail;
  const recordedAnswer = answer.answer && answer.answer !== '—' ? answer.answer : 'No answer';
  const scoreLabel = commonWins && answer.correct && answer.rewardBase === answer.bestRewardBase
    ? 'Top pick'
    : answer.rarity;

  return (
    <details className="answer-review-row">
      <summary className={`answer-log tier-${answer.rewardTier || answer.tier || 0}`}>
        <span className="answer-log-number">{String(index + 1).padStart(2, '0')}</span>
        <span className={`answer-log-status ${answer.correct ? 'right' : ''}`}>
          <Icon name={answer.correct ? 'check' : 'close'} size={18} />
        </span>
        <span className="answer-review-prompt">
          <span>{answer.question}</span>
          <b>{recordedAnswer}</b>
        </span>
        <span className="answer-log-score">
          <strong>{answer.gain ? `+${formatDepth(answer.gain)}` : '—'}</strong>
          <span>{scoreLabel}</span>
        </span>
        <Icon className="answer-review-chevron" name="down" size={16} />
      </summary>
      <div className="answer-review-detail">
        {explanation && <p>{explanation}</p>}
        {answer.examples?.length > 0 && (
          <div className="answer-review-examples">
            <span>{answer.correct ? 'Other valid answers' : 'Valid answers'}</span>
            <ul aria-label={answer.correct ? 'Other valid answers' : 'Valid answers'}>
              {answer.examples.map(example => (
                <li key={example.id}>{example.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </details>
  );
}

export default function Results({ game, onReplay, onHome, onJournal }) {
  const [shareText, setShareText] = useState('');
  const [copied, setCopied] = useState(false);
  const [missedOnly, setMissedOnly] = useState(false);
  const reviewHeading = useRef(null);
  const missedCount = game.log.filter(answer => !answer.correct).length;
  const modeName = MODE_NAMES[game.mode];
  const commonWins = game.mode === 'common';
  const sharedClockExpired = game.mode === 'timebank' && game.timeBankRemainingMs === 0;
  const questionCount = game.mode === 'endless' ? game.log.length : game.questions.length;
  const topAnswers = commonWins
    ? game.log.filter(answer => answer.correct && answer.rewardBase === answer.bestRewardBase).length
    : 0;
  const personalBest = game.depth > game.previousBest;
  const perfectRun = questionCount > 0 && game.correct === questionCount;

  function reviewMisses() {
    setMissedOnly(true);
    reviewHeading.current?.focus();
  }

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
        {missedCount > 0 && (
          <button className="text-button answer-review-jump" onClick={reviewMisses}>
            <Icon name="book" size={17} /> Review missed answers ({missedCount})
          </button>
        )}
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
        <section className="answer-review" aria-labelledby="answer-review-heading">
          <div className="section-heading answer-review-toolbar">
            <h2 id="answer-review-heading" ref={reviewHeading} tabIndex={-1}>Answer log</h2>
            <div className="answer-review-filters" role="group" aria-label="Filter answers">
              <button
                type="button"
                aria-controls="answer-review-list"
                aria-pressed={!missedOnly}
                onClick={() => setMissedOnly(false)}
              >
                All answers <b>{game.log.length}</b>
              </button>
              <button
                type="button"
                aria-controls="answer-review-list"
                aria-pressed={missedOnly}
                onClick={() => setMissedOnly(true)}
              >
                Missed <b>{missedCount}</b>
              </button>
            </div>
          </div>
          <span className="sr-only" role="status">
            Showing {missedOnly ? missedCount : game.log.length} of {game.log.length} answers.
          </span>
          <div className="answer-log-list" id="answer-review-list">
            {missedOnly && missedCount === 0 && <p className="answer-review-empty">No missed answers this dive.</p>}
            {game.log.map((answer, index) => (
              missedOnly && answer.correct ? null : (
                <AnswerReviewRow
                  answer={answer}
                  index={index}
                  question={game.questions[index]}
                  commonWins={commonWins}
                  key={index}
                />
              )
            ))}
          </div>
        </section>
      )}
    </section>
  );
}
