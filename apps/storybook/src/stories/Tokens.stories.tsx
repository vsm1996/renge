import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useRenge, ANIMATION_NAMES } from "@renge/react";
import type { AnimationName } from "@renge/react";

// ── Shared styles ─────────────────────────────────────────────────────────────

const mono: React.CSSProperties = {
  fontFamily: "monospace",
  fontSize: "var(--renge-font-size-xs)",
  color: "var(--renge-color-fg-muted)",
};

const sectionHeading: React.CSSProperties = {
  fontFamily: "monospace",
  fontSize: "var(--renge-font-size-xs)",
  fontWeight: 600,
  textTransform: "uppercase" as const,
  letterSpacing: "0.06em",
  color: "var(--renge-color-fg-subtle)",
  marginBottom: "var(--renge-space-3)",
};

const row: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "var(--renge-space-3)",
  marginBottom: "var(--renge-space-2)",
};

// ── Colors ────────────────────────────────────────────────────────────────────

const COLOR_GROUPS = [
  {
    label: "Background",
    tokens: ["bg", "bg-subtle", "bg-muted", "bg-inverse"],
  },
  {
    label: "Foreground",
    tokens: ["fg", "fg-subtle", "fg-muted", "fg-inverse"],
  },
  {
    label: "Border",
    tokens: ["border", "border-subtle", "border-focus"],
  },
  {
    label: "Accent",
    tokens: ["accent", "accent-hover", "accent-subtle"],
  },
  {
    label: "Status",
    tokens: [
      "success", "success-subtle",
      "warning", "warning-subtle",
      "danger",  "danger-subtle",
      "info",    "info-subtle",
    ],
  },
] as const;

function ColorsDemo() {
  const { theme } = useRenge();
  const vars = theme.vars;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--renge-space-7)" }}>
      {COLOR_GROUPS.map((group) => (
        <div key={group.label}>
          <div style={sectionHeading}>{group.label}</div>
          {group.tokens.map((token) => {
            const varName = `--renge-color-${token}`;
            const value = vars[varName] ?? "—";
            return (
              <div key={token} style={row}>
                <div
                  style={{
                    width: 48,
                    height: 32,
                    borderRadius: "var(--renge-radius-2)",
                    background: `var(${varName})`,
                    border: "1px solid var(--renge-color-border-subtle)",
                    flexShrink: 0,
                  }}
                />
                <div>
                  <div style={{ ...mono, color: "var(--renge-color-fg)", marginBottom: 2 }}>{varName}</div>
                  <div style={mono}>{value}</div>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

// ── Spacing ───────────────────────────────────────────────────────────────────

const SPACE_KEYS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"] as const;

function SpacingDemo() {
  const { theme } = useRenge();
  const vars = theme.vars;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--renge-space-2)" }}>
      {SPACE_KEYS.map((key) => {
        const varName = `--renge-space-${key}`;
        const value = vars[varName] ?? "0px";
        const px = parseFloat(value);
        return (
          <div key={key} style={row}>
            <div style={{ ...mono, color: "var(--renge-color-fg)", width: 24, textAlign: "right", flexShrink: 0 }}>{key}</div>
            <div
              style={{
                height: 18,
                width: Math.min(px, 500),
                minWidth: key === "0" ? 2 : 4,
                background: "var(--renge-color-accent)",
                borderRadius: "var(--renge-radius-1)",
                flexShrink: 0,
                opacity: key === "0" ? 0.25 : 1,
                transition: "width 0.3s var(--renge-easing-ease-out)",
              }}
            />
            <div style={mono}>{value}</div>
          </div>
        );
      })}
    </div>
  );
}

// ── Typography ────────────────────────────────────────────────────────────────

const TYPE_KEYS = ["xs", "sm", "base", "lg", "xl", "2xl", "3xl", "4xl"] as const;

function TypographyDemo() {
  const { theme } = useRenge();
  const vars = theme.vars;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--renge-space-5)" }}>
      {TYPE_KEYS.map((key) => {
        const fsVar = `--renge-font-size-${key}`;
        const lhVar = `--renge-line-height-${key}`;
        const fontSize = vars[fsVar] ?? "—";
        const lineHeight = vars[lhVar] ?? "—";
        return (
          <div key={key} style={{ display: "flex", alignItems: "baseline", gap: "var(--renge-space-4)" }}>
            <div style={{ ...mono, width: 48, flexShrink: 0, textAlign: "right" }}>{key}</div>
            <div
              style={{
                fontSize: `var(${fsVar})`,
                lineHeight: `var(${lhVar})`,
                color: "var(--renge-color-fg)",
                flex: 1,
              }}
            >
              The quick brown fox
            </div>
            <div style={{ ...mono, flexShrink: 0 }}>
              {fontSize} / lh {lineHeight}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ── Radii ─────────────────────────────────────────────────────────────────────

const RADIUS_KEYS = ["none", "1", "2", "3", "4", "5", "full"] as const;

function RadiiDemo() {
  const { theme } = useRenge();
  const vars = theme.vars;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--renge-space-5)" }}>
      {RADIUS_KEYS.map((key) => {
        const varName = `--renge-radius-${key}`;
        const value = vars[varName] ?? "—";
        return (
          <div key={key} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--renge-space-2)" }}>
            <div
              style={{
                width: 64,
                height: 64,
                background: "var(--renge-color-accent-subtle)",
                border: "2px solid var(--renge-color-accent)",
                borderRadius: `var(${varName})`,
                transition: "border-radius 0.3s var(--renge-easing-ease-out)",
              }}
            />
            <div style={{ ...mono, textAlign: "center" }}>
              <div style={{ color: "var(--renge-color-fg)" }}>{key}</div>
              <div>{value}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ── Motion ────────────────────────────────────────────────────────────────────

const DURATION_KEYS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"] as const;
const EASING_KEYS = ["linear", "ease-out", "ease-in", "ease-in-out", "spring"] as const;

function EasingPreview({ easingVar, durationVar }: { easingVar: string; durationVar: string }) {
  const [active, setActive] = useState(false);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "var(--renge-space-3)" }}>
      <button
        onClick={() => setActive((v) => !v)}
        style={{
          padding: "2px 10px",
          fontSize: "var(--renge-font-size-xs)",
          fontFamily: "monospace",
          background: "var(--renge-color-accent-subtle)",
          color: "var(--renge-color-accent)",
          border: "1px solid var(--renge-color-accent)",
          borderRadius: "var(--renge-radius-1)",
          cursor: "pointer",
          flexShrink: 0,
        }}
      >
        {active ? "←" : "→"}
      </button>
      <div style={{ position: "relative", width: 160, height: 20, flexShrink: 0 }}>
        <div
          style={{
            position: "absolute",
            top: 2,
            left: active ? 136 : 0,
            width: 20,
            height: 16,
            background: "var(--renge-color-accent)",
            borderRadius: "var(--renge-radius-full)",
            transition: `left var(${durationVar}) var(${easingVar})`,
          }}
        />
      </div>
    </div>
  );
}

function MotionDemo() {
  const { theme } = useRenge();
  const vars = theme.vars;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--renge-space-8)" }}>
      <div>
        <div style={sectionHeading}>Durations (Fibonacci × 100ms)</div>
        {DURATION_KEYS.map((key) => {
          const varName = `--renge-duration-${key}`;
          const value = vars[varName] ?? "—";
          const ms = parseFloat(value);
          return (
            <div key={key} style={row}>
              <div style={{ ...mono, color: "var(--renge-color-fg)", width: 24, textAlign: "right", flexShrink: 0 }}>{key}</div>
              <div
                style={{
                  height: 8,
                  width: Math.min(Math.max(ms / 3, 2), 280),
                  background: "var(--renge-color-success)",
                  borderRadius: "var(--renge-radius-full)",
                  flexShrink: 0,
                  transition: "width 0.3s var(--renge-easing-ease-out)",
                }}
              />
              <div style={mono}>{value}</div>
            </div>
          );
        })}
      </div>

      <div>
        <div style={sectionHeading}>Easing Curves — click → to preview</div>
        {EASING_KEYS.map((key) => {
          const varName = `--renge-easing-${key}`;
          const value = vars[varName] ?? "—";
          return (
            <div key={key} style={{ marginBottom: "var(--renge-space-4)" }}>
              <div style={{ ...row, marginBottom: "var(--renge-space-1)" }}>
                <div style={{ ...mono, color: "var(--renge-color-fg)", width: 100, flexShrink: 0 }}>{key}</div>
                <div style={mono}>{value}</div>
              </div>
              <div style={{ paddingLeft: 108 }}>
                <EasingPreview easingVar={varName} durationVar="--renge-duration-4" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Animations ────────────────────────────────────────────────────────────────

// Whether an animation is a one-shot enter (forwards) or a loop (infinite)
const LOOP_ANIMATIONS = new Set<AnimationName>([
  'pulse', 'vibrate', 'wave', 'breathe', 'fall', 'float', 'float-wave',
  'pulse-color-shift', 'swelling',
]);

function AnimationCard({ name }: { name: AnimationName }) {
  const [key, setKey] = useState(0);
  const { theme } = useRenge();
  const isLoop = LOOP_ANIMATIONS.has(name);
  const varName = `--renge-animation-${name}`;
  const value = theme.vars[varName] ?? "";
  const durationMatch = value.match(/var\((--renge-duration-\d+)\)/);
  const durationToken = durationMatch ? durationMatch[1] : null;
  const durationValue = durationToken ? (theme.vars[durationToken] ?? "") : "";

  return (
    <div
      style={{
        padding: "var(--renge-space-3)",
        border: "1px solid var(--renge-color-border-subtle)",
        borderRadius: "var(--renge-radius-2)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--renge-space-3)",
        minWidth: 0,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--renge-space-2)" }}>
        <div style={{ ...mono, color: "var(--renge-color-fg)", fontSize: "var(--renge-font-size-sm)" }}>{name}</div>
        {!isLoop && (
          <button
            onClick={() => setKey((k) => k + 1)}
            style={{
              padding: "2px 8px",
              fontSize: "var(--renge-font-size-xs)",
              fontFamily: "monospace",
              background: "var(--renge-color-accent-subtle)",
              color: "var(--renge-color-accent)",
              border: "1px solid var(--renge-color-accent)",
              borderRadius: "var(--renge-radius-1)",
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            replay
          </button>
        )}
      </div>
      <div
        key={key}
        style={{
          height: 48,
          borderRadius: "var(--renge-radius-2)",
          background: "var(--renge-color-accent-subtle)",
          border: "1px solid var(--renge-color-accent)",
          animation: `var(${varName})`,
        }}
      />
      <div style={{ ...mono, fontSize: "10px", color: "var(--renge-color-fg-muted)" }}>
        {varName}
      </div>
      {durationToken && (
        <div style={{ ...mono, fontSize: "10px", color: "var(--renge-color-fg-subtle)" }}>
          {durationToken} ({durationValue})
        </div>
      )}
    </div>
  );
}

function AnimationsDemo() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gap: "var(--renge-space-4)",
      }}
    >
      {ANIMATION_NAMES.map((name) => (
        <AnimationCard key={name} name={name} />
      ))}
    </div>
  );
}

// ── Meta & Stories ────────────────────────────────────────────────────────────

const meta = {
  title: "Design Tokens",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Colors: Story = {
  name: "Colors",
  render: () => <ColorsDemo />,
};

export const Spacing: Story = {
  name: "Spacing",
  render: () => <SpacingDemo />,
};

export const Typography: Story = {
  name: "Typography",
  render: () => <TypographyDemo />,
};

export const Radii: Story = {
  name: "Radii",
  render: () => <RadiiDemo />,
};

export const Motion: Story = {
  name: "Motion",
  render: () => <MotionDemo />,
};

export const Animations: Story = {
  name: "Animations",
  render: () => <AnimationsDemo />,
};
