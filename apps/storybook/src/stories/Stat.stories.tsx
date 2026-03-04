import type { Meta, StoryObj } from "@storybook/react";
import { Stat } from "@renge/react";
import type { TrendDirection } from "@renge/react";

const TRENDS: TrendDirection[] = ["up", "down", "neutral"];

const meta = {
  title: "Molecules/Stat",
  component: Stat,
  tags: ["autodocs"],
  argTypes: {
    value: { control: "text" },
    label: { control: "text" },
    trend: { control: "select", options: [undefined, ...TRENDS] },
    trendValue: { control: "text" },
    caption: { control: "text" },
  },
  args: {
    value: "8,192",
    label: "Monthly visitors",
    trend: "up",
    trendValue: "+12%",
    caption: "vs. last month",
  },
} satisfies Meta<typeof Stat>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const NoTrend: Story = {
  args: { trend: undefined, trendValue: undefined, caption: undefined },
};

export const Trends: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--renge-space-0)" }}>
      {TRENDS.map((trend) => (
        <Stat key={trend} {...args} trend={trend} trendValue={trend === "up" ? "+8.2%" : trend === "down" ? "−3.1%" : "0%"} />
      ))}
    </div>
  ),
};

export const Dashboard: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        border: "1px solid var(--renge-color-border-subtle)",
        borderRadius: "var(--renge-radius-3)",
        overflow: "hidden",
      }}
    >
      {[
        { value: "8,192", label: "Visitors", trend: "up" as TrendDirection, trendValue: "+12%", caption: "vs. last month" },
        { value: "1,618", label: "Signups", trend: "up" as TrendDirection, trendValue: "+5%", caption: "vs. last month" },
        { value: "φ 1.618", label: "Avg. session (min)", trend: "neutral" as TrendDirection, trendValue: "0%" },
        { value: "89%", label: "Satisfaction", trend: "down" as TrendDirection, trendValue: "−2%", caption: "NPS score" },
      ].map((item, i) => (
        <div
          key={i}
          style={{
            borderRight: i % 2 === 0 ? "1px solid var(--renge-color-border-subtle)" : undefined,
            borderBottom: i < 2 ? "1px solid var(--renge-color-border-subtle)" : undefined,
          }}
        >
          <Stat {...item} />
        </div>
      ))}
    </div>
  ),
};
