const { heroui } = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          primary: "#f5f3ff",
          secondary: "#d6e7fe",
          text: {
            primary: "#1e1b4b",
            secondary: "#4338ca",
            tertiary: "#6d28d9",
          },
        },
        dark: {
          primary: "#0f172a",
          secondary: "#1e1b4b",
          text: {
            primary: "#e9d5ff",
            secondary: "#c4b5fd",
            tertiary: "#a78bfa",
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};

module.exports = config;
