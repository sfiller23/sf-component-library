import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "Card",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const HalfButtonOutEffect: Story = {
  args: {},
};

export const Simple: Story = {
  args: {
    bottomButtonEffect: false,
  },
};
