/* SM Residence — movido de App.jsx, sem alterações no código */

import Marks from "../components/Marks.jsx";
import CtaBand from "../components/CtaBand.jsx";
import { IMG, STATS, ESPECIALIDADES, PARCERIAS } from "../data/site.js";

export default function PageSobre({ go }) {
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
            <div className="eyebrow blue">Parcerias</div>
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
                {p.logo && (
                  <img
                    src={p.logo}
                    alt={`Logo ${p.nome}`}
                    className="parceria-logo"
                    loading="lazy"
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                )}
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
