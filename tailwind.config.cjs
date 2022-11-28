/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'theme': {
          DEFAULT: '#0593A2',
          'dark': '#036671',
          'secondary': '#F25C69',
          'gray': '#E6E6E6'
        }
      },
      screens: {
        'portrait': { 'raw': '(orientation: portrait)' },
        'touch': {'raw': '(pointer: coarse)'}
      }
    }
  },
  plugins: []
};