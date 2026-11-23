/* Loads the site content for every reader page (index.html, document.html, new-joiner-academy.html, academy-week.html, academy-test.html).
   Readers get the published km-data.js. In a browser where an admin has saved changes in admin.html that are not published yet,
   every page shows that working draft instead (so edits appear straight away, search included), with an orange bar on top.
   "Preview on site" in admin.html does the same even when nothing is unpublished. "Show published version" switches back
   for this tab only (sessionStorage). Other people's browsers keep seeing km-data.js until the changes are published. */
(function(){
  var FLAG='cassKM.preview',DRAFT='cassKM.draft',META='cassKM.draftMeta';
  var pub=window.KM_DATA;
  function ss(){try{return window.sessionStorage}catch(e){return null}}
  function ls(){try{return window.localStorage}catch(e){return null}}
  var S=ss(),L=ls();
  var asked=/^#preview/.test(location.hash)||/[?&]preview=1/.test(location.search);
  if(asked&&S){try{S.setItem(FLAG,'1')}catch(e){}
    try{var q=location.search.replace(/([?&])preview=1(&|$)/,function(m,a,b){return b?a:''}),h=/^#preview/.test(location.hash)?'':location.hash;history.replaceState(null,'',location.pathname+q+h)}catch(e){}}
  var draft=null,preview=false;
  function unpublished(){try{var m=JSON.parse(L.getItem(META)||'{}');return (m&&m.n)||0}catch(e){return 0}}
  var flag=null;try{flag=S?S.getItem(FLAG):null}catch(e){}
  var auto=false;
  try{if(L&&L.getItem(DRAFT)&&flag!=='0'&&(flag==='1'||unpublished()>0)){draft=JSON.parse(L.getItem(DRAFT));preview=!!(draft&&draft.taxonomy&&draft.items);auto=flag!=='1'}}catch(e){draft=null;preview=false}
  /* A draft saved by an older admin page may lack newer parts of the data (for example the welcome pop-up texts): take those from the
     published file, so new features still show while an admin has unpublished changes. */
  if(preview&&pub){Object.keys(pub).forEach(function(k){if(!(k in draft))draft[k]=pub[k]});
    if(pub.settings&&typeof pub.settings==='object'&&draft.settings&&typeof draft.settings==='object')Object.keys(pub.settings).forEach(function(k){if(!(k in draft.settings))draft.settings[k]=pub.settings[k]});
    ['guides','faqs'].forEach(function(k){var P=pub.settings&&pub.settings[k],Dr=draft.settings&&draft.settings[k];if(P&&Dr&&typeof Dr==='object')Object.keys(P).forEach(function(x){if(!(x in Dr))Dr[x]=P[x]})})}
  window.KM=preview?draft:pub;
  window.KM_PUBLISHED=pub;
  window.KM_PREVIEW=preview;
  window.kmExitPreview=function(){try{S.setItem(FLAG,'0')}catch(e){}location.reload()};
  window.kmShowDraft=function(){try{S.setItem(FLAG,'1')}catch(e){}location.reload()};
  /* An edit saved in admin.html in another tab of this browser: reload so this page shows it (or drops it after Publish/Discard). */
  window.addEventListener('storage',function(e){if(e.key!==META&&e.key!==DRAFT)return;if(flag==='0')return;
    var want=flag==='1'||unpublished()>0;if(want||preview){clearTimeout(window._kmRl);window._kmRl=setTimeout(function(){location.reload()},400)}});
  /* ---- View counter ----
     A view = opening an entry (its detail panel and/or its document), counted once per entry per day per browser.
     Admins are left out: while this browser has an active admin login (admin.html sets cassKM.adminActive) or shows the draft.
     If settings.viewsEndpoint is set, each view is sent there as {"item":"<id>","month":"YYYY-MM"} (text/plain POST, nothing about
     the person). Every view is also kept in this browser, so the number shown updates at once. Shown number = the counts published in
     km-data.js (views.months) + this browser's views made after those counts were last updated. */
  var VLOC='cassKM.viewsLocal',VDAY='cassKM.viewedToday',AMARK='cassKM.adminActive';
  function ymd(d){d=d||new Date();return d.getFullYear()+'-'+('0'+(d.getMonth()+1)).slice(-2)+'-'+('0'+d.getDate()).slice(-2)}
  function jget(k,def){try{var v=JSON.parse(L.getItem(k)||'null');return v==null?def:v}catch(e){return def}}
  function jset(k,v){try{L.setItem(k,JSON.stringify(v))}catch(e){}}
  window.kmAdminActive=function(){try{var t=+L.getItem(AMARK)||0;return Date.now()-t<30*60e3}catch(e){return false}};
  window.kmCountView=function(id){
    if(!id||!L)return {counted:false,reason:'storage'};
    if(preview||window.kmAdminActive())return {counted:false,reason:'admin'};
    var d=ymd(),seen=jget(VDAY,null);if(!seen||seen.d!==d||!seen.ids)seen={d:d,ids:[]};
    if(seen.ids.indexOf(id)>=0)return {counted:false,reason:'today'};
    seen.ids.push(id);jset(VDAY,seen);
    var loc=jget(VLOC,[]);if(!Array.isArray(loc))loc=[];loc.push({id:id,t:Date.now()});if(loc.length>5000)loc=loc.slice(-5000);jset(VLOC,loc);
    var ep=(window.KM&&window.KM.settings&&window.KM.settings.viewsEndpoint)||'';
    if(/^https?:\/\//i.test(ep)){var body=JSON.stringify({item:id,month:d.slice(0,7)});
      try{if(!(navigator.sendBeacon&&navigator.sendBeacon(ep,new Blob([body],{type:'text/plain'}))))fetch(ep,{method:'POST',mode:'no-cors',keepalive:true,headers:{'Content-Type':'text/plain'},body:body}).catch(function(){})}catch(e){}}
    return {counted:true};
  };
  /* this browser's views made after the published counts were last updated: [{id,t}] */
  window.kmLocalViews=function(){var v=(window.KM&&window.KM.views)||{},up=Date.parse(v.updated||'')||0,loc=jget(VLOC,[]);return Array.isArray(loc)?loc.filter(function(x){return x&&x.id&&x.t>up}):[]};
  window.kmViews=function(id){var v=(window.KM&&window.KM.views)||{},m=v.months||{},n=0;for(var k in m)if(m[k]&&m[k][id])n+=+m[k][id]||0;
    window.kmLocalViews().forEach(function(x){if(x.id===id)n++});return n};
  window.kmViewsFmt=function(n){n=+n||0;if(n<1000)return String(n);var k=n/1000;return (k<10?(Math.round(k*10)/10):Math.round(k))+'k'};
  window.kmEyeSvg='<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" focusable="false" style="vertical-align:-2px"><path d="M1 8s2.6-4.5 7-4.5S15 8 15 8s-2.6 4.5-7 4.5S1 8 1 8z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><circle cx="8" cy="8" r="2" fill="currentColor"/></svg>';
  window.kmEye=function(id){var n=window.kmViews(id);return '<span class="kmviews" title="'+n.toLocaleString('en-GB')+(n===1?' view':' views')+'" aria-label="'+n.toLocaleString('en-GB')+(n===1?' view':' views')+'">'+window.kmEyeSvg+' '+window.kmViewsFmt(n)+'</span>'};
  /* ---- Welcome pop-up, page guides and common questions (texts: Admin > Settings, Super Admin only) ----
     The welcome pop-up shows once per browser, on the home page. A page guide shows once per page; all guides can show again after
     12 hours without any activity on the site. Both can be closed (x, Esc, or clicking outside the welcome). The "?" button in the top
     bar shows the welcome or the guide of the current page again. "?guide=show" in the address (Admin > Settings preview links)
     shows them without remembering that they were seen. */
  var WK='cassKM.welcomeSeen',GK='cassKM.guideSeen',AK='cassKM.lastActive',IDLE=12*3600e3,curKey='';
  function esc2(x){return String(x==null?'':x).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
  function cfg(){return (window.KM&&window.KM.settings)||{}}
  function forced(){return /[?&]guide=show(&|$)/.test(location.search)}
  function touchActive(){try{if(L)L.setItem(AK,String(Date.now()))}catch(e){}}
  (function(){var last=0;try{last=+(L&&L.getItem(AK))||0}catch(e){}
    if(last&&Date.now()-last>IDLE){try{L.removeItem(GK)}catch(e){}}      /* 12 hours without activity: guides may show again */
    touchActive();var t=0;
    ['click','keydown','scroll','touchstart','pointerdown'].forEach(function(ev){addEventListener(ev,function(){var n=Date.now();if(n-t>20000){t=n;touchActive()}},{passive:true,capture:true})});
    addEventListener('pagehide',touchActive)})();
  var logoImg='<img src="cass-logo.png" alt="Chandra Asri Sentral Solusi (CASS)">';
  function css(){if(document.getElementById('kmpopcss'))return;var st=document.createElement('style');st.id='kmpopcss';st.textContent=
   '.kmlogo{display:inline-flex;align-items:center;justify-content:center;background:linear-gradient(105deg,var(--hdr1,#0b1f3a),var(--hdr1b,#163360));border-radius:18px;padding:14px 22px}.kmlogo img{display:block;height:54px;width:auto}'+
   '.kmw{position:fixed;inset:0;z-index:300;background:rgba(5,20,35,.55);display:grid;place-items:center;padding:16px;animation:kmFade .2s ease}'+
   '.kmw-card{position:relative;background:var(--surface,#fff);color:var(--ink,#0f2342);border-radius:22px;width:min(520px,100%);max-height:calc(100vh - 32px);overflow:auto;padding:30px 32px 28px;text-align:center;box-shadow:0 24px 60px rgba(0,0,0,.35)}'+
   '.kmw-card::before{content:"";position:absolute;inset:0 0 auto 0;height:6px;background:linear-gradient(90deg,var(--hdr1,#0b1f3a),var(--hdr2,#1a5dc8),#5ba4f5)}'+
   '.kmw-x{position:absolute;right:12px;top:14px;border:0;background:var(--surface-2,#e8f0fb);color:var(--muted,#55657f);width:32px;height:32px;border-radius:50%;font-size:20px;line-height:1;cursor:pointer}.kmw-x:hover{color:var(--ink,#0f2342)}'+
   '.kmw-card h2{margin:16px 0 8px;font-size:23px;line-height:1.25}.kmw-card p{margin:0 0 14px;color:var(--muted,#55657f);font-size:14.5px;line-height:1.6}'+
   '.kmw-card ol{list-style:none;margin:0 auto 20px;padding:0;display:grid;gap:8px;max-width:420px;text-align:left}.kmw-card li{display:flex;gap:12px;align-items:center;background:var(--surface-2,#e8f0fb);border-radius:12px;padding:10px 12px;font-size:13.5px}'+
   '.kmw-card li i{flex:none;width:26px;height:26px;border-radius:50%;background:var(--brand,#1a5dc8);color:var(--on-brand,#fff);display:grid;place-items:center;font-style:normal;font-weight:700;font-size:13px}'+
   '.kmw-go{border:0;background:var(--brand,#1a5dc8);color:var(--on-brand,#fff);font:700 15px var(--font,system-ui,sans-serif);padding:12px 28px;border-radius:999px;cursor:pointer;box-shadow:0 8px 20px rgba(26,93,200,.35)}.kmw-go:hover{filter:brightness(1.08)}'+
   '.kmw-x:focus-visible,.kmw-go:focus-visible,.kmg-x:focus-visible,.kmhelp:focus-visible{outline:3px solid #f59e0b;outline-offset:2px}'+
   '.kmg{position:fixed;z-index:250;top:132px;left:50%;transform:translateX(-50%);width:min(780px,calc(100vw - 24px));display:flex;gap:14px;align-items:center;background:linear-gradient(105deg,var(--hdr1,#0b1f3a),var(--hdr1b,#163360));color:#fff;border-radius:16px;padding:12px 52px 12px 14px;box-shadow:0 14px 36px rgba(5,20,35,.4);animation:kmIn .3s ease}'+
   '.kmg .kmlogo{flex:none;padding:7px 12px;border-radius:12px;background:rgba(255,255,255,.1)}.kmg .kmlogo img{height:30px}.kmg-t{min-width:0}.kmg-l{font-size:10.5px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#9cc4f5;margin-bottom:2px}.kmg-m{font-size:14px;line-height:1.5}'+
   '.kmg-x{position:absolute;right:10px;top:10px;border:0;background:rgba(255,255,255,.16);color:#fff;width:30px;height:30px;border-radius:50%;font-size:19px;line-height:1;cursor:pointer}.kmg-x:hover{background:rgba(255,255,255,.3)}'+
   '@media (max-width:560px){.kmg{align-items:flex-start;padding-right:46px}.kmg .kmlogo{display:none}.kmlogo img{height:44px}.kmw-card{padding:26px 20px 22px}}'+
   '.kmhelp{margin-left:6px;width:32px;height:32px;border-radius:50%;border:1.5px solid rgba(255,255,255,.55);background:transparent;color:#fff;font:700 15px var(--font,system-ui,sans-serif);cursor:pointer;display:inline-grid;place-items:center;padding:0}.kmhelp:hover{background:rgba(255,255,255,.16)}.kmhelp[hidden]{display:none}'+
   '.kmfaq{margin-top:4px}.kmfaq-h{margin:0 0 10px;font-size:15px}.kmfaq-i{background:var(--surface,#fff);border:1px solid var(--line,#d9e3f1);border-radius:14px;margin-bottom:8px;overflow:hidden}'+
   '.kmfaq-i summary{cursor:pointer;padding:13px 16px;font-weight:650;font-size:14px;list-style:none;display:flex;justify-content:space-between;gap:10px;align-items:center}.kmfaq-i summary::-webkit-details-marker{display:none}.kmfaq-i summary::after{content:"";flex:none;width:8px;height:8px;border-right:2px solid var(--muted,#55657f);border-bottom:2px solid var(--muted,#55657f);transform:rotate(45deg);margin:-3px 2px 0 0}.kmfaq-i[open] summary::after{transform:rotate(-135deg);margin-top:3px}'+
   '.kmfaq-i div{padding:0 16px 14px;color:var(--muted,#55657f);font-size:13.5px;line-height:1.6}.kmfaq-i summary:focus-visible{outline:3px solid #f59e0b;outline-offset:-3px}'+
   '@keyframes kmFade{from{opacity:0}to{opacity:1}}@keyframes kmIn{from{opacity:0;transform:translate(-50%,-10px)}to{opacity:1;transform:translate(-50%,0)}}@media (prefers-reduced-motion:reduce){.kmw,.kmg{animation:none}}';
   document.head.appendChild(st)}
  function seenMap(){try{var v=JSON.parse((L&&L.getItem(GK))||'{}');return v&&typeof v==='object'&&!Array.isArray(v)?v:{}}catch(e){return {}}}
  function closeGuide(){var g=document.querySelector('.kmg');if(g)g.remove()}
  /* welcome pop-up */
  function closeWelcome(){var w=document.querySelector('.kmw');if(!w)return;var back=w._back;w.remove();document.documentElement.style.overflow='';if(back&&back.focus&&document.contains(back))try{back.focus()}catch(e){}}
  function openWelcome(w){
    css();closeGuide();closeWelcome();
    var steps=(w.steps||[]).filter(function(x){return x&&(x.lead||x.text)}).slice(0,3);
    var o=document.createElement('div');o.className='kmw';o._back=document.activeElement;
    o.innerHTML='<div class="kmw-card" role="dialog" aria-modal="true" aria-labelledby="kmwT"><button type="button" class="kmw-x" aria-label="Close">×</button><span class="kmlogo">'+logoImg+'</span><h2 id="kmwT">'+esc2(w.title)+'</h2>'+(w.text?'<p>'+esc2(w.text)+'</p>':'')+
      (steps.length?'<ol>'+steps.map(function(x,i){return '<li><i>'+(i+1)+'</i><div>'+(x.lead?'<b>'+esc2(x.lead)+'</b> ':'')+esc2(x.text)+'</div></li>'}).join('')+'</ol>':'')+'<button type="button" class="kmw-go">'+esc2(w.button||'Start exploring')+'</button></div>';
    document.body.appendChild(o);document.documentElement.style.overflow='hidden';
    var go=o.querySelector('.kmw-go'),x=o.querySelector('.kmw-x');go.focus();
    o.addEventListener('click',function(e){if(e.target===o||e.target===x||e.target===go)closeWelcome()});
    o.addEventListener('keydown',function(e){if(e.key==='Escape'){e.preventDefault();e.stopPropagation();closeWelcome()}else if(e.key==='Tab'){var f=[x,go],i=f.indexOf(document.activeElement);e.preventDefault();f[(i+(e.shiftKey?-1:1)+f.length)%f.length].focus()}});
  }
  window.kmWelcome=function(force){var w=cfg().welcome;if(!w||w.on===false||!w.title)return false;
    if(!force&&!forced()){try{if(L&&L.getItem(WK))return false;L.setItem(WK,String(Date.now()))}catch(e){return false}}
    openWelcome(w);return true};
  /* page guides */
  function guideOf(key){var g=(cfg().guides||{})[key];return g&&g.on!==false&&String(g.text||'').trim()?g:null}
  function helpBtn(){return document.querySelector('.kmhelp')}
  function updateHelp(){var b=helpBtn();if(!b)return;var on=curKey==='home'?!!(cfg().welcome&&cfg().welcome.on!==false&&cfg().welcome.title):!!guideOf(curKey);b.hidden=!on}
  window.kmGuide=function(key,force){curKey=key;updateHelp();closeGuide();var g=guideOf(key);if(!g)return false;
    if(document.querySelector('.kmw'))return false;
    if(!force&&!forced()){var m=seenMap();if(m[key])return false;m[key]=Date.now();try{L.setItem(GK,JSON.stringify(m))}catch(e){return false}}
    css();var d=document.createElement('div');d.className='kmg';d.setAttribute('role','status');d.setAttribute('aria-live','polite');
    d.innerHTML='<span class="kmlogo">'+logoImg+'</span><div class="kmg-t"><div class="kmg-l">Guide</div><div class="kmg-m">'+esc2(g.text)+'</div></div><button type="button" class="kmg-x" aria-label="Close this guide">×</button>';
    document.body.appendChild(d);d.querySelector('.kmg-x').addEventListener('click',closeGuide);return true};
  /* the page tells us where the visitor is; home = the welcome pop-up */
  window.kmPage=function(key){curKey=key;updateHelp()};
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&document.querySelector('.kmg')&&!document.querySelector('.kmw'))closeGuide()});
  /* common questions (max 3 per page) as ready-made HTML for the page to insert */
  window.kmFaq=function(key){var f=(cfg().faqs||{})[key];if(!f||f.on===false)return '';css();
    var items=(f.items||[]).filter(function(i){return i&&String(i.q||'').trim()&&String(i.a||'').trim()}).slice(0,3);if(!items.length)return '';
    return '<section class="kmfaq" aria-labelledby="kmfaq-'+esc2(key)+'"><h3 class="kmfaq-h" id="kmfaq-'+esc2(key)+'">Common questions</h3>'+items.map(function(i){return '<details class="kmfaq-i"><summary>'+esc2(i.q)+'</summary><div>'+esc2(i.a)+'</div></details>'}).join('')+'</section>'};
  function initHelp(){var nav=document.querySelector('.tabbar')||document.querySelector('header .nav');if(!nav||nav.querySelector('.kmhelp')||!window.KM)return;css();
    var b=document.createElement('button');b.type='button';b.className='kmhelp';b.textContent='?';b.setAttribute('aria-label','Show the help for this page');b.title='Help for this page';b.hidden=true;
    b.addEventListener('click',function(){if(curKey==='home')window.kmWelcome(true);else window.kmGuide(curKey,true)});nav.appendChild(b);updateHelp()}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',initHelp);else initHelp();
  function bar(){
    if(!window.KM){
      document.body.insertAdjacentHTML('afterbegin','<div style="padding:24px;font:15px system-ui,sans-serif"><b>km-data.js could not be loaded.</b><p>Check that km-data.js sits in the same folder as this page and reload (Ctrl+F5).</p></div>');return}
    if(!preview){
      if(flag==='0'&&unpublished()>0){var b=document.createElement('button');b.type='button';b.textContent='Show my unpublished changes';
        b.style.cssText='position:fixed;right:16px;bottom:16px;z-index:60;background:#c2410c;color:#fff;border:0;border-radius:999px;padding:9px 16px;font:700 12.5px "Segoe UI",system-ui,sans-serif;cursor:pointer;box-shadow:0 4px 14px rgba(0,0,0,.25)';
        b.addEventListener('click',window.kmShowDraft);document.body.appendChild(b)}
      return}
    var st=document.createElement('style');
    st.textContent='.kmprev{position:sticky;top:0;z-index:60;background:#c2410c;color:#fff;display:flex;gap:10px;align-items:center;justify-content:space-between;flex-wrap:wrap;padding:8px max(16px,4vw);font:600 13px/1.4 "Segoe UI",system-ui,sans-serif}.kmprev span{flex:1;min-width:200px}.kmprev a,.kmprev button{background:#fff;color:#9a3412;border:0;border-radius:8px;padding:6px 12px;font:700 12.5px "Segoe UI",system-ui,sans-serif;cursor:pointer;text-decoration:none}.kmprev a{background:rgba(255,255,255,.2);color:#fff}';
    document.head.appendChild(st);
    var d=document.createElement('div');d.className='kmprev';d.setAttribute('role','status');
    var n=unpublished();
    d.innerHTML='<span>'+(n?'Showing your '+n+' unpublished change'+(n===1?'':'s')+' from Admin (only in this browser). Other people see them after you publish.':'Preview of the Admin draft. Readers do not see changes until you publish.')+'</span><a href="admin.html">Back to Admin</a><button type="button" id="kmExit">'+(auto?'Show published version':'Exit preview')+'</button>';
    document.body.insertBefore(d,document.body.firstChild);
    document.getElementById('kmExit').addEventListener('click',window.kmExitPreview);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',bar);else bar();
})();
