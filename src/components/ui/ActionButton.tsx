import React from 'react';

export interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  action: 'save' | 'confirm' | 'publish' | 'delete' | 'cancel' | 'discard';
  size?: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
}

const ActionButton = React.forwardRef<HTMLButtonElement, ActionButtonProps>(
  ({ className = '', action, size = 'md', children, ...props }, ref) => {
    const baseClasses = 'font-medium rounded-md transition-colors duration-200 focus:outline-none';
    
    const actionConfig = {
      save: {
        classes: 'bg-success text-white hover:bg-accent focus:ring-2 focus:ring-success focus:ring-offset-2',
        defaultText: 'Guardar'
      },
      confirm: {
        classes: 'bg-primary text-white hover:bg-accent focus:ring-2 focus:ring-primary focus:ring-offset-2',
        defaultText: 'Confirmar'
      },
      publish: {
        classes: 'bg-info text-white hover:bg-accent focus:ring-2 focus:ring-info focus:ring-offset-2',
        defaultText: 'Publicar'
      },
      delete: {
        classes: 'bg-error text-white hover:bg-accent focus:ring-2 focus:ring-error focus:ring-offset-2',
        defaultText: 'Eliminar'
      },
      cancel: {
        classes: 'bg-warning text-white hover:bg-accent focus:ring-2 focus:ring-warning focus:ring-offset-2',
        defaultText: 'Cancelar'
      },
      discard: {
        classes: 'border border-border text-foreground hover:bg-background focus:ring-2 focus:ring-secondary focus:ring-offset-2',
        defaultText: 'Descartar'
      }
    };
    
    const sizeClasses = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-sm',
      lg: 'px-6 py-3 text-base',
    };
    
    const config = actionConfig[action];
    const classes = `${baseClasses} ${config.classes} ${sizeClasses[size]} ${className}`;
    const buttonText = children || config.defaultText;
    
    return (
      <button
        ref={ref}
        className={classes}
        {...props}
      >
        {buttonText}
      </button>
    );
  }
);

ActionButton.displayName = 'ActionButton';

export default ActionButton;
