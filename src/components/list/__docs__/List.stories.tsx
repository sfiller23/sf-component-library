import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import List from "../List";

import ExampleImg from "../../../assets/images/example.jpeg";

const meta: Meta<typeof List> = {
  title: "List",
  component: List,
};

export default meta;
type Story = StoryObj<typeof List>;

export const Simple: Story = {
  args: {
    items: [{ text: "Item 1" }, { text: "Item 2" }, { text: "Item 3" }],
    ItemComponent: ({ text }: { text: string }) => <div>{text}</div>,
  },
};

export const WithMargin: Story = {
  args: {
    items: [{ text: "Item 1" }, { text: "Item 2" }, { text: "Item 3" }],
    ItemComponent: ({ text }: { text: string }) => <div>{text}</div>,
    $itemsMargin: "l",
  },
};

export const WithImage: Story = {
  args: {
    items: [
      { text: "Item 1", img: ExampleImg },
      { text: "Item 2", img: ExampleImg },
      { text: "Item 3", img: ExampleImg },
    ],
    ItemComponent: ({ text, img }: { text: string; img: string }) => (
      <div style={{ display: "flex" }}>
        <img src={img} alt="example" width="20px" />
        <div>{text}</div>
      </div>
    ),
  },
};
