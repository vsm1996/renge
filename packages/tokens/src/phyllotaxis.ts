/**
 * Phyllotaxis
 *
 * Golden angle spiral arrangement — sunflower, pinecone, succulent patterns.
 * Use for: avatar clusters, tag clouds, decorative patterns, radial menus, data viz nodes.
 */

import { GOLDEN_ANGLE } from "./constants";
import type { PhyllotaxisPoint, PhyllotaxisConfig } from "./types";

export function phyllotaxis(config: PhyllotaxisConfig): PhyllotaxisPoint[] {
  const {
    count,
    spread = 10,
    angleOffset = GOLDEN_ANGLE,
    scale = 1,
  } = config;

  const points: PhyllotaxisPoint[] = [];

  for (let i = 0; i < count; i++) {
    const angle = i * angleOffset * (Math.PI / 180);
    const radius = spread * Math.sqrt(i) * scale;

    points.push({
      x: radius * Math.cos(angle),
      y: radius * Math.sin(angle),
      index: i,
      angle,
      radius,
    });
  }

  return points;
}
