import React from "react";
import ExampleImg from "../../../assets/images/example.jpeg";
import Button from "../../../components/button/Button";
import Card from "../Card";

const Example = () => {
  return (
    <Card>
      <img src={ExampleImg} alt="example" />
      <p>test</p>
      <p>test</p>
      <Button style={{ height: "40px" }}>Click me</Button>
    </Card>
  );
};

export default Example;
