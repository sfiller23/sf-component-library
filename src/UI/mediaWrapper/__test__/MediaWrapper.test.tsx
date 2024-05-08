import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import MediaWrapper from "../MediaWrapper";

describe("MediaWrapper component", () => {
  it("MediaWrapper should render correctly", () => {
    render(<MediaWrapper data-testid="mediaWrapper" />);
    const mediaWrapper = screen.getByTestId("mediaWrapper");
    expect(mediaWrapper).toBeInTheDocument();
  });
});
