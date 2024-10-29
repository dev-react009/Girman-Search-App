/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'], 
      },
      colors: {
        customBlack: '#111111',
        buttonBlack:"#18181B" ,
        phoneTextBalck:"#425763",
      },
    },
  },
  plugins: [],
}

