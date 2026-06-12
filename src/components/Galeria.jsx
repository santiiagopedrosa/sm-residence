/* SM Residence — movido de App.jsx, sem alterações no código */

import { useState } from "react";
import Marks from "./Marks.jsx";

export default function Galeria({ imagens, nome }) {
  const [activa, setActiva] = useState(0);
  return (
    <div>
      <div className="galeria-main plot">
        <Marks />
        <img src={imagens[activa]} alt={`${nome} — imagem ${activa + 1}`} loading="lazy" />
      </div>
      {imagens.length > 1 && (
        <div className="galeria-thumbs">
          {imagens.map((src, i) => (
            <button
              key={src + i}
              className={`thumb ${i === activa ? "active" : ""}`}
              onClick={() => setActiva(i)}
              aria-label={`Ver imagem ${i + 1} de ${nome}`}
            >
              <img src={src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
