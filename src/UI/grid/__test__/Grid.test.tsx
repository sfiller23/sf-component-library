import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import Grid from "../Grid";

describe("Grid component", () => {
  it("Grid should render correctly", () => {
    render(<Grid data-testid="grid" minItemWidth="100px" />);
    const grid = screen.getByTestId("grid");
    expect(grid).toBeInTheDocument();
  });
});
