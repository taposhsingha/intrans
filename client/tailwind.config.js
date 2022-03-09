module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        open: "'Open Sans', sans-serif",
        ubun: "'Ubuntu', sans-serif",
        poppin: "'Poppins', sans-serif",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
