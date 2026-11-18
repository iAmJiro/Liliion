import {BIOMES,levelFor,formatDepth} from '../engine.js';

function Home({profile,onPlay}){
  return <section id="home-screen" className="screen">
    <div className="hero"><div className="hero-copy">
      <p className="eyebrow">THE DEEP REMEMBERS EVERYTHING</p>
      <h1>How deep does your <i>knowledge</i> go?</h1>
      <p className="intro">Seven questions. Twenty-five seconds each. Name champions, items, and landmarks. The rarer your knowledge, the deeper you dive.</p>
      <div className="hero-buttons"><button className="primary-button" onClick={()=>onPlay('classic')}>Begin expedition <span aria-hidden="true">↗</span></button><button className="secondary-button" onClick={()=>onPlay('daily')}>◷ Daily Seven</button></div>
      <div className="hero-sub">UNOFFICIAL LEAGUE OF LEGENDS TRIVIA · CHAMPIONS / ITEMS / MAP</div>
    </div><div className="hero-scene" aria-hidden="true"><div className="hero-light"/><div className="hero-moon">✦</div><div className="hero-ruins ruins-left">▥</div><div className="hero-ruins ruins-right">▥</div><div className="hero-riftling">✧</div><div className="hero-waterline"/><div className="hero-deep">THE ABYSS AWAITS</div></div></div>
    <div className="section-head"><h2>Choose your descent</h2><span>THREE WAYS TO EXPLORE</span></div>
    <div className="mode-grid">{[
      ['classic','◈','Classic Dive','Seven curated questions. Chase your personal best and discover new depths.','7 QUESTIONS'],
      ['daily','◷','Daily Seven','The same question selection each day. Compare scores with your friends.','SAME DAILY QUESTIONS'],
      ['endless','∞','Endless Abyss','Three lives. See how far you can descend before you surface.','3 LIVES']
    ].map(([mode,icon,title,desc,foot])=><button className="mode-card" key={mode} onClick={()=>onPlay(mode)}><span className="mode-icon">{icon}</span><span className="mode-name">{title}</span><span className="mode-desc">{desc}</span><span className="mode-foot">{foot}<b>→</b></span></button>)}</div>
    <div className="section-head"><h2>Your expedition journal</h2><span>YOUR STORY BELOW THE SURFACE</span></div>
    <div className="stats-grid">{[['BEST CLASSIC',formatDepth(profile.bests.classic)],['EXPEDITIONS',profile.runs],['EXPLORER LEVEL',levelFor(profile.xp)],['DISCOVERIES',`${profile.relics.length} / ${BIOMES.length}`]].map(([key,val])=><div className="small-stat" key={key}><span>{key}</span><strong>{val}</strong></div>)}</div>
    <div className="journal-grid"><div className="journal-panel"><div className="section-head inset"><h3>Relic collection</h3><span>DEPTH MILESTONES</span></div>{BIOMES.map(b=><div className={'relic-row'+(profile.relics.includes(b.key)?'':' locked')} key={b.key}><span>{profile.relics.includes(b.key)?'✦':'◇'} {b.relic}</span><b>{profile.relics.includes(b.key)?'DISCOVERED':formatDepth(b.min)}</b></div>)}</div>
    <div className="journal-panel"><div className="section-head inset"><h3>Recent expeditions</h3><span>LOCAL HISTORY</span></div>{profile.history.length?profile.history.slice(0,5).map((entry,i)=><div className="history-row" key={i}><span>{entry.mode.toUpperCase()} · {entry.date}</span><strong>{formatDepth(entry.depth)}</strong></div>):<p className="empty">Your first expedition is waiting. The deep keeps a record of every journey.</p>}</div></div>
  </section>;
}

export default Home;
