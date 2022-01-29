module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        loading: {
          '0%': {
            left: 0,
            width: '5%',
          },
          '25%': {
            left: '21%',
            width: '8%',
          },
          '50%': {
            left: '40%',
            width: '20%'
          },
          '75%': {
            left: '71%',
            width: '8%',
          },
          '95%': {
            left: '95%',
            width: '5%',
          },
        },
      },
      animation: {
        loading: 'loading 1.2s infinite linear'
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
