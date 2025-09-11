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
  Input,
  Select,
  Textarea,
  SocialIcon,
} from '@/components/ui';
import { Navigation, Footer } from '@/components/layout';

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
export default function LandingPage() {
  // Función helper para scroll suave con offset
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    const offset = 80; // Altura aproximada del navbar
    if (element) {
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };


  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <Navigation onScrollToSection={scrollToSection} />

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

       {/* Contact Section */}
       <section id="contact" className="py-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <Badge variant="info" className="mb-4">Contacto</Badge>
             <Heading2 className="mb-6">Hablemos Sobre tu Proyecto</Heading2>
             <BodyLarge className="max-w-3xl mx-auto">
               Estamos aquí para escuchar tus ideas y ayudarte a hacerlas realidad. 
               Contáctanos y comencemos a trabajar juntos.
             </BodyLarge>
           </div>
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
             {/* Contact Form */}
             <Card variant="elevated">
               <CardContent>
                 <div className="py-8">
                   <Heading3 className="mb-6">Envíanos un Mensaje</Heading3>
                                       <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                          label="Nombre *"
                          type="text"
                          required
                        />
                        <Input
                          label="Apellido *"
                          type="text"
                          required
                        />
                      </div>
                      <Input
                        label="Email *"
                        type="email"
                        required
                      />
                      <Input
                        label="Teléfono"
                        type="tel"
                      />
                      <Input
                        label="Empresa"
                        type="text"
                      />
                      <Select
                        label="Servicio de Interés"
                        options={[
                          { value: "", label: "Selecciona un servicio" },
                          { value: "consultoria", label: "Consultoría Estratégica" },
                          { value: "desarrollo", label: "Desarrollo Digital" },
                          { value: "marketing", label: "Marketing Integral" },
                          { value: "soporte", label: "Soporte Continuo" },
                          { value: "otro", label: "Otro" }
                        ]}
                      />
                      <Textarea
                        label="Mensaje *"
                        placeholder="Cuéntanos sobre tu proyecto..."
                        rows={4}
                        required
                      />
                      <Button variant="primary" className="w-full">
                        Enviar Mensaje
                      </Button>
                    </form>
                 </div>
               </CardContent>
             </Card>

             {/* Contact Info */}
             <div className="space-y-8">
               <div>
                 <Heading3 className="mb-6">Información de Contacto</Heading3>
                 <div className="space-y-4">
                   <div className="flex items-start">
                     <span className="mr-3 text-xl">📍</span>
                     <div>
                       <span className="block text-sm font-semibold text-foreground">Dirección</span>
                       <BodyMedium className="text-muted-foreground">
                         Av. Principal 123<br />
                         Centro, Ciudad<br />
                         CP 12345
                       </BodyMedium>
                     </div>
                   </div>
                   <div className="flex items-center">
                     <span className="mr-3 text-xl">📞</span>
                     <div>
                       <span className="block text-sm font-semibold text-foreground">Teléfono</span>
                       <BodyMedium className="text-muted-foreground">+1 (555) 123-4567</BodyMedium>
                     </div>
                   </div>
                   <div className="flex items-center">
                     <span className="mr-3 text-xl">✉️</span>
                     <div>
                       <span className="block text-sm font-semibold text-foreground">Email</span>
                       <BodyMedium className="text-muted-foreground">contacto@miempresa.com</BodyMedium>
                     </div>
                   </div>
                   <div className="flex items-center">
                     <span className="mr-3 text-xl">🕒</span>
                     <div>
                       <span className="block text-sm font-semibold text-foreground">Horarios</span>
                       <BodyMedium className="text-muted-foreground">
                         Lunes - Viernes: 9:00 - 18:00<br />
                         Sábados: 9:00 - 14:00
                       </BodyMedium>
                     </div>
                   </div>
                 </div>
               </div>

               <div>
                 <Heading3 className="mb-6">Síguenos</Heading3>
                 <div className="flex space-x-4">
                   <Button variant="outline" size="sm" className="flex items-center">
                     <SocialIcon platform="facebook" className="mr-2" />
                     Facebook
                   </Button>
                   <Button variant="outline" size="sm" className="flex items-center">
                     <SocialIcon platform="twitter" className="mr-2" />
                     Twitter
                   </Button>
                   <Button variant="outline" size="sm" className="flex items-center">
                     <SocialIcon platform="linkedin" className="mr-2" />
                     LinkedIn
                   </Button>
                   <Button variant="outline" size="sm" className="flex items-center">
                     <SocialIcon platform="instagram" className="mr-2" />
                     Instagram
                   </Button>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>

                     {/* Footer */}
       <Footer />
    </div>
  );
}
