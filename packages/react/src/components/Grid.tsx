// packages/react/src/components/Grid.tsx

import { forwardRef, type ComponentPropsWithoutRef } from 'react';

type SpaceKey = '0' | '1' | '2' | '3' | '4' | '5' | '6';

interface GridProps extends ComponentPropsWithoutRef<'div'> {
  columns?: number | string;  // number for fixed, string for template
  rows?: number | string;
  gap?: SpaceKey;
  gapX?: SpaceKey;
  gapY?: SpaceKey;
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'stretch';
}

export const Grid = forwardRef<HTMLDivElement, GridProps>(
  function Grid(
    {
      columns = 1,
      rows,
      gap = '3',
      gapX,
      gapY,
      align = 'stretch',
      justify = 'stretch',
      style,
      children,
      ...props
    },
    ref
  ) {
    const getTemplate = (value: number | string | undefined) => {
      if (value === undefined) return undefined;
      if (typeof value === 'number') return `repeat(${value}, 1fr)`;
      return value;
    };

    return (
      <div
        ref={ref}
        style={{
          display: 'grid',
          gridTemplateColumns: getTemplate(columns),
          gridTemplateRows: getTemplate(rows),
          columnGap: gapX ? `var(--renge-space-${gapX})` : `var(--renge-space-${gap})`,
          rowGap: gapY ? `var(--renge-space-${gapY})` : `var(--renge-space-${gap})`,
          alignItems: align,
          justifyItems: justify,
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);