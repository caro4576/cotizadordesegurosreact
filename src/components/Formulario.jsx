import { useState, useEffect } from "react";
import { obtenerYears } from "../logica";

// Datos de las marcas 
const MARCAS = [
  { id: "1", nombre: "Americano" },
  { id: "2", nombre: "Asiatico" },
  { id: "3", nombre: "Europeo" },
];
// Datos de los tipos de seguro 
const TIPOS = ["basico", "completo"];

// Componente para mostrar mensajes de error/éxito
const Mensaje = ({ mensaje, tipo }) => {
  if (!mensaje) return null;

  // Se usan las clases CSS del código original (error/correcto)
  const clase = tipo === "error" ? "error" : "correcto";

  return <div className={`mensaje mt-10 ${clase}`}>{mensaje}</div>;
};

const Formulario = ({ cotizarSeguro }) => {
  const years = obtenerYears();
  const [datos, setDatos] = useState({
    marca: "",
    year: "",
    tipo: "basico", // El 'checked' original
  });
  const [error, setError] = useState(null);
  const [mensajeExito, setMensajeExito] = useState(null);

  // useEffect para manejar la visibilidad del mensaje de éxito (3 segundos original)
  useEffect(() => {
    if (mensajeExito) {
      const timer = setTimeout(() => {
        setMensajeExito(null);
      }, 3000);
      return () => clearTimeout(timer); // funcion de limpieza
    }
  }, [mensajeExito]);

  const handleChange = (e) => {
    
    if (e.target.name === "tipo") {
      setDatos({
        ...datos,
        [e.target.name]: e.target.value,
      });
    } else {
      // Para select, el valor debe ser almacenado
      setDatos({
        ...datos,
        [e.target.id]: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación (lógica de cotizarSeguro original)
    if ([datos.marca, datos.year].includes("") || datos.tipo === "") {
      setError("Todos los campos son obligatorios");
      setMensajeExito(null); // Ocultar mensaje de éxito si hay error
      return;
    }

    // Si pasa la validación
    setError(null);
    setMensajeExito("cotizando...."); // Mensaje de éxito/cotizando
    cotizarSeguro(datos);
  };

  return (
    <form className="mt-10 max-w-lg mx-auto" onSubmit={handleSubmit}>
      <Mensaje mensaje={error} tipo="error" />
      <Mensaje mensaje={mensajeExito} tipo="correcto" />

      <div className="flex items-center mb-5">
        <label className="font-bold uppercase mr-2 w-20" htmlFor="marca">
          Marca:
        </label>
        <select
          className="flex-1 bg-gray-100 p-3 appearance-none"
          id="marca"
          value={datos.marca}
          onChange={handleChange}>
          <option value="">- Seleccionar -</option>
          {MARCAS.map((marca) => (
            <option key={marca.id} value={marca.id}>
              {marca.nombre}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center mb-5">
        <label className="font-bold uppercase mr-2 w-20" htmlFor="year">
          Año:
        </label>
        <select
          className="flex-1 bg-gray-100 p-3 appearance-none"
          id="year"
          value={datos.year}
          onChange={handleChange}>
          <option value="">- Seleccionar -</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <fieldset>
        <legend className="font-bold uppercase text-2xl text-center w-full">
          Tipo Seguro
        </legend>
        <div className="flex justify-around mt-5">
          {TIPOS.map((tipo) => (
            <div key={tipo}>
              <label
                className="font-bold uppercase mr-2"
                htmlFor={`tipo-${tipo}`}>
                {tipo}
              </label>
              <input
                type="radio"
                name="tipo"
                id={`tipo-${tipo}`}
                value={tipo}
                checked={datos.tipo === tipo}
                onChange={handleChange}
              />
            </div>
          ))}
        </div>
      </fieldset>

      <div className="flex justify-center py-4">
        <button
          type="submit"
          className="mx-auto bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-20 rounded">
          Cotizar Seguro
        </button>
      </div>
    </form>
  );
};



export default Formulario;
// el codigo esta migrado de un trabajo que hice en el curso de Js con html, css, tailwind y js nativo