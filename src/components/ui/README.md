# Componentes UI

Esta carpeta contiene todos los componentes reutilizables del sistema de diseño.

## Estructura

```
src/components/ui/
├── Button.tsx          # Botón base con variantes
├── IconButton.tsx      # Botón con iconos
├── ActionButton.tsx    # Botones de acción específicos
├── Typography.tsx      # Componentes de tipografía
├── Input.tsx           # Campo de entrada
├── Textarea.tsx        # Área de texto
├── Select.tsx          # Selector desplegable
├── Checkbox.tsx        # Casilla de verificación
├── Radio.tsx           # Botón de radio
├── Card.tsx            # Tarjeta base
├── CardHeader.tsx      # Encabezado de tarjeta
├── CardContent.tsx     # Contenido de tarjeta
├── CardFooter.tsx      # Pie de tarjeta
├── Badge.tsx           # Etiqueta/badge
├── Example.tsx         # Ejemplo de uso
├── index.ts            # Exportaciones
└── README.md           # Esta documentación
```

## Uso

### Importación

```typescript
// Importar componentes individuales
import { Button, Input, Card } from '@/components/ui';

// O importar desde el archivo específico
import Button from '@/components/ui/Button';
```

### Ejemplos

#### Botones

```typescript
// Botón básico
<Button variant="primary">Guardar</Button>

// Botón con icono
<IconButton icon="→" text="Siguiente" />

// Botón de acción
<ActionButton action="save">Guardar</ActionButton>
```

#### Formularios

```typescript
// Input con label y error
<Input
  label="Email"
  type="email"
  placeholder="usuario@ejemplo.com"
  error="Email inválido"
/>

// Select con opciones
<Select
  label="País"
  options={[
    { value: 'ar', label: 'Argentina' },
    { value: 'mx', label: 'México' }
  ]}
  placeholder="Selecciona un país"
/>
```

#### Tarjetas

```typescript
// Tarjeta completa
<Card interactive>
  <CardHeader 
    title="Título" 
    subtitle="Subtítulo"
    action={<Badge>Nuevo</Badge>}
  />
  <CardContent>
    <p>Contenido de la tarjeta</p>
  </CardContent>
  <CardFooter>
    <Button>Acción</Button>
  </CardFooter>
</Card>
```

#### Tipografía

```typescript
<Heading1>Título Principal</Heading1>
<Heading2>Subtítulo</Heading2>
<BodyMedium>Texto del cuerpo</BodyMedium>
<Badge variant="success">Éxito</Badge>
```

## Características

- **TypeScript**: Todos los componentes están tipados
- **Accesibilidad**: Componentes accesibles por defecto
- **Responsive**: Diseño responsive incluido
- **Consistente**: Sistema de colores y espaciado consistente
- **Reutilizable**: Componentes modulares y reutilizables

## Personalización

Los componentes usan las clases de Tailwind definidas en el sistema de diseño. Para personalizar:

1. Modifica las clases en cada componente
2. Usa la prop `className` para agregar estilos adicionales
3. Extiende las interfaces para agregar nuevas props

## Demo

Visita `/components` para ver todos los componentes en acción.
