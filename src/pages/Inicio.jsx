/* SM Residence — movido de App.jsx, sem alterações no código */

import Marks from "../components/Marks.jsx";
import Arrow from "../components/Arrow.jsx";
import CtaBand from "../components/CtaBand.jsx";
import { IMG, SERVICOS, PROJECTOS, STATS } from "../data/site.js";

export default function PageInicio({ go }) {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage: `url(${IMG.hero})` }} />
        <div className="hero-grid" />
        <div className="wrap hero-content">
          <div className="eyebrow light reveal">
            Construção residencial — Grande Lisboa
          </div>
          <h1 className="h-display h-hero reveal">
            O prazer de construir
            <br />
            sonhos de famílias
          </h1>
          <p className="hero-sub reveal">
            Somos especialistas em construção de edifícios residenciais na região
            da Grande Lisboa. Oferecemos qualidade e conforto para tornar os seus
            sonhos em realidade.
          </p>
          <div className="hero-actions reveal">
            <button className="btn ghost-light" onClick={() => go("projectos")}>
              Ver projectos <Arrow />
            </button>
            <button className="btn ghost-light" onClick={() => go("contactos")}>
              Contacte-nos
            </button>
          </div>
          <div className="hero-meta reveal">
            <span>10+ anos de experiência</span>
            <span>50+ escrituras realizadas</span>
            <span>Garantia pós-venda de 5 anos</span>
          </div>
        </div>
      </section>

      {/* SOBRE — teaser */}
      <section className="section">
        <div className="wrap split">
          <div className="plot reveal">
            <Marks />
            <div className="frame tall">
              <img src={IMG.edificioBranco} alt="Arquitectura residencial moderna" loading="lazy" />
            </div>
          </div>
          <div className="reveal">
            <div className="eyebrow">Conforto e qualidade</div>
            <h2 className="h-display h-section">
              Construímos apartamentos modernos, funcionais e de alta qualidade
            </h2>
            <p className="lead" style={{ margin: "22px 0 18px" }}>
              A SM Residence, S.A. é uma empresa especializada na construção de
              edifícios residenciais na região da Grande Lisboa.
            </p>
            <p className="muted" style={{ marginBottom: 30 }}>
              Com uma vasta experiência e equipas com conhecimento do mercado
              imobiliário, satisfazemos as necessidades e desejos dos nossos
              clientes com a melhor relação qualidade-preço.
            </p>
            <button className="btn" onClick={() => go("sobre")}>
              Sobre nós <Arrow />
            </button>
          </div>
        </div>
      </section>

      {/* STATS */}
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

      {/* SERVIÇOS — overview */}
      <section className="section">
        <div className="wrap">
          <div className="reveal" style={{ marginBottom: 50 }}>
            <div className="eyebrow">Os nossos serviços</div>
            <h2 className="h-display h-section">
              Acompanhamos o cliente
              <br />
              em todo o processo
            </h2>
          </div>
          <div className="cards reveal">
            {SERVICOS.map((s) => (
              <div className="card" key={s.n}>
                <span className="bar" />
                <span className="num">/ {s.n}</span>
                <h3>{s.titulo}</h3>
                <p>{s.texto.slice(0, 150)}…</p>
              </div>
            ))}
          </div>
          <div className="reveal" style={{ marginTop: 36 }}>
            <button className="btn" onClick={() => go("servicos")}>
              Todos os serviços <Arrow />
            </button>
          </div>
        </div>
      </section>

      {/* PROJECTOS — teaser */}
      <section className="section tinted">
        <div className="wrap">
          <div className="reveal" style={{ marginBottom: 50 }}>
            <div className="eyebrow">O nosso trabalho</div>
            <h2 className="h-display h-section">Projectos em destaque</h2>
          </div>
          <div className="split" style={{ alignItems: "stretch" }}>
            {PROJECTOS.map((p) => (
              <button
                key={p.id}
                className="proj-card reveal"
                onClick={() => go("projectos")}
              >
                <img src={p.galeria[0]} alt={p.nome} loading="lazy" />
                <span className="proj-overlay">
                  <span className="tag">{p.estado}</span>
                  <h3>{p.nome}</h3>
                  <span className="ver">
                    Ver projecto <Arrow />
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <CtaBand go={go} />
    </>
  );
}
