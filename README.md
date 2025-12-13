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


---

## 🛠️ Uso de la aplicación

1. Seleccionar marca del vehículo.  
2. Elegir el año del modelo.  
3. Seleccionar el tipo de cobertura (básico o completo).  
4. Presionar **"Cotizar Seguro"**.  
5. Ver el resultado junto con un resumen explicativo.  

---

## 🚀 Deploy

🔗 **Versión online:**  
[https://cotizadordesegurosreact-ca6vl9jda-carolina-bibbos-projects.vercel.app/](https://cotizadordesegurosreact-ca6vl9jda-carolina-bibbos-projects.vercel.app/)

---

## 🛠️ Instalación y ejecución local

```bash
# Clonar el repositorio
git clone https://github.com/caro4576/cotizadordesegurosreact.git

# Entrar al proyecto
cd cotizadordesegurosreact

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

📄 Licencia

Proyecto de uso personal y educativo.

🙌 Agradecimientos

Trabajo Final realizado para la Universidad Nacional de Tres de Febrero (UNTREF).
Gracias a docentes y compañeros por el acompañamiento durante el cursado.

👩‍💻 Autora

Carolina Bibbo
Desarrolladora Frontend en formación
Proyecto Final – UNTREF
📧 carobibbo76@gmail.com