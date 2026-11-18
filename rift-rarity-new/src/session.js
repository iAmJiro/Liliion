import bank from './questions.json' with {type:'json'};
import {chooseQuestions,dailyKey,matchAnswer,award,biomeFor} from './engine.js';
function newExpedition(mode){
  const day=dailyKey();
  const seed=mode==='daily'?'rift-daily-'+day:Date.now()+'-'+Math.random();
  const questions=chooseQuestions(bank,seed,mode==='endless'?bank.length:7);
  return {id:`${Date.now()}-${Math.random()}`,mode,day,questions,index:0,depth:0,streak:0,peakCombo:1,correct:0,lives:3,log:[],status:'answering',deadline:Date.now()+25000,newRelics:[],last:null};
}
function settle(g,value,timedOut=false){
  if(!g||g.status!=='answering')return g;
  const question=g.questions[g.index];
  const matched=timedOut?null:matchAnswer(question,value);
  const a=matched?.answer||null;
  let depth=g.depth,streak=g.streak,correct=g.correct,peakCombo=g.peakCombo,lives=g.lives;
  const newRelics=[...g.newRelics];
  let gain=0,tier=0,rarity='Miss',detail='';
  if(a){
    streak++;correct++;
    const result=award(a,streak);
    gain=result.depth;tier=result.tier;rarity=result.tierName;
    detail=`${matched.corrected?`Spelling recognised: ${value} → ${a.name}. `:''}${a.name} · ${result.base} m base · ×${result.multiplier.toFixed(2)} combo`;
    depth+=gain;peakCombo=Math.max(peakCombo,result.multiplier);
    const biome=biomeFor(depth);
    if(!newRelics.includes(biome.key))newRelics.push(biome.key);
  }else{
    streak=0;if(g.mode==='endless')lives--;
    rarity=timedOut?'Time expired':value?'Unknown answer':'Skipped';
    detail=value&&!timedOut?`“${value}” is not in this question's curated answer set. No points lost.`:'No depth gained. Your combo has reset.';
  }
  return {...g,depth,streak,correct,peakCombo,lives,newRelics,status:'revealing',last:{question:question.prompt,answer:a?.name||value||'—',rarity,gain,tier,detail},log:[...g.log,{question:question.prompt,answer:a?.name||value||'—',rarity,gain,tier}]};
}
function nextQuestion(g){
  if(!g||g.status!=='revealing')return g;
  const next=g.index+1;
  if(g.mode==='endless'&&g.lives<=0)return {...g,status:'complete'};
  if(g.mode!=='endless'&&next>=g.questions.length)return {...g,status:'complete'};
  const questions=g.questions.slice();
  if(next>=questions.length)questions.push(...chooseQuestions(bank,'endless-'+Date.now()+'-'+Math.random(),bank.length));
  return {...g,questions,index:next,status:'answering',deadline:Date.now()+25000,last:null};
}


export {newExpedition,settle,nextQuestion};
