/* ============================================================================
   SM RESIDENCE — Website (Redesign 2026)
   ----------------------------------------------------------------------------
   • React + JavaScript, organizado em pastas (components / pages / data / styles).
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

import { useState, useEffect } from "react";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import PageInicio from "./pages/Inicio.jsx";
import PageSobre from "./pages/Sobre.jsx";
import PageServicos from "./pages/Servicos.jsx";
import PageProjectos from "./pages/Projectos.jsx";
import PageContactos from "./pages/Contactos.jsx";
import PagePrivacidade from "./pages/PoliticaPrivacidade.jsx";

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
        {page === "contactos" && <PageContactos go={go} />}
        {page === "privacidade" && <PagePrivacidade go={go} />}
      </main>
      <Footer go={go} />
    </>
  );
}
