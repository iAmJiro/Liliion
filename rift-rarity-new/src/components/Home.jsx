import {useState} from 'react';
import {BIOMES,BASE_DEPTH,TIER_NAMES,formatDepth,levelFor} from '../engine.js';
import {CONTENT_META,CATALOG,QUESTIONS} from '../data/content.js';
import Icon from './Icon.jsx';
import Ocean from './Ocean.jsx';

export const CATEGORY_LABELS={all:'All categories',champions:'Champions',items:'Items',map:'The Rift'};
export const MODE_NAMES={classic:'Classic Dive',daily:'Daily Seven',endless:'Endless Abyss',practice:'Practice'};
export const categoryIcon={all:'compass',champions:'sword',items:'gem',map:'map'};
export function CategoryPicker({value,onChange,compact=false}) {
  return <div className={`category-picker ${compact?'compact':''}`} role="group" aria-label="Question category">{Object.entries(CATEGORY_LABELS).map(([key,name])=><button key={key} className={value===key?'selected':''} aria-pressed={value===key} onClick={()=>onChange(key)}><Icon name={categoryIcon[key]} size={16}/>{name}</button>)}</div>;
}
export function RarityLegend() {
  return <div className="rarity-legend">{TIER_NAMES.map((name,i)=><div className={`rarity-item tier-${i+1}`} key={name}><span className="rarity-dot"/><span>{name}</span><b>{BASE_DEPTH[i]}<small>m</small></b></div>)}</div>;
}

export default function Home({profile,onPlay,onCodex,onJournal,challenge,onDismissChallenge}) {
  const [category,setCategory]=useState('all');
  return <section id="home-screen" className="screen">
    {challenge&&<div className="challenge-banner"><Icon name="flag"/><div><b>A friend has challenged you.</b><span>Same seven questions. Can you go deeper?</span></div><button className="button button-small" onClick={()=>onPlay('classic',{category:challenge.category,seed:challenge.seed})}>Accept challenge<Icon name="arrow" size={16}/></button><button className="icon-button" onClick={onDismissChallenge} aria-label="Dismiss challenge"><Icon name="close"/></button></div>}
    <div className="hero-grid"><div className="hero-copy"><p className="eyebrow"><span className="live-dot"/> A LEAGUE OF LEGENDS KNOWLEDGE EXPEDITION</p><h1>You know the Rift.<br/><em>But how deep?</em></h1><p className="hero-description">Your most unexpected answers are your best ones. Explore the deep with champions, items and secrets of the Rift.</p><div className="hero-actions"><button className="button button-primary" onClick={()=>onPlay('classic',{category})}>Let's dive in<Icon name="arrow"/></button><button className="button button-quiet" onClick={onCodex}>Explore the Codex<Icon name="book" size={18}/></button></div><div className="hero-metrics"><div><b>7</b><span>questions a dive</span></div><div><b>25<small>s</small></b><span>to find your answer</span></div><div><b>5</b><span>rarity tiers</span></div></div><div className="spelling-promise"><Icon name="check" size={15}/><span>Typo-friendly. Nicknames welcome. Curiosity rewarded.</span></div></div><Ocean hero/></div>
    <section className="expedition-select"><div className="section-heading"><div><p className="eyebrow">PICK YOUR NEXT ADVENTURE</p><h2>Choose your descent</h2></div><CategoryPicker value={category} onChange={setCategory}/></div>
    <div className="mode-grid">{[
      {id:'classic',icon:'compass',label:'Classic Dive',text:'Seven questions. One expedition. Make every answer count.',badge:'THE ORIGINAL',foot:'7 questions · 25s each'},
      {id:'daily',icon:'clock',label:'Daily Seven',text:'The same daily questions for everyone. Bring a friend.',badge:'NEW EACH UTC DAY',foot:'All categories · repeatable'},
      {id:'endless',icon:'infinity',label:'Endless Abyss',text:'Three lives. An open ocean. How long can you keep diving?',badge:'PUSH YOUR LIMIT',foot:'3 lives · surface anytime'},
      {id:'practice',icon:'book',label:'Practice',text:'Take your time. Learn the names. Find your next rare answer.',badge:'NO PRESSURE',foot:'7 questions · no timer'}
    ].map(m=><button className={`mode-card mode-${m.id}`} key={m.id} onClick={()=>onPlay(m.id,{category})}><div className="mode-card-top"><span className="mode-icon"><Icon name={m.icon} size={25}/></span><span className="mode-badge">{m.badge}</span></div><h3>{m.label}</h3><p>{m.text}</p><div className="mode-card-bottom"><span>{m.foot}</span><Icon name="arrow" size={18}/></div></button>)}</div></section>
    <div className="rarity-panel"><div><Icon name="spark"/><h3>Uncommon knowledge.<br/><span>Extraordinary depths.</span></h3></div><RarityLegend/></div>
    <section className="journey-preview"><div className="section-heading"><div><p className="eyebrow">YOUR STORY SO FAR</p><h2>A little deeper, every time.</h2></div><button className="text-button" onClick={onJournal}>Expedition journal<Icon name="arrow" size={16}/></button></div><div className="stats-grid">{[
      ['trophy','PERSONAL BEST',formatDepth(Math.max(profile.bests.classic||0,profile.bests.endless||0,profile.bests.daily||0))],['compass','EXPEDITIONS',profile.runs],['spark','EXPLORER LEVEL',String(levelFor(profile.xp)).padStart(2,'0')],['gem','RELICS FOUND',`${profile.relics.length} / ${BIOMES.length}`]
    ].map(([icon,label,value])=><div className="stat-card" key={label}><Icon name={icon} size={21}/><span>{label}</span><strong>{value}</strong></div>)}</div></section>
    <div className="content-note"><span>{CATALOG.filter(e=>e.category==='champions').length} champions · {CATALOG.filter(e=>e.category==='items').length} items · {QUESTIONS.length} questions</span><span>Bundled patch {CONTENT_META.patch} · No esports</span></div>
  </section>;
}
