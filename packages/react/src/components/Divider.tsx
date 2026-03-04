// packages/react/src/components/Divider.tsx

import { forwardRef, type ComponentPropsWithoutRef } from 'react';

type SpaceKey = '0' | '1' | '2' | '3' | '4' | '5' | '6';

interface DividerProps extends ComponentPropsWithoutRef<'hr'> {
  orientation?: 'horizontal' | 'vertical';
  spacing?: SpaceKey;
  color?: 'border' | 'border-subtle';
}

export const Divider = forwardRef<HTMLHRElement, DividerProps>(
  function Divider(
    {
      orientation = 'horizontal',
      spacing = '3',
      color = 'border-subtle',
      style,
      ...props
    },
    ref
  ) {
    const isHorizontal = orientation === 'horizontal';

    return (
      <hr
        ref={ref}
        style={{
          border: 'none',
          backgroundColor: `var(--renge-color-${color})`,
          ...(isHorizontal
            ? {
              height: '1px',
              width: '100%',
              marginBlock: `var(--renge-space-${spacing})`,
            }
            : {
              width: '1px',
              height: '100%',
              marginInline: `var(--renge-space-${spacing})`,
            }),
          ...style,
        }}
        {...props}
      />
    );
  }
);