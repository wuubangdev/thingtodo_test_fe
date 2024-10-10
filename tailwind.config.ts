import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#fa4616',
        'primary-trans': '#FDC6B7',
        'secondary': '#BC3511',
        'black': '#131E29',
        'black-blur': '#666D74'
      },
      fontSize: {
        'custom-xl': '1.125rem',
        'custom-heading': '6.75rem',
        'custom-content': '1.75rem',
        'custom-phone': '3.375rem',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '3rem',
        }
      },
      fontFamily: {
        'Archia': ['Archia', 'sans-serif'],
        'Jakarta': ['Plus Jakarta Sans', 'Helvetica', 'Arial', 'sans-serif']
      },

    },
  },
  plugins: [],
};
export default config;
