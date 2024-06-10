import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import styled from "styled-components";
import { ISpaceSchema } from "../../../themes/theme";
import Vcentered, { VcenteredProps } from "../Vcentered";

export default {
  title: "Vcentered",
  component: Vcentered,
  argTypes: {
    gap: {
      control: "select",
      options: ["xs", "s", "m", "l", "xl", "xxl", "none"] as ISpaceSchema[],
    },

    $minHeight: {
      control: "text",
    },
  },
} as Meta;

const StyledDiv = styled.div`
  border: 1px solid black;
`;

const Template: StoryFn<VcenteredProps> = (args) => (
  <Vcentered {...args}>
    <StyledDiv>
      div 1 - by default the component takes $minHeight=100vh - try to scroll
    </StyledDiv>
    <StyledDiv>div 2</StyledDiv>
    <StyledDiv>div 3</StyledDiv>
    <StyledDiv>div 4</StyledDiv>
  </Vcentered>
);

const Template1: StoryFn<VcenteredProps> = (args) => (
  <Vcentered {...args} top={<StyledDiv>Top Content</StyledDiv>}>
    <StyledDiv>
      div 1 - by default the component takes $minHeight=100vh - try to scroll
    </StyledDiv>
    <StyledDiv>div 2</StyledDiv>
    <StyledDiv>div 3</StyledDiv>
    <StyledDiv>div 4</StyledDiv>
  </Vcentered>
);

const Template2: StoryFn<VcenteredProps> = (args) => (
  <Vcentered {...args} bottom={<StyledDiv>Bottom Content</StyledDiv>}>
    <StyledDiv>
      div 1 - by default the component takes $minHeight=100vh - try to scroll
    </StyledDiv>
    <StyledDiv>div 2</StyledDiv>
    <StyledDiv>div 3</StyledDiv>
    <StyledDiv>div 4</StyledDiv>
  </Vcentered>
);

const Template3: StoryFn<VcenteredProps> = (args) => (
  <Vcentered
    {...args}
    top={<StyledDiv>Top Content</StyledDiv>}
    bottom={<StyledDiv>Bottom Content</StyledDiv>}
  >
    <StyledDiv>
      div 1 - by default the component takes $minHeight=100vh - try to scroll
    </StyledDiv>
    <StyledDiv>div 2</StyledDiv>
    <StyledDiv>div 3</StyledDiv>
    <StyledDiv>div 4</StyledDiv>
  </Vcentered>
);

const Template4: StoryFn<VcenteredProps> = (args) => (
  <StyledDiv style={{ height: "300px", textAlign: "center" }}>
    <Vcentered
      {...args}
      top={<StyledDiv>Top Content</StyledDiv>}
      bottom={<StyledDiv>Bottom Content</StyledDiv>}
      style={{ textAlign: "left" }}
    >
      <StyledDiv>
        div 1 - by default the component takes $minHeight=100vh - try to scroll
      </StyledDiv>
      <StyledDiv>div 2</StyledDiv>
      <StyledDiv>div 3</StyledDiv>
      <StyledDiv>div 4</StyledDiv>
    </Vcentered>
  </StyledDiv>
);

export const Default = Template.bind({});
Default.args = {
  $minHeight: "100vh",
  gap: "xs",
};

export const WithTop = Template1.bind({});
WithTop.args = {
  $minHeight: "100vh",
  gap: "none",
};

export const WithBottom = Template2.bind({});
WithBottom.args = {
  $minHeight: "100vh",
  gap: "none",
};

export const WithTopAndBottom = Template3.bind({});
WithTopAndBottom.args = {
  $minHeight: "100vh",
  gap: "none",
};

export const WithWrapperAndTopAndBottom = Template4.bind({});
WithWrapperAndTopAndBottom.args = {
  $minHeight: "100%",
  gap: "none",
};
