// packages/react/src/components/Section.tsx

import { forwardRef, type ElementType, type ComponentPropsWithoutRef } from 'react';
import type { AnimationName } from '@renge/tokens';

type SpaceKey = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';

interface SectionOwnProps {
  padding?: SpaceKey;
  paddingX?: SpaceKey;
  paddingY?: SpaceKey;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'none';
  center?: boolean;
  animation?: AnimationName;
  as?: ElementType;
}

type SectionProps<T extends ElementType = 'section'> = SectionOwnProps &
  Omit<ComponentPropsWithoutRef<T>, keyof SectionOwnProps>;

const maxWidthMap = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  full: '100%',
  none: undefined,
};

export const Section = forwardRef<HTMLElement, SectionProps>(
  function Section(
    {
      padding,
      paddingX = '4',
      paddingY = '6',
      maxWidth = 'lg',
      center = true,
      animation,
      as: Component = 'section',
      style,
      children,
      ...props
    },
    ref
  ) {
    return (
      <Component
        ref={ref}
        style={{
          paddingInline: padding ? `var(--renge-space-${padding})` : `var(--renge-space-${paddingX})`,
          paddingBlock: padding ? `var(--renge-space-${padding})` : `var(--renge-space-${paddingY})`,
          maxWidth: maxWidthMap[maxWidth],
          marginInline: center ? 'auto' : undefined,
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