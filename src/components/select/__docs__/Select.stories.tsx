import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import Select, { IOption, colorStyles } from "../Select";

// interface ISelectProps {
//   // options: { options: IOption[] };
//   // styles: Partial<StylesConfig<IOption>>;
//   props: typeof Select;
// }

export default {
  title: "Select",
  component: Select,
  argTypes: {
    options: {
      control: "object",
      description: "Array of options for the select component",
    },
    styles: {
      control: "object",
      description: "Styles for the select component",
    },
    // Define other props as needed
  },
} as Meta;
const options: { options: IOption[] } = {
  options: [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ],
};

const Template: StoryFn<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: options.options,
  styles: colorStyles,
};
