import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from "@renge/react";
import type { ChipVariant } from "@renge/react";

const VARIANTS: ChipVariant[] = ["neutral", "accent", "success", "warning", "danger", "info"];

const meta = {
  title: "Atoms/Chip",
  component: Chip,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: VARIANTS },
    children: { control: "text" },
  },
  args: {
    children: "Design System",
    variant: "neutral",
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithDismiss: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [visible, setVisible] = useState(true);
    return visible ? (
      <Chip {...args} onDismiss={() => setVisible(false)}>Design System</Chip>
    ) : (
      <button onClick={() => setVisible(true)} style={{ cursor: "pointer" }}>Restore chip</button>
    );
  },
};

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--renge-space-3)" }}>
      {VARIANTS.map((variant) => (
        <Chip key={variant} {...args} variant={variant}>{variant}</Chip>
      ))}
    </div>
  ),
};

function DismissibleSet() {
  const tags = ["React", "TypeScript", "Design Tokens", "OKLCH", "Fibonacci"];
  const [active, setActive] = useState(new Set(tags));
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--renge-space-3)" }}>
      {tags.map((tag) =>
        active.has(tag) ? (
          <Chip key={tag} variant="accent" onDismiss={() => setActive((s) => { const n = new Set(s); n.delete(tag); return n; })}>
            {tag}
          </Chip>
        ) : null
      )}
    </div>
  );
}

export const DismissibleGroup: Story = {
  render: () => <DismissibleSet />,
};
