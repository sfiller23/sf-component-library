import type { Meta, StoryFn } from "@storybook/react";
import React from "react";
import InputWrapper, { InputWrapperProps } from "../InputWrapper";

export default {
  title: "InputWrapper",
  component: InputWrapper,
  argTypes: {
    background: {
      control: "text",
    },
    color: {
      control: "text",
    },
    disabledMessageColor: { control: "text" },
    padding: { control: "text" },
    borderRadius: { control: "text" },
    borderColor: { control: "text" },
    borderWidth: { control: "text" },
    disabledBackgroundColor: { control: "text" },
    hoverBorderColor: { control: "text" },
    focusBorderColor: { control: "text" },
  },
} as Meta;

const Template: StoryFn<InputWrapperProps> = (args) => (
  <InputWrapper {...args}>
    <input type="text" placeholder="label" />
  </InputWrapper>
);

const Template2: StoryFn<InputWrapperProps> = (args) => (
  <InputWrapper {...args}>
    <input type="text" disabled placeholder="label" />
  </InputWrapper>
);

const Template3: StoryFn<InputWrapperProps> = (args) => (
  <div style={{ marginTop: "10%" }}>
    <p style={{ marginBottom: "10%" }}>Container div with margin</p>
    <InputWrapper {...args}>
      <input type="text" value="place holder as label" placeholder="label" />
    </InputWrapper>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  background: "white",
  color: "black",
  borderRadius: "5px",
  borderColor: "black",
  borderWidth: "1px",
  disabledBackgroundColor: "lightgray",
  hoverBorderColor: "blue",
  focusBorderColor: "green",
};

export const Disabled = Template2.bind({});
Disabled.args = {
  background: "white",
  color: "black",
  borderRadius: "5px",
  borderColor: "black",
  borderWidth: "1px",
  disabledBackgroundColor: "lightgray",
  hoverBorderColor: "blue",
  focusBorderColor: "green",
};

export const WithValue = Template3.bind({});
WithValue.args = {
  background: "white",
  color: "black",
  borderRadius: "5px",
  borderColor: "black",
  borderWidth: "1px",
  hoverBorderColor: "blue",
  focusBorderColor: "green",
};
