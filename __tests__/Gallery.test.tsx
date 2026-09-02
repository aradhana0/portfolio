import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Gallery } from "@/components/sections/Gallery";
import { sketches } from "@/content/sketches";

describe("Gallery", () => {
  it("renders a tile per sketch", () => {
    render(<Gallery />);
    expect(screen.getAllByRole("button", { name: /^Open / })).toHaveLength(sketches.length);
  });

  it("opens a lightbox on click and closes on Escape", async () => {
    render(<Gallery />);
    await userEvent.click(screen.getByRole("button", { name: `Open ${sketches[0].title}` }));
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await waitFor(() => expect(screen.queryByRole("dialog")).not.toBeInTheDocument());
  });
});
