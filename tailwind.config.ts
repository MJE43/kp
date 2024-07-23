import type { Config } from 'tailwindcss';
import resolveConfig from 'tailwindcss/resolveConfig';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0F172A',
        foreground: '#FFFFFF',
        accent: '#3B82F6',
        'secondary-background': '#F1F5F9',
        border: '#E5E7EB',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

const fullConfig = resolveConfig(config);

export default fullConfig;
