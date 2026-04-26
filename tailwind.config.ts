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
        gurukul: {
          blue: "#1E3A8A", // Deep modern blue
          saffron: "#F97316", // Spiritual orange
          light: "#F8FAFC", // Off-white for minimal look
          dark: "#0F172A", // Dark slate for text
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-merriweather)", "serif"], // For Vedic/Ancient feel
      },
    },
  },
  plugins: [],
};
export default config;