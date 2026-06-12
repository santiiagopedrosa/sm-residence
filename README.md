# SM Residence — Website

Redesign do site www.smresidence.pt (React + Vite, sem mais dependências).

## Como correr

    npm install
    npm run dev

## Deploy (Vercel)

    npm run build

Output em /dist. Na Vercel basta importar o repositório — detecta Vite automaticamente.

## Estrutura

    src/
    ├── App.jsx            ← estado e navegação entre páginas
    ├── main.jsx           ← entrada (importa os estilos globais)
    ├── components/        ← Nav, Footer, Galeria, Logo, Marks, Arrow, CtaBand
    ├── pages/             ← Inicio, Sobre, Servicos, Projectos, Contactos
    ├── data/site.js       ← textos, contactos, serviços, projectos, parcerias
    └── styles/global.css  ← todos os estilos
    public/img/            ← imagens do site (optimizadas)

## Notas

- Logo: substituir o componente em src/components/Logo.jsx pelo ficheiro
  oficial do cliente (pedir versão vectorial / PNG transparente).
- Formulário: por agora abre o cliente de e-mail (mailto). Para envio directo,
  ligar a Formspree/Resend ou backend próprio.
- Textos e conteúdos: editar src/data/site.js (não é preciso tocar nas páginas).
