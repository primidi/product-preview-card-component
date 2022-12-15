/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat"],
      serif: ["Fraunces", "serif"],
    },
    screens: {
      desktop: "1440px",
    },
    extend: {
      colors: {
        "dark-cyan": "#3c8067",
        cream: "#f2ebe3",
        "very-dark-blue": "#1c232b",
        "dark-grayish-blue": "#1c232b",
      },
      fontSize: {
        "2xs": "0.6rem",
      },
      letterSpacing: {
        "more-widest": ".4em",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
