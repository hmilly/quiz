module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "400px",
      sm: "636px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        navy: "#000080",
        opacityBlack: "#00000090",
      },
    },
    fontFamily: {
      sans: ["Arial", "Verdana", "sans-serif"],
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "6px",
      6: "16px",
      8: "20px",
      10: "25px",
      12: "38px",
    },
  },
  plugins: [],
  prefix: "",
};
