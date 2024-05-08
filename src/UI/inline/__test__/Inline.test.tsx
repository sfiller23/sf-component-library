import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import Inline from "../Inline";

describe("Inline component", () => {
  it("Inline should render correctly", () => {
    render(<Inline justify="center" align="center" />);
    const inline = screen.getByRole("inline");
    expect(inline).toBeInTheDocument();
  });
});
