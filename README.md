# QC Kinetix Clone - React

Este proyecto es una réplica completa de la página web de QC Kinetix, convertida de HTML/WordPress a React con Vite.

## 🚀 Características

- ✅ Header completo con navegación sticky y menús desplegables
- ✅ Hero section con video de fondo
- ✅ Sección de estadísticas (10 Billion, 35,000+, 170+)
- ✅ Sección "What is Regenerative Medicine"
- ✅ Mapa interactivo del cuerpo humano
- ✅ Sección "QC Kinetix Difference"
- ✅ Sección "Benefits of Regenerative Medicine"
- ✅ Carrusel de testimonios (Success Stories)
- ✅ Formulario de contacto completo
- ✅ Footer completo con búsqueda de ubicaciones
- ✅ Floating Banner con persistencia en localStorage
- ✅ Diseño responsive para móvil, tablet y desktop
- ✅ Animaciones y efectos hover idénticos al original

## 📦 Instalación

```bash
npm install
```

## 🛠️ Desarrollo

```bash
npm run dev
```

El proyecto se ejecutará en `http://localhost:5173`

## 🏗️ Estructura del Proyecto

```
src/
├── components/
│   ├── Header/          # Header con navegación
│   ├── Hero/            # Hero section con video
│   ├── Stats/           # Sección de estadísticas
│   ├── Sections/        # Todas las secciones de contenido
│   │   ├── WhatIsRegenerative.jsx
│   │   ├── BodyPainMap.jsx
│   │   ├── QCKinetixDifference.jsx
│   │   ├── Benefits.jsx
│   │   └── Testimonials.jsx
│   ├── Forms/           # Formularios
│   │   └── ContactForm.jsx
│   ├── Footer/          # Footer completo
│   └── Common/          # Componentes comunes
│       └── FloatingBanner.jsx
├── styles/
│   └── global.css       # Estilos globales
├── App.jsx              # Componente principal
└── main.jsx             # Punto de entrada
```

## 🎨 Tecnologías Utilizadas

- React 19
- Vite
- Tailwind CSS
- Swiper (para el carrusel de testimonios)
- CSS Modules

## 📝 Notas

- Todas las imágenes y recursos están referenciados desde la URL original de QC Kinetix
- El formulario de contacto necesita una integración con un backend para funcionar completamente
- El mapa del cuerpo humano tiene funcionalidad de hover para resaltar las partes del cuerpo
- El Floating Banner se oculta automáticamente por 30 días después de ser cerrado

## 🔧 Personalización

Para cambiar colores, fuentes u otros estilos, edita:
- `src/styles/global.css` - Estilos globales
- Variables CSS en `:root` dentro de `global.css`
- Cada componente tiene su propio archivo CSS en su carpeta

## 📱 Responsive

El diseño es completamente responsive y se adapta a:
- Móvil (< 768px)
- Tablet (768px - 1024px)
- Desktop (> 1024px)

## 🐛 Solución de Problemas

Si encuentras problemas con las imágenes:
- Verifica que las URLs de las imágenes sean accesibles
- Algunas imágenes pueden requerir CORS habilitado

Si el video no se reproduce:
- Verifica que el navegador permita autoplay
- Algunos navegadores requieren interacción del usuario primero
