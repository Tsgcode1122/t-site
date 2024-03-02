/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        iix: { max: "325px" },
        ixr: { min: "326px" },
        ixi: { min: "400px" },
        ixx: "500px",
      },
      colors: {
        whiteC: "#fdfdfd", //white for background
        lightC: "#F6F5F4", //dark of white for background
        blackC: " #0a0a0a", // black for text
        greyC: "#808080", //light of black for text
        brightC: "#27CF4E",
      },
      fontFamily: {
        tsg: [" Almarai", "sans-serif"],
        tsgD: ["Hanken Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
    darkTheme: "light",
    base: true,
    styled: false,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
};
