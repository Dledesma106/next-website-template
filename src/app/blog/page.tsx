'use client';
import {
  Card,
  CardContent,
  Heading1,
  Heading2,
  Heading3,
  BodyLarge,
  BodyMedium,
  BodySmall,
  Label,
  Button,
  Badge,
} from '@/components/ui';
import { Navigation, Footer } from '@/components/layout';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: 'Estrategias de Marketing Digital para Empresas Locales',
      excerpt: 'Descubre cómo implementar estrategias efectivas de marketing digital que generen resultados reales para tu negocio local.',
      author: 'Laura Sánchez',
      date: '15 de Marzo, 2024',
      category: 'Marketing Digital',
      readTime: '5 min lectura',
      featured: true,
    },
    {
      id: 2,
      title: 'La Importancia de la Transformación Digital en 2024',
      excerpt: 'Explora por qué la transformación digital es crucial para mantenerse competitivo en el mercado actual.',
      author: 'Juan Pérez',
      date: '12 de Marzo, 2024',
      category: 'Transformación Digital',
      readTime: '7 min lectura',
      featured: false,
    },
    {
      id: 3,
      title: 'Cómo Optimizar tu Sitio Web para Conversiones',
      excerpt: 'Técnicas probadas para mejorar la tasa de conversión de tu sitio web y aumentar tus ventas online.',
      author: 'Miguel Torres',
      date: '10 de Marzo, 2024',
      category: 'Desarrollo Web',
      readTime: '6 min lectura',
      featured: false,
    },
    {
      id: 4,
      title: 'Tendencias de Diseño UX/UI para Negocios Locales',
      excerpt: 'Las últimas tendencias en diseño que pueden ayudar a tu negocio local a destacar en el mundo digital.',
      author: 'Ana Martínez',
      date: '8 de Marzo, 2024',
      category: 'Diseño',
      readTime: '4 min lectura',
      featured: false,
    },
    {
      id: 5,
      title: 'ROI en Marketing Digital: Cómo Medir el Éxito',
      excerpt: 'Aprende a medir y optimizar el retorno de inversión de tus campañas de marketing digital.',
      author: 'Laura Sánchez',
      date: '5 de Marzo, 2024',
      category: 'Marketing Digital',
      readTime: '8 min lectura',
      featured: false,
    },
    {
      id: 6,
      title: 'Automatización de Procesos: Ahorra Tiempo y Dinero',
      excerpt: 'Descubre cómo la automatización puede optimizar los procesos de tu empresa y mejorar la eficiencia.',
      author: 'Juan Pérez',
      date: '2 de Marzo, 2024',
      category: 'Automatización',
      readTime: '6 min lectura',
      featured: false,
    },
  ];

  const categories = [
    'Todos',
    'Marketing Digital',
    'Transformación Digital',
    'Desarrollo Web',
    'Diseño',
    'Automatización',
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <Navigation showInternalLinks={false} />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="info" className="mb-4">Blog</Badge>
            <Heading1 className="mb-6">
              Insights y Estrategias para 
              <span className="block">el Éxito Empresarial</span>
            </Heading1>
            <BodyLarge className="max-w-3xl mx-auto">
              Mantente actualizado con las últimas tendencias, estrategias y mejores 
              prácticas en marketing digital, tecnología y crecimiento empresarial.
            </BodyLarge>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "primary" : "outline"}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Label className="text-primary">Artículo Destacado</Label>
            </div>
            <Card variant="elevated" interactive>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="h-64 lg:h-96 bg-muted flex items-center justify-center">
                  <BodyMedium>Imagen del Artículo</BodyMedium>
                </div>
                <CardContent>
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <Badge variant="success">{featuredPost.category}</Badge>
                        <BodySmall className="text-muted-foreground">
                          {featuredPost.readTime}
                        </BodySmall>
                      </div>
                      <Heading2 className="mb-4">{featuredPost.title}</Heading2>
                      <BodyLarge className="mb-6">{featuredPost.excerpt}</BodyLarge>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary bg-opacity-10 rounded-full flex items-center justify-center">
                            <span className="text-primary font-semibold text-sm">
                              {featuredPost.author.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <Label>{featuredPost.author}</Label>
                            <BodySmall className="text-muted-foreground">{featuredPost.date}</BodySmall>
                          </div>
                        </div>
                      </div>
                      <Button variant="primary">Leer Artículo Completo</Button>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <Heading2 className="mb-4">Últimos Artículos</Heading2>
            <BodyMedium className="text-muted-foreground">
              Explora nuestros artículos más recientes sobre estrategias empresariales y tecnología.
            </BodyMedium>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} interactive>
                <div className="h-48 bg-surface flex items-center justify-center">
                  <BodyMedium>Imagen del Post</BodyMedium>
                </div>
                <CardContent>
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="info" className="text-xs">{post.category}</Badge>
                    <BodySmall className="text-muted-foreground">{post.readTime}</BodySmall>
                  </div>
                  <Heading3 className="mb-3 line-clamp-2">{post.title}</Heading3>
                  <BodyMedium className="mb-4 text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </BodyMedium>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-primary bg-opacity-10 rounded-full flex items-center justify-center">
                        <span className="text-primary font-semibold text-xs">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <BodySmall className="font-medium">{post.author}</BodySmall>
                        <BodySmall className="text-muted-foreground text-xs">{post.date}</BodySmall>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">Leer más →</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card variant="elevated" className="text-center">
            <CardContent>
              <div className="py-12 max-w-2xl mx-auto">
                <Heading2 className="mb-4">Mantente Actualizado</Heading2>
                <BodyLarge className="mb-8">
                  Suscríbete a nuestro newsletter y recibe los últimos artículos, 
                  insights y estrategias directamente en tu bandeja de entrada.
                </BodyLarge>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <div className="flex-1">
                    <input
                      type="email"
                      placeholder="tu@email.com"
                      className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <Button variant="primary" size="lg">Suscribirse</Button>
                </div>
                <BodySmall className="mt-4 text-muted-foreground">
                  No spam. Puedes cancelar tu suscripción en cualquier momento.
                </BodySmall>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
