export default function ColorUsage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Uso de Clases de Color Semánticas</h2>
        <p className="text-gray-600 mb-6">
          Ejemplos de cómo usar las clases de color semánticas en tu código.
          Todas las clases están disponibles como utilidades de Tailwind.
        </p>
      </div>

      {/* Fondos */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Fondos (bg-*)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-surface p-4 rounded-lg border border-border">
            <h4 className="font-medium text-primary mb-2">bg-surface</h4>
            <p className="text-secondary text-sm">Fondo para tarjetas y elementos elevados</p>
          </div>
          <div className="bg-background p-4 rounded-lg border border-border">
            <h4 className="font-medium text-primary mb-2">bg-background</h4>
            <p className="text-secondary text-sm">Fondo principal de la aplicación</p>
          </div>
          <div className="bg-muted p-4 rounded-lg border border-border">
            <h4 className="font-medium text-primary mb-2">bg-muted</h4>
            <p className="text-secondary text-sm">Fondo para elementos secundarios</p>
          </div>
          <div className="bg-primary p-4 rounded-lg">
            <h4 className="font-medium text-white mb-2">bg-primary</h4>
            <p className="text-white text-sm">Fondo para elementos principales</p>
          </div>
          <div className="bg-secondary p-4 rounded-lg">
            <h4 className="font-medium text-white mb-2">bg-secondary</h4>
            <p className="text-white text-sm">Fondo para elementos secundarios</p>
          </div>
          <div className="bg-accent p-4 rounded-lg">
            <h4 className="font-medium text-white mb-2">bg-accent</h4>
            <p className="text-white text-sm">Fondo para elementos destacados</p>
          </div>
        </div>
      </div>

      {/* Textos */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Textos (text-*)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg border border-border">
            <h4 className="text-primary font-medium mb-2">text-primary</h4>
            <p className="text-secondary text-sm">Texto principal</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-border">
            <h4 className="text-secondary font-medium mb-2">text-secondary</h4>
            <p className="text-secondary text-sm">Texto secundario</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-border">
            <h4 className="text-accent font-medium mb-2">text-accent</h4>
            <p className="text-secondary text-sm">Texto destacado</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-border">
            <h4 className="text-success font-medium mb-2">text-success</h4>
            <p className="text-secondary text-sm">Texto de éxito</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-border">
            <h4 className="text-warning font-medium mb-2">text-warning</h4>
            <p className="text-secondary text-sm">Texto de advertencia</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-border">
            <h4 className="text-error font-medium mb-2">text-error</h4>
            <p className="text-secondary text-sm">Texto de error</p>
          </div>
        </div>
      </div>

      {/* Bordes */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Bordes (border-*)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg border-2 border-border">
            <h4 className="font-medium text-primary mb-2">border-border</h4>
            <p className="text-secondary text-sm">Borde estándar</p>
          </div>
          <div className="bg-white p-4 rounded-lg border-2 border-primary">
            <h4 className="font-medium text-primary mb-2">border-primary</h4>
            <p className="text-secondary text-sm">Borde principal</p>
          </div>
          <div className="bg-white p-4 rounded-lg border-2 border-accent">
            <h4 className="font-medium text-primary mb-2">border-accent</h4>
            <p className="text-secondary text-sm">Borde destacado</p>
          </div>
          <div className="bg-white p-4 rounded-lg border-2 border-success">
            <h4 className="font-medium text-primary mb-2">border-success</h4>
            <p className="text-secondary text-sm">Borde de éxito</p>
          </div>
          <div className="bg-white p-4 rounded-lg border-2 border-warning">
            <h4 className="font-medium text-primary mb-2">border-warning</h4>
            <p className="text-secondary text-sm">Borde de advertencia</p>
          </div>
          <div className="bg-white p-4 rounded-lg border-2 border-error">
            <h4 className="font-medium text-primary mb-2">border-error</h4>
            <p className="text-secondary text-sm">Borde de error</p>
          </div>
        </div>
      </div>

      {/* Botones de Ejemplo */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Botones con Colores Semánticos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors">
            Botón Primary
          </button>
          <button className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors">
            Botón Secondary
          </button>
          <button className="bg-accent text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors">
            Botón Accent
          </button>
          <button className="bg-success text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors">
            Botón Success
          </button>
          <button className="bg-warning text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors">
            Botón Warning
          </button>
          <button className="bg-error text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors">
            Botón Error
          </button>
        </div>
      </div>

      {/* Ejemplos de Código */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Ejemplos de Código</h3>
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-800 mb-3">Tarjeta con Fondo Diferenciado</h4>
              <div className="bg-white p-3 rounded border text-xs font-mono">
                <p className="text-gray-600">{'// Tarjeta con fondo surface'}</p>
                <p className="text-gray-800">{'<div className="bg-surface p-6 rounded-lg">'}</p>
                <p className="text-gray-800">{'  <h3 className="text-primary">Título</h3>'}</p>
                <p className="text-gray-800">{'  <p className="text-secondary">Contenido</p>'}</p>
                <p className="text-gray-800">{'</div>'}</p>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-3">Botón con Estados</h4>
              <div className="bg-white p-3 rounded border text-xs font-mono">
                <p className="text-gray-600">{'// Botón con colores semánticos'}</p>
                <p className="text-gray-800">{'<button className="bg-primary text-white px-4 py-2">'}</p>
                <p className="text-gray-800">{'  Guardar'}</p>
                <p className="text-gray-800">{'</button>'}</p>
                <br />
                <p className="text-gray-800">{'<button className="bg-destructive text-white px-4 py-2">'}</p>
                <p className="text-gray-800">{'  Eliminar'}</p>
                <p className="text-gray-800">{'</button>'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Guía de Uso */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Clases Disponibles</h3>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Fondos</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <span className="font-mono">bg-primary</span></li>
                <li>• <span className="font-mono">bg-secondary</span></li>
                <li>• <span className="font-mono">bg-accent</span></li>
                <li>• <span className="font-mono">bg-surface</span></li>
                <li>• <span className="font-mono">bg-background</span></li>
                <li>• <span className="font-mono">bg-muted</span></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Textos</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <span className="font-mono">text-primary</span></li>
                <li>• <span className="font-mono">text-secondary</span></li>
                <li>• <span className="font-mono">text-accent</span></li>
                <li>• <span className="font-mono">text-success</span></li>
                <li>• <span className="font-mono">text-warning</span></li>
                <li>• <span className="font-mono">text-error</span></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Bordes</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <span className="font-mono">border-border</span></li>
                <li>• <span className="font-mono">border-primary</span></li>
                <li>• <span className="font-mono">border-accent</span></li>
                <li>• <span className="font-mono">border-success</span></li>
                <li>• <span className="font-mono">border-warning</span></li>
                <li>• <span className="font-mono">border-error</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 