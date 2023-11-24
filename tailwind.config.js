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
        primary: "#dc143c",
        softbg: "#f0f0f0",
        dark: "#626262",
        dark2: "#090D1F",
        darkBg: "#0f172a",
        darkText: "#ddd",
      },
    },
  },
  plugins: [],
};
