import type { Meta, StoryObj } from "@storybook/react";
import Pad from "../Pad";

const meta: Meta<typeof Pad> = {
  title: "Pad",
  component: Pad,
};

export default meta;
type Story = StoryObj<typeof Pad>;

export const simple: Story = {
  args: {
    padding: "xl",
    children: "Hello World",
  },
};
