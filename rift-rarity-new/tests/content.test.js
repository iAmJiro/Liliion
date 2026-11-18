import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {CATALOG,QUESTIONS,CONTENT_VERSION,CONTENT_META} from '../src/data/content.js';
const byId=new Map(CATALOG.map(e=>[e.id,e]));
const norm=value=>value.normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9]/g,'');
test('catalog contains the complete pinned champion snapshot',()=>{
 const raw=JSON.parse(fs.readFileSync(new URL(`../src/data/snapshots/champion-${CONTENT_META.patch}.json`,import.meta.url))).data;
 const champions=CATALOG.filter(e=>e.category==='champions');
 assert.equal(champions.length,Object.keys(raw).length);
 for(const c of Object.values(raw))assert.equal(byId.get(`champion:${c.id}`).name,c.name);
});
test('all catalog identifiers and canonical names are unique',()=>{
 assert.equal(byId.size,CATALOG.length);
 assert.equal(new Set(CATALOG.map(e=>norm(e.name))).size,CATALOG.length);
 for(const e of CATALOG){assert.ok(['champions','items','map'].includes(e.category));assert.ok(Number.isInteger(e.tier)&&e.tier>=1&&e.tier<=5);assert.ok(Array.isArray(e.aliases));}
});
test('no explicit alias steals a different canonical name or alias',()=>{
 const seen=new Map(CATALOG.map(e=>[norm(e.name),e.id]));
 for(const e of CATALOG)for(const alias of e.aliases){const key=norm(alias);assert.ok(!seen.has(key)||seen.get(key)===e.id,`${alias} collides with ${seen.get(key)}`);seen.set(key,e.id);}
});
test('at least 70 valid questions and 10 map questions are bundled',()=>{
 assert.ok(QUESTIONS.length>=70);assert.ok(QUESTIONS.filter(q=>q.category==='map').length>=10);
 assert.equal(new Set(QUESTIONS.map(q=>q.id)).size,QUESTIONS.length);
 for(const q of QUESTIONS){assert.ok(q.prompt&&q.rule&&q.hint&&q.explanation);assert.ok(q.answerIds.length);assert.equal(new Set(q.answerIds).size,q.answerIds.length);for(const id of q.answerIds)assert.equal(byId.get(id)?.category,q.category);}
});
test('class questions include every champion with that Riot class tag',()=>{
 for(const tag of ['Fighter','Mage','Assassin','Support','Tank','Marksman']){
 const q=QUESTIONS.find(x=>x.id===`c-class-${tag.toLowerCase()}`);
 assert.deepEqual(q.answerIds,CATALOG.filter(e=>e.category==='champions'&&e.tags.includes(tag)).map(e=>e.id).sort());
 }
});
test('item stat questions are exhaustive over the published catalogue',()=>{
 for(const [key,stat] of [['ad','FlatPhysicalDamageMod'],['ap','FlatMagicDamageMod'],['armor','FlatArmorMod'],['mr','FlatSpellBlockMod'],['health','FlatHPPoolMod'],['mana','FlatMPPoolMod'],['as','PercentAttackSpeedMod'],['crit','FlatCritChanceMod'],['lifesteal','PercentLifeStealMod']]){
 const q=QUESTIONS.find(x=>x.id===`i-stat-${key}`);
 assert.deepEqual(q.answerIds,CATALOG.filter(e=>e.category==='items'&&(e.stats?.[stat]||0)>0).map(e=>e.id).sort());
 }
});
test('current Immortal Shieldbow is not incorrectly accepted as lifesteal',()=>{
 const shieldbow=CATALOG.find(e=>e.name==='Immortal Shieldbow');
 assert.ok(shieldbow);assert.ok(!QUESTIONS.find(q=>q.id==='i-stat-lifesteal').answerIds.includes(shieldbow.id));
});
test('common nicknames and the requested Veegar spelling are present',()=>{
 for(const [name,alias] of [['Veigar','veegar'],['Miss Fortune','mf'],['Twisted Fate','tf'],['Jarvan IV','j4'],['Infinity Edge','ie'],['Blade of The Ruined King','bork'],["Zhonya's Hourglass",'zhonyas'],['Nunu & Willump','nunu']])assert.ok(CATALOG.find(e=>e.name===name)?.aliases.includes(alias),name);
});
test('map scopes keep objectives, lanes and plants separate',()=>{
 assert.ok(!CATALOG.some(e=>e.name==='Atakhan'));
 assert.ok(!QUESTIONS.find(q=>q.id==='m-elements').answerIds.includes('map:elder-dragon'));
 assert.ok(!QUESTIONS.find(q=>q.id==='m-lanes').answerIds.includes('map:jungle'));
 assert.ok(QUESTIONS.find(q=>q.id==='m-buffs').answerIds.includes('map:blue-sentinel'));
});
test('questions and version explicitly preserve offline data provenance',()=>{
 assert.ok(CONTENT_VERSION.includes(CONTENT_META.patch));assert.equal(CONTENT_META.questions,QUESTIONS.length);assert.ok(CONTENT_META.sourceUrls.every(u=>u.startsWith('https://')));assert.ok(CONTENT_META.rarityModel.includes('not live'));
});
test('every champion and item has a real locally bundled PNG',()=>{
 for(const e of CATALOG.filter(e=>e.category!=='map')){
  assert.ok(e.image.startsWith('/assets/'));
  const bytes=fs.readFileSync(new URL(`../public${e.image}`,import.meta.url));
  assert.equal(bytes.subarray(0,8).toString('hex'),'89504e470d0a1a0a',e.name);
  assert.ok(bytes.length>100,e.name);
 }
});
