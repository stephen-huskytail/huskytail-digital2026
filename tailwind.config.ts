import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "ice-blue": "#A5D8FF",
        "deep-navy": "#0a0f1e",
        "electric-blue": "#00D1FF",
        "husky-white": "#F8FAFC",
        "warm-gold": "#FFD700",
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      animation: {
        "tail-wag": "tailWag 0.8s ease-in-out 3",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "scroll-run": "scrollRun 0.3s ease-in-out",
      },
      keyframes: {
        tailWag: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(15deg)" },
          "75%": { transform: "rotate(-15deg)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 10px #A5D8FF" },
          "50%": { boxShadow: "0 0 30px #00D1FF, 0 0 60px #A5D8FF" },
        },
        scrollRun: {
          "0%": { transform: "scaleX(1)" },
          "50%": { transform: "scaleX(1.1)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
