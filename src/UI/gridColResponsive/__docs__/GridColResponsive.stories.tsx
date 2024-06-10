import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { ISpaceSchema } from "../../../themes/theme";
import GridColResponsive, {
  GridColResponsiveProps,
} from "../GridColResponsive";

export default {
  title: "GridColResponsive",
  component: GridColResponsive,
  argTypes: {
    gap: {
      control: "select",
      options: ["xs", "s", "m", "l", "xl", "xxl", "none"] as ISpaceSchema[],
    },
  },
} as Meta;

const Template: StoryFn<GridColResponsiveProps> = (args) => (
  <GridColResponsive {...args}>
    <div>Child 1</div>
    <div>Child 2</div>
    <div>Child 3</div>
    <div>Child 4</div>
    <div>Child 5</div>
    <div>Child 6</div>
  </GridColResponsive>
);

export const WithMinWidth = Template.bind({});
WithMinWidth.args = {
  minItemWidth: "200px",
};

export const RowsOnly = Template.bind({});
RowsOnly.args = {};
