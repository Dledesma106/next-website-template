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

export default function LandingPage() {
  const services = [
    {
      title: 'Consultoría Estratégica',
      description: 'Desarrollamos estrategias personalizadas para impulsar el crecimiento de tu negocio.',
      icon: '🎯',
    },
    {
      title: 'Desarrollo Digital',
      description: 'Creamos soluciones digitales innovadoras que conectan con tu audiencia.',
      icon: '💻',
    },
    {
      title: 'Marketing Integral',
      description: 'Campañas de marketing efectivas que aumentan tu visibilidad y ventas.',
      icon: '📈',
    },
    {
      title: 'Soporte Continuo',
      description: 'Acompañamiento permanente para asegurar el éxito a largo plazo.',
      icon: '🤝',
    },
  ];

  const testimonials = [
    {
      name: 'María González',
      company: 'Restaurante El Sabor',
      text: 'Gracias a su trabajo, nuestras ventas aumentaron un 40% en solo 6 meses.',
      rating: 5,
    },
    {
      name: 'Carlos Ruiz',
      company: 'Taller Mecánico Ruiz',
      text: 'Profesionales excepcionales. Transformaron completamente nuestra presencia online.',
      rating: 5,
    },
    {
      name: 'Ana Martínez',
      company: 'Boutique Elegancia',
      text: 'Su estrategia de marketing nos ayudó a llegar a nuevos clientes de manera efectiva.',
      rating: 5,
    },
  ];

  const team = [
    {
      name: 'Juan Pérez',
      role: 'Director General',
      description: '15 años de experiencia en estrategia empresarial y transformación digital.',
      image: 'jp',
    },
    {
      name: 'Laura Sánchez',
      role: 'Directora de Marketing',
      description: 'Especialista en marketing digital y campañas de alto impacto.',
      image: 'ls',
    },
    {
      name: 'Miguel Torres',
      role: 'Desarrollador Senior',
      description: 'Experto en tecnología y desarrollo de soluciones innovadoras.',
      image: 'mt',
    },
  ];

  const stats = [
    { number: '150+', label: 'Clientes Satisfechos' },
    { number: '95%', label: 'Tasa de Éxito' },
    { number: '5+', label: 'Años de Experiencia' },
    { number: '24/7', label: 'Soporte Disponible' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <Card variant="elevated" className="rounded-none border-x-0 border-t-0 sticky top-0 z-50">
        <CardContent>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <Heading2>Mi Empresa</Heading2>
              </div>
              <nav className="hidden md:flex space-x-8">
                <Button variant="ghost" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  Inicio
                </Button>
                <Button variant="ghost" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                  Acerca de Nosotros
                </Button>
                <Button variant="ghost" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                  Servicios
                </Button>
                <Button variant="ghost" onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}>
                  Testimonios
                </Button>
                <Button variant="ghost" onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}>
                  Equipo
                </Button>
                <Button variant="ghost" onClick={() => window.location.href = '/blog'}>
                  Blog
                </Button>
                <Button variant="ghost" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Contacto
                </Button>
              </nav>
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm">Llamar</Button>
                <Button variant="primary" size="sm">Cotizar</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="info" className="mb-4">Tu Socio de Confianza</Badge>
              <Heading1 className="mb-6">
                Transformamos Ideas en 
                <span className="block">Resultados Reales</span>
              </Heading1>
              <BodyLarge className="mb-8">
                Somos una empresa local comprometida con el éxito de tu negocio. 
                Ofrecemos soluciones integrales que impulsan el crecimiento y 
                fortalecen tu presencia en el mercado.
              </BodyLarge>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg">Comenzar Ahora</Button>
                <Button variant="outline" size="lg">Ver Servicios</Button>
              </div>
            </div>
            <div>
              <Card variant="elevated">
                <div className="h-96 bg-muted flex items-center justify-center">
                  <BodyMedium>Hero Image / Video</BodyMedium>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <Heading2 className="mb-2">{stat.number}</Heading2>
                <BodyMedium>{stat.label}</BodyMedium>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card variant="elevated">
                <div className="h-96 bg-muted flex items-center justify-center">
                  <BodyMedium>About Us Image</BodyMedium>
                </div>
              </Card>
            </div>
            <div>
              <Badge variant="info" className="mb-4">Acerca de Nosotros</Badge>
              <Heading2 className="mb-6">25 Años Construyendo Éxito</Heading2>
              <BodyMedium className="mb-6">
                Desde 1999, hemos ayudado a cientos de empresas locales a alcanzar 
                sus objetivos. Nuestra experiencia, combinada con un enfoque 
                personalizado, nos convierte en el aliado perfecto para tu crecimiento.
              </BodyMedium>
              <BodyMedium className="mb-8">
                Creemos en el poder de las relaciones duraderas y en el impacto 
                positivo que podemos generar en nuestra comunidad empresarial.
              </BodyMedium>
              <Button variant="primary">Conoce Nuestra Historia</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="success" className="mb-4">Nuestros Servicios</Badge>
            <Heading2 className="mb-6">Soluciones Integrales para tu Negocio</Heading2>
            <BodyLarge className="max-w-3xl mx-auto">
              Ofrecemos una gama completa de servicios diseñados para impulsar 
              el crecimiento y éxito de tu empresa.
            </BodyLarge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} interactive>
                <CardContent>
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">{service.icon}</span>
                    </div>
                    <Heading3 className="mb-3">{service.title}</Heading3>
                    <BodyMedium>{service.description}</BodyMedium>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="warning" className="mb-4">Testimonios</Badge>
            <Heading2 className="mb-6">Lo Que Dicen Nuestros Clientes</Heading2>
            <BodyLarge className="max-w-3xl mx-auto">
              La satisfacción de nuestros clientes es nuestra mayor recompensa. 
              Estas son algunas de sus experiencias trabajando con nosotros.
            </BodyLarge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} variant="elevated">
                <CardContent>
                  <div className="mb-4">
                    <div className="flex mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-warning">⭐</span>
                      ))}
                    </div>
                    <BodyMedium className="mb-4">&quot;{testimonial.text}&quot;</BodyMedium>
                  </div>
                  <div>
                    <Label className="font-semibold">{testimonial.name}</Label>
                    <BodySmall className="text-muted-foreground">{testimonial.company}</BodySmall>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="info" className="mb-4">Nuestro Equipo</Badge>
            <Heading2 className="mb-6">Profesionales Comprometidos</Heading2>
            <BodyLarge className="max-w-3xl mx-auto">
              Conoce a las personas que hacen posible el éxito de tu proyecto.
            </BodyLarge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} interactive>
                <div className="h-64 bg-surface flex items-center justify-center">
                  <BodyMedium>Foto {member.image.toUpperCase()}</BodyMedium>
                </div>
                <CardContent>
                  <div className="text-center">
                    <Heading3 className="mb-1">{member.name}</Heading3>
                    <Label className="text-primary mb-3 block">{member.role}</Label>
                    <BodyMedium>{member.description}</BodyMedium>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card variant="elevated" className="text-center">
            <CardContent>
              <div className="py-12">
                <Heading2 className="mb-6">¿Listo para Transformar tu Negocio?</Heading2>
                <BodyLarge className="mb-8 max-w-2xl mx-auto">
                  Contáctanos hoy y descubre cómo podemos ayudarte a alcanzar 
                  tus objetivos empresariales.
                </BodyLarge>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="primary" size="lg">Solicitar Consulta Gratuita</Button>
                  <Button variant="outline" size="lg">Ver Portfolio</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <Heading3 className="mb-4 text-white">Mi Empresa</Heading3>
              <BodyMedium className="mb-4 text-gray-300">
                Tu socio de confianza para el crecimiento empresarial. 
                Transformamos ideas en resultados reales.
              </BodyMedium>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white hover:bg-opacity-20">
                  📘
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:bg-white hover:bg-opacity-20">
                  🐦
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:bg-white hover:bg-opacity-20">
                  💼
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:bg-white hover:bg-opacity-20">
                  📷
                </Button>
              </div>
            </div>

            {/* Services */}
            <div>
              <Heading3 className="mb-4 text-white">Servicios</Heading3>
              <ul className="space-y-2">
                <li><Button variant="ghost" className="text-gray-300 hover:text-white p-0 h-auto">Consultoría Estratégica</Button></li>
                <li><Button variant="ghost" className="text-gray-300 hover:text-white p-0 h-auto">Desarrollo Digital</Button></li>
                <li><Button variant="ghost" className="text-gray-300 hover:text-white p-0 h-auto">Marketing Integral</Button></li>
                <li><Button variant="ghost" className="text-gray-300 hover:text-white p-0 h-auto">Soporte Continuo</Button></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <Heading3 className="mb-4 text-white">Enlaces Rápidos</Heading3>
              <ul className="space-y-2">
                <li><Button variant="ghost" className="text-gray-300 hover:text-white p-0 h-auto">Acerca de Nosotros</Button></li>
                <li><Button variant="ghost" className="text-gray-300 hover:text-white p-0 h-auto">Portfolio</Button></li>
                <li><Button variant="ghost" className="text-gray-300 hover:text-white p-0 h-auto">Blog</Button></li>
                <li><Button variant="ghost" className="text-gray-300 hover:text-white p-0 h-auto">Carreras</Button></li>
                <li><Button variant="ghost" className="text-gray-300 hover:text-white p-0 h-auto">Políticas de Privacidad</Button></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <Heading3 className="mb-4 text-white">Contacto</Heading3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="mr-2">📍</span>
                  <BodyMedium className="text-gray-300">
                    Av. Principal 123<br />
                    Centro, Ciudad<br />
                    CP 12345
                  </BodyMedium>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">📞</span>
                  <BodyMedium className="text-gray-300">+1 (555) 123-4567</BodyMedium>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">✉️</span>
                  <BodyMedium className="text-gray-300">contacto@miempresa.com</BodyMedium>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">🕒</span>
                  <BodyMedium className="text-gray-300">Lun - Vie: 9:00 - 18:00</BodyMedium>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-white border-opacity-20 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <BodySmall className="text-gray-300">
                © 2024 Mi Empresa. Todos los derechos reservados.
              </BodySmall>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Button variant="ghost" className="text-gray-300 hover:text-white p-0 h-auto text-sm">
                  Términos de Servicio
                </Button>
                <Button variant="ghost" className="text-gray-300 hover:text-white p-0 h-auto text-sm">
                  Política de Privacidad
                </Button>
                <Button variant="ghost" className="text-gray-300 hover:text-white p-0 h-auto text-sm">
                  Cookies
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
