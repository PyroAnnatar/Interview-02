/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mukta: ["var(--font-mukta)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
