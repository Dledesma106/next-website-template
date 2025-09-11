'use client';

import {
  Card,
  CardContent,
  Heading2,
  Button,
} from '@/components/ui';

interface NavigationProps {
  onScrollToSection?: (sectionId: string) => void;
  showInternalLinks?: boolean;
}

export default function Navigation({ onScrollToSection, showInternalLinks = true }: NavigationProps) {
  const scrollToSection = (sectionId: string) => {
    if (onScrollToSection) {
      onScrollToSection(sectionId);
    } else {
      const element = document.getElementById(sectionId);
      const offset = 80;
      if (element) {
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({ top: elementPosition, behavior: 'smooth' });
      }
    }
  };

  return (
    <Card variant="elevated" className="rounded-none border-x-0 border-t-0 sticky top-0 z-50">
      <CardContent>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Heading2>Mi Empresa</Heading2>
            </div>
            <nav className="hidden md:flex space-x-8">
              {showInternalLinks ? (
                <>
                  <Button variant="ghost" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    Inicio
                  </Button>
                  <Button variant="ghost" onClick={() => scrollToSection('about')}>
                    Acerca de Nosotros
                  </Button>
                  <Button variant="ghost" onClick={() => scrollToSection('services')}>
                    Servicios
                  </Button>
                  <Button variant="ghost" onClick={() => scrollToSection('testimonials')}>
                    Testimonios
                  </Button>
                  <Button variant="ghost" onClick={() => scrollToSection('team')}>
                    Equipo
                  </Button>
                  <Button variant="ghost" onClick={() => window.location.href = '/blog'}>
                    Blog
                  </Button>
                  <Button variant="ghost" onClick={() => scrollToSection('contact')}>
                    Contacto
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="ghost" onClick={() => window.location.href = '/'}>
                    Inicio
                  </Button>
                  <Button variant="ghost" onClick={() => window.location.href = '/#about'}>
                    Acerca de Nosotros
                  </Button>
                  <Button variant="ghost" onClick={() => window.location.href = '/#services'}>
                    Servicios
                  </Button>
                  <Button variant="ghost" onClick={() => window.location.href = '/#testimonials'}>
                    Testimonios
                  </Button>
                  <Button variant="ghost" onClick={() => window.location.href = '/#team'}>
                    Equipo
                  </Button>
                  <Button variant="ghost" onClick={() => window.location.href = '/blog'}>
                    Blog
                  </Button>
                  <Button variant="ghost" onClick={() => window.location.href = '/#contact'}>
                    Contacto
                  </Button>
                </>
              )}
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">Llamar</Button>
              <Button variant="primary" size="sm">Cotizar</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
