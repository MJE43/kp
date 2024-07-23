import type { Config } from 'tailwindcss';
import resolveConfig from 'tailwindcss/resolveConfig';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0F172A', // dark navy blue
        foreground: '#FFFFFF', // white
        accent: '#3B82F6', // bright blue
        'secondary-background': '#F1F5F9', // light gray
        border: '#E5E7EB',
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'heading-1': '2.5rem',
        'heading-2': '2rem',
        'heading-3': '1.75rem',
        'heading-4': '1.5rem',
        'body': '1rem',
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
