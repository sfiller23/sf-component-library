import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import Split from "../Split";

describe("Split component", () => {
  it("Split should render correctly", () => {
    render(<Split />);
    const split = screen.getByRole("split");
    expect(split).toBeInTheDocument();
  });
});
