/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        black: '#000000',
        darkgray: {
          400: 'rgba(68, 61, 61, 0.7)',
          500: 'rgba(45, 45, 45, 0.7)',
        },
      },
      backdropBlur: {
        md: '9px',
        lg: '42px',
      },
      borderRadius: {
        'xl': '12px',
        'full': '9999px',
      },
    },
  },
  plugins: [],
}; 