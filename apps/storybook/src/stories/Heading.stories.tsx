import type { Meta, StoryObj } from "@storybook/react";
import { Heading, ANIMATION_NAMES } from "@renge/react";

const ANIM_OPTIONS = [undefined, ...ANIMATION_NAMES];

const meta = {
  title: "Components/Heading",
  component: Heading,
  tags: ["autodocs"],
  argTypes: {
    level: { control: "select", options: [1, 2, 3, 4, 5, 6] },
    size: { control: "select", options: ["lg", "xl", "2xl", "3xl", "4xl"] },
    color: { control: "select", options: ["fg", "fg-subtle", "accent"] },
    animation: { control: "select", options: ANIM_OPTIONS },
    children: { control: "text" },
  },
  args: {
    children: "A beautifully proportioned heading",
    level: 2,
    color: "fg",
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// Shows all levels with their default sizes. Controls affect color.
export const AllLevels: Story = {
  args: { color: "fg" },
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--renge-space-4)" }}>
      {([1, 2, 3, 4, 5, 6] as const).map((level) => (
        <div key={level} style={{ display: "flex", alignItems: "baseline", gap: "var(--renge-space-3)" }}>
          <span style={{ fontSize: "var(--renge-font-size-xs)", color: "var(--renge-color-fg-muted)", width: 20, flexShrink: 0 }}>h{level}</span>
          <Heading {...args} level={level}>Heading level {level}</Heading>
        </div>
      ))}
    </div>
  ),
};

// Shows all colors. Controls affect level.
export const Colors: Story = {
  args: { level: 2 },
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--renge-space-3)" }}>
      <Heading {...args} color="fg">Default foreground</Heading>
      <Heading {...args} color="fg-subtle">Subtle foreground</Heading>
      <Heading {...args} color="accent">Accent color</Heading>
    </div>
  ),
};

// Shows size override — semantic level vs visual size. Controls affect color.
export const SizeOverrides: Story = {
  args: { color: "fg" },
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--renge-space-3)" }}>
      <Heading {...args} level={4} size="3xl">h4 rendered at 3xl</Heading>
      <Heading {...args} level={1} size="lg">h1 rendered at lg</Heading>
      <Heading {...args} level={2} size="4xl">h2 rendered at 4xl</Heading>
    </div>
  ),
};
