# SM Residence — Website

Redesign do site www.smresidence.pt (React + Vite, sem mais dependências).

## Como correr

    npm install
    npm run dev

## Deploy (Vercel)

    npm run build

Output em /dist. Na Vercel basta importar o repositório — detecta Vite automaticamente.

## Notas

- Logo: substituir o componente <Logo /> em src/App.jsx pelo ficheiro oficial
  do cliente (pedir versão vectorial / PNG transparente).
- Formulário: por agora abre o cliente de e-mail (mailto). Para envio directo,
  ligar a Formspree/Resend ou backend próprio.
- Imagens em public/img (já optimizadas).
