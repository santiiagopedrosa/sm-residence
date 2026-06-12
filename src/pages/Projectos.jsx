/* SM Residence — movido de App.jsx, sem alterações no código */

import Arrow from "../components/Arrow.jsx";
import CtaBand from "../components/CtaBand.jsx";
import Galeria from "../components/Galeria.jsx";
import { PROJECTOS } from "../data/site.js";

export default function PageProjectos({ go }) {
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
