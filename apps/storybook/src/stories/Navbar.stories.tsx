import type { Meta, StoryObj } from "@storybook/react";
import { Navbar, Stack, Button, Avatar, Badge, Text } from "@renge/react";

const meta = {
  title: "Organisms/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  argTypes: {
    sticky: { control: "boolean" },
    border: { control: "boolean" },
    height: { control: "text" },
    paddingX: { control: "select", options: ["2", "3", "4", "5", "6"] },
  },
  args: {
    sticky: false,
    border: true,
    height: "56px",
    paddingX: "5",
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Navbar {...args}>
      <Stack direction="horizontal" align="center" style={{ width: "100%", justifyContent: "space-between" }}>
        <Text weight="semibold" size="base">Renge</Text>
        <Stack direction="horizontal" gap="4" align="center">
          <Text size="sm" color="fg-muted">Docs</Text>
          <Text size="sm" color="fg-muted">Components</Text>
          <Text size="sm" color="fg-muted">Tokens</Text>
        </Stack>
        <Stack direction="horizontal" gap="3" align="center">
          <Button size="sm" variant="ghost">Log in</Button>
          <Button size="sm" variant="solid">Get started</Button>
        </Stack>
      </Stack>
    </Navbar>
  ),
};

export const WithAvatar: Story = {
  render: (args) => (
    <Navbar {...args}>
      <Stack direction="horizontal" align="center" style={{ width: "100%", justifyContent: "space-between" }}>
        <Stack direction="horizontal" gap="3" align="center">
          <Avatar initials="R" size="2" />
          <Text weight="semibold">Renge</Text>
        </Stack>
        <Stack direction="horizontal" gap="3" align="center">
          <Badge variant="success">v0.1</Badge>
          <Avatar initials="VN" size="2" />
        </Stack>
      </Stack>
    </Navbar>
  ),
};

export const Minimal: Story = {
  args: { border: false },
  render: (args) => (
    <Navbar {...args}>
      <Text weight="semibold">Renge Design System</Text>
    </Navbar>
  ),
};
