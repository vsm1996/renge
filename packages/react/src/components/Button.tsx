// packages/react/src/components/Button.tsx

import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import type { AnimationName } from '@renge/tokens';

type SizeKey = 'sm' | 'md' | 'lg';
type Variant = 'solid' | 'outline' | 'ghost';
type ColorScheme = 'accent' | 'danger' | 'success';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  size?: SizeKey;
  variant?: Variant;
  colorScheme?: ColorScheme;
  fullWidth?: boolean;
  animation?: AnimationName;
}

const sizeStyles: Record<SizeKey, React.CSSProperties> = {
  sm: {
    padding: 'var(--renge-space-1) var(--renge-space-2)',
    fontSize: 'var(--renge-font-size-sm)',
  },
  md: {
    padding: 'var(--renge-space-2) var(--renge-space-4)',
    fontSize: 'var(--renge-font-size-base)',
  },
  lg: {
    padding: 'var(--renge-space-3) var(--renge-space-5)',
    fontSize: 'var(--renge-font-size-lg)',
  },
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      size = 'md',
      variant = 'solid',
      colorScheme = 'accent',
      fullWidth = false,
      animation,
      style,
      children,
      ...props
    },
    ref
  ) {
    const getVariantStyles = (): React.CSSProperties => {
      switch (variant) {
        case 'solid':
          return {
            backgroundColor: `var(--renge-color-${colorScheme})`,
            color: 'var(--renge-color-fg-inverse)',
            border: 'none',
          };
        case 'outline':
          return {
            backgroundColor: 'transparent',
            color: `var(--renge-color-${colorScheme})`,
            border: `1px solid var(--renge-color-${colorScheme})`,
          };
        case 'ghost':
          return {
            backgroundColor: 'transparent',
            color: `var(--renge-color-${colorScheme})`,
            border: 'none',
          };
      }
    };

    return (
      <button
        ref={ref}
        style={{
          ...sizeStyles[size],
          ...getVariantStyles(),
          borderRadius: 'var(--renge-radius-2)',
          fontWeight: 500,
          cursor: 'pointer',
          transition: `all var(--renge-duration-2) var(--renge-easing-ease-out)`,
          width: fullWidth ? '100%' : undefined,
          animation: animation ? `var(--renge-animation-${animation})` : undefined,
          ...style,
        }}
        {...props}
      >
        {children}
      </button>
    );
  }
);