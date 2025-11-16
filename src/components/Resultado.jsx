import { useMemo } from "react";
import { obtenerNombreMarca, formatearDinero } from "../logica";

const Resultado = ({ cotizacion }) => {
  const { total, datos } = cotizacion;

  // Si no hay datos, no mostrar nada
  if (Object.keys(datos || {}).length === 0) return null;

  // Extraer datos para el resumen
  const { marca, year, tipo } = datos;

  // UseMemo para evitar recálculos innecesarios del nombre de la marca
  const nombreMarca = useMemo(() => obtenerNombreMarca(marca), [marca]);

  return (
    <div id="resultado">
      <div className="mt-10">
        <p className="header">Resumen de tu seguro</p>

        <p className="font-bold">
          Marca: <span className="font-normal"> {nombreMarca} </span>
        </p>
        <p className="font-bold">
          Año: <span className="font-normal"> {year} </span>
        </p>
        <p className="font-bold">
          Tipo: <span className="font-normal capitalize"> {tipo} </span>
        </p>

        <p className="font-bold">
          Total:{" "}
          <span className="font-normal text-2xl text-teal-500">
            {" "}
            {formatearDinero(total)}{" "}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Resultado;
