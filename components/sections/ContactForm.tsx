"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/Button";

const schema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Your message should be at least 10 characters."),
});

type FormValues = z.infer<typeof schema>;

const FORMSPREE_ENDPOINT = "https://formspree.io/f/your-form-id";

const fieldClass =
  "w-full rounded-xl border bg-surface/40 px-4 py-3 text-sm text-fg placeholder:text-fg-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = async (data: FormValues) => {
    setStatus("idle");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="mx-auto max-w-xl space-y-4 px-6 pb-16"
    >
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm text-fg">
          Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Your name"
          aria-invalid={!!errors.name}
          className={fieldClass}
          {...register("name")}
        />
        {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm text-fg">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          aria-invalid={!!errors.email}
          className={fieldClass}
          {...register("email")}
        />
        {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm text-fg">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell me a bit about the role or project..."
          aria-invalid={!!errors.message}
          className={fieldClass}
          {...register("message")}
        />
        {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>}
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send message"}
      </Button>

      {status === "success" && (
        <p role="status" className="text-sm text-green-400">
          Thanks — your message has been sent.
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="text-sm text-red-400">
          Something went wrong. Please try again, or email me directly.
        </p>
      )}
    </form>
  );
}
