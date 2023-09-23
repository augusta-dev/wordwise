/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html,ttf}"],
  theme: {
    extend: {
      colors: {
        darkPurple: "#210124",
        purpleBody: "#5F0A87",
        lightPurple: "#C589E8",
        textPurple: "#F0D7FF",
        bgBlue: "#47A9FF",
        blurBlue: "#1098F7",
        blue: "#108FFF",
        textBlue: "#000D18",
        navyBlue: "#00539C",
        orange: "#FF3F00",
        bgOrange: "#FF632E",
        textOrange: "#00010C", 
        red: "#FF0000",
      },
      fontFamily: {
        rubik: "Rubik",
        squada: "Squada One",
        signika: "Signika Negative",
      }
    },
  },
  // style: {
  //   postcss: {
  //     plugins: [
  //       require('tailwindcss')("./tailwind.config"), require("autoprefixer")
  //     ],
  //   },
  // },
  plugins: [],
}

