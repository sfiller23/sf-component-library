import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import Hcentered from "../Hcentered";

describe("Hcentered component", () => {
  it("Hcentered should render correctly", () => {
    render(
      <Hcentered
        data-testid="hcentered"
        maxWidth={"105px"}
        centerText
        centerChildren={false}
      />,
    );
    const hcentered = screen.getByTestId("hcentered");
    expect(hcentered).toBeInTheDocument();
  });
});
