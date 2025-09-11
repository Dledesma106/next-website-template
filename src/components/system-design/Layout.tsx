import {
  Heading2,
  Heading3,
  Heading4,
  BodyMedium,
  Card,
  Heading5,
} from '@/components/ui';

export default function Layout() {
  return (
    <div className="space-y-8">
      <div>
        <Heading2 className="text-2xl font-bold text-primary mb-4">Layout</Heading2>
        <BodyMedium className=" mb-6">
          Estructuras de layout y sistemas de grid para organizar el contenido
          de manera consistente y responsive en toda la aplicación.
        </BodyMedium>
      </div>

      {/* Sistema de Grid */}
      <div>
        <Heading3 className="text-lg font-semibold text-primary mb-4">Sistema de Grid</Heading3>
        <div className="space-y-4">
          <div className="grid grid-cols-12 gap-4">
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i} className="col-span-1 bg-muted h-8 rounded flex items-center justify-center">
                <span className="text-xs text-secondary">{i + 1}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-6 bg-muted h-8 rounded flex items-center justify-center">
              <span className="text-xs text-secondary">6 columnas</span>
            </div>
            <div className="col-span-6 bg-muted h-8 rounded flex items-center justify-center">
              <span className="text-xs text-secondary">6 columnas</span>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-4 bg-muted h-8 rounded flex items-center justify-center">
              <span className="text-xs text-secondary">4 columnas</span>
            </div>
            <div className="col-span-4 bg-muted h-8 rounded flex items-center justify-center">
              <span className="text-xs text-secondary">4 columnas</span>
            </div>
            <div className="col-span-4 bg-muted h-8 rounded flex items-center justify-center">
              <span className="text-xs text-secondary">4 columnas</span>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-3 bg-muted h-8 rounded flex items-center justify-center">
              <span className="text-xs text-secondary">3</span>
            </div>
            <div className="col-span-3 bg-muted h-8 rounded flex items-center justify-center">
              <span className="text-xs text-secondary">3</span>
            </div>
            <div className="col-span-3 bg-muted h-8 rounded flex items-center justify-center">
              <span className="text-xs text-secondary">3</span>
            </div>
            <div className="col-span-3 bg-muted h-8 rounded flex items-center justify-center">
              <span className="text-xs text-secondary">3</span>
            </div>
          </div>
        </div>
      </div>

      {/* Layouts Responsive */}
      <div>
        <Heading3 className="text-lg font-semibold text-primary mb-4">Layouts Responsive</Heading3>
        <div className="space-y-6">
          <div>
            <Heading4 className="text-sm font-medium text-primary mb-3">Grid Responsive</Heading4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-muted h-16 rounded flex items-center justify-center">
                  <span className="text-sm text-secondary">Item {item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Heading4 className="text-sm font-medium text-primary mb-3">Flexbox Responsive</Heading4>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 bg-muted h-16 rounded flex items-center justify-center">
                <span className="text-sm text-secondary">Flex Item 1</span>
              </div>
              <div className="flex-1 bg-muted h-16 rounded flex items-center justify-center">
                <span className="text-sm text-secondary">Flex Item 2</span>
              </div>
              <div className="flex-1 bg-muted h-16 rounded flex items-center justify-center">
                <span className="text-sm text-secondary">Flex Item 3</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Layouts de Página */}
      <div>
        <Heading3 className="text-lg font-semibold text-primary mb-4">Layouts de Página</Heading3>
        <div className="space-y-6">
          {/* Layout Centrado */}
          <div>
            <Heading4 className="text-sm font-medium text-primary mb-3">Layout Centrado</Heading4>
            <Card className="max-w-4xl mx-auto p-6">
              <div className="bg-muted h-32 rounded flex items-center justify-center">
                <span className="text-secondary">Contenido Centrado (max-w-4xl)</span>
              </div>
            </Card>
          </div>

          {/* Layout con Sidebar */}
          <div>
            <Heading4 className="text-sm font-medium text-primary mb-3">Layout con Sidebar</Heading4>
            <Card className="overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-64 p-4 border-r border-border">
                  <Heading5 className="font-medium text-primary mb-2">Sidebar</Heading5>
                  <div className="space-y-2">
                    <div className="h-8 bg-surface rounded"></div>
                    <div className="h-8 bg-surface rounded"></div>
                    <div className="h-8 bg-surface rounded"></div>
                  </div>
                </div>
                <div className="flex-1 p-6">
                  <Heading5 className="font-medium text-primary mb-4">Contenido Principal</Heading5>
                  <div className="space-y-4">
                    <div className="h-16 bg-muted rounded"></div>
                    <div className="h-16 bg-muted rounded"></div>
                    <div className="h-16 bg-muted rounded"></div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Layout de Header y Footer */}
          <div>
            <Heading4 className="text-sm font-medium text-primary mb-3">Layout Completo</Heading4>
            <Card className="overflow-hidden">
              <div className="bg-muted p-4 border-b border-border">
                <Heading5 className="font-medium text-primary">Header</Heading5>
              </div>
              <div className="p-6">
                <Heading5 className="font-medium text-primary mb-4">Contenido Principal</Heading5>
                <div className="space-y-4">
                  <div className="h-12 bg-muted rounded"></div>
                  <div className="h-12 bg-muted rounded"></div>
                  <div className="h-12 bg-muted rounded"></div>
                </div>
              </div>
              <div className="bg-muted p-4 border-t border-border">
                <Heading5 className="font-medium text-primary">Footer</Heading5>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Espaciado */}
      <div>
        <Heading3 className="text-lg font-semibold text-primary mb-4">Sistema de Espaciado</Heading3>
        <div className="space-y-4">
          <div>
            <Heading4 className="text-sm font-medium text-primary mb-3">Espaciado Vertical</Heading4>
            <div className="space-y-1">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-muted rounded mr-2"></div>
                <span className="text-sm text-secondary">space-y-1 (0.25rem)</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-muted rounded mr-2"></div>
                <span className="text-sm text-secondary">space-y-2 (0.5rem)</span>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-muted rounded mr-2"></div>
                <span className="text-sm text-secondary">space-y-4 (1rem)</span>
              </div>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-muted rounded mr-2"></div>
                <span className="text-sm text-secondary">space-y-6 (1.5rem)</span>
              </div>
              <div className="flex items-center">
                <div className="w-20 h-20 bg-muted rounded mr-2"></div>
                <span className="text-sm text-secondary">space-y-8 (2rem)</span>
              </div>
            </div>
          </div>
          <div>
            <Heading4 className="text-sm font-medium text-primary mb-3">Padding y Margin</Heading4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-muted p-4 rounded">
                <Heading5 className="text-sm font-medium text-primary mb-2">Padding</Heading5>
                <div className="space-y-2">
                  <div className="bg-card p-1 rounded text-xs">p-1</div>
                  <div className="bg-card p-2 rounded text-xs">p-2</div>
                  <div className="bg-card p-4 rounded text-xs">p-4</div>
                  <div className="bg-card p-6 rounded text-xs">p-6</div>
                </div>
              </div>
              <div className="bg-muted p-4 rounded">
                <Heading5 className="text-sm font-medium text-primary mb-2">Margin</Heading5>
                <div className="">
                  <div className="bg-card m-1 rounded text-xs">m-1</div>
                  <div className="bg-card m-2 rounded text-xs">m-2</div>
                  <div className="bg-card m-4 rounded text-xs">m-4</div>
                  <div className="bg-card m-6 rounded text-xs">m-6</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenedores */}
      <div>
        <Heading3 className="text-lg font-semibold text-primary mb-4">Contenedores</Heading3>
        <div className="space-y-4">
          <div>
            <Heading4 className="text-sm font-medium text-primary mb-3">Anchos de Contenedor</Heading4>
            <div className="space-y-4">
              <div className="max-w-xs mx-auto bg-muted h-12 rounded flex items-center justify-center">
                <span className="text-sm text-secondary">max-w-xs (20rem)</span>
              </div>
              <div className="max-w-sm mx-auto bg-muted h-12 rounded flex items-center justify-center">
                <span className="text-sm text-secondary">max-w-sm (24rem)</span>
              </div>
              <div className="max-w-md mx-auto bg-muted h-12 rounded flex items-center justify-center">
                <span className="text-sm text-secondary">max-w-md (28rem)</span>
              </div>
              <div className="max-w-lg mx-auto bg-muted h-12 rounded flex items-center justify-center">
                <span className="text-sm text-secondary">max-w-lg (32rem)</span>
              </div>
              <div className="max-w-xl mx-auto bg-muted h-12 rounded flex items-center justify-center">
                <span className="text-sm text-secondary">max-w-xl (36rem)</span>
              </div>
              <div className="max-w-2xl mx-auto bg-muted h-12 rounded flex items-center justify-center">
                <span className="text-sm text-secondary">max-w-2xl (42rem)</span>
              </div>
              <div className="max-w-4xl mx-auto bg-muted h-12 rounded flex items-center justify-center">
                <span className="text-sm text-secondary">max-w-4xl (56rem)</span>
              </div>
              <div className="max-w-6xl mx-auto bg-muted h-12 rounded flex items-center justify-center">
                <span className="text-sm text-secondary">max-w-6xl (72rem)</span>
              </div>
              <div className="max-w-7xl mx-auto bg-muted h-12 rounded flex items-center justify-center">
                <span className="text-sm text-secondary">max-w-7xl (80rem)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Guía de Uso */}
      <div>
        <Heading3 className="text-lg font-semibold text-primary mb-4">Guía de Uso</Heading3>
        <Card className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Heading4 className="font-medium text-primary mb-2">Sistema de Grid</Heading4>
              <ul className="text-sm text-secondary space-y-1">
                <li>• <span className="font-medium">12 columnas:</span> Base del sistema</li>
                <li>• <span className="font-medium">Responsive:</span> Adaptable a dispositivos</li>
                <li>• <span className="font-medium">Flexbox:</span> Para layouts flexibles</li>
                <li>• <span className="font-medium">Grid:</span> Para layouts estructurados</li>
              </ul>
            </div>
            <div>
              <Heading4 className="font-medium text-primary mb-2">Mejores Prácticas</Heading4>
              <ul className="text-sm text-secondary space-y-1">
                <li>• Usar contenedores apropiados para el contenido</li>
                <li>• Mantener consistencia en el espaciado</li>
                <li>• Considerar la jerarquía visual</li>
                <li>• Optimizar para diferentes tamaños de pantalla</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
} 