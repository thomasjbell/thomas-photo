/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      
      },
      fontFamily: {
        // Custom font families can go here
      },
      // Add other theme extensions as needed
    },
  },
  plugins: [
    // Add any plugins you need here
  ],
};