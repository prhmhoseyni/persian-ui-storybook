import type { Meta, StoryObj } from "@storybook/web-components";
import type { ButtonProps } from "./Button";
import { Button, ButtonColor, ButtonVariant } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "Components/Button",
  tags: ["autodocs"],
  render: (args) => Button(args),
  argTypes: {
    variant: {
      control: { type: "select" },
      options: Object.keys(ButtonVariant),
    },
    color: {
      control: { type: "select" },
      options: Object.keys(ButtonColor),
    },
    startAdornment: {
      control: { type: "boolean" },
    },
    endAdornment: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "primary",
    color: "brand",
    label: "فشارم بده",
  },
};

export const Tinted: Story = {
  args: {
    variant: "tinted",
    color: "brand",
    label: "فشارم بده",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    color: "brand",
    label: "فشارم بده",
  },
};

export const Text: Story = {
  args: {
    variant: "text",
    color: "brand",
    label: "فشارم بده",
  },
};