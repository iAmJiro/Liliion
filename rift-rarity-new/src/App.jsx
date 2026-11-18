import { useCallback, useEffect, useRef, useState } from "react";
import bank from "./questions.json";
import { validateBank } from "./engine.js";
import { loadProfile, saveProfile } from "./storage.js";
import { newExpedition, settle, nextQuestion } from "./session.js";
import Home from "./components/Home.jsx";
import Game from "./components/Game.jsx";
import Results from "./components/Results.jsx";
const errors = validateBank(bank);

export default function App() {
  const [profile, setProfile] = useState(loadProfile);
  const [game, setGame] = useState(null);
  const savedRun = useRef(null);
  const audioContext = useRef(null);
  const lastSound = useRef(null);
  const onAnswer = useCallback(
    (value, timedOut = false) => setGame((g) => settle(g, value, timedOut)),
    [],
  );
  const start = useCallback((mode) => {
    setGame(newExpedition(mode));
    window.scrollTo(0, 0);
  }, []);
  const next = useCallback(() => setGame((g) => nextQuestion(g)), []);
  useEffect(() => {
    if (game?.status !== "complete" || savedRun.current === game.id) return;
    savedRun.current = game.id;
    setProfile((old) => {
      const p = {
        ...old,
        bests: { ...old.bests },
        relics: [...old.relics],
        history: [...old.history],
        daily: { ...old.daily },
      };
      p.xp +=
        50 + game.correct * 35 + Math.min(250, Math.floor(game.depth / 50));
      p.runs++;
      p.bests[game.mode] = Math.max(p.bests[game.mode] || 0, game.depth);
      for (const k of game.newRelics)
        if (!p.relics.includes(k)) p.relics.push(k);
      p.history.unshift({
        mode: game.mode,
        date: game.day,
        depth: game.depth,
        correct: game.correct,
      });
      p.history = p.history.slice(0, 30);
      if (game.mode === "daily")
        p.daily[game.day] = {
          depth: Math.max(p.daily[game.day]?.depth || 0, game.depth),
          correct: game.correct,
        };
      saveProfile(p);
      return p;
    });
  }, [game]);
  const leave = () => {
    if (window.confirm("Leave this expedition? Your unsaved run will be lost."))
      setGame(null);
  };
  useEffect(() => {
    if (
      !profile.audio ||
      !game ||
      game.status !== "revealing" ||
      lastSound.current === game.log.length + "-" + game.id
    )
      return;
    lastSound.current = game.log.length + "-" + game.id;
    try {
      audioContext.current ??= new (
        window.AudioContext || window.webkitAudioContext
      )();
      const ctx = audioContext.current;
      if (ctx.state === "suspended") ctx.resume().catch(() => {});
      const oscillator = ctx.createOscillator();
      const gain = ctx.createGain();
      oscillator.type = "sine";
      oscillator.frequency.value = game.last?.tier
        ? 380 + game.last.tier * 125
        : 210;
      gain.gain.value = 0.035;
      oscillator.connect(gain);
      gain.connect(ctx.destination);
      oscillator.start();
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
      oscillator.stop(ctx.currentTime + 0.15);
    } catch {
      /* Audio may be unavailable in browser privacy modes. */
    }
  }, [game, profile.audio]);
  const sound = () =>
    setProfile((p) => {
      const n = { ...p, audio: !p.audio };
      saveProfile(n);
      return n;
    });
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="ambient" aria-hidden="true" />
      <header className="site-header relative z-10">
        <a
          className="wordmark"
          href="/"
          onClick={(e) => {
            e.preventDefault();
            if (!game || game.status === "complete") setGame(null);
            else leave();
          }}
          aria-label="Rift Rarity home"
        >
          <span className="mark">◈</span>
          <span>
            LILLION <em>THE GAME</em>
          </span>
        </a>
        <div className="header-right">
          <span className="pill">
            <span className="glow-dot" /> LEAGUE LEGIT GAME
          </span>
          <button
            className="quiet-btn"
            type="button"
            aria-pressed={profile.audio}
            onClick={sound}
          >
            ♪ Sound {profile.audio ? "on" : "off"}
          </button>
        </div>
      </header>
      <main id="main" className="shell relative z-10">
        {errors.length ? (
          <section className="results-hero">
            <h1>Content error</h1>
            <p>{errors[0]}</p>
          </section>
        ) : !game ? (
          <Home profile={profile} onPlay={start} />
        ) : game.status === "complete" ? (
          <Results
            key={game.id}
            game={game}
            onReplay={start}
            onHome={() => setGame(null)}
          />
        ) : (
          <Game
            key={game.id}
            game={game}
            onAnswer={onAnswer}
            onSkip={() => onAnswer("")}
            onNext={next}
            onLeave={leave}
          />
        )}
      </main>
      <footer className="footer">
        RIFT RARITY <span>·</span> Unofficial fan-made experience. Not endorsed
        by Riot Games. Scores and progress are saved on this device.
      </footer>
    </>
  );
}
