import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import styled from "styled-components";
import { IFractionsSchema, ISpaceSchema } from "../../../themes/theme";
import Split, { SplitProps } from "../Split";

export default {
  title: "Split",
  component: Split,
  argTypes: {
    gap: {
      control: "select",
      options: ["xs", "s", "m", "l", "xl", "xxl", "none"] as ISpaceSchema[],
    },

    fraction: {
      control: "select",
      options: [
        "1/4",
        "1/3",
        "1/2",
        "2/3",
        "3/4",
        "auto-start",
        "auto-end",
      ] as Array<keyof IFractionsSchema>,
    },
  },
} as Meta;

const StyledDiv = styled.div`
  border: 1px solid black;
`;

const Template: StoryFn<SplitProps> = (args) => (
  <StyledDiv style={{ height: "300px" }}>
    Container
    <Split style={{ height: "200px", border: "1px solid black" }} {...args}>
      <StyledDiv>div 1</StyledDiv>
      <StyledDiv>div 2</StyledDiv>
      <StyledDiv>div 3</StyledDiv>
      <StyledDiv>div 4</StyledDiv>
    </Split>
  </StyledDiv>
);

export const Default = Template.bind({});
Default.args = {
  fraction: "1/2",
  gap: "xs",
};

export const FirstQuarterSplit = Template.bind({});
FirstQuarterSplit.args = {
  fraction: "1/4",
  gap: "none",
};

export const SecondQuarterSplit = Template.bind({});
SecondQuarterSplit.args = {
  fraction: "3/4",
  gap: "none",
};
