/* SM Residence — movido de App.jsx, sem alterações no código */

import Logo from "./Logo.jsx";
import { NAV, CONTACTOS } from "../data/site.js";

export default function Footer({ go }) {
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
