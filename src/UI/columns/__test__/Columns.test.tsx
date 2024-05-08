import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import Columns from "../Columns";

describe("Columns component", () => {
  it("Columns should render correctly", () => {
    render(<Columns />);
    const columns = screen.getByRole("columns");
    expect(columns).toBeInTheDocument();
  });
});
