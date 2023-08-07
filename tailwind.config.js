/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        textBase: '#18181B',
        primary: '#5762f6',
        primaryLighten: '#808af7',
        secondary: '#6027e5',
        dashboardPrimary: '#2B3674',
      },
    },
    fontFamily: {
      sans: ['IBMPlexSans', 'sans-serif'],
    },
    fontSize: {
      'xxs': '0.6875rem',
      'xs': '0.875rem',
      'sm': '1rem',
      'base': '1.125rem', // zwykły tekst
      'lg': '1.25rem',
      'xl': '1.5rem',
      '2xl': '1.875rem',
      '3xl': '2.25rem',
      '4xl': '3rem', // nagłówki
      '5xl': '3.75rem',
      '6xl': '4.5rem',
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
