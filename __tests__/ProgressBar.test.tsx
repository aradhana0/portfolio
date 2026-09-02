import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProgressBar } from "@/components/ui/ProgressBar";

describe("ProgressBar", () => {
  it("exposes the value via ARIA", () => {
    render(<ProgressBar label="React" value={95} />);
    expect(screen.getByRole("progressbar", { name: "React" })).toHaveAttribute(
      "aria-valuenow",
      "95",
    );
  });

  it("clamps values above 100", () => {
    render(<ProgressBar label="X" value={140} />);
    expect(screen.getByRole("progressbar", { name: "X" })).toHaveAttribute("aria-valuenow", "100");
  });

  it("clamps negative values to 0", () => {
    render(<ProgressBar label="Y" value={-10} />);
    expect(screen.getByRole("progressbar", { name: "Y" })).toHaveAttribute("aria-valuenow", "0");
  });
});
