/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6A9C89',
        secondary: '#C1D8C3',
        accent: '#FFA725',
        background: '#FFF5E4',
      },
    },
  },
  plugins: [],
};