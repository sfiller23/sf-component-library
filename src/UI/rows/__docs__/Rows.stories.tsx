import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { ISpaceSchema } from "../../../themes/theme";
import { justifyAlignMap } from "../../../utils/common/interfaces";
import Rows, { RowsProps } from "../Rows";

export default {
  title: "Rows",
  component: Rows,
  argTypes: {
    gap: {
      control: "select",
      options: ["xs", "s", "m", "l", "xl", "xxl", "none"] as ISpaceSchema[],
    },
    justify: {
      control: "select",
      options: [
        "start",
        "end",
        "center",
        "maxSpace",
        "midSpace",
        "evenSpace",
      ] as Array<keyof justifyAlignMap>,
    },
    align: {
      control: "select",
      options: [
        "start",
        "end",
        "center",
        "maxSpace",
        "midSpace",
        "evenSpace",
      ] as Array<keyof justifyAlignMap>,
    },
  },
} as Meta;

const Template: StoryFn<RowsProps> = (args) => (
  <div style={{ border: "1px solid black", height: "300px" }}>
    Container
    <Rows style={{ height: "200px", border: "1px solid black" }} {...args}>
      <span>span 1</span>
      <span>span 2</span>
      <span>span 3</span>
    </Rows>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  justify: "center",
  align: "center",
};

export const JustifyEnd = Template.bind({});
JustifyEnd.args = {
  justify: "end",
  align: "center",
};

export const AlignSpaceBetween = Template.bind({});
AlignSpaceBetween.args = {
  align: "maxSpace",
  justify: "center",
};

export const AlignAndJustify = Template.bind({});
AlignAndJustify.args = {
  align: "evenSpace",
  justify: "start",
};
