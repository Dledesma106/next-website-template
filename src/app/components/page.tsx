import { Metadata } from 'next';
import UIExample from '@/components/ui/Example';

export const metadata: Metadata = {
  title: 'Componentes UI - Plantilla de Sitio Web',
  description: 'Ejemplo de componentes UI del sistema de diseño',
};

export default function ComponentsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <UIExample />
    </div>
  );
}
