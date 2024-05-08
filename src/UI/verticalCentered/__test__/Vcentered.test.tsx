import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import Vcentered from "../Vcentered";

describe("Vcentered component", () => {
  it("Vcentered should render correctly", () => {
    render(<Vcentered />);
    const vcentered = screen.getByRole("vcentered");
    expect(vcentered).toBeInTheDocument();
  });
});
