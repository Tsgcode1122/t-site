// Importing defaultTheme directly from tailwindcss
import { defaultTheme } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        iix: { max: "325px" },
        ixr: { min: "326px" },
        ixi: { min: "400px" },
        ixx: { min: "500px" },
        s: { min: "640px" },
        m: { min: "768px" },
        l: { min: "1024px" },
        sl: { min: "1280px" },
      },
      colors: {
        whiteC: "#fdfdfd",
        lightC: "#F6F5F4", //dark of white for bg
        blackC: "#0a0a0a",
        greyC: "#808080", //light of black for text
        brightC: "#27CF4E",
      },
      fontFamily: {
        tsg: ["Kanit", "sans-serif"],
        tsgD: ["Barlow", "sans-serif"],
      },
    },
    // Using defaultTheme as a base
    ...defaultTheme,
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
