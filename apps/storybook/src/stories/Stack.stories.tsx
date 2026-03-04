import type { Meta, StoryObj } from "@storybook/react";
import { Stack, Card, Text } from "@renge/react";

const meta = {
  title: "Components/Stack",
  component: Stack,
  tags: ["autodocs"],
  argTypes: {
    direction: { control: "select", options: ["vertical", "horizontal"] },
    gap: { control: "select", options: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"] },
    align: { control: "select", options: ["start", "center", "end", "stretch"] },
    justify: { control: "select", options: ["start", "center", "end", "between", "around"] },
  },
  args: {
    direction: "vertical",
    gap: "3",
    align: "stretch",
    justify: "start",
  },
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

const Box = ({ label }: { label: string }) => (
  <Card variant="filled" padding="3" style={{ textAlign: "center" }}>
    <Text size="sm">{label}</Text>
  </Card>
);

export const Vertical: Story = {
  args: { direction: "vertical" },
  render: (args) => (
    <Stack {...args} style={{ maxWidth: 320 }}>
      <Box label="Item 1" />
      <Box label="Item 2" />
      <Box label="Item 3" />
    </Stack>
  ),
};

export const Horizontal: Story = {
  args: { direction: "horizontal", align: "center" },
  render: (args) => (
    <Stack {...args}>
      <Box label="Item 1" />
      <Box label="Item 2" />
      <Box label="Item 3" />
    </Stack>
  ),
};

// Shows multiple gap values side by side. Controls affect direction.
export const Gaps: Story = {
  args: { direction: "horizontal" },
  render: (args) => (
    <Stack gap="6">
      {(["1", "3", "5", "8"] as const).map((g) => (
        <div key={g}>
          <Text size="sm" color="fg-muted" style={{ marginBottom: "var(--renge-space-2)", display: "block" }}>gap={g}</Text>
          <Stack {...args} gap={g}>
            <Box label="A" />
            <Box label="B" />
            <Box label="C" />
          </Stack>
        </div>
      ))}
    </Stack>
  ),
};

// Shows all justify values. Controls affect gap.
export const AlignJustify: Story = {
  args: { direction: "horizontal", gap: "3" },
  render: (args) => (
    <Stack gap="5">
      {(["start", "center", "end", "between"] as const).map((j) => (
        <div key={j}>
          <Text size="sm" color="fg-muted" style={{ marginBottom: "var(--renge-space-2)", display: "block" }}>justify={j}</Text>
          <Stack {...args} justify={j} style={{ border: "1px dashed var(--renge-color-border)", padding: "var(--renge-space-3)" }}>
            <Box label="A" />
            <Box label="B" />
          </Stack>
        </div>
      ))}
    </Stack>
  ),
};
