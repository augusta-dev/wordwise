/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",],
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
        "rubik": "var(--font-rubik)",
        "squada": "var(--font-squada-one)",
        "signika": "var(--font-signika-negative)",
      },
      boxShadow: {
        main: "0px 2px 4px 2px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);",
        
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

