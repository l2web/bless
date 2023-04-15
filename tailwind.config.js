/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx'],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 20,
      g: 24,
      lg: 32,
      '2xl': 48,
      '5xl': 300
    },

    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif'
      }
    }
  },
  plugins: []
}
