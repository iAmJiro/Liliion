import {Component,useCallback,useEffect,useRef,useState} from 'react';
import {questionBankFor} from './data/content.js';
import {loadProfile,saveProfile,completeRun} from './storage.js';
import {levelFor} from './engine.js';
import {MODES,newExpedition,settle,nextQuestion,finishRun} from './session.js';
import Home from './components/Home.jsx';
import Game from './components/Game.jsx';
import Results from './components/Results.jsx';
import {Codex,Journal} from './components/Knowledge.jsx';
import Icon from './components/Icon.jsx';

class ErrorBoundary extends Component {
  state={error:null};
  static getDerivedStateFromError(error){return {error};}
  render(){if(this.state.error)return <main className="fatal-error"><Icon name="info" size={42}/><h1>Something interrupted the expedition.</h1><p>Your saved records have not been deleted. Reload the page to try again.</p><button className="button button-primary" onClick={()=>window.location.reload()}>Reload game</button><details><summary>Error details</summary><pre>{String(this.state.error.message)}</pre></details></main>;return this.props.children;}
}
function readChallenge(){
  if(typeof window==='undefined')return null;
  const params=new URLSearchParams(window.location.search);
  const seed=params.get('challenge');
  const category=params.get('category')||'all';
  const bankVersion=params.get('v');
  if(!seed||seed.length>120||!['all','champions','items','map'].includes(category)||!questionBankFor(bankVersion))return null;
  return {seed,category,bankVersion};
}
const mysteryModes=MODES.filter(mode=>mode!=='daily');

function GameApp(){
  const [category,setCategory]=useState('all');
  const [profile,setProfile]=useState(loadProfile),[game,setGame]=useState(null),[page,setPage]=useState('dive'),[help,setHelp]=useState(false),[confirmLeave,setConfirmLeave]=useState(false),[storageError,setStorageError]=useState(false),[challenge,setChallenge]=useState(readChallenge);
  const audioContext=useRef(null),lastSound=useRef(''),dialogRef=useRef(null),lastFocused=useRef(null);
  useEffect(()=>{setStorageError(!saveProfile(profile));},[profile]);
  useEffect(()=>{if(game?.status==='complete')setProfile(p=>completeRun(p,game));},[game]);
  useEffect(()=>{if(!help&&!confirmLeave)return;lastFocused.current=document.activeElement;const dialog=dialogRef.current;dialog?.showModal();return()=>{dialog?.close();lastFocused.current?.focus?.();};},[help,confirmLeave]);
  useEffect(()=>{if(!game||game.status==='complete')return;const beforeUnload=e=>{e.preventDefault();e.returnValue='';};window.addEventListener('beforeunload',beforeUnload);return()=>window.removeEventListener('beforeunload',beforeUnload);},[game?.status]);
  const onAnswer=useCallback((value,timedOut=false)=>{const now=performance.now();setGame(g=>settle(g,value,{now,timedOut}));},[]);
  function start(mode,options={}){
    const {previousMode,...settings}=options;
    const mystery=mode==='mystery';
    const choices=mystery ? mysteryModes.filter(candidate=>candidate!==previousMode) : null;
    const selected=mystery ? choices[Math.floor(Math.random()*choices.length)] : mode;
    const expedition=newExpedition(selected,{category,...settings,now:performance.now()});
    setPage('dive');
    setGame({...expedition,mystery,previousBest:profile.bests[selected]||0});
    window.scrollTo({top:0,behavior:'instant'});
  }
  function next(){
    const now=performance.now();
    setGame(g=>nextQuestion(g,{now}));
    window.scrollTo({top:0,behavior:'instant'});
  }
  function go(pageName){if(game&&game.status!=='complete'){setConfirmLeave(true);return;}setGame(null);setPage(pageName);window.scrollTo({top:0,behavior:'instant'});}
  function leave(){setConfirmLeave(false);setGame(null);setPage('dive');window.scrollTo({top:0,behavior:'instant'});}
  function surface(){setGame(g=>finishRun(g));}
  useEffect(()=>{
    if(!profile.audio||game?.status!=='revealing')return;const key=game.id+':'+game.log.length;if(lastSound.current===key)return;lastSound.current=key;
    try{audioContext.current??=new(window.AudioContext||window.webkitAudioContext)();const ctx=audioContext.current;ctx.resume().catch(()=>{});const oscillator=ctx.createOscillator(),volume=ctx.createGain();oscillator.type='sine';oscillator.frequency.setValueAtTime(game.last.correct?400+(game.last.rewardTier??game.last.tier)*90:210,ctx.currentTime);volume.gain.setValueAtTime(.035,ctx.currentTime);volume.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+.22);oscillator.connect(volume);volume.connect(ctx.destination);oscillator.start();oscillator.stop(ctx.currentTime+.22);}catch{/* Optional sound is never required to play. */}
  },[game,profile.audio]);
  const inRun=game&&game.status!=='complete';
  return <><a className="skip-link" href="#main">Skip to game</a><div className="ambient" aria-hidden="true"/><header className={`site-header${inRun?' in-game':''}`}><div className="header-inner"><button className="wordmark" onClick={()=>go('dive')} aria-label="Rift Rarity home"><span className="brand-icon"><Icon name="gem" size={25}/></span><span>RIFT<span>RARITY</span></span></button><nav aria-label="Main navigation">{[['dive','compass','Play'],['journal','book','Journal'],['codex','search','Codex']].map(([id,icon,label])=><button key={id} aria-current={!game&&page===id?'page':undefined} className={!game&&page===id?'active':''} onClick={()=>go(id)} disabled={Boolean(inRun&&id!=='dive')}><Icon name={icon} size={16}/>{label}</button>)}</nav><div className="header-tools"><button className="icon-button" aria-label={profile.audio?'Turn sound off':'Turn sound on'} aria-pressed={profile.audio} onClick={()=>setProfile(p=>({...p,audio:!p.audio}))}><Icon name={profile.audio?'volume':'mute'} size={19}/></button><button className="icon-button help-button" aria-label="How to play" onClick={()=>setHelp(true)}><Icon name="info" size={19}/></button><span className="level-chip"><Icon name="spark" size={14}/>LVL {levelFor(profile.xp)}</span></div></div></header>
    <main id="main" className="shell" tabIndex={-1}>{storageError&&<div className="storage-warning" role="status">Your browser is blocking saved progress. You can play, but this session may not be saved.</div>}{game?(game.status==='complete'?<Results key={game.id} game={game} onReplay={start} onHome={()=>go('dive')} onJournal={()=>go('journal')}/>:<Game key={game.id} game={game} onAnswer={onAnswer} onSkip={()=>onAnswer('')} onNext={next} onLeave={()=>setConfirmLeave(true)} onSurface={surface}/>):page==='codex'?<Codex/>:page==='journal'?<Journal profile={profile} onPlay={start}/>:<Home profile={profile} category={category} onCategoryChange={setCategory} onPlay={start} onJournal={()=>go('journal')} challenge={challenge} onDismissChallenge={()=>setChallenge(null)}/>}</main>
    <footer className="site-footer"><span><Icon name="gem" size={15}/>RIFT RARITY</span><p>Unofficial League of Legends fan game. Progress is saved on this device.</p><button className="text-button" onClick={()=>setHelp(true)}>How to play<Icon name="info" size={15}/></button></footer>
    {(help||confirmLeave)&&<dialog className="game-dialog" aria-labelledby="dialog-title" ref={dialogRef} onCancel={e=>{e.preventDefault();setHelp(false);setConfirmLeave(false);}} onClick={e=>{if(e.target===e.currentTarget){setHelp(false);setConfirmLeave(false);}}}><button className="icon-button dialog-close" aria-label="Close dialog" onClick={()=>{setHelp(false);setConfirmLeave(false);}}><Icon name="close"/></button>{confirmLeave?<><h2 id="dialog-title">Leave this expedition?</h2><p>This unfinished run won't be saved. Your previous records and relics are safe.</p><div className="dialog-actions"><button className="button button-secondary" onClick={leave}>Leave run</button><button className="button button-primary" autoFocus onClick={()=>setConfirmLeave(false)}>Keep diving</button></div></>:<><h2 id="dialog-title">How to play</h2><ol className="how-to-list"><li><b>Read the rule.</b><span>Name one champion, item or map feature that fits the question.</span></li><li><b>Make your discovery.</b><span>Rarer answers earn more depth in most modes. In Common Wins the payouts reverse. Correct streaks add up to a ×1.4 bonus.</span></li><li><b>Spelling should be easy.</b><span>Aliases are accepted. Select a close spelling to correct a typo. If a guess is wrong, you can try again while the clock runs.</span></li><li><b>Pick a mode.</b><span>Try the niche questions in Deep Cuts, share one minute across Time Bank, or let Mystery Dive pick a mode. Each mode has its own best depth.</span></li></ol><p className="dialog-note">Answer rarity uses preset tiers. Your records are saved on this device.</p><button className="button button-primary" autoFocus onClick={()=>setHelp(false)}>Got it<Icon name="check"/></button></>}</dialog>}
  </>;
}
export default function App(){return <ErrorBoundary><GameApp/></ErrorBoundary>;}
