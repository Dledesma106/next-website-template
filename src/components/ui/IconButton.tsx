import React from 'react';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  text?: string;
  iconPosition?: 'left' | 'right' | 'only';
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ 
    className = '', 
    icon, 
    text, 
    iconPosition = 'left', 
    variant = 'primary', 
    size = 'md', 
    ...props 
  }, ref) => {
    const baseClasses = 'font-medium rounded-md transition-colors duration-200 focus:outline-none';
    
    const variantClasses = {
      primary: 'bg-primary text-white hover:bg-accent focus:ring-2 focus:ring-primary focus:ring-offset-2',
      secondary: 'bg-surface text-foreground hover:bg-muted focus:ring-2 focus:ring-secondary focus:ring-offset-2',
      outline: 'border border-border text-foreground hover:bg-background focus:ring-2 focus:ring-secondary focus:ring-offset-2',
      ghost: 'text-foreground hover:bg-muted focus:ring-2 focus:ring-secondary focus:ring-offset-2',
    };
    
    const sizeClasses = {
      sm: iconPosition === 'only' ? 'p-2' : 'px-3 py-1.5 text-sm',
      md: iconPosition === 'only' ? 'p-2' : 'px-4 py-2 text-sm',
      lg: iconPosition === 'only' ? 'p-3' : 'px-6 py-3 text-base',
    };
    
    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
    
    const renderContent = () => {
      if (iconPosition === 'only') {
        return icon;
      }
      
      if (iconPosition === 'left') {
        return (
          <>
            <span className="mr-2">{icon}</span>
            {text}
          </>
        );
      }
      
      if (iconPosition === 'right') {
        return (
          <>
            {text}
            <span className="ml-2">{icon}</span>
          </>
        );
      }
      
      return null;
    };
    
    return (
      <button
        ref={ref}
        className={classes}
        {...props}
      >
        {renderContent()}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';

export default IconButton;
