import {useEffect,useId,useState} from 'react';
import {BIOMES,biomeFor,formatDepth} from '../engine.js';
import Icon from './Icon.jsx';

export function Riftling({className=''}) {
  const id=useId().replace(/:/g,'');
  return <svg className={`riftling ${className}`} viewBox="0 0 260 270" fill="none" aria-hidden="true">
    <defs><radialGradient id={`${id}bell`} cx=".34" cy=".25" r=".8"><stop stopColor="#e5feff"/><stop offset=".35" stopColor="#b1fff2"/><stop offset=".75" stopColor="#53c9c7"/><stop offset="1" stopColor="#257593"/></radialGradient><linearGradient id={`${id}tail`} x1="130" y1="150" x2="130" y2="270" gradientUnits="userSpaceOnUse"><stop stopColor="#8afae3"/><stop offset="1" stopColor="#51b7dd" stopOpacity=".08"/></linearGradient><radialGradient id={`${id}glow`}><stop stopColor="#b4fff2" stopOpacity=".3"/><stop offset="1" stopColor="#85ffe9" stopOpacity="0"/></radialGradient></defs>
    <ellipse cx="130" cy="128" rx="126" ry="112" fill={`url(#${id}glow)`}/>
    <g className="tentacles" stroke={`url(#${id}tail)`} strokeWidth="7" strokeLinecap="round"><path d="M86 151c-26 36 35 46 8 90"/><path d="M112 158c36 35-27 63 4 97"/><path d="M147 157c-23 33 33 57 6 95"/><path d="M176 152c29 27-25 56-3 83"/></g>
    <path d="M59 139c0-52 26-86 71-86s71 34 71 86c0 9-9 21-19 21-11 0-12-10-21-10-9 0-13 14-31 14s-22-14-31-14c-10 0-12 10-22 10-10 0-18-12-18-21Z" fill={`url(#${id}bell)`}/>
    <path d="M71 119c3-29 20-50 41-54" stroke="#edfffb" strokeWidth="5" strokeLinecap="round" opacity=".7"/>
    <ellipse cx="107" cy="124" rx="6" ry="9" fill="#092e49"/><ellipse cx="153" cy="124" rx="6" ry="9" fill="#092e49"/><circle cx="109" cy="121" r="2" fill="white"/><circle cx="155" cy="121" r="2" fill="white"/><path d="M123 137q7 7 14 0" stroke="#1a586a" strokeWidth="3" strokeLinecap="round"/>
    <ellipse cx="91" cy="137" rx="8" ry="4" fill="#ffe2d3" opacity=".65"/><ellipse cx="169" cy="137" rx="8" ry="4" fill="#ffe2d3" opacity=".65"/>
    <path d="m115 48 15-14 15 14-15 6-15-6Z" fill="#d7ef8b"/><path d="m130 34 0 20" stroke="#f8ffd9" strokeWidth="2"/>
  </svg>;
}

export default function Ocean({depth=0,gain=0,eventKey=0,hero=false}) {
  const biome=biomeFor(depth), next=BIOMES.find(b=>b.min>depth);
  const [diving,setDiving]=useState(false);
  useEffect(()=>{if(!gain){setDiving(false);return;}setDiving(true);const id=setTimeout(()=>setDiving(false),1300);return()=>clearTimeout(id);},[eventKey,gain]);
  const range=next?next.min-biome.min:2000;
  const percent=Math.min(100,Math.max(0,(depth-biome.min)/range*100));
  return <div className={`ocean-scene ${hero?'ocean-hero':''} ${diving?'is-diving':''}`} data-biome={biome.key}>
    <div className="ocean-grain"/><div className="light-beam beam-one"/><div className="light-beam beam-two"/>
    <svg className="ocean-landscape" aria-hidden="true" viewBox="0 0 650 660" preserveAspectRatio="xMidYMax slice"><g fill="#103e4e" opacity=".65"><path d="M0 660V399l58-21 27 69 54-20 21 233Z"/><path d="M650 660V320l-56 37-20 98-46-14-22 219Z"/><path d="M177 662V490h39v-35h81v27h30v180Zm25-104h30v-47h-30Zm52 0h34v-47h-34Z"/></g><path d="M0 660v-99q67-73 160 13t160 9 176-32 154-31v140Z" fill="#0a293b"/><g stroke="#245a60" strokeWidth="9" strokeLinecap="round" fill="none"><path d="M50 626c-29-35 20-57-4-89m0 49-19-20m21 1 19-22M573 627c18-39-10-53 12-100m-4 34 23-23m-25 47-21-25"/></g><g fill="#76d5cf" opacity=".45"><path d="m95 250 12-5-3 5 3 5-12-5Zm35 14 16-5-3 5 3 5-16-5Zm319 99 16-6-4 6 4 6-16-6Zm-27 14 12-4-2 4 2 4-12-4Z"/></g></svg>
    <div className="sea-dust" aria-hidden="true">{Array.from({length:18},(_,i)=><span key={i} style={{'--x':`${(i*43+13)%100}%`,'--delay':`${-(i*1.7)}s`,'--duration':`${9+i%7}s`,'--size':`${2+i%3}px`}}/>)}</div>
    <div className="ocean-top"><span className="live-dot"/>{hero?'YOUR NEXT ADVENTURE':biome.name.replaceAll('_',' ')}<span className="coordinates">RFT / 07</span></div>
    <div className="depth-ruler" aria-hidden="true">{[0,1,2,3,4].map((i)=><span key={i}><i/>{(biome.min+i*250).toLocaleString()}</span>)}</div>
    <div className="riftling-position"><Riftling/>{hero&&<div className="creature-caption"><span>MEET YOUR DIVE BUDDY</span><b>Little creature. Big curiosity.</b></div>}</div>
    {diving&&<div className="depth-popup" key={eventKey}>+{gain.toLocaleString()} m<Icon name="down" size={24}/></div>}
    {hero?<><div className="scene-sticker"><Icon name="gem" size={18}/><div><small>MYTHIC KNOWLEDGE</small><b>Discover the unexpected</b></div></div><div className="scene-caption"><span>01 — SUNLIT SHOALS</span><Icon name="waves" size={22}/></div></>:<div className="depth-card"><div><p>EXPEDITION DEPTH</p><strong data-testid="depth-value" aria-live="polite">{depth.toLocaleString()}<small>m</small></strong></div><div className="milestone-caption"><span>{next?`Next: ${next.name.toLowerCase()}`:'The deep is yours'}</span><span>{next?formatDepth(next.min):'∞'}</span></div><div className="milestone-track"><i style={{width:`${percent}%`}}/></div></div>}
  </div>;
}
