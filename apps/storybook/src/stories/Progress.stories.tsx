import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "@renge/react";
import type { ProgressColor, ProgressSize } from "@renge/react";

const COLORS: ProgressColor[] = ["accent", "success", "warning", "danger"];
const SIZES: ProgressSize[] = ["sm", "md", "lg"];

const meta = {
  title: "Atoms/Progress",
  component: Progress,
  tags: ["autodocs"],
  argTypes: {
    value: { control: { type: "range", min: 0, max: 100, step: 1 } },
    color: { control: "select", options: COLORS },
    size: { control: "select", options: SIZES },
    radius: { control: "select", options: ["none", "full"] },
  },
  args: {
    value: 60,
    color: "accent",
    size: "md",
    radius: "full",
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AllColors: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--renge-space-4)", width: 320 }}>
      {COLORS.map((color) => (
        <Progress key={color} {...args} color={color} />
      ))}
    </div>
  ),
};

export const AllSizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--renge-space-4)", width: 320 }}>
      {SIZES.map((size) => (
        <Progress key={size} {...args} size={size} />
      ))}
    </div>
  ),
};

function AnimatedDemo() {
  const [value, setValue] = useState(0);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--renge-space-4)", width: 320 }}>
      <Progress value={value} color="accent" />
      <div style={{ display: "flex", gap: "var(--renge-space-3)" }}>
        <button
          onClick={() => setValue((v) => Math.max(0, v - 10))}
          style={{ padding: "4px 12px", fontFamily: "monospace", cursor: "pointer" }}
        >
          −10
        </button>
        <button
          onClick={() => setValue((v) => Math.min(100, v + 10))}
          style={{ padding: "4px 12px", fontFamily: "monospace", cursor: "pointer" }}
        >
          +10
        </button>
        <span style={{ fontFamily: "monospace", fontSize: "var(--renge-font-size-sm)", alignSelf: "center" }}>
          {value}%
        </span>
      </div>
    </div>
  );
}

export const Animated: Story = {
  render: () => <AnimatedDemo />,
};
