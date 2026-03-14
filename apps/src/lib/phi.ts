export const PHI = (1 + Math.sqrt(5)) / 2;
export const GOLDEN_ANGLE = 360 / (PHI * PHI);
export const FIBONACCI = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89] as const;

/** Framer Motion bezier easing — typed tuple as required by FM v12+ */
export const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** PHI^n */
export function phi(n: number): number {
  return Math.pow(PHI, n);
}

/** Fibonacci spacing: fib × 4px */
export function space(step: number): string {
  return `var(--renge-space-${step})`;
}
