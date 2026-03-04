import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "@renge/react";
import type { AvatarSize, AvatarShape } from "@renge/react";

const SIZES: AvatarSize[] = ["1", "2", "3", "4", "5"];
const SHAPES: AvatarShape[] = ["circle", "square"];

const meta = {
  title: "Atoms/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: SIZES },
    shape: { control: "select", options: SHAPES },
    src: { control: "text" },
    initials: { control: "text" },
    alt: { control: "text" },
  },
  args: {
    initials: "VN",
    size: "3",
    shape: "circle",
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithImage: Story = {
  args: {
    src: "https://i.pravatar.cc/150?img=5",
    alt: "User avatar",
    initials: undefined,
  },
};

export const Initials: Story = {
  args: { initials: "MK" },
};

export const AllSizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "var(--renge-space-4)", alignItems: "center" }}>
      {SIZES.map((size) => (
        <Avatar key={size} {...args} size={size} />
      ))}
    </div>
  ),
};

export const Shapes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "var(--renge-space-4)", alignItems: "center" }}>
      {SHAPES.map((shape) => (
        <Avatar key={shape} {...args} shape={shape} />
      ))}
    </div>
  ),
};
