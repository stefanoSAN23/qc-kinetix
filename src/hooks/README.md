# Custom Hooks

Esta carpeta contiene hooks personalizados reutilizables para todo el proyecto.

## 📁 Estructura

```
src/hooks/
├── index.js                     # Exportaciones centralizadas
├── useIntersectionObserver.js   # Hook para animaciones al scroll
└── README.md                    # Esta documentación
```

## 🚀 Uso

### useIntersectionObserver

Hook para observar múltiples elementos y aplicar animaciones cuando entran al viewport.

```jsx
import { useIntersectionObserver } from '../hooks';

const MyComponent = () => {
  const observerRef = useIntersectionObserver();

  return (
    <div>
      <h1 ref={observerRef} className="animated fadeInDown">
        Título animado
      </h1>
      <p ref={observerRef} className="animated fadeInUp">
        Párrafo animado
      </p>
    </div>
  );
};
```

#### Opciones

| Opción | Tipo | Default | Descripción |
|--------|------|---------|-------------|
| `threshold` | number | 0.2 | Porcentaje visible para disparar |
| `rootMargin` | string | '0px 0px -100px 0px' | Margen del viewport |
| `activeClass` | string | 'animated-active' | Clase a agregar |
| `triggerOnce` | boolean | true | Solo disparar una vez |

```jsx
const observerRef = useIntersectionObserver({
  threshold: 0.3,
  rootMargin: '0px',
  activeClass: 'visible',
  triggerOnce: false
});
```

### useSingleIntersectionObserver

Hook simplificado para un solo elemento (útil para componentes individuales).

```jsx
import { useSingleIntersectionObserver } from '../hooks';

const MyComponent = () => {
  const titleRef = useSingleIntersectionObserver();

  return (
    <h1 ref={titleRef} className="animated fadeInDown">
      Título
    </h1>
  );
};
```

## 🎨 CSS Requerido

Los hooks agregan la clase `animated-active` cuando el elemento es visible. Asegúrate de tener los estilos de animación:

```css
.animated {
  opacity: 0;
  animation-duration: 0.8s;
  animation-fill-mode: both;
}

.animated.animated-active {
  opacity: 1;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animated-active.fadeInDown {
  animation-name: fadeInDown;
}

.animated-active.fadeInUp {
  animation-name: fadeInUp;
}
```

## ✅ Beneficios

- **Reutilización**: Un hook para todas las animaciones
- **Performance**: Usa IntersectionObserver nativo
- **Limpieza**: Desconecta observers automáticamente
- **Flexibilidad**: Configurable con opciones

