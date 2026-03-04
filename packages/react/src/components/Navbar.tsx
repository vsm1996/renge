import { forwardRef, type ComponentPropsWithoutRef } from 'react';

type SpaceKey = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';

export interface NavbarProps extends ComponentPropsWithoutRef<'nav'> {
  sticky?: boolean;
  border?: boolean;
  height?: string;
  paddingX?: SpaceKey;
}

export const Navbar = forwardRef<HTMLElement, NavbarProps>(
  function Navbar(
    { sticky = false, border = true, height = '56px', paddingX = '5', style, children, ...props },
    ref
  ) {
    return (
      <nav
        ref={ref}
        style={{
          display: 'flex',
          alignItems: 'center',
          minHeight: height,
          padding: `0 var(--renge-space-${paddingX})`,
          background: 'var(--renge-color-bg)',
          borderBottom: border ? '1px solid var(--renge-color-border-subtle)' : undefined,
          position: sticky ? 'sticky' : undefined,
          top: sticky ? 0 : undefined,
          zIndex: sticky ? 100 : undefined,
          boxSizing: 'border-box',
          ...style,
        }}
        {...props}
      >
        {children}
      </nav>
    );
  }
);
