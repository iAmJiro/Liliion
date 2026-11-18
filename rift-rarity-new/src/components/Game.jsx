import {useEffect,useMemo,useState} from 'react';
import {norm} from '../engine.js';
import Ocean from './Ocean.jsx';
const MODE_NAMES={classic:'CLASSIC DIVE',daily:'DAILY SEVEN',endless:'ENDLESS ABYSS'};
const ICONS=['●','◆','✦','✧','✹'];
const COLORS=['#a8bebf','#60be91','#69a6e2','#c690e7','#eccd7c'];

function Game({game,onAnswer,onSkip,onNext,onLeave}){
  const [input,setInput]=useState('');
  const [now,setNow]=useState(Date.now());
  const question=game.questions[game.index];
  useEffect(()=>{setInput('');setNow(Date.now());},[game.index,game.deadline]);
  useEffect(()=>{
    if(game.status!=='answering')return;
    const tick=()=>{const time=Date.now();setNow(time);if(time>=game.deadline)onAnswer('',true);};
    const timer=setInterval(tick,70);
    return ()=>clearInterval(timer);
  },[game.deadline,game.status,onAnswer]);
  const ms=game.status==='answering'?Math.max(0,game.deadline-now):0;
  const percent=game.mode==='endless'?(game.index%10)*10:(game.index/game.questions.length)*100;
  const suggestions=useMemo(()=>input.trim()?question.answers.filter(a=>norm(a.name).startsWith(norm(input))).slice(0,3):[],[input,question]);
  return <section id="game-screen" className="screen" aria-label="Current expedition">
    <div className="game-topline"><button className="quiet-btn" onClick={onLeave}>← Return to shore</button><span>{MODE_NAMES[game.mode]}</span><span>QUESTION {game.index+1} / {game.mode==='endless'?'∞':game.questions.length}</span></div>
    <div className="game-layout"><Ocean game={game}/><div className="quiz-panel"><div className="question-top"><span>{question.category.toUpperCase()}</span><span>{String(game.index+1).padStart(2,'0')} / {game.mode==='endless'?'∞':String(game.questions.length).padStart(2,'0')}</span></div>
    <div className="progress-track"><div style={{width:`${percent}%`}}/></div><h2 className="question-text">{question.prompt}</h2>
    <div className="timer-row"><span>TIME REMAINING</span><strong>{(ms/1000).toFixed(1)}s</strong></div><div className="timer-track"><div style={{width:`${ms/25000*100}%`,background:ms<5000?'#e46b6b':undefined}}/></div>
    <form id="answer-form" onSubmit={e=>{e.preventDefault();if(input.trim())onAnswer(input.trim());}}><label htmlFor="answer">YOUR ANSWER</label><input id="answer" autoComplete="off" maxLength="70" spellCheck="false" autoCapitalize="words" placeholder="Type a champion, item or place…" value={input} onChange={e=>setInput(e.target.value)} disabled={game.status!=='answering'} required/><div className="suggestions" role="status" aria-live="polite">{game.status==='answering'&&suggestions.length?'Possible matches: '+suggestions.map(x=>x.name).join(' · '):''}</div><button className="primary-button submit-button" type="submit" disabled={game.status!=='answering'}>Dive with answer <span>↘</span></button></form>
    <div className="question-bottom"><button className="text-button" type="button" disabled={game.status!=='answering'} onClick={onSkip}>Skip this question</button><span className="hint">Rare answers descend further</span></div>
    {game.status==='revealing'&&<div className="feedback" role="status" aria-live="polite"><div className="feedback-icon" style={{color:game.last.tier?COLORS[game.last.tier-1]:'#a8bec1'}}>{game.last.tier?ICONS[game.last.tier-1]:'◇'}</div><p className="feedback-kicker">{game.last.tier?`${game.last.rarity.toUpperCase()} DISCOVERY`:'NO DISCOVERY'}</p><h3>{game.last.gain?`+${game.last.gain.toLocaleString('en-NZ')} metres`:game.last.rarity}</h3><p>{game.last.detail}</p><button className="primary-button" onClick={onNext}>{(game.mode==='endless'&&game.lives<=0)||(game.mode!=='endless'&&game.index+1===game.questions.length)?'Finish expedition →':'Continue descent →'}</button></div>}
    </div></div>
  </section>;
}

export default Game;
