import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Pad from "./Example";

const meta: Meta<typeof Pad> = {
  title: "Pad",
  component: Pad,
};

export default meta;
type Story = StoryObj<typeof Pad>;

export const Different: Story = {
  args: {
    space: "s m l xl",
    children: <div style={{ border: "1px solid black" }}>Child</div>,
  },
};

export const Even: Story = {
  args: {
    space: "xl",
    children: <div style={{ border: "1px solid black" }}>Child</div>,
  },
};

export const Vertical: Story = {
  args: {
    space: "xl none",
    children: <div style={{ border: "1px solid black" }}>Child</div>,
  },
};

export const Horizontal: Story = {
  args: {
    space: "none xl",
    children: <div style={{ border: "1px solid black" }}>Child</div>,
  },
};
