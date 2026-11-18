/** Pure game rules: no DOM and no browser dependencies. */
export const TIER_NAMES=['Common','Uncommon','Rare','Epic','Mythic'];
export const BASE_DEPTH=[100,200,350,550,800];
export const BIOMES=[
  {min:0,key:'shoals',name:'SUNLIT SHOALS',relic:'Pearl of the Shoals'},
  {min:1000,key:'temple',name:'SUNKEN TEMPLE',relic:'Temple Compass'},
  {min:2500,key:'forest',name:'ABYSSAL FOREST',relic:'Luminous Frond'},
  {min:4000,key:'trench',name:'VOID TRENCH',relic:'Voidglass Shard'},
  {min:6000,key:'celestial',name:'CELESTIAL DEEP',relic:'Starlit Crown'}
];
export const norm=s=>String(s??'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9]/g,'');
export function hashSeed(s){let n=2166136261;for(const c of String(s)){n^=c.charCodeAt(0);n=Math.imul(n,16777619)}return n>>>0}
export function mulberry32(seed){return function(){let t=seed+=0x6D2B79F5;t=Math.imul(t^t>>>15,t|1);t^=t+Math.imul(t^t>>>7,t|61);return ((t^t>>>14)>>>0)/4294967296}}
export function shuffle(list,random=Math.random){const a=[...list];for(let i=a.length-1;i>0;i--){let j=Math.floor(random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
export function chooseQuestions(bank,seed=Date.now(),count=7){const rng=mulberry32(hashSeed(seed));const categories=['champions','items','map'];const targets=count===7?{champions:3,items:2,map:2}:{};const chosen=[];const selected=new Set();for(const category of categories){for(const q of shuffle(bank.filter(q=>q.category===category),rng).slice(0,targets[category]||0)){chosen.push(q);selected.add(q.id)}}for(const q of shuffle(bank.filter(q=>!selected.has(q.id)),rng)){if(chosen.length>=count)break;chosen.push(q)}return shuffle(chosen,rng)}
export function validateBank(bank){const errors=[],ids=new Set();for(const q of bank){if(!q.id||ids.has(q.id))errors.push('Duplicate/empty id '+q.id);ids.add(q.id);if(!['champions','items','map'].includes(q.category))errors.push('Invalid category '+q.id);if(!q.prompt||!Array.isArray(q.answers)||!q.answers.length)errors.push('Empty question '+q.id);const seen=new Set();for(const a of q.answers||[]){const n=norm(a.name);if(!n||seen.has(n))errors.push('Duplicate/empty answer in '+q.id+': '+a.name);seen.add(n);if(!Number.isInteger(a.priorTier)||a.priorTier<1||a.priorTier>5)errors.push('Invalid tier in '+q.id)}}return errors}
/** Flexible punctuation and common aliases without accepting unrelated guesses. */
export const GLOBAL_ALIASES={
  'kaysa':'kaisa','kaisa':'kaisa','khazix':'khazix','chogath':'chogath','reksai':'reksai','velkoz':'velkoz','belveth':'belveth','kogmaw':'kogmaw','aurelionsol':'aurelionsol','jarvan4':'jarvaniv','j4':'jarvaniv','mf':'missfortune','tf':'twistedfate','lb':'leblanc','wukong':'wukong','monkeyking':'wukong',
  'nunu':'nunuandwillump','willump':'nunuandwillump','drmundo':'drmundo','mercs':'mercurystreads','zhonyas':'zhonyashourglass','rabadons':'rabadonsdeathcap','bork':'bladeoftheruinedking','botrk':'bladeoftheruinedking','ie':'infinityedge','ga':'guardianangel','pd':'phantomdancer','frozenheart':'frozenheart','bluebuff':'bluesentinel','redbuff':'redbrambleback','scuttle':'riftscuttler','scuttlecrab':'riftscuttler','baron':'baronnashor','herald':'riftherald'
};
/** Bounded edit-distance matcher. Exact spellings and known aliases always take precedence.
 * Only auto-correct unambiguous, close typos within eligible answers for this question.
 * Does not treat a semantically invalid champion as a valid answer. */
export function editDistance(a,b,max=2){
  if(Math.abs(a.length-b.length)>max)return max+1;
  let previous=Array.from({length:b.length+1},(_,i)=>i);
  for(let i=1;i<=a.length;i++){
    const current=[i];let lowest=i;
    for(let j=1;j<=b.length;j++){
      const cost=a[i-1]===b[j-1]?0:1;
      const value=Math.min(previous[j]+1,current[j-1]+1,previous[j-1]+cost);
      current.push(value);lowest=Math.min(lowest,value);
    }
    if(lowest>max)return max+1;
    previous=current;
  }
  return previous[b.length];
}
export function matchAnswer(question,input){
  const raw=norm(input);
  if(!raw)return null;
  const canonical=GLOBAL_ALIASES[raw]||raw;
  const answers=question.answers||[];
  for(const answer of answers){
    const named=norm(answer.name);
    if(named===canonical||named===raw)return {answer,corrected:false};
  }
  // Never autocorrect one-, two- or three-letter responses (e.g. "vi").
  if(canonical.length<4)return null;
  const maxDistance=canonical.length>=7?2:1;
  const candidates=answers.map(answer=>({answer,distance:editDistance(canonical,norm(answer.name),maxDistance)}))
    .filter(candidate=>candidate.distance<=maxDistance && candidate.distance/Math.max(canonical.length,norm(candidate.answer.name).length)<=0.25)
    .sort((a,b)=>a.distance-b.distance);
  if(!candidates.length || (candidates[1]&&candidates[1].distance===candidates[0].distance))return null;
  return {answer:candidates[0].answer,corrected:true};
}
export function resolveAnswer(question,input){return matchAnswer(question,input)?.answer||null}
/** Weighted prior rarity estimator. In this offline release tiers are seeded from curated editorial bands, not live answer analytics. */
export function rarityFor(answer,observed=null){const priorTier=answer.priorTier;const priors=[.36,.19,.085,.029,.007];const prior=priors[priorTier-1];if(!observed||observed.total<100)return priorTier;const own=Math.max(0,observed.count||0),total=Math.max(0,observed.total);const frequency=(own+100*prior)/(total+100);return frequency>=.20?1:frequency>=.08?2:frequency>=.03?3:frequency>=.01?4:5}
export function comboMultiplier(streak){return Math.min(1.4,1+Math.max(0,streak-1)*.1)}
export function award(answer,streak,observed){const tier=rarityFor(answer,observed);const multiplier=comboMultiplier(streak);return {tier,tierName:TIER_NAMES[tier-1],base:BASE_DEPTH[tier-1],multiplier,depth:Math.round(BASE_DEPTH[tier-1]*multiplier)}}
export function biomeFor(depth){return [...BIOMES].reverse().find(b=>depth>=b.min)||BIOMES[0]}
export function dailyKey(now=new Date()){return now.toISOString().slice(0,10)}
export function levelFor(xp){return Math.floor(Math.sqrt(Math.max(0,xp)/150))+1}
export function formatDepth(n){return new Intl.NumberFormat('en-NZ').format(n)+' m'}
