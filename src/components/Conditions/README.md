# Componentes de Condiciones Reutilizables

Esta carpeta contiene componentes reutilizables para las páginas de condiciones médicas (Knee Pain, Ankle Pain, Back Pain, etc.).

## 📁 Estructura

```
src/components/Conditions/
├── index.js                      # Exportaciones centralizadas
├── ConditionHero.jsx             # Hero section con breadcrumb y título
├── ConditionHero.css
├── RegenerativeTherapySection.jsx # Sección principal de terapia
├── RegenerativeTherapySection.css
├── WhatIsTherapySection.jsx      # Sección "What is Regenerative Therapy?"
├── WhatIsTherapySection.css
├── CandidateSection.jsx          # Sección "Are You a Candidate?"
├── CandidateSection.css
├── BenefitsSection.jsx           # Sección "Benefits of Nonsurgical..."
├── BenefitsSection.css
├── ReadyToReduceSection.jsx      # CTA "Ready to Reduce Pain"
├── ReadyToReduceSection.css
└── README.md                     # Esta documentación
```

## 🚀 Uso

### Importar componentes

```jsx
import {
  ConditionHero,
  RegenerativeTherapySection,
  WhatIsTherapySection,
  CandidateSection,
  BenefitsSection,
  ReadyToReduceSection
} from '../components/Conditions';
```

### Usar con datos centralizados

```jsx
import { conditionsData } from '../data/conditionsData';

const KneePain = () => {
  const data = conditionsData.knee;

  return (
    <main>
      <ConditionHero 
        title={data.title} 
        breadcrumb={data.breadcrumb} 
      />
      <RegenerativeTherapySection data={data.regenerativeTherapy} />
      <WhatIsTherapySection data={data.whatIsTherapy} />
      <CandidateSection data={data.candidate} />
      <BenefitsSection data={data.benefits} />
      <ReadyToReduceSection data={data.readyToReduce} />
    </main>
  );
};
```

## 📋 Componentes

### ConditionHero
Hero section con fondo oscuro, breadcrumb y título animado.

| Prop | Tipo | Descripción |
|------|------|-------------|
| `title` | string | Título principal (ej: "Knee Pain") |
| `breadcrumb` | string | Texto del breadcrumb |
| `className` | string | Clases CSS adicionales |

### RegenerativeTherapySection
Sección con imagen y contenido sobre terapia regenerativa.

| Prop | Tipo | Descripción |
|------|------|-------------|
| `data` | object | Objeto con `title`, `image`, `imageAlt`, `intro`, `conditions`, `conclusion` |

### WhatIsTherapySection
Sección explicativa con panel blanco y lista de beneficios.

| Prop | Tipo | Descripción |
|------|------|-------------|
| `data` | object | Objeto con `title`, `description`, `benefitsIntro`, `benefits`, `conclusion` |

### CandidateSection
Sección de dos columnas sobre candidatos para tratamiento.

| Prop | Tipo | Descripción |
|------|------|-------------|
| `data` | object | Objeto con `title`, `description`, `factorsIntro`, `factors`, `conclusion` |

### BenefitsSection
Sección de beneficios con header animado y lista de riesgos.

| Prop | Tipo | Descripción |
|------|------|-------------|
| `data` | object | Objeto con `title`, `intro`, `leftContent`, `lessInvasive`, `lowerRisks` |

### ReadyToReduceSection
CTA verde con texto y botón de acción.

| Prop | Tipo | Descripción |
|------|------|-------------|
| `data` | object | Objeto con `text` |

## 🎨 Animaciones

Todos los componentes usan el hook `useSingleIntersectionObserver` para animaciones al scroll:

- `fadeInDown` - Elementos que entran desde arriba
- `fadeInUp` - Elementos que entran desde abajo

## 📊 Datos

Los datos de cada condición están centralizados en:
```
src/data/conditionsData.js
```

### Agregar nueva condición

1. Agregar datos en `conditionsData.js`:
```javascript
export const conditionsData = {
  // ... otras condiciones
  newCondition: {
    slug: 'new-condition-pain',
    name: 'New Condition',
    title: 'New Condition Pain',
    breadcrumb: 'New Condition Pain',
    hero: { backgroundImage: null },
    regenerativeTherapy: { /* ... */ },
    whatIsTherapy: { /* ... */ },
    candidate: { /* ... */ },
    benefits: { /* ... */ },
    readyToReduce: { /* ... */ }
  }
};
```

2. Crear página en `src/pages/`:
```jsx
import { conditionsData } from '../data/conditionsData';
import { ConditionHero, /* ... */ } from '../components/Conditions';

const NewConditionPain = () => {
  const data = conditionsData.newCondition;
  return (/* ... */);
};
```

3. Agregar ruta en `App.jsx`.

## ✅ Beneficios

- **-67% código**: De ~180 archivos a ~60
- **Consistencia**: Todos los componentes siguen el mismo patrón
- **Mantenimiento**: Cambiar un componente afecta todas las páginas
- **Nuevas páginas**: Crear una página nueva toma 5 minutos

