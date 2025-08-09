'use client';

import { useState } from 'react';
import {
  // Layout Components
  Card,
  CardHeader,
  CardContent,
  // Typography Components
  Heading1,
  BodyMedium,
  Caption,
  // Button Components
  Button,
} from '@/components/ui';

import ColorPalette from './ColorPalette';
import ColorUsage from './ColorUsage';
import Typography from './Typography';
import Buttons from './Buttons';
import Forms from './Forms';
import Cards from './Cards';
import Layout from './Layout';
import Navigation from './Navigation';

const sections = [
  { id: 'colors', name: 'Paleta de Colores', component: ColorPalette },
  { id: 'color-usage', name: 'Uso de Colores', component: ColorUsage },
  { id: 'typography', name: 'Tipografía', component: Typography },
  { id: 'buttons', name: 'Botones', component: Buttons },
  { id: 'forms', name: 'Formularios', component: Forms },
  { id: 'cards', name: 'Tarjetas', component: Cards },
  { id: 'layout', name: 'Layout', component: Layout },
  { id: 'navigation', name: 'Navegación', component: Navigation },
];

export default function DesignSystemDemo() {
  const [activeSection, setActiveSection] = useState('colors');

  const ActiveComponent = sections.find(s => s.id === activeSection)?.component || ColorPalette;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Card variant="elevated" className="rounded-none border-x-0 border-t-0">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <Heading1>Sistema de Diseño</Heading1>
              <BodyMedium>Plantilla Wireframe - Escala de Grises</BodyMedium>
            </div>
            <div className="text-right">
              <Caption>Versión 1.0</Caption>
              <Caption>Next.js + Tailwind CSS</Caption>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Navigation */}
      <Card variant="elevated" className="rounded-none border-x-0 shadow-sm">
        <CardContent>
          <div className="flex space-x-8 overflow-x-auto">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant={activeSection === section.id ? 'primary' : 'ghost'}
                onClick={() => setActiveSection(section.id)}
                className="whitespace-nowrap"
              >
                {section.name}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card variant="elevated">
          <CardContent>
            <ActiveComponent />
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <Card variant="elevated" className="rounded-none border-x-0 border-b-0 mt-16">
        <CardContent>
          <div className="text-center">
            <BodyMedium>
              Sistema de Diseño - Plantilla de Sitio Web Dinámico
            </BodyMedium>
            <Caption className="mt-2">
              Diseñado para rápida personalización y reutilización
            </Caption>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 