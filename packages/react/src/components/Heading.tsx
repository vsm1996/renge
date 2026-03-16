// packages/react/src/components/Heading.tsx

import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import type { AnimationName } from '@renge-ui/tokens';

type Level = 1 | 2 | 3 | 4 | 5 | 6;
type SizeKey = 'lg' | 'xl' | '2xl' | '3xl' | '4xl';

interface HeadingProps extends Omit<ComponentPropsWithoutRef<'h1'>, 'color'> {
  level?: Level;
  size?: SizeKey;
  color?: 'fg' | 'fg-subtle' | 'accent';
  animation?: AnimationName;
}

const defaultSizeForLevel: Record<Level, SizeKey> = {
  1: '3xl',
  2: '2xl',
  3: 'xl',
  4: 'lg',
  5: 'lg',
  6: 'lg',
};

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  function Heading(
    {
      level = 2,
      size,
      color = 'fg',
      animation,
      style,
      children,
      ...props
    },
    ref
  ) {
    const Component = `h${level}` as const;
    const resolvedSize = size ?? defaultSizeForLevel[level];

    return (
      <Component
        ref={ref}
        style={{
          fontSize: `var(--renge-font-size-${resolvedSize})`,
          lineHeight: `var(--renge-line-height-${resolvedSize})`,
          color: `var(--renge-color-${color})`,
          fontWeight: 600,
          margin: 0,
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