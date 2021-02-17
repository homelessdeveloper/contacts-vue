module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        "accent": "#304ffd",
        "main-black":"#3F434A",
      },
      boxShadow: {
        "button-passive": "0 2px 0 rgb(38,63,202,1)",
        "button-active": "0px 8px 16px rgba(48, 76, 253, 0.2)",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
