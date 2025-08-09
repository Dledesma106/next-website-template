export default function ColorPalette() {
  const semanticColors = [
    { 
      name: 'Primary', 
      class: 'bg-primary', 
      hex: '#171717', 
      role: 'Color principal de la marca, acciones principales',
      examples: ['Botones principales', 'Logo', 'Enlaces importantes']
    },
    { 
      name: 'Secondary', 
      class: 'bg-secondary', 
      hex: '#495057', 
      role: 'Color secundario, acciones complementarias',
      examples: ['Botones secundarios', 'Información complementaria', 'Estados neutros']
    },
    { 
      name: 'Accent', 
      class: 'bg-accent', 
      hex: '#212529', 
      role: 'Elementos destacados, llamadas a la acción',
      examples: ['Botones de acción especial', 'Elementos premium', 'Destacados']
    },
    { 
      name: 'Success', 
      class: 'bg-success', 
      hex: '#343a40', 
      role: 'Estados exitosos, confirmaciones, acciones positivas',
      examples: ['Mensajes de éxito', 'Estados completados', 'Acciones confirmadas']
    },
    { 
      name: 'Warning', 
      class: 'bg-warning', 
      hex: '#6c757d', 
      role: 'Advertencias, estados de atención',
      examples: ['Alertas', 'Estados de precaución', 'Acciones que requieren atención']
    },
    { 
      name: 'Error', 
      class: 'bg-error', 
      hex: '#212529', 
      role: 'Errores, estados críticos',
      examples: ['Mensajes de error', 'Estados fallidos', 'Problemas del sistema']
    },
    { 
      name: 'Destructive', 
      class: 'bg-destructive', 
      hex: '#171717', 
      role: 'Acciones destructivas, peligrosas',
      examples: ['Eliminar cuenta', 'Borrar archivo', 'Acciones irreversibles']
    },
    { 
      name: 'Info', 
      class: 'bg-info', 
      hex: '#adb5bd', 
      role: 'Información, estados informativos, ayuda',
      examples: ['Mensajes informativos', 'Estados de proceso', 'Ayuda contextual']
    },
    { 
      name: 'Surface', 
      class: 'bg-surface', 
      hex: '#e9ecef', 
      role: 'Fondos de superficies, tarjetas, modales',
      examples: ['Fondos de tarjetas', 'Paneles', 'Modales']
    },
    { 
      name: 'Background', 
      class: 'bg-background', 
      hex: '#f8f9fa', 
      role: 'Fondo principal de la aplicación',
      examples: ['Fondo de página', 'Contenedores principales', 'Layout base']
    },
    { 
      name: 'Muted', 
      class: 'bg-muted', 
      hex: '#dee2e6', 
      role: 'Elementos deshabilitados, baja prioridad',
      examples: ['Texto secundario', 'Elementos inactivos', 'Estados deshabilitados']
    },
    { 
      name: 'Border', 
      class: 'bg-border', 
      hex: '#ced4da', 
      role: 'Bordes y separadores',
      examples: ['Contornos de elementos', 'Líneas divisorias', 'Separadores']
    },
  ];

  return (
    <div className="space-y-8">
      {/* Test Visual */}
      <div className="border border-red-500 p-4 bg-yellow-100">
        <h3 className="text-lg font-bold mb-2">🧪 Test de Variables CSS</h3>
        <div className="test-primary mb-2">
          Test CSS Directo - Primary (debería ser gris oscuro)
        </div>
        <div className="test-surface mb-2">
          Test CSS Directo - Surface (debería ser gris claro)
        </div>
        <div className="bg-primary text-white p-4 mb-2">
          Test Tailwind - bg-primary (debería ser gris oscuro)
        </div>
        <div className="bg-surface text-black p-4 mb-2">
          Test Tailwind - bg-surface (debería ser gris claro)
        </div>
        <div className="bg-gray-900 text-white p-4">
          Test Comparación - bg-gray-900 (para comparar)
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-primary mb-4">Paleta de Colores Wireframe</h2>
        <p className="text-secondary mb-6">
          Sistema de colores completamente wireframe usando escala de grises.
          Paleta completa con todos los roles semánticos para un sistema de diseño robusto.
        </p>
      </div>

      {/* Colores Semánticos Wireframe */}
      <div>
        <h3 className="text-lg font-semibold text-primary mb-4">Colores Semánticos (Wireframe)</h3>
        <p className="text-sm text-secondary mb-4">
          Colores que definen roles específicos usando solo escala de grises.
          Fácil de reemplazar por colores reales posteriormente.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {semanticColors.map((color) => (
            <div key={color.name} className="border border-border rounded-lg overflow-hidden">
              <div className={`h-16 ${color.class} flex items-center justify-center`}>
                <span className="text-sm font-medium text-white">
                  {color.name}
                </span>
              </div>
              <div className="p-3 bg-white">
                <p className="text-xs font-mono text-secondary">{color.hex}</p>
                <p className="text-xs text-muted mt-1 font-medium">{color.role}</p>
                <div className="mt-2">
                  <p className="text-xs text-muted font-medium">Ejemplos:</p>
                  <ul className="text-xs text-muted mt-1 space-y-1">
                    {color.examples.map((example, index) => (
                      <li key={index}>• {example}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categorías de Roles */}
      <div>
        <h3 className="text-lg font-semibold text-primary mb-4">Categorías de Roles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-background p-4 rounded-lg border border-border">
            <h4 className="font-medium text-primary mb-3">🎯 Acciones</h4>
            <ul className="text-sm text-secondary space-y-1">
              <li>• <span className="font-medium">Primary:</span> Acciones principales</li>
              <li>• <span className="font-medium">Secondary:</span> Acciones complementarias</li>
              <li>• <span className="font-medium">Accent:</span> Acciones destacadas</li>
              <li>• <span className="font-medium">Destructive:</span> Acciones peligrosas</li>
            </ul>
          </div>
          <div className="bg-background p-4 rounded-lg border border-border">
            <h4 className="font-medium text-primary mb-3">📊 Estados</h4>
            <ul className="text-sm text-secondary space-y-1">
              <li>• <span className="font-medium">Success:</span> Estados exitosos</li>
              <li>• <span className="font-medium">Warning:</span> Advertencias</li>
              <li>• <span className="font-medium">Error:</span> Estados críticos</li>
              <li>• <span className="font-medium">Info:</span> Información</li>
            </ul>
          </div>
          <div className="bg-background p-4 rounded-lg border border-border">
            <h4 className="font-medium text-primary mb-3">🎨 Estructura</h4>
            <ul className="text-sm text-secondary space-y-1">
              <li>• <span className="font-medium">Background:</span> Fondo principal</li>
              <li>• <span className="font-medium">Surface:</span> Fondos de elementos</li>
              <li>• <span className="font-medium">Border:</span> Bordes y separadores</li>
              <li>• <span className="font-medium">Muted:</span> Elementos secundarios</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Cómo Personalizar */}
      <div>
        <h3 className="text-lg font-semibold text-primary mb-4">Cómo Personalizar</h3>
        <div className="bg-background p-6 rounded-lg border border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-primary mb-3">1. Reemplazar Colores Semánticos</h4>
              <p className="text-sm text-secondary mb-3">
                Cambia los colores wireframe por tu paleta real:
              </p>
              <div className="bg-surface p-3 rounded border text-xs font-mono">
                <p className="text-muted">{'// Wireframe → Colores reales'}</p>
                <p className="text-primary">bg-primary → bg-blue-600 (Primary)</p>
                <p className="text-primary">bg-secondary → bg-gray-500 (Secondary)</p>
                <p className="text-primary">bg-accent → bg-purple-600 (Accent)</p>
                <p className="text-primary">bg-success → bg-green-500 (Success)</p>
                <p className="text-primary">bg-warning → bg-yellow-500 (Warning)</p>
                <p className="text-primary">bg-error → bg-red-500 (Error)</p>
                <p className="text-primary">bg-destructive → bg-red-700 (Destructive)</p>
                <p className="text-primary">bg-info → bg-cyan-500 (Info)</p>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-primary mb-3">2. Mantener Estructura</h4>
              <p className="text-sm text-secondary mb-3">
                La estructura y roles se mantienen igual:
              </p>
              <div className="bg-surface p-3 rounded border text-xs font-mono">
                <p className="text-muted">{'// Roles siempre iguales'}</p>
                <p className="text-accent">Primary → Acciones principales</p>
                <p className="text-accent">Accent → Elementos destacados</p>
                <p className="text-success">Success → Estados exitosos</p>
                <p className="text-error">Error → Estados críticos</p>
                <p className="text-error">Destructive → Acciones peligrosas</p>
                <p className="text-info">Info → Información</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ejemplo de Personalización */}
      <div>
        <h3 className="text-lg font-semibold text-primary mb-4">Ejemplo: Wireframe → Colores Reales</h3>
        <div className="bg-background p-6 rounded-lg border border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-primary mb-3">Wireframe (Actual)</h4>
              <div className="space-y-2">
                <div className="bg-primary h-8 rounded flex items-center px-3">
                  <span className="text-xs text-white">Primary</span>
                </div>
                <div className="bg-secondary h-8 rounded flex items-center px-3">
                  <span className="text-xs text-white">Secondary</span>
                </div>
                <div className="bg-accent h-8 rounded flex items-center px-3">
                  <span className="text-xs text-white">Accent</span>
                </div>
                <div className="bg-success h-8 rounded flex items-center px-3">
                  <span className="text-xs text-white">Success</span>
                </div>
                <div className="bg-warning h-8 rounded flex items-center px-3">
                  <span className="text-xs text-white">Warning</span>
                </div>
                <div className="bg-error h-8 rounded flex items-center px-3">
                  <span className="text-xs text-white">Error</span>
                </div>
                <div className="bg-destructive h-8 rounded flex items-center px-3">
                  <span className="text-xs text-white">Destructive</span>
                </div>
                <div className="bg-info h-8 rounded flex items-center px-3">
                  <span className="text-xs text-white">Info</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-primary mb-3">Colores Reales (Ejemplo de Personalizado)</h4>
              <div className="space-y-2">
                <div className="bg-blue-600 h-8 rounded flex items-center px-3">
                  <span className="text-xs text-white">Primary</span>
                </div>
                <div className="bg-gray-500 h-8 rounded flex items-center px-3">
                  <span className="text-xs text-white">Secondary</span>
                </div>
                <div className="bg-purple-600 h-8 rounded flex items-center px-3">
                  <span className="text-xs text-white">Accent</span>
                </div>
                <div className="bg-green-500 h-8 rounded flex items-center px-3">
                  <span className="text-xs text-white">Success</span>
                </div>
                <div className="bg-yellow-500 h-8 rounded flex items-center px-3">
                  <span className="text-xs text-white">Warning</span>
                </div>
                <div className="bg-red-500 h-8 rounded flex items-center px-3">
                  <span className="text-xs text-white">Error</span>
                </div>
                <div className="bg-red-700 h-8 rounded flex items-center px-3">
                  <span className="text-xs text-white">Destructive</span>
                </div>
                <div className="bg-cyan-500 h-8 rounded flex items-center px-3">
                  <span className="text-xs text-white">Info</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-secondary mt-4">
            Solo cambias las clases de color, manteniendo la misma estructura y roles semánticos.
          </p>
        </div>
      </div>

      {/* Guía de Uso */}
      <div>
        <h3 className="text-lg font-semibold text-primary mb-4">Guía de Uso</h3>
        <div className="bg-background p-4 rounded-lg border border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-primary mb-2">Ventajas del Wireframe</h4>
              <ul className="text-sm text-secondary space-y-1">
                <li>• <span className="font-medium">Rápido prototipado:</span> Sin decisiones de color</li>
                <li>• <span className="font-medium">Foco en estructura:</span> Contenido y layout</li>
                <li>• <span className="font-medium">Fácil personalización:</span> Cambiar clases de color</li>
                <li>• <span className="font-medium">Consistencia:</span> Una sola escala de grises</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-primary mb-2">Proceso de Personalización</h4>
              <ul className="text-sm text-secondary space-y-1">
                <li>• <span className="font-medium">1.</span> Definir paleta de colores</li>
                <li>• <span className="font-medium">2.</span> Mapear roles semánticos</li>
                <li>• <span className="font-medium">3.</span> Reemplazar clases de color</li>
                <li>• <span className="font-medium">4.</span> Mantener estructura y roles</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 