/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,jsx,html,css,scss}"],
  theme: {
    extend: {
      colors: {
        secondary: {
          300: "#386382",
        },
        primary: {
          300: "#F9F9F9",
        },
      },
    },
  },
  plugins: [
    ({ addVariant }) => {
      addVariant("children", "& > *");
    },
  ],
};
