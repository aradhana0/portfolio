import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "@/lib/theme/ThemeProvider";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

function setup() {
  return render(
    <ThemeProvider>
      <ThemeToggle />
    </ThemeProvider>,
  );
}

describe("ThemeToggle", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove("dark");
  });

  it("toggles the dark class on the document", async () => {
    setup();
    expect(document.documentElement.classList.contains("dark")).toBe(false);
    await userEvent.click(screen.getByRole("button"));
    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });

  it("persists the chosen theme to localStorage", async () => {
    setup();
    await userEvent.click(screen.getByRole("button"));
    expect(localStorage.getItem("theme")).toBe("dark");
  });
});
