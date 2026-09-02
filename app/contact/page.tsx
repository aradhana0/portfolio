import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = { title: "Contact — Aradhana Dubey" };

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title="Contact"
        subtitle="Open to roles and collaborations. Send a note and I'll get back to you."
      />
      <ContactForm />
    </>
  );
}
