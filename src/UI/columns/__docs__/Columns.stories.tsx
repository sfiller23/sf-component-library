import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { ISpaceSchema } from "../../../themes/theme";
import Columns, { ColumnsProps } from "../Columns";

export default {
  title: "Columns",
  component: Columns,
  argTypes: {
    gap: {
      control: "select",
      options: ["xs", "s", "m", "l", "xl", "xxl", "none"] as ISpaceSchema[],
    },
    evenly: { control: "boolean" },
  },
} as Meta;

const Template: StoryFn<ColumnsProps> = (args) => (
  <Columns {...args}>
    <div>Child 1</div>
    <div>Child 2</div>
    <div>Child 3</div>
  </Columns>
);

export const EvenlyDistributed = Template.bind({});
EvenlyDistributed.args = {};

export const MaxContentDistributed = Template.bind({});
MaxContentDistributed.args = {
  evenly: false,
};

export const MaxContentWithGap = Template.bind({});
MaxContentWithGap.args = {
  gap: "xl",
  evenly: false,
};
