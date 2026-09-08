import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FDFBF7",
        "cream-dark": "#F6F1E7",
        rose: {
          DEFAULT: "#C57B57",
          soft: "#D4A373",
          light: "#EFD9C9",
        },
        charcoal: "#2C2C2C",
        sage: {
          DEFAULT: "#E9EDC9",
          dark: "#B7C296",
        },
        gold: "#C9A66B",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "var(--font-noto-serif-kr)", "serif"],
        sans: ["var(--font-inter)", "var(--font-noto-sans-kr)", "sans-serif"],
      },
      maxWidth: {
        app: "480px",
      },
      boxShadow: {
        soft: "0 8px 30px rgba(44, 44, 44, 0.06)",
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
        zzz: {
          "0%": { opacity: "0", transform: "translate(0, 2px) scale(0.8)" },
          "25%": { opacity: "0.75" },
          "100%": { opacity: "0", transform: "translate(6px, -14px) scale(1.15)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.2s ease-out",
        "tail-sway": "tail-sway 3.5s ease-in-out infinite",
        zzz: "zzz 3.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
