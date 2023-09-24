/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primary' : '#8D6F65',
      'secondary' : '#DFAF8F',
      'lblue' : '#1AD0D1',
      'white' : '#FFFFFF',
    },
    screens: {
      sm: '480px',
      md: '920px',
      lg: '970px',
      xl: '1030px',
    },
    extend: {},
  },
  plugins: [],
}