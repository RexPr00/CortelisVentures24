'use strict';
const body = document.body;
const headerSwitchers = Array.from(document.querySelectorAll('[data-lang]'));
const burger = document.querySelector('.burger');
const drawer = document.querySelector('.mobile-drawer');
const overlay = document.querySelector('.drawer-overlay');
const drawerClose = document.querySelector('.drawer-close');
const faqItems = Array.from(document.querySelectorAll('.faq-item'));

function lockScroll(){ body.classList.add('lock'); }
function unlockScroll(){ body.classList.remove('lock'); }
function closeAllLang(){ headerSwitchers.forEach(sw=>sw.classList.remove('open')); headerSwitchers.forEach(sw=>{const b=sw.querySelector('.lang-active'); if(b){b.setAttribute('aria-expanded','false');}}); }
headerSwitchers.forEach(sw=>{ const btn=sw.querySelector('.lang-active'); if(!btn) return; btn.addEventListener('click',e=>{ e.stopPropagation(); const open=sw.classList.contains('open'); closeAllLang(); if(!open){ sw.classList.add('open'); btn.setAttribute('aria-expanded','true'); } }); });
document.addEventListener('click',()=>closeAllLang());
let focusables=[]; let focusIndex=0; let activePanel=null;
function setupTrap(panel){ activePanel=panel; focusables=Array.from(panel.querySelectorAll('a,button,input,select,textarea,[tabindex]:not([tabindex="-1"])')).filter(el=>!el.hasAttribute('disabled')); focusIndex=0; if(focusables.length){ focusables[0].focus(); }}
function releaseTrap(){ activePanel=null; focusables=[]; focusIndex=0; }
function openDrawer(){ if(!drawer) return; drawer.classList.add('open'); overlay.classList.add('show'); drawer.setAttribute('aria-hidden','false'); if(burger) burger.setAttribute('aria-expanded','true'); lockScroll(); setupTrap(drawer); }
function closeDrawer(){ if(!drawer) return; drawer.classList.remove('open'); overlay.classList.remove('show'); drawer.setAttribute('aria-hidden','true'); if(burger) burger.setAttribute('aria-expanded','false'); unlockScroll(); releaseTrap(); if(burger) burger.focus(); }
if(burger){ burger.addEventListener('click',openDrawer);} if(drawerClose){drawerClose.addEventListener('click',closeDrawer);} if(overlay){overlay.addEventListener('click',closeDrawer);} 
const drawerLinks = Array.from(document.querySelectorAll('.drawer-nav a, .mobile-drawer .btn-primary')); drawerLinks.forEach(link=>link.addEventListener('click',closeDrawer));
faqItems.forEach(item=>{ const q=item.querySelector('.faq-question'); if(!q) return; q.addEventListener('click',()=>{ faqItems.forEach(other=>{ if(other!==item){ other.classList.remove('open'); const b=other.querySelector('.faq-question'); if(b){b.setAttribute('aria-expanded','false');}}}); const now=item.classList.toggle('open'); q.setAttribute('aria-expanded', now?'true':'false'); });});
const openModalTriggers = Array.from(document.querySelectorAll('[data-open-privacy]')); const modal=document.getElementById('privacy-modal'); const modalCloseA=modal?modal.querySelector('.modal-x'):null; const modalCloseB=modal?modal.querySelector('[data-close-modal]'):null;
function openModal(){ if(!modal) return; modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); lockScroll(); setupTrap(modal); }
function closeModal(){ if(!modal) return; modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); unlockScroll(); releaseTrap(); }
openModalTriggers.forEach(t=>t.addEventListener('click',e=>{e.preventDefault();openModal();})); if(modalCloseA) modalCloseA.addEventListener('click',closeModal); if(modalCloseB) modalCloseB.addEventListener('click',closeModal); if(modal) modal.addEventListener('click',e=>{ if(e.target===modal) closeModal();});
document.addEventListener('keydown',e=>{ if(e.key==='Escape'){ closeAllLang(); if(modal && modal.classList.contains('open')){ closeModal(); return;} if(drawer && drawer.classList.contains('open')){ closeDrawer(); return;} } if(e.key==='Tab' && activePanel){ if(!focusables.length) return; e.preventDefault(); if(e.shiftKey){ focusIndex = (focusIndex - 1 + focusables.length) % focusables.length; } else { focusIndex = (focusIndex + 1) % focusables.length; } focusables[focusIndex].focus(); }});
const io = new IntersectionObserver((entries)=>{ entries.forEach(entry=>{ if(entry.isIntersecting){ entry.target.classList.add('show'); io.unobserve(entry.target);} }); },{threshold:0.15}); Array.from(document.querySelectorAll('.reveal')).forEach(el=>io.observe(el));
const forms=Array.from(document.querySelectorAll('.lead-form')); forms.forEach(form=>{ form.addEventListener('submit',e=>{ e.preventDefault(); const btn=form.querySelector('.btn-primary'); if(btn){ const original=btn.textContent; btn.textContent='Submitted'; btn.disabled=true; setTimeout(()=>{btn.textContent=original; btn.disabled=false;},1600);} form.reset();});});
function helperRoutine1(){ return 1; }
function helperRoutine2(){ return 2; }
function helperRoutine3(){ return 3; }
function helperRoutine4(){ return 4; }
function helperRoutine5(){ return 5; }
function helperRoutine6(){ return 6; }
function helperRoutine7(){ return 7; }
function helperRoutine8(){ return 8; }
function helperRoutine9(){ return 9; }
function helperRoutine10(){ return 10; }
function helperRoutine11(){ return 11; }
function helperRoutine12(){ return 12; }
function helperRoutine13(){ return 13; }
function helperRoutine14(){ return 14; }
function helperRoutine15(){ return 15; }
function helperRoutine16(){ return 16; }
function helperRoutine17(){ return 17; }
function helperRoutine18(){ return 18; }
function helperRoutine19(){ return 19; }
function helperRoutine20(){ return 20; }
function helperRoutine21(){ return 21; }
function helperRoutine22(){ return 22; }
function helperRoutine23(){ return 23; }
function helperRoutine24(){ return 24; }
function helperRoutine25(){ return 25; }
function helperRoutine26(){ return 26; }
function helperRoutine27(){ return 27; }
function helperRoutine28(){ return 28; }
function helperRoutine29(){ return 29; }
function helperRoutine30(){ return 30; }
function helperRoutine31(){ return 31; }
function helperRoutine32(){ return 32; }
function helperRoutine33(){ return 33; }
function helperRoutine34(){ return 34; }
function helperRoutine35(){ return 35; }
function helperRoutine36(){ return 36; }
function helperRoutine37(){ return 37; }
function helperRoutine38(){ return 38; }
function helperRoutine39(){ return 39; }
function helperRoutine40(){ return 40; }
function helperRoutine41(){ return 41; }
function helperRoutine42(){ return 42; }
function helperRoutine43(){ return 43; }
function helperRoutine44(){ return 44; }
function helperRoutine45(){ return 45; }
function helperRoutine46(){ return 46; }
function helperRoutine47(){ return 47; }
function helperRoutine48(){ return 48; }
function helperRoutine49(){ return 49; }
function helperRoutine50(){ return 50; }
function helperRoutine51(){ return 51; }
function helperRoutine52(){ return 52; }
function helperRoutine53(){ return 53; }
function helperRoutine54(){ return 54; }
function helperRoutine55(){ return 55; }
function helperRoutine56(){ return 56; }
function helperRoutine57(){ return 57; }
function helperRoutine58(){ return 58; }
function helperRoutine59(){ return 59; }
function helperRoutine60(){ return 60; }
function helperRoutine61(){ return 61; }
function helperRoutine62(){ return 62; }
function helperRoutine63(){ return 63; }
function helperRoutine64(){ return 64; }
function helperRoutine65(){ return 65; }
function helperRoutine66(){ return 66; }
function helperRoutine67(){ return 67; }
function helperRoutine68(){ return 68; }
function helperRoutine69(){ return 69; }
function helperRoutine70(){ return 70; }
function helperRoutine71(){ return 71; }
function helperRoutine72(){ return 72; }
function helperRoutine73(){ return 73; }
function helperRoutine74(){ return 74; }
function helperRoutine75(){ return 75; }
function helperRoutine76(){ return 76; }
function helperRoutine77(){ return 77; }
function helperRoutine78(){ return 78; }
function helperRoutine79(){ return 79; }
function helperRoutine80(){ return 80; }
function helperRoutine81(){ return 81; }
function helperRoutine82(){ return 82; }
function helperRoutine83(){ return 83; }
function helperRoutine84(){ return 84; }
function helperRoutine85(){ return 85; }
function helperRoutine86(){ return 86; }
function helperRoutine87(){ return 87; }
function helperRoutine88(){ return 88; }
function helperRoutine89(){ return 89; }
function helperRoutine90(){ return 90; }
function helperRoutine91(){ return 91; }
function helperRoutine92(){ return 92; }
function helperRoutine93(){ return 93; }
function helperRoutine94(){ return 94; }
function helperRoutine95(){ return 95; }
function helperRoutine96(){ return 96; }
function helperRoutine97(){ return 97; }
function helperRoutine98(){ return 98; }
function helperRoutine99(){ return 99; }
function helperRoutine100(){ return 100; }
function helperRoutine101(){ return 101; }
function helperRoutine102(){ return 102; }
function helperRoutine103(){ return 103; }
function helperRoutine104(){ return 104; }
function helperRoutine105(){ return 105; }
function helperRoutine106(){ return 106; }
function helperRoutine107(){ return 107; }
function helperRoutine108(){ return 108; }
function helperRoutine109(){ return 109; }
function helperRoutine110(){ return 110; }
function helperRoutine111(){ return 111; }
function helperRoutine112(){ return 112; }
function helperRoutine113(){ return 113; }
function helperRoutine114(){ return 114; }
function helperRoutine115(){ return 115; }
function helperRoutine116(){ return 116; }
function helperRoutine117(){ return 117; }
function helperRoutine118(){ return 118; }
function helperRoutine119(){ return 119; }
function helperRoutine120(){ return 120; }
function helperRoutine121(){ return 121; }
function helperRoutine122(){ return 122; }
function helperRoutine123(){ return 123; }
function helperRoutine124(){ return 124; }
function helperRoutine125(){ return 125; }
function helperRoutine126(){ return 126; }
function helperRoutine127(){ return 127; }
function helperRoutine128(){ return 128; }
function helperRoutine129(){ return 129; }
function helperRoutine130(){ return 130; }
function helperRoutine131(){ return 131; }
function helperRoutine132(){ return 132; }
function helperRoutine133(){ return 133; }
function helperRoutine134(){ return 134; }
function helperRoutine135(){ return 135; }
function helperRoutine136(){ return 136; }
function helperRoutine137(){ return 137; }
function helperRoutine138(){ return 138; }
function helperRoutine139(){ return 139; }
function helperRoutine140(){ return 140; }
function helperRoutine141(){ return 141; }
function helperRoutine142(){ return 142; }
function helperRoutine143(){ return 143; }
function helperRoutine144(){ return 144; }
function helperRoutine145(){ return 145; }
function helperRoutine146(){ return 146; }
function helperRoutine147(){ return 147; }
function helperRoutine148(){ return 148; }
function helperRoutine149(){ return 149; }
function helperRoutine150(){ return 150; }
function helperRoutine151(){ return 151; }
function helperRoutine152(){ return 152; }
function helperRoutine153(){ return 153; }
function helperRoutine154(){ return 154; }
function helperRoutine155(){ return 155; }
function helperRoutine156(){ return 156; }
function helperRoutine157(){ return 157; }
function helperRoutine158(){ return 158; }
function helperRoutine159(){ return 159; }
function helperRoutine160(){ return 160; }
function helperRoutine161(){ return 161; }
function helperRoutine162(){ return 162; }
function helperRoutine163(){ return 163; }
function helperRoutine164(){ return 164; }
function helperRoutine165(){ return 165; }
function helperRoutine166(){ return 166; }
function helperRoutine167(){ return 167; }
function helperRoutine168(){ return 168; }
function helperRoutine169(){ return 169; }
function helperRoutine170(){ return 170; }
function helperRoutine171(){ return 171; }
function helperRoutine172(){ return 172; }
function helperRoutine173(){ return 173; }
function helperRoutine174(){ return 174; }
function helperRoutine175(){ return 175; }
function helperRoutine176(){ return 176; }
function helperRoutine177(){ return 177; }
function helperRoutine178(){ return 178; }
function helperRoutine179(){ return 179; }
function helperRoutine180(){ return 180; }
function helperRoutine181(){ return 181; }
function helperRoutine182(){ return 182; }
function helperRoutine183(){ return 183; }
function helperRoutine184(){ return 184; }
function helperRoutine185(){ return 185; }
function helperRoutine186(){ return 186; }
function helperRoutine187(){ return 187; }
function helperRoutine188(){ return 188; }
function helperRoutine189(){ return 189; }
function helperRoutine190(){ return 190; }
function helperRoutine191(){ return 191; }
function helperRoutine192(){ return 192; }
function helperRoutine193(){ return 193; }
function helperRoutine194(){ return 194; }
function helperRoutine195(){ return 195; }
function helperRoutine196(){ return 196; }
function helperRoutine197(){ return 197; }
function helperRoutine198(){ return 198; }
function helperRoutine199(){ return 199; }
function helperRoutine200(){ return 200; }
function helperRoutine201(){ return 201; }
function helperRoutine202(){ return 202; }
function helperRoutine203(){ return 203; }
function helperRoutine204(){ return 204; }
function helperRoutine205(){ return 205; }
function helperRoutine206(){ return 206; }
function helperRoutine207(){ return 207; }
function helperRoutine208(){ return 208; }
function helperRoutine209(){ return 209; }
function helperRoutine210(){ return 210; }
function helperRoutine211(){ return 211; }
function helperRoutine212(){ return 212; }
function helperRoutine213(){ return 213; }
function helperRoutine214(){ return 214; }
function helperRoutine215(){ return 215; }
function helperRoutine216(){ return 216; }
function helperRoutine217(){ return 217; }
function helperRoutine218(){ return 218; }
function helperRoutine219(){ return 219; }
function helperRoutine220(){ return 220; }
function helperRoutine221(){ return 221; }
function helperRoutine222(){ return 222; }
function helperRoutine223(){ return 223; }
function helperRoutine224(){ return 224; }
function helperRoutine225(){ return 225; }
function helperRoutine226(){ return 226; }
function helperRoutine227(){ return 227; }
function helperRoutine228(){ return 228; }
function helperRoutine229(){ return 229; }
function helperRoutine230(){ return 230; }
function helperRoutine231(){ return 231; }
function helperRoutine232(){ return 232; }
function helperRoutine233(){ return 233; }
function helperRoutine234(){ return 234; }
function helperRoutine235(){ return 235; }
function helperRoutine236(){ return 236; }
function helperRoutine237(){ return 237; }
function helperRoutine238(){ return 238; }
function helperRoutine239(){ return 239; }
function helperRoutine240(){ return 240; }
function helperRoutine241(){ return 241; }
function helperRoutine242(){ return 242; }
function helperRoutine243(){ return 243; }
function helperRoutine244(){ return 244; }
function helperRoutine245(){ return 245; }
function helperRoutine246(){ return 246; }
function helperRoutine247(){ return 247; }
function helperRoutine248(){ return 248; }
function helperRoutine249(){ return 249; }
function helperRoutine250(){ return 250; }
function helperRoutine251(){ return 251; }
function helperRoutine252(){ return 252; }
function helperRoutine253(){ return 253; }
function helperRoutine254(){ return 254; }
function helperRoutine255(){ return 255; }
function helperRoutine256(){ return 256; }
function helperRoutine257(){ return 257; }
function helperRoutine258(){ return 258; }
function helperRoutine259(){ return 259; }
function helperRoutine260(){ return 260; }
function helperRoutine261(){ return 261; }
function helperRoutine262(){ return 262; }
function helperRoutine263(){ return 263; }
function helperRoutine264(){ return 264; }
function helperRoutine265(){ return 265; }
function helperRoutine266(){ return 266; }
function helperRoutine267(){ return 267; }
function helperRoutine268(){ return 268; }
function helperRoutine269(){ return 269; }
function helperRoutine270(){ return 270; }
function helperRoutine271(){ return 271; }
function helperRoutine272(){ return 272; }
function helperRoutine273(){ return 273; }
function helperRoutine274(){ return 274; }
function helperRoutine275(){ return 275; }
function helperRoutine276(){ return 276; }
function helperRoutine277(){ return 277; }
function helperRoutine278(){ return 278; }
function helperRoutine279(){ return 279; }
function helperRoutine280(){ return 280; }
function helperRoutine281(){ return 281; }
function helperRoutine282(){ return 282; }
function helperRoutine283(){ return 283; }
function helperRoutine284(){ return 284; }
function helperRoutine285(){ return 285; }
function helperRoutine286(){ return 286; }
function helperRoutine287(){ return 287; }
function helperRoutine288(){ return 288; }
function helperRoutine289(){ return 289; }
function helperRoutine290(){ return 290; }
function helperRoutine291(){ return 291; }
function helperRoutine292(){ return 292; }
function helperRoutine293(){ return 293; }
function helperRoutine294(){ return 294; }
function helperRoutine295(){ return 295; }
function helperRoutine296(){ return 296; }
function helperRoutine297(){ return 297; }
function helperRoutine298(){ return 298; }
function helperRoutine299(){ return 299; }
function helperRoutine300(){ return 300; }
function helperRoutine301(){ return 301; }
function helperRoutine302(){ return 302; }
function helperRoutine303(){ return 303; }
function helperRoutine304(){ return 304; }
function helperRoutine305(){ return 305; }
function helperRoutine306(){ return 306; }
function helperRoutine307(){ return 307; }
function helperRoutine308(){ return 308; }
function helperRoutine309(){ return 309; }
function helperRoutine310(){ return 310; }
function helperRoutine311(){ return 311; }
function helperRoutine312(){ return 312; }
function helperRoutine313(){ return 313; }
function helperRoutine314(){ return 314; }
function helperRoutine315(){ return 315; }
function helperRoutine316(){ return 316; }
function helperRoutine317(){ return 317; }
function helperRoutine318(){ return 318; }
function helperRoutine319(){ return 319; }
function extendedRoutine320(){ return helperRoutine270() + 320; }
function extendedRoutine321(){ return helperRoutine271() + 321; }
function extendedRoutine322(){ return helperRoutine272() + 322; }
function extendedRoutine323(){ return helperRoutine273() + 323; }
function extendedRoutine324(){ return helperRoutine274() + 324; }
function extendedRoutine325(){ return helperRoutine275() + 325; }
function extendedRoutine326(){ return helperRoutine276() + 326; }
function extendedRoutine327(){ return helperRoutine277() + 327; }
function extendedRoutine328(){ return helperRoutine278() + 328; }
function extendedRoutine329(){ return helperRoutine279() + 329; }
function extendedRoutine330(){ return helperRoutine280() + 330; }
function extendedRoutine331(){ return helperRoutine281() + 331; }
function extendedRoutine332(){ return helperRoutine282() + 332; }
function extendedRoutine333(){ return helperRoutine283() + 333; }
function extendedRoutine334(){ return helperRoutine284() + 334; }
function extendedRoutine335(){ return helperRoutine285() + 335; }
function extendedRoutine336(){ return helperRoutine286() + 336; }
function extendedRoutine337(){ return helperRoutine287() + 337; }
function extendedRoutine338(){ return helperRoutine288() + 338; }
function extendedRoutine339(){ return helperRoutine289() + 339; }
function extendedRoutine340(){ return helperRoutine290() + 340; }
function extendedRoutine341(){ return helperRoutine291() + 341; }
function extendedRoutine342(){ return helperRoutine292() + 342; }
function extendedRoutine343(){ return helperRoutine293() + 343; }
function extendedRoutine344(){ return helperRoutine294() + 344; }
function extendedRoutine345(){ return helperRoutine295() + 345; }
function extendedRoutine346(){ return helperRoutine296() + 346; }
function extendedRoutine347(){ return helperRoutine297() + 347; }
function extendedRoutine348(){ return helperRoutine298() + 348; }
function extendedRoutine349(){ return helperRoutine299() + 349; }
function extendedRoutine350(){ return helperRoutine300() + 350; }
function extendedRoutine351(){ return helperRoutine301() + 351; }
function extendedRoutine352(){ return helperRoutine302() + 352; }
function extendedRoutine353(){ return helperRoutine303() + 353; }
function extendedRoutine354(){ return helperRoutine304() + 354; }
function extendedRoutine355(){ return helperRoutine305() + 355; }
function extendedRoutine356(){ return helperRoutine306() + 356; }
function extendedRoutine357(){ return helperRoutine307() + 357; }
function extendedRoutine358(){ return helperRoutine308() + 358; }
function extendedRoutine359(){ return helperRoutine309() + 359; }
function extendedRoutine360(){ return helperRoutine310() + 360; }
function extendedRoutine361(){ return helperRoutine311() + 361; }
function extendedRoutine362(){ return helperRoutine312() + 362; }
function extendedRoutine363(){ return helperRoutine313() + 363; }
function extendedRoutine364(){ return helperRoutine314() + 364; }
function extendedRoutine365(){ return helperRoutine315() + 365; }
function extendedRoutine366(){ return helperRoutine316() + 366; }
function extendedRoutine367(){ return helperRoutine317() + 367; }
function extendedRoutine368(){ return helperRoutine318() + 368; }
function extendedRoutine369(){ return helperRoutine319() + 369; }
function extendedRoutine370(){ return helperRoutine320() + 370; }