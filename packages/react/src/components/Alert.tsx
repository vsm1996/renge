import { forwardRef, type ComponentPropsWithoutRef } from 'react';

export type AlertStatus = 'info' | 'success' | 'warning' | 'danger';

export interface AlertProps extends ComponentPropsWithoutRef<'div'> {
  status?: AlertStatus;
  title?: string;
}

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  function Alert({ status = 'info', title, style, children, ...props }, ref) {
    return (
      <div
        ref={ref}
        role="alert"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: title && children ? 'var(--renge-space-1)' : undefined,
          padding: 'var(--renge-space-3) var(--renge-space-4)',
          borderRadius: 'var(--renge-radius-2)',
          borderLeft: `3px solid var(--renge-color-${status})`,
          background: `var(--renge-color-${status}-subtle)`,
          color: 'var(--renge-color-fg)',
          ...style,
        }}
        {...props}
      >
        {title && (
          <strong
            style={{
              fontSize: 'var(--renge-font-size-sm)',
              fontWeight: 600,
              color: 'var(--renge-color-fg)',
            }}
          >
            {title}
          </strong>
        )}
        {children && (
          <span style={{ fontSize: 'var(--renge-font-size-sm)', color: 'var(--renge-color-fg)' }}>
            {children}
          </span>
        )}
      </div>
    );
  }
);
