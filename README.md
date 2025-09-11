# Plantilla de Sitio Web Dinámico

Una plantilla completa de sitio web construida con Next.js que permite la gestión dinámica de contenido a través de un backoffice administrativo.

## 🎯 Características

- **Frontend Público**: Sitio web estático con renderizado del lado del servidor (SSR/SSG)
- **Backoffice Administrativo**: Panel de administración con autenticación y autorización
- **Sistema de Diseño**: Wireframe en escala de grises para fácil personalización
- **API GraphQL**: Endpoints GraphQL con Yoga y Pothos
- **Base de Datos**: MongoDB con Prisma como ORM
- **Gestión de Estado**: React Query para el frontend administrativo

## 🏗️ Arquitectura

### Frontend Público
- **Framework**: Next.js con App Router
- **Renderizado**: `getServerSideProps` y `getStaticProps` para SEO optimizado
- **Diseño**: Sistema de componentes en escala de grises (wireframe)
- **Estilos**: CSS Modules o Tailwind CSS

### Backoffice Administrativo
- **Autenticación**: Sistema de login/logout con JWT
- **Autorización**: Control de acceso basado en roles
- **Gestión de Estado**: React Query para cache y sincronización
- **UI**: Componentes administrativos con sistema de diseño

### Backend
- **API Routes**: Next.js API Routes
- **GraphQL**: GraphQL Yoga como servidor
- **Schema**: Pothos para construcción de esquemas
- **Base de Datos**: MongoDB
- **ORM**: Prisma para modelado y consultas

## 🚀 Tecnologías

### Frontend
- Next.js 14+ (App Router)
- React 18+
- TypeScript
- React Query (TanStack Query)
- Sistema de diseño wireframe

### Backend
- Next.js API Routes
- GraphQL Yoga
- Pothos
- Prisma ORM
- MongoDB
- JWT para autenticación

### Herramientas de Desarrollo
- ESLint
- Prettier
- TypeScript
- Prisma Studio

## 📁 Estructura del Proyecto

```
├── src/                   # Frontend (Next.js)
│   ├── app/              # Next.js App Router
│   │   ├── api/          # API Routes
│   │   │   └── graphql/  # Endpoint GraphQL
│   │   ├── blog/         # Página del blog
│   │   ├── system-design/# Demo del sistema de diseño
│   │   ├── components/   # Demo de componentes UI
│   │   ├── globals.css   # Estilos globales
│   │   ├── layout.tsx    # Layout principal
│   │   └── page.tsx      # Página principal
│   ├── components/       # Componentes reutilizables
│   │   ├── ui/          # Componentes base del sistema de diseño
│   │   ├── layout/      # Componentes de layout (Navigation, Footer)
│   │   └── system-design/# Componentes del demo de diseño
│   └── types/           # Tipos de TypeScript
├── backend/              # Backend (GraphQL + Prisma)
│   ├── config/          # Configuraciones
│   ├── graphql/         # GraphQL (schema, resolvers, server)
│   ├── lib/             # Utilidades (Prisma client)
│   ├── prisma/          # Esquema de base de datos
│   └── scripts/         # Scripts (seed, etc.)
└── public/              # Archivos estáticos
```

## 🛠️ Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd next-website-template
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   
   Crear archivo `.env` en la raíz del proyecto:
   ```env
   # Database
   DATABASE_URL="mongodb://localhost:27017/website-template"
   
   # JWT
   JWT_SECRET="your-super-secret-jwt-key-change-in-production"


4. **Configurar base de datos**
   ```bash
   # Generar cliente Prisma
   npm run db:generate
   
   # Sincronizar esquema con la base de datos
   npm run db:push
   
   # Poblar con datos de ejemplo
   npm run db:seed
   ```
   DATABASE_URL="mongodb://localhost:27017/website-template"
   JWT_SECRET="tu-secreto-jwt"
   NEXTAUTH_SECRET="tu-secreto-nextauth"
   ```

4. **Configurar la base de datos**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   ```

   El servidor estará disponible en `http://localhost:3000`
   - **Sitio web:** http://localhost:3000
   - **GraphQL API:** http://localhost:3000/api/graphql
   - **Sistema de diseño:** http://localhost:3000/system-design
   - **Demo de componentes:** http://localhost:3000/components

## 🎨 Sistema de Diseño

El sistema de diseño utiliza una escala de grises tipo wireframe que permite:

- **Rápida personalización**: Cambiar colores fácilmente para nuevos proyectos
- **Consistencia visual**: Componentes base reutilizables
- **Accesibilidad**: Alto contraste y legibilidad
- **Responsive**: Diseño adaptable a todos los dispositivos

### Paleta de Colores Base
- **Grises**: `#f8f9fa`, `#e9ecef`, `#dee2e6`, `#ced4da`, `#adb5bd`, `#6c757d`, `#495057`, `#343a40`, `#212529`
- **Acentos**: Colores personalizables por proyecto

## 📊 Funcionalidades del Backoffice

### Gestión de Contenido (ABM)
- **Páginas**: Crear, editar, eliminar páginas del sitio
- **Contenido**: Gestión de textos, imágenes y multimedia
- **Navegación**: Configuración de menús y estructura del sitio
- **Configuración**: Ajustes generales del sitio web

### Autenticación y Autorización
- **Login/Logout**: Sistema de autenticación seguro
- **Roles**: Diferentes niveles de acceso
- **Sesiones**: Gestión de sesiones de usuario

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo
npm run build        # Construir para producción
npm run start        # Servidor de producción

# Base de datos
npm run db:generate  # Generar cliente Prisma
npm run db:push      # Sincronizar esquema con DB
npm run db:studio    # Abrir Prisma Studio

# Linting y formateo
npm run lint         # Ejecutar ESLint
npm run format       # Formatear código con Prettier
```

## 🚀 Despliegue

### Vercel (Recomendado)
1. Conectar repositorio a Vercel
2. Configurar variables de entorno
3. Desplegar automáticamente

### Otros Proveedores
- **Netlify**: Compatible con Next.js
- **Railway**: Soporte nativo para MongoDB
- **DigitalOcean**: App Platform

## 🤝 Contribución

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🆘 Soporte

Si tienes preguntas o necesitas ayuda:
- Abrir un issue en GitHub
- Revisar la documentación de las tecnologías utilizadas
- Contactar al equipo de desarrollo

---

**Desarrollado con ❤️ usando Next.js, GraphQL y MongoDB**
