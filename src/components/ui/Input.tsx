import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  variant?: 'default' | 'error' | 'success';
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', label, error, helperText, variant = 'default', ...props }, ref) => {
    const baseClasses = 'w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none transition-colors duration-200';
    
    const variantClasses = {
      default: 'border-border focus:ring-2 focus:ring-secondary focus:border-secondary',
      error: 'border-error focus:ring-2 focus:ring-error focus:border-error',
      success: 'border-success focus:ring-2 focus:ring-success focus:border-success',
    };
    
    const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;
    
    return (
      <div className="space-y-1">
        {label && (
          <label className="block text-sm font-medium text-foreground">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={classes}
          {...props}
        />
        {error && (
          <p className="text-sm text-error">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p className="text-sm text-muted-foreground">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
