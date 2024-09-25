import type { Config } from "tailwindcss";
const colors = require('tailwindcss/colors');

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
        pattern: /basis-/,
        variants: ['sm', 'md', 'lg', 'xl', '2xl'],
    },
    {
        pattern: /bg-(?!gradient)/,
    },
    {
        pattern: /static|fixed|relative|absolute/,
    },
],
theme: {
  extend: {
    backgroundImage: {
        'gradient-sc': 'linear-gradient(-45deg, #1d08bd, #CC0017, #1d08bd, #EB001A)',
        'gradient-main':
            'linear-gradient(180deg, var(--scgray-90) 0%, var(--scgray-98) 18%)',
    },
    backgroundSize: {
        xl: '400% 400%',
    },
    animation: {
        gradient: 'gradient 15s ease infinite',
    },
    fontFamily: {
        primary: ['DM Sans', 'sans-serif'],
        sans: ['DM Sans', 'sans-serif'],
    },
},
},
  plugins: [require('tailwindcss-animate')],
};
export default config;
