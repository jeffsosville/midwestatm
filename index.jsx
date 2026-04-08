import { useState } from "react";

const BASE = "https://midwestatm.com/wp-content/uploads/2014/06/";

const PHOTOS = {
  keypad:     BASE + "ATM_Keypad.jpg",
  tritonArgo: BASE + "ATM-Triton-argo.png",
  tritonRL:   BASE + "ATM-Triton-RL2000.jpg",
  tritonFT:   BASE + "ATM-Triton-FT5000.jpg",
  parts:      BASE + "atm-parts-2.jpg",
  service:    BASE + "atm-24-7-service.jpg",
  logo:       BASE + "new-midwest-144h.png",
  ev1:  BASE + "IMG_2270-400x284.jpg",
  ev2:  BASE + "IMG_1815-400x284.jpg",
  ev3:  BASE + "IMG_3948-400x284.jpg",
  ev4:  BASE + "IMG_1842-400x284.jpg",
  ev5:  BASE + "IMG_3170-400x284.jpg",
  ev6:  BASE + "IMG_4356-400x284.jpg",
  ev7:  BASE + "IMG_1087-400x284.jpg",
  ev8:  BASE + "IMG_2073-400x284.jpg",
  ev9:  BASE + "IMG_3147-400x284.jpg",
  ev10: BASE + "IMG_2474-400x284.jpg",
  ev11: BASE + "IMG_1955-400x284.jpg",
  ev12: BASE + "IMG_2563-400x284.jpg",
};

const EVENT_PHOTOS = [
  PHOTOS.ev1,PHOTOS.ev2,PHOTOS.ev3,PHOTOS.ev4,
  PHOTOS.ev5,PHOTOS.ev6,PHOTOS.ev7,PHOTOS.ev8,
  PHOTOS.ev9,PHOTOS.ev10,PHOTOS.ev11,PHOTOS.ev12,
];

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
  :root{
    --green:#7ab648; --green-dk:#5c8f32; --green-pale:#eef6e6;
    --char:#2b2b2b;  --char2:#3a3a3a;
    --white:#fff;    --off:#f5f5f3;
    --gray:#6b6b6b;  --gray-lt:#e0e0dc;
  }
  body{font-family:'DM Sans',sans-serif;background:var(--off);color:var(--char)}

  /* NAV */
  .nav{background:#fff;border-bottom:4px solid var(--green);padding:0 40px;height:72px;
    display:flex;align-items:center;justify-content:space-between;
    position:sticky;top:0;z-index:200;box-shadow:0 2px 16px rgba(0,0,0,.08)}
  .nav-logo{cursor:pointer} .nav-logo img{height:40px;width:auto}
  .nav-links{display:flex;gap:24px;align-items:center}
  .nav-links a{color:var(--char);font-size:13px;font-weight:600;text-decoration:none;
    text-transform:uppercase;letter-spacing:.6px;cursor:pointer;transition:color .2s}
  .nav-links a:hover{color:var(--green)}
  .nav-cta{background:var(--green)!important;color:#fff!important;padding:10px 22px!important;border-radius:3px}
  .nav-cta:hover{background:var(--green-dk)!important}

  /* TABS */
  .tabs{background:var(--char);padding:0 40px;display:flex;gap:2px;overflow-x:auto}
  .tab{background:none;border:none;color:#777;font-family:'DM Mono',monospace;font-size:11px;
    letter-spacing:.5px;text-transform:uppercase;padding:10px 14px;
    cursor:pointer;white-space:nowrap;border-bottom:2px solid transparent;transition:all .2s}
  .tab.on{color:var(--green);border-bottom-color:var(--green)} .tab:hover{color:#fff}

  /* HERO */
  .hero{position:relative;overflow:hidden;background:var(--char);
    display:grid;grid-template-columns:1fr 1fr;min-height:480px}
  .hero-left{padding:72px 48px 64px;display:flex;flex-direction:column;justify-content:center;position:relative;z-index:2}
  .eyebrow{font-family:'DM Mono',monospace;font-size:11px;color:var(--green);
    letter-spacing:2.5px;text-transform:uppercase;margin-bottom:20px;
    display:flex;align-items:center;gap:10px}
  .eyebrow::before{content:'';width:28px;height:2px;background:var(--green)}
  .hero h1{font-family:'Bebas Neue',sans-serif;font-size:clamp(52px,6.5vw,90px);
    color:#fff;line-height:.93;letter-spacing:2px;margin-bottom:20px}
  .hero h1 em{color:var(--green);font-style:normal}
  .hero-sub{font-size:15px;color:#aaa;font-weight:300;line-height:1.65;max-width:440px;margin-bottom:32px}
  .hero-right{position:relative;overflow:hidden}
  .hero-right img{width:100%;height:100%;object-fit:cover;opacity:.75;display:block}
  .hero-right::after{content:'';position:absolute;inset:0;
    background:linear-gradient(to right,var(--char) 0%,transparent 40%)}

  /* STATS */
  .stats{background:var(--green);display:grid;grid-template-columns:repeat(4,1fr)}
  .stat{padding:24px 20px;text-align:center;border-right:1px solid rgba(255,255,255,.2)}
  .stat:last-child{border-right:none}
  .stat-n{font-family:'Bebas Neue',sans-serif;font-size:40px;color:#fff;line-height:1}
  .stat-l{font-size:11px;color:rgba(255,255,255,.75);letter-spacing:1px;text-transform:uppercase;margin-top:4px}

  /* BTNS */
  .btns{display:flex;gap:12px;flex-wrap:wrap}
  .btn{background:var(--green);color:#fff;border:none;padding:13px 26px;
    font-family:'DM Sans',sans-serif;font-size:13px;font-weight:700;letter-spacing:1px;
    text-transform:uppercase;cursor:pointer;border-radius:3px;transition:background .2s}
  .btn:hover{background:var(--green-dk)}
  .btn-ghost{background:none;color:#fff;border:2px solid rgba(255,255,255,.3);padding:13px 26px;
    font-family:'DM Sans',sans-serif;font-size:13px;font-weight:600;
    cursor:pointer;border-radius:3px;transition:border-color .2s}
  .btn-ghost:hover{border-color:#fff}

  /* SECTION */
  .sec{padding:52px 40px}
  .sec-hd{display:flex;align-items:baseline;justify-content:space-between;
    border-bottom:2px solid var(--char);padding-bottom:12px;margin-bottom:28px}
  .sec-title{font-family:'Bebas Neue',sans-serif;font-size:30px;letter-spacing:1px}
  .sec-meta{font-family:'DM Mono',monospace;font-size:11px;color:var(--gray);cursor:pointer}
  .sec-meta:hover{color:var(--green)}

  /* PHOTO GRID */
  .photo-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:3px}
  .photo-grid img{width:100%;aspect-ratio:4/3;object-fit:cover;display:block;
    transition:opacity .2s;cursor:pointer}
  .photo-grid img:hover{opacity:.85}

  /* LOC CARDS */
  .loc-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:2px}
  .loc-card{background:#fff;border:1px solid var(--gray-lt);padding:18px 20px;
    cursor:pointer;position:relative;transition:all .15s}
  .loc-card:hover{background:var(--green-pale);border-color:var(--green)}
  .loc-card:hover .loc-arr{color:var(--green);transform:translateX(4px)}
  .loc-name{font-weight:700;font-size:15px;margin-bottom:5px}
  .loc-mt{font-family:'DM Mono',monospace;font-size:11px;color:var(--gray);margin-bottom:10px}
  .loc-tags{display:flex;flex-wrap:wrap;gap:4px}
  .tag{font-size:10px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;
    padding:2px 7px;border-radius:2px;background:var(--gray-lt);color:var(--gray)}
  .tag.g{background:var(--green-pale);color:var(--green-dk)}
  .loc-arr{position:absolute;top:18px;right:16px;font-size:18px;color:var(--gray-lt);transition:all .15s}

  /* MACHINE CARDS */
  .mach-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px}
  .mach-card{background:#fff;border:1px solid var(--gray-lt);border-radius:4px;overflow:hidden;
    cursor:pointer;transition:box-shadow .2s,transform .2s}
  .mach-card:hover{box-shadow:0 8px 32px rgba(0,0,0,.1);transform:translateY(-2px)}
  .mach-img{height:210px;background:#f0f0ee;display:flex;align-items:center;
    justify-content:center;position:relative;overflow:hidden}
  .mach-img img{height:190px;width:auto;object-fit:contain;display:block}
  .mach-badge{position:absolute;top:10px;right:10px;background:var(--green);color:#fff;
    font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;padding:3px 8px;border-radius:2px}
  .mach-body{padding:18px}
  .mach-name{font-weight:700;font-size:16px;margin-bottom:6px}
  .mach-desc{font-size:13px;color:var(--gray);line-height:1.55;margin-bottom:14px}
  .spec{display:flex;justify-content:space-between;font-size:12px;padding:6px 0;border-bottom:1px solid var(--gray-lt)}
  .spec:last-child{border-bottom:none}
  .sk{color:var(--gray);font-weight:500} .sv{font-family:'DM Mono',monospace;font-weight:500}

  /* NEIGHBORHOOD LP */
  .lp-hero{background:var(--char);padding:56px 40px 48px}
  .bc{font-family:'DM Mono',monospace;font-size:11px;color:#555;margin-bottom:18px;display:flex;gap:8px;align-items:center}
  .bc span{color:var(--green);cursor:pointer} .bc span:hover{text-decoration:underline}
  .lp-hero h1{font-family:'Bebas Neue',sans-serif;font-size:clamp(38px,5.5vw,72px);
    color:#fff;line-height:.95;margin-bottom:16px}
  .lp-hero h1 em{color:var(--green);font-style:normal}
  .lp-hero p{color:#999;font-size:15px;max-width:540px;line-height:1.65;margin-bottom:28px}

  /* DATA CARDS */
  .data-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;padding:40px;background:var(--gray-lt)}
  .data-card{background:#fff;padding:24px;border-radius:3px;border-left:4px solid var(--green)}
  .data-card.gold{border-left-color:#c8a84b} .data-card.red{border-left-color:#c0392b}
  .dn{font-family:'Bebas Neue',sans-serif;font-size:44px;color:var(--char);line-height:1;margin-bottom:4px}
  .dl{font-size:11px;color:var(--gray);font-weight:700;text-transform:uppercase;letter-spacing:.5px}
  .dc{font-size:13px;color:var(--gray);margin-top:8px;line-height:1.45}

  /* TWO COL */
  .two-col{display:grid;grid-template-columns:1fr 1fr;gap:0;padding:52px 40px}
  .col{padding-right:32px}
  .col:last-child{padding-right:0;padding-left:32px;border-left:1px solid var(--gray-lt)}
  .col h2{font-family:'Bebas Neue',sans-serif;font-size:28px;margin-bottom:16px;letter-spacing:.5px}
  .col p{font-size:14px;color:#444;line-height:1.72;margin-bottom:12px}
  .vlist{list-style:none}
  .vlist li{padding:10px 0;border-bottom:1px solid var(--gray-lt);font-size:14px;
    display:flex;align-items:center;gap:10px}
  .vlist li::before{content:'◆';color:var(--green);font-size:9px}

  /* SEARCH */
  .srch{padding:40px;background:#fff;border-bottom:1px solid var(--gray-lt)}
  .srch-lbl{font-family:'DM Mono',monospace;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:var(--gray);margin-bottom:12px}
  .srch-row{display:flex;gap:10px;flex-wrap:wrap;align-items:flex-end}
  .si{flex:1;min-width:200px;padding:13px 18px;border:2px solid var(--gray-lt);background:#fff;
    font-family:'DM Sans',sans-serif;font-size:15px;border-radius:3px;outline:none;transition:border-color .2s}
  .si:focus{border-color:var(--green)}
  .ss{padding:13px 16px;border:2px solid var(--gray-lt);background:#fff;
    font-family:'DM Sans',sans-serif;font-size:14px;border-radius:3px;outline:none;min-width:150px;cursor:pointer}
  .ss:focus{border-color:var(--green)}

  /* CAT CARDS */
  .cat-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:16px}
  .cat-card{background:#fff;border:1px solid var(--gray-lt);border-radius:4px;overflow:hidden;
    cursor:pointer;transition:box-shadow .2s,transform .2s}
  .cat-card:hover{box-shadow:0 8px 28px rgba(0,0,0,.1);transform:translateY(-2px)}
  .cat-img{height:180px;overflow:hidden;position:relative}
  .cat-img img{width:100%;height:100%;object-fit:cover;transition:transform .3s}
  .cat-card:hover .cat-img img{transform:scale(1.05)}
  .cat-ov{position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.6) 0%,transparent 60%);
    display:flex;align-items:flex-end;padding:14px;font-size:32px}
  .cat-body{padding:16px}
  .cat-name{font-weight:700;font-size:16px;margin-bottom:6px}
  .cat-desc{font-size:13px;color:var(--gray);line-height:1.5;margin-bottom:12px}
  .cat-rev{font-family:'DM Mono',monospace;font-size:12px;color:var(--green-dk);font-weight:500;
    background:var(--green-pale);padding:6px 10px;border-radius:2px;display:inline-block}

  /* CONTACT */
  .contact{background:var(--char);padding:64px 40px;display:grid;grid-template-columns:1fr 1fr;gap:52px}
  .contact h2{font-family:'Bebas Neue',sans-serif;font-size:52px;color:#fff;line-height:.95;margin-bottom:16px}
  .contact p{color:#999;font-size:14px;line-height:1.65}
  .ci-list{display:flex;flex-direction:column;gap:12px;margin-top:28px}
  .ci{display:flex;gap:12px;align-items:center;font-size:14px;color:#ccc}
  .ci-icon{color:var(--green);font-size:18px;flex-shrink:0}
  .form{display:flex;flex-direction:column;gap:11px}
  .fi{background:#1f1f1f;border:1px solid #3a3a3a;color:#fff;padding:13px 16px;
    font-family:'DM Sans',sans-serif;font-size:14px;border-radius:3px;outline:none;transition:border-color .2s}
  .fi:focus{border-color:var(--green)} .fi::placeholder{color:#555}
  .fi-note{font-size:12px;color:#555;line-height:1.5}

  /* FOOTER */
  .footer{background:#111;padding:44px 40px;display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:32px}
  .ft-logo img{height:36px;width:auto;margin-bottom:10px}
  .ft-desc{font-size:13px;color:#555;line-height:1.6}
  .ft-col h4{font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#555;margin-bottom:12px}
  .ft-links{list-style:none;display:flex;flex-direction:column;gap:8px}
  .ft-links a{font-size:13px;color:#444;text-decoration:none;cursor:pointer;transition:color .2s}
  .ft-links a:hover{color:#fff}
  .ft-bot{background:#0a0a0a;padding:16px 40px;border-top:1px solid #1a1a1a;display:flex;justify-content:space-between}
  .ft-bot span{font-size:12px;color:#333;font-family:'DM Mono',monospace}

  @media(max-width:768px){
    .hero{grid-template-columns:1fr} .hero-right{display:none} .hero-left{padding:48px 20px}
    .stats{grid-template-columns:repeat(2,1fr)}
    .stat{border-right:none;border-bottom:1px solid rgba(255,255,255,.2)}
    .sec{padding:36px 20px} .srch{padding:28px 20px}
    .data-grid{grid-template-columns:1fr;padding:24px 20px}
    .two-col{grid-template-columns:1fr;padding:36px 20px}
    .col{padding:0 0 28px!important;border-left:none!important;border-bottom:1px solid var(--gray-lt)}
    .contact{grid-template-columns:1fr;padding:40px 20px}
    .footer{grid-template-columns:1fr 1fr;padding:32px 20px}
    .nav{padding:0 16px} .tabs{padding:0 16px}
  }
`;

const HOODS = [
  {name:"Downtown Minneapolis", zip:"55401", pop:"28,400", bars:42, events:"240+/yr", demand:"High", avg:"$73"},
  {name:"Uptown",               zip:"55408", pop:"31,200", bars:31, events:"Festivals, markets", demand:"High", avg:"$68"},
  {name:"North Loop",           zip:"55401", pop:"9,800",  bars:24, events:"Farmers Market, concerts", demand:"High", avg:"$81"},
  {name:"Northeast Mpls",       zip:"55413", pop:"22,600", bars:38, events:"Art crawls, breweries", demand:"Med-High", avg:"$65"},
  {name:"Stadium Village",      zip:"55414", pop:"14,100", bars:19, events:"Game days, U of M", demand:"High", avg:"$58"},
  {name:"Dinkytown",            zip:"55414", pop:"8,300",  bars:14, events:"College events year-round", demand:"High", avg:"$54"},
  {name:"Downtown St. Paul",    zip:"55102", pop:"19,700", bars:28, events:"RiverCentre events", demand:"High", avg:"$72"},
  {name:"West 7th / Xcel",      zip:"55102", pop:"12,900", bars:16, events:"Xcel Energy Center", demand:"High", avg:"$77"},
  {name:"Bloomington",          zip:"55425", pop:"89,200", bars:22, events:"Mall of America, airport", demand:"High", avg:"$85"},
  {name:"Eden Prairie",         zip:"55344", pop:"64,800", bars:14, events:"Corporate parks, venues", demand:"Medium", avg:"$79"},
  {name:"Plymouth",             zip:"55447", pop:"81,500", bars:11, events:"Suburban retail", demand:"Medium", avg:"$71"},
  {name:"Eagan",                zip:"55121", pop:"68,900", bars:9,  events:"Airport-adjacent", demand:"Medium", avg:"$68"},
];

const MACHINES = [
  {name:"Triton ARGO",   badge:"Flagship",        img:PHOTOS.tritonArgo, desc:"Next-gen freestanding unit. Larger screens, EMV + NFC ready, touchscreen options. Built for high-traffic indoor locations.",
   specs:{"Models":"5 available","Dispensers":"6 options","Screen":"Touchscreen option","NFC":"Apple Pay ready","ADA":"Compliant","EMV":"Ready"}},
  {name:"Triton RL2000", badge:"Best for Retail",  img:PHOTOS.tritonRL,   desc:"Compact, flexible retail ATM. Ideal for bars, restaurants, c-stores, hotels. Low cost of ownership.",
   specs:{"Design":"Walk-up compact","Connectivity":"Ethernet / dial","ADA":"CA compliant","Triple-DES":"Yes","EMV":"Ready","OS":"Windows CE / X2"}},
  {name:"Triton FT5000", badge:"Through-the-Wall", img:PHOTOS.tritonFT,   desc:"Drive-up or walk-up through-the-wall unit. Preferred by banks and high-volume venues. 2–4 cassette configurations.",
   specs:{"Setting":"Drive-up or walk-up","Cassettes":"2–4 options","Volume":"High throughput","Connectivity":"Ethernet","ADA":"Compliant","OS":"Windows CE / X2"}},
];

const CATS = [
  {name:"Bars & Nightclubs",      icon:"🍺", img:PHOTOS.ev5,  rev:"$2,800–$6,400/mo",    desc:"High-velocity cash environments. Late-night demand spikes drive surcharge revenue — often the highest in any category."},
  {name:"Events & Festivals",     icon:"🎪", img:PHOTOS.ev1,  rev:"$4,000–$18,000/event", desc:"Mobile wireless deployment. On-site technician available. MN State Fair, county fairs, music festivals."},
  {name:"Convenience & Retail",   icon:"🏪", img:PHOTOS.ev8,  rev:"$900–$2,200/mo",      desc:"Steady daily traffic. Free placement available for qualified locations across MN, WI, IA, ND, SD."},
  {name:"Hotels & Hospitality",   icon:"🏨", img:PHOTOS.ev9,  rev:"$1,800–$4,100/mo",    desc:"Lobby placement preferred. International traveler traffic drives above-average withdrawal amounts."},
  {name:"Cannabis Dispensaries",  icon:"🌿", img:PHOTOS.ev12, rev:"$3,200–$7,800/mo",    desc:"Cash-only operations make ATMs essential infrastructure. High per-transaction value and consistent volume."},
  {name:"Laundromats & Self-Serve",icon:"🧺",img:PHOTOS.ev6,  rev:"$600–$1,400/mo",      desc:"Unattended cash-dependent operations. Low maintenance burden, free placement available for qualified sites."},
];

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function Nav({setPage}) {
  return (
    <nav className="nav">
      <div className="nav-logo" onClick={() => setPage('home')}>
        <img src={PHOTOS.logo} alt="Midwest ATM" />
      </div>
      <div className="nav-links">
        <a onClick={() => setPage('home')}>Home</a>
        <a onClick={() => setPage('locations')}>Locations</a>
        <a onClick={() => setPage('machines')}>Machines</a>
        <a onClick={() => setPage('categories')}>By Business</a>
        <a onClick={() => setPage('contact')} className="nav-cta">Get a Quote</a>
      </div>
    </nav>
  );
}

function Tabs({page, setPage}) {
  const tabs = [
    {id:'home',label:'Home'},
    {id:'locations',label:'↳ Locations Index'},
    {id:'neighborhood',label:'↳ Neighborhood Page'},
    {id:'machines',label:'↳ Machine Pages'},
    {id:'categories',label:'↳ By Business Type'},
    {id:'contact',label:'↳ Contact / Quote'},
  ];
  return (
    <div className="tabs">
      {tabs.map(t => (
        <button key={t.id} className={`tab${page===t.id?' on':''}`} onClick={() => setPage(t.id)}>
          {t.label}
        </button>
      ))}
    </div>
  );
}

function HomePage({setPage}) {
  return (
    <>
      <div className="hero">
        <div className="hero-left">
          <div className="eyebrow">Twin Cities ATM Company — Est. 2003</div>
          <h1>CASH ACCESS<br /><em>EVERYWHERE</em><br />YOU OPERATE</h1>
          <p className="hero-sub">Permanent placement, event ATMs, sales and 24/7 service across Minneapolis, St. Paul, and the Upper Midwest. No upfront cost for qualified locations.</p>
          <div className="btns">
            <button className="btn" onClick={() => setPage('contact')}>Get Free Placement</button>
            <button className="btn-ghost" onClick={() => setPage('locations')}>Find Your Area →</button>
          </div>
        </div>
        <div className="hero-right">
          <img src={PHOTOS.keypad} alt="ATM keypad" />
        </div>
      </div>

      <div className="stats">
        {[["20+","Years in Business"],["5","States Covered"],["24/7","Live Technician"],["$0","Upfront (Qualified)"]].map(([n,l]) => (
          <div className="stat" key={l}><div className="stat-n">{n}</div><div className="stat-l">{l}</div></div>
        ))}
      </div>

      {/* Real event photos */}
      <div className="sec">
        <div className="sec-hd">
          <div className="sec-title">Events & Mobile Deployments</div>
          <div className="sec-meta" onClick={() => setPage('categories')}>All event services →</div>
        </div>
        <div className="photo-grid">
          {EVENT_PHOTOS.map((src,i) => (
            <img key={i} src={src} alt={`Event ATM ${i+1}`} onClick={() => setPage('categories')} />
          ))}
        </div>
      </div>

      <div className="sec" style={{background:'#f0ede6',borderTop:'1px solid #ddd'}}>
        <div className="sec-hd">
          <div className="sec-title">Neighborhoods We Serve</div>
          <div className="sec-meta" onClick={() => setPage('locations')}>All 100+ pages →</div>
        </div>
        <div className="loc-grid">
          {HOODS.slice(0,8).map(h => (
            <div className="loc-card" key={h.name} onClick={() => setPage('neighborhood')}>
              <span className="loc-arr">→</span>
              <div className="loc-name">{h.name}</div>
              <div className="loc-mt">{h.zip} · Pop. {h.pop}</div>
              <div className="loc-tags">
                <span className="tag g">ATM Placement</span>
                <span className="tag">{h.demand} Demand</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="sec">
        <div className="sec-hd">
          <div className="sec-title">ATM Equipment</div>
          <div className="sec-meta" onClick={() => setPage('machines')}>All machines →</div>
        </div>
        <div className="mach-grid">
          {MACHINES.map(m => (
            <div className="mach-card" key={m.name} onClick={() => setPage('machines')}>
              <div className="mach-img">
                <img src={m.img} alt={m.name} />
                <span className="mach-badge">{m.badge}</span>
              </div>
              <div className="mach-body">
                <div className="mach-name">{m.name}</div>
                <div className="mach-desc">{m.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function LocationsPage({setPage}) {
  const [q, setQ] = useState('');
  return (
    <>
      <div className="lp-hero">
        <div className="eyebrow">100+ Hyperlocal Landing Pages</div>
        <h1>FIND YOUR<br /><em>LOCATION</em></h1>
        <p>Every neighborhood, suburb, zip code, and city across MN, WI, IA, ND, SD — with local data on foot traffic, venue counts, and ATM demand.</p>
      </div>
      <div className="srch">
        <div className="srch-lbl">Search by neighborhood, city, or zip code</div>
        <div className="srch-row">
          <input className="si" placeholder="e.g. Uptown, 55408, Bloomington..." value={q} onChange={e=>setQ(e.target.value)} />
          <select className="ss">
            <option>All States</option>
            <option>Minnesota</option><option>Wisconsin</option>
            <option>Iowa</option><option>North Dakota</option><option>South Dakota</option>
          </select>
          <button className="btn">Search</button>
        </div>
      </div>
      <div className="sec">
        <div className="sec-hd"><div className="sec-title">Minneapolis Neighborhoods</div><div className="sec-meta">8 pages</div></div>
        <div className="loc-grid">
          {HOODS.slice(0,8).map(h => (
            <div className="loc-card" key={h.name} onClick={() => setPage('neighborhood')}>
              <span className="loc-arr">→</span>
              <div className="loc-name">{h.name}</div>
              <div className="loc-mt">{h.zip} · {h.bars} venues · Pop. {h.pop}</div>
              <div className="loc-tags">
                <span className="tag g">ATM Placement</span>
                <span className="tag">{h.demand} Demand</span>
                <span className="tag">Avg {h.avg}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="sec" style={{borderTop:'1px solid var(--gray-lt)'}}>
        <div className="sec-hd"><div className="sec-title">Twin Cities Suburbs</div><div className="sec-meta">40+ pages total</div></div>
        <div className="loc-grid">
          {HOODS.slice(8).map(h => (
            <div className="loc-card" key={h.name} onClick={() => setPage('neighborhood')}>
              <span className="loc-arr">→</span>
              <div className="loc-name">{h.name}</div>
              <div className="loc-mt">{h.zip} · Pop. {h.pop}</div>
              <div className="loc-tags">
                <span className="tag g">ATM Placement</span>
                <span className="tag">Avg {h.avg}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function NeighborhoodPage({setPage}) {
  const h = HOODS[0];
  return (
    <>
      <div className="lp-hero">
        <div className="bc">
          <span onClick={() => setPage('locations')}>Locations</span> › Minnesota › Minneapolis ›
          <strong style={{color:'#777'}}>Downtown Minneapolis</strong>
        </div>
        <h1>ATM PLACEMENT IN<br /><em>DOWNTOWN MINNEAPOLIS</em></h1>
        <p>Serving bars, restaurants, hotels, and event venues in zip code {h.zip} with permanent and mobile ATM solutions. 24/7 technician support, free placement for qualified locations.</p>
        <div className="btns">
          <button className="btn" onClick={() => setPage('contact')}>Request Placement →</button>
          <button className="btn-ghost">Call: (612) 555-0190</button>
        </div>
      </div>

      {/* Real photo strip */}
      <div style={{height:220,overflow:'hidden',position:'relative'}}>
        <img src={PHOTOS.keypad} alt="ATM keypad" style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'center 40%',display:'block'}} />
        <div style={{position:'absolute',inset:0,background:'linear-gradient(to bottom,rgba(43,43,43,.4),rgba(43,43,43,.15))'}} />
        <div style={{position:'absolute',bottom:24,left:40,fontFamily:"'Bebas Neue',sans-serif",fontSize:18,color:'#fff',letterSpacing:2}}>
          DOWNTOWN MINNEAPOLIS · ZIP 55401
        </div>
      </div>

      <div className="data-grid">
        <div className="data-card"><div className="dn">{h.pop}</div><div className="dl">Daytime Population</div><div className="dc">One of the highest ATM demand densities in MN, including commuters and convention visitors.</div></div>
        <div className="data-card gold"><div className="dn">{h.bars}</div><div className="dl">Bars & Venues</div><div className="dc">Cash-intensive hospitality driving consistent ATM transaction volume year-round.</div></div>
        <div className="data-card"><div className="dn">{h.avg}</div><div className="dl">Avg Withdrawal</div><div className="dc">Above state average. Downtown foot traffic skews toward higher disposable spend.</div></div>
        <div className="data-card red"><div className="dn">240+</div><div className="dl">Annual Events</div><div className="dc">Convention Center, Target Center, concerts, and festivals drive consistent peak demand windows.</div></div>
        <div className="data-card"><div className="dn">$0</div><div className="dl">Upfront Cost</div><div className="dc">Free placement for qualified locations. We install, fill, and service at no cost to the business.</div></div>
        <div className="data-card gold"><div className="dn">48hr</div><div className="dl">Avg Install Time</div><div className="dc">From approval to live machine. Fastest turnaround in the Twin Cities market.</div></div>
      </div>

      <div className="two-col">
        <div className="col">
          <h2>Why Downtown Minneapolis Businesses Choose Midwest ATM</h2>
          <p>Downtown Minneapolis generates more ATM transactions per square mile than any other market in the Upper Midwest. With the Convention Center drawing 800,000+ visitors annually, Target Center hosting 150+ events, and 42 bars within walking distance of Hennepin Ave, cash demand is constant and predictable.</p>
          <p>Midwest ATM has placed and serviced machines in this corridor for over 20 years. We know the neighborhood — the loading constraints, the weekend vault schedules, the event surge windows. That local knowledge means fewer outages and faster fills.</p>
          <p>Free placement is available for qualifying locations. We handle everything: installation, vault cash, 24/7 monitoring, and repairs.</p>
        </div>
        <div className="col">
          <h2>Location Types We Serve</h2>
          <ul className="vlist">
            {["Bars and nightclubs (Hennepin Ave, First Ave corridor)","Hotels and extended-stay properties","Convention Center and meeting facilities","Restaurants and fast-casual dining","Retail shops and boutiques","Office lobbies and co-working spaces","Sports venue concourses","Event venues and private clubs","Cannabis dispensaries","Parking garages and transit hubs"].map(v => <li key={v}>{v}</li>)}
          </ul>
        </div>
      </div>

      <div className="sec" style={{background:'#f0ede6',borderTop:'1px solid #ddd'}}>
        <div className="sec-hd">
          <div className="sec-title">Recent Deployments — Twin Cities</div>
          <div className="sec-meta" onClick={() => setPage('categories')}>Event ATM services →</div>
        </div>
        <div className="photo-grid" style={{gridTemplateColumns:'repeat(auto-fill,minmax(180px,1fr))'}}>
          {EVENT_PHOTOS.slice(0,6).map((src,i) => <img key={i} src={src} alt={`ATM deployment ${i+1}`} />)}
        </div>
      </div>

      <div className="sec">
        <div className="sec-hd"><div className="sec-title">Nearby Neighborhoods</div></div>
        <div className="loc-grid">
          {HOODS.slice(1,5).map(h => (
            <div className="loc-card" key={h.name}>
              <span className="loc-arr">→</span>
              <div className="loc-name">{h.name}</div>
              <div className="loc-mt">{h.zip}</div>
              <div className="loc-tags"><span className="tag g">ATM Placement</span></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function MachinesPage({setPage}) {
  return (
    <>
      <div className="lp-hero">
        <div className="eyebrow">ATM Equipment — Sales, Lease & Free Placement</div>
        <h1>THE RIGHT<br /><em>MACHINE</em><br />FOR YOUR LOCATION</h1>
        <p>Every location has different throughput, space, and connectivity requirements. We match the right unit to your environment and handle delivery, installation, and ongoing service.</p>
      </div>

      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',height:200,overflow:'hidden'}}>
        <img src={PHOTOS.parts}   alt="ATM parts"   style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} />
        <img src={PHOTOS.service} alt="ATM service" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} />
      </div>

      <div className="sec">
        <div className="sec-hd">
          <div className="sec-title">ATM Models We Deploy</div>
          <div className="sec-meta">Free placement or purchase / lease</div>
        </div>
        <div className="mach-grid">
          {MACHINES.map(m => (
            <div className="mach-card" key={m.name} onClick={() => setPage('contact')}>
              <div className="mach-img">
                <img src={m.img} alt={m.name} />
                <span className="mach-badge">{m.badge}</span>
              </div>
              <div className="mach-body">
                <div className="mach-name">{m.name}</div>
                <div className="mach-desc">{m.desc}</div>
                {Object.entries(m.specs).map(([k,v]) => (
                  <div className="spec" key={k}><span className="sk">{k}</span><span className="sv">{v}</span></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{background:'var(--char)',padding:'48px 40px',display:'grid',gridTemplateColumns:'1fr 1fr',gap:40,alignItems:'center'}}>
        <div>
          <div className="eyebrow" style={{marginBottom:16}}>Hardware Upgrades</div>
          <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:36,color:'#fff',letterSpacing:1,marginBottom:16}}>IS YOUR ATM<br />UP TO STANDARD?</h2>
          {["EMV compliant?","ADA compliant?","Frequent paper jams?","Slow transaction processing?"].map(q => (
            <div key={q} style={{color:'#aaa',fontSize:14,padding:'8px 0',borderBottom:'1px solid #3a3a3a',display:'flex',gap:10,alignItems:'center'}}>
              <span style={{color:'var(--green)'}}>◆</span> {q}
            </div>
          ))}
          <p style={{color:'#666',fontSize:13,marginTop:16,lineHeight:1.6}}>We install appropriate hardware upgrades to keep your ATM compliant and performing at peak efficiency.</p>
          <button className="btn" style={{marginTop:24}} onClick={() => setPage('contact')}>Contact Us →</button>
        </div>
        <img src={PHOTOS.parts} alt="ATM parts" style={{width:'100%',borderRadius:4,opacity:.85}} />
      </div>
    </>
  );
}

function CategoriesPage({setPage}) {
  return (
    <>
      <div className="lp-hero">
        <div className="eyebrow">ATM Placement by Business Type</div>
        <h1>BUILT FOR<br /><em>YOUR BUSINESS</em></h1>
        <p>Every business category has different cash flow patterns and compliance needs. Our programs are structured around how your business actually operates.</p>
      </div>
      <div className="sec">
        <div className="sec-hd"><div className="sec-title">All Business Types</div><div className="sec-meta">{CATS.length} categories</div></div>
        <div className="cat-grid">
          {CATS.map(c => (
            <div className="cat-card" key={c.name} onClick={() => setPage('contact')}>
              <div className="cat-img">
                <img src={c.img} alt={c.name} />
                <div className="cat-ov">{c.icon}</div>
              </div>
              <div className="cat-body">
                <div className="cat-name">{c.name}</div>
                <div className="cat-desc">{c.desc}</div>
                <span className="cat-rev">{c.rev}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function ContactPage() {
  return (
    <div className="contact">
      <div>
        <h2>GET YOUR<br />FREE ATM<br />QUOTE</h2>
        <p>Tell us about your location and we'll respond within one business day with a placement proposal — including projected interchange revenue for your specific foot traffic.</p>
        <div className="ci-list">
          {[["📞","(612) 555-0190"],["✉️","info@midwestatm.com"],["📍","Minneapolis, MN — serving MN, WI, IA, ND, SD"],["🕐","24/7 technician on call"]].map(([icon,txt]) => (
            <div className="ci" key={txt}><span className="ci-icon">{icon}</span><span>{txt}</span></div>
          ))}
        </div>
      </div>
      <div className="form">
        <input className="fi" placeholder="Business name" />
        <input className="fi" placeholder="Your name" />
        <input className="fi" placeholder="Phone number" />
        <input className="fi" placeholder="Email address" />
        <select className="fi" style={{cursor:'pointer'}}>
          <option value="">Business type...</option>
          {["Bar / Nightclub","Restaurant","Hotel / Hospitality","Convenience / Retail","Event / Festival","Cannabis Dispensary","Laundromat / Self-Serve","Other"].map(o => <option key={o}>{o}</option>)}
        </select>
        <input className="fi" placeholder="Address / ZIP code" />
        <textarea className="fi" rows={3} placeholder="Tell us about your location and weekly foot traffic..." style={{resize:'vertical'}} />
        <button className="btn" style={{padding:'16px',fontSize:'14px',letterSpacing:'1.5px'}}>SUBMIT REQUEST →</button>
        <p className="fi-note">No commitment. Free site analysis included. Qualified locations pay $0 upfront.</p>
      </div>
    </div>
  );
}

function Footer({setPage}) {
  return (
    <>
      <div className="footer">
        <div>
          <div className="ft-logo"><img src={PHOTOS.logo} alt="Midwest ATM" /></div>
          <div className="ft-desc">ATM placement, event rentals, sales and service across the Upper Midwest since 2003. 24/7 live technician support. Free placement for qualified locations.</div>
        </div>
        <div className="ft-col"><h4>Services</h4>
          <ul className="ft-links">
            {["Free ATM Placement","Event & Mobile ATMs","ATM Sales","ATM Repair & Service","Cash Loading","Hardware Upgrades"].map(s => <li key={s}><a>{s}</a></li>)}
          </ul>
        </div>
        <div className="ft-col"><h4>Locations</h4>
          <ul className="ft-links">
            {["Minneapolis","St. Paul","Twin Cities Suburbs","Wisconsin","Iowa","North & South Dakota"].map(l => <li key={l}><a onClick={() => setPage('locations')}>{l}</a></li>)}
          </ul>
        </div>
        <div className="ft-col"><h4>Company</h4>
          <ul className="ft-links">
            {["About Midwest ATM","20+ Year History","Our Service Promise","Get a Quote","Contact Us"].map(l => <li key={l}><a onClick={() => setPage('contact')}>{l}</a></li>)}
          </ul>
        </div>
      </div>
      <div className="ft-bot">
        <span>© 2025 Midwest ATM · Minneapolis, MN</span>
        <span>Serving MN · WI · IA · ND · SD</span>
      </div>
    </>
  );
}

export default function App() {
  const [page, setPage] = useState('home');
  const Page = () => {
    switch(page) {
      case 'home':         return <HomePage setPage={setPage} />;
      case 'locations':    return <LocationsPage setPage={setPage} />;
      case 'neighborhood': return <NeighborhoodPage setPage={setPage} />;
      case 'machines':     return <MachinesPage setPage={setPage} />;
      case 'categories':   return <CategoriesPage setPage={setPage} />;
      case 'contact':      return <ContactPage />;
      default:             return <HomePage setPage={setPage} />;
    }
  };
  return (
    <>
      <style>{css}</style>
      <Nav setPage={setPage} />
      <Tabs page={page} setPage={setPage} />
      <Page />
      <Footer setPage={setPage} />
    </>
  );
}
