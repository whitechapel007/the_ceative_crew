module.exports = {
  content: [
    "./components/**/*.{html,js}",
    "./index.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontSize: {
        xss: ["10px", "13px"],
      },
      fontFamily: {
        span: ["PT Serif", " serif"],
        mont: ["Montserrat", " sans-serif"],
        pop: ["Poppins", " sans-serif"],
      },
    },
  },
  plugins: [],
};
