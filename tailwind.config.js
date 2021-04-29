module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        turqouise: '#276d6c',
        lightYellow: '#eaca3e',
        lightOrange: '#ad4132'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
