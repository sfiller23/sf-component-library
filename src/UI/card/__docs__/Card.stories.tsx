import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import ExampleImg from "../../../assets/images/example.jpeg";
import Inline from "../../inline/Inline";
import Pad from "../../pad/Pad";
import Rows from "../../rows/Rows";
import Card from "../Card";

export default {
  title: "Card",
  component: Card,
  argTypes: {
    background: { control: "text" },
    radius: { control: "text" },
    $imgWidth: { control: "text" },
    bottomButtonEffect: { control: "boolean" },
    width: { control: "text" },
  },
} as Meta;

const Template: StoryFn<{ $span?: number }> = (args) => (
  <Card {...args}>
    <Pad $space="l">
      <Inline align="center" justify="start" gap="l">
        <img src={ExampleImg} alt="house" />
        <Rows align="start" justify="evenSpace" gap="l">
          <p style={{ fontSize: "2rem", margin: "0px" }}>You need a house</p>
          <p style={{ fontSize: "1rem", margin: "0px" }}>
            Tell us your needs, we will give you thousands of
            <br /> suggestions for the dream home.
          </p>
        </Rows>
      </Inline>
    </Pad>
    <button style={{ height: "2rem" }}>Click Me</button>
  </Card>
);

const Template2: StoryFn<{ $span?: number }> = (args) => (
  <Card {...args}>
    <Pad space="l">
      <Inline align="center" justify="start" gap="l">
        <img src={ExampleImg} alt="house" />
        <Rows align="start" justify="evenSpace" gap="l">
          <p style={{ fontSize: "2rem", margin: "0px" }}>You need a house</p>
          <p style={{ fontSize: "1rem", margin: "0px" }}>
            Tell us your needs, we will give you thousands of
            <br /> suggestions for the dream home.
          </p>
        </Rows>
      </Inline>
    </Pad>
    <button style={{ height: "2rem" }}>Position the button as you wish</button>
  </Card>
);

export const Default = Template.bind({});
Default.args = {
  $imgWidth: "30%",
  width: "100%",
  background: "blue",
  bottomButtonEffect: true,
};

export const MoreNiceLooking = Template.bind({});
MoreNiceLooking.args = {
  $imgWidth: "30%",
  width: "60%",
  background: "#98b7c1",
  bottomButtonEffect: true,
};

export const NoHalfButtonOutEffect = Template2.bind({});
NoHalfButtonOutEffect.args = {
  $imgWidth: "30%",
  width: "60%",
  background: "#98b7c1",
  bottomButtonEffect: false,
};
