/**
 * Animation Scale
 *
 * Named animation presets drawn from natural motion archetypes.
 * Durations derive from the Fibonacci duration token system:
 *   --renge-duration-6  (1300ms) — quick
 *   --renge-duration-9  (5500ms) — natural (default for most presets)
 *   --renge-duration-10 (8900ms) — slow (breathing, blooming)
 *
 * Because durations are CSS var references, they participate in the variance
 * system and respond to any future duration token changes automatically.
 */

export type AnimationName =
  | 'vortex-reveal'
  | 'helix-rise'
  | 'sacred-fade'
  | 'spiral-in'
  | 'morph-fade-in'
  | 'bloom'
  | 'pulse'
  | 'vibrate'
  | 'wave'
  | 'breathe'
  | 'fall'
  | 'float'
  | 'float-wave'
  | 'pulse-color-shift'
  | 'swelling';

interface AnimationDef {
  /** Full CSS animation shorthand value (references a prefixed @keyframes name) */
  value: string;
  /** @keyframes block to inject into the document CSS */
  keyframes: string;
}

const DEFS: Record<AnimationName, AnimationDef> = {
  'vortex-reveal': {
    value: 'rengeVortexReveal var(--renge-duration-9) cubic-bezier(0.4, 0.0, 0.6, 1) forwards',
    keyframes: `@keyframes rengeVortexReveal {
  0%   { transform: scale(0.8) rotate(20deg); opacity: 0; }
  100% { transform: scale(1) rotate(0deg);   opacity: 1; }
}`,
  },
  'helix-rise': {
    value: 'rengeHelixRise var(--renge-duration-9) ease-out forwards',
    keyframes: `@keyframes rengeHelixRise {
  0%   { transform: translateY(50px) rotate(10deg); opacity: 0; }
  100% { transform: translateY(0) rotate(0deg);     opacity: 1; }
}`,
  },
  'sacred-fade': {
    value: 'rengeSacredFade var(--renge-duration-9) ease-in-out forwards',
    keyframes: `@keyframes rengeSacredFade {
  0%   { transform: scale(0.95); opacity: 0; }
  100% { transform: scale(1);    opacity: 1; }
}`,
  },
  'spiral-in': {
    value: 'rengeSpiralIn var(--renge-duration-9) cubic-bezier(0.75, 0.2, 0.5, 1) forwards',
    keyframes: `@keyframes rengeSpiralIn {
  0%   { transform: translate(-30px, 30px) rotate(-12deg); opacity: 0; }
  100% { transform: translate(0, 0) rotate(0deg);          opacity: 1; }
}`,
  },
  'morph-fade-in': {
    value: 'rengeMorphFadeIn var(--renge-duration-9) ease-in-out forwards',
    keyframes: `@keyframes rengeMorphFadeIn {
  0%   { opacity: 0; border-radius: 50% 30% 70% 50% / 50% 70% 30% 50%; transform: scale(0.8); }
  50%  { border-radius: 30% 50% 50% 70% / 70% 50% 50% 30%; }
  100% { opacity: 1; transform: scale(1); }
}`,
  },
  'bloom': {
    value: 'rengeBloom var(--renge-duration-10) ease-in-out forwards',
    keyframes: `@keyframes rengeBloom {
  0%   { transform: scale(0.9); opacity: 0.8; }
  100% { transform: scale(1);   opacity: 1;   }
}`,
  },
  'pulse': {
    value: 'rengePulse var(--renge-duration-9) infinite ease-in-out',
    keyframes: `@keyframes rengePulse {
  0%, 100% { transform: scale(1);    opacity: 1;   }
  50%       { transform: scale(1.05); opacity: 0.8; }
}`,
  },
  'vibrate': {
    value: 'rengeVibrate var(--renge-duration-6) infinite linear',
    keyframes: `@keyframes rengeVibrate {
  0%   { transform: translate(0); }
  25%  { transform: translate(-1px, 1px); }
  50%  { transform: translate(1px, -1px); }
  75%  { transform: translate(-1px, 1px); }
  100% { transform: translate(0); }
}`,
  },
  'wave': {
    value: 'rengeWave var(--renge-duration-9) infinite ease-in-out',
    keyframes: `@keyframes rengeWave {
  0%   { transform: rotate(0deg); }
  50%  { transform: rotate(5deg); }
  100% { transform: rotate(0deg); }
}`,
  },
  'breathe': {
    value: 'rengeBreathe var(--renge-duration-10) ease-in-out infinite',
    keyframes: `@keyframes rengeBreathe {
  0%, 100% { transform: scale(1);    }
  50%       { transform: scale(1.08); }
}`,
  },
  'fall': {
    value: 'rengeFall var(--renge-duration-9) ease-in-out infinite',
    keyframes: `@keyframes rengeFall {
  0%   { transform: translateY(0);    }
  50%  { transform: translateY(10px); }
  100% { transform: translateY(0);    }
}`,
  },
  'float': {
    value: 'rengeFloat var(--renge-duration-9) ease-in-out infinite',
    keyframes: `@keyframes rengeFloat {
  0%   { transform: translateY(0);     }
  50%  { transform: translateY(-10px); }
  100% { transform: translateY(0);     }
}`,
  },
  'float-wave': {
    value: 'rengeFloatWave var(--renge-duration-9) ease-in-out infinite',
    keyframes: `@keyframes rengeFloatWave {
  0%   { transform: translateY(0);     }
  50%  { transform: translateY(-22px); }
  100% { transform: translateY(0);     }
}`,
  },
  'pulse-color-shift': {
    value: 'rengePulseColorShift var(--renge-duration-9) infinite ease-in-out',
    keyframes: `@keyframes rengePulseColorShift {
  0%, 100% { background: var(--renge-color-success); }
  50%       { background: var(--renge-color-danger);  }
}`,
  },
  'swelling': {
    value: 'rengeSwelling var(--renge-duration-9) ease-in-out infinite',
    keyframes: `@keyframes rengeSwelling {
  0%, 100% { transform: scale(1);   opacity: 1;   }
  50%       { transform: scale(1.1); opacity: 0.8; }
}`,
  },
};

export const ANIMATION_NAMES = Object.keys(DEFS) as AnimationName[];

/** CSS custom properties: --renge-animation-<name> = "<shorthand value>" */
export function createAnimationVars(): Record<string, string> {
  const vars: Record<string, string> = {};
  for (const [name, def] of Object.entries(DEFS)) {
    vars[`--renge-animation-${name}`] = def.value;
  }
  return vars;
}

/** All @keyframes blocks to inject before the :root token block */
export function createAnimationKeyframesCSS(): string {
  return Object.values(DEFS).map((d) => d.keyframes).join('\n\n');
}
