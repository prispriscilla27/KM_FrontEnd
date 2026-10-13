/* Loads the site content for every reader page (index.html, new-joiner-academy.html, academy-week.html, academy-test.html).
   Readers get the published km-data.js. An admin who opens a page from admin.html ("Preview on site") gets the working draft instead,
   with an orange bar on top. The preview flag lives in sessionStorage, so it follows the admin from page to page in that tab only. */
(function(){
  var FLAG='cassKM.preview',DRAFT='cassKM.draft';
  var pub=window.KM_DATA;
  function ss(){try{return window.sessionStorage}catch(e){return null}}
  function ls(){try{return window.localStorage}catch(e){return null}}
  var S=ss(),L=ls();
  var asked=/^#preview/.test(location.hash)||/[?&]preview=1/.test(location.search);
  if(asked&&S){try{S.setItem(FLAG,'1')}catch(e){}
    try{var q=location.search.replace(/([?&])preview=1(&|$)/,function(m,a,b){return b?a:''}),h=/^#preview/.test(location.hash)?'':location.hash;history.replaceState(null,'',location.pathname+q+h)}catch(e){}}
  var draft=null,preview=false;
  try{if(S&&S.getItem(FLAG)==='1'&&L&&L.getItem(DRAFT)){draft=JSON.parse(L.getItem(DRAFT));preview=!!(draft&&draft.taxonomy&&draft.items)}}catch(e){draft=null;preview=false}
  window.KM=preview?draft:pub;
  window.KM_PUBLISHED=pub;
  window.KM_PREVIEW=preview;
  window.kmExitPreview=function(){try{S.removeItem(FLAG)}catch(e){}location.reload()};
  function bar(){
    if(!window.KM){
      document.body.insertAdjacentHTML('afterbegin','<div style="padding:24px;font:15px system-ui,sans-serif"><b>km-data.js could not be loaded.</b><p>Check that km-data.js sits in the same folder as this page and reload (Ctrl+F5).</p></div>');return}
    if(!preview)return;
    var st=document.createElement('style');
    st.textContent='.kmprev{position:sticky;top:0;z-index:60;background:#c2410c;color:#fff;display:flex;gap:10px;align-items:center;justify-content:space-between;flex-wrap:wrap;padding:8px max(16px,4vw);font:600 13px/1.4 "Segoe UI",system-ui,sans-serif}.kmprev span{flex:1;min-width:200px}.kmprev a,.kmprev button{background:#fff;color:#9a3412;border:0;border-radius:8px;padding:6px 12px;font:700 12.5px "Segoe UI",system-ui,sans-serif;cursor:pointer;text-decoration:none}.kmprev a{background:rgba(255,255,255,.2);color:#fff}';
    document.head.appendChild(st);
    var d=document.createElement('div');d.className='kmprev';d.setAttribute('role','status');
    d.innerHTML='<span>Preview of unpublished changes. Readers do not see this until you publish.</span><a href="admin.html">Back to Admin</a><button type="button" id="kmExit">Exit preview</button>';
    document.body.insertBefore(d,document.body.firstChild);
    document.getElementById('kmExit').addEventListener('click',window.kmExitPreview);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',bar);else bar();
})();
