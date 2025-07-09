const { heroui } = require("@heroui/theme")

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        light: {
          primary: '#f8fafc',
          secondary: '#f1f5f9',
          text: {
            primary: '#0f172a',
            secondary: '#334155',
            tertiary: '#64748b'
          }
        },
        dark: {
          primary: '#020617',
          secondary: '#1e293b',
          text: {
            primary: '#f8fafc',
            secondary: '#e2e8f0',
            tertiary: '#94a3b8'
          }
        }
      }
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}

module.exports = config;