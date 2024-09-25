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

},
  plugins: [require('tailwindcss-animate')],
};
export default config;
