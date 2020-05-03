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
        colors: {
            background: {
                // 'primary': 'white',
                // 'secondary': '#F7FAFC',
                // 'ternary': '#E2E8F0',
                // dark mode 
                // 'primary': '#0D2438',
                // 'secondary': '#102C44',
                // 'ternary': '#1E3951',
                primary: 'var(--bg-background-primary)',
                secondary: 'var(--bg-background-secondary)',
                ternary: 'var(--bg-background-ternary)',
            },

            copy: {
                primary: 'var(--text-copy-primary)',
                secondary: 'var(--text-copy-secondary)',
                ternary: 'var(--text-copy-ternary)'
            },
            transparent: 'transparent',
        },
    },

  },
    plugins: [
        require('@tailwindcss/ui'),
    ]
}
