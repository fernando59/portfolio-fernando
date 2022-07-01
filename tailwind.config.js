module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bunker': {
          DEFAULT: '#161B22',
          '50': '#5E7491',
          '100': '#566A85',
          '200': '#46566C',
          '300': '#364254',
          '400': '#262F3B',
          '500': '#161B22',
          '600': '#000000',
          '700': '#000000',
          '800': '#000000',
          '900': '#000000'
        },
      }
    },
  },
  plugins: [],
}