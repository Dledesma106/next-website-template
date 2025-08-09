import React from 'react';
import {
  Button,
  IconButton,
  ActionButton,
  Heading1,
  Heading2,
  BodyMedium,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Badge,
} from './index';

export default function UIExample() {
  const selectOptions = [
    { value: 'option1', label: 'Opción 1' },
    { value: 'option2', label: 'Opción 2' },
    { value: 'option3', label: 'Opción 3' },
  ];

  return (
    <div className="space-y-8 p-6">
      <Heading1>Ejemplo de Componentes UI</Heading1>
      <BodyMedium>
        Esta página muestra todos los componentes UI disponibles en el sistema de diseño.
      </BodyMedium>

      {/* Botones */}
      <section>
        <Heading2>Botones</Heading2>
        <div className="space-y-4">
          <div className="flex gap-2">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
          <div className="flex gap-2">
            <IconButton icon="→" text="Con Icono" />
            <IconButton icon="←" text="Con Icono" iconPosition="right" />
            <IconButton icon="⚙" iconPosition="only" />
          </div>
          <div className="flex gap-2">
            <ActionButton action="save">Guardar</ActionButton>
            <ActionButton action="delete">Eliminar</ActionButton>
            <ActionButton action="cancel">Cancelar</ActionButton>
          </div>
        </div>
      </section>

      {/* Formularios */}
      <section>
        <Heading2>Formularios</Heading2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <Input
              label="Email"
              type="email"
              placeholder="usuario@ejemplo.com"
              helperText="Ingresa tu dirección de email"
            />
            <Input
              label="Contraseña"
              type="password"
              placeholder="••••••••"
              error="La contraseña es requerida"
            />
            <Textarea
              label="Mensaje"
              placeholder="Escribe tu mensaje aquí..."
              rows={4}
            />
          </div>
          <div className="space-y-4">
            <Select
              label="País"
              options={selectOptions}
              placeholder="Selecciona un país"
            />
            <div className="space-y-2">
              <Checkbox label="Acepto los términos y condiciones" />
              <Radio label="Opción A" name="example-radio" />
              <Radio label="Opción B" name="example-radio" />
            </div>
          </div>
        </div>
      </section>

      {/* Tarjetas */}
      <section>
        <Heading2>Tarjetas</Heading2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader title="Tarjeta Simple" />
            <CardContent>
              <BodyMedium>
                Esta es una tarjeta básica con contenido simple.
              </BodyMedium>
            </CardContent>
          </Card>

          <Card interactive>
            <CardHeader 
              title="Tarjeta Interactiva" 
              subtitle="Hover para ver el efecto"
              action={<Badge variant="success">Nuevo</Badge>}
            />
            <CardContent>
              <BodyMedium>
                Esta tarjeta tiene efectos de hover y un badge.
              </BodyMedium>
            </CardContent>
            <CardFooter>
              <div className="flex gap-2">
                <Button size="sm">Acción</Button>
                <Button variant="outline" size="sm">Cancelar</Button>
              </div>
            </CardFooter>
          </Card>

          <Card variant="elevated">
            <CardHeader title="Tarjeta Elevada" />
            <CardContent>
              <BodyMedium>
                Esta tarjeta tiene una sombra más pronunciada.
              </BodyMedium>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Badges */}
      <section>
        <Heading2>Badges</Heading2>
        <div className="flex gap-2 flex-wrap">
          <Badge>Default</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="info">Info</Badge>
          <Badge size="lg">Large</Badge>
          <Badge size="sm">Small</Badge>
        </div>
      </section>
    </div>
  );
}
