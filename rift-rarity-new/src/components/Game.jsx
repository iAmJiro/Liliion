import { useEffect, useMemo, useRef, useState } from 'react';
import { comboMultiplier, formatDepth, suggestions } from '../engine.js';
import { CATALOG } from '../data/content.js';
import { CATEGORY_LABELS, MODE_NAMES, categoryIcon } from './Home.jsx';
import Ocean from './Ocean.jsx';
import Icon from './Icon.jsx';
import { Avatar } from './Knowledge.jsx';

const placeholders = {
  champions: 'Enter a champion name',
  items: 'Enter an item name',
  map: 'Enter an objective or map feature',
};

function QuestionTimer({ remaining, durationMs, shared, paused }) {
  if (remaining === null) {
    return (
      <div className="timer-section">
        <span className="timer-readout" aria-label="No time limit">
          <Icon name="book" size={16} />
          <strong>No timer</strong>
        </span>
      </div>
    );
  }

  const seconds = Math.ceil(remaining / 1000);
  const percent = Math.min(100, (remaining / durationMs) * 100);

  return (
    <div className={`timer-section ${remaining <= 5000 ? 'urgent' : ''}`}>
      <span className="timer-readout" role="timer">
        <Icon name="clock" size={16} />
        {shared && <span className="timer-context">Time bank</span>}
        <strong>{seconds}s</strong>
        <span className="sr-only"> remaining</span>
        {paused && remaining > 0 && <span className="timer-paused">Paused</span>}
      </span>
      <div className="timer-track" aria-hidden="true">
        <i style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}

export default function Game({ game, onAnswer, onSkip, onNext, onLeave, onSurface }) {
  const [input, setInput] = useState('');
  const [now, setNow] = useState(() => performance.now());
  const [listOpen, setListOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const [dismissedNotice, setDismissedNotice] = useState(null);
  const inputRef = useRef(null);
  const nextRef = useRef(null);
  const composing = useRef(false);
  const question = game.questions[game.index];
  const answering = game.status === 'answering';
  const endless = game.mode === 'endless';
  const commonWins = game.mode === 'common';
  const timeBank = game.mode === 'timebank';
  const options = useMemo(
    () => suggestions(input, question.category, CATALOG, 5),
    [input, question.category],
  );
  const showSuggestions = listOpen && options.length > 0;
  const notice = game.notice === dismissedNotice ? null : game.notice;
  const remaining = timeBank && !answering
    ? game.timeBankRemainingMs
    : game.deadline === null ? null : Math.max(0, game.deadline - Math.max(now, game.lastNow));
  const questionCount = game.questions.length;
  const bankExpired = timeBank && !answering && game.timeBankRemainingMs === 0;
  const finishedNext = endless ? game.lives <= 0 : bankExpired || game.index + 1 === questionCount;
  const last = game.last;
  const topAnswer = commonWins && last?.correct && last.rewardBase === last.bestRewardBase;
  const dotStart = endless ? Math.max(0, game.index - 11) : 0;
  const dotCount = endless ? Math.min(game.index + 1, 12) : questionCount;

  useEffect(() => {
    setInput('');
    setActive(-1);
    setListOpen(false);
    setDismissedNotice(null);
    setNow(performance.now());

    if (!window.matchMedia || window.matchMedia('(pointer: fine)').matches) {
      inputRef.current?.focus({ preventScroll: true });
    }
  }, [game.index]);

  useEffect(() => {
    if (!answering || game.deadline === null) return;

    function tick() {
      const time = performance.now();
      setNow(time);
      if (time >= game.deadline) onAnswer('', true);
    }

    tick();
    const id = setInterval(tick, 100);
    return () => clearInterval(id);
  }, [game.deadline, answering, onAnswer]);

  useEffect(() => {
    if (game.status === 'revealing') nextRef.current?.focus({ preventScroll: true });
  }, [game.status]);

  useEffect(() => {
    if (game.notice?.kind === 'retry') inputRef.current?.focus({ preventScroll: true });
  }, [game.notice]);

  function editAnswer(value, open) {
    setInput(value);
    setActive(-1);
    setListOpen(open);
    if (game.notice?.kind === 'retry') setDismissedNotice(game.notice);
  }

  function pick(entity) {
    editAnswer(entity.name, false);
    inputRef.current?.focus({ preventScroll: true });
  }

  function keyDown(event) {
    if (composing.current || event.nativeEvent.isComposing || event.keyCode === 229) return;

    if (event.key === 'Escape') {
      setListOpen(false);
      setActive(-1);
    } else if (event.key === 'ArrowDown' && options.length) {
      event.preventDefault();
      setListOpen(true);
      setActive((index) => (index + 1) % options.length);
    } else if (event.key === 'ArrowUp' && options.length) {
      event.preventDefault();
      setListOpen(true);
      setActive((index) => (index < 0 ? options.length - 1 : (index - 1 + options.length) % options.length));
    } else if (event.key === 'Enter' && showSuggestions && options[active]) {
      event.preventDefault();
      pick(options[active]);
    }
  }

  function closeSuggestionsOnBlur(event) {
    if (event.currentTarget.contains(event.relatedTarget)) return;
    setListOpen(false);
    setActive(-1);
  }

  function submit(event) {
    event.preventDefault();
    const answer = input.trim();
    if (!answer || composing.current) return;

    setListOpen(false);
    setActive(-1);
    onAnswer(answer);
  }

  return (
    <section className="screen game-screen" id="game-screen">
      <div className="game-toolbar">
        <button className="text-button" onClick={onLeave}>
          <Icon name="back" size={16} />
          Leave expedition
        </button>
        <span className="mode-label">
          {game.mystery && <span className="mystery-label"><Icon name="shuffle" size={15} />Mystery pick</span>}
          {MODE_NAMES[game.mode]}
        </span>
      </div>

      <div className="game-layout">
        <div className="question-panel">
          <div className="question-heading">
            <span className="category-badge">
              <Icon name={categoryIcon[question.category]} size={16} />
              {CATEGORY_LABELS[question.category]}
            </span>
            {(answering || timeBank) && (
              <QuestionTimer remaining={remaining} durationMs={game.durationMs} shared={timeBank} paused={!answering} />
            )}
            <span className="question-number">
              <span className="sr-only">Question </span>
              <span data-testid="question-number">
                {String(game.index + 1).padStart(2, '0')}
                <i> / {endless ? '∞' : String(questionCount).padStart(2, '0')}</i>
              </span>
            </span>
          </div>

          <div className="question-dots" aria-hidden="true">
            {Array.from({ length: dotCount }, (_, slot) => {
              const index = dotStart + slot;
              const result = game.log[index];
              const status = result ? (result.correct ? 'completed' : 'missed') : index === game.index ? 'current' : '';
              return <i key={index} className={status} />;
            })}
          </div>

          <div className="question-content">
            <h1 data-testid="question-prompt">{question.prompt}</h1>
            <p className="question-rule">{question.rule || question.hint}</p>
            {answering && commonWins && (
              <p className="mode-rule"><Icon name="trophy" size={16} />Familiar answers score highest in this mode.</p>
            )}
          </div>

          {answering ? (
            <form className="answer-form" onSubmit={submit} onBlur={closeSuggestionsOnBlur}>
              <label htmlFor="answer-input">Your answer</label>
              <div className="answer-input-group">
                <div className="answer-field">
                  <Icon name="search" size={20} />
                  <input
                    ref={inputRef}
                    id="answer-input"
                    data-testid="answer-input"
                    type="text"
                    value={input}
                    onChange={(event) => editAnswer(event.target.value, true)}
                    onKeyDown={keyDown}
                    onCompositionStart={() => { composing.current = true; }}
                    onCompositionEnd={() => { composing.current = false; }}
                    placeholder={placeholders[question.category]}
                    maxLength={90}
                    autoComplete="off"
                    spellCheck={false}
                    autoCapitalize="off"
                    enterKeyHint="go"
                    role="combobox"
                    aria-autocomplete="list"
                    aria-controls={showSuggestions ? 'name-suggestions' : undefined}
                    aria-expanded={showSuggestions}
                    aria-activedescendant={showSuggestions && options[active] ? `suggestion-${active}` : undefined}
                    aria-describedby="answer-help"
                    aria-invalid={notice?.kind === 'retry' || undefined}
                  />
                  <kbd aria-hidden="true">↵</kbd>
                </div>
                {showSuggestions && (
                  <div className="suggestion-dropdown">
                    <p className="suggestion-label">Close spellings</p>
                    <div id="name-suggestions" role="listbox" aria-label="Spelling suggestions">
                      {options.map((entity, index) => (
                        <div
                          key={entity.id}
                          id={`suggestion-${index}`}
                          role="option"
                          aria-selected={index === active}
                          className={`suggestion-option ${active === index ? 'active' : ''}`}
                          onPointerDown={(event) => {
                            event.preventDefault();
                            pick(entity);
                          }}
                        >
                          <Avatar entity={entity} small />
                          <span>{entity.name}</span>
                          <small>{CATEGORY_LABELS[entity.category]}</small>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <p className="answer-help" id="answer-help">Nicknames are accepted.</p>
              <div role="status">
                {notice && (
                  <p className="answer-notice" data-testid="answer-notice">
                    <Icon name="info" size={17} />
                    {notice.message}
                  </p>
                )}
              </div>

              <div className="answer-actions">
                <button
                  className="button button-primary answer-submit"
                  data-testid="answer-submit"
                  type="submit"
                  disabled={!input.trim()}
                >
                  Submit answer <Icon name="down" />
                </button>
                <div className="answer-bottom">
                  <button className="text-button" type="button" onClick={onSkip}>
                    Skip question <Icon name="arrow" size={15} />
                  </button>
                </div>
              </div>
            </form>
          ) : (
            <div className={`answer-reveal ${last?.correct ? 'success' : 'miss'} tier-${last?.rewardTier || last?.tier || 0}`} role="status">
              <div className="reveal-label">
                <Icon name={topAnswer ? 'trophy' : last?.correct ? 'spark' : 'info'} size={18} />
                {topAnswer ? 'Most common answer' : last?.correct ? `${last.rarity} discovery` : last?.rarity}
              </div>
              <h2>{last?.correct ? last.answer : bankExpired ? 'Time bank used up' : last?.kind === 'timeout' ? 'Time’s up.' : 'Question skipped.'}</h2>
              {last?.correct && (
                <div className="reveal-depth">
                  +{last.gain.toLocaleString()} <span>metres</span>
                </div>
              )}
              <p>{last?.detail}</p>
              {last?.examples?.length > 0 && (
                <div className="example-answers">
                  <span>{commonWins ? 'Answers by base payout' : last.correct ? 'Other discoveries' : 'Answers that fit'}</span>
                  <div>
                    {last.examples.slice(0, 4).map((entity, index) => (
                      <span key={entity.id || index}>
                        {typeof entity === 'string' ? entity : entity.name}
                        {entity.rewardBase > 0 && <small>{formatDepth(entity.rewardBase)}</small>}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              <button ref={nextRef} className="button button-primary" data-testid="next-question" onClick={onNext}>
                {finishedNext ? 'See expedition results' : 'Continue the descent'} <Icon name="arrow" />
              </button>
            </div>
          )}
        </div>

        <aside className="expedition-panel" aria-label="Dive progress">
          <Ocean depth={game.depth} gain={last?.gain || 0} eventKey={game.log.length} />
          <div className="dive-stats" aria-label="Expedition stats">
            <div>
              <Icon name="spark" size={17} />
              <b>×{comboMultiplier(game.streak).toFixed(1)}</b>
              <span>combo</span>
            </div>
            <div>
              <Icon name="check" size={17} />
              <b>{game.correct}</b>
              <span>correct</span>
            </div>
            {endless && (
              <div>
                <Icon name="heart" size={17} />
                <b>{game.lives}</b>
                <span>lives</span>
              </div>
            )}
          </div>
          {endless && (
            <button className="button surface-button" onClick={onSurface}>
              Surface &amp; save this run <Icon name="flag" size={16} />
            </button>
          )}
        </aside>
      </div>
    </section>
  );
}
