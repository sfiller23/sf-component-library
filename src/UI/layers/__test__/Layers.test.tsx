import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import Layers from "../Layers";

describe("Layers component", () => {
  it("Layers should render correctly", () => {
    render(<Layers data-testid="layers" />);
    const layers = screen.getByTestId("layers");
    expect(layers).toBeInTheDocument();
  });
});
