(async function(){
  let c;try{const r=await fetch('content/site.json',{cache:'no-cache'});if(!r.ok)throw Error(r.status);c=await r.json()}catch(e){console.warn('No se ha podido cargar content/site.json',e);return}
  document.querySelectorAll('[data-content]').forEach(el=>{const key=el.dataset.content;if(typeof c[key]!=='string')return;
    if(el.dataset.contentAttr){const attr=el.dataset.contentAttr;const v=c[key];if((attr==='src'||attr==='href') && !/^(https?:\/\/|assets\/|\/assets\/)/i.test(v))return;el.setAttribute(attr,v)}
    else el.textContent=c[key];
  });
  const make=(tag,cls,text)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(text!==undefined)e.textContent=text;return e};
  const safeUrl=v=>typeof v==='string'&&/^(https?:\/\/|assets\/|\/assets\/)/i.test(v)?v:null;
  const releases=document.querySelector('[data-list="music_releases"]');if(releases&&Array.isArray(c.music_releases)){
    c.music_releases.forEach((r,i)=>{const d=make('div','release');d.append(make('span','mono',String(i+1).padStart(2,'0')),make('strong',null,r.title||''),make('em',null,r.details||''));releases.append(d)})
  }
  const sessions=document.querySelector('[data-list="sessions_items"]');if(sessions&&Array.isArray(c.sessions_items)){
    sessions.className='cms-items';c.sessions_items.forEach(r=>{const d=make('div','cms-item');d.append(make('strong',null,r.title||''));if(r.description)d.append(make('p','quiet',r.description));const u=safeUrl(r.url);if(u){const a=make('a',null,'LISTEN ↗');a.href=u;a.target='_blank';a.rel='noopener noreferrer';d.append(a)}sessions.append(d)})
  }
  for(const key of ['spaces_photos','archive_items']){const host=document.querySelector('[data-list="'+key+'"]');if(!host||!Array.isArray(c[key]))continue;host.className='cms-gallery';c[key].forEach(r=>{const u=safeUrl(r.image);if(!u)return;const f=make('figure');const im=make('img');im.src=u;im.loading='lazy';im.alt=r.caption||'HEADBIRDS archive';f.append(im);if(r.caption)f.append(make('figcaption',null,r.caption));host.append(f)})}
})();