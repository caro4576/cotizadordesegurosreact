import { useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Resultado from "./components/Resultado";
import Spinner from "./components/Spinner";

function App() {
  // Estado para la cotización
  const [cotizacion, setCotizacion] = useState({});
  const [cargando, setCargando] = useState(false);

  //función para borrar el resultado
  const limpiarResultado = () => {
    setCotizacion({});
  };

  // La función principal que se llamará al enviar el formulario
  const cotizarSeguro = (datos) => {
    // 1. Mostrar spinner
    setCargando(true);
    setCotizacion({}); // Limpiar resultado anterior

    // 2. Ejecutar la cotización
    setTimeout(() => {
      import("./logica").then(({ calcularTotalSeguro }) => {
        const total = calcularTotalSeguro(datos);

        // 3. Ocultar spinner y guardar resultado
        setCargando(false);
        setCotizacion({
          total,
          datos,
        });
      });
    }, 3000);
  };

  return (
    <div className="contenedor-principal mx-auto">
      <div id="contenido" className="pb-10">
        <Header />

        <Formulario cotizarSeguro={cotizarSeguro} />
{cargando ? (
  <Spinner />
) : (
  <Resultado cotizacion={cotizacion} limpiarResultado={limpiarResultado} />
)}

      </div>
    </div>
  );
}

export default App;
