/* SM Residence — movido de App.jsx, sem alterações no código */

import { useState } from "react";
import Marks from "../components/Marks.jsx";
import Arrow from "../components/Arrow.jsx";
import { CONTACTOS } from "../data/site.js";

export default function PageContactos({ go }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [rgpd, setRgpd] = useState(false);
  const [estado, setEstado] = useState(null); // null | "ok" | "erro"

  const enviar = () => {
    if (!nome.trim() || !email.trim() || !mensagem.trim() || !rgpd) {
      setEstado("erro");
      return;
    }
    // Versão estática: abre o cliente de e-mail com a mensagem preenchida.
    // Em produção, substituir por chamada a um backend / serviço de e-mail.
    const assunto = encodeURIComponent(`Contacto via website — ${nome}`);
    const corpo = encodeURIComponent(
      `${mensagem}\n\n—\n${nome}\n${email}${telefone ? `\n${telefone}` : ""}`
    );
    window.location.href = `mailto:${CONTACTOS.email}?subject=${assunto}&body=${corpo}`;
    setEstado("ok");
  };

  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <div className="eyebrow">Fale connosco</div>
          <h1 className="h-display h-page">Contactos</h1>
          <p className="lead">
            Tem um projecto em mente ou quer saber mais sobre os nossos
            empreendimentos? Estamos disponíveis para o ajudar.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="contact-grid">
            <div className="reveal">
              <div className="contact-item">
                <div className="lbl">E-mail</div>
                <a href={`mailto:${CONTACTOS.email}`} style={{ fontSize: "1.05rem" }}>
                  {CONTACTOS.email}
                </a>
              </div>
              <div className="contact-item">
                <div className="lbl">Telefone</div>
                {CONTACTOS.telefones.map((t) => (
                  <div key={t}>
                    <a href={`tel:${t.replace(/\s/g, "")}`} style={{ fontSize: "1.05rem" }}>
                      {t}
                    </a>
                  </div>
                ))}
              </div>
              <div className="contact-item" style={{ borderBottom: "none" }}>
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
            </div>

            <div className="plot reveal">
              <Marks />
              <div style={{ border: "1px solid var(--hairline)", padding: "clamp(24px,4vw,40px)" }}>
                <h3
                  className="h-display"
                  style={{ fontSize: "1.4rem", fontWeight: 500, marginBottom: 24 }}
                >
                  Envie-nos uma mensagem
                </h3>
                <div className="field">
                  <label htmlFor="f-nome">Nome completo *</label>
                  <input
                    id="f-nome"
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="O seu nome"
                  />
                </div>
                <div className="field">
                  <label htmlFor="f-email">E-mail *</label>
                  <input
                    id="f-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@exemplo.pt"
                  />
                </div>
                <div className="field">
                  <label htmlFor="f-tel">Telefone</label>
                  <input
                    id="f-tel"
                    type="tel"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    placeholder="9XX XXX XXX"
                  />
                </div>
                <div className="field">
                  <label htmlFor="f-msg">Mensagem *</label>
                  <textarea
                    id="f-msg"
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    placeholder="Como podemos ajudar?"
                  />
                </div>
                <div className="rgpd">
                  <input
                    id="f-rgpd"
                    type="checkbox"
                    checked={rgpd}
                    onChange={(e) => setRgpd(e.target.checked)}
                  />
                  <label htmlFor="f-rgpd">
                    Li e aceito a{" "}
                    <button
                      type="button"
                      style={{ background: "none", border: "none", padding: 0, cursor: "pointer",
                        color: "var(--bronze)", textDecoration: "underline", font: "inherit" }}
                      onClick={() => go && go("privacidade")}
                    >
                      política de privacidade
                    </button>
                    {" "}*
                  </label>
                </div>
                <button className="btn solid" onClick={enviar}>
                  Contacte-nos <Arrow />
                </button>
                {estado === "ok" && (
                  <div className="form-ok">
                    Obrigado pelo contacto. A sua mensagem foi preparada — iremos
                    responder com a maior brevidade.
                  </div>
                )}
                {estado === "erro" && (
                  <div className="form-err">
                    Preencha o nome, o e-mail, a mensagem e aceite a política de
                    privacidade para podermos responder.
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="map-frame reveal">
            <iframe
              src={CONTACTOS.mapsEmbed}
              title="Mapa — SM Residence, Edifício Sky Restelo, Belém, Lisboa"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
