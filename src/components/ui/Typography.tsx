import React from 'react';

// Componente base para todos los elementos de tipografía
interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

// Display Components
export const DisplayLarge = ({ children, className = '' }: TypographyProps) => (
  <h1 className={`text-6xl font-bold text-foreground ${className}`}>
    {children}
  </h1>
);

export const DisplayMedium = ({ children, className = '' }: TypographyProps) => (
  <h1 className={`text-5xl font-bold text-foreground ${className}`}>
    {children}
  </h1>
);

export const DisplaySmall = ({ children, className = '' }: TypographyProps) => (
  <h1 className={`text-4xl font-bold text-foreground ${className}`}>
    {children}
  </h1>
);

// Heading Components
export const Heading1 = ({ children, className = '' }: TypographyProps) => (
  <h1 className={`text-3xl font-bold text-foreground ${className}`}>
    {children}
  </h1>
);

export const Heading2 = ({ children, className = '' }: TypographyProps) => (
  <h2 className={`text-2xl font-semibold text-foreground ${className}`}>
    {children}
  </h2>
);

export const Heading3 = ({ children, className = '' }: TypographyProps) => (
  <h3 className={`text-xl font-semibold text-foreground ${className}`}>
    {children}
  </h3>
);

export const Heading4 = ({ children, className = '' }: TypographyProps) => (
  <h4 className={`text-lg font-medium text-foreground ${className}`}>
    {children}
  </h4>
);

export const Heading5 = ({ children, className = '' }: TypographyProps) => (
  <h5 className={`text-base font-medium text-foreground ${className}`}>
    {children}
  </h5>
);

// Body Components
export const BodyLarge = ({ children, className = '' }: TypographyProps) => (
  <p className={`text-lg text-muted-foreground leading-relaxed ${className}`}>
    {children}
  </p>
);

export const BodyMedium = ({ children, className = '' }: TypographyProps) => (
  <p className={`text-base text-muted-foreground leading-relaxed ${className}`}>
    {children}
  </p>
);

export const BodySmall = ({ children, className = '' }: TypographyProps) => (
  <p className={`text-sm text-muted-foreground leading-relaxed ${className}`}>
    {children}
  </p>
);

// Utility Components
export const Caption = ({ children, className = '' }: TypographyProps) => (
  <span className={`text-xs text-muted-foreground ${className}`}>
    {children}
  </span>
);

export const Label = ({ children, className = '' }: TypographyProps) => (
  <span className={`text-sm font-medium text-foreground ${className}`}>
    {children}
  </span>
);

// Weight Components
export const TextThin = ({ children, className = '' }: TypographyProps) => (
  <span className={`font-thin ${className}`}>
    {children}
  </span>
);

export const TextLight = ({ children, className = '' }: TypographyProps) => (
  <span className={`font-light ${className}`}>
    {children}
  </span>
);

export const TextNormal = ({ children, className = '' }: TypographyProps) => (
  <span className={`font-normal ${className}`}>
    {children}
  </span>
);

export const TextMedium = ({ children, className = '' }: TypographyProps) => (
  <span className={`font-medium ${className}`}>
    {children}
  </span>
);

export const TextSemibold = ({ children, className = '' }: TypographyProps) => (
  <span className={`font-semibold ${className}`}>
    {children}
  </span>
);

export const TextBold = ({ children, className = '' }: TypographyProps) => (
  <span className={`font-bold ${className}`}>
    {children}
  </span>
);

export const TextExtrabold = ({ children, className = '' }: TypographyProps) => (
  <span className={`font-extrabold ${className}`}>
    {children}
  </span>
);
