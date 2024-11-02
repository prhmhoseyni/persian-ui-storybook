import type { Meta, StoryObj } from "@storybook/web-components";
import type { BadgeProps } from "./Badge";
import { Badge, BadgeColor } from "./Badge";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "Components/Badge",
  tags: ["autodocs"],
  render: (args) => Badge(args),
  argTypes: {
    color: {
      control: { type: "select" },
      options: Object.keys(BadgeColor),
    },
    roundedFull: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<BadgeProps>;

export default meta;
type Story = StoryObj<BadgeProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    color: "brand",
    label: "به من توجه کن",
  },
};
