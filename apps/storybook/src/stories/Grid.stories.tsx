import type { Meta, StoryObj } from "@storybook/react";
import { Grid, Card, Text } from "@renge/react";

const meta = {
  title: "Components/Grid",
  component: Grid,
  tags: ["autodocs"],
  argTypes: {
    columns: { control: "number" },
    gap: { control: "select", options: ["0", "1", "2", "3", "4", "5", "6"] },
    gapX: { control: "select", options: ["0", "1", "2", "3", "4", "5", "6"] },
    gapY: { control: "select", options: ["0", "1", "2", "3", "4", "5", "6"] },
    align: { control: "select", options: ["start", "center", "end", "stretch"] },
    justify: { control: "select", options: ["start", "center", "end", "stretch"] },
  },
  args: {
    columns: 3,
    gap: "3",
    align: "stretch",
    justify: "stretch",
  },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

const Cell = ({ label }: { label: string }) => (
  <Card variant="filled" padding="3" style={{ textAlign: "center" }}>
    <Text size="sm">{label}</Text>
  </Card>
);

export const Default: Story = {
  render: (args) => (
    <Grid {...args}>
      {Array.from({ length: (args.columns as number) || 3 }, (_, i) => (
        <Cell key={i} label={`Cell ${i + 1}`} />
      ))}
    </Grid>
  ),
};

export const TwoColumns: Story = {
  args: { columns: 2 },
  render: (args) => (
    <Grid {...args}>
      {Array.from({ length: 4 }, (_, i) => <Cell key={i} label={`Cell ${i + 1}`} />)}
    </Grid>
  ),
};

export const ThreeColumns: Story = {
  args: { columns: 3 },
  render: (args) => (
    <Grid {...args}>
      {Array.from({ length: 6 }, (_, i) => <Cell key={i} label={`Cell ${i + 1}`} />)}
    </Grid>
  ),
};

export const FourColumns: Story = {
  args: { columns: 4 },
  render: (args) => (
    <Grid {...args}>
      {Array.from({ length: 8 }, (_, i) => <Cell key={i} label={`Cell ${i + 1}`} />)}
    </Grid>
  ),
};

// columns is a template string — not driven by the number control.
export const CustomTemplate: Story = {
  args: { gap: "4" },
  render: (args) => (
    <Grid {...args} columns="2fr 1fr">
      <Cell label="Main (2fr)" />
      <Cell label="Sidebar (1fr)" />
      <Cell label="Main continued" />
      <Cell label="Sidebar" />
    </Grid>
  ),
};

// Fixes gapX/gapY split. Controls affect columns and align/justify.
export const SplitGap: Story = {
  args: { columns: 3, gapX: "6", gapY: "2" },
  render: (args) => (
    <Grid {...args}>
      {Array.from({ length: 6 }, (_, i) => <Cell key={i} label={`Cell ${i + 1}`} />)}
    </Grid>
  ),
};
