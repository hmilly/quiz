module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "636px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        navy: '#000080',
        opacityBlack: '#00000090'
      },
    },
    fontFamily: {
      sans: ["Arial", "Verdana", "sans-serif"],
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '20px',
      '10': '33px'
    }
  },
  plugins: [],
  prefix: "",
};
