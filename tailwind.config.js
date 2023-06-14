/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'League-Spartan': ['League Spartan', 'sans-serif'],
      },
      colors: {
        Primary: {
          'Dark-Cyan': 'hsl(180, 29%, 50%)',
        },
        Neutral: {
          'Light-Cyan-BG': 'hsl(180, 52%, 96%)',
          'Light-Cyan-Filter-Tablets': 'hsl(180, 31%, 95%)',
          'Dark-Cyan': 'hsl(180, 8%, 52%)',
          'Very-Dark-Cyan': 'hsl(180, 14%, 20%)',
        },
      },
    },
  },
  plugins: [],
};
