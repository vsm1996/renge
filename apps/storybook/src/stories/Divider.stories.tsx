import type { Meta, StoryObj } from "@storybook/react";
import { Divider, Text, Stack } from "@renge/react";

const meta = {
  title: "Components/Divider",
  component: Divider,
  tags: ["autodocs"],
  argTypes: {
    orientation: { control: "select", options: ["horizontal", "vertical"] },
    spacing: { control: "select", options: ["0", "1", "2", "3", "4", "5", "6"] },
    color: { control: "select", options: ["border", "border-subtle"] },
  },
  args: {
    orientation: "horizontal",
    spacing: "3",
    color: "border-subtle",
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: { orientation: "horizontal" },
  render: (args) => (
    <div style={{ maxWidth: 400 }}>
      <Text as="p">Section above the divider with some content.</Text>
      <Divider {...args} />
      <Text as="p">Section below the divider with more content.</Text>
    </div>
  ),
};

export const Vertical: Story = {
  args: { orientation: "vertical" },
  render: (args) => (
    <div style={{ display: "flex", alignItems: "center", height: 60 }}>
      <Text>Left</Text>
      <Divider {...args} />
      <Text>Right</Text>
    </div>
  ),
};

// Shows all spacing steps. Controls affect color.
export const Spacing: Story = {
  args: { color: "border-subtle" },
  render: (args) => (
    <div style={{ maxWidth: 400 }}>
      {(["1", "3", "6"] as const).map((spacing) => (
        <div key={spacing}>
          <Text size="sm" color="fg-muted">spacing={spacing}</Text>
          <Divider {...args} spacing={spacing} />
          <Text size="sm" color="fg-muted">Next section</Text>
        </div>
      ))}
    </div>
  ),
};

// Shows both color options. Controls affect spacing.
export const Colors: Story = {
  args: { spacing: "2" },
  render: (args) => (
    <Stack gap="4" style={{ maxWidth: 400 }}>
      <div>
        <Text size="sm" color="fg-muted">color=border-subtle (default)</Text>
        <Divider {...args} color="border-subtle" />
        <Text size="sm">Content below</Text>
      </div>
      <div>
        <Text size="sm" color="fg-muted">color=border</Text>
        <Divider {...args} color="border" />
        <Text size="sm">Content below</Text>
      </div>
    </Stack>
  ),
};
