/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
      extend: {
        colors: {
            'blue': {
                '50': '#f4f6fb',
                '100': '#e8ecf6',
                '200': '#cdd8ea',
                '300': '#a1b8d8',
                '400': '#6e92c2',
                '500': '#4c75ab',
                '600': '#38598b',
                '700': '#304a74',
                '800': '#2b4061',
                '900': '#283852',
                '950': '#1a2337',
            },
        }
      },
      fontFamily: {
        'sans': ['Open Sans', 'system-ui'],
        'rubik': ['Rubik', 'system-ui'],
      }
    },
    content: ["./src/**/*.{html,js}"],
    plugins: [],
  }