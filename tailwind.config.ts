import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#8B5CF6",
          foreground: "#FFFFFF",
        },
        meme: {
          light: "#E5DEFF",
          dark: "#6E59A5",
        }
      },
      keyframes: {
        "bounce-in": {
          "0%": { transform: "scale(0.3)", opacity: "0" },
          "50%": { transform: "scale(1.05)" },
          "70%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)", opacity: "1" }
        },
        "shake": {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(5px)" },
          "75%": { transform: "translateX(-5px)" }
        }
      },
      animation: {
        "bounce-in": "bounce-in 0.5s ease-out",
        "shake": "shake 0.5s ease-in-out"
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;