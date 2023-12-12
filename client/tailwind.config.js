/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'tablet': '640px',
  
        'laptop': '1024px',
  
        'desktop': '1280px',
      },

      animation: {
        'infinitetransition': 'horizontaltransition 25s linear infinite',
      },

      keyframes: {
        'horizontaltransition': {
          from: {transform: 'translateX(0)'},
          to: {translate: 'translateX(-100%)'}
        }
      },

      fontFamily: {
        'basefont': ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],

        'mygasoek': ['Gasoek One', 'sans-serif']
      },

      backgroundImage: {
        'star-pattern': "url('/src/assets/sky.png')"
      }

    },
  },
  plugins: [],
}

