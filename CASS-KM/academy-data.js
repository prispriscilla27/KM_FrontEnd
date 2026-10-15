/* Shared Academy helpers for new-joiner-academy.html, academy-week.html and academy-test.html.
   All content comes from KM.academy (km-data.js, edited in admin.html; window.KM is set by km-boot.js, so admin preview works).
   This file holds the progress model, the lock rules and the progress circle, so the three pages cannot disagree.
   Progress is saved in this browser only. Plain JS, no modules, works from file://. */
const A=(window.KM&&window.KM.academy)||null,AS=(A&&A.settings)||{};
const store={get(k,d){try{const v=localStorage.getItem(k);return v!=null?JSON.parse(v):d}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}},del(k){try{localStorage.removeItem(k)}catch(e){}}};
const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
/* URL slug of a tower or title: lower case, & -> "and", anything else -> "-" */
const slug=t=>String(t||'').toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const TOWERS=(A&&A.towers)||[],WEEKS=((A&&A.weeks)||[]).slice().sort((a,b)=>a.n-b.n),TESTS={},ORDER=((A&&A.tests)||[]).map(t=>t.id);
((A&&A.tests)||[]).forEach(t=>{TESTS[t.id]=t});
const NWEEKS=WEEKS.length;
const BANK=(A&&A.questions)||[];
/* Pathways: one per L1 of each tower (service taxonomy in KM.taxonomy). A pathway is named by its key: the tower name when the
   tower has one L1 (so progress saved before L1 pathways existed is kept), otherwise "Tower › L1 name". */
const TAX=(window.KM&&window.KM.taxonomy)||[];
const PATHS=[];TOWERS.forEach(T=>{const tx=TAX.find(x=>x.code===T.code),l1=(tx&&tx.l1)||[];
  if(!l1.length)PATHS.push({key:T.name,tower:T.name,code:T.code,l1:'',l1name:'',multi:false,l2:[]});
  l1.forEach(L=>PATHS.push({key:l1.length>1?T.name+' › '+L.name:T.name,tower:T.name,code:T.code,l1:L.code,l1name:L.name,multi:l1.length>1,l2:L.l2||[]}))});
const pathObj=k=>PATHS.find(p=>p.key===k)||null;
const pathsOf=towerName=>PATHS.filter(p=>p.tower===towerName);
/* towerObj accepts a tower name or a pathway key */
const towerObj=k=>{const p=pathObj(k);return TOWERS.find(t=>t.name===(p?p.tower:k))||null};
const towerOf=k=>{const p=pathObj(k);return p?p.tower:k};
/* URL part for a pathway: &tower=<slug>[&l1=<code>]; the hash on the Academy page: #tower-<slug>[/<l1 code>] */
const pathQuery=k=>{const p=pathObj(k);return p?'&tower='+encodeURIComponent(slug(p.tower))+(p.multi?'&l1='+encodeURIComponent(p.l1):''):''};
const pathHash=k=>{const p=pathObj(k);return p?'#tower-'+slug(p.tower)+(p.multi?'/'+p.l1:''):''};
const pathFrom=(towerSlug,l1)=>{const T=TOWERS.find(x=>slug(x.name)===towerSlug);if(!T)return '';const ps=pathsOf(T.name);if(ps.length===1)return ps[0].key;const p=ps.find(x=>x.l1===l1);return p?p.key:''};
const towerFromQuery=()=>{let q='',l='';try{const u=new URLSearchParams(location.search);q=u.get('tower')||'';l=u.get('l1')||''}catch(e){}return pathFrom(q,l)};
/* Only relative Knowledge Centre links or http(s) links are followed. */
function safeHref(u){u=String(u||'').trim();if(!u)return '';if(/^https?:\/\//i.test(u))return u;if(!/^[a-z][a-z0-9+.-]*:/i.test(u)&&!u.startsWith('//'))return u;return ''}

/* Materials of one week for one tower: the list every tower sees, then that tower's own Knowledge Centre pages ("Service page"). */
function materialsFor(n,tower){
  const c=(A&&A.weekContent&&A.weekContent[n])||{materials:[]},L=(c.materials||[]).map(m=>Object.assign({href:'',tba:false},m));
  const T=towerObj(tower),P=pathObj(tower),pl=T&&T.paths&&P&&T.paths[P.l1];
  (((pl&&pl.links)||(T&&T.links)||{})[n]||[]).forEach((l,i)=>L.push({id:'w'+n+'-svc-'+slug(l.title)+'-'+(i+1),type:'Service page',title:l.title,time:l.time||'20 min',desc:l.desc||'Read this page in the Knowledge Centre.',href:l.href||'',tba:false}));
  return L;
}
const countable=(n,t)=>materialsFor(n,t).filter(m=>!m.tba);

/* Progress per pathway, saved as acad-<pathway key>: {fin:[material ids finished], opn:[material ids opened], man:[weeks marked done by hand]} */
/* A pathway of a tower with several L1s starts from the progress saved for the tower before L1 pathways existed (copied once). */
function migrate(t){const p=pathObj(t);if(!p||!p.multi||store.get('acadMig-'+t,0))return;store.set('acadMig-'+t,1);
  if(store.get('acad-'+t,null)==null){const old=store.get('acad-'+p.tower,null);if(old!=null)store.set('acad-'+t,old)}
  ORDER.forEach(id=>{if(store.get('acadTest-'+t+'-'+id,null)==null){const r=store.get('acadTest-'+p.tower+'-'+id,null);if(r!=null)store.set('acadTest-'+t+'-'+id,r)}})}
function prog(t){migrate(t);const v=store.get('acad-'+t,null);const arr=x=>Array.isArray(x)?x:[];return v&&typeof v==='object'&&!Array.isArray(v)?{fin:arr(v.fin),opn:arr(v.opn),man:arr(v.man).map(Number)}:{fin:[],opn:[],man:[]}}
const saveProg=(t,p)=>store.set('acad-'+t,p);
/* Test results, saved as acadTest-<tower name>-<testId>: {score, passed, date} */
const result=(t,id)=>{migrate(t);const r=store.get('acadTest-'+t+'-'+id,null);return r&&typeof r==='object'?r:null};
/* Weeks covered by a checkpoint that has been taken can no longer be changed (admin switch: lockAfterCheckpoint). */
function frozenSet(t){const s=new Set();if(!AS.lockAfterCheckpoint)return s;ORDER.forEach(id=>{if(result(t,id))(TESTS[id].weeks||[]).forEach(n=>s.add(+n))});return s}
/* One pass over the weeks: finished/total materials, whether each week is complete,
   and whether it counts as done (in order when weeks are locked in order, so progress that breaks the order is ignored). */
function weekInfo(t){
  const P=prog(t),fz=frozenSet(t),info={},done=[];let prev=true;
  WEEKS.forEach(w=>{const n=w.n;
    const ms=countable(n,t),fin=ms.filter(m=>P.fin.includes(m.id)).length,frozen=fz.has(n);
    const complete=frozen||(ms.length?fin===ms.length:P.man.includes(n));
    const counts=complete&&(!AS.lockWeeksInOrder||prev);
    info[n]={fin,total:ms.length,complete:counts,frozen,manual:ms.length===0};
    if(counts)done.push(n);prev=counts;
  });
  return {info,done,P};
}
const doneOf=t=>weekInfo(t).done;
/* Why week n is locked ('' when open). */
function lockReason(n,done,t){
  if(AS.lockWeeksInOrder&&n>1&&!done.includes(n-1))return 'Finish week '+(n-1)+' to open this week.';
  if(AS.requirePassToUnlockNextWeek){const T=((A&&A.tests)||[]).find(x=>x.after===n-1&&x.id!=='final');if(T){const r=result(t,T.id);if(!(r&&r.passed))return 'Pass '+T.title+' to open this week.'}}
  return '';
}
const unlocked=(n,done,t)=>!lockReason(n,done,t);
function testOpen(T,done,t){
  if(!T)return {open:false,why:'This test does not exist.'};
  if(!done.includes(T.after))return {open:false,why:'Unlocks when week '+T.after+' is done.'};
  if(T.needs&&!result(t,T.needs))return {open:false,why:'Unlocks after '+(TESTS[T.needs]?TESTS[T.needs].title:'the previous checkpoint')+' is taken.'};
  return {open:true,why:''};
}
/* Can progress in week n be undone? Not when a taken checkpoint covers the week, and (weeks in order) not once a later, open week has progress. */
function canChange(n,t){
  const W=weekInfo(t);if(!W.info[n]||W.info[n].frozen)return false;
  if(!AS.lockWeeksInOrder)return true;
  for(const w of WEEKS){const k=w.n;if(k<=n)continue;if(!(W.done.includes(k-1)))break;if(countable(k,t).some(m=>W.P.fin.includes(m.id))||W.P.man.includes(k))return false}
  return true;
}
function markOpened(t,id){const P=prog(t);if(!P.opn.includes(id)){P.opn.push(id);saveProg(t,P)}}
/* Finish or un-finish one material. Returns false when the rules do not allow it (locked week, frozen week, later progress). */
function setFinished(t,n,id,on,admin){
  const P=prog(t);
  if(on){if(!admin&&lockReason(n,doneOf(t),t))return false;if(!P.opn.includes(id))P.opn.push(id);if(!P.fin.includes(id))P.fin.push(id)}
  else{if(!canChange(n,t))return false;P.fin=P.fin.filter(x=>x!==id)}
  saveProg(t,P);return true;
}
/* Mark a week with nothing to count as done by hand (or undo it while allowed). */
function setManual(t,n,on,admin){
  const P=prog(t);
  if(on){if(!admin&&lockReason(n,doneOf(t),t))return false;if(!P.man.includes(n))P.man.push(n)}
  else{if(!canChange(n,t))return false;P.man=P.man.filter(x=>x!==n)}
  saveProg(t,P);return true;
}
/* Demo only (?demo=1): clears progress and test results for one tower. */
function resetTower(t){store.del('acad-'+t);ORDER.forEach(k=>store.del('acadTest-'+t+'-'+k))}
const fmtDate=d=>d.toLocaleDateString('en-GB',{day:'numeric',month:'short'});

/* Progress circle. p is 0 to 1. state: '' (in progress), 'done' (green check), 'lock' (grey padlock). title is the text alternative. */
function ring(p,size,label,state,title){
  const r=(size-10)/2,c=2*Math.PI*r,h=size/2,k=size*.2;
  const mid=state==='lock'?`<rect x="${h-k*.9}" y="${h-k*.1}" width="${k*1.8}" height="${k*1.3}" rx="2" fill="var(--muted)"/><path d="M${h-k*.55} ${h-k*.1} v-${k*.45} a${k*.55} ${k*.55} 0 0 1 ${k*1.1} 0 v${k*.45}" fill="none" stroke="var(--muted)" stroke-width="2.5"/>`
    :state==='done'?`<path class="ck" d="M${h-size*.17} ${h+size*.01} l${size*.12} ${size*.13} l${size*.23} -${size*.27}"/>`
    :`<text x="${h}" y="${h}" text-anchor="middle" dominant-baseline="central" style="font-size:${Math.round(size*.28)}px">${esc(label)}</text>`;
  const pp=state==='done'?1:state==='lock'?0:Math.max(0,Math.min(1,p||0));
  return `<svg class="ring ${state||''}" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" role="img" aria-label="${esc(title||'')}"><circle class="rt" cx="${h}" cy="${h}" r="${r}"/>${pp>0?`<circle class="rb" cx="${h}" cy="${h}" r="${r}" stroke-dasharray="${(c*pp).toFixed(1)} ${c.toFixed(1)}" transform="rotate(-90 ${h} ${h})"/>`:''}${mid}</svg>`;
}
const CHECK_SVG='<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8.5l3.2 3.2L13 4.8"/></svg>';
/* The sample banner from km-data.js settings, with a page-specific note appended. */
function academyBanner(extra){
  const el=document.getElementById('mockBanner');if(!el)return;
  const bn=window.KM&&window.KM.settings&&window.KM.settings.banner;
  if(bn&&bn.on&&String(bn.text||'').trim()){el.textContent=String(bn.text).trim()+(extra?' '+extra:'');el.hidden=false}else el.remove();
}
