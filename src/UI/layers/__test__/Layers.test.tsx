import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import Layers from "../Layers";

describe("Layers component", () => {
  it("Layers should render correctly", () => {
    render(<Layers />);
    const layers = screen.getByRole("layers");
    expect(layers).toBeInTheDocument();
  });
});
