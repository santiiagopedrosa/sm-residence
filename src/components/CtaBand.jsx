/* SM Residence — movido de App.jsx, sem alterações no código */

import Arrow from "./Arrow.jsx";

export default function CtaBand({ go }) {
  return (
    <section className="cta-band">
      <div className="wrap cta-inner">
        <div>
          <div className="eyebrow light">Contactos</div>
          <h2 className="h-display h-section">
            Fale connosco
          </h2>
        </div>
        <button className="btn ghost-light" onClick={() => go("contactos")}>
          Contacte-nos <Arrow />
        </button>
      </div>
    </section>
  );
}
