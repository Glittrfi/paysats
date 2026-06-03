import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Legacy names remapped to the cream/terracotta palette so existing
        // bg-bg / bg-card / border-border / text-gold / gold-gradient classes
        // flip automatically.
        bg: "var(--paysats-bg)",
        card: "var(--paysats-surface)",
        border: "var(--paysats-border)",
        gold: "var(--paysats-accent)",
        orange: "var(--paysats-accent-muted)",
        paysats: {
          bg: "var(--paysats-bg)",
          surface: "var(--paysats-surface)",
          "surface-muted": "var(--paysats-surface-muted)",
          border: "var(--paysats-border)",
          line: "var(--paysats-line)",
          text: "var(--paysats-text)",
          "text-muted": "var(--paysats-text-muted)",
          "text-faint": "var(--paysats-text-faint)",
          accent: "var(--paysats-accent)",
          "accent-muted": "var(--paysats-accent-muted)",
          success: "var(--paysats-success)",
          warning: "var(--paysats-warning)",
          danger: "var(--paysats-danger)"
        }
      },
      borderRadius: {
        card: "var(--radius-card)",
        pill: "var(--radius-pill)",
        control: "var(--radius-control)"
      },
      boxShadow: {
        card: "var(--paysats-shadow-card)",
        hero: "var(--paysats-shadow-hero)",
        tile: "var(--paysats-shadow-tile)"
      },
      fontFamily: {
        sans: [
          "var(--font-plus-jakarta-sans)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif"
        ]
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" }
        },
        "grad-move": {
          "0%": { backgroundPosition: "0% 0%" },
          "25%": { backgroundPosition: "50% 100%" },
          "50%": { backgroundPosition: "100% 50%" },
          "75%": { backgroundPosition: "50% 0%" },
          "100%": { backgroundPosition: "0% 0%" }
        },
        "orb-float": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(15px, -20px) scale(1.05)" },
          "66%": { transform: "translate(-10px, 15px) scale(0.95)" }
        },
        "fade-rise": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "grad-move": "grad-move 12s ease infinite",
        "orb-float": "orb-float 8s ease-in-out infinite",
        "fade-rise": "fade-rise 0.35s cubic-bezier(0.16, 1, 0.3, 1)"
      }
    }
  },
  plugins: []
};

export default config;
