# Cotizador de Seguros - React

Proyecto final para Untref  en **React**, migrado desde un proyecto original hecho para un curso de  **JavaScript puro con Tailwind CSS**. 
Permite cotizar seguros de autos según la marca, año y tipo de cobertura. 
Incluye interfaz interactiva con **spinner**, mensajes de error/éxito y resultados dinámicos.

 Tecnologías

- React 18
- Tailwind CSS
- JavaScript
- CSS personalizado
- Vite 

 Funcionalidades

- Migración completa de un proyecto **JS + Tailwind** a **React moderno**.
- Selección de **marca**, **año** y **tipo de seguro**.
- Validación de campos obligatorios.
- Cálculo dinámico del costo total según la marca, antigüedad y tipo de seguro.
- **Spinner** de carga mientras se calcula el resultado.
- Visualización del resultado con resumen detallado.
- Mensajes de error y éxito estilizados.
- Resultado desaparece automáticamente después de 10 segundos.
- Diseño responsivo y moderno usando Tailwind CSS y CSS personalizado.

 Estructura del proyecto

src/
│
├─ components/
│ ├─ Formulario.jsx # Formulario de entrada de datos
│ ├─ Resultado.jsx # Muestra el resumen de la cotización
│ ├─ Spinner.jsx # Componente spinner de carga
│ └─ Header.jsx # Encabezado de la app
│
├─ logica/
│ └─ index.js # Funciones: calcular seguro, obtener marca, formatear dinero, obtener años
│
├─ index.css # Estilos globales + Tailwind
├─ main.jsx (o index.jsx) # Entry point React
└─ App.jsx # Componente principal

🛠 Uso

Seleccionar la marca del vehículo.

Seleccionar el año del vehículo.

Elegir el tipo de seguro (básico o completo).

Presionar "Cotizar Seguro".

Ver el resultado y esperar que desaparezca automáticamente luego de 10 segundos.

🎨 Personalización

Colores, tipografía y estilos se encuentran en index.css.

Tailwind está integrado, podés usar clases utilitarias directamente en tus componentes.

Spinner y mensajes de error/éxito también son personalizables desde CSS.

📄 Licencia

Este proyecto es de uso personal y educativo.
