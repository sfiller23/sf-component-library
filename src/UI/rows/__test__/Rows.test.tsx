import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import Rows from "../Rows";

describe("Rows component", () => {
  it("Rows should render correctly", () => {
    render(<Rows data-testid="rows" />);
    const rows = screen.getByTestId("rows");
    expect(rows).toBeInTheDocument();
  });
});
