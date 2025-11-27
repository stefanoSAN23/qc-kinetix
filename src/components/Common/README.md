# Componentes Reutilizables (Common)

Esta carpeta contiene componentes reutilizables que pueden usarse en todo el proyecto. Estos componentes están diseñados para ser flexibles y personalizables mediante props, manteniendo una apariencia consistente en toda la aplicación.

> **Nota:** Todos los estilos de estos componentes están centralizados en `src/styles/global.css` para disponibilidad global.

---

## 📦 Button

Componente de botón reutilizable con múltiples variantes y tamaños.

### Importación:

```jsx
import Button from '../components/Common/Button';
```

### Uso Básico:

```jsx
// Botón primario (verde QC)
<Button text="Request an Appointment" href="/contact" />

// Botón con variante secundaria
<Button text="Learn More" href="/about" variant="secondary" />

// Botón grande para hero
<Button text="Get Started" href="/start" size="hero" />

// Botón con onClick
<Button text="Submit" onClick={handleSubmit} variant="primary" />

// Botón de ancho completo
<Button text="Continue" href="/next" fullWidth />
```

### Props:

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `text` | string | "Request an Appointment" | Texto del botón |
| `href` | string | "#contact" | URL destino (para enlaces) |
| `variant` | string | "primary" | Variante visual (ver abajo) |
| `size` | string | "medium" | Tamaño (ver abajo) |
| `className` | string | "" | Clases CSS adicionales |
| `onClick` | function | - | Handler de click (convierte en button) |
| `fullWidth` | boolean | false | Si debe ocupar todo el ancho |
| `target` | string | - | Target para enlaces (_blank, etc.) |
| `ariaLabel` | string | - | Aria label para accesibilidad |
| `disabled` | boolean | false | Estado deshabilitado |
| `children` | ReactNode | - | Contenido alternativo al text |

### Variantes:

- `primary` - Verde QC (default)
- `secondary` - Transparente con borde verde
- `outline` - Transparente con borde blanco
- `ghost` - Sin fondo, solo texto
- `header` - Para usar en el header
- `dark` - Negro para fondos claros
- `white` - Blanco para fondos oscuros

### Tamaños:

- `small` - 14px, padding compacto
- `medium` - 16px, padding estándar (default)
- `large` - 18px, padding amplio
- `hero` - 18px, padding extra para heroes

---

## 📦 Divider

Componente separador de secciones reutilizable.

### Importación:

```jsx
import Divider from '../components/Common/Divider';
```

### Uso Básico:

```jsx
// Divider por defecto (fondo claro, línea oscura)
<Divider />

// Divider oscuro (fondo oscuro, línea clara)
<Divider variant="dark" />

// Divider personalizado
<Divider 
  variant="transparent"
  lineColor="#159A00"
  maxWidth="1200px"
  thickness="3px"
  padding="30px"
/>
```

### Props:

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `variant` | string | "default" | Variante visual (ver abajo) |
| `lineColor` | string | - | Color de la línea (override) |
| `backgroundColor` | string | - | Color de fondo (override) |
| `maxWidth` | string | "1400px" | Ancho máximo de la línea |
| `thickness` | string | "2px" | Grosor de la línea |
| `padding` | string | "20px" | Padding vertical |
| `className` | string | "" | Clases CSS adicionales |

### Variantes:

- `default` - Fondo #f6fafc, línea negra
- `dark` - Fondo #18212A, línea blanca
- `light` - Fondo blanco, línea gris
- `transparent` - Sin fondo, línea negra
- `primary` - Sin fondo, línea verde QC

---

## 📦 ImageDivider

Componente para dividers decorativos con imagen (usados en heroes y headers).

### Importación:

```jsx
import ImageDivider from '../components/Common/ImageDivider';
```

### Uso Básico:

```jsx
// Divider por defecto
<ImageDivider />

// Divider blanco (para fondos oscuros)
<ImageDivider variant="white" />

// Divider con animación
<ImageDivider animated />

// Divider personalizado
<ImageDivider 
  src="/custom-divider.svg"
  width={200}
  height={10}
  alt="Custom divider"
/>
```

### Props:

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `src` | string | (según variant) | URL de la imagen |
| `alt` | string | "Decorative divider" | Texto alternativo |
| `width` | number | 176 | Ancho de la imagen |
| `height` | number | 7 | Alto de la imagen |
| `variant` | string | "default" | Variante (ver abajo) |
| `className` | string | "" | Clases CSS adicionales |
| `animated` | boolean | false | Animación fadeInLeft |
| `loading` | string | "lazy" | Estrategia de carga |

### Variantes:

- `default` - Imagen estándar
- `white` - Imagen en blanco (filtro invert)
- `green` - Imagen en verde QC

---

## 📦 SectionContainer

Contenedor reutilizable para secciones con configuración de layout.

### Importación:

```jsx
import SectionContainer from '../components/Common/SectionContainer';
```

### Uso:

```jsx
<SectionContainer 
  maxWidth="1400px"
  padding="80px 20px"
  background="#fff"
>
  {/* Contenido de la sección */}
</SectionContainer>
```

### Props:

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `children` | ReactNode | - | Contenido de la sección |
| `className` | string | "" | Clases CSS adicionales |
| `maxWidth` | string | "1400px" | Ancho máximo |
| `padding` | string | "80px 20px" | Padding de la sección |
| `background` | string | "#fff" | Color de fondo |

---

## 📦 SectionHeader

Header reutilizable para títulos de sección.

### Importación:

```jsx
import SectionHeader from '../components/Common/SectionHeader';
```

### Uso:

```jsx
<SectionHeader 
  title="Our Services"
  subtitle="What we offer"
  align="center"
/>
```

---

## 📦 BulletList

Lista con viñetas reutilizable.

### Importación:

```jsx
import BulletList from '../components/Common/BulletList';
```

### Uso:

```jsx
<BulletList 
  items={['Item 1', 'Item 2', 'Item 3']}
  bulletColor="#159A00"
/>
```

---

## 📦 TwoColumnLayout

Layout de dos columnas reutilizable.

### Importación:

```jsx
import TwoColumnLayout from '../components/Common/TwoColumnLayout';
```

### Uso:

```jsx
<TwoColumnLayout
  leftContent={<div>Left content</div>}
  rightContent={<div>Right content</div>}
  reverseOnMobile
/>
```

---

## 🎨 Clases CSS Globales

Los estilos base están en `src/styles/global.css`. Usa estas clases globales:

| Clase | Descripción |
|-------|-------------|
| `.qc-btn` | Botón principal verde QC |
| `.qc-button-*` | Variantes del componente Button |
| `.qc-divider` | Separador de secciones |
| `.qc-divider-*` | Variantes del Divider |
| `.qc-image-divider` | Divider con imagen |

### Ejemplo de Uso:

```jsx
// Usando el componente Button con clase global
<Button 
  text="Click me" 
  variant="primary" 
  className="qc-btn" 
/>

// Usando Divider
<Divider variant="default" />
```

### Personalización por Página:

```jsx
// En tu componente
<Button text="Custom Button" className="qc-btn my-page-button" />

// En tu CSS de página
.my-page-button {
  background-color: #ff0000;
  border-color: #ff0000;
}
```

> **Nota:** Usa siempre `.qc-btn` para los botones principales.

---

## 📝 Notas de Uso

1. **Consistencia**: Usa estos componentes en lugar de crear elementos similares desde cero.

2. **Personalización**: Usa las props para cambiar la apariencia, o agrega `className` para estilos específicos de página.

3. **Accesibilidad**: Los componentes incluyen soporte para `ariaLabel` y otros atributos de accesibilidad.

4. **Responsive**: Todos los componentes tienen estilos responsive incluidos para MacBook (1025px-1366px) y móvil.
