import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@renge/react";
import type { BadgeVariant, BadgeSize } from "@renge/react";

const VARIANTS: BadgeVariant[] = ["neutral", "accent", "success", "warning", "danger", "info"];
const SIZES: BadgeSize[] = ["sm", "md", "lg"];

const meta = {
  title: "Atoms/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: VARIANTS },
    size: { control: "select", options: SIZES },
    children: { control: "text" },
  },
  args: {
    children: "Label",
    variant: "neutral",
    size: "md",
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--renge-space-3)", alignItems: "center" }}>
      {VARIANTS.map((variant) => (
        <Badge key={variant} {...args} variant={variant}>{variant}</Badge>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--renge-space-3)", alignItems: "center" }}>
      {SIZES.map((size) => (
        <Badge key={size} {...args} size={size}>{size}</Badge>
      ))}
    </div>
  ),
};

export const AllVariantsAllSizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--renge-space-4)" }}>
      {SIZES.map((size) => (
        <div key={size} style={{ display: "flex", flexWrap: "wrap", gap: "var(--renge-space-3)", alignItems: "center" }}>
          {VARIANTS.map((variant) => (
            <Badge key={variant} {...args} variant={variant} size={size}>{variant}</Badge>
          ))}
        </div>
      ))}
    </div>
  ),
};
