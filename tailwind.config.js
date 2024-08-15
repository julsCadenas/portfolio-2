/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // screens : {
    //   'xs': '380px'
    // },
    extend: {
      colors: {
        black: '#000000',
        customWhite: '#f5f5f5',
        customGray: '#737373',
      },
      fontFamily: {
        poppins: ['Poppins'],
      },
    },
  },
  plugins: [],
}
