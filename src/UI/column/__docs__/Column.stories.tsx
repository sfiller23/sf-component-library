import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { styled } from "styled-components";
import Column from "../Column";

export default {
  title: "Column",
  component: Column,
  argTypes: {
    span: {
      control: "number",
    },
  },
} as Meta;

const StyledColumn = styled(Column)`
  background-color: lightblue;
`;

const Template: StoryFn<{ span?: number }> = (args) => (
  <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
    <StyledColumn {...args}>Column1</StyledColumn>
    <Column>Column2</Column>
    <Column>Column3</Column>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  span: 1,
};

export const TwoColumns = Template.bind({});
TwoColumns.args = {
  span: 2,
};

export const ThreeColumns = Template.bind({});
ThreeColumns.args = {
  span: 3,
};
