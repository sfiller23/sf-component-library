import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import Columns from "../Columns";

describe("Columns component", () => {
  it("Columns should render correctly", () => {
    render(<Columns data-testid="columns" />);
    const columns = screen.getByTestId("columns");
    expect(columns).toBeInTheDocument();
  });
});
