import type { Meta, StoryObj } from "@storybook/react";
import { Button, ANIMATION_NAMES } from "@renge/react";

const ANIM_OPTIONS = [undefined, ...ANIMATION_NAMES];

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["solid", "outline", "ghost"] },
    colorScheme: { control: "select", options: ["accent", "danger", "success"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
    fullWidth: { control: "boolean" },
    disabled: { control: "boolean" },
    animation: { control: "select", options: ANIM_OPTIONS },
    children: { control: "text" },
  },
  args: {
    children: "Button",
    variant: "solid",
    colorScheme: "accent",
    size: "md",
    fullWidth: false,
    disabled: false,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// Fixes variant=solid; shows all colorSchemes. Controls affect size and fullWidth.
export const Solid: Story = {
  args: { variant: "solid" },
  render: (args) => (
    <div style={{ display: "flex", gap: "var(--renge-space-3)", flexWrap: "wrap", alignItems: "center" }}>
      <Button {...args} colorScheme="accent">Accent</Button>
      <Button {...args} colorScheme="danger">Danger</Button>
      <Button {...args} colorScheme="success">Success</Button>
    </div>
  ),
};

// Fixes variant=outline; shows all colorSchemes. Controls affect size and fullWidth.
export const Outline: Story = {
  args: { variant: "outline" },
  render: (args) => (
    <div style={{ display: "flex", gap: "var(--renge-space-3)", flexWrap: "wrap", alignItems: "center" }}>
      <Button {...args} colorScheme="accent">Accent</Button>
      <Button {...args} colorScheme="danger">Danger</Button>
      <Button {...args} colorScheme="success">Success</Button>
    </div>
  ),
};

// Fixes variant=ghost; shows all colorSchemes. Controls affect size and fullWidth.
export const Ghost: Story = {
  args: { variant: "ghost" },
  render: (args) => (
    <div style={{ display: "flex", gap: "var(--renge-space-3)", flexWrap: "wrap", alignItems: "center" }}>
      <Button {...args} colorScheme="accent">Accent</Button>
      <Button {...args} colorScheme="danger">Danger</Button>
      <Button {...args} colorScheme="success">Success</Button>
    </div>
  ),
};

// Shows all sizes. Controls affect variant and colorScheme.
export const Sizes: Story = {
  args: { variant: "solid", colorScheme: "accent" },
  render: (args) => (
    <div style={{ display: "flex", gap: "var(--renge-space-3)", alignItems: "center", flexWrap: "wrap" }}>
      <Button {...args} size="sm">Small</Button>
      <Button {...args} size="md">Medium</Button>
      <Button {...args} size="lg">Large</Button>
    </div>
  ),
};

export const FullWidth: Story = {
  args: { fullWidth: true, children: "Full Width Button" },
};

// Shows disabled across all variants. Controls affect size and colorScheme.
export const Disabled: Story = {
  args: { disabled: true },
  render: (args) => (
    <div style={{ display: "flex", gap: "var(--renge-space-3)", flexWrap: "wrap", alignItems: "center" }}>
      <Button {...args} variant="solid">Solid</Button>
      <Button {...args} variant="outline">Outline</Button>
      <Button {...args} variant="ghost">Ghost</Button>
    </div>
  ),
};
