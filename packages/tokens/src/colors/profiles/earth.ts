/**
 * Earth Profile
 *
 * Grounded, warm. The alternative light theme.
 * Ochre accent, birch-white backgrounds.
 */

import type { SemanticColorMap } from "../../types";
import { oklch, palette } from "../palette";

export const earth: SemanticColorMap = {
  bg: oklch(palette.birchWhite),
  bgSubtle: oklch(palette.sandBeige),
  bgMuted: "oklch(92% 0.04 30)",
  bgInverse: oklch(palette.earthBrown),
  fg: "oklch(20% 0.03 30)",
  fgSubtle: "oklch(35% 0.04 30)",
  fgMuted: oklch(palette.stoneGrey),
  fgInverse: oklch(palette.birchWhite),
  border: "oklch(78% 0.04 30)",
  borderSubtle: "oklch(88% 0.02 30)",
  borderFocus: oklch(palette.earthyOchre),
  accent: oklch(palette.earthyOchre),
  accentHover: oklch(palette.earthBrown),
  accentSubtle: "oklch(90% 0.08 40)",
  success: oklch(palette.mossGreen),
  successSubtle: "oklch(90% 0.08 130)",
  warning: oklch(palette.sunsetOrange),
  warningSubtle: "oklch(90% 0.08 40)",
  danger: oklch(palette.autumnRed),
  dangerSubtle: "oklch(90% 0.08 10)",
  info: oklch(palette.slateBlue),
  infoSubtle: "oklch(90% 0.08 210)",
};
