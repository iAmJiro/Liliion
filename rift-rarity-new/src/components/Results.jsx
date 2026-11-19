import {useState} from 'react';
import {BIOMES,formatDepth} from '../engine.js';
import {earnedXp} from '../storage.js';
import {MODE_NAMES} from './Home.jsx';
import {Riftling} from './Ocean.jsx';
import Icon from './Icon.jsx';

export default function Results({game,onReplay,onHome,onJournal}) {
  const [shareText,setShareText]=useState(''),[copied,setCopied]=useState(false);
  async function share(){
    const url=new URL(window.location.href);url.search='';url.hash='';
    if(game.mode==='classic'){url.searchParams.set('challenge',game.seed);url.searchParams.set('category',game.category);url.searchParams.set('v',game.bankVersion);}
    const shareable=/^https?:$/.test(url.protocol)&&!['localhost','127.0.0.1','0.0.0.0'].includes(url.hostname);
    const text=`RIFT RARITY · ${MODE_NAMES[game.mode]}${game.mode==='daily'?' '+game.day:''}\n${formatDepth(game.depth)} below the surface\n${game.correct}/${game.log.length} correct · ×${game.peakCombo.toFixed(1)} best combo\n${game.log.map(a=>a.correct?'🟩':'⬜').join('')}\nCan you dive deeper?${shareable?'\n'+url.href:''}`;
    setShareText(text);try{await navigator.clipboard.writeText(text);setCopied(true);}catch{setCopied(false);}
  }
  return <section className="screen results-screen" data-testid="results"><div className="results-card"><div className="result-mascot"><Riftling/></div><p className="eyebrow">{MODE_NAMES[game.mode]}</p><h1>Expedition complete</h1><div className="final-depth">{game.depth.toLocaleString()}<span>metres</span></div>{game.correct===game.log.length&&game.log.length>0&&<p className="result-description">Perfect run</p>}<div className="result-stats"><div><span>CORRECT ANSWERS</span><strong>{game.correct}<small> / {game.log.length}</small></strong></div><div><span>BEST COMBO</span><strong>×{game.peakCombo.toFixed(1)}</strong></div><div><span>XP EARNED</span><strong>+{earnedXp(game)}</strong></div></div><div className="result-actions"><button className="button button-primary" onClick={()=>onReplay(game.mode,{category:game.category})}>Dive again<Icon name="arrow"/></button><button className="button button-secondary" onClick={share}><Icon name="link" size={18}/>{copied?'Copied!':'Share your dive'}</button><button className="button button-quiet" onClick={onHome}>Back to shore</button></div>{shareText&&<div className="share-result" role="status"><p>{copied?'Copied — send it to a friend.':'Select and copy your result below.'}</p><textarea readOnly aria-label="Shareable expedition result" value={shareText} onFocus={e=>e.target.select()}/></div>}</div>
    {game.newRelics.length>0&&<div className="relic-discovery"><Icon name="gem" size={25}/><div><b>Places you reached</b><span>{game.newRelics.map(k=>BIOMES.find(b=>b.key===k)?.relic).filter(Boolean).join(' · ')}</span></div><button className="text-button" onClick={onJournal}>View journal<Icon name="arrow" size={16}/></button></div>}
    <div className="section-heading"><h2>Answer log</h2></div><div className="answer-log-list">{game.log.map((answer,i)=><div className={`answer-log tier-${answer.tier||0}`} key={i}><span className="answer-log-number">{String(i+1).padStart(2,'0')}</span><span className={`answer-log-status ${answer.correct?'right':''}`}><Icon name={answer.correct?'check':'close'} size={18}/></span><div><span>{answer.question}</span><b>{answer.answer||'Skipped'}</b></div><div className="answer-log-score"><strong>{answer.gain?`+${answer.gain.toLocaleString()} m`:'—'}</strong><span>{answer.rarity}</span></div></div>)}</div>
  </section>;
}
