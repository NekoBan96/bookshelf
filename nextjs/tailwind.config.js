/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        emerald: colors.emerald,
        fuchsia: colors.fuchsia,
        gray: colors.slate,
        'th-bg': 'var(--background)',
        'th-bg-secondary': 'var(--background-secondary)',
        'th-fg': 'var(--foreground)',
        'th-primary-dark': 'var(--primary-dark)',
        'th-primary-medium': 'var(--primary-medium)',
        'th-primary-light': 'var(--primary-light)',
        'th-accent-dark': 'var(--accent-dark)',
        'th-accent-medium': 'var(--accent-medium)',
        'th-accent-light': 'var(--accent-light)',
        'th-white-black': 'var(--white-black)',
      },
      transitionProperty: {
        'outline': 'outline',
        'border': 'border',
      },
      aspectRatio: {
        'card': '9 / 14',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};