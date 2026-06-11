/* ============================================================================
   SM RESIDENCE — Website (Redesign 2026)
   ----------------------------------------------------------------------------
   • React + JavaScript, ficheiro único (App.jsx) — sem dependências externas.
   • Estrutura: Início / Sobre Nós (inclui Parcerias) / Serviços / Projectos /
     Contactos.
   • Look & feel: rectilíneo, arquitectónico, zero cantos redondos, navegação
     horizontal (sem menu lateral). Inspiração: almadvogados.pt.
   • Fonts: Oswald (títulos) + Archivo (corpo) — carregadas via Google Fonts.
   • NOTAS PARA PRODUÇÃO:
     1) LOGO — substituir o componente <Logo /> pelo ficheiro oficial do
        cliente (pedir versão vectorial/PNG transparente; a do site actual é
        uma captura de ecrã com fundo branco).
     2) IMAGENS — usar a pasta /img fornecida (imagens do site actual,
        optimizadas). Colocar em /public/img do projecto Vite, para que os
        caminhos "/img/..." funcionem.
     3) FORMULÁRIO — neste momento abre o cliente de e-mail (mailto). Para
        envio directo, ligar a um backend ou serviço tipo Formspree/Resend.
     4) Para usar com react-router, basta trocar o estado `page` por rotas.
   ============================================================================ */

import { useState, useEffect, useRef } from "react";

/* ============================== DADOS ===================================== */

const CONTACTOS = {
  email: "geral@smresidence.pt",
  telefones: ["218 763 939", "916 967 236"],
  morada: ["Edifício Sky Restelo", "Rua Dom Jorge da Costa, Nº5, 4ºA", "1400-423 Belém — Lisboa"],
  mapsEmbed:
    "https://www.google.com/maps?q=Rua+Dom+Jorge+da+Costa+5,+1400-423+Lisboa&output=embed",
};

/* Imagens do cliente — colocar a pasta /img dentro de /public do projecto */
const IMG = {
  hero: "/img/hero.jpg",                     // edifício de vidro (homepage actual)
  edificioBranco: "/img/edificio-branco.jpg",// edifício branco (homepage actual)
  torreAzul: "/img/torre-azul.jpg",          // torre azul (Sobre Nós actual)
  estrutura: "/img/estrutura.jpg",           // estrutura betão/vidro (Sobre Nós actual)
  grua: "/img/grua.jpg",                     // grua de obra
  obra: "/img/obra.jpg",                     // obra com andaimes (Serviços — construção)
  interior: "/img/interior.jpg",             // sala T2 (Serviços — interiores)
  garagem: "/img/garagem.jpg",               // manutenção predial (Serviços — pós-venda)
  moinhos12: "/img/moinhos12.jpg",           // Edifício Moinhos 12 (foto real)
  greenLiving: "/img/green-living.jpg",      // Edifício Green Living (render 3D)
};

const SERVICOS = [
  {
    n: "01",
    titulo: "Construção e Gestão de Projectos",
    img: IMG.obra,
    texto:
      "Planeamos, organizamos, executamos e controlamos todas as actividades de cada projecto — desde a aquisição do terreno e o desenvolvimento dos projectos de arquitectura e engenharia até à entrega de chaves — cumprindo os prazos e custos previamente definidos.",
  },
  {
    n: "02",
    titulo: "Decoração e Design de Interiores",
    img: IMG.interior,
    texto:
      "Transformamos espaços em ambientes funcionais e esteticamente agradáveis, que reflectem a personalidade e o estilo de vida de quem os habita. Através das nossas parcerias, o cliente escolhe os materiais, cores e acabamentos que mais aprecia para o conforto do seu lar.",
  },
  {
    n: "03",
    titulo: "Manutenção e Garantia Pós-Venda",
    img: IMG.garagem,
    texto:
      "Acompanhamos o cliente após a venda do apartamento, cumprindo escrupulosamente a garantia legal de 5 anos. Uma manutenção predial bem feita garante a segurança e o bom funcionamento do edifício, preservando o seu valor e o conforto dos residentes.",
  },
];

const PROJECTOS = [
  {
    id: "moinhos12",
    nome: "Edifício Moinhos 12",
    local: "Odivelas — Moinhos do Cruzeiro",
    estado: "Concluído · Totalmente vendido",
    texto:
      "O Edifício Moinhos 12 é um verdadeiro marco na paisagem urbana da cidade de Odivelas, na nova urbanização dos Moinhos do Cruzeiro, impressionando pela sua grandiosidade e beleza.",
    ficha: [
      ["Localização", "Odivelas, Moinhos do Cruzeiro"],
      ["Pisos", "12"],
      ["Tipologias", "1 × T1 · 15 × T2"],
      ["Comodidades", "Ginásio · Rooftop no último piso"],
      ["Construção terminada", "Setembro de 2024"],
      ["Estado", "Totalmente vendido"],
    ],
    website: "https://www.moinhos12.com",
    // GALERIA — fotos reais do empreendimento e da obra
    galeria: [IMG.moinhos12, IMG.obra, IMG.interior],
  },
  {
    id: "greenliving",
    nome: "Edifício Green Living",
    local: "Vialonga — Terraços do Moulin",
    estado: "Em construção · Entrega Maio 2027",
    texto:
      "Projecto em construção na nova urbanização dos Terraços do Moulin, em Vialonga, no município de Vila Franca de Xira. Morar num apartamento luxuoso rodeado de espaços verdes é como viver um sonho — conforto e sofisticação em todos os detalhes.",
    ficha: [
      ["Localização", "Vialonga, Vila Franca de Xira"],
      ["Apartamentos", "10"],
      ["Tipologias", "T1 · T2 · T3"],
      ["Comodidades", "Piscina no rooftop · Ginásio"],
      ["Entrega de chaves", "Maio de 2027"],
      ["Estado", "Em construção"],
    ],
    website: null,
    // GALERIA — adicionar mais renders/fotos de obra quando disponíveis
    galeria: [IMG.greenLiving],
  },
];

const PARCERIAS = [
  { nome: "Crédito Agrícola", area: "Parceiro financeiro e bancário" },
  { nome: "Las Kasas", area: "Mediação imobiliária" },
  { nome: "Remax VS Brothers", area: "Mediação imobiliária" },
  { nome: "Confrasilvas", area: "Parceiro de construção" },
];

const ESPECIALIDADES = [
  "Arquitectura",
  "Engenharia",
  "Manobradores de gruas",
  "Electricistas",
  "Canalizadores",
  "Ladrilhadores",
  "Pedreiros",
  "Pintores",
  "Comerciais",
  "Advogados",
];

const STATS = [
  ["10+", "Anos de experiência no sector"],
  ["50+", "Escrituras realizadas"],
  ["5", "Anos de garantia pós-venda"],
  ["100%", "Moinhos 12 vendido"],
];

const NAV = [
  ["inicio", "Início"],
  ["sobre", "Sobre Nós"],
  ["servicos", "Serviços"],
  ["projectos", "Projectos"],
  ["contactos", "Contactos"],
];

/* ============================== ESTILOS ==================================== */

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600&family=Archivo:wght@400;500;600&display=swap');

:root{
  --ink:#15181C;
  --ink-2:#2A2E34;
  --betao:#F1F1EE;
  --branco:#FFFFFF;
  --aco:#6B7076;
  --bronze:#9A7B3F;
  --hairline:#D8D8D3;
  --display:'Oswald',sans-serif;
  --body:'Archivo',sans-serif;
}
*{margin:0;padding:0;box-sizing:border-box;border-radius:0 !important;}
html{scroll-behavior:smooth;}
body{font-family:var(--body);color:var(--ink);background:var(--branco);
  -webkit-font-smoothing:antialiased;line-height:1.65;}
img{display:block;max-width:100%;}
button{font-family:inherit;cursor:pointer;background:none;border:none;color:inherit;}
a{color:inherit;text-decoration:none;}

.wrap{width:min(1240px,92%);margin:0 auto;}

/* ---- Tipografia ---- */
.h-display{font-family:var(--display);font-weight:600;text-transform:uppercase;
  line-height:1.02;letter-spacing:.01em;}
.h-hero{font-size:clamp(2.6rem,7vw,5.4rem);color:var(--branco);}
.h-section{font-size:clamp(1.9rem,4vw,3.1rem);}
.h-page{font-size:clamp(2.4rem,6vw,4.4rem);}
.lead{font-size:clamp(1.05rem,1.6vw,1.25rem);color:var(--aco);max-width:62ch;}
.eyebrow{display:flex;align-items:center;gap:10px;font-size:.72rem;font-weight:600;
  text-transform:uppercase;letter-spacing:.22em;color:var(--bronze);margin-bottom:18px;}
.eyebrow::before{content:'';width:7px;height:7px;background:var(--bronze);flex:none;}
.eyebrow.light{color:#D9C49A;}
.muted{color:var(--aco);}

/* ---- Botões (quadrados, sem cantos redondos) ---- */
.btn{display:inline-flex;align-items:center;gap:14px;padding:16px 30px;
  font-family:var(--display);font-weight:500;font-size:.84rem;text-transform:uppercase;
  letter-spacing:.16em;border:1px solid var(--ink);color:var(--ink);
  transition:background .25s,color .25s,border-color .25s;}
.btn .arr{transition:transform .25s;}
.btn:hover{background:var(--ink);color:var(--branco);}
.btn:hover .arr{transform:translateX(5px);}
.btn.solid{background:var(--ink);color:var(--branco);}
.btn.solid:hover{background:var(--bronze);border-color:var(--bronze);}
.btn.ghost-light{border-color:rgba(255,255,255,.6);color:var(--branco);}
.btn.ghost-light:hover{background:var(--branco);color:var(--ink);border-color:var(--branco);}
.btn:focus-visible{outline:2px solid var(--bronze);outline-offset:3px;}

/* ---- Marcas de registo (assinatura visual) ---- */
.plot{position:relative;}
.mark{position:absolute;width:15px;height:15px;pointer-events:none;z-index:2;}
.mark::before,.mark::after{content:'';position:absolute;background:var(--bronze);}
.mark::before{width:15px;height:1px;top:7px;}
.mark::after{width:1px;height:15px;left:7px;}
.mark.tl{top:-8px;left:-8px;} .mark.tr{top:-8px;right:-8px;}
.mark.bl{bottom:-8px;left:-8px;} .mark.br{bottom:-8px;right:-8px;}
.mark.light::before,.mark.light::after{background:rgba(255,255,255,.7);}

/* ---- Navegação ---- */
.nav{position:fixed;top:0;left:0;right:0;z-index:50;
  transition:background .3s,border-color .3s,box-shadow .3s;border-bottom:1px solid transparent;}
.nav.solid{background:var(--branco);border-bottom-color:var(--hairline);}
.nav-inner{display:flex;align-items:center;justify-content:space-between;height:78px;}
.nav-links{display:flex;align-items:center;gap:34px;}
.nav-link{font-size:.78rem;font-weight:600;text-transform:uppercase;letter-spacing:.14em;
  color:var(--branco);padding:6px 0;position:relative;transition:color .25s;}
.nav.solid .nav-link{color:var(--ink);}
.nav-link::after{content:'';position:absolute;left:0;bottom:0;height:2px;width:0;
  background:var(--bronze);transition:width .25s;}
.nav-link:hover::after,.nav-link.active::after{width:100%;}
.nav-cta{padding:12px 22px;font-size:.74rem;}
.nav .btn.nav-cta{border-color:rgba(255,255,255,.6);color:var(--branco);}
.nav .btn.nav-cta:hover{background:var(--branco);color:var(--ink);}
.nav.solid .btn.nav-cta{border-color:var(--ink);color:var(--ink);}
.nav.solid .btn.nav-cta:hover{background:var(--ink);color:var(--branco);}
.burger{display:none;flex-direction:column;gap:5px;padding:8px;}
.burger span{width:24px;height:2px;background:var(--branco);transition:transform .25s,opacity .25s;}
.nav.solid .burger span{background:var(--ink);}
.burger.open span:nth-child(1){transform:translateY(7px) rotate(45deg);}
.burger.open span:nth-child(2){opacity:0;}
.burger.open span:nth-child(3){transform:translateY(-7px) rotate(-45deg);}

/* Menu mobile: overlay de topo (não lateral) */
.mobile-menu{position:fixed;inset:0;background:var(--ink);z-index:49;
  display:flex;flex-direction:column;justify-content:center;padding:0 8%;
  transform:translateY(-100%);transition:transform .35s ease;}
.mobile-menu.open{transform:translateY(0);}
.mobile-menu .nav-link{font-family:var(--display);font-size:1.7rem;color:var(--branco);
  padding:14px 0;border-bottom:1px solid rgba(255,255,255,.12);}

/* ---- Logo (tipográfico; substituir pelo ficheiro oficial) ---- */
.logo{display:flex;align-items:center;gap:12px;}
.logo-mark{width:42px;height:42px;border:2px solid currentColor;display:grid;place-items:center;
  font-family:var(--display);font-weight:600;font-size:1.05rem;letter-spacing:.05em;}
.logo-text{font-family:var(--display);font-weight:500;font-size:1rem;text-transform:uppercase;
  letter-spacing:.3em;}
.logo.on-dark{color:var(--branco);}
.nav.solid .logo{color:var(--ink);}

/* ---- Hero ---- */
.hero{position:relative;min-height:100vh;display:flex;align-items:flex-end;
  background:var(--ink);overflow:hidden;}
.hero-bg{position:absolute;inset:0;background-size:cover;background-position:center;
  animation:heroZoom 14s ease-out forwards;}
.hero-bg::after{content:'';position:absolute;inset:0;
  background:linear-gradient(to top,rgba(13,15,18,.88) 0%,rgba(13,15,18,.35) 55%,rgba(13,15,18,.45) 100%);}
@keyframes heroZoom{from{transform:scale(1.07);}to{transform:scale(1);}}
.hero-grid{position:absolute;inset:0;pointer-events:none;opacity:.16;
  background-image:linear-gradient(rgba(255,255,255,.25) 1px,transparent 1px),
                   linear-gradient(90deg,rgba(255,255,255,.25) 1px,transparent 1px);
  background-size:160px 160px;}
.hero-content{position:relative;z-index:1;padding:140px 0 90px;}
.hero-sub{color:rgba(255,255,255,.85);max-width:56ch;font-size:clamp(1rem,1.5vw,1.18rem);
  margin:26px 0 38px;}
.hero-actions{display:flex;gap:16px;flex-wrap:wrap;}
.hero-meta{display:flex;gap:40px;margin-top:64px;padding-top:24px;
  border-top:1px solid rgba(255,255,255,.25);color:rgba(255,255,255,.75);
  font-size:.74rem;text-transform:uppercase;letter-spacing:.18em;flex-wrap:wrap;}

/* ---- Cabeçalho de página interior ---- */
.page-head{background:var(--betao);padding:170px 0 70px;border-bottom:1px solid var(--hairline);}
.page-head .lead{margin-top:22px;}

/* ---- Secções ---- */
.section{padding:clamp(70px,9vw,120px) 0;}
.section.tinted{background:var(--betao);}
.section.dark{background:var(--ink);color:var(--branco);}
.split{display:grid;grid-template-columns:1fr 1fr;gap:clamp(40px,6vw,90px);align-items:center;}
.frame{overflow:hidden;border:1px solid var(--hairline);}
.frame img{width:100%;height:100%;object-fit:cover;aspect-ratio:4/3;
  transition:transform .6s ease;}
.frame:hover img{transform:scale(1.045);}
.frame.tall img{aspect-ratio:3/4;}

/* ---- Stats ---- */
.stats{display:grid;grid-template-columns:repeat(4,1fr);border:1px solid var(--hairline);}
.stat{padding:38px 30px;border-right:1px solid var(--hairline);}
.stat:last-child{border-right:none;}
.stat b{display:block;font-family:var(--display);font-weight:600;
  font-size:clamp(2.2rem,4vw,3.4rem);line-height:1;}
.stat span{display:block;margin-top:10px;font-size:.78rem;text-transform:uppercase;
  letter-spacing:.14em;color:var(--aco);}
.section.dark .stat span{color:rgba(255,255,255,.6);}
.section.dark .stats,.section.dark .stat{border-color:rgba(255,255,255,.18);}

/* ---- Cards de serviços ---- */
.cards{display:grid;grid-template-columns:repeat(3,1fr);border:1px solid var(--hairline);}
.card{padding:44px 34px;border-right:1px solid var(--hairline);position:relative;
  transition:background .3s;background:var(--branco);}
.card:last-child{border-right:none;}
.card:hover{background:var(--betao);}
.card .num{font-family:var(--display);font-size:.85rem;color:var(--bronze);letter-spacing:.2em;}
.card h3{font-family:var(--display);font-weight:500;text-transform:uppercase;
  font-size:1.25rem;line-height:1.25;margin:18px 0 14px;}
.card p{color:var(--aco);font-size:.95rem;}
.card .bar{position:absolute;left:0;top:0;height:3px;width:0;background:var(--bronze);
  transition:width .35s;}
.card:hover .bar{width:100%;}

/* ---- Serviços (página) ---- */
.svc-row{display:grid;grid-template-columns:1fr 1fr;gap:clamp(40px,6vw,90px);
  align-items:center;padding:clamp(50px,7vw,80px) 0;border-bottom:1px solid var(--hairline);}
.svc-row:last-child{border-bottom:none;}
.svc-row .num{font-family:var(--display);font-size:1rem;color:var(--bronze);letter-spacing:.2em;}
.svc-row h3{font-family:var(--display);font-weight:500;text-transform:uppercase;
  font-size:clamp(1.5rem,2.6vw,2.1rem);line-height:1.2;margin:14px 0 18px;}

/* ---- Projectos ---- */
.proj-card{position:relative;display:block;width:100%;text-align:left;overflow:hidden;
  border:1px solid var(--hairline);background:var(--ink);}
.proj-card img{width:100%;aspect-ratio:16/10;object-fit:cover;opacity:.92;
  transition:transform .6s,opacity .4s;}
.proj-card:hover img{transform:scale(1.05);opacity:.55;}
.proj-overlay{position:absolute;left:0;right:0;bottom:0;padding:28px;
  background:linear-gradient(to top,rgba(13,15,18,.92),transparent);color:var(--branco);}
.proj-overlay .tag{font-size:.7rem;text-transform:uppercase;letter-spacing:.2em;
  color:#D9C49A;}
.proj-overlay h3{font-family:var(--display);font-weight:500;text-transform:uppercase;
  font-size:1.5rem;margin-top:8px;}
.proj-overlay .ver{display:inline-flex;align-items:center;gap:10px;margin-top:12px;
  font-size:.74rem;text-transform:uppercase;letter-spacing:.16em;
  border-bottom:1px solid var(--bronze);padding-bottom:4px;}

/* ---- Ficha técnica ---- */
.ficha{border:1px solid var(--hairline);}
.ficha-row{display:grid;grid-template-columns:200px 1fr;border-bottom:1px solid var(--hairline);}
.ficha-row:last-child{border-bottom:none;}
.ficha-row dt{padding:14px 18px;font-size:.7rem;text-transform:uppercase;
  letter-spacing:.16em;color:var(--bronze);border-right:1px solid var(--hairline);
  background:var(--betao);}
.ficha-row dd{padding:14px 18px;font-size:.94rem;}

/* ---- Galeria ---- */
.galeria-main{border:1px solid var(--hairline);overflow:hidden;}
.galeria-main img{width:100%;aspect-ratio:16/9;object-fit:cover;}
.galeria-thumbs{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:10px;}
.thumb{border:1px solid var(--hairline);overflow:hidden;padding:0;opacity:.65;
  transition:opacity .25s,border-color .25s;}
.thumb img{width:100%;aspect-ratio:4/3;object-fit:cover;}
.thumb.active,.thumb:hover{opacity:1;border-color:var(--bronze);}

/* ---- Especialidades / Parcerias ---- */
.chips{display:flex;flex-wrap:wrap;gap:10px;}
.chip{padding:12px 20px;border:1px solid var(--hairline);font-size:.78rem;
  text-transform:uppercase;letter-spacing:.12em;transition:background .25s,color .25s;}
.chip:hover{background:var(--ink);color:var(--branco);}
.parcerias{display:grid;grid-template-columns:repeat(4,1fr);border:1px solid var(--hairline);}
.parceria{padding:40px 30px;border-right:1px solid var(--hairline);transition:background .3s;}
.parceria:last-child{border-right:none;}
.parceria:hover{background:var(--betao);}
.parceria b{display:block;font-family:var(--display);font-weight:500;
  text-transform:uppercase;font-size:1.1rem;letter-spacing:.04em;}
.parceria span{display:block;margin-top:8px;font-size:.74rem;text-transform:uppercase;
  letter-spacing:.14em;color:var(--aco);}

/* ---- CTA ---- */
.cta-band{background:var(--ink);color:var(--branco);padding:clamp(70px,9vw,110px) 0;
  position:relative;overflow:hidden;}
.cta-band .h-section{max-width:18ch;}
.cta-inner{display:flex;align-items:flex-end;justify-content:space-between;
  gap:40px;flex-wrap:wrap;}

/* ---- Contactos ---- */
.contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:clamp(40px,6vw,80px);}
.contact-item{padding:26px 0;border-bottom:1px solid var(--hairline);}
.contact-item .lbl{font-size:.7rem;text-transform:uppercase;letter-spacing:.2em;
  color:var(--bronze);margin-bottom:8px;}
.contact-item a:hover{color:var(--bronze);}
.field{margin-bottom:18px;}
.field label{display:block;font-size:.7rem;text-transform:uppercase;
  letter-spacing:.18em;color:var(--aco);margin-bottom:8px;}
.field input,.field textarea{width:100%;padding:15px 16px;border:1px solid var(--hairline);
  font-family:var(--body);font-size:.95rem;background:var(--branco);color:var(--ink);}
.field input:focus,.field textarea:focus{outline:none;border-color:var(--ink);}
.field textarea{min-height:140px;resize:vertical;}
.form-ok{margin-top:16px;padding:14px 18px;border:1px solid var(--bronze);
  color:var(--bronze);font-size:.88rem;}
.form-err{margin-top:16px;padding:14px 18px;border:1px solid #B3422E;
  color:#B3422E;font-size:.88rem;}
.map-frame{border:1px solid var(--hairline);margin-top:clamp(50px,7vw,80px);}
.map-frame iframe{display:block;width:100%;height:420px;border:0;filter:grayscale(1) contrast(1.05);}

/* ---- Footer ---- */
.footer{background:var(--ink);color:var(--branco);padding:80px 0 0;}
.footer-grid{display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr;gap:50px;
  padding-bottom:60px;border-bottom:1px solid rgba(255,255,255,.15);}
.footer .lbl{font-size:.7rem;text-transform:uppercase;letter-spacing:.2em;
  color:#D9C49A;margin-bottom:16px;}
.footer-link{display:block;padding:6px 0;font-size:.88rem;color:rgba(255,255,255,.75);
  transition:color .25s;text-align:left;}
.footer-link:hover{color:var(--branco);}
.footer p{font-size:.88rem;color:rgba(255,255,255,.75);}
.footer-tag{margin-top:18px;max-width:30ch;font-size:.9rem;color:rgba(255,255,255,.65);}
.footer-bottom{display:flex;justify-content:space-between;align-items:center;
  padding:24px 0;font-size:.75rem;color:rgba(255,255,255,.5);
  text-transform:uppercase;letter-spacing:.14em;flex-wrap:wrap;gap:10px;}

/* ---- Animações de entrada ---- */
.reveal{opacity:0;transform:translateY(26px);
  transition:opacity .7s ease,transform .7s ease;}
.reveal.in{opacity:1;transform:none;}
.page-enter{animation:pageIn .5s ease both;}
@keyframes pageIn{from{opacity:0;}to{opacity:1;}}
@media (prefers-reduced-motion:reduce){
  .reveal{opacity:1;transform:none;transition:none;}
  .hero-bg{animation:none;}
  html{scroll-behavior:auto;}
}

/* ---- Responsivo ---- */
@media (max-width:980px){
  .nav-links{display:none;}
  .burger{display:flex;}
  .split,.svc-row,.contact-grid{grid-template-columns:1fr;}
  .stats{grid-template-columns:repeat(2,1fr);}
  .stat:nth-child(2){border-right:none;}
  .stat:nth-child(-n+2){border-bottom:1px solid var(--hairline);}
  .section.dark .stat:nth-child(-n+2){border-bottom:1px solid rgba(255,255,255,.18);}
  .cards{grid-template-columns:1fr;}
  .card{border-right:none;border-bottom:1px solid var(--hairline);}
  .card:last-child{border-bottom:none;}
  .parcerias{grid-template-columns:repeat(2,1fr);}
  .parceria:nth-child(2n){border-right:none;}
  .parceria:nth-child(-n+2){border-bottom:1px solid var(--hairline);}
  .footer-grid{grid-template-columns:1fr 1fr;}
  .ficha-row{grid-template-columns:1fr;}
  .ficha-row dt{border-right:none;border-bottom:1px solid var(--hairline);}
}
@media (max-width:560px){
  .parcerias,.footer-grid{grid-template-columns:1fr;}
  .parceria{border-right:none;border-bottom:1px solid var(--hairline);}
  .parceria:last-child{border-bottom:none;}
  .galeria-thumbs{grid-template-columns:repeat(3,1fr);}
}
`;

/* =========================== COMPONENTES BASE ============================== */

function Logo({ onDark = false }) {
  /* TODO: substituir por <img src="/logo.svg" alt="SM Residence" /> com o
     ficheiro oficial do cliente (pedir versão vectorial). */
  return (
    <span className={`logo ${onDark ? "on-dark" : ""}`}>
      <span className="logo-mark">SM</span>
      <span className="logo-text">Residence</span>
    </span>
  );
}

function Marks({ light = false }) {
  const l = light ? " light" : "";
  return (
    <>
      <span className={`mark tl${l}`} aria-hidden="true" />
      <span className={`mark tr${l}`} aria-hidden="true" />
      <span className={`mark bl${l}`} aria-hidden="true" />
      <span className={`mark br${l}`} aria-hidden="true" />
    </>
  );
}

function Arrow() {
  return (
    <span className="arr" aria-hidden="true">
      →
    </span>
  );
}

function Nav({ page, go, scrolled, menuOpen, setMenuOpen, overHero }) {
  const solid = (scrolled || !overHero) && !menuOpen;
  return (
    <>
      <header className={`nav ${solid ? "solid" : ""}`}>
        <div className="wrap nav-inner">
          <button onClick={() => go("inicio")} aria-label="SM Residence — Início">
            <Logo onDark={!solid} />
          </button>
          <nav className="nav-links" aria-label="Navegação principal">
            {NAV.filter(([id]) => id !== "contactos").map(([id, label]) => (
              <button
                key={id}
                className={`nav-link ${page === id ? "active" : ""}`}
                onClick={() => go(id)}
              >
                {label}
              </button>
            ))}
            <button className="btn nav-cta" onClick={() => go("contactos")}>
              Contacte-nos
            </button>
          </nav>
          <button
            className={`burger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
          >
            <span /> <span /> <span />
          </button>
        </div>
      </header>

      {/* Menu mobile — overlay de topo (sem menu lateral) */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {NAV.map(([id, label]) => (
          <button
            key={id}
            className="nav-link"
            onClick={() => {
              go(id);
              setMenuOpen(false);
            }}
          >
            {label}
          </button>
        ))}
      </div>
    </>
  );
}

function Footer({ go }) {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Logo onDark />
            <p className="footer-tag">
              Especialistas em construção de edifícios residenciais na região da
              Grande Lisboa.
            </p>
          </div>
          <div>
            <div className="lbl">Navegação</div>
            {NAV.map(([id, label]) => (
              <button key={id} className="footer-link" onClick={() => go(id)}>
                {label}
              </button>
            ))}
          </div>
          <div>
            <div className="lbl">Morada</div>
            <p>
              {CONTACTOS.morada.map((l) => (
                <span key={l}>
                  {l}
                  <br />
                </span>
              ))}
            </p>
          </div>
          <div>
            <div className="lbl">Contactos</div>
            <p>
              <a href={`mailto:${CONTACTOS.email}`}>{CONTACTOS.email}</a>
              <br />
              {CONTACTOS.telefones.map((t) => (
                <span key={t}>
                  <a href={`tel:+351${t.replace(/\s/g, "")}`}>{t}</a>
                  <br />
                </span>
              ))}
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} SM Residence, S.A. — Direitos reservados</span>
          <span>Grande Lisboa · Portugal</span>
        </div>
      </div>
    </footer>
  );
}

function CtaBand({ go }) {
  return (
    <section className="cta-band">
      <div className="wrap cta-inner">
        <div>
          <div className="eyebrow light">Fale connosco</div>
          <h2 className="h-display h-section">
            Precisa de nos contactar?
          </h2>
        </div>
        <button className="btn ghost-light" onClick={() => go("contactos")}>
          Entre em contacto <Arrow />
        </button>
      </div>
    </section>
  );
}

/* ============================== PÁGINAS ==================================== */

function PageInicio({ go }) {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage: `url(${IMG.hero})` }} />
        <div className="hero-grid" />
        <div className="wrap hero-content">
          <div className="eyebrow light reveal">
            Construção residencial — Grande Lisboa
          </div>
          <h1 className="h-display h-hero reveal">
            O prazer de construir
            <br />
            sonhos de famílias
          </h1>
          <p className="hero-sub reveal">
            Somos especialistas em construção de edifícios residenciais na região
            da Grande Lisboa. Oferecemos qualidade e conforto para tornar os seus
            sonhos em realidade.
          </p>
          <div className="hero-actions reveal">
            <button className="btn ghost-light" onClick={() => go("projectos")}>
              Ver projectos <Arrow />
            </button>
            <button className="btn ghost-light" onClick={() => go("contactos")}>
              Contacte-nos
            </button>
          </div>
          <div className="hero-meta reveal">
            <span>10+ anos de experiência</span>
            <span>50+ escrituras realizadas</span>
            <span>Garantia pós-venda de 5 anos</span>
          </div>
        </div>
      </section>

      {/* SOBRE — teaser */}
      <section className="section">
        <div className="wrap split">
          <div className="plot reveal">
            <Marks />
            <div className="frame tall">
              <img src={IMG.edificioBranco} alt="Arquitectura residencial moderna" loading="lazy" />
            </div>
          </div>
          <div className="reveal">
            <div className="eyebrow">Conforto e qualidade</div>
            <h2 className="h-display h-section">
              Construímos apartamentos modernos, funcionais e de alta qualidade
            </h2>
            <p className="lead" style={{ margin: "22px 0 18px" }}>
              A SM Residence, S.A. é uma empresa especializada na construção de
              edifícios residenciais na região da Grande Lisboa.
            </p>
            <p className="muted" style={{ marginBottom: 30 }}>
              Com uma vasta experiência e equipas com conhecimento do mercado
              imobiliário, satisfazemos as necessidades e desejos dos nossos
              clientes com a melhor relação qualidade-preço.
            </p>
            <button className="btn" onClick={() => go("sobre")}>
              Sobre nós <Arrow />
            </button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section tinted" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="wrap" style={{ padding: "clamp(50px,6vw,80px) 0" }}>
          <div className="stats reveal">
            {STATS.map(([n, l]) => (
              <div className="stat" key={l}>
                <b>{n}</b>
                <span>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIÇOS — overview */}
      <section className="section">
        <div className="wrap">
          <div className="reveal" style={{ marginBottom: 50 }}>
            <div className="eyebrow">Os nossos serviços</div>
            <h2 className="h-display h-section">
              Acompanhamos o cliente
              <br />
              em todo o processo
            </h2>
          </div>
          <div className="cards reveal">
            {SERVICOS.map((s) => (
              <div className="card" key={s.n}>
                <span className="bar" />
                <span className="num">/ {s.n}</span>
                <h3>{s.titulo}</h3>
                <p>{s.texto.slice(0, 150)}…</p>
              </div>
            ))}
          </div>
          <div className="reveal" style={{ marginTop: 36 }}>
            <button className="btn" onClick={() => go("servicos")}>
              Todos os serviços <Arrow />
            </button>
          </div>
        </div>
      </section>

      {/* PROJECTOS — teaser */}
      <section className="section tinted">
        <div className="wrap">
          <div className="reveal" style={{ marginBottom: 50 }}>
            <div className="eyebrow">O nosso trabalho</div>
            <h2 className="h-display h-section">Projectos em destaque</h2>
          </div>
          <div className="split" style={{ alignItems: "stretch" }}>
            {PROJECTOS.map((p) => (
              <button
                key={p.id}
                className="proj-card reveal"
                onClick={() => go("projectos")}
              >
                <img src={p.galeria[0]} alt={p.nome} loading="lazy" />
                <span className="proj-overlay">
                  <span className="tag">{p.estado}</span>
                  <h3>{p.nome}</h3>
                  <span className="ver">
                    Ver projecto <Arrow />
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <CtaBand go={go} />
    </>
  );
}

function PageSobre({ go }) {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <div className="eyebrow">A empresa</div>
          <h1 className="h-display h-page">Sobre Nós</h1>
          <p className="lead">
            Equipas altamente qualificadas para cada especialidade, em todo o
            processo de construção de um edifício residencial.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div className="reveal">
            <h2 className="h-display h-section" style={{ marginBottom: 24 }}>
              Do terreno
              <br />à entrega de chaves
            </h2>
            <p className="muted" style={{ marginBottom: 16 }}>
              Acompanhamos cada projecto desde o momento da aquisição do terreno
              e do desenvolvimento de todos os projectos de arquitectura e
              engenharia até ao momento da construção — incluindo profissionais
              especialistas em cada área.
            </p>
            <p className="muted" style={{ marginBottom: 16 }}>
              Dispomos ainda de comerciais e advogados para o acompanhar em todo
              o processo de aquisição do seu apartamento, bem como asseguramos o
              acompanhamento para uma garantia eficaz pós-venda.
            </p>
            <p className="muted">
              Todo este trabalho, com atenção ao detalhe e cumprimento
              escrupuloso de toda a legislação portuguesa, culmina em
              apartamentos de alta qualidade — mais de 50 escrituras realizadas e
              clientes satisfeitos ao longo de 10 anos de experiência no sector.
            </p>
          </div>
          <div className="plot reveal">
            <Marks />
            <div className="frame tall">
              <img src={IMG.torreAzul} alt="Construção de edifício residencial" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="section tinted" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="wrap" style={{ padding: "clamp(50px,6vw,80px) 0" }}>
          <div className="stats reveal">
            {STATS.map(([n, l]) => (
              <div className="stat" key={l}>
                <b>{n}</b>
                <span>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div className="reveal">
            <div className="eyebrow">Quadro de especialidades</div>
            <h2 className="h-display h-section" style={{ marginBottom: 30 }}>
              Uma equipa para
              <br />
              cada especialidade
            </h2>
            <div className="chips">
              {ESPECIALIDADES.map((e) => (
                <span className="chip" key={e}>
                  {e}
                </span>
              ))}
            </div>
          </div>
          <div className="plot reveal">
            <Marks />
            <div className="frame">
              <img src={IMG.grua} alt="Grua em obra da SM Residence" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* PARCERIAS — integradas na página Sobre Nós */}
      <section className="section tinted">
        <div className="wrap">
          <div className="reveal" style={{ marginBottom: 50 }}>
            <div className="eyebrow">Parcerias</div>
            <h2 className="h-display h-section">Trabalhamos com os melhores</h2>
            <p className="lead" style={{ marginTop: 20 }}>
              Parceiros financeiros, de mediação e de construção que nos
              permitem acompanhar o cliente em todas as fases — incluindo a
              obtenção de crédito habitação.
            </p>
          </div>
          <div className="parcerias reveal">
            {PARCERIAS.map((p) => (
              <div className="parceria" key={p.nome}>
                <b>{p.nome}</b>
                <span>{p.area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand go={go} />
    </>
  );
}

function PageServicos({ go }) {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <div className="eyebrow">O que fazemos</div>
          <h1 className="h-display h-page">Serviços</h1>
          <p className="lead">
            Não nos cingimos à construção de edifícios — acompanhamos toda a
            concepção do projecto e o cliente em todo o processo, sempre atentos
            às tendências de mercado.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          {SERVICOS.map((s, i) => (
            <div className="svc-row reveal" key={s.n}>
              <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
                <span className="num">/ {s.n}</span>
                <h3>{s.titulo}</h3>
                <p className="muted">{s.texto}</p>
              </div>
              <div className="plot" style={{ order: i % 2 === 0 ? 1 : 0 }}>
                <Marks />
                <div className="frame">
                  <img src={s.img} alt={s.titulo} loading="lazy" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section dark">
        <div className="wrap split">
          <div>
            <div className="eyebrow light">Crédito habitação</div>
            <h2 className="h-display h-section" style={{ maxWidth: "24ch" }}>
              Apoio na obtenção de crédito
            </h2>
            <p style={{ color: "rgba(255,255,255,.7)", maxWidth: "58ch", margin: "20px 0 30px" }}>
              Acompanhamos o cliente em todo o processo de obtenção de crédito,
              com parceiros financeiros e bancários altamente qualificados —
              para habitação própria, secundária ou investimento.
            </p>
            <button className="btn ghost-light" onClick={() => go("contactos")}>
              Fale connosco <Arrow />
            </button>
          </div>
          <div className="plot">
            <Marks light />
            <div className="frame" style={{ borderColor: "rgba(255,255,255,.2)" }}>
              <img src={IMG.estrutura} alt="Arquitectura e estrutura de edifício" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <CtaBand go={go} />
    </>
  );
}

function Galeria({ imagens, nome }) {
  const [activa, setActiva] = useState(0);
  return (
    <div>
      <div className="galeria-main plot">
        <Marks />
        <img src={imagens[activa]} alt={`${nome} — imagem ${activa + 1}`} loading="lazy" />
      </div>
      {imagens.length > 1 && (
        <div className="galeria-thumbs">
          {imagens.map((src, i) => (
            <button
              key={src + i}
              className={`thumb ${i === activa ? "active" : ""}`}
              onClick={() => setActiva(i)}
              aria-label={`Ver imagem ${i + 1} de ${nome}`}
            >
              <img src={src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function PageProjectos({ go }) {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <div className="eyebrow">O nosso trabalho</div>
          <h1 className="h-display h-page">Projectos</h1>
          <p className="lead">
            Empreendimentos que marcam a paisagem urbana da Grande Lisboa —
            concluídos e em construção.
          </p>
        </div>
      </section>

      {PROJECTOS.map((p, i) => (
        <section className={`section ${i % 2 === 1 ? "tinted" : ""}`} key={p.id}>
          <div className="wrap">
            <div className="reveal" style={{ marginBottom: 40 }}>
              <div className="eyebrow">{p.estado}</div>
              <h2 className="h-display h-section">{p.nome}</h2>
              <p className="lead" style={{ marginTop: 18 }}>
                {p.texto}
              </p>
            </div>

            <div className="split reveal" style={{ alignItems: "start" }}>
              <Galeria imagens={p.galeria} nome={p.nome} />
              <div>
                <dl className="ficha">
                  {p.ficha.map(([k, v]) => (
                    <div className="ficha-row" key={k}>
                      <dt>{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
                <div style={{ marginTop: 28, display: "flex", gap: 14, flexWrap: "wrap" }}>
                  {p.website && (
                    <a className="btn" href={p.website} target="_blank" rel="noreferrer">
                      {p.website.replace("https://", "")} <Arrow />
                    </a>
                  )}
                  <button className="btn solid" onClick={() => go("contactos")}>
                    Pedir informações
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <CtaBand go={go} />
    </>
  );
}

function PageContactos() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [estado, setEstado] = useState(null); // null | "ok" | "erro"

  const enviar = () => {
    if (!nome.trim() || !email.trim() || !mensagem.trim()) {
      setEstado("erro");
      return;
    }
    // Versão estática: abre o cliente de e-mail com a mensagem preenchida.
    // Em produção, substituir por chamada a um backend / serviço de e-mail.
    const assunto = encodeURIComponent(`Contacto via website — ${nome}`);
    const corpo = encodeURIComponent(
      `${mensagem}\n\n—\n${nome}\n${email}${telefone ? `\n${telefone}` : ""}`
    );
    window.location.href = `mailto:${CONTACTOS.email}?subject=${assunto}&body=${corpo}`;
    setEstado("ok");
  };

  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <div className="eyebrow">Fale connosco</div>
          <h1 className="h-display h-page">Contactos</h1>
          <p className="lead">
            Tem um projecto em mente ou quer saber mais sobre os nossos
            empreendimentos? Estamos disponíveis para o ajudar.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="contact-grid">
            <div className="reveal">
              <div className="contact-item">
                <div className="lbl">E-mail</div>
                <a href={`mailto:${CONTACTOS.email}`} style={{ fontSize: "1.05rem" }}>
                  {CONTACTOS.email}
                </a>
              </div>
              <div className="contact-item">
                <div className="lbl">Telefone</div>
                {CONTACTOS.telefones.map((t) => (
                  <div key={t}>
                    <a href={`tel:+351${t.replace(/\s/g, "")}`} style={{ fontSize: "1.05rem" }}>
                      {t}
                    </a>
                  </div>
                ))}
              </div>
              <div className="contact-item" style={{ borderBottom: "none" }}>
                <div className="lbl">Morada</div>
                <p>
                  {CONTACTOS.morada.map((l) => (
                    <span key={l}>
                      {l}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
            </div>

            <div className="plot reveal">
              <Marks />
              <div style={{ border: "1px solid var(--hairline)", padding: "clamp(24px,4vw,40px)" }}>
                <h3
                  className="h-display"
                  style={{ fontSize: "1.4rem", fontWeight: 500, marginBottom: 24 }}
                >
                  Envie-nos uma mensagem
                </h3>
                <div className="field">
                  <label htmlFor="f-nome">Nome completo *</label>
                  <input
                    id="f-nome"
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="O seu nome"
                  />
                </div>
                <div className="field">
                  <label htmlFor="f-email">E-mail *</label>
                  <input
                    id="f-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@exemplo.pt"
                  />
                </div>
                <div className="field">
                  <label htmlFor="f-tel">Telefone</label>
                  <input
                    id="f-tel"
                    type="tel"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    placeholder="9XX XXX XXX"
                  />
                </div>
                <div className="field">
                  <label htmlFor="f-msg">Mensagem *</label>
                  <textarea
                    id="f-msg"
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    placeholder="Como podemos ajudar?"
                  />
                </div>
                <button className="btn solid" onClick={enviar}>
                  Enviar mensagem <Arrow />
                </button>
                {estado === "ok" && (
                  <div className="form-ok">
                    Obrigado pelo contacto. A sua mensagem foi preparada — iremos
                    responder com a maior brevidade.
                  </div>
                )}
                {estado === "erro" && (
                  <div className="form-err">
                    Preencha o nome, o e-mail e a mensagem para podermos responder.
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="map-frame reveal">
            <iframe
              src={CONTACTOS.mapsEmbed}
              title="Mapa — SM Residence, Edifício Sky Restelo, Belém, Lisboa"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}

/* ================================ APP ====================================== */

export default function App() {
  const [page, setPage] = useState("inicio");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const go = (id) => {
    setPage(id);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  /* Navegação: fundo sólido após scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Animações de entrada (respeita prefers-reduced-motion) */
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [page]);

  /* Bloquear scroll com o menu mobile aberto */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const overHero = page === "inicio";

  return (
    <>
      <style>{CSS}</style>
      <Nav
        page={page}
        go={go}
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        overHero={overHero}
      />
      <main className="page-enter" key={page}>
        {page === "inicio" && <PageInicio go={go} />}
        {page === "sobre" && <PageSobre go={go} />}
        {page === "servicos" && <PageServicos go={go} />}
        {page === "projectos" && <PageProjectos go={go} />}
        {page === "contactos" && <PageContactos />}
      </main>
      <Footer go={go} />
    </>
  );
}
