import { forwardRef, type ComponentPropsWithoutRef } from 'react';

// Inject keyframe once when module loads
if (typeof document !== 'undefined') {
  const id = 'renge-spinner-kf';
  if (!document.getElementById(id)) {
    const s = document.createElement('style');
    s.id = id;
    s.textContent = '@keyframes rengeSpinnerSpin { to { transform: rotate(360deg); } }';
    document.head.appendChild(s);
  }
}

export type SpinnerSize = 'sm' | 'md' | 'lg';
export type SpinnerColor = 'accent' | 'fg' | 'fg-muted';

export interface SpinnerProps extends ComponentPropsWithoutRef<'span'> {
  size?: SpinnerSize;
  color?: SpinnerColor;
  label?: string;
}

const sizePx: Record<SpinnerSize, number> = { sm: 16, md: 24, lg: 32 };
const borderWidth: Record<SpinnerSize, string> = { sm: '2px', md: '2px', lg: '3px' };

export const Spinner = forwardRef<HTMLSpanElement, SpinnerProps>(
  function Spinner({ size = 'md', color = 'accent', label = 'Loading', style, ...props }, ref) {
    const px = sizePx[size];
    const bw = borderWidth[size];
    return (
      <span
        ref={ref}
        role="status"
        aria-label={label}
        style={{
          display: 'inline-block',
          width: px,
          height: px,
          borderRadius: 'var(--renge-radius-full)',
          border: `${bw} solid var(--renge-color-border-subtle)`,
          borderTopColor: `var(--renge-color-${color})`,
          animation: `rengeSpinnerSpin var(--renge-duration-3) linear infinite`,
          flexShrink: 0,
          ...style,
        }}
        {...props}
      />
    );
  }
);
