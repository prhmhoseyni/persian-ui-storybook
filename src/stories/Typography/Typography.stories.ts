import type { Meta, StoryObj } from "@storybook/web-components";
import type { TypographyProps } from "./Typography";
import { Typography, TypographyColor, TypographyVariant } from "./Typography";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "Components/Typography",
  tags: ["autodocs"],
  render: (args) => Typography(args),
  argTypes: {
    variant: {
      control: { type: "select" },
      options: Object.keys(TypographyVariant),
    },
    color: {
      control: { type: "select" },
      options: Object.keys(TypographyColor),
    },
  },
} satisfies Meta<TypographyProps>;

export default meta;
type Story = StoryObj<TypographyProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "heading1",
    label: "سلام، ممنون که به من توجه میکنی",
  },
};