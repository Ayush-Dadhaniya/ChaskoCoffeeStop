/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          100: '#F5E6D3',
          300: '#D2B48C',
          600: '#8B4513',
          800: '#5C4033',
          900: '#3E2723',
        },
      },
    },
    boxShadow: {
      'text': '0 0 5px rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 0, 0, 0.5)',
    },
  },
  plugins: [],
}