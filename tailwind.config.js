/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: "#F6DC3B",
        darkest: "#060620",
        dark: "#10113C",
        mid: "#747898",
        light: "#DADCEB",
        lightest: "#FFFFFF"
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        noir: ['var(--font-noir)', 'sans-serif'],
        gelasio: ['var(--font-gelasio)', 'serif'],
      },
      fontSize: {
        'base': '16px',
        'h1': '48px',
        'h2': '36px',
        'h3': '24px',
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      },
      lineHeight: {
        body: '1.6',
      },
      animation: {
        'fade-in-down': 'fadeInDown 1s ease-out',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce': 'bounce 1s infinite',
        'ping': 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        'spin': 'spin 1s linear infinite',
      },
      keyframes: {
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.5' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(-25%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
          '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
        },
        ping: {
          '75%, 100%': { transform: 'scale(2)', opacity: '0' },
        },
        spin: {
          to: { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};