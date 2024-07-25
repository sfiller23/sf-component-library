import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import Typography, { ITypographyProps } from "../Typography";

export default {
  title: "Typography",
  component: Typography,
  argTypes: {
    color: { control: "text" },
    size: { control: "text" },
    weight: { control: "number" },
    letterSpacing: { control: "text" },
  },
} as Meta;

const Template: StoryFn<ITypographyProps> = (args) => {
  const { ...props } = args;
  return <Typography {...props}>Test</Typography>;
};

export const Default = Template.bind({});
Default.args = {
  as: "p",
  letterSpacing: "2px",
};
