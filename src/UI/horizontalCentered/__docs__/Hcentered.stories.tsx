import { Meta, StoryFn } from "@storybook/react";
import React from "react";

import Hcentered, { HcenteredProps } from "../Hcentered";

export default {
  title: "Hcentered",
  component: Hcentered,
  argTypes: {
    maxWidth: { control: "text" },
    centerText: { control: "boolean" },
    centerChildren: { control: "boolean" },
  },
} as Meta;

const Template: StoryFn<HcenteredProps> = (args) => (
  <div style={{ border: "1px solid black", width: "200px" }}>
    Container
    <Hcentered {...args}>
      <p>title with very long text like this text</p>
      <p>subtitle with very very very long text like this text</p>
      <div style={{ width: "40px", height: "40px", backgroundColor: "blue" }}>
        div
      </div>
    </Hcentered>
  </div>
);

export const Default = Template.bind({});
Default.args = {};

export const TextCentered = Template.bind({});
TextCentered.args = {
  centerText: true,
};

export const CenterTextOnly = Template.bind({});
CenterTextOnly.args = {
  centerText: true,
  centerChildren: false,
};
export const CenterBlockOnly = Template.bind({});
CenterBlockOnly.args = {
  centerText: false,
  centerChildren: true,
};
