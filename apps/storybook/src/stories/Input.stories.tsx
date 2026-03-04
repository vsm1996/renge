import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@renge/react";
import type { InputSize, InputState } from "@renge/react";

const SIZES: InputSize[] = ["sm", "md", "lg"];
const STATES: InputState[] = ["default", "error", "success"];

const meta = {
  title: "Atoms/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: SIZES },
    state: { control: "select", options: STATES },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    fullWidth: { control: "boolean" },
  },
  args: {
    size: "md",
    state: "default",
    placeholder: "Type something…",
    disabled: false,
    fullWidth: false,
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const States: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--renge-space-4)", width: 280 }}>
      {STATES.map((state) => (
        <Input key={state} {...args} state={state} placeholder={`State: ${state}`} />
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--renge-space-4)", width: 280 }}>
      {SIZES.map((size) => (
        <Input key={size} {...args} size={size} placeholder={`Size: ${size}`} />
      ))}
    </div>
  ),
};

export const Disabled: Story = {
  args: { disabled: true, placeholder: "Disabled input" },
};

export const FullWidth: Story = {
  args: { fullWidth: true, placeholder: "Full-width input" },
};
