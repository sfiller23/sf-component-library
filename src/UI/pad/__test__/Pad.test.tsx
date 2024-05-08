import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import Pad from "../Pad";

describe("Pad component", () => {
  it("Pad should render correctly", () => {
    render(<Pad padding={"l"} />);
    const pad = screen.getByRole("pad");
    expect(pad).toBeInTheDocument();
  });
});
