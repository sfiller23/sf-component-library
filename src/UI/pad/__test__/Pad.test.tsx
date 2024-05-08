import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import Pad from "../Pad";

describe("Pad component", () => {
  it("Pad should render correctly", () => {
    render(<Pad data-testid="pad" padding={"l"} />);
    const pad = screen.getByTestId("pad");
    expect(pad).toBeInTheDocument();
  });
});
