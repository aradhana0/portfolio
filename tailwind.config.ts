import type { Config } from "tailwindcss";

// Colours are stored as space-separated RGB channels in CSS variables
// (see app/globals.css) so Tailwind's "/opacity" modifier works on every token.
const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "rgb(var(--bg) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        card: "rgb(var(--card) / <alpha-value>)",
        elevated: "rgb(var(--elevated) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
        primary: {
          DEFAULT: "rgb(var(--primary) / <alpha-value>)",
          deep: "rgb(var(--primary-deep) / <alpha-value>)",
        },
        accentblue: "rgb(var(--blue) / <alpha-value>)",
        accentcyan: "rgb(var(--cyan) / <alpha-value>)",
        fg: {
          DEFAULT: "rgb(var(--fg) / <alpha-value>)",
          muted: "rgb(var(--fg-muted) / <alpha-value>)",
          subtle: "rgb(var(--fg-subtle) / <alpha-value>)",
        },
      },
      borderColor: {
        DEFAULT: "rgb(var(--line) / 0.12)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px -10px rgb(var(--primary) / 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
