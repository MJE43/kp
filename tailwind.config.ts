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
    },
  },
  plugins: [require("tailwindcss-animate")],
};

const fullConfig = resolveConfig(config);

export default fullConfig;
