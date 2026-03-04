import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "@renge/react";
import type { AlertStatus } from "@renge/react";

const STATUSES: AlertStatus[] = ["info", "success", "warning", "danger"];

const meta = {
  title: "Molecules/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    status: { control: "select", options: STATUSES },
    title: { control: "text" },
    children: { control: "text" },
  },
  args: {
    status: "info",
    title: "Heads up",
    children: "This is an informational notice. Something you should know.",
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const NoTitle: Story = {
  args: { title: undefined, children: "A simple message with no title." },
};

export const AllStatuses: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--renge-space-4)", maxWidth: 480 }}>
      {STATUSES.map((status) => (
        <Alert
          key={status}
          {...args}
          status={status}
          title={status.charAt(0).toUpperCase() + status.slice(1)}
        >
          {`This is a ${status} alert. Use it to communicate ${status === "danger" ? "errors" : status === "warning" ? "caution" : status === "success" ? "completion" : "context"}.`}
        </Alert>
      ))}
    </div>
  ),
};
