import { Meta, StoryFn } from "@storybook/react";
import React from "react";

import Inline, { InlineProps } from "../Inline";

export default {
  title: "Inline",
  component: Inline,
  argTypes: {
    gap: {
      control: "select",
      options: ["xs", "s", "m", "l", "xl", "xxl", "none"],
    },
    justify: {
      control: "select",
      options: ["start", "end", "center", "maxSpace", "midSpace", "evenSpace"],
    },
    align: {
      control: "select",
      options: ["start", "end", "center", "maxSpace", "midSpace", "evenSpace"],
    },
    background: { control: "text" },
  },
} as Meta;

const Template: StoryFn<InlineProps> = (args) => (
  <Inline style={{ height: "40px", border: "1px solid black" }} {...args}>
    height: 40px &nbsp;
    <div>div1</div>
    <div>div2</div>
    <div>div3</div>
  </Inline>
);

export const Default = Template.bind({});
Default.args = {
  justify: "center",
  align: "center",
  gap: "xs",
  background: "transparent",
};
