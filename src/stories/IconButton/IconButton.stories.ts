import type { Meta, StoryObj } from "@storybook/web-components";
import type { IconButtonProps } from "./IconButton";
import { Button, IconButtonColor, IconButtonVariant } from "./IconButton";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "Components/IconButton",
  tags: ["autodocs"],
  render: (args) => Button(args),
  argTypes: {
    variant: {
      control: { type: "select" },
      options: Object.keys(IconButtonVariant),
    },
    color: {
      control: { type: "select" },
      options: Object.keys(IconButtonColor),
    },
    roundedFull: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<IconButtonProps>;

export default meta;
type Story = StoryObj<IconButtonProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "primary",
    color: "brand",
  },
};

export const Tinted: Story = {
  args: {
    variant: "tinted",
    color: "brand",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    color: "brand",
  },
};

export const Text: Story = {
  args: {
    variant: "text",
    color: "brand",
  },
};