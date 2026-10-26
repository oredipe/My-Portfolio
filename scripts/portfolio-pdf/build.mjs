import fs from 'fs';
import { chromium } from '/opt/npm-tools/node_modules/playwright/index.mjs';
const P='/home/claude/portfolio';
const { caseStudies } = await import(P+'/src/data/caseStudies.js');
const { profile, resume } = await import(P+'/src/data/profile.js');
const IMG=k=>'file://'+process.cwd()+'/img/images_'+k.replace(/\//g,'_')+'.jpg';
const md=s=>String(s||'').replace(/\*\*(.+?)\*\*/g,'<b>$1</b>').replace(/\[([^\]]+)\]\([^)]+\)/g,'$1');
const plain=s=>String(s||'').replace(/\*\*(.+?)\*\*/g,'$1').replace(/\[([^\]]+)\]\([^)]+\)/g,'$1');
const clip=(s,n)=>{s=plain(s);if(s.length<=n)return s;const cut=s.slice(0,n);const i=Math.max(cut.lastIndexOf('. '),0);return i>n*0.5?cut.slice(0,i+1):cut.replace(/\s+\S*$/,'')+'…'};
const sentences=(s,n)=>{const p=plain(s).match(/[^.!?]+[.!?]+(\s|$)/g)||[plain(s)];return p.slice(0,n).join('').trim()};
const owl=(ring,eye='#e3a33b',s=34)=>`<svg width="${s}" height="${s}" viewBox="0 0 64 64"><path d="M6 12 L20 22 Q32 28 44 22 L58 12" fill="none" stroke="${ring}" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="20" cy="36" r="10.5" fill="none" stroke="${ring}" stroke-width="5.5"/><circle cx="44" cy="36" r="10.5" fill="none" stroke="${ring}" stroke-width="5.5"/><circle cx="20" cy="36" r="4" fill="${eye}"/><circle cx="44" cy="36" r="4" fill="${eye}"/><path d="M28.5 47 L35.5 47 L32 55 Z" fill="${eye}"/></svg>`;
const cs=caseStudies.filter(c=>c.sections&&c.sections.length);
const fact=(c,k)=>(c.facts||[]).find(f=>f[0]===k)?.[1];
const imgsOf=c=>c.sections.flatMap(s=>s.blocks).flatMap(b=>b.type==='img'?[b]:b.type==='imgs'?b.items:[]).filter(b=>b.key!==c.cover);
const decs=c=>c.sections.flatMap(s=>s.blocks).filter(b=>b.type==='h');
const outcomes=c=>{const s=c.sections.find(s=>/Outcome|Result/i.test(s.heading));if(!s)return[];return s.blocks.flatMap(b=>b.type==='list'?b.items:b.type==='p'?[b.text]:[])};
const foot=(n)=>`<div class="foot"><span>${owl('#0f6e4e','#e3a33b',16)} Olanrewaju Oredipe · Portfolio</span><span>www.orelan.xyz</span><span>${n}</span></div>`;
let pg=1;
const pages=[];
pages.push(`<section class="pg night cover"><div class="lock">${owl('#7fd1a8')}<b>Orelan</b></div>
<img class="portrait" src="${IMG('olanrewaju-hero')}"><div class="cv"><div class="eyebrow mint">Portfolio · ${new Date().getFullYear()}</div><h1 class="disp">Olanrewaju<br>Oredipe</h1>
<p class="role">Senior Product Designer · Lagos, Nigeria</p><p class="lede">I design websites, web apps and mobile apps for health, money and hiring: products people can't afford to get wrong.</p></div>
<div class="contact"><span>${profile.email}</span><span>www.orelan.xyz</span><span>linkedin.com/in/olanrewaju-oredipe</span></div></section>`);
pg++;
pages.push(`<section class="pg paper"><div class="eyebrow">Selected work</div><h2>${cs.length} products across healthtech, fintech, hiring and e-commerce</h2>
<p class="intro">${plain(resume.summary)}</p><div class="grid">${cs.map((c,i)=>`<div class="tile"><div class="n">${String(i+1).padStart(2,'0')}</div><div><div class="meta">${c.industry} · ${c.years}</div><b>${c.name}</b><p>${plain(c.title)}</p><span class="proof">${plain(c.proof)}</span></div></div>`).join('')}</div>${foot(pg)}</section>`);
cs.forEach((c,i)=>{
 pg++;
 const role=fact(c,'My role'), owned=fact(c,'What I owned')||fact(c,'What I designed')||fact(c,'Scope'), team=fact(c,'Worked with')||fact(c,'Team');
 pages.push(`<section class="pg paper cs"><div class="l"><div class="eyebrow">${String(i+1).padStart(2,'0')} · ${c.industry} · ${c.years}</div><h2 class="nm">${c.name}</h2><h3>${plain(c.title)}</h3>
 <p class="body">${clip(c.intro,420)}</p><dl>${role?`<dt>My role</dt><dd>${clip(role,170)}</dd>`:''}${owned?`<dt>What I owned</dt><dd>${clip(owned,190)}</dd>`:''}${team?`<dt>Worked with</dt><dd>${clip(team,130)}</dd>`:''}<dt>Platforms</dt><dd>${(c.platforms||[]).join(', ')}</dd></dl>
 <div class="proofbig">${plain(c.proof)}</div></div><div class="r"><div class="well"><img src="${IMG(c.cover)}"></div></div>${foot(pg)}</section>`);
 pg++;
 const d=decs(c).slice(0,3), im=imgsOf(c).slice(0,1)[0], out=outcomes(c).slice(0,4);
 pages.push(`<section class="pg paper cs2"><div class="l"><div class="eyebrow">${c.name} · Key decisions</div>${d.map(x=>`<div class="dec"><b>${plain(x.title)}</b><p>${sentences(x.text,2)}</p></div>`).join('')}</div>
 <div class="r">${im?`<div class="well sm"><img src="${IMG(im.key)}"></div>`:''}${out.length?`<div class="out"><div class="eyebrow">${/not launched|Concept/i.test(c.proof)?'Outcome':'Outcomes'}</div><ul>${out.map(o=>`<li>${clip(md(o).replace(/<[^>]+>/g,''),190)}</li>`).join('')}</ul></div>`:''}
 <div class="more">Full case study: www.orelan.xyz/projects/${c.slug}</div></div>${foot(pg)}</section>`);
});
pages.push(`<section class="pg night end"><div class="lock">${owl('#7fd1a8')}<b>Orelan</b></div><div class="cv"><h2 class="disp sm">Let's talk</h2><p class="lede">I'm open to senior product design roles, remote or hybrid, and can start within a month.</p>
<div class="clist"><div><span>Email</span>${profile.email}</div><div><span>Portfolio</span>www.orelan.xyz</div><div><span>LinkedIn</span>linkedin.com/in/olanrewaju-oredipe</div><div><span>Based in</span>Lagos, Nigeria · works across time zones</div></div></div>
<img class="seal" src="file://${P}/public/brand/orelan-seal-green.png"></section>`);
const F=`file://${P}/node_modules/@fontsource-variable`;
const css=`@font-face{font-family:B;src:url(${F}/bricolage-grotesque/files/bricolage-grotesque-latin-wght-normal.woff2);font-weight:200 800}
@font-face{font-family:N;src:url(${F}/newsreader/files/newsreader-latin-wght-normal.woff2);font-weight:200 800}
@font-face{font-family:IS;src:url(file://${P}/node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-normal.woff2)}
@page{size:1280px 720px;margin:0}*{box-sizing:border-box}body{margin:0;font-family:B;color:#16201b}
.pg{width:1280px;height:720px;position:relative;overflow:hidden;page-break-after:always;padding:64px 72px}
.paper{background:#f5f6f3}.night{background:#1a211d;color:#f1eee6}
.eyebrow{font-size:13px;letter-spacing:.08em;text-transform:uppercase;font-weight:600;color:#0f6e4e}.eyebrow.mint{color:#7fd1a8}
.lock{display:flex;align-items:center;gap:10px;font-size:24px;letter-spacing:-.03em;font-weight:650}
.disp{font-family:IS;font-weight:400;text-transform:uppercase;font-size:118px;line-height:.88;margin:18px 0 22px;letter-spacing:-.01em}.disp.sm{font-size:96px}
.cover .portrait{position:absolute;right:0;top:0;height:720px;width:560px;object-fit:cover;object-position:center top;filter:saturate(.85) brightness(.82)}
.cover .portrait{mask-image:linear-gradient(90deg,transparent,#000 35%)}
.cv{position:relative;margin-top:96px;max-width:700px}.role{font-size:22px;color:#7fd1a8;margin:0 0 14px;font-weight:500}
.lede{font-family:N;font-size:24px;line-height:1.4;color:#cfd5cf;margin:0;max-width:560px}
.contact{position:absolute;left:72px;bottom:52px;display:flex;gap:28px;font-size:15px;color:#b9bfb8}
h2{font-size:38px;letter-spacing:-.025em;margin:10px 0 12px;font-weight:600;line-height:1.1;max-width:900px}
.intro{font-family:N;font-size:18px;line-height:1.45;color:#4f5a54;max-width:980px;margin:0 0 26px}
.grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
.tile{background:#fff;border:1px solid #d6dbd5;border-radius:14px;padding:16px;display:flex;gap:10px;min-height:150px}
.tile .n{font-size:13px;color:#0f6e4e;font-weight:600}.tile .meta{font-size:11.5px;color:#4f5a54;text-transform:uppercase;letter-spacing:.05em}
.tile b{font-size:18px;display:block;margin:3px 0 4px}.tile p{font-size:13.5px;line-height:1.35;margin:0 0 8px;color:#16201b}
.proof{font-size:12px;background:#dfece5;color:#0f6e4e;border-radius:99px;padding:3px 9px;display:inline-block}
.cs,.cs2{display:grid;grid-template-columns:1fr 1.15fr;gap:48px;padding-bottom:84px}
.nm{font-size:44px;margin:8px 0 4px}h3{font-family:N;font-weight:400;font-style:italic;font-size:23px;line-height:1.25;margin:0 0 16px;color:#16201b}
.body{font-size:15px;line-height:1.5;color:#2c3631;margin:0 0 14px}
dl{display:grid;grid-template-columns:120px 1fr;gap:6px 12px;margin:0 0 16px;font-size:13.5px;line-height:1.4}dt{color:#4f5a54;font-weight:600}dd{margin:0}
.proofbig{display:inline-block;background:#0f6e4e;color:#f5f6f3;border-radius:99px;padding:8px 16px;font-size:14.5px;font-weight:500}
.well{background:#dfece5;border-radius:20px;height:100%;display:grid;place-items:center;padding:24px;overflow:hidden}
.well img{max-width:100%;max-height:520px;object-fit:contain;border-radius:8px}
.well.sm{height:300px;padding:18px}.well.sm img{max-height:264px}
.dec{border-top:1px solid #d6dbd5;padding:14px 0}.dec:first-of-type{margin-top:12px}.dec b{font-size:18px;display:block;margin-bottom:5px;letter-spacing:-.01em}.dec p{margin:0;font-size:14.5px;line-height:1.5;color:#2c3631}
.out{margin-top:20px}.out ul{margin:8px 0 0;padding-left:18px;font-size:14px;line-height:1.45;display:grid;gap:5px}
.more{margin-top:14px;font-size:13px;color:#0f6e4e;font-weight:500}
.foot{position:absolute;left:72px;right:72px;bottom:28px;display:flex;justify-content:space-between;font-size:12px;color:#4f5a54;border-top:1px solid #d6dbd5;padding-top:10px}.foot span{display:flex;gap:6px;align-items:center}
.end .clist{margin-top:30px;display:grid;gap:12px;font-size:20px}.end .clist span{display:inline-block;width:130px;color:#7fd1a8;font-size:14px;text-transform:uppercase;letter-spacing:.06em}
.end .seal{position:absolute;right:90px;bottom:90px;width:230px;opacity:.95}`;
fs.writeFileSync('folio.html',`<!doctype html><html><head><meta charset=utf-8><style>${css}</style></head><body>${pages.join('')}</body></html>`);
const b=await chromium.launch();const p=await b.newPage({viewport:{width:1280,height:720}});
await p.goto('file://'+process.cwd()+'/folio.html');await p.waitForTimeout(1500);
await p.pdf({path:'Olanrewaju-Oredipe-Portfolio.pdf',width:'1280px',height:'720px',printBackground:true});
await b.close();console.log(pages.length,'pages',fs.statSync('Olanrewaju-Oredipe-Portfolio.pdf').size);
