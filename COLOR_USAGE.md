# Uso de Clases de Color Semánticas

## 🎨 **Configuración Completada**

He configurado las variables CSS y Tailwind para que puedas usar clases semánticas de color en tu código.

## 📁 **Archivos Configurados**

### 1. **Variables CSS** (`src/app/globals.css`)
```css
:root {
  /* Colores Semánticos Wireframe */
  --color-primary: #171717;
  --color-secondary: #495057;
  --color-accent: #212529;
  --color-success: #343a40;
  --color-warning: #6c757d;
  --color-error: #212529;
  --color-destructive: #171717;
  --color-info: #adb5bd;
  --color-surface: #e9ecef;
  --color-background: #f8f9fa;
  --color-muted: #dee2e6;
  --color-border: #ced4da;
}
```

### 2. **Configuración Tailwind** (`tailwind.config.ts`)
```typescript
theme: {
  extend: {
    colors: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      accent: 'var(--color-accent)',
      // ... todos los colores semánticos
    }
  }
}
```

## 🚀 **Clases Disponibles**

### **Fondos (bg-*)**
```html
<div className="bg-primary">Fondo principal</div>
<div className="bg-secondary">Fondo secundario</div>
<div className="bg-accent">Fondo destacado</div>
<div className="bg-surface">Fondo de tarjeta</div>
<div className="bg-background">Fondo de página</div>
<div className="bg-muted">Fondo secundario</div>
```

### **Textos (text-*)**
```html
<h1 className="text-primary">Título principal</h1>
<p className="text-secondary">Texto secundario</p>
<span className="text-accent">Texto destacado</span>
<span className="text-success">Texto de éxito</span>
<span className="text-warning">Texto de advertencia</span>
<span className="text-error">Texto de error</span>
```

### **Bordes (border-*)**
```html
<div className="border border-border">Borde estándar</div>
<div className="border border-primary">Borde principal</div>
<div className="border border-accent">Borde destacado</div>
<div className="border border-success">Borde de éxito</div>
<div className="border border-warning">Borde de advertencia</div>
<div className="border border-error">Borde de error</div>
```

## 💡 **Ejemplos de Uso**

### **Tarjeta con Fondo Diferenciado**
```html
<div className="bg-surface p-6 rounded-lg border border-border">
  <h3 className="text-primary font-semibold mb-2">Título de la Tarjeta</h3>
  <p className="text-secondary">Contenido de la tarjeta con texto secundario</p>
  <button className="bg-primary text-white px-4 py-2 rounded mt-4">
    Acción Principal
  </button>
</div>
```

### **Botones con Estados**
```html
<button className="bg-primary text-white px-4 py-2 rounded">
  Guardar
</button>

<button className="bg-secondary text-white px-4 py-2 rounded">
  Cancelar
</button>

<button className="bg-destructive text-white px-4 py-2 rounded">
  Eliminar
</button>

<button className="bg-success text-white px-4 py-2 rounded">
  Confirmar
</button>
```

### **Formulario con Estados**
```html
<div className="bg-background p-6 rounded-lg">
  <label className="text-primary font-medium">Email</label>
  <input 
    type="email" 
    className="border border-border rounded px-3 py-2 mt-1"
  />
  <p className="text-error text-sm mt-1">Email inválido</p>
</div>
```

## 🎯 **Ventajas de Este Sistema**

1. **Semántica Clara**: Cada clase tiene un propósito específico
2. **Consistencia**: Mismos colores en toda la aplicación
3. **Fácil Personalización**: Cambiar variables CSS para cambiar toda la paleta
4. **IntelliSense**: Autocompletado en tu editor
5. **Mantenimiento**: Un solo lugar para gestionar colores

## 🔄 **Personalización**

Para cambiar de wireframe a colores reales, solo modifica las variables CSS:

```css
:root {
  --color-primary: #3b82f6;    /* Azul */
  --color-secondary: #6b7280;  /* Gris */
  --color-accent: #8b5cf6;     /* Púrpura */
  --color-success: #10b981;    /* Verde */
  --color-warning: #f59e0b;    /* Amarillo */
  --color-error: #ef4444;      /* Rojo */
  --color-destructive: #dc2626; /* Rojo oscuro */
  --color-info: #06b6d4;       /* Cyan */
  --color-surface: #ffffff;    /* Blanco */
  --color-background: #f9fafb; /* Gris claro */
  --color-muted: #f3f4f6;      /* Gris muy claro */
  --color-border: #d1d5db;     /* Gris medio */
}
```

¡Y listo! Todos los componentes automáticamente usarán la nueva paleta de colores. 