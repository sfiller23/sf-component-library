import React, { FC, PropsWithChildren } from "react";
import { PaddingMarginProps } from "../../../utils/common";
import MyPad from "../Pad";

const Pad: FC<PropsWithChildren<PaddingMarginProps>> = ({
  space = "s m l xl",
}) => {
  return (
    <div style={{ border: "1px solid black" }}>
      <MyPad space={space}>
        <div style={{ border: "1px solid black" }}>Child</div>
      </MyPad>
    </div>
  );
};

export default Pad;
