import type { Meta, StoryObj } from "@storybook/web-components";
import { FormControl, FormControlProps, FormControlVariant } from "./FormControl";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "Components/FormControl",
  tags: ["autodocs"],
  render: (args) => FormControl(args),
  argTypes: {
    value: {
      control: { type: "text" },
    },
    variant: {
      control: { type: "select" },
      options: Object.keys(FormControlVariant),
    },
    hasError: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<FormControlProps>;

export default meta;
type Story = StoryObj<FormControlProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};