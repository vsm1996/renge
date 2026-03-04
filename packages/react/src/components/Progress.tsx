import { forwardRef, type ComponentPropsWithoutRef } from 'react';

export type ProgressColor = 'accent' | 'success' | 'warning' | 'danger';
export type ProgressSize = 'sm' | 'md' | 'lg';

export interface ProgressProps extends Omit<ComponentPropsWithoutRef<'div'>, 'children'> {
  value: number;
  color?: ProgressColor;
  size?: ProgressSize;
  radius?: 'none' | 'full';
  label?: string;
}

const trackHeight: Record<ProgressSize, number> = { sm: 4, md: 8, lg: 12 };

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  function Progress(
    { value, color = 'accent', size = 'md', radius = 'full', label, style, ...props },
    ref
  ) {
    const clamped = Math.min(100, Math.max(0, value));
    const borderRadius = radius === 'full' ? 'var(--renge-radius-full)' : '0px';
    const height = trackHeight[size];

    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
        style={{
          width: '100%',
          height,
          borderRadius,
          background: 'var(--renge-color-bg-muted)',
          overflow: 'hidden',
          ...style,
        }}
        {...props}
      >
        <div
          style={{
            height: '100%',
            width: `${clamped}%`,
            borderRadius,
            background: `var(--renge-color-${color})`,
            transition: `width var(--renge-duration-3) var(--renge-easing-ease-out)`,
          }}
        />
      </div>
    );
  }
);
