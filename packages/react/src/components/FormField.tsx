import { forwardRef, type ComponentPropsWithoutRef } from 'react';

export interface FormFieldProps extends ComponentPropsWithoutRef<'div'> {
  label: string;
  htmlFor?: string;
  helperText?: string;
  errorText?: string;
  required?: boolean;
}

export const FormField = forwardRef<HTMLDivElement, FormFieldProps>(
  function FormField(
    { label, htmlFor, helperText, errorText, required, style, children, ...props },
    ref
  ) {
    const subText = errorText ?? helperText;
    const subColor = errorText ? 'var(--renge-color-danger)' : 'var(--renge-color-fg-muted)';

    return (
      <div
        ref={ref}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--renge-space-2)',
          ...style,
        }}
        {...props}
      >
        <label
          htmlFor={htmlFor}
          style={{
            fontSize: 'var(--renge-font-size-sm)',
            fontWeight: 500,
            color: 'var(--renge-color-fg)',
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--renge-space-1)',
          }}
        >
          {label}
          {required && (
            <span aria-hidden="true" style={{ color: 'var(--renge-color-danger)' }}>
              *
            </span>
          )}
        </label>
        {children}
        {subText && (
          <span
            style={{
              fontSize: 'var(--renge-font-size-xs)',
              color: subColor,
            }}
          >
            {subText}
          </span>
        )}
      </div>
    );
  }
);
