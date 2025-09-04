import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      keyframes: {
        chromaShift: {
          "0%": { filter: "hue-rotate(0deg)" },
          "100%": { filter: "hue-rotate(360deg)" },
        },
      },
      animation: {
        chroma: "chromaShift 3s infinite linear",
      },
      objectPosition: {
        "center-bottom": "center bottom",
      },
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    fontFamily: {
      sans: ["Atkinson Hyperlegible", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      helvetica: ["Helvetica", "sans-serif"],
      futura: ["Futura", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      atkison: ["Atkinson Hyperlegible", "sans-serif"], // typo dari nama font tetap aku ikutkan
      montserrat: ["Montserrat", "sans-serif"],
      archivo: ["Archivo", "sans-serif"],
      neue: ["Helvetica Neue", "sans-serif"],
    },
  },
  plugins: [],
};

export default config;
