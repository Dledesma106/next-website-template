import {
  // Typography Components
  DisplayLarge,
  DisplayMedium,
  DisplaySmall,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  BodyLarge,
  BodyMedium,
  BodySmall,
  Caption,
  Label,
  TextThin,
  TextLight,
  TextNormal,
  TextMedium,
  TextSemibold,
  TextBold,
  TextExtrabold,
  // Layout Components
  Card,
  CardHeader,
  CardContent,
} from '@/components/ui';

export default function Typography() {
  const textStyles = [
    {
      name: 'Display Large',
      component: DisplayLarge,
      usage: 'Títulos principales de página',
      example: 'Display Large Heading'
    },
    {
      name: 'Display Medium',
      component: DisplayMedium,
      usage: 'Títulos de sección grandes',
      example: 'Display Medium Heading'
    },
    {
      name: 'Display Small',
      component: DisplaySmall,
      usage: 'Títulos de sección',
      example: 'Display Small Heading'
    },
    {
      name: 'Heading 1',
      component: Heading1,
      usage: 'Títulos principales',
      example: 'Heading 1'
    },
    {
      name: 'Heading 2',
      component: Heading2,
      usage: 'Subtítulos',
      example: 'Heading 2'
    },
    {
      name: 'Heading 3',
      component: Heading3,
      usage: 'Títulos de subsección',
      example: 'Heading 3'
    },
    {
      name: 'Heading 4',
      component: Heading4,
      usage: 'Títulos menores',
      example: 'Heading 4'
    },
    {
      name: 'Body Large',
      component: BodyLarge,
      usage: 'Texto del cuerpo grande',
      example: 'Este es un ejemplo de texto del cuerpo grande con múltiples líneas para mostrar cómo se ve el espaciado y la legibilidad.'
    },
    {
      name: 'Body Medium',
      component: BodyMedium,
      usage: 'Texto del cuerpo estándar',
      example: 'Este es un ejemplo de texto del cuerpo estándar que se usa para el contenido principal de la página.'
    },
    {
      name: 'Body Small',
      component: BodySmall,
      usage: 'Texto del cuerpo pequeño',
      example: 'Este es un ejemplo de texto del cuerpo pequeño para información secundaria.'
    },
    {
      name: 'Caption',
      component: Caption,
      usage: 'Texto de ayuda y notas',
      example: 'Texto de ayuda y notas al pie'
    },
    {
      name: 'Label',
      component: Label,
      usage: 'Etiquetas de formularios',
      example: 'Label'
    },
  ];

  const fontWeights = [
    { name: 'Thin', component: TextThin, weight: '100' },
    { name: 'Light', component: TextLight, weight: '300' },
    { name: 'Normal', component: TextNormal, weight: '400' },
    { name: 'Medium', component: TextMedium, weight: '500' },
    { name: 'Semibold', component: TextSemibold, weight: '600' },
    { name: 'Bold', component: TextBold, weight: '700' },
    { name: 'Extrabold', component: TextExtrabold, weight: '800' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <Heading2>Tipografía</Heading2>
        <BodyMedium className="mb-6">
          Sistema tipográfico consistente basado en la escala de grises para mantener
          la jerarquía visual y la legibilidad en todos los dispositivos.
        </BodyMedium>
      </div>

      {/* Estilos de Texto */}
      <div>
        <Heading3 className="mb-4">Estilos de Texto</Heading3>
        <div className="space-y-6">
          {textStyles.map((style) => (
            <Card key={style.name}>
              <CardContent>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <style.component>
                      {style.example}
                    </style.component>
                  </div>
                  <div className="md:w-48 flex-shrink-0">
                    <Label>{style.name}</Label>
                    <Caption className="mt-1">{style.usage}</Caption>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Pesos de Fuente */}
      <div>
        <Heading3 className="mb-4">Pesos de Fuente</Heading3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {fontWeights.map((weight) => (
            <Card key={weight.name}>
              <CardContent>
                <weight.component className="text-lg mb-2">
                  {weight.name}
                </weight.component>
                <Caption>Peso: {weight.weight}</Caption>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Ejemplo de Jerarquía */}
      <div>
        <Heading3 className="mb-4">Ejemplo de Jerarquía</Heading3>
        <Card variant="outlined">
          <CardContent>
            <Heading1 className="mb-4">Título Principal de la Página</Heading1>
            <Heading2 className="mb-3">Subtítulo de Sección</Heading2>
            <Heading3 className="mb-2">Título de Subsección</Heading3>
            <BodyMedium className="mb-4">
              Este es un párrafo de ejemplo que muestra cómo se ve el texto del cuerpo estándar.
              El texto debe ser legible y tener un espaciado adecuado para facilitar la lectura.
            </BodyMedium>
            <BodySmall className="mb-4">
              Este es un párrafo más pequeño que se usa para información secundaria o complementaria.
              Mantiene la consistencia visual pero con menos énfasis.
            </BodySmall>
            <Caption>
              Texto de ayuda o notas al pie que proporciona información adicional.
            </Caption>
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
                <Heading4 className="mb-2">Jerarquía de Títulos</Heading4>
                <ul className="space-y-1">
                  <li><Label>Display:</Label> <BodySmall className="inline">Solo para títulos principales de página</BodySmall></li>
                  <li><Label>Heading 1-4:</Label> <BodySmall className="inline">Para estructura de contenido</BodySmall></li>
                  <li><Label>Body:</Label> <BodySmall className="inline">Para contenido principal</BodySmall></li>
                  <li><Label>Caption:</Label> <BodySmall className="inline">Para información secundaria</BodySmall></li>
                </ul>
              </div>
              <div>
                <Heading4 className="mb-2">Mejores Prácticas</Heading4>
                <ul className="space-y-1">
                  <li><BodySmall>• Mantener consistencia en toda la aplicación</BodySmall></li>
                  <li><BodySmall>• Usar espaciado adecuado entre elementos</BodySmall></li>
                  <li><BodySmall>• Asegurar contraste suficiente para legibilidad</BodySmall></li>
                  <li><BodySmall>• Considerar responsive design en móviles</BodySmall></li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 