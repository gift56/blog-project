/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#6941C6",
        softbg: "#f0f0f0",
        dark: "#667085",
        dark2: "#090D1F",
        darkBg: "#090D1F",
        darkText: "#1A1A1A",
      },
    },
  },
  plugins: [],
};
