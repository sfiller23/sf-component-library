import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Columns, { ColumnsProps } from "../Columns";

const meta: Meta<typeof Columns> = {
  title: "Columns",
  component: Columns,
};

export default meta;

type Story = StoryObj<typeof Columns>;

const Template: Story = (args: ColumnsProps) => {
  return (
    <Columns {...args}>
      <div>Child 1</div>
      <div>Child 2</div>
    </Columns>
  );
};

const Template2: Story = (args: ColumnsProps) => {
  return (
    <Columns {...args}>
      <div>Child 1</div>
      <div>Child 2</div>
      <div>Child 3</div>
    </Columns>
  );
};

const Template3: Story = (args: ColumnsProps) => {
  const { gap, evenly } = args;
  return (
    <Columns gap={gap} evenly={evenly}>
      <div>Child 1</div>
      <div>Child 2</div>
      <div>Child 3</div>
    </Columns>
  );
};

export const TwoColumnsEvenlySpread = Template;
TwoColumnsEvenlySpread.args = { gap: "none", evenly: false };

export const ThreeColumnsEvenlySpread = Template2;
ThreeColumnsEvenlySpread.args = { gap: "none", evenly: false };

export const ThreeColumns = Template3;
ThreeColumns.args = { gap: "xl", evenly: false };
