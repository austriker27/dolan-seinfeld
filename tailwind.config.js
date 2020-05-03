// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            seinfeld: ['ITC Fenice Std', ...defaultTheme.fontFamily.serif],
        body: ['Libre Baskerville', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        maintitle: ['Great Vibes', 'cursive'],
      },
      fontSize: {
        '7xl': '5rem',
      },
    },
  },
    plugins: [
        require('@tailwindcss/ui'),
    ]
}
