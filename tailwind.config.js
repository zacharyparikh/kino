import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        surface: { DEFAULT: "rgb(249 249 255)", dark: "rgb(17 19 24)" },
        "on-surface": { DEFAULT: "rgb(25 28 32)", dark: "rgb(225 226 233)" },
        "secondary-container": {
          DEFAULT: "rgb(216 227 248)",
          dark: "rgb(61 71 88)",
        },
        "on-secondary-container": {
          DEFAULT: "rgb(17 28 43)",
          dark: "rgb(216 227 248)",
        },
      },
    },
  },
  plugins: [],
};
