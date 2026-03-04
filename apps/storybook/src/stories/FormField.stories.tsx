import type { Meta, StoryObj } from "@storybook/react";
import { FormField, Input } from "@renge/react";

const meta = {
  title: "Molecules/FormField",
  component: FormField,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    helperText: { control: "text" },
    errorText: { control: "text" },
    required: { control: "boolean" },
  },
  args: {
    label: "Email address",
    helperText: "We'll never share your email.",
    required: false,
  },
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <FormField {...args} htmlFor="email-default" style={{ maxWidth: 320 }}>
      <Input id="email-default" type="email" placeholder="you@example.com" fullWidth />
    </FormField>
  ),
};

export const Required: Story = {
  args: { required: true, helperText: "Required field." },
  render: (args) => (
    <FormField {...args} htmlFor="email-req" style={{ maxWidth: 320 }}>
      <Input id="email-req" type="email" placeholder="you@example.com" fullWidth />
    </FormField>
  ),
};

export const WithError: Story = {
  args: {
    errorText: "Invalid email address.",
    helperText: undefined,
  },
  render: (args) => (
    <FormField {...args} htmlFor="email-err" style={{ maxWidth: 320 }}>
      <Input id="email-err" type="email" placeholder="you@example.com" state="error" fullWidth defaultValue="not-an-email" />
    </FormField>
  ),
};

export const WithSuccess: Story = {
  args: {
    helperText: "Looks good!",
  },
  render: (args) => (
    <FormField {...args} htmlFor="email-ok" style={{ maxWidth: 320 }}>
      <Input id="email-ok" type="email" state="success" fullWidth defaultValue="user@example.com" />
    </FormField>
  ),
};

export const LoginForm: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--renge-space-5)", maxWidth: 360 }}>
      <FormField label="Email" htmlFor="login-email" required>
        <Input id="login-email" type="email" placeholder="you@example.com" fullWidth />
      </FormField>
      <FormField label="Password" htmlFor="login-password" required helperText="At least 8 characters.">
        <Input id="login-password" type="password" placeholder="••••••••" fullWidth />
      </FormField>
    </div>
  ),
};
