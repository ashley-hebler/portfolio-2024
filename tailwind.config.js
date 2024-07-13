/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#E8EAFC",
          100: "#D2D6F9",
          200: "#A5ADF3",
          300: "#737FED",
          400: "#4656E7",
          500: "#1D31DD",
          600: "#1726B0",
          700: "#111D83",
          800: "#0C145A",
          900: "#060A2D",
          950: "#030517",
        },
      },
    },
    fontFamily: {
      sans: ["Open Sans", "system-ui"],
      rubik: ["Rubik", "system-ui"],
    },
  },
  content: ["./src/**/*.{html,js}"],
  plugins: [],
};
