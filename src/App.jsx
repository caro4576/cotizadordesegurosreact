import { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Resultado from "./components/Resultado";
import Spinner from "./components/Spinner";
import { obtenerNombreMarca, formatearDinero } from "./logica";
import { Save, History, Trash2 } from "lucide-react";

function App() {
  const [cotizacion, setCotizacion] = useState({});
  const [cargando, setCargando] = useState(false);

  const [historial, setHistorial] = useState([]);
  const [mostrarHistorial, setMostrarHistorial] = useState(false);

  // Cargar historial
  useEffect(() => {
    const historialGuardado = JSON.parse(
      localStorage.getItem("historialCotizaciones")
    );
    if (historialGuardado) {
      setHistorial(historialGuardado);
    }
  }, []);

  // Limpiar cotización a los 10s
  useEffect(() => {
    if (cotizacion.total) {
      const timer = setTimeout(() => {
        setCotizacion({});
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [cotizacion]);

  const limpiarResultado = () => {
    setCotizacion({});
  };

  const cotizarSeguro = (datos) => {
    setCargando(true);
    setCotizacion({});

    setTimeout(() => {
      import("./logica").then(({ calcularTotalSeguro }) => {
        const total = calcularTotalSeguro(datos);
        setCargando(false);
        setCotizacion({ total, datos });
      });
    }, 3000);
  };

  const guardarCotizacion = () => {
    if (!cotizacion.total) return;

    const nuevaCotizacion = {
      id: Date.now(),
      marca: obtenerNombreMarca(cotizacion.datos.marca),
      year: cotizacion.datos.year,
      tipo: cotizacion.datos.tipo,
      total: cotizacion.total,
      fecha: new Date().toLocaleDateString(),
    };

    const nuevoHistorial = [...historial, nuevaCotizacion];
    setHistorial(nuevoHistorial);

    localStorage.setItem(
      "historialCotizaciones",
      JSON.stringify(nuevoHistorial)
    );
  };

  const limpiarHistorial = () => {
    setHistorial([]);
    localStorage.removeItem("historialCotizaciones");
  };

  return (
    <div className="contenedor-principal mx-auto">
      <div id="contenido" className="pb-10">
        <Header />

        <Formulario cotizarSeguro={cotizarSeguro} />

        {cargando ? (
          <Spinner />
        ) : (
          <>
            <Resultado
              cotizacion={cotizacion}
              limpiarResultado={limpiarResultado}
            />

            <div className="mt-6 flex items-center gap-4">
              {cotizacion.total && (
                <button
                  onClick={guardarCotizacion}
                  title="Guardar cotización"
                  className="p-2 rounded-full bg-emerald-100 hover:bg-emerald-200 transition">
                  <Save size={20} />
                </button>
              )}

              <button
                onClick={() => setMostrarHistorial(!mostrarHistorial)}
                className="relative p-2 rounded-full hover:bg-slate-100 transition"
                title="Ver historial">
                <History size={22} />
                {historial.length > 0 && (
                  <span className="absolute top-1 right-1 w-2 h-2 bg-emerald-500 rounded-full"></span>
                )}
              </button>
            </div>

            {mostrarHistorial && (
              <div className="mt-6 bg-white p-4 rounded-lg shadow-sm animate-fadeIn">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="font-bold">Historial de cotizaciones</h2>

                  {historial.length > 0 && (
                    <button
                      onClick={limpiarHistorial}
                      title="Limpiar historial"
                      className="p-2 rounded-full hover:bg-red-100 transition">
                      <Trash2 size={18} className="text-red-500" />
                    </button>
                  )}
                </div>

                {historial.length === 0 ? (
                  <p>No hay cotizaciones guardadas</p>
                ) : (
                  historial.map((item) => (
                    <div key={item.id} className="border-b py-2 text-sm">
                      <p>Marca: {item.marca}</p>
                      <p>Año: {item.year}</p>
                      <p>
                        Tipo: <span className="capitalize">{item.tipo}</span>
                      </p>
                      <p>Fecha: {item.fecha}</p>
                      <p className="font-bold text-emerald-600">
                        Total: {formatearDinero(item.total)}
                      </p>
                    </div>
                  ))
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
