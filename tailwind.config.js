/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        veryDarkBlue: "hsl(234, 12%, 34%)",
        grayishBlue: "hsl(229, 6%, 66%)",
        veryLightGray: "hsl(0, 0%, 98%)",
      },
      fontFamily: {
        poppins2: ["Poppins-2", "cursive"],
        poppins4: ["Poppins-4", "cursive"],
        poppins6: ["Poppins-6", "cursive"],
      },
    },
  },
  plugins: [],
};
