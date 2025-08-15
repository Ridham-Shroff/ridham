/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'pale-blue': '#E6F3FF',
        'light-blue': '#B3D9FF',
        'medium-blue': '#4A90E2',
        'dark-blue': '#2C5282',
        'fire-brick': '#B22222',
        primary: '#3B82F6',
        secondary: '#10B981',
      },
    },
  },
  plugins: [],
};
