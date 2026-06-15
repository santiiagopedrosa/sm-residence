/* SM Residence — dados do site (movido de App.jsx, sem alterações) */

export const CONTACTOS = {
  email: "geral@smresidence.pt",
  telefones: ["+351 218 763 939", "+351 916 967 236"],
  morada: ["Edifício Sky Restelo", "Rua Dom Jorge da Costa, Nº5, 4ºA", "1400-423 Belém — Lisboa"],
  mapsEmbed:
    "https://www.google.com/maps?q=Rua+Dom+Jorge+da+Costa+5,+1400-423+Lisboa&output=embed",
};

/* Imagens do cliente — colocar a pasta /img dentro de /public do projecto */
export const IMG = {
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

export const SERVICOS = [
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

export const PROJECTOS = [
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

export const PARCERIAS = [
  { nome: "Crédito Agrícola", area: "Parceiro financeiro e bancário", logo: "/img/parceiros/credito-agricola.png" },
  { nome: "Las Kasas", area: "Mediação imobiliária", logo: "/img/parceiros/las-kasas.png" },
  { nome: "Remax VS Brothers", area: "Mediação imobiliária", logo: "/img/parceiros/remax-vs-brothers.png" },
  { nome: "Confrasilvas", area: "Parceiro de construção", logo: "/img/parceiros/confrasilvas.png" },
];

export const ESPECIALIDADES = [
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

export const STATS = [
  ["10+", "Anos de experiência no sector"],
  ["50+", "Escrituras realizadas"],
  ["5", "Anos de garantia pós-venda"],
  // "100% Moinhos 12 vendido" removido a pedido do cliente
];

export const NAV = [
  ["inicio", "Início"],
  ["sobre", "Sobre Nós"],
  ["servicos", "Serviços"],
  ["projectos", "Projectos"],
  ["contactos", "Contactos"],
];
