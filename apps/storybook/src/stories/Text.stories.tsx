import type { Meta, StoryObj } from "@storybook/react";
import { Text, ANIMATION_NAMES, useRenge } from "@renge/react";

const ANIM_OPTIONS = [undefined, ...ANIMATION_NAMES];

const meta = {
  title: "Components/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["xs", "sm", "base", "lg", "xl", "2xl", "3xl", "4xl"] },
    color: { control: "select", options: ["fg", "fg-subtle", "fg-muted", "accent", "success", "warning", "danger"] },
    weight: { control: "select", options: ["normal", "medium", "semibold", "bold"] },
    align: { control: "select", options: ["left", "center", "right"] },
    as: { control: "select", options: ["span", "p", "label", "div", "strong", "em", "small"] },
    animation: { control: "select", options: ANIM_OPTIONS },
    children: { control: "text" },
  },
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
    size: "base",
    color: "fg",
    weight: "normal",
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// The φ scale runs negative as well as positive, producing xs (~6px) and sm (~10px)
// at the default 16px typeBase. Both fall below or at the browser minimum rendering
// threshold (~10–12px) and are intended for decorative or non-readable contexts
// (chart labels, legal footnotes, watermarks). Raise typeBase to push them into
// readable territory — e.g. typeBase=20 gives xs ~7.6px, sm ~12px.
const SUB_THRESHOLD = new Set(["xs", "sm"]);

function SizesDemo(args: { color: "fg"; weight: "normal" }) {
  const { theme } = useRenge();
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--renge-space-3)" }}>
      {(["xs", "sm", "base", "lg", "xl", "2xl", "3xl", "4xl"] as const).map((size) => {
        const px = theme.vars[`--renge-font-size-${size}`] ?? "";
        const warn = SUB_THRESHOLD.has(size);
        return (
          <div key={size} style={{ display: "flex", alignItems: "baseline", gap: "var(--renge-space-3)" }}>
            <Text size="xs" color="fg-muted" style={{ width: 40, flexShrink: 0 }}>{size}</Text>
            <Text {...args} size={size}>The quick brown fox</Text>
            <Text
              size="xs"
              color={warn ? "warning" : "fg-muted"}
              style={{ flexShrink: 0, fontFamily: "monospace" }}
            >
              {px}{warn ? " — decorative" : ""}
            </Text>
          </div>
        );
      })}
    </div>
  );
}

// Shows all sizes. Controls affect color and weight.
export const Sizes: Story = {
  args: { color: "fg", weight: "normal" },
  render: (args) => <SizesDemo {...(args as { color: "fg"; weight: "normal" })} />,
};

// Shows all colors. Controls affect size and weight.
export const Colors: Story = {
  args: { size: "base", weight: "normal" },
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--renge-space-3)" }}>
      {(["fg", "fg-subtle", "fg-muted", "accent", "success", "warning", "danger"] as const).map((color) => (
        <div key={color} style={{ display: "flex", alignItems: "center", gap: "var(--renge-space-3)" }}>
          <Text size="sm" color="fg-muted" style={{ width: 80, flexShrink: 0 }}>{color}</Text>
          <Text {...args} color={color}>The quick brown fox jumps over the lazy dog.</Text>
        </div>
      ))}
    </div>
  ),
};

// Shows all weights. Controls affect size and color.
export const Weights: Story = {
  args: { size: "base", color: "fg" },
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--renge-space-3)" }}>
      {(["normal", "medium", "semibold", "bold"] as const).map((weight) => (
        <div key={weight} style={{ display: "flex", alignItems: "center", gap: "var(--renge-space-3)" }}>
          <Text size="sm" color="fg-muted" style={{ width: 72, flexShrink: 0 }}>{weight}</Text>
          <Text {...args} weight={weight}>The quick brown fox jumps over the lazy dog.</Text>
        </div>
      ))}
    </div>
  ),
};

// Shows all alignments. Controls affect size, color, and weight.
export const Alignment: Story = {
  args: { size: "base", color: "fg", weight: "normal" },
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--renge-space-4)" }}>
      {(["left", "center", "right"] as const).map((align) => (
        <Text key={align} {...args} as="p" align={align}>
          {align}: The quick brown fox jumps over the lazy dog.
        </Text>
      ))}
    </div>
  ),
};
