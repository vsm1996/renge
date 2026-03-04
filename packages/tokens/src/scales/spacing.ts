/**
 * Spacing Scale
 *
 * Fibonacci × baseUnit. Natural growth, not arbitrary steps.
 * Default (baseUnit: 4): 4, 8, 12, 20, 32, 52, 84, 136, 220, 356
 */

import { FIBONACCI, applyVariance } from "../constants";

export function createSpacingScale(
  baseUnit: number,
  variance: number = 0,
  random?: () => number
): Record<string, string> {
  const scale: Record<string, string> = { "0": "0px" };

  FIBONACCI.forEach((fib, index) => {
    let value = fib * baseUnit;
    if (variance > 0 && random) {
      value = applyVariance(value, variance, random);
    }
    scale[String(index + 1)] = `${Math.round(value * 100) / 100}px`;
  });

  return scale;
}
