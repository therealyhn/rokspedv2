/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Outfit: ['Outfit', 'sans-serif'],
        Ovo: ['Ovo', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      animation: {
        spin_slow: 'spin 6s linear infinite',
      },
      colors: {
        primeGreen: '#6BAE45',
        darkGreen: '#558B37',
        primeYellow: '#FFC107',
        darkGray: '#343A40',
        lightGray: '#f5f5f5',
        medGray: '#9E9E9E',
        contactGreen: '#276a00a4',
        contactYellow: '#ffc1074a'
      },
      gridTemplateColumns: {
        'proj': '500px minmax(900px, 1fr) 100px'
      },
      flex: {
        '3': '3 3 0%',
      }
    }
  },
  plugins: []
}