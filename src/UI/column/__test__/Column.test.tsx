import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import Column from "../Column";

describe("Column component", () => {
  it("Column should render correctly", () => {
    render(<Column $span={2} />);
    const column = screen.getByRole("div");
    expect(column).toBeInTheDocument();
  });
});
