/* SM Residence — movido de App.jsx, sem alterações no código */

export default function Marks({ light = false }) {
  const l = light ? " light" : "";
  return (
    <>
      <span className={`mark tl${l}`} aria-hidden="true" />
      <span className={`mark tr${l}`} aria-hidden="true" />
      <span className={`mark bl${l}`} aria-hidden="true" />
      <span className={`mark br${l}`} aria-hidden="true" />
    </>
  );
}
