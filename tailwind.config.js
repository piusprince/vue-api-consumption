/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-shade": "#1b2448",
        "blue-shade-light": "#595dff",
      },
    },
  },
  plugins: [],
};
