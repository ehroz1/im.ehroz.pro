/* =========================================================
   Иконки
========================================================= */
const svgUrl = s => 'url("data:image/svg+xml,'+encodeURIComponent(s)+'")';
const DKI = {
  ps: svgUrl('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38"><path fill-rule="evenodd" d="M8 2h22a6 6 0 0 1 6 6v22a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6V8a6 6 0 0 1 6-6zm2.5 9.5V27h3v-5h2.3c3.4 0 5.4-1.9 5.4-5.3 0-3.2-2-5.2-5.3-5.2zm3 2.6h2.1c1.6 0 2.6.9 2.6 2.6s-1 2.7-2.6 2.7h-2.1zm14.6 2.3c-2.7 0-4.3 1.4-4.3 3.3 0 1.7 1.1 2.5 3 3 1.4.4 1.9.6 1.9 1.2 0 .6-.6.9-1.5.9-1 0-2-.4-2.8-1l-.9 2c1 .7 2.3 1.1 3.7 1.1 2.7 0 4.3-1.3 4.3-3.3 0-1.7-1-2.5-3-3-1.4-.4-1.9-.6-1.9-1.1s.5-.8 1.3-.8c.9 0 1.8.3 2.5.8l.9-2c-.9-.6-2-1-3.2-1z"/></svg>'),
  mj: svgUrl('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38"><path d="M19 3c4 6 6.5 13 6.6 22H19z"/><path d="M16.8 8c-3 5-5.4 11-6.1 17h6.1z"/><path d="M4 28h30l-2.4 4.2A3 3 0 0 1 29 34H9a3 3 0 0 1-2.6-1.8z"/></svg>'),
  gm: svgUrl('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38"><path d="M19 2c1 9 7.9 16 17 17-9.1 1-16 7.9-17 17-1-9.1-7.9-16-17-17 9.1-1 16-7.9 17-17z"/></svg>'),
};
const DKT=['<svg viewBox="0 0 24 24"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 7h8M8 11h8M8 15h5"/></svg>',
           '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 15l5-4 4 3 3-2 6 4"/></svg>',
           '<svg viewBox="0 0 24 24"><path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2z"/><path d="M22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z"/></svg>'];
const TOOL_IC = {
  ps:['#001e36','<b style="color:#31a8ff">Ps</b>'],
  ai:['#330000','<b style="color:#ff9a00">Ai</b>'],
  id:['#49021f','<b style="color:#ff3366">Id</b>'],
  fi:['#fff','<svg viewBox="0 0 38 57"><path fill="#1abcfe" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"/><path fill="#0acf83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z"/><path fill="#ff7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19z"/><path fill="#f24e1e" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"/><path fill="#a259ff" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"/></svg>'],
  mj:['#fff','<svg viewBox="0 0 38 38" fill="#111"><path d="M19 3c4 6 6.5 13 6.6 22H19z"/><path d="M16.8 8c-3 5-5.4 11-6.1 17h6.1z"/><path d="M4 28h30l-2.4 4.2A3 3 0 0 1 29 34H9a3 3 0 0 1-2.6-1.8z"/></svg>'],
  kl:['#0b0b0f','<svg viewBox="0 0 38 38"><defs><linearGradient id="kg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2ff3c4"/><stop offset="1" stop-color="#3d7bff"/></linearGradient></defs><path fill="none" stroke="url(#kg)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" d="M10 7v24M28 7 14 19l14 12"/></svg>'],
  gm:['#fff','<svg viewBox="0 0 38 38"><defs><linearGradient id="gg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4f8bff"/><stop offset=".6" stop-color="#9b72f2"/><stop offset="1" stop-color="#d96570"/></linearGradient></defs><path fill="url(#gg)" d="M19 2c1 9 7.9 16 17 17-9.1 1-16 7.9-17 17-1-9.1-7.9-16-17-17 9.1-1 16-7.9 17-17z"/></svg>'],
  cd:['#fff','<svg viewBox="0 0 38 38"><circle cx="19" cy="17" r="12" fill="#3fae2a"/><path d="M19 29c-2 3-4 5-7 6" stroke="#2c7f1d" stroke-width="2.4" fill="none" stroke-linecap="round"/><path d="M14 11c3-2 8-1 9 3" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round"/></svg>'],
  ca:['conic-gradient(from 210deg,#00c4cc,#7d2ae8,#00c4cc)','<b style="font:italic 800 24px var(--font-medeo-sans);color:#fff">C</b>'],
};
const ARR='<svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10 10 4M5 4h5v5"/></svg>';
const ARL='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 8h-11M7 3.5 2.5 8 7 12.5"/></svg>';
const ARRR='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 8h11M9 3.5 13.5 8 9 12.5"/></svg>';
const TGI='<svg viewBox="0 0 24 24" fill="#fff"><path d="M3 11.4 20.2 4.6c.8-.3 1.5.2 1.3 1.4l-2.9 13.7c-.2 1-.8 1.2-1.6.8l-4.4-3.3-2.1 2c-.2.2-.4.4-.9.4l.3-4.5 8.2-7.4c.4-.3-.1-.5-.5-.2L7.4 13.9 3 12.5c-.9-.3-.9-.9.1-1.1z"/></svg>';
const CURSOR='<svg viewBox="0 0 28 34"><path d="M3 2v26l7-6.5 4.5 10 4.2-1.9-4.4-9.8H24z" fill="#111" stroke="#fff" stroke-width="2" stroke-linejoin="round"/></svg>';
const SPARK='<svg viewBox="0 0 24 24" fill="#6b6e6b"><path d="M10 2c.6 4.9 3.1 7.4 8 8-4.9.6-7.4 3.1-8 8-.6-4.9-3.1-7.4-8-8 4.9-.6 7.4-3.1 8-8z"/><path d="M19 13c.3 2.3 1.4 3.4 3.7 3.7-2.3.3-3.4 1.4-3.7 3.7-.3-2.3-1.4-3.4-3.7-3.7 2.3-.3 3.4-1.4 3.7-3.7z"/></svg>';
const IC={
  tg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 11.4 20.2 4.6c.8-.3 1.5.2 1.3 1.4l-2.9 13.7c-.2 1-.8 1.2-1.6.8l-4.4-3.3-2.1 2c-.2.2-.4.4-.9.4l.3-4.5 8.2-7.4c.4-.3-.1-.5-.5-.2L7.4 13.9 3 12.5c-.9-.3-.9-.9.1-1.1z"/></svg>',
  mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/></svg>',
  chat:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3.5c-4.7 0-8.5 3.1-8.5 7 0 2.2 1.2 4.1 3.1 5.4-.1 1-.6 2.1-1.4 2.9 1.9-.1 3.4-.8 4.4-1.6.8.2 1.6.3 2.4.3 4.7 0 8.5-3.1 8.5-7s-3.8-7-8.5-7z"/></svg>',
  doc:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 3h8l4 4v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm7 1.5V8h3.5zM8 12h8v1.5H8zm0 3.5h8V17H8z"/></svg>',
  prev:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 6v12L8.5 12zM6 6h2v12H6z"/></svg>',
  next:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 6v12l9.5-6zM16 6h2v12h-2z"/></svg>',
  play:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z"/></svg>',
  pause:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z"/></svg>',
  grid:'<svg viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="4" width="7" height="7" rx="2"/><rect x="13" y="4" width="7" height="7" rx="2"/><rect x="4" y="13" width="7" height="7" rx="2"/><rect x="13" y="13" width="7" height="7" rx="2"/></svg>',
  up:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V6M6 11.5 12 5.5l6 6"/></svg>',
};
const faceSvg=(()=>{
  let t='';
  for(let k=0;k<12;k++){ const maj=k%3===0, a=k*30*Math.PI/180, r1=maj?38:41, r2=45;
    t+='<line x1="'+(50+r1*Math.sin(a)).toFixed(2)+'" y1="'+(50-r1*Math.cos(a)).toFixed(2)+'" x2="'+(50+r2*Math.sin(a)).toFixed(2)+'" y2="'+(50-r2*Math.cos(a)).toFixed(2)+'" stroke="'+(maj?'#111':'#c7c7cc')+'" stroke-width="'+(maj?2.2:1.2)+'" stroke-linecap="round"/>'; }
  return '<svg viewBox="0 0 100 100" aria-hidden="true">'+t+
    '<g class="hd" id="clH"><line x1="50" y1="52" x2="50" y2="29" stroke="#111" stroke-width="3.6" stroke-linecap="round"/></g>'+
    '<g class="hd" id="clM"><line x1="50" y1="53" x2="50" y2="17" stroke="#111" stroke-width="2.6" stroke-linecap="round"/></g>'+
    '<g class="hd sc" id="clS"><line x1="50" y1="58" x2="50" y2="14" stroke="#ff3b30" stroke-width="1.3" stroke-linecap="round"/></g>'+
    '<circle cx="50" cy="50" r="2.6" fill="#ff3b30"/></svg>';
})();

/* =========================================================
   Состояние
========================================================= */
let lang = (()=>{ try{ return localStorage.getItem('lang')||'ru'; }catch(e){ return 'ru'; } })();
if(!T[lang]) lang='ru';
let L = T[lang];
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
let timers=[];
const later=(fn,ms)=>{const id=setTimeout(fn,ms);timers.push(id);return id;};
const clearTimers=()=>{timers.forEach(clearTimeout);timers=[];};
const go=(href,ext)=>'<a class="go" href="'+href+'"'+(ext?' target="_blank" rel="noopener"':'')+' aria-label="open">'+ARR+'</a>';
const IDS=CASES.map(c=>c[0]);
const caseRows=()=>CASES.map(([id,cat,ic,col])=>[id,cat,ic,col,L.cs[id].w,L.cs[id].ws]);
const footer=()=>`<footer>${L.foot} — <a href="${ME.tg}" target="_blank" rel="noopener">Telegram</a></footer>`;
const look=()=>`<div class="look"><svg viewBox="0 0 14 14"><path d="M2 1l10 5-4 1.5L6.5 12z" fill="#b0b0b6"/></svg>${L.look}</div>`;

function plural(n,f){const a=n%10,b=n%100;return f[(a===1&&b!==11)?0:(a>=2&&a<=4&&(b<10||b>=20))?1:2]}
function expText(){
  const d=new Date(), total=(d.getFullYear()-ME.careerStart[0])*12+(d.getMonth()+1-ME.careerStart[1]), Y=Math.floor(total/12), M=total%12;
  if(lang==='en') return Y+' year'+(Y!==1?'s':'')+(M?' '+M+' month'+(M!==1?'s':''):'');
  return Y+' '+plural(Y,['год','года','лет'])+(M?' '+M+' '+plural(M,['месяц','месяца','месяцев']):'');
}

/* =========================================================
   Экраны телефонов
========================================================= */
function tgScreen(){
  const ru=lang==='ru';
  return `<div class="app">
    <div class="sb">9:41<i>●●● ▮</i></div>
    <div class="tgh"><span class="bk">‹</span><span class="av2">WE</span><div><b>WE Media Bot</b><small>${ru?'бот':'bot'}</small></div></div>
    <div class="tgc">
      <div class="bb">${ru?'Привет! Это бот WE project media 👋':'Hi! This is the WE project media bot 👋'}</div>
      <div class="bb card"><div class="cov2"><small>${ru?'НОВЫЙ ВЫПУСК':'NEW ISSUE'}</small><b>${ru?'Дизайн,<br>который<br>работает':'Design<br>that<br>works'}</b></div><p>${ru?'Свежий номер уже в канале':'The new issue is in the channel'}</p></div>
      <div class="kb"><span>📰 ${ru?'Новости':'News'}</span><span>🎬 ${ru?'Видео':'Video'}</span><span>📢 ${ru?'Реклама':'Ads'}</span><span>💬 ${ru?'Связь':'Contact'}</span></div>
      <div class="bb me">📢 ${ru?'Реклама':'Ads'}</div>
      <div class="bb">${ru?'Отправьте бриф — дизайнер ответит за час.':'Send a brief — a designer replies within an hour.'}</div>
    </div>
    <div class="tgi"><span>${ru?'Сообщение':'Message'}</span><i></i></div>
  </div>`;
}
function igScreen(){
  const ru=lang==='ru';
  return `<div class="app">
    <div class="sb">9:41<i>●●● ▮</i></div>
    <div class="igh"><span class="rg"><i>WE</i></span><b>we.project.media</b><em>•••</em></div>
    <div class="igp"><small>${ru?'КАМПАНИЯ 2025':'CAMPAIGN 2025'}</small><b>${ru?'Смотри<br>глубже.':'Look<br>deeper.'}</b><span class="tg2">${ru?'Читать →':'Read →'}</span></div>
    <div class="iga"><span>♡</span><span>💬</span><span>↗</span><span>⌑</span></div>
    <div class="igt"><b>${ru?'1 248 отметок «Нравится»':'1,248 likes'}</b><small>${ru?'+35% к охвату кампании':'+35% campaign reach'}</small></div>
    <div class="ign"></div>
  </div>`;
}

/* =========================================================
   Главная
========================================================= */
function home(){
  let i=0; const n=()=>i++;
  return `${look()}
  <div class="bento">
    <section class="t a-intro s21 intro" style="--i:${n()}">
      <h1>${L.intro.h}</h1>
      <ul>${L.intro.li.map((s,k)=>'<li style="--k:'+k+'">'+s+'</li>').join('')}</ul>
    </section>

    <section class="t a-tools s21 tools" style="--i:${n()}">
      <div class="lbl">${L.tools.lbl}</div>
      <div class="tcard"><div class="tc" id="tc"><b></b><span></span></div></div>
      <div class="dock" id="dock">${L.tools.items.map((t,k)=>'<button class="ic" data-k="'+k+'" style="background:'+TOOL_IC[t[0]][0]+'" aria-label="'+t[1]+'">'+TOOL_IC[t[0]][1]+'</button>').join('')}</div>
    </section>

    <section class="t a-ph1 s12 ph" style="--i:${n()}">
      <div class="phone" style="--rot:-9deg"><div class="scr">${tgScreen()}</div></div>
      ${go('tg-bots')}
    </section>

    <section class="t a-prof prof" style="--i:${n()}">
      <div class="hd">
        <div class="who"><div class="av"><img src="${ME.photo}" alt=""></div><div><b>${L.prof.name}</b><small>${L.prof.nick}</small></div></div>
        <a class="tg" href="${ME.tg}" target="_blank" rel="noopener" aria-label="Telegram">${TGI}</a>
      </div>
      <p>${L.prof.p}</p>
      <a class="btn" href="${ME.tg}" target="_blank" rel="noopener">${L.prof.btn} ${ARR.replace('<svg','<svg width="13" height="13"')}</a>
    </section>

    <section class="t a-wave s21 dk" style="--i:${n()}" id="dkTile">
      <div class="st"><i></i>${L.wave}</div>
      <div class="dkd" id="dkd" data-k="0">
        <div class="dkbg"><div class="dkpn">${dkLists()}</div><div class="dkdv"></div></div>
        <div class="dkt" role="tablist" aria-label="Tools">
          <span class="pl hp"></span><span class="pl ap"></span>
          <button role="tab" aria-selected="false" data-k="0" style="left:0;width:201.33px"><i style="--m:${DKI.ps}"></i>Photoshop</button>
          <button role="tab" aria-selected="false" data-k="1" style="left:207.33px;width:207.33px"><i style="--m:${DKI.mj}"></i>Midjourney</button>
          <button role="tab" aria-selected="false" data-k="2" style="left:420.67px;width:207.33px"><i style="--m:${DKI.gm}"></i>Gemini</button>
        </div>
        <div class="dkcur" id="dkcur">${CURSOR}</div>
      </div>
      ${go('contact')}
    </section>

    <section class="t a-photo photo" style="--i:${n()}">
      <img src="${ME.photo}" alt="${L.prof.name}">
      <div class="chip">${L.photo}</div>
      ${go('about')}
    </section>

    <section class="t a-cases s22 cases" style="--i:${n()}" id="casesTile">
      <div class="tabs" id="tabs">${L.cases.tabs.map((t,k)=>'<button aria-pressed="'+(k===0)+'" data-f="'+t[0]+'"><i style="background:'+t[2]+'"></i>'+t[1]+'</button>').join('')}<kbd>⌘K</kbd></div>
      <div class="pal">
        <div class="hint"><span>${L.cases.hint[0]}</span><span>${L.cases.hint[1]}</span></div>
        <div class="rows" id="rows" role="listbox" tabindex="0" aria-label="Cases"></div>
      </div>
    </section>

    <section class="t a-ai s22 ai" style="--i:${n()}">
      <div class="fx" aria-label="${L.ai.t}">
        <div class="fb" aria-hidden="true"></div>
        ${L.ai.c.map((c,k)=>'<div class="fc" style="--k:'+k+'" aria-hidden="true"><b>'+c[0]+'</b><span>'+c[1]+'</span></div>').join('')}
        <div class="fg"><i>${SPARK}</i><b>${L.ai.t}</b><span>${L.ai.s}</span><em>›</em></div>
      </div>
      ${go('ai-retouch')}
    </section>

    <section class="t a-ui ui" style="--i:${n()}">
      <button class="bt" id="uiBt">${L.ui.bt}</button>
      <div class="seg" id="uiSeg"><span class="k"></span>${L.ui.seg.map((s,k)=>'<button aria-pressed="'+(k===1)+'" data-k="'+k+'">'+s+'</button>').join('')}</div>
      <div class="line"><button class="sw" role="switch" aria-checked="true" id="uiSw" aria-label="toggle"></button><span class="tag">${L.ui.tag}</span></div>
      <div class="cap">${L.ui.cap}</div>
      ${go('magazines')}
    </section>

    <section class="t a-dm dm" style="--i:${n()}">
      <div class="dmw">
        <div class="h"><b style="font-weight:500">${L.dm.h}</b><span>${L.dm.st}</span></div>
        <div class="ring">
          <svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="42" stroke="#2a2d2a"/><circle id="dmRing" cx="50" cy="50" r="42" stroke="#d4f25a" stroke-dasharray="264" stroke-dashoffset="264"/></svg>
          <div class="v"><b id="dmT">0:00</b><small>${L.dm.of}</small></div>
        </div>
      </div>
      ${go('about')}
    </section>

    <section class="t a-keys keys" style="--i:${n()}">
      <div class="cap">${L.keys}</div>
      <button class="key" id="k1" aria-label="⌘">⌘</button><button class="key" id="k2" aria-label="K">K</button>
    </section>

    <section class="t a-ph2 s12 ph" style="--i:${n()}">
      <div class="phone" style="--rot:-7deg"><div class="scr">${igScreen()}</div></div>
      ${go('campaigns')}
    </section>

    <section class="t a-yv word yv" style="--i:${n()}">
      ${Array.from({length:7},(_,k)=>'<i class="pet" style="left:'+(8+k*13)+'%;animation-delay:'+(k*0.33)+'s"></i>').join('')}
      <div class="w1">WE<i>.</i><small>project media</small></div><div class="w2">${L.yv.w2}</div>
      ${go('we-media')}
    </section>

    <section class="t a-tr word tr" style="--i:${n()}">
      <div class="w1">${L.tr.w1}</div><div class="w2">${L.tr.w2}</div>
      ${go('orzu')}
    </section>

    <section class="t a-exp exp" style="--i:${n()}">
      <div class="card"><div class="l">${L.exp.l1}</div><div class="big">${expText()}</div>
        <div class="yrs" id="yrs">${L.exp.yrs.map((y,k)=>'<button aria-pressed="false" data-k="'+k+'">'+y[0]+'<small>'+y[1]+'</small></button>').join('')}</div></div>
      <div class="card"><div class="l">${L.exp.l2}</div><div class="what" id="expW"></div></div>
      ${go('about')}
    </section>

    <section class="t a-cv s12 cv" style="--i:${n()}">
      <div class="doc"><img src="${ME.cvImg}" alt="" loading="lazy"></div>
      <div class="cap">${L.cv}</div>
      <a class="go" href="${ME.cv}" target="_blank" rel="noopener" aria-label="${L.cv}">${ARR}</a>
    </section>
  </div>
  ${footer()}`;
}

function dkLists(){
  const D=L.dk, sp=(c,x)=>'<span class="'+c+'">'+x+'</span>';
  const a='<div class="ls" data-k="0">'+D.t0.map((r,k)=>'<div class="dkr tl"><span class="tile">'+DKT[k]+'</span><span class="tx"><span class="ti">'+r[0]+'<em>↗</em></span>'+sp('su',r[1])+'</span><span class="rt">'+sp('dkg',r[2])+'</span></div>').join('')+'</div>';
  const row=(ic,r)=>'<div class="dkr"><i class="lead" style="--m:'+ic+'"></i>'+sp('ti1',r[0])+'<span class="rt">'+(r[1]?sp('dkg',r[1]):'')+sp('dt',r[2])+'</span></div>';
  return a+'<div class="ls" data-k="1">'+D.t1.map(r=>row(DKI.mj,r)).join('')+'</div><div class="ls" data-k="2">'+D.t2.map(r=>row(DKI.gm,r)).join('')+'</div>';
}

/* =========================================================
   Обо мне
========================================================= */
function chatTile(cls, idx){
  const A=L.about;
  return `
  <section class="t ${cls} chat" style="--i:${idx}">
      <div class="msgs" id="msgs">
        <div class="m them"><div class="av"><img src="${ME.photo}" alt=""></div><div class="col"><span class="nm">${A.chat.name}</span><div class="b">${A.chat.hello}</div></div></div>
        <button class="m me quick" id="quick" type="button"><span class="b">${A.chat.quick}</span></button>
      </div>
      <form class="send" id="send" autocomplete="off">
        <a class="ci" href="${ME.tg}" target="_blank" rel="noopener" aria-label="Telegram">${IC.tg}</a>
        <a class="ci" href="mailto:${ME.mail}" aria-label="Email">${IC.mail}</a>
        <div class="field"><input id="ci" type="text" placeholder="${A.chat.ph}" aria-label="${A.chat.ph}" maxlength="200"><button type="submit" id="cs" aria-label="${A.chat.send}">${IC.up}</button></div>
      </form>
    </section>`;
}

function about(){
  let i=0; const n=()=>i++;
  const A=L.about, soc=A.soc;
  return `${look()}
  <div class="bento">
    <section class="t a-bio s23 bio" style="--i:${n()}">
      <h1>${A.h}</h1>
      ${A.secs.map((s,k)=>'<div class="sec" style="--k:'+k+'"><h2>'+s[0]+'</h2><p>'+s[1]+'</p></div>').join('')}
      <div class="soc">
        <a href="${ME.tg}" target="_blank" rel="noopener" aria-label="${soc[0]}">${IC.tg}</a>
        <a href="mailto:${ME.mail}" aria-label="${soc[1]}">${IC.mail}</a>
        <a href="${ME.cv}" target="_blank" rel="noopener" aria-label="${soc[2]}">${IC.doc}</a>
        <a href="contact" aria-label="${soc[3]}">${IC.chat}</a>
      </div>
    </section>

    <section class="t a-post prof post" style="--i:${n()}">
      <div class="hd">
        <div class="who"><div class="av"><img src="${ME.photo}" alt=""></div><div><b>${L.prof.name}</b><small>${L.prof.nick}</small></div></div>
        <a class="tg" href="${ME.tg}" target="_blank" rel="noopener" aria-label="Telegram">${TGI}</a>
      </div>
      <p>${A.post.p}</p>
      <a class="btn" href="work">${A.post.btn} ${ARR.replace('<svg','<svg width="13" height="13"')}</a>
    </section>

    <section class="t a-play play" style="--i:${n()}">
      <a class="ico" href="work" aria-label="${L.nav[2][1]}">${IC.grid}</a>
      <a class="cov" id="pcov" href="${IDS[0]}"><span id="pab"></span></a>
      <div class="meta"><b id="pnm"></b><small id="psb"></small></div>
      <div class="ctl">
        <span class="pf" id="ppf"></span>
        <button id="ppv" aria-label="${A.play.prev}">${IC.prev}</button>
        <button class="pp" id="ppp" aria-label="${A.play.play}">${IC.play}</button>
        <button id="pnx" aria-label="${A.play.next}">${IC.next}</button>
        <span class="cn" id="pcn"></span>
      </div>
    </section>

    <section class="t a-me photo me-t" style="--i:${n()}">
      <img src="${ME.photo}" alt="${L.prof.name}">
      <div class="chip">${L.photo}</div>
    </section>

    <section class="t a-clock clock" style="--i:${n()}">
      <div class="face">${faceSvg}</div>
      <div class="meta"><b id="clT">--:--</b><small>${ME.place[lang]}, <span id="clZ">UTC+5</span></small></div>
      <div class="pillst"><span id="clD"></span></div>
    </section>

    ${chatTile('a-chat', n())}
  </div>
  ${footer()}`;
}

/* =========================================================
   Работы
========================================================= */
function work(){
  let i=0; const n=()=>i++;
  return `<div class="wk">${CASES.map(([id,,ic,col])=>{
    const c=L.cs[id];
    return '<a class="t wc" href="'+id+'" style="--i:'+n()+'"><div class="hd2"><div><h2>'+c.t+'</h2><p>'+c.s+'</p></div>'+
      '<span class="arr">'+ARR+'</span></div><div class="pv"><span class="bg" style="background:'+col+'">'+ic+'</span><span class="sn">'+L.work.soon+'</span></div></a>';
  }).join('')}</div>
  ${footer()}`;
}

/* =========================================================
   Контакты
========================================================= */
function contact(){
  let i=0; const n=()=>i++;
  const C=L.contact;
  return `
  <div class="bento ctb">
    ${chatTile('a-cchat s21', n())}

    <section class="t a-tg prof tgt" style="--i:${n()}">
      <div class="hd">
        <div><b style="font-size:15px;font-weight:600">${L.prof.name}</b><small style="display:block;font-size:14px;color:#9a9aa0;margin-top:2px">${L.prof.nick}</small></div>
        <a class="tg" href="${ME.tg}" target="_blank" rel="noopener" aria-label="Telegram">${TGI}</a>
      </div>
      <div class="tgm" aria-hidden="true">
        <div class="bb2">${C.tg.b1}</div>
        <div class="bb2">${C.tg.b2}</div>
        <div class="tm"><i></i>${C.tg.st}</div>
      </div>
      <a class="btn" href="${ME.tg}" target="_blank" rel="noopener">${C.tg.btn} ${ARR.replace('<svg','<svg width="13" height="13"')}</a>
    </section>

    <section class="t a-bh prof tgt" style="--i:${n()}">
      <div class="hd">
        <div style="min-width:0"><b style="font-size:15px;font-weight:600">${L.prof.name}</b><small style="display:block;font-size:14px;color:#9a9aa0;margin-top:2px;overflow:hidden;text-overflow:ellipsis">${ME.mail}</small></div>
        <a class="tg ml" href="mailto:${ME.mail}" aria-label="Email"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/></svg></a>
      </div>
      <form class="cmp fm" id="mlF" autocomplete="off">
        <div class="r"><span>${C.ml.to}</span><span style="color:var(--ink);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${ME.mail}</span></div>
        <div class="r"><input id="mlS" type="text" value="${C.ml.subj}" aria-label="${C.ml.sl}" maxlength="120"></div>
        <textarea class="r" id="mlB" placeholder="${C.ml.ph}" aria-label="${C.ml.bl}" maxlength="2000"></textarea>
      </form>
      <a class="btn" id="mlGo" href="mailto:${ME.mail}">${C.ml.btn} ${ARR.replace('<svg','<svg width="13" height="13"')}</a>
    </section>
  </div>
  ${footer()}`;
}

/* =========================================================
   Страница кейса
========================================================= */
function casePage(id){
  const c=L.cs[id], S=L.csl, row=CASES.find(x=>x[0]===id);
  const nx=CASES[(IDS.indexOf(id)+1)%CASES.length][0];
  return `
  <article class="cs">
    <a class="back" href="work">${ARL}${S.back}</a>
    <h1>${c.t}</h1>
    <p class="sub">${c.s}</p>
    <div class="mt">${S.meta.map((m,k)=>'<div><span>'+m+'</span><b>'+c.meta[k]+'</b></div>').join('')}</div>
    ${c.p.map(p=>'<p class="bd">'+p+'</p>').join('')}
    <div class="stg"><div class="mock"><span class="bg" style="background:${row[3]}">${row[2]}</span><span class="sn">${S.soon}</span></div></div>
    <h2>${S.task}</h2>
    <p class="bd">${c.task}</p>
    <h2>${S.did}</h2>
    <ul class="ms">${c.did.map(x=>'<li>'+x+'</li>').join('')}</ul>
    <h2>${S.res}</h2>
    <div class="res">${c.res.map(r=>'<div><b>'+r[0]+'</b><span>'+r[1]+'</span></div>').join('')}</div>
    <a class="nx" href="${nx}"><div><small>${S.next}</small><b>${L.cs[nx].t}</b></div><span class="arr2">${ARRR}</span></a>
  </article>
  ${footer()}`;
}

function wip(){
  return `<div class="wip"><div><span class="e4">404</span><h2>${L.wip.h}</h2><p>${L.wip.p}</p><a href="">${L.wip.a}</a></div></div>${footer()}`;
}

/* =========================================================
   Поведение
========================================================= */
function wireNav(page){
  const pill=document.getElementById('pill');
  const active = page==='' ? '' : (['about','work','contact'].includes(page) ? page : (IDS.includes(page) ? 'work' : ''));
  pill.innerHTML='<span class="hl" id="hl"></span>'+L.nav.map(([h,t])=>
    '<a href="'+(h||'./')+'" data-h="'+h+'" class="'+(h===active?'on':'')+'">'+(h==='work'?'<span class="rd"></span>':'')+t+'</a>').join('');
  const hl=pill.querySelector('#hl'), links=[...pill.querySelectorAll('a')];
  const moveTo=a=>{ hl.style.transform='translateX('+(a.offsetLeft-5)+'px)'; };
  const on=links.find(a=>a.classList.contains('on'))||links[0];
  moveTo(on);
  links.forEach(a=>a.addEventListener('mouseenter',()=>moveTo(a)));
  pill.addEventListener('mouseleave',()=>moveTo(on));
}

function wireDock(){
  const dock=document.getElementById('dock'), tc=document.getElementById('tc');
  const ics=[...dock.querySelectorAll('.ic')], items=L.tools.items;
  const show=k=>{
    ics.forEach((b,j)=>b.classList.toggle('on',j===k));
    tc.querySelector('b').textContent=items[k][1];
    tc.querySelector('span').textContent=items[k][2];
    const box=tc.parentElement.getBoundingClientRect(), r=ics[k].getBoundingClientRect();
    let x=r.left+r.width/2-box.left-tc.offsetWidth/2;
    x=Math.max(0,Math.min(x,box.width-tc.offsetWidth));
    tc.style.transform='translateX('+x+'px)';
  };
  dock.addEventListener('mousemove',e=>{
    if(reduce||matchMedia('(hover:none)').matches) return;
    ics.forEach(b=>{
      const r=b.getBoundingClientRect(), d=Math.abs(e.clientX-(r.left+r.width/2));
      const s=1+Math.max(0,1-d/130)*0.45;
      b.style.transform='scale('+s.toFixed(3)+') translateY('+(-(s-1)*14).toFixed(1)+'px)';
    });
  });
  dock.addEventListener('mouseleave',()=>ics.forEach(b=>b.style.transform=''));
  ics.forEach((b,k)=>{ b.addEventListener('mouseenter',()=>show(k)); b.addEventListener('focus',()=>show(k)); b.addEventListener('click',()=>show(k)); });
  requestAnimationFrame(()=>show(0));
}

function wireDK(){
  const tile=document.getElementById('dkTile'), d=document.getElementById('dkd'), cur=document.getElementById('dkcur');
  const tabs=[...d.querySelectorAll('.dkt button')], lists=[...d.querySelectorAll('.ls')];
  const hp=d.querySelector('.hp'), ap=d.querySelector('.ap');
  const X=[0,207.33,420.67], W=[201.33,207.33,207.33];
  let active=-1, auto=true, resumeT=null;
  const fit=()=>{
    const w=tile.clientWidth, h=tile.clientHeight, open=active>=0;
    const sc=(open?Math.min((w-28)/660,(h-24)/430):Math.min((w-48)/660,1.05))*.85;
    const b=open?Math.max(12,(h-430*sc)/2):Math.max(12,(h-118*sc)/2-6);
    d.style.transform='translate(-50%,'+(-b)+'px) scale('+sc.toFixed(4)+')';
  };
  const setPill=(el,k,on)=>{ el.style.width=W[k]+'px'; el.style.transform='translateX('+X[k]+'px)'; el.style.opacity=on?1:0; };
  const show=k=>{
    active=k; d.classList.toggle('open',k>=0); tile.classList.toggle('open',k>=0);
    if(k>=0) d.dataset.k=k;
    tabs.forEach((t,i)=>t.setAttribute('aria-selected',i===k));
    lists.forEach((l,i)=>l.classList.toggle('on',i===k));
    if(k>=0) setPill(ap,k,true); else ap.style.opacity=0;
    fit();
  };
  const tabXY=k=>[X[k]+16+W[k]/2+8, 371];
  const moveTo=(x,y)=>{ cur.style.setProperty('--cx',x+'px'); cur.style.setProperty('--cy',y+'px'); };
  const rest=()=>moveTo(560,445);
  const press=()=>{ cur.classList.add('press'); later(()=>cur.classList.remove('press'),160); };
  const seq=[0,1,2,-1]; let si=0;
  const step=()=>{
    if(!auto) return;
    const k=seq[si%seq.length]; si++;
    if(k<0){
      const [x,y]=tabXY(active<0?0:active); moveTo(x,y);
      later(()=>{ if(!auto) return; press(); show(-1); },900);
      later(()=>{ if(!auto) return; rest(); },1500);
      later(step,3400);
      return;
    }
    const [x,y]=tabXY(k); moveTo(x,y); setPill(hp,k,true);
    later(()=>{ if(!auto) return; press(); setPill(hp,k,false); show(k); },950);
    later(step,950+2600);
  };
  const startAuto=()=>{ if(reduce) return; auto=true; cur.classList.remove('hide'); show(-1); rest(); si=0; later(step,1300); };
  const stopAuto=()=>{ auto=false; cur.classList.add('hide'); clearTimeout(resumeT); };
  tabs.forEach((t,k)=>{
    t.addEventListener('mouseenter',()=>{ if(!auto) setPill(hp,k,true); });
    t.addEventListener('mouseleave',()=>{ hp.style.opacity=0; });
    t.addEventListener('click',()=>{ const was=auto; stopAuto(); setPill(hp,k,false); show((!was&&active===k)?-1:k); });
  });
  tile.addEventListener('pointerenter',e=>{ if(e.pointerType==='touch') return; stopAuto(); });
  tile.addEventListener('pointerleave',e=>{ if(e.pointerType==='touch'||reduce) return; resumeT=setTimeout(startAuto,2200); timers.push(resumeT); });
  if('ResizeObserver' in window) new ResizeObserver(fit).observe(tile); else addEventListener('resize',fit);
  d.style.transition='none'; show(-1); rest(); requestAnimationFrame(()=>requestAnimationFrame(()=>{d.style.transition='';}));
  if(reduce){ cur.classList.add('hide'); show(1); } else later(startAuto,900);
}

function wireCases(){
  const rows=document.getElementById('rows'), tabs=document.getElementById('tabs');
  let f='all', sel=0, list=[];
  const draw=()=>{
    list=caseRows().filter(r=>f==='all'||r[1]===f);
    sel=Math.min(sel,list.length-1);
    rows.innerHTML=list.map((r,k)=>'<a class="row'+(k===sel?' sel':'')+'" href="'+r[0]+'" role="option" aria-selected="'+(k===sel)+'" style="--k:'+k+'" data-k="'+k+'">'+
      '<span class="ri" style="background:'+r[3]+'">'+r[2]+'</span><span><b>'+r[4]+'</b><small>'+r[5]+'</small></span><span class="ar">'+ARR.replace('<svg','<svg width="16" height="16"')+'</span></a>').join('');
    rows.querySelectorAll('.row').forEach(a=>a.addEventListener('mouseenter',()=>{sel=+a.dataset.k;mark();}));
  };
  const mark=(scroll)=>rows.querySelectorAll('.row').forEach((a,k)=>{a.classList.toggle('sel',k===sel);a.setAttribute('aria-selected',k===sel); if(scroll&&k===sel) a.scrollIntoView({block:'nearest'});});
  tabs.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>{
    f=b.dataset.f; sel=0; tabs.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed',x===b)); draw();
  }));
  rows.addEventListener('keydown',e=>{
    if(e.key==='ArrowDown'){sel=(sel+1)%list.length;mark(1);e.preventDefault();}
    if(e.key==='ArrowUp'){sel=(sel-1+list.length)%list.length;mark(1);e.preventDefault();}
    if(e.key==='Enter'){ navTo(list[sel][0]); }
  });
  draw();
}

function wireUI(){
  const bt=document.getElementById('uiBt');
  bt.addEventListener('click',()=>{ bt.classList.add('done'); bt.textContent=L.ui.done; later(()=>{bt.classList.remove('done');bt.textContent=L.ui.bt;},1300); });
  const seg=document.getElementById('uiSeg'), k=seg.querySelector('.k'), bs=[...seg.querySelectorAll('button')];
  const set=j=>{bs.forEach((b,x)=>b.setAttribute('aria-pressed',x===j)); k.style.transform='translateX('+(j*62)+'px)';};
  bs.forEach((b,j)=>b.addEventListener('click',()=>set(j))); set(1);
  const sw=document.getElementById('uiSw');
  sw.addEventListener('click',()=>sw.setAttribute('aria-checked', sw.getAttribute('aria-checked')!=='true'));
}

function wireTimer(){
  const ring=document.getElementById('dmRing'), t=document.getElementById('dmT');
  const io=new IntersectionObserver(es=>{
    if(!es[0].isIntersecting) return; io.disconnect();
    const target=0.81, mins=388; let s=null;
    const step=ts=>{
      if(!s) s=ts; const p=Math.min(1,(ts-s)/1600), e=1-Math.pow(1-p,3);
      ring.style.strokeDashoffset=(264*(1-target*e)).toFixed(1);
      const m=Math.round(mins*e); t.textContent=Math.floor(m/60)+':'+String(m%60).padStart(2,'0');
      if(p<1) requestAnimationFrame(step);
    };
    if(reduce){ring.style.strokeDashoffset=264*(1-target);t.textContent='6:28';} else requestAnimationFrame(step);
  },{threshold:.3});
  io.observe(ring.closest('.dmw'));
}

function openCases(){
  const tile=document.getElementById('casesTile'), rows=document.getElementById('rows');
  if(!tile){ navTo('work'); return; }
  const ks=[document.getElementById('k1'),document.getElementById('k2')];
  ks.forEach(k=>k&&k.classList.add('dn')); later(()=>ks.forEach(k=>k&&k.classList.remove('dn')),160);
  tile.scrollIntoView({behavior:reduce?'auto':'smooth',block:'center'});
  later(()=>rows.focus({preventScroll:true}),450);
}
function wireKeys(){ ['k1','k2'].forEach(id=>document.getElementById(id).addEventListener('click',openCases)); }
addEventListener('keydown',e=>{ if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){ e.preventDefault(); openCases(); } });

function wireExp(){
  const yrs=document.getElementById('yrs'), w=document.getElementById('expW');
  const set=k=>{
    yrs.querySelectorAll('button').forEach((b,j)=>b.setAttribute('aria-pressed',j===k));
    const y=L.exp.yrs[k]; w.innerHTML=y[2]+'<small>'+y[3]+'</small>';
  };
  yrs.querySelectorAll('button').forEach((b,k)=>b.addEventListener('click',()=>set(k)));
  set(3);
}

function wireTilt(){
  if(reduce || matchMedia('(hover:none)').matches) return;
  document.querySelectorAll('.ph').forEach(tile=>{
    const ph=tile.querySelector('.phone'), base=getComputedStyle(ph).getPropertyValue('--rot');
    tile.addEventListener('mousemove',e=>{
      const r=tile.getBoundingClientRect(), x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
      ph.style.transform='rotate(calc('+base+' * .5)) translateY(-8px) rotateY('+(x*14).toFixed(1)+'deg) rotateX('+(-y*10).toFixed(1)+'deg)';
    });
    tile.addEventListener('mouseleave',()=>{ ph.style.transform=''; });
  });
}

function wirePlayer(){
  const cov=document.getElementById('pcov'); if(!cov) return;
  const ab=document.getElementById('pab'), nm=document.getElementById('pnm'), sb=document.getElementById('psb'),
        cn=document.getElementById('pcn'), pf=document.getElementById('ppf'), pp=document.getElementById('ppp');
  const rows=caseRows(), P=L.about.play;
  let k=0, playing=false, ptm;
  const show=j=>{
    k=(j+rows.length)%rows.length; const r=rows[k];
    cov.style.background=r[3]; cov.setAttribute('href',r[0]); ab.textContent=r[2]; nm.textContent=r[4]; sb.textContent=r[5];
    cn.textContent=(k+1)+'/'+rows.length;
    cov.style.animation='none'; void cov.offsetWidth; cov.style.animation='';
  };
  const run=()=>{
    pf.style.transition='none'; pf.style.width='0'; void pf.offsetWidth;
    if(!playing) return;
    pf.style.transition='width 4s linear'; pf.style.width='100%';
    clearTimeout(ptm); ptm=later(()=>{ show(k+1); run(); },4000);
  };
  const setPlay=v=>{
    playing=v; pp.innerHTML=v?IC.pause:IC.play; pp.setAttribute('aria-label',v?P.pause:P.play);
    if(!v) clearTimeout(ptm); run();
  };
  pp.addEventListener('click',()=>setPlay(!playing));
  document.getElementById('pnx').addEventListener('click',()=>{ show(k+1); run(); });
  document.getElementById('ppv').addEventListener('click',()=>{ show(k-1); run(); });
  show(0);
  if(!reduce) setPlay(true);
}

function wireClock(){
  const T_=document.getElementById('clT'); if(!T_) return;
  const z=document.getElementById('clZ'), d=document.getElementById('clD');
  const H=document.getElementById('clH'), M=document.getElementById('clM'), S=document.getElementById('clS');
  const C=L.about.clock;
  const wall=(tz,now)=>{
    const p={}; new Intl.DateTimeFormat('en-GB',{timeZone:tz,hourCycle:'h23',year:'numeric',month:'numeric',day:'numeric',hour:'numeric',minute:'numeric',second:'numeric'})
      .formatToParts(now).forEach(x=>{ if(x.type!=='literal') p[x.type]=+x.value; });
    return Date.UTC(p.year,p.month-1,p.day,p.hour,p.minute,p.second);
  };
  const tick=()=>{
    const now=new Date(), sw=wall(ME.tz,now), vw=wall(undefined,now);
    const off=Math.round((sw-Math.floor(now.getTime()/1000)*1000)/36e5);
    z.textContent='UTC'+(off>=0?'+':'−')+Math.abs(off);
    T_.textContent=new Intl.DateTimeFormat(lang==='ru'?'ru-RU':'en-GB',{timeZone:ME.tz,hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).format(now);
    H.style.transform='rotate('+(sw/36e5*30)+'deg)';
    M.style.transform='rotate('+(sw/6e4*6)+'deg)';
    S.style.transform='rotate('+(sw/1000*6)+'deg)';
    const diff=Math.round((vw-sw)/6e4);
    if(diff===0) d.textContent=C.same;
    else{
      const a=Math.abs(diff), h=Math.floor(a/60), m=a%60;
      const s=(h?h+' '+C.h:'')+(h&&m?' ':'')+(m?m+' '+C.m:'');
      d.textContent=(diff>0?C.later:C.earlier).replace('{d}',s);
    }
    later(tick,1000-now.getMilliseconds());
  };
  tick();
}

function wireChat(){
  const form=document.getElementById('send'); if(!form) return;
  const msgs=document.getElementById('msgs'), input=document.getElementById('ci'), btn=document.getElementById('cs');
  const A=L.about.chat;
  let busy=false;
  const add=(cls,html)=>{ const m=document.createElement('div'); m.className='m '+cls; m.innerHTML=html; msgs.appendChild(m); return m; };
  const send=text=>{
    text=text.trim(); if(!text||busy) return; busy=true;
    const q=document.getElementById('quick'); if(q) q.remove();
    const b=document.createElement('span'); b.className='b'; b.textContent=text;
    const me=add('me',''); me.appendChild(b);
    input.value=''; btn.classList.remove('on');
    later(()=>{
      const t=add('them','<div class="av"><img src="'+ME.photo+'" alt=""></div><div class="col"><div class="b dots"><i></i><i></i><i></i></div></div>');
      later(()=>{ t.querySelector('.col').innerHTML='<span class="nm">'+A.name+'</span><div class="b">'+A.reply+'</div>'; busy=false; }, reduce?50:1100);
    }, reduce?0:350);
  };
  document.getElementById('quick').addEventListener('click',()=>send(A.quick));
  input.addEventListener('input',()=>btn.classList.toggle('on',input.value.trim().length>0));
  form.addEventListener('submit',e=>{ e.preventDefault(); send(input.value); });
}

function wireMail(){
  const f=document.getElementById('mlF'), a=document.getElementById('mlGo');
  if(!f||!a) return;
  const S=document.getElementById('mlS'), B=document.getElementById('mlB');
  const upd=()=>{ a.href='mailto:'+ME.mail+'?subject='+encodeURIComponent(S.value)+(B.value?'&body='+encodeURIComponent(B.value):''); };
  f.addEventListener('input',upd); f.addEventListener('submit',e=>{e.preventDefault();upd();a.click();}); upd();
}

/* меню прячется при прокрутке вниз на телефоне */
(function(){
  let y0=scrollY; const top=document.getElementById('top');
  addEventListener('scroll',()=>{
    const y=scrollY;
    if(matchMedia('(max-width:700px)').matches && y>y0+6 && y>120) top.classList.add('hid');
    else if(y<y0-6 || y<120) top.classList.remove('hid');
    y0=y;
  },{passive:true});
})();

/* =========================================================
   Роутер
========================================================= */
const app=document.getElementById('app');
function curPage(){ return location.pathname.replace(/^\/+|\/+$/g,'').replace(/(^|\/)index\.html$/,''); }
function navTo(url){
  const u=new URL(url,document.baseURI);
  if(u.pathname===location.pathname){ scrollTo({top:0,behavior:reduce?'auto':'smooth'}); return; }
  history.pushState(null,'',u.pathname); render();
}
document.addEventListener('click',e=>{
  if(e.defaultPrevented||e.button||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey) return;
  const a=e.target.closest&&e.target.closest('a[href]');
  if(!a||a.target||a.hasAttribute('download')) return;
  const href=a.getAttribute('href');
  if(/^(mailto:|tel:|https?:|\/\/|#)/.test(href)) return;
  const u=new URL(a.href,location.href); if(u.origin!==location.origin) return;
  if(/\.[a-z0-9]{2,5}$/i.test(u.pathname)) return;
  e.preventDefault(); navTo(u.pathname);
});
addEventListener('popstate',render);

function render(){
  clearTimers();
  L=T[lang];
  document.documentElement.lang=lang;
  const page=curPage();
  const navName=(L.nav.find(x=>x[0]===page)||[])[1];
  const nf = page!=='' && !['about','work','contact'].includes(page) && !IDS.includes(page);
  document.title = nf ? '404 — '+L.title : IDS.includes(page) ? L.cs[page].t+' — '+L.title : (page && navName) ? navName+' — '+L.title : L.title;
  app.innerHTML = page==='' ? home() : page==='about' ? about() : page==='work' ? work() : page==='contact' ? contact() : IDS.includes(page) ? casePage(page) : wip();
  window.scrollTo(0,0);
  wireNav(page);
  if(page===''){ wireDock(); wireDK(); wireCases(); wireUI(); wireTimer(); wireKeys(); wireExp(); wireTilt(); }
  if(page==='about'){ wirePlayer(); wireClock(); wireChat(); }
  if(page==='contact'){ wireChat(); wireMail(); }
  nbsp(app);
}
const setLang=l=>{
  if(l===lang) return; lang=l; try{localStorage.setItem('lang',l);}catch(e){}
  document.getElementById('lRu').setAttribute('aria-pressed',l==='ru');
  document.getElementById('lEn').setAttribute('aria-pressed',l==='en');
  render();
};
document.getElementById('lRu').addEventListener('click',()=>setLang('ru'));
document.getElementById('lEn').addEventListener('click',()=>setLang('en'));
document.getElementById('lRu').setAttribute('aria-pressed',lang==='ru');
document.getElementById('lEn').setAttribute('aria-pressed',lang==='en');
let rzT; addEventListener('resize',()=>{ clearTimeout(rzT); rzT=setTimeout(()=>{ const hl=document.getElementById('hl'), on=document.querySelector('.pill a.on')||document.querySelector('.pill a'); if(hl&&on) hl.style.transform='translateX('+(on.offsetLeft-5)+'px)'; },100); });

/* неразрывные пробелы после коротких предлогов */
function nbsp(root){
  const re=/(^|[\s(«"])(в|во|к|ко|с|со|у|о|об|от|до|по|за|из|на|и|а|но|не|ни|для|или|без|при|a|an|in|to|of|on|at|by|or)[ \t]+/giu;
  const w=document.createTreeWalker(root,4); let x;
  while((x=w.nextNode())){ const p=x.parentNode; if(!p||/^(SCRIPT|STYLE|TEXTAREA)$/.test(p.nodeName)) continue; const v=x.nodeValue, f=v.replace(re,'$1$2 '); if(f!==v) x.nodeValue=f; }
}

render();
