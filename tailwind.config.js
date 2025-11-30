/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        serif: ["'Crimson Text'", "serif"],
      },
      colors: {
        pastelBlue: "#B8D9FF",
        pastelPink: "#FFEAF2",
        pastelMint: "#E7FFF8",
      },
    },
  },
  plugins: [],
};
