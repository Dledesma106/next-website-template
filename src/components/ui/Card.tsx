import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
  interactive?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = '', children, variant = 'default', interactive = false, ...props }, ref) => {
    const baseClasses = 'bg-background border rounded-lg';
    
    const variantClasses = {
      default: 'border-border shadow-sm',
      elevated: 'border-border shadow-md',
      outlined: 'border-border shadow-none',
    };
    
    const interactiveClasses = interactive 
      ? 'hover:shadow-md hover:border-border transition-all duration-200 cursor-pointer' 
      : '';
    
    const classes = `${baseClasses} ${variantClasses[variant]} ${interactiveClasses} ${className}`;
    
    return (
      <div
        ref={ref}
        className={classes}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
