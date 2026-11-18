const KEY='rift-rarity-redesign-v1';
const fresh=()=>({version:1,xp:0,runs:0,bests:{classic:0,daily:0,endless:0},relics:[],history:[],daily:{},audio:false});
export function loadProfile(){try{const raw=localStorage.getItem(KEY);if(!raw)return fresh();const v=JSON.parse(raw);if(!v||v.version!==1)return fresh();return {...fresh(),...v,bests:{...fresh().bests,...(v.bests||{})},daily:v.daily||{},relics:Array.isArray(v.relics)?v.relics:[],history:Array.isArray(v.history)?v.history:[]}}catch{return fresh()}}
export function saveProfile(p){try{localStorage.setItem(KEY,JSON.stringify(p));return true}catch{return false}}
