import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "@renge/react";
import type { SpinnerSize, SpinnerColor } from "@renge/react";

const SIZES: SpinnerSize[] = ["sm", "md", "lg"];
const COLORS: SpinnerColor[] = ["accent", "fg", "fg-muted"];

const meta = {
  title: "Atoms/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: SIZES },
    color: { control: "select", options: COLORS },
    label: { control: "text" },
  },
  args: {
    size: "md",
    color: "accent",
    label: "Loading",
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "var(--renge-space-5)", alignItems: "center" }}>
      {SIZES.map((size) => (
        <Spinner key={size} {...args} size={size} />
      ))}
    </div>
  ),
};

export const Colors: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "var(--renge-space-5)", alignItems: "center" }}>
      {COLORS.map((color) => (
        <Spinner key={color} {...args} color={color} />
      ))}
    </div>
  ),
};
