import type { Meta, StoryObj } from "@storybook/react";
import { Card, Text, Heading, ANIMATION_NAMES } from "@renge/react";

const ANIM_OPTIONS = [undefined, ...ANIMATION_NAMES];

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["elevated", "outlined", "filled"] },
    padding: { control: "select", options: ["0", "1", "2", "3", "4", "5", "6"] },
    radius: { control: "select", options: ["none", "1", "2", "3", "4", "5", "full"] },
    animation: { control: "select", options: ANIM_OPTIONS },
  },
  args: {
    variant: "elevated",
    padding: "4",
    radius: "3",
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

const CardContent = () => (
  <>
    <Heading level={3}>Card Title</Heading>
    <Text as="p" color="fg-subtle" style={{ marginTop: "var(--renge-space-2)" }}>
      This is some card body content demonstrating how text looks inside a card.
    </Text>
  </>
);

export const Default: Story = {
  render: (args) => (
    <Card {...args} style={{ maxWidth: 360 }}>
      <CardContent />
    </Card>
  ),
};

// Shows all variants side by side. Controls affect padding and radius.
export const Variants: Story = {
  args: { padding: "4", radius: "3" },
  render: (args) => (
    <div style={{ display: "flex", gap: "var(--renge-space-4)", flexWrap: "wrap" }}>
      <Card {...args} variant="elevated" style={{ flex: "1 1 280px" }}>
        <Heading level={4}>Elevated</Heading>
        <Text as="p" color="fg-subtle" style={{ marginTop: "var(--renge-space-2)" }}>Box shadow for depth.</Text>
      </Card>
      <Card {...args} variant="outlined" style={{ flex: "1 1 280px" }}>
        <Heading level={4}>Outlined</Heading>
        <Text as="p" color="fg-subtle" style={{ marginTop: "var(--renge-space-2)" }}>Border defines the card edge.</Text>
      </Card>
      <Card {...args} variant="filled" style={{ flex: "1 1 280px" }}>
        <Heading level={4}>Filled</Heading>
        <Text as="p" color="fg-subtle" style={{ marginTop: "var(--renge-space-2)" }}>Subtle background fill.</Text>
      </Card>
    </div>
  ),
};

// Shows all padding steps. Controls affect variant and radius.
export const Padding: Story = {
  args: { variant: "outlined", radius: "3" },
  render: (args) => (
    <div style={{ display: "flex", gap: "var(--renge-space-4)", flexWrap: "wrap" }}>
      {(["1", "2", "3", "4", "5", "6"] as const).map((p) => (
        <Card key={p} {...args} padding={p} style={{ flex: "0 0 auto" }}>
          <Text size="sm" color="fg-muted">padding={p}</Text>
        </Card>
      ))}
    </div>
  ),
};

// Shows all radius steps. Controls affect variant and padding.
export const Radius: Story = {
  args: { variant: "filled", padding: "3" },
  render: (args) => (
    <div style={{ display: "flex", gap: "var(--renge-space-4)", flexWrap: "wrap" }}>
      {(["none", "1", "2", "3", "4", "5", "full"] as const).map((r) => (
        <Card key={r} {...args} radius={r} style={{ flex: "0 0 auto" }}>
          <Text size="sm" color="fg-muted">radius={r}</Text>
        </Card>
      ))}
    </div>
  ),
};
