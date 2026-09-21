import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      // Every palette colour is a CSS variable (RGB channels, so `/opacity`
      // modifiers keep working) so the reading themes in globals.css can swap the
      // whole palette by changing one attribute on <html>. `white` is the "card"
      // surface, not literal white — it lifts off the page in every theme.
      colors: {
        cream: "rgb(var(--c-cream) / <alpha-value>)",
        "cream-dark": "rgb(var(--c-cream-dark) / <alpha-value>)",
        white: "rgb(var(--c-white) / <alpha-value>)",
        rose: {
          DEFAULT: "rgb(var(--c-rose) / <alpha-value>)",
          soft: "rgb(var(--c-rose-soft) / <alpha-value>)",
          light: "rgb(var(--c-rose-light) / <alpha-value>)",
        },
        charcoal: "rgb(var(--c-charcoal) / <alpha-value>)",
        sage: {
          DEFAULT: "rgb(var(--c-sage) / <alpha-value>)",
          dark: "rgb(var(--c-sage-dark) / <alpha-value>)",
        },
        gold: "rgb(var(--c-gold) / <alpha-value>)",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "var(--font-noto-serif-kr)", "serif"],
        reading: ["var(--font-literata)", "var(--font-noto-serif-kr)", "serif"],
        sans: ["var(--font-inter)", "var(--font-noto-sans-kr)", "sans-serif"],
      },
      maxWidth: {
        app: "480px",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        // The desktop app frame: a deeper, wider drop so the fixed-width column
        // reads as a deliberate device sitting on the stage, not a stray card.
        frame: "var(--shadow-frame)",
        // Left-cast lift for the slide-over menu.
        drawer: "var(--shadow-drawer)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(4px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "tail-sway": {
          "0%, 100%": { transform: "rotate(-7deg)" },
          "50%": { transform: "rotate(9deg)" },
        },
        // Listening-tile waveform bars on the landing page.
        wave: {
          "0%, 100%": { transform: "scaleY(0.35)" },
          "50%": { transform: "scaleY(1)" },
        },
        zzz: {
          "0%": { opacity: "0", transform: "translate(0, 2px) scale(0.8)" },
          "25%": { opacity: "0.75" },
          "100%": { opacity: "0", transform: "translate(6px, -14px) scale(1.15)" },
        },
        // Shelf-cat idle motion: sparkles, floating books and rising tea steam.
        twinkle: {
          "0%, 100%": { opacity: "0.35", transform: "scale(0.7)" },
          "50%": { opacity: "1", transform: "scale(1.15)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-3px)" },
        },
        steam: {
          "0%": { opacity: "0", transform: "translateY(3px)" },
          "40%": { opacity: "0.85" },
          "100%": { opacity: "0", transform: "translateY(-5px)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.2s ease-out",
        "tail-sway": "tail-sway 3.5s ease-in-out infinite",
        wave: "wave 1.3s ease-in-out infinite",
        zzz: "zzz 3.4s ease-in-out infinite",
        twinkle: "twinkle 2.6s ease-in-out infinite",
        float: "float 3.6s ease-in-out infinite",
        steam: "steam 2.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
