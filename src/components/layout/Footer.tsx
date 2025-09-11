import {
  Heading3,
  BodyMedium,
  BodySmall,
  Button,
  SocialIcon,
} from '@/components/ui';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
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
                 <SocialIcon platform="facebook" />
               </Button>
               <Button variant="ghost" size="sm" className="text-white hover:bg-white hover:bg-opacity-20">
                 <SocialIcon platform="twitter" />
               </Button>
               <Button variant="ghost" size="sm" className="text-white hover:bg-white hover:bg-opacity-20">
                 <SocialIcon platform="linkedin" />
               </Button>
               <Button variant="ghost" size="sm" className="text-white hover:bg-white hover:bg-opacity-20">
                 <SocialIcon platform="instagram" />
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
  );
}
