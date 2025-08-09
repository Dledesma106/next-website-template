import { Metadata } from 'next';
import DesignSystemDemo from '@/components/system-design/DesignSystemDemo';

export const metadata: Metadata = {
  title: 'Sistema de Diseño - Plantilla de Sitio Web',
  description: 'Demo del sistema de diseño wireframe en escala de grises',
};

export default function SystemDesignPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DesignSystemDemo />
    </div>
  );
} 