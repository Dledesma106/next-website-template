import {
  // Layout Components
  Card,
  CardContent,
  // Typography Components
  Heading2,
  Heading3,
  Heading4,
  Label,
  BodyMedium,
  BodySmall,
  // Form Components
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  // Button Components
  Button,
} from '@/components/ui';

type FormInput = {
  label: string;
  type: string;
  id: string;
  placeholder: string;
  variant?: 'default' | 'error' | 'success';
  disabled?: boolean;
  error?: string;
  defaultChecked?: boolean;
};

type SelectOption = {
  value: string;
  label: string;
};

export default function Forms() {
  const basicInputs: FormInput[] = [
    {
      label: 'Text Input',
      type: 'text',
      id: 'text-input',
      placeholder: 'Escribe algo aquí...',
    },
    {
      label: 'Email Input',
      type: 'email',
      id: 'email-input',
      placeholder: 'usuario@ejemplo.com',
    },
    {
      label: 'Password Input',
      type: 'password',
      id: 'password-input',
      placeholder: '••••••••',
    },
    {
      label: 'Number Input',
      type: 'number',
      id: 'number-input',
      placeholder: '0',
    },
    {
      label: 'URL Input',
      type: 'url',
      id: 'url-input',
      placeholder: 'https://ejemplo.com',
    },
    {
      label: 'Teléfono Input',
      type: 'tel',
      id: 'tel-input',
      placeholder: '+1 (555) 123-4567',
    },
  ];

  const inputStates: FormInput[] = [
    {
      label: 'Default',
      type: 'text',
      id: 'default-input',
      placeholder: 'Estado por defecto',
    },
    {
      label: 'Focus',
      type: 'text',
      id: 'focus-input',
      placeholder: 'Estado enfocado',
      variant: 'default',
    },
    {
      label: 'Error',
      type: 'text',
      id: 'error-input',
      placeholder: 'Campo con error',
      variant: 'error',
      error: 'Este campo es requerido',
    },
    {
      label: 'Disabled',
      type: 'text',
      id: 'disabled-input',
      placeholder: 'Campo deshabilitado',
      disabled: true,
    },
  ];

  const defaultSelectOptions: SelectOption[] = [
    { value: '', label: 'Selecciona una opción' },
    { value: 'option1', label: 'Opción 1' },
    { value: 'option2', label: 'Opción 2' },
    { value: 'option3', label: 'Opción 3' },
  ];

  const checkboxes: FormInput[] = [
    {
      label: 'Opción 1',
      type: 'checkbox',
      id: 'checkbox-1',
      placeholder: '',
    },
    {
      label: 'Opción 2 (checked)',
      type: 'checkbox',
      id: 'checkbox-2',
      placeholder: '',
      defaultChecked: true,
    },
    {
      label: 'Opción 3 (disabled)',
      type: 'checkbox',
      id: 'checkbox-3',
      placeholder: '',
      disabled: true,
    },
  ];

  const radioButtons: FormInput[] = [
    {
      label: 'Opción A',
      type: 'radio',
      id: 'radio-1',
      placeholder: '',
    },
    {
      label: 'Opción B (selected)',
      type: 'radio',
      id: 'radio-2',
      placeholder: '',
      defaultChecked: true,
    },
    {
      label: 'Opción C (disabled)',
      type: 'radio',
      id: 'radio-3',
      placeholder: '',
      disabled: true,
    },
  ];
  return (
    <div className="space-y-8">
      <div>
        <Heading2 className="mb-4">Formularios</Heading2>
        <BodyMedium className="mb-6">
          Componentes de formulario consistentes con validación visual y estados
          de interacción para una mejor experiencia de usuario.
        </BodyMedium>
      </div>

      {/* Inputs Básicos */}
      <div>
        <Heading3 className="mb-4">Inputs Básicos</Heading3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {basicInputs.slice(0, 3).map((input) => (
              <Input
                key={input.id}
                label={input.label}
                type={input.type}
                id={input.id}
                placeholder={input.placeholder}
                variant={input.variant}
                disabled={input.disabled}
                error={input.error}
              />
            ))}
          </div>
          <div className="space-y-4">
            {basicInputs.slice(3).map((input) => (
              <Input
                key={input.id}
                label={input.label}
                type={input.type}
                id={input.id}
                placeholder={input.placeholder}
                variant={input.variant}
                disabled={input.disabled}
                error={input.error}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Estados de Inputs */}
      <div>
        <Heading3 className="mb-4">Estados de Inputs</Heading3>
        <Card>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {inputStates.map((input) => (
                <Input
                  key={input.id}
                  label={input.label}
                  type={input.type}
                  id={input.id}
                  placeholder={input.placeholder}
                  variant={input.variant}
                  disabled={input.disabled}
                  error={input.error}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Textarea */}
      <div>
        <Heading3 className="mb-4">Textarea</Heading3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Textarea
            label="Textarea Default"
            id="textarea-default"
            rows={4}
            placeholder="Escribe tu mensaje aquí..."
          />
          <Textarea
            label="Textarea con Resize"
            id="textarea-resize"
            rows={4}
            placeholder="Este textarea se puede redimensionar..."
            className="resize"
          />
        </div>
      </div>

      {/* Select */}
      <div>
        <Heading3 className="mb-4">Select</Heading3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Select Default"
            id="select-default"
            options={defaultSelectOptions}
            placeholder="Selecciona una opción"
          />
          <Select
            label="Select Múltiple"
            id="select-multiple"
            options={defaultSelectOptions.slice(1)}
            multiple
          />
        </div>
      </div>

      {/* Checkboxes y Radio Buttons */}
      <div>
        <Heading3 className="mb-4">Checkboxes y Radio Buttons</Heading3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Heading4 className="mb-3">Checkboxes</Heading4>
            <div className="space-y-3">
              {checkboxes.map((checkbox) => (
                <Checkbox
                  key={checkbox.id}
                  label={checkbox.label}
                  id={checkbox.id}
                  disabled={checkbox.disabled}
                  defaultChecked={checkbox.defaultChecked}
                />
              ))}
            </div>
          </div>
          <div>
            <Heading4 className="mb-3">Radio Buttons</Heading4>
            <div className="space-y-3">
              {radioButtons.map((radio) => (
                <Radio
                  key={radio.id}
                  name="radio-group"
                  label={radio.label}
                  id={radio.id}
                  disabled={radio.disabled}
                  defaultChecked={radio.defaultChecked}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Formulario Completo */}
      <div>
        <Heading3 className="mb-4">Formulario Completo</Heading3>
        <Card>
          <CardContent>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Nombre"
                  type="text"
                  id="first-name"
                />
                <Input
                  label="Apellido"
                  type="text"
                  id="last-name"
                />
              </div>
              <Input
                label="Email"
                type="email"
                id="email"
              />
              <Textarea
                label="Mensaje"
                id="message"
                rows={4}
              />
              <div className="flex items-center justify-end space-x-3">
                <Button variant="outline">Cancelar</Button>
                <Button variant="primary" type="submit">Enviar</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Guía de Uso */}
      <div>
        <Heading3 className="mb-4">Guía de Uso</Heading3>
        <Card variant="outlined">
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Heading4 className="mb-2">Estados de Input</Heading4>
                <ul className="space-y-1">
                  <li><Label>Default:</Label> <BodySmall className="inline">Estado inicial</BodySmall></li>
                  <li><Label>Focus:</Label> <BodySmall className="inline">Cuando el usuario hace clic</BodySmall></li>
                  <li><Label>Error:</Label> <BodySmall className="inline">Cuando hay validación fallida</BodySmall></li>
                  <li><Label>Disabled:</Label> <BodySmall className="inline">Cuando no está disponible</BodySmall></li>
                </ul>
              </div>
              <div>
                <Heading4 className="mb-2">Mejores Prácticas</Heading4>
                <ul className="space-y-1">
                  <li><BodySmall>• Siempre incluir labels descriptivos</BodySmall></li>
                  <li><BodySmall>• Usar placeholders para ejemplos</BodySmall></li>
                  <li><BodySmall>• Proporcionar feedback visual inmediato</BodySmall></li>
                  <li><BodySmall>• Mantener consistencia en el espaciado</BodySmall></li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 