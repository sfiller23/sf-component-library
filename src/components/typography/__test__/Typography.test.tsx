import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import Typography from "../Typography";

describe("Typography component", () => {
  it("Typography should render correctly", () => {
    render(<Typography data-testid="typography">test</Typography>);
    const typography = screen.getByTestId("typography");
    expect(typography).toBeInTheDocument();
  });
});
