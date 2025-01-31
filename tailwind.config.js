/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      maxWidth: {
        page: "80rem", 
      },
      fontFamily: {
        bricolage: ["Bricolage Grotesque", "sans-serif"],
      },
      colors: {
        "medium-gray": "#D9D9D9",
        "light-green": "#a8d363",
        "dark-green" : "#0f2809",
      },
    },
  },
  plugins: [],
};
