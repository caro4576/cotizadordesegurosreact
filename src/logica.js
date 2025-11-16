/**
 * Mapea el código de marca (1, 2, 3) a su nombre legible.
 * @param {string} marca - El código de la marca (e.g., '1', '2').
 * @returns {string} El nombre completo de la marca.
 */
export function obtenerNombreMarca(marca) {
  switch (marca) {
    case "1":
      return "Americano";
    case "2":
      return "Asiatico";
    case "3":
      return "Europeo";
    default:
      return "";
  }
}

/**
 * Realiza el cálculo del seguro basado en marca, año y tipo de cobertura.
 * La lógica es fiel a la versión original de JavaScript.
 * @param {object} datos - Objeto con los datos de la cotización.
 * @param {string} datos.marca - Código de la marca.
 * @param {string} datos.year - Año del vehículo.
 * @param {string} datos.tipo - Tipo de seguro ('basico' o 'completo').
 * @returns {number} El costo total de la cotización.
 */
export function calcularTotalSeguro(datos) {
  const { marca, year, tipo } = datos;
  let cantidad;
  const base = 2000;

  // 1. Ajuste por marca
  switch (marca) {
    case "1":
      cantidad = base * 1.15;
      break;
    case "2":
      cantidad = base * 1.05;
      break;
    case "3":
      cantidad = base * 1.35;
      break;
    default:
      break;
  }

  // 2. Ajuste por año (depreciación del 3% por cada año de antigüedad)
  const diferencia = new Date().getFullYear() - Number(year);
  cantidad -= (diferencia * 3 * cantidad) / 100;

  // 3. Ajuste por tipo de seguro
  // Básico: +30% | Completo: +50%
  if (tipo === "basico") {
    cantidad *= 1.3;
  } else {
    cantidad *= 1.5;
  }

  return Number(cantidad.toFixed(2));
}

/**
 * Genera un array de años para el campo <select>, desde el año actual hasta 20 años atrás.
 * @returns {number[]} Un array con los años disponibles.
 */
export function obtenerYears() {
  const max = new Date().getFullYear();
  const min = max - 20;

  const years = [];
  for (let i = max; i >= min; i--) {
    years.push(i);
  }
  return years;
}

/**
 * Formatea un número a formato de moneda local (ej. $ 2.500,00).
 * @param {number} cantidad - La cantidad numérica a formatear.
 * @returns {string} La cantidad formateada como moneda.
 */
export function formatearDinero(cantidad) {
  return cantidad.toLocaleString("es-AR", {
    // Ajustar según la región
    style: "currency",
    currency: "ARS", // Ajustar según la moneda local
  });
}
/**el codigo fue migrado de js del proyecto original creado por mi para el curso de Js, me ayude para documentrlo con las referencias mias del curso y con la Ia  */ 