import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "@/components/sections/Hero";

describe("Hero", () => {
  it("renders the name in the heading", () => {
    render(<Hero />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Aradhana Dubey");
  });

  it("renders the title and tagline", () => {
    render(<Hero />);
    expect(screen.getByText(/Senior Frontend Engineer/)).toBeInTheDocument();
  });

  it("renders the primary CTAs", () => {
    render(<Hero />);
    expect(screen.getByRole("link", { name: /View My Work/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Download Resume/i })).toBeInTheDocument();
  });

  it("renders social links with accessible labels", () => {
    render(<Hero />);
    expect(screen.getByLabelText("GitHub")).toBeInTheDocument();
    expect(screen.getByLabelText("LinkedIn")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
  });
});
