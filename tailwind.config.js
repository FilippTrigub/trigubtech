/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8D1B3D', // Burgundy
        secondary: '#F2C94C', // Gold
        background: '#FDFDFD',
        'text-dark': '#1A1A1A',
        'text-light': '#F5F5F5',
        accent: '#555555', // Darker Grey
        dark: '#1A1B1E',
        'medium-grey': '#474A54',
        'light-grey': '#BBBBBB',
        'very-light-grey': '#E3E3E3',
        'breaking-line': '#161616',
        attention: '#6E0000',
        bright: '#FFFFFF',
      },
      fontFamily: {
        dosis: ['Dosis', 'sans-serif'],
      },
      fontSize: {
        'heading-mobile': '26px',
        'big-body-mobile': '20px',
        'small-body-mobile': '14px',
        'heading-desktop': '40px',
        'big-body-desktop': '26px',
        'small-body-desktop': '18px',
      },
      animation: {
        'fade-in': 'fadeIn 1.4s ease-in-out',
        'scale-hover': 'scaleHover 0.2s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleHover: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.02)' },
        },
      },
    },
  },
  plugins: [],
}