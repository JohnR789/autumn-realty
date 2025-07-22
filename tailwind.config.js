/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        autumn: "var(--autumn)",
        "autumn-dark": "var(--autumn-dark)",
        "autumn-light": "var(--autumn-light)",
      },
      fontFamily: {
        sans: ["Inter", "Segoe UI", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
