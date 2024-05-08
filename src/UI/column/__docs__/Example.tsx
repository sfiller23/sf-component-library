import React, { FC } from "react";
import Column from "../Column";

const Example: FC<{ $span: number }> = ({ $span = 2 }) => {
  return (
    <Column data-testid="column" $span={$span}>
      <div />
    </Column>
  );
};

export default Example;
