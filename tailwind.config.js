/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5762f6',
        secondary: '#007D5D',
        tertiary: '#AD4200',
      },
    },
    fontFamily: {
      sans: ['IBMPlexSans', 'sans-serif'],
    },
  },
  plugins: [],
};
