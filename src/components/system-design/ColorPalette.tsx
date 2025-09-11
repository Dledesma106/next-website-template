import { Heading2, Heading3, Heading4, BodyMedium, Caption } from "@/components/ui/Typography";
import { Card } from "@/components/ui";

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
      hex: 'var(--background)', 
      role: 'Fondo principal de la aplicación',
      examples: ['Fondo de página', 'Contenedores principales', 'Layout base']
    },
    { 
      name: 'Muted', 
      class: 'bg-muted', 
      hex: 'var(--muted)', 
      role: 'Elementos deshabilitados, baja prioridad',
      examples: ['Texto secundario', 'Elementos inactivos', 'Estados deshabilitados']
    },
    { 
      name: 'Border', 
      class: 'bg-border', 
      hex: 'var(--border)', 
      role: 'Bordes y separadores',
      examples: ['Contornos de elementos', 'Líneas divisorias', 'Separadores']
    },
  ];

  return (
    <div className="space-y-8">
             <div>
         <Heading2 className="text-2xl font-bold text-primary mb-4">Paleta de Colores Wireframe</Heading2>
         <BodyMedium className="text-secondary mb-6">
           Sistema de colores completamente wireframe usando escala de grises.
           Paleta completa con todos los roles semánticos para un sistema de diseño robusto.
         </BodyMedium>
       </div>

       {/* Colores Semánticos Wireframe */}
       <div>
         <Heading3 className="text-lg font-semibold text-primary mb-4">Colores Semánticos (Wireframe)</Heading3>
         <Caption className="text-secondary mb-4">
           Colores que definen roles específicos usando solo escala de grises.
           Fácil de reemplazar por colores reales posteriormente.
         </Caption>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {semanticColors.map((color) => (
            <div key={color.name} className="border border-border rounded-lg overflow-hidden">
              <div className={`h-16 ${color.class} flex items-center justify-center`}>
                <span className="text-sm font-medium text-white">
                  {color.name}
                </span>
              </div>
                             <div className="p-3 bg-card">
                 <p className="text-xs font-mono text-secondary">{color.hex}</p>
                 <p className="text-xs text-muted-foreground mt-1 font-medium">{color.role}</p>
                 <div className="mt-2">
                   <p className="text-xs text-muted-foreground font-medium">Ejemplos:</p>
                   <ul className="text-xs text-muted-foreground mt-1 space-y-1">
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
         <Heading3 className="text-lg font-semibold text-primary mb-4">Categorías de Roles</Heading3>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           <Card className="p-4">
             <Heading4 className="font-medium text-primary mb-3">🎯 Acciones</Heading4>
             <ul className="text-sm text-secondary space-y-1">
               <li>• <span className="font-medium">Primary:</span> Acciones principales</li>
               <li>• <span className="font-medium">Secondary:</span> Acciones complementarias</li>
               <li>• <span className="font-medium">Accent:</span> Acciones destacadas</li>
               <li>• <span className="font-medium">Destructive:</span> Acciones peligrosas</li>
             </ul>
           </Card>
           <Card className="p-4">
             <Heading4 className="font-medium text-primary mb-3">📊 Estados</Heading4>
             <ul className="text-sm text-secondary space-y-1">
               <li>• <span className="font-medium">Success:</span> Estados exitosos</li>
               <li>• <span className="font-medium">Warning:</span> Advertencias</li>
               <li>• <span className="font-medium">Error:</span> Estados críticos</li>
               <li>• <span className="font-medium">Info:</span> Información</li>
             </ul>
           </Card>
           <Card className="p-4">
             <Heading4 className="font-medium text-primary mb-3">🎨 Estructura</Heading4>
             <ul className="text-sm text-secondary space-y-1">
               <li>• <span className="font-medium">Background:</span> Fondo principal</li>
               <li>• <span className="font-medium">Surface:</span> Fondos de elementos</li>
               <li>• <span className="font-medium">Border:</span> Bordes y separadores</li>
               <li>• <span className="font-medium">Muted:</span> Elementos secundarios</li>
             </ul>
           </Card>
         </div>
       </div>

             {/* Cómo Personalizar */}
       <div>
         <Heading3 className="text-lg font-semibold text-primary mb-4">Cómo Personalizar</Heading3>
         <Card className="p-6">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div>
               <Heading4 className="font-medium text-primary mb-3">1. Reemplazar Colores Semánticos</Heading4>
               <Caption className="text-secondary mb-3">
                 Cambia los colores wireframe por tu paleta real:
               </Caption>
               <Card className="bg-surface p-3 text-xs font-mono">
                 <p className="text-muted-foreground">{'// Wireframe → Colores reales'}</p>
                 <p className="text-primary">bg-primary → bg-blue-600 (Primary)</p>
                 <p className="text-primary">bg-secondary → bg-gray-500 (Secondary)</p>
                 <p className="text-primary">bg-accent → bg-purple-600 (Accent)</p>
                 <p className="text-primary">bg-success → bg-green-500 (Success)</p>
                 <p className="text-primary">bg-warning → bg-yellow-500 (Warning)</p>
                 <p className="text-primary">bg-error → bg-red-500 (Error)</p>
                 <p className="text-primary">bg-destructive → bg-red-700 (Destructive)</p>
                 <p className="text-primary">bg-info → bg-cyan-500 (Info)</p>
               </Card>
             </div>
             <div>
               <Heading4 className="font-medium text-primary mb-3">2. Mantener Estructura</Heading4>
               <Caption className="text-secondary mb-3">
                 La estructura y roles se mantienen igual:
               </Caption>
               <Card className="bg-surface p-3 text-xs font-mono">
                 <p className="text-muted-foreground">{'// Roles siempre iguales'}</p>
                 <p className="text-accent">Primary → Acciones principales</p>
                 <p className="text-accent">Accent → Elementos destacados</p>
                 <p className="text-success">Success → Estados exitosos</p>
                 <p className="text-error">Error → Estados críticos</p>
                 <p className="text-error">Destructive → Acciones peligrosas</p>
                 <p className="text-info">Info → Información</p>
               </Card>
             </div>
           </div>
         </Card>
       </div>

             {/* Ejemplo de Personalización */}
       <div>
         <Heading3 className="text-lg font-semibold text-primary mb-4">Ejemplo: Wireframe → Colores Reales</Heading3>
         <Card className="p-6">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div>
               <Heading4 className="font-medium text-primary mb-3">Wireframe (Actual)</Heading4>
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
               <Heading4 className="font-medium text-primary mb-3">Colores Reales (Ejemplo de Personalizado)</Heading4>
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
           <Caption className="text-secondary mt-4">
             Solo cambias las clases de color, manteniendo la misma estructura y roles semánticos.
           </Caption>
         </Card>
       </div>

             {/* Guía de Uso */}
       <div>
         <Heading3 className="text-lg font-semibold text-primary mb-4">Guía de Uso</Heading3>
         <Card className="p-4">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div>
               <Heading4 className="font-medium text-primary mb-2">Ventajas del Wireframe</Heading4>
               <ul className="text-sm text-secondary space-y-1">
                 <li>• <span className="font-medium">Rápido prototipado:</span> Sin decisiones de color</li>
                 <li>• <span className="font-medium">Foco en estructura:</span> Contenido y layout</li>
                 <li>• <span className="font-medium">Fácil personalización:</span> Cambiar clases de color</li>
                 <li>• <span className="font-medium">Consistencia:</span> Una sola escala de grises</li>
               </ul>
             </div>
             <div>
               <Heading4 className="font-medium text-primary mb-2">Proceso de Personalización</Heading4>
               <ul className="text-sm text-secondary space-y-1">
                 <li>• <span className="font-medium">1.</span> Definir paleta de colores</li>
                 <li>• <span className="font-medium">2.</span> Mapear roles semánticos</li>
                 <li>• <span className="font-medium">3.</span> Reemplazar clases de color</li>
                 <li>• <span className="font-medium">4.</span> Mantener estructura y roles</li>
               </ul>
             </div>
           </div>
         </Card>
       </div>
    </div>
  );
} 