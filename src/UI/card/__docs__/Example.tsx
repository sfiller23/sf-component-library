import React from "react";
import ExampleImg from "../../../assets/images/example.jpeg";
import Inline from "../../inline/Inline";
import Pad from "../../pad/Pad";
import Rows from "../../rows/Rows";
import Card, { CardProps } from "../Card";

const Example = (props: CardProps) => {
  const { bottomButtonEffect } = props;
  return (
    <Card
      $imgWidth="30%"
      width="60%"
      background="#98b7c1"
      bottomButtonEffect={bottomButtonEffect}
    >
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
      <button style={{ height: "2rem" }}>Click Me</button>
    </Card>
  );
};

export default Example;
