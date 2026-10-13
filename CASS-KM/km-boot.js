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
