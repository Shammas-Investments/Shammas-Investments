const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        "4xl": "2.5rem",
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-playfair)", ...defaultTheme.fontFamily.serif],
        display: ["var(--font-playfair)", ...defaultTheme.fontFamily.serif],
        banner: ["Dark Crow", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        primary: {
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#818181',
          500: '#666666',
          600: '#515151',
          700: '#434343',
          800: '#383838',
          900: '#000000',
        },
      },
      screens: {
        // Touch-specific media queries
        'touch': { 'raw': '(pointer: coarse)' },
        'no-touch': { 'raw': '(pointer: fine)' },
        'hover-able': { 'raw': '(hover: hover)' },
        'hover-none': { 'raw': '(hover: none)' },
        // Additional responsive breakpoints
        'xs': '475px',
        '3xl': '1920px',
      },
      spacing: {
        // Touch-friendly minimum tap targets (44px)
        'touch': '44px',
        // Safe area insets for notched devices
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
      minHeight: {
        'touch': '44px',
      },
      minWidth: {
        'touch': '44px',
      },
    },
  },
  plugins: [],
};
