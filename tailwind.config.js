/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#5A7551',
          brown: '#6B5736',
          blue: '#4A6A8A',
          lightblue: '#6B8DB2',
          gold: '#E2C05C',
        },
        primary: {
          DEFAULT: '#4A6A8A',
          dark: '#2C425A',
          light: '#6B8DB2',
        },
        accent: {
          gold: '#E2C05C',
          brown: '#6B5736',
        },
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} 