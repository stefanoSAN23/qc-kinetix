# Componentes Comunes Reutilizables

## Button Component

Componente de botón reutilizable que se puede usar en toda la aplicación.

### Uso:

```jsx
import Button from '../Common/Button';

// Botón básico
<Button 
  text="Request an Appointment" 
  href="#contact" 
  variant="primary"
  size="small"
/>

// Con onClick en lugar de href
<Button 
  text="Click me" 
  onClick={() => console.log('clicked')}
  variant="primary"
  size="medium"
/>
```

### Props:

- `text` (string): Texto del botón (default: "Request an Appointment")
- `href` (string): URL de destino (default: "#contact")
- `variant` (string): Estilo del botón - "primary" | "secondary" (default: "primary")
- `size` (string): Tamaño del botón - "small" | "medium" | "large" (default: "medium")
- `className` (string): Clases CSS adicionales
- `onClick` (function): Función a ejecutar al hacer click (si se proporciona, se usa button en lugar de anchor)

## SectionContainer Component

Componente contenedor reutilizable para secciones.

### Uso:

```jsx
import SectionContainer from '../Common/SectionContainer';

<SectionContainer 
  maxWidth="1400px"
  padding="80px 20px"
  background="#fff"
>
  {/* Contenido de la sección */}
</SectionContainer>
```

### Props:

- `children` (ReactNode): Contenido de la sección
- `className` (string): Clases CSS adicionales
- `maxWidth` (string): Ancho máximo del contenedor (default: "1400px")
- `padding` (string): Padding de la sección (default: "80px 20px")
- `background` (string): Color de fondo (default: "#fff")

