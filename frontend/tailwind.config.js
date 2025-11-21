// tailwind.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  content: [
    './index.html',
    './public/index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        oleo: ['Oleo Script', 'cursive'],
        
      },
      colors: {
        habitx: '#000000',
        accent: '#1f1f1f',
      },
    },
  },
  plugins: [require('tailwindcss-motion')],
});
