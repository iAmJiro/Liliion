import {useMemo,useState} from 'react';
import {CATALOG,CONTENT_META} from '../data/content.js';
import {BIOMES,BASE_DEPTH,TIER_NAMES,formatDepth,levelFor,norm} from '../engine.js';
import {CategoryPicker,MODE_NAMES} from './Home.jsx';
import Icon from './Icon.jsx';

const portraits = import.meta.env
  ? import.meta.glob('../assets/*.png', { eager: true, import: 'default', query: '?url&no-inline' })
  : {};

export function Avatar({entity,small=false}) {
  const [failedPortrait,setFailedPortrait]=useState(null);
  const filename=entity?.image?.split('/').at(-1);
  const portrait=portraits[`../assets/${filename}`];
  const initials=entity?.name?.split(/\s+/).slice(0,2).map(word=>word[0]).join('');

  return <span className={`entity-avatar ${small?'small':''} tier-${entity?.tier||1}`}>
    {portrait&&portrait!==failedPortrait
      ? <img src={portrait} alt="" loading="lazy" onError={()=>setFailedPortrait(portrait)}/>
      : entity?.category==='map'
        ? <Icon name="map" size={small?16:23}/>
        : <span aria-hidden="true">{initials||'◇'}</span>}
  </span>;
}

export function Codex() {
  const [query,setQuery]=useState(''),[category,setCategory]=useState('all'),[limit,setLimit]=useState(48);
  const entries=useMemo(()=>{const q=norm(query);return CATALOG.filter(e=>(category==='all'||e.category===category)&&(!q||norm(e.name).includes(q)||(e.aliases||[]).some(a=>norm(a).includes(q)))).sort((a,b)=>a.name.localeCompare(b.name));},[query,category]);
  function changeCategory(value){setCategory(value);setLimit(48);}
  return <section className="screen knowledge-screen"><div className="page-intro"><h1>The Rift Codex</h1><p>Look up champions, items, Rift objectives, and the nicknames accepted during a dive.</p></div><div className="codex-toolbar"><div className="codex-search"><Icon name="search"/><label className="sr-only" htmlFor="codex-search">Search the Codex</label><input id="codex-search" placeholder="Search names or nicknames, like ‘bork’…" value={query} onChange={e=>{setQuery(e.target.value);setLimit(48);}}/></div><CategoryPicker compact value={category} onChange={changeCategory}/></div><div className="catalogue-summary"><span>{entries.length} discoveries in this view</span><span>Game data: patch {CONTENT_META.patch}</span></div><div className="codex-grid">{entries.slice(0,limit).map(entity=><article className="codex-entry" key={entity.id}><Avatar entity={entity}/><div><h2>{entity.name}</h2><p>{entity.category==='map'?'The Rift':entity.category==='champions'?'Champion':'Item'}<span> · </span><span className={`tier-text tier-${entity.tier}`}>{TIER_NAMES[entity.tier-1]} · {BASE_DEPTH[entity.tier-1]} m</span></p>{entity.aliases?.length>0&&<small>Also accepts: {entity.aliases.slice(0,4).join(', ')}</small>}</div></article>)}</div>{entries.length===0&&<div className="empty-state"><Icon name="search" size={36}/><h2>No name matches yet.</h2><p>Try fewer letters, another spelling, or a different category.</p></div>}{entries.length>limit&&<button className="button button-secondary load-more" onClick={()=>setLimit(n=>n+48)}>Show more discoveries<Icon name="down" size={16}/></button>}<div className="scope-note"><Icon name="info" size={18}/><p>Rarity bands are editorial game scores, not live pick rates. The Codex recognises names; each question separately checks its stated rule. Items use the bundled Summoner's Rift shop snapshot. New patches can change stats or availability.</p></div></section>;
}

export function Journal({profile,onPlay}) {
  const level=levelFor(profile.xp),nextXp=150*level*level,previousXp=150*(level-1)*(level-1);
  const achievements=[
    {title:'First bubbles',description:'Finish your first expedition.',unlocked:profile.runs>=1,icon:'waves'},
    {title:'Rift regular',description:'Finish 10 expeditions.',unlocked:profile.runs>=10,icon:'compass'},
    {title:'Deep thinker',description:'Reach 2,500 m in a timed run.',unlocked:Math.max(profile.bests.classic||0,profile.bests.daily||0,profile.bests.endless||0)>=2500,icon:'spark'},
    {title:'Into the abyss',description:'Reach 6,000 m in a timed run.',unlocked:Math.max(profile.bests.classic||0,profile.bests.daily||0,profile.bests.endless||0)>=6000,icon:'gem'}
  ];
  return <section className="screen knowledge-screen"><div className="page-intro"><h1>Your expedition journal</h1><p>See your best depths, unlocked relics, and recent runs.</p></div><div className="explorer-card"><div className="level-medallion"><Icon name="compass" size={28}/><b>{level}</b></div><div><p className="eyebrow">LEVEL {level} EXPLORER</p><h2>{level>=10?'Keeper of the Deep':level>=5?'Abyssal Adventurer':level>=3?'Rift Explorer':'Curious Voyager'}</h2><div className="xp-track"><i style={{width:`${Math.min(100,(profile.xp-previousXp)/(nextXp-previousXp)*100)}%`}}/></div><span>{profile.xp.toLocaleString()} XP · {Math.max(0,nextXp-profile.xp).toLocaleString()} to next level</span></div><button className="button button-primary" onClick={()=>onPlay('classic')}>Keep exploring<Icon name="arrow"/></button></div>
    <div className="section-heading"><h2>Your depth records</h2><span className="subtle">SAVED ON THIS DEVICE</span></div><div className="stats-grid">{Object.entries(MODE_NAMES).map(([mode,name])=><div className="stat-card" key={mode}><span>{name.toUpperCase()}</span><strong>{formatDepth(profile.bests[mode]||0)}</strong></div>)}</div>
    <div className="journal-grid"><div className="journal-panel"><div className="section-heading"><h2>Relic collection</h2><span className="subtle">{profile.relics.length} / {BIOMES.length}</span></div>{BIOMES.map((b,i)=><div className={`relic-row ${profile.relics.includes(b.key)?'unlocked':''}`} key={b.key}><span className="relic-icon"><Icon name={profile.relics.includes(b.key)?'gem':'lock'}/></span><div><b>{b.relic}</b><span>{i===0?'Your first correct dive':`${formatDepth(b.min)} · ${b.name.toLowerCase()}`}</span></div>{profile.relics.includes(b.key)&&<Icon name="check" size={18}/>}</div>)}</div><div className="journal-panel"><div className="section-heading"><h2>Explorer badges</h2><span className="subtle">EARNED THROUGH PLAY</span></div>{achievements.map(a=><div className={`relic-row ${a.unlocked?'unlocked':''}`} key={a.title}><span className="relic-icon"><Icon name={a.unlocked?a.icon:'lock'}/></span><div><b>{a.title}</b><span>{a.description}</span></div>{a.unlocked&&<Icon name="check" size={18}/>}</div>)}</div></div>
    <div className="section-heading"><h2>Recent expeditions</h2><span className="subtle">LAST 12 RUNS</span></div>{profile.history.length?<div className="history-list">{profile.history.slice(0,12).map((row,i)=><div className="history-entry" key={row.id||`${row.date}-${i}`}><span className="history-icon"><Icon name={row.mode==='daily'?'clock':row.mode==='endless'?'infinity':'compass'}/></span><div><b>{MODE_NAMES[row.mode]||'Expedition'}</b><span>{row.date}</span></div><span className="history-correct">{row.correct||0} correct</span><strong>{formatDepth(row.depth)}</strong></div>)}</div>:<div className="empty-state"><Icon name="book" size={32}/><h3>No expeditions yet</h3><p>Your completed dives appear here.</p></div>}
  </section>;
}
