import type { Meta, StoryObj } from "@storybook/web-components";
import type { ChipProps } from "./Chip";
import { Chip, ChipColor, ChipVariant } from "./Chip";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "Components/Chip",
  tags: ["autodocs"],
  render: (args) => Chip(args),
  argTypes: {
    variant: {
      control: { type: "select" },
      options: Object.keys(ChipVariant),
    },
    color: {
      control: { type: "select" },
      options: Object.keys(ChipColor),
    },
    startAdornment: {
      control: { type: "boolean" },
    },
    endAdornment: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<ChipProps>;

export default meta;
type Story = StoryObj<ChipProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "primary",
    color: "brand",
    label: "سلام، چطوری؟",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    color: "brand",
    label: "سلام، چطوری؟",
  },
};