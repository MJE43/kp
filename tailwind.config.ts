import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
}

export default config
