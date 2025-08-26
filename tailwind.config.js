/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        floatUp: {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-5px)' },
    },
        floatDown: {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(5px)' },
    },
      },
      animation: {
        floatUp: 'floatUp 3s ease-in-out infinite',
    floatDown: 'floatDown 3s ease-in-out infinite',
      }
    },
  },
  plugins: [require('tailwindcss-motion')],
}