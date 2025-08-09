import React from 'react';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
  helperText?: string;
  variant?: 'default' | 'error' | 'success';
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className = '', label, error, helperText, variant = 'default', ...props }, ref) => {
    const baseClasses = 'h-4 w-4 border rounded focus:ring-2 transition-colors duration-200';
    
    const variantClasses = {
      default: 'text-secondary focus:ring-secondary border-border',
      error: 'text-error focus:ring-error border-error',
      success: 'text-success focus:ring-success border-success',
    };
    
    const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;
    
    return (
      <div className="space-y-1">
        <label className="flex items-center">
          <input
            ref={ref}
            type="checkbox"
            className={classes}
            {...props}
          />
          {label && (
            <span className="ml-2 text-sm text-foreground">
              {label}
            </span>
          )}
        </label>
        {error && (
          <p className="text-sm text-error ml-6">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p className="text-sm text-muted-foreground ml-6">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
