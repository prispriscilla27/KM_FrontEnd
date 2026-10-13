/* Shared Academy helpers for new-joiner-academy.html, academy-week.html and academy-test.html.
   All content comes from KM.academy (km-data.js, edited in admin.html). Progress is saved in this browser only.
   Plain JS, no modules, works from file://. */
const A=window.KM.academy,AS=A.settings;
const KC='index.html#l2-';
const store={get(k,d){try{const v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}},del(k){try{localStorage.removeItem(k)}catch(e){}}};
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const slug=t=>t.toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const TOWERS=A.towers,WEEKS=A.weeks,TESTS={},ORDER=A.tests.map(t=>t.id);A.tests.forEach(t=>TESTS[t.id]=t);
const TEST_SETTINGS=AS,BANK=A.questions;
const towerObj=name=>TOWERS.find(t=>t.name===name)||null;
const towerFromQuery=()=>{const q=new URLSearchParams(location.search).get('tower');const t=TOWERS.find(x=>slug(x.name)===q);return t?t.name:''};

/* Materials of one week for one tower: the list every tower sees, then that tower's Knowledge Centre pages. */
function materialsFor(n,tower){
  const c=A.weekContent[n]||{materials:[]},L=c.materials.map(m=>({...m}));
  const T=towerObj(tower);
  ((T&&T.links&&T.links[n])||[]).forEach((l,i)=>L.push({id:'w'+n+'-svc-'+slug(l.title)+'-'+(i+1),type:'Service page',title:l.title,time:l.time||'20 min',desc:l.desc||'Read this page in the Knowledge Centre.',href:l.href}));
  return L;
}
const countable=(n,t)=>materialsFor(n,t).filter(m=>!m.tba);

/* Progress per tower: {fin:[material ids finished], opn:[material ids opened], man:[weeks marked done by hand, only for weeks with nothing to track]} */
function prog(t){const v=store.get('acad-'+t,null);return v&&!Array.isArray(v)?{fin:v.fin||[],opn:v.opn||[],man:v.man||[]}:{fin:[],opn:[],man:[]}}
const saveProg=(t,p)=>store.set('acad-'+t,p);
const result=(t,id)=>store.get('acadTest-'+t+'-'+id,null);
/* Weeks covered by a checkpoint that has been taken can no longer be changed (switch in admin: lockAfterCheckpoint). */
function frozenSet(t){const s=new Set();if(!AS.lockAfterCheckpoint)return s;ORDER.forEach(id=>{if(result(t,id))(TESTS[id].weeks||[]).forEach(n=>s.add(n))});return s}
/* One pass over the 12 weeks: finished/total materials, whether each week is complete, and whether it counts as done (in order when weeks are locked in order). */
function weekInfo(t){
  const P=prog(t),fz=frozenSet(t),info={},done=[];let prev=true;
  for(let n=1;n<=12;n++){
    const ms=countable(n,t),fin=ms.filter(m=>P.fin.includes(m.id)).length,frozen=fz.has(n);
    const complete=frozen||(ms.length?fin===ms.length:P.man.includes(n));
    const counts=complete&&(!AS.lockWeeksInOrder||prev);
    info[n]={fin,total:ms.length,complete:counts,frozen,manual:ms.length===0};
    if(counts)done.push(n);prev=counts;
  }
  return {info,done,P};
}
const doneOf=t=>weekInfo(t).done;
function lockReason(n,done,t){
  if(AS.lockWeeksInOrder&&n>1&&!done.includes(n-1))return 'Finish week '+(n-1)+' to open this week.';
  if(AS.requirePassToUnlockNextWeek){const T=A.tests.find(x=>x.after===n-1&&x.id!=='final');if(T){const r=result(t,T.id);if(!(r&&r.passed))return 'Pass '+T.title+' to open this week.'}}
  return '';
}
const unlocked=(n,done,t)=>!lockReason(n,done,t);
function testOpen(T,done,t){
  if(!done.includes(T.after))return {open:false,why:'Unlocks when week '+T.after+' is done.'};
  if(T.needs&&!result(t,T.needs))return {open:false,why:'Unlocks after '+(TESTS[T.needs]?TESTS[T.needs].title:'the previous checkpoint')+' is taken.'};
  return {open:true,why:''};
}
/* Can a finished material of week n be un-finished? Not when a taken checkpoint covers the week, and (weeks in order) not once a later week has progress. */
function canChange(n,t){
  const W=weekInfo(t);if(W.info[n].frozen)return false;
  if(!AS.lockWeeksInOrder)return true;
  for(let k=n+1;k<=12;k++){if(countable(k,t).some(m=>W.P.fin.includes(m.id))||W.P.man.includes(k))return false}
  return true;
}
function markOpened(t,id){const P=prog(t);if(!P.opn.includes(id)){P.opn.push(id);saveProg(t,P)}}
function setFinished(t,n,id,on){
  const P=prog(t);
  if(on){if(!P.opn.includes(id))P.opn.push(id);if(!P.fin.includes(id))P.fin.push(id)}
  else{if(!canChange(n,t))return false;P.fin=P.fin.filter(x=>x!==id)}
  saveProg(t,P);return true;
}
function setManual(t,n,on){const P=prog(t);if(on){if(!P.man.includes(n))P.man.push(n)}else{if(!canChange(n,t))return false;P.man=P.man.filter(x=>x!==n)}saveProg(t,P);return true}
function resetTower(t){store.del('acad-'+t);ORDER.forEach(k=>store.del('acadTest-'+t+'-'+k))}

/* Circular progress. p is 0 to 1. state: '' (in progress), 'done' (green check), 'lock' (grey). */
function ring(p,size,label,state,title){
  const r=(size-10)/2,c=2*Math.PI*r,h=size/2;
  const k=size*.2,mid=state==='lock'?`<rect x="${h-k*.9}" y="${h-k*.1}" width="${k*1.8}" height="${k*1.3}" rx="2" fill="var(--muted)"/><path d="M${h-k*.55} ${h-k*.1} v-${k*.45} a${k*.55} ${k*.55} 0 0 1 ${k*1.1} 0 v${k*.45}" fill="none" stroke="var(--muted)" stroke-width="2.5"/>`:state==='done'?`<path class="ck" d="M${h-size*.17} ${h+size*.01} l${size*.12} ${size*.13} l${size*.23} -${size*.27}"/>`:`<text x="${h}" y="${h}" text-anchor="middle" dominant-baseline="central" style="font-size:${Math.round(size*.28)}px">${esc(label)}</text>`;
  return `<svg class="ring ${state||''}" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" role="img" aria-label="${esc(title||'')}"><circle class="rt" cx="${h}" cy="${h}" r="${r}"/>${p>0?`<circle class="rb" cx="${h}" cy="${h}" r="${r}" stroke-dasharray="${(c*Math.min(1,p)).toFixed(1)} ${c.toFixed(1)}" transform="rotate(-90 ${h} ${h})"/>`:''}${mid}</svg>`;
}
const CHECK_SVG='<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8.5l3.2 3.2L13 4.8"/></svg>';
