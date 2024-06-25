import type { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { styled } from "styled-components";
import { PaddingMarginProps } from "../../../utils/common";
import Pad from "../Pad";

export default {
  title: "Pad",
  component: Pad,
  argTypes: {
    space: {
      control: "text",
    },
  },
} as Meta;

const StyledDiv = styled.div`
  border: 1px solid black;
`;

const Template: StoryFn<{ space: PaddingMarginProps }> = (args) => (
  <StyledDiv {...args}>
    <Pad space="l">
      <StyledDiv>div</StyledDiv>
    </Pad>
  </StyledDiv>
);

export const Different = Template.bind({});
Different.args = {
  space: "s m l xl",
};

export const Even = Template.bind({});
Even.args = {
  space: "xl",
};

export const Vertical = Template.bind({});
Vertical.args = {
  space: "xl none",
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  space: "none xl",
};
