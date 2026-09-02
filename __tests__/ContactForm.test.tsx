import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ContactForm } from "@/components/sections/ContactForm";

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("ContactForm", () => {
  it("shows validation errors when submitted empty", async () => {
    render(<ContactForm />);
    await userEvent.click(screen.getByRole("button", { name: /send message/i }));
    expect(await screen.findByText(/enter your name/i)).toBeInTheDocument();
    expect(await screen.findByText(/valid email address/i)).toBeInTheDocument();
    expect(await screen.findByText(/at least 10 characters/i)).toBeInTheDocument();
  });

  it("submits the message to Formspree and shows success", async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true });
    vi.stubGlobal("fetch", fetchMock);

    render(<ContactForm />);
    await userEvent.type(screen.getByLabelText(/name/i), "Aradhana");
    await userEvent.type(screen.getByLabelText(/email/i), "a@example.com");
    await userEvent.type(
      screen.getByLabelText(/message/i),
      "Hello, this is a sufficiently long test message.",
    );
    await userEvent.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => expect(fetchMock).toHaveBeenCalledOnce());
    expect(fetchMock).toHaveBeenCalledWith(
      "https://formspree.io/f/your-form-id",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          "Content-Type": "application/json",
        }),
      }),
    );
    expect(await screen.findByRole("status")).toBeInTheDocument();
  });
});
