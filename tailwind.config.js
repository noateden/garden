/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: {
          0: '#fafafa',
        },
        black: {
          0: '#1f2937',
          100: '#4b5563',
        },

        background: '#fafafa',
        foreground: '#1f2937',
        'foreground-light': '#4b5563',
      },
    },
  },
  plugins: [],
};
