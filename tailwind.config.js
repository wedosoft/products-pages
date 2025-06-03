/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3284D6',
        'primary-dark': '#2a6fb8',
        secondary: '#383838',
      },
      fontFamily: {
        sans: ['"NanumSquare"', '"Noto Sans KR"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
