import {
  // Layout Components
  Card,
  CardContent,
  // Typography Components
  Heading2,
  Heading3,
  Heading4,
  BodyMedium,
  BodySmall,
  Label,
  // Button Components
  Button,
  // Form Components
  Checkbox,
  // Utility Components
  Badge,
} from '@/components/ui';

type BasicCard = {
  title: string;
  content: string;
  variant?: 'default' | 'elevated' | 'outlined';
  interactive?: boolean;
  badge?: {
    text: string;
    variant: 'success' | 'info';
  };
  action?: {
    primary?: {
      text: string;
      onClick?: () => void;
    };
    secondary?: {
      text: string;
      onClick?: () => void;
    };
  };
};

type ProductCard = {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
};

type StatCard = {
  title: string;
  value: string;
  icon: string;
  variant: 'primary' | 'success' | 'warning' | 'info';
};

type NotificationCard = {
  text: string;
  time: string;
  unread: boolean;
};

export default function Cards() {
  const basicCards: BasicCard[] = [
    {
      title: 'Tarjeta Simple',
      content: 'Esta es una tarjeta básica con contenido simple. Perfecta para mostrar información concisa y directa.',
    },
    {
      title: 'Tarjeta con Acciones',
      content: 'Tarjeta que incluye botones de acción para interactuar con el contenido.',
      action: {
        primary: { text: 'Acción' },
        secondary: { text: 'Cancelar' },
      },
    },
    {
      title: 'Tarjeta con Badge',
      content: 'Tarjeta que incluye un badge para mostrar el estado o categoría del contenido.',
      badge: {
        text: 'Activo',
        variant: 'success',
      },
    },
  ];

  const imageCards: BasicCard[] = [
    {
      title: 'Tarjeta con Imagen Superior',
      content: 'Tarjeta con imagen en la parte superior y contenido debajo.',
      action: {
        primary: { text: 'Leer más →' },
      },
    },
    {
      title: 'Tarjeta con Imagen Lateral',
      content: 'Tarjeta con imagen en el lado izquierdo y contenido a la derecha.',
      action: {
        primary: { text: 'Ver detalles →' },
      },
    },
    {
      title: 'Tarjeta con Overlay',
      content: 'Tarjeta con imagen y badge superpuesto para destacar información importante.',
      badge: {
        text: 'Nuevo',
        variant: 'info',
      },
    },
  ];

  const products: ProductCard[] = [
    { id: 1, name: 'Producto 1', category: 'Categoría del producto', price: '$99.99', image: 'imagen1' },
    { id: 2, name: 'Producto 2', category: 'Categoría del producto', price: '$99.99', image: 'imagen2' },
    { id: 3, name: 'Producto 3', category: 'Categoría del producto', price: '$99.99', image: 'imagen3' },
    { id: 4, name: 'Producto 4', category: 'Categoría del producto', price: '$99.99', image: 'imagen4' },
  ];

  const stats: StatCard[] = [
    { title: 'Ventas Totales', value: '$45,231', icon: '📊', variant: 'primary' },
    { title: 'Usuarios', value: '2,345', icon: '👥', variant: 'success' },
    { title: 'Crecimiento', value: '+12.5%', icon: '📈', variant: 'warning' },
    { title: 'Objetivos', value: '89%', icon: '🎯', variant: 'info' },
  ];

  const tasks = ['Completar diseño', 'Revisar código', 'Hacer pruebas', 'Desplegar'];

  const notifications: NotificationCard[] = [
    { text: 'Nuevo mensaje recibido', time: '2 min ago', unread: true },
    { text: 'Actualización completada', time: '1 hour ago', unread: false },
    { text: 'Tarea asignada', time: '3 hours ago', unread: true },
  ];

  const interactiveCards: BasicCard[] = [
    {
      title: 'Tarjeta Hover',
      content: 'Esta tarjeta cambia de sombra al pasar el mouse por encima.',
      interactive: true,
      variant: 'default',
    },
    {
      title: 'Tarjeta con Borde',
      content: 'Esta tarjeta cambia el color del borde al hacer hover.',
      interactive: true,
      variant: 'outlined',
    },
    {
      title: 'Tarjeta con Fondo',
      content: 'Esta tarjeta cambia el color de fondo al hacer hover.',
      interactive: true,
      variant: 'elevated',
    },
  ];
  return (
    <div className="space-y-8">
      <div>
        <Heading2 className="mb-4">Tarjetas</Heading2>
        <BodyMedium className="mb-6">
          Componentes de tarjeta versátiles para mostrar contenido organizado
          con diferentes layouts y variantes para diversos casos de uso.
        </BodyMedium>
      </div>

      {/* Tarjetas Básicas */}
      <div>
        <Heading3 className="mb-4">Tarjetas Básicas</Heading3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {basicCards.map((card, index) => (
            <Card key={index} interactive={card.interactive} variant={card.variant}>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <Heading4>{card.title}</Heading4>
                  {card.badge && (
                    <Badge variant={card.badge.variant}>{card.badge.text}</Badge>
                  )}
                </div>
                <BodyMedium className="mb-4">{card.content}</BodyMedium>
                {card.action && (
                  <div className="flex space-x-2">
                    {card.action.primary && (
                      <Button
                        variant="primary"
                        onClick={card.action.primary.onClick}
                      >
                        {card.action.primary.text}
                      </Button>
                    )}
                    {card.action.secondary && (
                      <Button
                        variant="outline"
                        onClick={card.action.secondary.onClick}
                      >
                        {card.action.secondary.text}
                      </Button>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Tarjetas con Imágenes */}
      <div>
        <Heading3 className="mb-4">Tarjetas con Imágenes</Heading3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {imageCards.map((card, index) => (
            <Card key={index} interactive={card.interactive} variant={card.variant}>
              <div className="h-48 bg-muted flex items-center justify-center">
                <BodySmall>Imagen</BodySmall>
              </div>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <Heading4>{card.title}</Heading4>
                  {card.badge && (
                    <Badge variant={card.badge.variant}>{card.badge.text}</Badge>
                  )}
                </div>
                <BodyMedium className="mb-4">{card.content}</BodyMedium>
                {card.action?.primary && (
                  <Button variant="ghost">
                    {card.action.primary.text}
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Tarjetas de Producto */}
      <div>
        <Heading3 className="mb-4">Tarjetas de Producto</Heading3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id}>
              <div className="h-48 bg-muted flex items-center justify-center">
                <BodySmall>Producto {product.id}</BodySmall>
              </div>
              <CardContent>
                <Heading4 className="mb-1">{product.name}</Heading4>
                <BodySmall className="text-muted-foreground mb-2">{product.category}</BodySmall>
                <div className="flex items-center justify-between">
                  <Label className="text-lg">{product.price}</Label>
                  <Button variant="primary" size="sm">Agregar</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Tarjetas de Estadísticas */}
      <div>
        <Heading3 className="mb-4">Tarjetas de Estadísticas</Heading3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className={`w-8 h-8 bg-${stat.variant} bg-opacity-10 rounded-lg flex items-center justify-center`}>
                      <span className={`text-${stat.variant} text-sm`}>{stat.icon}</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <BodySmall className="text-muted-foreground">{stat.title}</BodySmall>
                    <Label className="text-2xl">{stat.value}</Label>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Tarjetas de Lista */}
      <div>
        <Heading3 className="mb-4">Tarjetas de Lista</Heading3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent>
              <Heading4 className="mb-4">Lista de Tareas</Heading4>
              <div className="space-y-3">
                {tasks.map((task, index) => (
                  <Checkbox
                    key={index}
                    label={task}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Heading4 className="mb-4">Notificaciones</Heading4>
              <div className="space-y-3">
                {notifications.map((notification, index) => (
                  <Card key={index} variant="outlined" className="p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {notification.unread && (
                          <div className="w-2 h-2 bg-info rounded-full mr-3" />
                        )}
                        <BodySmall>{notification.text}</BodySmall>
                      </div>
                      <BodySmall className="text-muted-foreground">{notification.time}</BodySmall>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Tarjetas Interactivas */}
      <div>
        <Heading3 className="mb-4">Tarjetas Interactivas</Heading3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interactiveCards.map((card, index) => (
            <Card
              key={index}
              interactive
              variant={card.variant}
            >
              <CardContent>
                <Heading4 className="mb-2">{card.title}</Heading4>
                <BodyMedium>{card.content}</BodyMedium>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Guía de Uso */}
      <div>
        <Heading3 className="mb-4">Guía de Uso</Heading3>
        <Card variant="outlined">
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Heading4 className="mb-2">Tipos de Tarjetas</Heading4>
                <ul className="space-y-1">
                  <li><Label>Básicas:</Label> <BodySmall className="inline">Contenido simple</BodySmall></li>
                  <li><Label>Con Imágenes:</Label> <BodySmall className="inline">Contenido visual</BodySmall></li>
                  <li><Label>De Producto:</Label> <BodySmall className="inline">Catálogos y tiendas</BodySmall></li>
                  <li><Label>De Estadísticas:</Label> <BodySmall className="inline">Métricas y KPIs</BodySmall></li>
                </ul>
              </div>
              <div>
                <Heading4 className="mb-2">Mejores Prácticas</Heading4>
                <ul className="space-y-1">
                  <li><BodySmall>• Mantener consistencia en el espaciado</BodySmall></li>
                  <li><BodySmall>• Usar sombras sutiles para profundidad</BodySmall></li>
                  <li><BodySmall>• Incluir estados hover cuando sea apropiado</BodySmall></li>
                  <li><BodySmall>• Asegurar contraste suficiente en el texto</BodySmall></li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 