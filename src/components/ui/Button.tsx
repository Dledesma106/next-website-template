import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseClasses = 'font-medium rounded-md transition-colors duration-200 focus:outline-none';
    
    const variantClasses = {
      primary: 'bg-primary text-white hover:bg-accent focus:ring-2 focus:ring-primary focus:ring-offset-2',
      secondary: 'bg-surface text-foreground hover:bg-muted focus:ring-2 focus:ring-secondary focus:ring-offset-2',
      outline: 'border border-border text-foreground hover:bg-background focus:ring-2 focus:ring-secondary focus:ring-offset-2',
      ghost: 'text-foreground hover:bg-muted focus:ring-2 focus:ring-secondary focus:ring-offset-2',
    };
    
    const sizeClasses = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-sm',
      lg: 'px-6 py-3 text-base',
    };
    
    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
    
    return (
      <button
        ref={ref}
        className={classes}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
