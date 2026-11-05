/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}', './content/**/*.js'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0A1426',
          900: '#0E1B33',
          800: '#16263F',
          700: '#1F3252',
        },
        paper: '#F5F8FC',
        ink: '#122038',
        cyan: {
          brand: '#19B8E8',
          deep: '#0E8FB8',
        },
        amber: {
          rent: '#E8A33D',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      maxWidth: {
        site: '72rem',
      },
    },
  },
  plugins: [],
};
