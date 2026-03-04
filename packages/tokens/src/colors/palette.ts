/**
 * Renge Palette
 *
 * 43 nature-inspired OKLCH colors.
 * This is the raw palette — components never consume these directly.
 * Profiles map palette → semantic tokens.
 */

import type { OklchColor } from "../types";

export const palette = {
  // Blues
  skyBlue: { l: 75, c: 0.35, h: 210 },
  oceanBlue: { l: 50, c: 0.5, h: 190 },
  riverBlue: { l: 60, c: 0.45, h: 200 },
  slateBlue: { l: 50, c: 0.4, h: 210 },
  cobaltBlue: { l: 45, c: 0.55, h: 210 },

  // Indigos
  indigo: { l: 45, c: 0.25, h: 280 },
  deepIndigo: { l: 30, c: 0.2, h: 280 },
  wildIndigo: { l: 55, c: 0.3, h: 275 },

  // Purples
  twilightPurple: { l: 40, c: 0.45, h: 250 },
  lavender: { l: 75, c: 0.35, h: 240 },
  plumPurple: { l: 45, c: 0.6, h: 270 },

  // Greens
  grassGreen: { l: 70, c: 0.45, h: 120 },
  leafGreen: { l: 75, c: 0.55, h: 120 },
  mossGreen: { l: 50, c: 0.6, h: 130 },
  seaFoam: { l: 80, c: 0.3, h: 170 },
  rainforest: { l: 45, c: 0.6, h: 130 },
  pineGreen: { l: 45, c: 0.65, h: 140 },
  appleGreen: { l: 75, c: 0.45, h: 120 },
  oliveGreen: { l: 55, c: 0.45, h: 90 },
  mossyRock: { l: 45, c: 0.4, h: 125 },

  // Browns & Earthtones
  earthBrown: { l: 45, c: 0.35, h: 30 },
  barkBrown: { l: 40, c: 0.3, h: 30 },
  chocolate: { l: 35, c: 0.5, h: 30 },
  sandBeige: { l: 75, c: 0.15, h: 40 },
  desertTan: { l: 80, c: 0.2, h: 30 },
  earthyOchre: { l: 60, c: 0.5, h: 40 },

  // Oranges & Yellows
  sunsetOrange: { l: 60, c: 0.6, h: 40 },
  leafYellow: { l: 70, c: 0.45, h: 60 },
  wheatYellow: { l: 75, c: 0.3, h: 60 },
  honeyYellow: { l: 80, c: 0.35, h: 50 },
  lemonYellow: { l: 85, c: 0.45, h: 60 },

  // Reds & Pinks
  autumnRed: { l: 60, c: 0.65, h: 10 },
  raspberryRed: { l: 65, c: 0.7, h: 0 },
  firebrickRed: { l: 55, c: 0.6, h: 10 },
  cranberryRed: { l: 60, c: 0.55, h: 0 },
  coralPink: { l: 80, c: 0.35, h: 350 },
  cherryBlossom: { l: 85, c: 0.35, h: 340 },
  wildflowerPink: { l: 80, c: 0.35, h: 320 },

  // Neutrals
  snowWhite: { l: 100, c: 0.05, h: 0 },
  fogWhite: { l: 90, c: 0.1, h: 210 },
  birchWhite: { l: 90, c: 0.1, h: 20 },
  skyGrey: { l: 60, c: 0.2, h: 210 },
  stoneGrey: { l: 55, c: 0.2, h: 10 },
} as const satisfies Record<string, OklchColor>;

/**
 * Convert an OklchColor to a CSS oklch() string.
 */
export function oklch(color: OklchColor): string {
  return `oklch(${color.l}% ${color.c} ${color.h})`;
}

/**
 * Generate CSS custom properties for the full palette.
 */
export function createPaletteVars(): Record<string, string> {
  const vars: Record<string, string> = {};

  for (const [key, color] of Object.entries(palette)) {
    const kebab = key.replace(/([A-Z])/g, "-$1").toLowerCase();
    vars[`--renge-palette-${kebab}`] = oklch(color);
  }

  return vars;
}
