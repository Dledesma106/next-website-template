import { Button } from "../ui";
import { BodyMedium, Heading2, Heading3 } from "../ui/Typography";

export default function Navigation() {
  return (
    <div className="space-y-8">
      <div>
        <Heading2 className="text-2xl font-bold text-gray-900 mb-4">Navegación</Heading2>
        <BodyMedium className="text-gray-600 mb-6">
          Componentes de navegación y menús para estructurar la información
          y facilitar la navegación en la aplicación.
        </BodyMedium>
      </div>

      {/* Navegación Principal */}
      <div>
        <Heading3 className="text-lg font-semibold text-gray-800 mb-4">Navegación Principal</Heading3>
        <div className="space-y-4">
          {/* Header con Logo y Menú */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-900 rounded mr-3"></div>
                <span className="text-xl font-bold text-gray-900">Logo</span>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="#" className="text-gray-900 font-medium hover:text-gray-700">Inicio</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Productos</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Servicios</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Acerca de</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Contacto</a>
              </nav>
              <div className="flex items-center space-x-4">
                <Button className="text-gray-600 hover:text-gray-900">
                  <span className="sr-only">Buscar</span>
                  🔍
                </Button>
                <Button className="px-4 py-2 text-sm font-medium bg-gray-900 text-white rounded-md hover:bg-gray-800">
                  Iniciar Sesión
                </Button>
              </div>
            </div>
          </div>

          {/* Navegación con Dropdown */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-900 rounded mr-3"></div>
                <span className="text-xl font-bold text-gray-900">Logo</span>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="#" className="text-gray-900 font-medium hover:text-gray-700">Inicio</a>
                <div className="relative group">
                  <button className="text-gray-600 hover:text-gray-900 flex items-center">
                    Productos
                    <span className="ml-1">▼</span>
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Categoría 1</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Categoría 2</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Categoría 3</a>
                    </div>
                  </div>
                </div>
                <a href="#" className="text-gray-600 hover:text-gray-900">Servicios</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Acerca de</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Contacto</a>
              </nav>
              <div className="flex items-center space-x-4">
                <button className="md:hidden text-gray-600 hover:text-gray-900">
                  <span className="sr-only">Menú</span>
                  ☰
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navegación Secundaria */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Navegación Secundaria</h3>
        <div className="space-y-4">
          {/* Breadcrumbs */}
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2">
                <li>
                  <a href="#" className="text-gray-500 hover:text-gray-700">Inicio</a>
                </li>
                <li>
                  <span className="text-gray-400">/</span>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-gray-700">Productos</a>
                </li>
                <li>
                  <span className="text-gray-400">/</span>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-gray-700">Categoría</a>
                </li>
                <li>
                  <span className="text-gray-400">/</span>
                </li>
                <li>
                  <span className="text-gray-900">Producto Actual</span>
                </li>
              </ol>
            </nav>
          </div>

          {/* Tabs */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-6">
                <button className="py-4 px-1 border-b-2 border-gray-900 text-gray-900 font-medium text-sm">
                  General
                </button>
                <button className="py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 font-medium text-sm">
                  Configuración
                </button>
                <button className="py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 font-medium text-sm">
                  Seguridad
                </button>
                <button className="py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 font-medium text-sm">
                  Notificaciones
                </button>
              </nav>
            </div>
            <div className="p-6">
              <p className="text-gray-600">Contenido de la pestaña activa</p>
            </div>
          </div>

          {/* Paginación */}
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <nav className="flex items-center justify-between">
              <div className="flex-1 flex justify-between sm:hidden">
                <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  Anterior
                </button>
                <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  Siguiente
                </button>
              </div>
              <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-gray-700">
                    Mostrando <span className="font-medium">1</span> a <span className="font-medium">10</span> de{' '}
                    <span className="font-medium">97</span> resultados
                  </p>
                </div>
                <div>
                  <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                    <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                      ←
                    </button>
                    <button className="bg-gray-900 border-gray-300 text-white relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                      1
                    </button>
                    <button className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                      2
                    </button>
                    <button className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                      3
                    </button>
                    <button className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                      4
                    </button>
                    <button className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                      5
                    </button>
                    <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                      →
                    </button>
                  </nav>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Navegación Lateral */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Navegación Lateral</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sidebar Simple */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900">Menú</h4>
            </div>
            <nav className="p-4">
              <div className="space-y-2">
                <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-900 bg-gray-100 rounded-md">
                  📊 Dashboard
                </a>
                <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md">
                  👥 Usuarios
                </a>
                <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md">
                  📦 Productos
                </a>
                <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md">
                  📈 Reportes
                </a>
                <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md">
                  ⚙️ Configuración
                </a>
              </div>
            </nav>
          </div>

          {/* Sidebar con Grupos */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900">Administración</h4>
            </div>
            <nav className="p-4">
              <div className="space-y-6">
                <div>
                  <h5 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Gestión
                  </h5>
                  <div className="space-y-1">
                    <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md">
                      👥 Usuarios
                    </a>
                    <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md">
                      🏢 Empresas
                    </a>
                    <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md">
                      📋 Proyectos
                    </a>
                  </div>
                </div>
                <div>
                  <h5 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Configuración
                  </h5>
                  <div className="space-y-1">
                    <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md">
                      ⚙️ General
                    </a>
                    <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md">
                      🔒 Seguridad
                    </a>
                    <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md">
                      📧 Notificaciones
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          {/* Sidebar con Iconos */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900">Accesos Rápidos</h4>
            </div>
            <nav className="p-4">
              <div className="grid grid-cols-2 gap-4">
                <a href="#" className="flex flex-col items-center p-4 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg">
                  <span className="text-2xl mb-2">📊</span>
                  Dashboard
                </a>
                <a href="#" className="flex flex-col items-center p-4 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg">
                  <span className="text-2xl mb-2">👥</span>
                  Usuarios
                </a>
                <a href="#" className="flex flex-col items-center p-4 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg">
                  <span className="text-2xl mb-2">📦</span>
                  Productos
                </a>
                <a href="#" className="flex flex-col items-center p-4 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg">
                  <span className="text-2xl mb-2">📈</span>
                  Reportes
                </a>
                <a href="#" className="flex flex-col items-center p-4 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg">
                  <span className="text-2xl mb-2">⚙️</span>
                  Config
                </a>
                <a href="#" className="flex flex-col items-center p-4 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg">
                  <span className="text-2xl mb-2">❓</span>
                  Ayuda
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Navegación Móvil */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Navegación Móvil</h3>
        <div className="space-y-4">
          {/* Bottom Navigation */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="flex items-center justify-around py-4">
              <a href="#" className="flex flex-col items-center text-gray-900">
                <span className="text-xl mb-1">🏠</span>
                <span className="text-xs">Inicio</span>
              </a>
              <a href="#" className="flex flex-col items-center text-gray-600">
                <span className="text-xl mb-1">🔍</span>
                <span className="text-xs">Buscar</span>
              </a>
              <a href="#" className="flex flex-col items-center text-gray-600">
                <span className="text-xl mb-1">📦</span>
                <span className="text-xs">Productos</span>
              </a>
              <a href="#" className="flex flex-col items-center text-gray-600">
                <span className="text-xl mb-1">👤</span>
                <span className="text-xs">Perfil</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gray-900 rounded mr-3"></div>
                  <span className="text-lg font-bold text-gray-900">Logo</span>
                </div>
                <button className="text-gray-600 hover:text-gray-900">
                  <span className="sr-only">Cerrar menú</span>
                  ✕
                </button>
              </div>
            </div>
            <nav className="p-4">
              <div className="space-y-4">
                <a href="#" className="block text-lg font-medium text-gray-900">Inicio</a>
                <a href="#" className="block text-lg font-medium text-gray-600 hover:text-gray-900">Productos</a>
                <a href="#" className="block text-lg font-medium text-gray-600 hover:text-gray-900">Servicios</a>
                <a href="#" className="block text-lg font-medium text-gray-600 hover:text-gray-900">Acerca de</a>
                <a href="#" className="block text-lg font-medium text-gray-600 hover:text-gray-900">Contacto</a>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-200">
                <button className="w-full px-4 py-2 text-sm font-medium bg-gray-900 text-white rounded-md hover:bg-gray-800">
                  Iniciar Sesión
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Guía de Uso */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Guía de Uso</h3>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Tipos de Navegación</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <span className="font-medium">Principal:</span> Navegación del sitio</li>
                <li>• <span className="font-medium">Secundaria:</span> Breadcrumbs, tabs, paginación</li>
                <li>• <span className="font-medium">Lateral:</span> Sidebars y menús laterales</li>
                <li>• <span className="font-medium">Móvil:</span> Navegación para dispositivos móviles</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Mejores Prácticas</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Mantener consistencia en toda la aplicación</li>
                <li>• Usar estados activos claros</li>
                <li>• Proporcionar navegación accesible</li>
                <li>• Optimizar para diferentes dispositivos</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 