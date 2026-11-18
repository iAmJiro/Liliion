import {useEffect,useRef,useState} from 'react';
import {biomeFor,comboMultiplier} from '../engine.js';
const BUBBLES=Array.from({length:24},(_,i)=>({size:5+(i*7)%15,left:(i*37)%100,duration:4+i%6,delay:-(i*.43)}));

function Ocean({game}){
  const [diving,setDiving]=useState(false);
  const previous=useRef(game.depth);
  useEffect(()=>{
    if(game.depth<=previous.current){previous.current=game.depth;return;}
    previous.current=game.depth;setDiving(true);
    const timeout=setTimeout(()=>setDiving(false),1750);
    return ()=>clearTimeout(timeout);
  },[game.depth]);
  const biome=biomeFor(game.depth);
  return <div className="ocean-wrap"><div className={'ocean'+(diving?' is-diving':'')} data-biome={biome.key}>
    <div className="ocean-light"/><div className="ocean-bubbles">{BUBBLES.map((b,i)=><div key={i} className="bubble" style={{width:b.size,height:b.size,left:`${b.left}%`,animationDuration:`${b.duration}s`,animationDelay:`${b.delay}s`}}/>)}</div>
    <div className="depth-ticks" aria-hidden="true">0 —<br/>500 —<br/>1000 —<br/>1500 —<br/>2000 —</div>
    <div className="ocean-riftling" aria-hidden="true">✧</div><div className="ocean-ruin" aria-hidden="true">⌂</div><div className="ocean-bottom"/><div className="ocean-name">{biome.name}</div><div className="ocean-depth">{game.depth.toLocaleString('en-NZ')} <small>METRES</small></div><div className={'dive-message'+(diving?' show':'')} aria-hidden="true">+{game.last?.gain||0} m</div>
  </div><div className="ocean-info"><span>COMBO ×{comboMultiplier(game.streak).toFixed(2)}</span><span>{game.mode==='endless'?`♥ ${game.lives} LIVES`:`${Math.max(0,game.questions.length-game.index-(game.status==='revealing'?1:0))} REMAINING`}</span></div></div>;
}

export default Ocean;
