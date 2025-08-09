import {
  // Layout Components
  Card,
  CardContent,
  // Typography Components
  Heading2,
  Heading3,
  Heading4,
  BodyMedium,
  Label,
  BodySmall,
  // Button Components
  Button,
  IconButton,
  ActionButton,
} from '@/components/ui';

type ButtonVariantName = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

type ButtonVariant = {
  name: string;
  variant: ButtonVariantName;
  sizes: ButtonSize[];
}

type IconButton = {
  name: string;
  variant: ButtonVariantName;
  icon: string;
  text?: string;
  iconPosition?: 'only' | 'left' | 'right';
}

export default function Buttons() {
  const buttonVariants: ButtonVariant[] = [
    {
      name: 'Primary',
      variant: 'primary',
      sizes: ['sm', 'md', 'lg'],
    },
    {
      name: 'Secondary',
      variant: 'secondary',
      sizes: ['sm', 'md', 'lg'],
    },
    {
      name: 'Outline',
      variant: 'outline',
      sizes: ['sm', 'md', 'lg'],
    },
    {
      name: 'Ghost',
      variant: 'ghost',
      sizes: ['sm', 'md', 'lg'],
    },
  ];

  const buttonStates = [
    {
      name: 'Default',
      disabled: false,
    },
    {
      name: 'Hover',
      className: 'hover',
      disabled: false,
    },
    {
      name: 'Focus',
      className: 'focus',
      disabled: false,
    },
    {
      name: 'Active',
      className: 'active',
      disabled: false,
    },
    {
      name: 'Disabled',
      disabled: true,
    },
  ];

  const iconButtons: IconButton[] = [
    {
      name: 'Icon Only',
      variant: 'primary',
      icon: '→',
      iconPosition: 'only',
    },
    {
      name: 'Icon + Text',
      variant: 'primary',
      icon: '→',
      text: 'Button',
      iconPosition: 'left',
    },
    {
      name: 'Text + Icon',
      variant: 'primary',
      icon: '←',
      text: 'Button',
      iconPosition: 'right',
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <Heading2 className="mb-4">Botones</Heading2>
        <BodyMedium className="mb-6">
          Sistema de botones consistente con diferentes variantes, tamaños y estados
          para mantener la coherencia visual en toda la aplicación.
        </BodyMedium>
      </div>

      {/* Variantes de Botones */}
      <div>
        <Heading3 className="mb-4">Variantes</Heading3>
        <div className="space-y-6">
          {buttonVariants.map((variant) => (
            <Card key={variant.name}>
              <CardContent>
                <Heading4 className="mb-3">{variant.name}</Heading4>
                <div className="flex flex-wrap gap-3 items-center">
                  {variant.sizes.map((size) => (
                    <Button
                      key={size}
                      variant={variant.variant}
                      size={size}
                    >
                      {size.toUpperCase()} Button
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Estados de Botones */}
      <div>
        <Heading3 className="mb-4">Estados</Heading3>
        <Card>
          <CardContent>
            <div className="flex flex-wrap gap-3 items-center">
              {buttonStates.map((state) => (
                <Button
                  key={state.name}
                  variant="primary"
                  className={state.className}
                  disabled={state.disabled}
                >
                  {state.name}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Botones con Iconos */}
      <div>
        <Heading3 className="mb-4">Botones con Iconos</Heading3>
        <Card>
          <CardContent>
            <div className="flex flex-wrap gap-3 items-center">
              {iconButtons.map((button) => (
                <IconButton
                  key={button.name}
                  variant={button.variant}
                  icon={button.icon}
                  text={button.text}
                  iconPosition={button.iconPosition}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Botones de Acción */}
      <div>
        <Heading3 className="mb-4">Botones de Acción</Heading3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent>
              <Heading4 className="mb-3">Acciones Positivas</Heading4>
              <div className="flex flex-wrap gap-2">
                <ActionButton action="save">Guardar</ActionButton>
                <ActionButton action="confirm">Confirmar</ActionButton>
                <ActionButton action="publish">Publicar</ActionButton>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Heading4 className="mb-3">Acciones Destructivas</Heading4>
              <div className="flex flex-wrap gap-2">
                <ActionButton action="delete">Eliminar</ActionButton>
                <ActionButton action="cancel">Cancelar</ActionButton>
                <ActionButton action="discard">Descartar</ActionButton>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Guía de Uso */}
      <div>
        <Heading3 className="mb-4">Guía de Uso</Heading3>
        <Card variant="outlined">
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Heading4 className="mb-2">Variantes</Heading4>
                <ul className="space-y-1">
                  <li><Label>Primary:</Label> <BodySmall className="inline">Acciones principales</BodySmall></li>
                  <li><Label>Secondary:</Label> <BodySmall className="inline">Acciones secundarias</BodySmall></li>
                  <li><Label>Outline:</Label> <BodySmall className="inline">Acciones alternativas</BodySmall></li>
                  <li><Label>Ghost:</Label> <BodySmall className="inline">Acciones sutiles</BodySmall></li>
                </ul>
              </div>
              <div>
                <Heading4 className="mb-2">Tamaños</Heading4>
                <ul className="space-y-1">
                  <li><Label>Small:</Label> <BodySmall className="inline">Espacios reducidos</BodySmall></li>
                  <li><Label>Medium:</Label> <BodySmall className="inline">Uso estándar</BodySmall></li>
                  <li><Label>Large:</Label> <BodySmall className="inline">Acciones importantes</BodySmall></li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 