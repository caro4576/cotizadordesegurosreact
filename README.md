<<<<<<< HEAD
# 🚗 Cotizador de Seguros – React

Proyecto final desarrollado para **UNTREF**, migrado desde una versión original en **JavaScript puro + Tailwind CSS** hacia una arquitectura moderna en **React 18 + Vite**.

La aplicación permite cotizar seguros de autos según **marca**, **año** y **tipo de cobertura**, incorporando persistencia de datos, animaciones sutiles y una experiencia de usuario cuidada.

---

## ✨ Funcionalidades principales

* Migración completa desde JavaScript puro a una arquitectura modular en React.
* Selección de:

  * Marca del vehículo
  * Año del modelo
  * Tipo de cobertura (básico / completo)
* Validación de campos obligatorios.
* Cálculo dinámico del precio final según:

  * Marca del vehículo
  * Antigüedad
  * Tipo de cobertura
* Spinner animado durante el proceso de cálculo.
* Resumen detallado de la cotización.
* **Desaparición automática del resultado luego de 10 segundos**.

---

## 🕘 Historial de cotizaciones

* Guardado manual de cotizaciones.
* Historial persistente mediante **localStorage**.
* Visualización del historial mediante botón con ícono.
* Indicador visual (badge) cuando existen cotizaciones guardadas.
* Posibilidad de limpiar completamente el historial.
* Animación suave al mostrar / ocultar el historial.

---

## 🎨 Experiencia de usuario (UX)

* Diseño minimalista y responsive.
* Optimizado para dispositivos móviles (incluyendo pantallas pequeñas como iPhone SE).
* Uso de microinteracciones:

  * Animación al guardar cotización.
  * Transiciones suaves en botones y paneles.
* Iconografía moderna con **Lucide React**.

---

## 🧩 Tecnologías utilizadas

* **React 18**
* **Vite**
* **Tailwind CSS**
* **JavaScript (ES6+)**
* **HTML semántico**
* **CSS personalizado**

---

## 📁 Estructura del proyecto

```
=======
🚗 Cotizador de Seguros – React

Proyecto final para UNTREF, migrado desde una versión hecha en JavaScript puro + Tailwind CSS hacia una arquitectura moderna en React + Vite.
Permite cotizar seguros de autos según marca, año y tipo de cobertura, con un diseño responsive, animaciones y cálculos dinámicos.

🔧 Tecnologías utilizadas

React 18
Vite
Tailwind CSS
JavaScript
CSS personalizado
HTML semántico


✨ Funcionalidades principales

Migración completa desde un proyecto original en JavaScript + Tailwind hacia una arquitectura modular en React.
Selección de marca, año y tipo de seguro.
Validación de campos obligatorios.
Cálculo dinámico del precio final según:
 Marca del vehículo
 Antigüedad
 Tipo de cobertura
Spinner animado durante el proceso de cálculo.
Mensajes de error y éxito.

Resumen detallado del resultado con transición de entrada (fade-in).
El resultado desaparece automáticamente luego de 10 segundos.
Diseño totalmente responsive, optimizado para móviles (incluyendo tamaños reducidos como iPhone SE).

📁 Estructura del proyecto
>>>>>>> 00ed7ff6d6248a25f681ab320d7c12a9362e5f18
src/
│
├─ components/
│   ├─ Formulario.jsx       # Formulario principal
<<<<<<< HEAD
│   ├─ Resultado.jsx        # Resumen de la cotización
│   ├─ Spinner.jsx          # Indicador de carga animado
│   └─ Header.jsx           # Encabezado
│
├─ logica/
│   └─ index.js             # Cálculos, helpers y utilidades
│
├─ index.css                # Estilos globales + Tailwind
├─ main.jsx                 # Punto de entrada
└─ App.jsx                  # Componente raíz
```

---

## 🚀 Deploy

🔗 **Versión online:**
[https://cotizadordesegurosreact-ca6vl9jda-carolina-bibbos-projects.vercel.app/](https://cotizadordesegurosreact-ca6vl9jda-carolina-bibbos-projects.vercel.app/)

---

## 🛠️ Instalación y ejecución local

```bash
=======
│   ├─ Resultado.jsx        # Muestra el resumen de la cotización
│   ├─ Spinner.jsx          # Indicador de carga animado
│   └─ Header.jsx           # Encabezado de la aplicación
│
├─ logica/
│   └─ index.js             # Funciones: cálculo, formateo y utilidades
│
├─ index.css                # Estilos globales + Tailwind
├─ main.jsx                 # Punto de entrada de la app
└─ App.jsx                  # Componente raíz

🛠️ Uso de la aplicación

Seleccionar marca del vehículo.
Elegir el año del modelo.
Seleccionar el tipo de cobertura (básico o completo).
Presionar "Cotizar Seguro".
Ver el resultado junto con un resumen explicativo.


🎨 Personalización

Colores principales y tipografías en:
👉 index.css
Tailwind completamente integrado.
Animaciones (@keyframes) personalizadas:(documentadas en el archivo)
sk-stretchdelay
girar
fadeIn

Todo puede modificarse fácilmente.
🚀 Deploy
🔗 Versión online del proyecto:
https://cotizadordesegurosreact-ca6vl9jda-carolina-bibbos-projects.vercel.app/

Instalación y ejecución local
>>>>>>> 00ed7ff6d6248a25f681ab320d7c12a9362e5f18
# Clonar el repositorio
git clone https://github.com/caro4576/cotizadordesegurosreact.git

# Entrar al proyecto
cd cotizadordesegurosreact

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
<<<<<<< HEAD
```

---

## 📄 Licencia

Proyecto de uso personal y educativo.

---

## 🙌 Agradecimientos

Trabajo Final realizado para la **Universidad Nacional de Tres de Febrero (UNTREF)**.
Agradecimiento especial a docentes y compañeros por el acompañamiento durante el cursado.

---

## 👩‍💻 Autora

**Carolina Bibbo**
Desarrolladora Frontend en formación
Proyecto Final – UNTREF
📧 [carobibbo76@gmail.com](mailto:carobibbo76@gmail.com)
=======

📄 Licencia

Proyecto de uso personal y educativo.

🙌 Agradecimientos

Este proyecto fue realizado como Trabajo Final para la Universidad Nacional de Tres de Febrero (UNTREF).
Gracias a mis docentes y compañeros por el acompañamiento durante el cursado.

👩‍💻 Autora

Carolina
Desarrolladora Frontend en formacion
Proyecto Final – UNTREF
📧carobibbo76@gmail.com



