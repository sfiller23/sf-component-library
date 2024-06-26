import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import Column from "../Column";

describe("Column component", () => {
  it("Column should render correctly", () => {
    render(<Column span={1}>column</Column>);
    const column = screen.getByText("column");
    expect(column).toBeInTheDocument();
  });
});
