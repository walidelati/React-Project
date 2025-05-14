/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
  extend: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
  },
},
  plugins: [],
}

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}


