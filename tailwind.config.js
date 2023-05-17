/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5762f6',
        primaryLighten: '#808af7',
        secondary: '#6027e5',
      },
    },
    fontFamily: {
      sans: ['IBMPlexSans', 'sans-serif'],
    },
  },
  plugins: [],
};
