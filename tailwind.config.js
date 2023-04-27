/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5762f6',
        secondary: '#6027e5',
        tertiary: '#007D5D',
      },
    },
    fontFamily: {
      sans: ['IBMPlexSans', 'sans-serif'],
    },
  },
  plugins: [],
};
