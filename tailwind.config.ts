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
        sans: ['Roboto', 'sans-serif'],
        heading: ['Voltage', 'sans-serif'],
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
    },
  },
  plugins: [require("tailwindcss-animate")],
};

const fullConfig = resolveConfig(config);

export default fullConfig;
