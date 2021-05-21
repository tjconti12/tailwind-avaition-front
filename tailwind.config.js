module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: (theme) => ({
        '600': '600px'
      }),
      backgroundImage: {
        'park': "url('/src/Images/LakeEola2.jpeg')"
      },
      zIndex: {
        1000: '1000'
      },
      margin: (theme, { negative }) => ({
        'test': "0 0 0 5%"
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
