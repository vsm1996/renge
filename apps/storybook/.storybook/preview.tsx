import type { Preview } from "@storybook/react";
import { RengeProvider } from "@renge/react";
import type { ProfileName } from "@renge/react";

const preview: Preview = {
  globalTypes: {
    profile: {
      description: "Color profile",
      defaultValue: "clear",
      toolbar: {
        title: "Profile",
        icon: "paintbrush",
        items: [
          { value: "clear",    title: "Clear (light)" },
          { value: "earth",    title: "Earth (warm)" },
          { value: "twilight", title: "Twilight (dark)" },
        ],
        dynamicTitle: true,
      },
    },
    baseUnit: {
      description: "Spacing base unit (px) — scales space & radius tokens",
      defaultValue: 4,
      toolbar: {
        title: "Base Unit",
        icon: "ruler",
        items: [
          { value: 2,  title: "2px — tight" },
          { value: 4,  title: "4px — default" },
          { value: 6,  title: "6px — loose" },
          { value: 8,  title: "8px — wide" },
        ],
        dynamicTitle: true,
      },
    },
    typeBase: {
      description: "Base font size (px) — anchors the φ type scale",
      defaultValue: 16,
      toolbar: {
        title: "Type Base",
        icon: "type",
        items: [
          { value: 14, title: "14px — small" },
          { value: 16, title: "16px — default" },
          { value: 18, title: "18px — large" },
          { value: 20, title: "20px — xl" },
        ],
        dynamicTitle: true,
      },
    },
    variance: {
      description: "Token variance — deterministic drift from pure math values",
      defaultValue: 0,
      toolbar: {
        title: "Variance",
        icon: "beaker",
        items: [
          { value: 0,    title: "Off — exact" },
          { value: 0.05, title: "5% — subtle" },
          { value: 0.1,  title: "10% — moderate" },
          { value: 0.2,  title: "20% — high" },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const profile  = (context.globals.profile  ?? "clear") as ProfileName;
      const baseUnit = (context.globals.baseUnit  ?? 4) as number;
      const typeBase = (context.globals.typeBase  ?? 16) as number;
      const variance = (context.globals.variance  ?? 0) as number;
      return (
        <RengeProvider config={{ profile, baseUnit, typeBase, variance }}>
          <div style={{ padding: "var(--renge-space-5)", background: "var(--renge-color-bg)", minHeight: "100vh" }}>
            <Story />
          </div>
        </RengeProvider>
      );
    },
  ],
};

export default preview;
