/**
 * Twilight Profile
 *
 * Dark, cool. The dark mode.
 * Deep indigo backgrounds, lavender accents.
 */

import type { SemanticColorMap } from "../../types";
import { oklch, palette } from "../palette";

export const twilight: SemanticColorMap = {
  bg: oklch(palette.deepIndigo),
  bgSubtle: "oklch(25% 0.15 270)",
  bgMuted: "oklch(22% 0.10 270)",
  bgInverse: oklch(palette.fogWhite),
  fg: "oklch(92% 0.03 250)",
  fgSubtle: "oklch(78% 0.04 250)",
  fgMuted: "oklch(55% 0.08 260)",
  fgInverse: oklch(palette.deepIndigo),
  border: "oklch(35% 0.08 270)",
  borderSubtle: "oklch(28% 0.06 270)",
  borderFocus: "oklch(75% 0.26 240)",          // lavender, chroma eased for dark bg
  accent:      "oklch(75% 0.26 240)",          // lavender — presence without eye fatigue
  accentHover: "oklch(75% 0.32 240)",          // slightly richer on hover
  accentSubtle: "oklch(30% 0.12 250)",
  success: oklch(palette.seaFoam),
  successSubtle: "oklch(28% 0.10 170)",
  warning: "oklch(80% 0.26 50)",
  warningSubtle: "oklch(28% 0.10 50)",
  danger: oklch(palette.coralPink),
  dangerSubtle: "oklch(28% 0.10 350)",
  info: oklch(palette.skyBlue),
  infoSubtle: "oklch(28% 0.10 210)",
};
