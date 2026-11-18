import {useState} from 'react';
import {BIOMES,formatDepth} from '../engine.js';
const MODE_NAMES={classic:'CLASSIC DIVE',daily:'DAILY SEVEN',endless:'ENDLESS ABYSS'};

function Results({game,onReplay,onHome}){
  const earned=50+game.correct*35+Math.min(250,Math.floor(game.depth/50));
  const [shareNote,setShareNote]=useState('');
  async function share(){
    const result=`RIFT RARITY ◈ ${game.mode==='daily'?'DAILY SEVEN '+game.day:MODE_NAMES[game.mode]}\n🌊 ${formatDepth(game.depth)}\n✦ ${game.correct}/${game.log.length} correct | Peak combo ×${game.peakCombo.toFixed(2)}\nCan you dive deeper than me?`;
    try{await navigator.clipboard.writeText(result);setShareNote('Result copied! Send it to a friend.');}
    catch{setShareNote('Clipboard unavailable. Select this result to copy: '+result);}
  }
  return <section id="result-screen" className="screen"><div className="results-hero"><p className="eyebrow">EXPEDITION COMPLETE</p><h1>{game.depth.toLocaleString('en-NZ')} <small>metres</small></h1><p>{game.newRelics.length?`Relic discovered: ${BIOMES.find(b=>b.key===game.newRelics[0])?.relic}.`:game.depth>=3500?'The abyss is beginning to know your name.':'Every dive brings a new discovery.'}</p><div className="results-kpis"><div><span>VALID ANSWERS</span><strong>{game.correct} / {game.log.length}</strong></div><div><span>BEST COMBO</span><strong>×{game.peakCombo.toFixed(2)}</strong></div><div><span>XP EARNED</span><strong>+{earned}</strong></div></div><div className="result-actions"><button className="primary-button" onClick={()=>onReplay(game.mode)}>Dive again ↗</button><button className="secondary-button" onClick={share}>Copy challenge</button><button className="secondary-button" onClick={onHome}>Return to shore</button></div><div className="share-note" role="status">{shareNote}</div></div><div className="results-detail"><h2>Expedition log</h2>{game.log.map((a,i)=><div className="answer-log" key={i}><div><span>{a.question}</span><strong>{a.answer}</strong></div><b>{a.gain?'+'+a.gain+' m':a.rarity}</b></div>)}</div></section>;
}

export default Results;
