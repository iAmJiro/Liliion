import test from 'node:test';
import assert from 'node:assert/strict';
import {newExpedition,settle,nextQuestion} from '../src/session.js';
import {norm} from '../src/engine.js';

test('Classic starts 7 questions in answering state',()=>{
  const g=newExpedition('classic');
  assert.equal(g.questions.length,7);
  assert.equal(g.status,'answering');
  assert.equal(g.depth,0);
});
test('Accepted answer only scores once and advances properly',()=>{
  const g=newExpedition('classic');
  const first=g.questions[0].answers[0];
  const scored=settle(g,first.name);
  assert.equal(scored.status,'revealing');
  assert.equal(scored.correct,1);
  assert.ok(scored.depth>0);
  assert.equal(settle(scored,first.name),scored);
  assert.equal(nextQuestion(scored).index,1);
});
test('Skip resets streak and endless loses a life',()=>{
  const g=newExpedition('endless');
  const s=settle(g,'');
  assert.equal(s.lives,2);
  assert.equal(s.streak,0);
  assert.equal(s.status,'revealing');
});
test('Daily seed stays equal throughout the same UTC day',()=>{
  const one=newExpedition('daily');
  const two=newExpedition('daily');
  assert.deepEqual(one.questions.map(q=>q.id),two.questions.map(q=>q.id));
});
test('No esports category exists in the loaded bank',async()=>{
  const bank=(await import('../src/questions.json',{with:{type:'json'}})).default;
  assert.ok(bank.every(q=>['champions','items','map'].includes(q.category)));
  assert.ok(bank.every(q=>q.answers.every(a=>norm(a.name).length>0)));
});
