import { forwardRef, type ComponentPropsWithoutRef } from 'react';

export type ChipVariant = 'accent' | 'success' | 'warning' | 'danger' | 'info' | 'neutral';

export interface ChipProps extends ComponentPropsWithoutRef<'span'> {
  variant?: ChipVariant;
  onDismiss?: () => void;
}

const colorVars = (variant: ChipVariant) => {
  if (variant === 'neutral') {
    return {
      background: 'var(--renge-color-bg-subtle)',
      color: 'var(--renge-color-fg-muted)',
      borderColor: 'var(--renge-color-border-subtle)',
    };
  }
  return {
    background: `var(--renge-color-${variant}-subtle)`,
    color: `var(--renge-color-${variant})`,
    borderColor: `var(--renge-color-${variant})`,
  };
};

export const Chip = forwardRef<HTMLSpanElement, ChipProps>(
  function Chip({ variant = 'neutral', onDismiss, style, children, ...props }, ref) {
    const { background, color, borderColor } = colorVars(variant);
    return (
      <span
        ref={ref}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 'var(--renge-space-2)',
          padding: 'var(--renge-space-2) var(--renge-space-3)',
          fontSize: 'var(--renge-font-size-sm)',
          fontWeight: 500,
          lineHeight: 1,
          borderRadius: 'var(--renge-radius-full)',
          border: `1px solid ${borderColor}`,
          background,
          color,
          ...style,
        }}
        {...props}
      >
        {children}
        {onDismiss && (
          <button
            onClick={onDismiss}
            aria-label="Dismiss"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              color: 'inherit',
              fontSize: 'var(--renge-font-size-sm)',
              lineHeight: 1,
              opacity: 0.7,
            }}
          >
            ×
          </button>
        )}
      </span>
    );
  }
);
