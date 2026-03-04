// packages/react/src/components/Stack.tsx

import { forwardRef, type ElementType, type ComponentPropsWithoutRef } from 'react';

type SpaceKey = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10';

interface StackOwnProps {
  gap?: SpaceKey;
  direction?: 'vertical' | 'horizontal';
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
  as?: ElementType;
}

type StackProps<T extends ElementType = 'div'> = StackOwnProps &
  Omit<ComponentPropsWithoutRef<T>, keyof StackOwnProps>;

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  function Stack(
    {
      gap = '3',
      direction = 'vertical',
      align = 'stretch',
      justify = 'start',
      as: Component = 'div',
      style,
      children,
      ...props
    },
    ref
  ) {
    const alignMap = {
      start: 'flex-start',
      center: 'center',
      end: 'flex-end',
      stretch: 'stretch',
    };

    const justifyMap = {
      start: 'flex-start',
      center: 'center',
      end: 'flex-end',
      between: 'space-between',
      around: 'space-around',
    };

    return (
      <Component
        ref={ref}
        style={{
          display: 'flex',
          flexDirection: direction === 'vertical' ? 'column' : 'row',
          gap: `var(--renge-space-${gap})`,
          alignItems: alignMap[align],
          justifyContent: justifyMap[justify],
          ...style,
        }}
        {...props}
      >
        {children}
      </Component>
    );
  }
);