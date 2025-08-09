export default function Layout() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Layout</h2>
        <p className="text-gray-600 mb-6">
          Estructuras de layout y sistemas de grid para organizar el contenido
          de manera consistente y responsive en toda la aplicación.
        </p>
      </div>

      {/* Sistema de Grid */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Sistema de Grid</h3>
        <div className="space-y-4">
          <div className="grid grid-cols-12 gap-4">
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i} className="col-span-1 bg-gray-200 h-8 rounded flex items-center justify-center">
                <span className="text-xs text-gray-600">{i + 1}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-6 bg-gray-200 h-8 rounded flex items-center justify-center">
              <span className="text-xs text-gray-600">6 columnas</span>
            </div>
            <div className="col-span-6 bg-gray-200 h-8 rounded flex items-center justify-center">
              <span className="text-xs text-gray-600">6 columnas</span>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-4 bg-gray-200 h-8 rounded flex items-center justify-center">
              <span className="text-xs text-gray-600">4 columnas</span>
            </div>
            <div className="col-span-4 bg-gray-200 h-8 rounded flex items-center justify-center">
              <span className="text-xs text-gray-600">4 columnas</span>
            </div>
            <div className="col-span-4 bg-gray-200 h-8 rounded flex items-center justify-center">
              <span className="text-xs text-gray-600">4 columnas</span>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-3 bg-gray-200 h-8 rounded flex items-center justify-center">
              <span className="text-xs text-gray-600">3</span>
            </div>
            <div className="col-span-3 bg-gray-200 h-8 rounded flex items-center justify-center">
              <span className="text-xs text-gray-600">3</span>
            </div>
            <div className="col-span-3 bg-gray-200 h-8 rounded flex items-center justify-center">
              <span className="text-xs text-gray-600">3</span>
            </div>
            <div className="col-span-3 bg-gray-200 h-8 rounded flex items-center justify-center">
              <span className="text-xs text-gray-600">3</span>
            </div>
          </div>
        </div>
      </div>

      {/* Layouts Responsive */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Layouts Responsive</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-medium text-gray-800 mb-3">Grid Responsive</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-gray-200 h-16 rounded flex items-center justify-center">
                  <span className="text-sm text-gray-600">Item {item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-800 mb-3">Flexbox Responsive</h4>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 bg-gray-200 h-16 rounded flex items-center justify-center">
                <span className="text-sm text-gray-600">Flex Item 1</span>
              </div>
              <div className="flex-1 bg-gray-200 h-16 rounded flex items-center justify-center">
                <span className="text-sm text-gray-600">Flex Item 2</span>
              </div>
              <div className="flex-1 bg-gray-200 h-16 rounded flex items-center justify-center">
                <span className="text-sm text-gray-600">Flex Item 3</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Layouts de Página */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Layouts de Página</h3>
        <div className="space-y-6">
          {/* Layout Centrado */}
          <div>
            <h4 className="text-sm font-medium text-gray-800 mb-3">Layout Centrado</h4>
            <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-lg p-6">
              <div className="bg-gray-100 h-32 rounded flex items-center justify-center">
                <span className="text-gray-600">Contenido Centrado (max-w-4xl)</span>
              </div>
            </div>
          </div>

          {/* Layout con Sidebar */}
          <div>
            <h4 className="text-sm font-medium text-gray-800 mb-3">Layout con Sidebar</h4>
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-64 bg-gray-100 p-4">
                  <h5 className="font-medium text-gray-800 mb-2">Sidebar</h5>
                  <div className="space-y-2">
                    <div className="h-8 bg-gray-200 rounded"></div>
                    <div className="h-8 bg-gray-200 rounded"></div>
                    <div className="h-8 bg-gray-200 rounded"></div>
                  </div>
                </div>
                <div className="flex-1 p-6">
                  <h5 className="font-medium text-gray-800 mb-4">Contenido Principal</h5>
                  <div className="space-y-4">
                    <div className="h-16 bg-gray-100 rounded"></div>
                    <div className="h-16 bg-gray-100 rounded"></div>
                    <div className="h-16 bg-gray-100 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Layout de Header y Footer */}
          <div>
            <h4 className="text-sm font-medium text-gray-800 mb-3">Layout Completo</h4>
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-100 p-4 border-b border-gray-200">
                <h5 className="font-medium text-gray-800">Header</h5>
              </div>
              <div className="p-6">
                <h5 className="font-medium text-gray-800 mb-4">Contenido Principal</h5>
                <div className="space-y-4">
                  <div className="h-12 bg-gray-100 rounded"></div>
                  <div className="h-12 bg-gray-100 rounded"></div>
                  <div className="h-12 bg-gray-100 rounded"></div>
                </div>
              </div>
              <div className="bg-gray-100 p-4 border-t border-gray-200">
                <h5 className="font-medium text-gray-800">Footer</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Espaciado */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Sistema de Espaciado</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium text-gray-800 mb-3">Espaciado Vertical</h4>
            <div className="space-y-1">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-gray-200 rounded mr-2"></div>
                <span className="text-sm text-gray-600">space-y-1 (0.25rem)</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-200 rounded mr-2"></div>
                <span className="text-sm text-gray-600">space-y-2 (0.5rem)</span>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded mr-2"></div>
                <span className="text-sm text-gray-600">space-y-4 (1rem)</span>
              </div>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gray-200 rounded mr-2"></div>
                <span className="text-sm text-gray-600">space-y-6 (1.5rem)</span>
              </div>
              <div className="flex items-center">
                <div className="w-20 h-20 bg-gray-200 rounded mr-2"></div>
                <span className="text-sm text-gray-600">space-y-8 (2rem)</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-800 mb-3">Padding y Margin</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-100 p-4 rounded">
                <h5 className="text-sm font-medium text-gray-800 mb-2">Padding</h5>
                <div className="space-y-2">
                  <div className="bg-white p-1 rounded text-xs">p-1</div>
                  <div className="bg-white p-2 rounded text-xs">p-2</div>
                  <div className="bg-white p-4 rounded text-xs">p-4</div>
                  <div className="bg-white p-6 rounded text-xs">p-6</div>
                </div>
              </div>
              <div className="bg-gray-100 p-4 rounded">
                <h5 className="text-sm font-medium text-gray-800 mb-2">Margin</h5>
                <div className="space-y-2">
                  <div className="bg-white m-1 rounded text-xs">m-1</div>
                  <div className="bg-white m-2 rounded text-xs">m-2</div>
                  <div className="bg-white m-4 rounded text-xs">m-4</div>
                  <div className="bg-white m-6 rounded text-xs">m-6</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenedores */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Contenedores</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium text-gray-800 mb-3">Anchos de Contenedor</h4>
            <div className="space-y-4">
              <div className="max-w-xs mx-auto bg-gray-200 h-12 rounded flex items-center justify-center">
                <span className="text-sm text-gray-600">max-w-xs (20rem)</span>
              </div>
              <div className="max-w-sm mx-auto bg-gray-200 h-12 rounded flex items-center justify-center">
                <span className="text-sm text-gray-600">max-w-sm (24rem)</span>
              </div>
              <div className="max-w-md mx-auto bg-gray-200 h-12 rounded flex items-center justify-center">
                <span className="text-sm text-gray-600">max-w-md (28rem)</span>
              </div>
              <div className="max-w-lg mx-auto bg-gray-200 h-12 rounded flex items-center justify-center">
                <span className="text-sm text-gray-600">max-w-lg (32rem)</span>
              </div>
              <div className="max-w-xl mx-auto bg-gray-200 h-12 rounded flex items-center justify-center">
                <span className="text-sm text-gray-600">max-w-xl (36rem)</span>
              </div>
              <div className="max-w-2xl mx-auto bg-gray-200 h-12 rounded flex items-center justify-center">
                <span className="text-sm text-gray-600">max-w-2xl (42rem)</span>
              </div>
              <div className="max-w-4xl mx-auto bg-gray-200 h-12 rounded flex items-center justify-center">
                <span className="text-sm text-gray-600">max-w-4xl (56rem)</span>
              </div>
              <div className="max-w-6xl mx-auto bg-gray-200 h-12 rounded flex items-center justify-center">
                <span className="text-sm text-gray-600">max-w-6xl (72rem)</span>
              </div>
              <div className="max-w-7xl mx-auto bg-gray-200 h-12 rounded flex items-center justify-center">
                <span className="text-sm text-gray-600">max-w-7xl (80rem)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Guía de Uso */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Guía de Uso</h3>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Sistema de Grid</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <span className="font-medium">12 columnas:</span> Base del sistema</li>
                <li>• <span className="font-medium">Responsive:</span> Adaptable a dispositivos</li>
                <li>• <span className="font-medium">Flexbox:</span> Para layouts flexibles</li>
                <li>• <span className="font-medium">Grid:</span> Para layouts estructurados</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Mejores Prácticas</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Usar contenedores apropiados para el contenido</li>
                <li>• Mantener consistencia en el espaciado</li>
                <li>• Considerar la jerarquía visual</li>
                <li>• Optimizar para diferentes tamaños de pantalla</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 