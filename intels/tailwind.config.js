/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {colors: {
      customColor: '#c2c2ec',
      custColor: '#c2c2ec',
    },
  },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}