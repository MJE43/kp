import type { Config } from 'tailwindcss';
import resolveConfig from 'tailwindcss/resolveConfig';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A',
        secondary: '#3B82F6',
        accent: '#F97316',
        'background-start': '#0F172A',
        'background-end': '#1E3A8A',
        'text-light': '#FFFFFF',
        'text-dark': '#0F172A',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

const fullConfig = resolveConfig(config);

export default fullConfig;
