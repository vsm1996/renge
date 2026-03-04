// packages/react/src/components/Text.tsx

import { forwardRef, type ElementType, type ComponentPropsWithoutRef } from 'react';
import type { AnimationName } from '@renge/tokens';

type SizeKey = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
type ColorKey = 'fg' | 'fg-subtle' | 'fg-muted' | 'accent' | 'success' | 'warning' | 'danger';

interface TextOwnProps {
  size?: SizeKey;
  color?: ColorKey;
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  align?: 'left' | 'center' | 'right';
  animation?: AnimationName;
  as?: ElementType;
}

type TextProps<T extends ElementType = 'span'> = TextOwnProps &
  Omit<ComponentPropsWithoutRef<T>, keyof TextOwnProps>;

export const Text = forwardRef<HTMLSpanElement, TextProps>(
  function Text(
    {
      size = 'base',
      color = 'fg',
      weight = 'normal',
      align,
      animation,
      as: Component = 'span',
      style,
      children,
      ...props
    },
    ref
  ) {
    const weightMap = {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    };

    return (
      <Component
        ref={ref}
        style={{
          fontSize: `var(--renge-font-size-${size})`,
          lineHeight: `var(--renge-line-height-${size})`,
          color: `var(--renge-color-${color})`,
          fontWeight: weightMap[weight],
          textAlign: align,
          animation: animation ? `var(--renge-animation-${animation})` : undefined,
          ...style,
        }}
        {...props}
      >
        {children}
      </Component>
    );
  }
);