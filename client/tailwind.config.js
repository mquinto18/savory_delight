/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poppins: "Poppins",
      "Square-Peg": ["Square Peg", "sans-serif"],
    },
    extend: {
      height: {
        "90vh": "90vh",
      },
    },
    screens: {
      xs: "480px",
      ss: "630px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
