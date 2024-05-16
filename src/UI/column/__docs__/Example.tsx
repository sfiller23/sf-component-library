import React, { FC } from "react";
import Column from "../Column";

const Example: FC<{ $span: number }> = ({ $span = 2 }) => {
  return <Column $span={$span}>column</Column>;
};

export default Example;
