const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        lg: '1280px',
      },
      fontFamily: {
        sans: ['Noto Sans Korean', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#ee8432',
        hover: 'hsl(204deg,100%,94%,0.05)',
        black: {
          DEFAULT: '#111111',
        },
        white: {
          DEFAULT: '#ffffff',
        },
        gray: {
          DEFAULT: '#414141',
        },
      },
      maxWidth: {
        90: '90rem',
      },
      minHeight: {
        4: '4rem',
      },
      padding: {
        4: '4rem',
        16: '16px',
      },
      borderWidth: {
        0.1: '0.1px',
      },
    },
  },
  safelist: [
    {
      pattern: /text-\w+/,
    },
    {
      pattern: /max-h-screen/,
    },
  ],
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar-hide'),
  ],
};
