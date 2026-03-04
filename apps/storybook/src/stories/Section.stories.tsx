import type { Meta, StoryObj } from "@storybook/react";
import { Section, Heading, Text, ANIMATION_NAMES } from "@renge/react";

const ANIM_OPTIONS = [undefined, ...ANIMATION_NAMES];

const meta = {
  title: "Components/Section",
  component: Section,
  tags: ["autodocs"],
  argTypes: {
    maxWidth: { control: "select", options: ["sm", "md", "lg", "xl", "full", "none"] },
    center: { control: "boolean" },
    paddingX: { control: "select", options: ["0", "1", "2", "3", "4", "5", "6", "7", "8"] },
    paddingY: { control: "select", options: ["0", "1", "2", "3", "4", "5", "6", "7", "8"] },
    padding: { control: "select", options: ["0", "1", "2", "3", "4", "5", "6", "7", "8"] },
    animation: { control: "select", options: ANIM_OPTIONS },
  },
  args: {
    maxWidth: "lg",
    center: true,
    paddingX: "4",
    paddingY: "6",
  },
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

const SectionContent = () => (
  <>
    <Heading level={2}>Section Heading</Heading>
    <Text as="p" color="fg-subtle" style={{ marginTop: "var(--renge-space-3)" }}>
      This section demonstrates the layout constraints applied by the Section component. The maxWidth and center props control how content is contained and positioned horizontally.
    </Text>
  </>
);

export const Default: Story = {
  render: (args) => (
    <div style={{ background: "var(--renge-color-bg-subtle)", width: "100%" }}>
      <Section {...args}>
        <SectionContent />
      </Section>
    </div>
  ),
};

// Shows all maxWidth options. Controls affect paddingX and paddingY.
export const MaxWidths: Story = {
  args: { paddingY: "3", paddingX: "4", center: true },
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--renge-space-2)" }}>
      {(["sm", "md", "lg", "xl", "full"] as const).map((maxWidth) => (
        <div key={maxWidth} style={{ background: "var(--renge-color-bg-subtle)", width: "100%" }}>
          <Section {...args} maxWidth={maxWidth}>
            <div style={{ background: "var(--renge-color-border-subtle)", padding: "var(--renge-space-2)", borderRadius: "var(--renge-radius-2)" }}>
              <Text size="sm" color="fg-muted">maxWidth={maxWidth}</Text>
            </div>
          </Section>
        </div>
      ))}
    </div>
  ),
};

export const NotCentered: Story = {
  args: { maxWidth: "md", center: false },
  render: (args) => (
    <div style={{ background: "var(--renge-color-bg-subtle)", width: "100%" }}>
      <Section {...args}>
        <SectionContent />
      </Section>
    </div>
  ),
};

export const CustomPadding: Story = {
  args: { maxWidth: "md", paddingX: "8", paddingY: "2" },
  render: (args) => (
    <div style={{ background: "var(--renge-color-bg-subtle)", width: "100%" }}>
      <Section {...args}>
        <SectionContent />
      </Section>
    </div>
  ),
};
