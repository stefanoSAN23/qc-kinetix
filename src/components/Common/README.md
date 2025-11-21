# Reusable Common Components

## Button Component

Reusable button component that can be used throughout the application.

### Usage:

```jsx
import Button from '../Common/Button';

// Basic button
<Button 
  text="Request an Appointment" 
  href="#contact" 
  variant="primary"
  size="small"
/>

// With onClick instead of href
<Button 
  text="Click me" 
  onClick={() => console.log('clicked')}
  variant="primary"
  size="medium"
/>
```

### Props:

- `text` (string): Button text (default: "Request an Appointment")
- `href` (string): Destination URL (default: "#contact")
- `variant` (string): Button style - "primary" | "secondary" (default: "primary")
- `size` (string): Button size - "small" | "medium" | "large" (default: "medium")
- `className` (string): Additional CSS classes
- `onClick` (function): Function to execute on click (if provided, uses button instead of anchor)

## SectionContainer Component

Reusable container component for sections.

### Usage:

```jsx
import SectionContainer from '../Common/SectionContainer';

<SectionContainer 
  maxWidth="1400px"
  padding="80px 20px"
  background="#fff"
>
  {/* Section content */}
</SectionContainer>
```

### Props:

- `children` (ReactNode): Section content
- `className` (string): Additional CSS classes
- `maxWidth` (string): Maximum container width (default: "1400px")
- `padding` (string): Section padding (default: "80px 20px")
- `background` (string): Background color (default: "#fff")

