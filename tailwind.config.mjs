/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx, mdx}",
    "./components/**/*.{js,ts,jsx,tsx, mdx}",
    "./app/**/*.{js,ts,jsx,tsx, mdx}",
    "./src/**/*.{js,ts,jsx,tsx, mdx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        mono: {
          50: "#ffffff",
          100: "#f5f5f5",
          200: "#d8d8d8",
          300: "#b2b2b2",
          400: "#2c2c2c",
          500: "#0f0f0f",
        }

      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        caveat: ["Caveat", "cursive"],
      },
    },
  },
  plugins: [],
};
