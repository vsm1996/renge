// packages/react/src/components/Card.tsx

import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import type { AnimationName } from '@renge/tokens';

type SpaceKey = '0' | '1' | '2' | '3' | '4' | '5' | '6';
type RadiusKey = 'none' | '1' | '2' | '3' | '4' | '5' | 'full';

interface CardProps extends ComponentPropsWithoutRef<'div'> {
  padding?: SpaceKey;
  radius?: RadiusKey;
  variant?: 'elevated' | 'outlined' | 'filled';
  animation?: AnimationName;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  function Card(
    {
      padding = '4',
      radius = '3',
      variant = 'elevated',
      animation,
      style,
      children,
      ...props
    },
    ref
  ) {
    const variantStyles: Record<string, React.CSSProperties> = {
      elevated: {
        backgroundColor: `var(--renge-color-bg)`,
        boxShadow: '0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)',
      },
      outlined: {
        backgroundColor: `var(--renge-color-bg)`,
        border: `1px solid var(--renge-color-border)`,
      },
      filled: {
        backgroundColor: `var(--renge-color-bg-subtle)`,
      },
    };

    return (
      <div
        ref={ref}
        style={{
          padding: `var(--renge-space-${padding})`,
          borderRadius: `var(--renge-radius-${radius})`,
          ...variantStyles[variant],
          animation: animation ? `var(--renge-animation-${animation})` : undefined,
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);