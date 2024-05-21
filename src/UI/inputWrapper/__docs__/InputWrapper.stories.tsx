import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import InputWrapper from "../InputWrapper";

const meta: Meta<typeof InputWrapper> = {
  title: "InputWrapper",
  component: InputWrapper,
};

export default meta;
type Story = StoryObj<typeof InputWrapper>;

export const TextInput: Story = {
  args: {
    children: <input type="text" />,
    background: "lightblue",
    color: "red",
  },
};

export const select: Story = {
  args: {
    children: (
      <select>
        <option value="" disabled selected>
          Select an option
        </option>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
    ),
    background: "lightblue",
    color: "red",
  },
};
