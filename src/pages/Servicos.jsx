/* SM Residence — movido de App.jsx, sem alterações no código */

import Marks from "../components/Marks.jsx";
import Arrow from "../components/Arrow.jsx";
import CtaBand from "../components/CtaBand.jsx";
import { IMG, SERVICOS } from "../data/site.js";

export default function PageServicos({ go }) {
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

      <section className="section tinted">
        <div className="wrap split">
          <div>
            <div className="eyebrow">Crédito habitação</div>
            <h2 className="h-display h-section" style={{ maxWidth: "24ch" }}>
              Apoio na obtenção de crédito
            </h2>
            <p className="muted" style={{ maxWidth: "58ch", margin: "20px 0 30px" }}>
              Acompanhamos o cliente em todo o processo de obtenção de crédito,
              com parceiros financeiros e bancários altamente qualificados —
              para habitação própria, secundária ou investimento.
            </p>
            <button className="btn" onClick={() => go("contactos")}>
              Fale connosco <Arrow />
            </button>
          </div>
          <div className="plot">
            <Marks blue />
            <div className="frame">
              <img src={IMG.estrutura} alt="Arquitectura e estrutura de edifício" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <CtaBand go={go} />
    </>
  );
}
