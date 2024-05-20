/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

    screens:{
      xs:"320px",
      sm:"375px",
      sml:"500px",
      md:"667px",
      mdl:"768px",
      lg:"960px",
      lgl:"1024px",
      xl: "1280px",
      xxl:"1320px",

    },

      fontFamily:{
        body:["Poppins", "sans-serif"],
        titleFont:["Montserrat", "sans-serif"],
        logoFont: ["Briem Hand", "cursive"]
      },
      colors: {
        bodyColor: "#212428",
        lightText: "#c4cfde",
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
        designColor: "#ff014f"
      },
    boxShadow: {
      shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
    },
     
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}