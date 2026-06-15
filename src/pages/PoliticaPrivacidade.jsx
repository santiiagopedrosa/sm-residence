import Arrow from "../components/Arrow.jsx";
import { CONTACTOS } from "../data/site.js";

export default function PagePrivacidade({ go }) {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <div className="eyebrow">Legal</div>
          <h1 className="h-display h-page">Política de Privacidade</h1>
          <p className="lead">
            Informação sobre o tratamento dos seus dados pessoais pela SM
            Residence, S.A., em conformidade com o RGPD.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap" style={{ maxWidth: 800 }}>
          <div className="reveal" style={{ lineHeight: 1.8 }}>

            <h2 className="h-display" style={{ fontSize: "1.4rem", marginBottom: 12 }}>
              1. Responsável pelo tratamento
            </h2>
            <p className="muted" style={{ marginBottom: 32 }}>
              <strong>SM Residence, S.A.</strong>
              <br />
              Edifício Sky Restelo, Rua Dom Jorge da Costa, Nº5, 4ºA
              <br />
              1400-423 Belém — Lisboa, Portugal
              <br />
              E-mail:{" "}
              <a href={`mailto:${CONTACTOS.email}`} style={{ color: "var(--bronze)" }}>
                {CONTACTOS.email}
              </a>
              <br />
              Telefone: {CONTACTOS.telefones[0]}
            </p>

            <h2 className="h-display" style={{ fontSize: "1.4rem", marginBottom: 12 }}>
              2. Dados recolhidos e finalidades
            </h2>
            <p className="muted" style={{ marginBottom: 16 }}>
              A SM Residence, S.A. recolhe os seguintes dados pessoais através
              do formulário de contacto do website:
            </p>
            <ul className="muted" style={{ paddingLeft: 24, marginBottom: 16 }}>
              <li>Nome completo</li>
              <li>Endereço de e-mail</li>
              <li>Número de telefone (facultativo)</li>
              <li>Conteúdo da mensagem enviada</li>
            </ul>
            <p className="muted" style={{ marginBottom: 32 }}>
              Estes dados são tratados exclusivamente para responder às
              solicitações dos titulares e estabelecer contacto comercial
              relacionado com os nossos empreendimentos e serviços.
            </p>

            <h2 className="h-display" style={{ fontSize: "1.4rem", marginBottom: 12 }}>
              3. Base legal do tratamento
            </h2>
            <p className="muted" style={{ marginBottom: 32 }}>
              O tratamento dos dados é efectuado com base no consentimento
              expresso do titular (artigo 6.º, n.º 1, al. a) do RGPD),
              manifestado através da aceitação da presente política de
              privacidade antes do envio do formulário.
            </p>

            <h2 className="h-display" style={{ fontSize: "1.4rem", marginBottom: 12 }}>
              4. Conservação dos dados
            </h2>
            <p className="muted" style={{ marginBottom: 32 }}>
              Os dados pessoais são conservados pelo período estritamente
              necessário para responder ao pedido e, no máximo, por 3 anos a
              contar da data do último contacto, salvo obrigação legal que
              imponha prazo diferente.
            </p>

            <h2 className="h-display" style={{ fontSize: "1.4rem", marginBottom: 12 }}>
              5. Partilha de dados com terceiros
            </h2>
            <p className="muted" style={{ marginBottom: 32 }}>
              A SM Residence, S.A. não partilha os seus dados pessoais com
              terceiros para fins comerciais próprios. Os dados poderão ser
              partilhados com prestadores de serviços que actuem como
              subcontratantes (ex.: serviço de e-mail) e que garantam o
              cumprimento do RGPD.
            </p>

            <h2 className="h-display" style={{ fontSize: "1.4rem", marginBottom: 12 }}>
              6. Direitos do titular
            </h2>
            <p className="muted" style={{ marginBottom: 16 }}>
              Nos termos do RGPD, o titular tem direito a:
            </p>
            <ul className="muted" style={{ paddingLeft: 24, marginBottom: 16 }}>
              <li>Aceder aos seus dados pessoais;</li>
              <li>Rectificar dados inexactos ou incompletos;</li>
              <li>Solicitar o apagamento dos dados («direito a ser esquecido»);</li>
              <li>Opor-se ao tratamento ou solicitar a sua limitação;</li>
              <li>Retirar o consentimento em qualquer momento, sem prejuízo da
                licitude do tratamento efectuado com base no consentimento
                previamente dado;</li>
              <li>Apresentar reclamação à autoridade de controlo nacional — a{" "}
                <strong>CNPD</strong> (Comissão Nacional de Protecção de Dados),
                em www.cnpd.pt.</li>
            </ul>
            <p className="muted" style={{ marginBottom: 32 }}>
              Para exercer qualquer um destes direitos, contacte-nos através do
              endereço{" "}
              <a href={`mailto:${CONTACTOS.email}`} style={{ color: "var(--bronze)" }}>
                {CONTACTOS.email}
              </a>.
            </p>

            <h2 className="h-display" style={{ fontSize: "1.4rem", marginBottom: 12 }}>
              7. Segurança
            </h2>
            <p className="muted" style={{ marginBottom: 32 }}>
              Adoptamos medidas técnicas e organizativas adequadas para proteger
              os dados pessoais contra o acesso não autorizado, perda ou
              destruição acidental.
            </p>

            <h2 className="h-display" style={{ fontSize: "1.4rem", marginBottom: 12 }}>
              8. Cookies
            </h2>
            <p className="muted" style={{ marginBottom: 32 }}>
              Este website poderá utilizar cookies de carácter técnico,
              necessários ao seu funcionamento. Não são utilizados cookies
              de rastreamento ou publicidade sem o consentimento expresso do
              utilizador.
            </p>

            <h2 className="h-display" style={{ fontSize: "1.4rem", marginBottom: 12 }}>
              9. Alterações à política de privacidade
            </h2>
            <p className="muted" style={{ marginBottom: 48 }}>
              A SM Residence, S.A. reserva o direito de actualizar a presente
              política. Quaisquer alterações relevantes serão comunicadas
              através do website. A data da última actualização é indicada no
              rodapé desta página.
            </p>

            <p className="muted" style={{ fontSize: ".82rem", borderTop: "1px solid var(--hairline)", paddingTop: 24 }}>
              Última actualização: Junho de 2026
            </p>

            <div style={{ marginTop: 40 }}>
              <button className="btn" onClick={() => go("contactos")}>
                Voltar aos contactos <Arrow />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
