/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#82B440',
        },
        secondary: {
          DEFAULT: '#000000',
        },
        // Add your new colors here
        customBlue: '#0000ff',
      },
      // keyframes: {
      //   scaleZoom: {
      //     '0%': {
      //       transform: 'scale(1)',
      //     },
      //     '100%': {
      //       transform: 'scale(2)',
      //     },
      //   },
      // },
    },
  },
  plugins: [],
}

