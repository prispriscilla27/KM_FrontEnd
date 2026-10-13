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
