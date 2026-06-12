/* SM Residence — movido de App.jsx, sem alterações no código */

import Logo from "./Logo.jsx";
import { NAV } from "../data/site.js";

export default function Nav({ page, go, scrolled, menuOpen, setMenuOpen, overHero }) {
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
