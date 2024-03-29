/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
    extend: {
      keyframes:{
       bounce: {
        '0%, 100%': {
          transform: 'translateX(-25%)',
          animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
        },
        '50%': {
          transform: 'translateX(0)',
          animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
       } 
        }
      },
      animation: {
        bounce: 'bounce 1s infinite',
      },
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
        red500: 'rgb(239 68 68)',
        red100: "rgb(254 242 242)",
        red200: "rgb(254 202 202)",
        red700: "rgb(185 28 28)",
        green500: '#00EE00',
        transparentWhite: 'rgba(255, 255, 255, 0.15)',
      },
      fontFamily: {
        "rubik": "var(--font-rubik)",
        "squada": "var(--font-squada-one)",
        "signika": "var(--font-signika-negative)",
      },
      boxShadow: {
        main: "0px 2px 4px 2px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);"    
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

