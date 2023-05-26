module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      screens: {
        'tablet': {'max': '680px'}
      },

      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },

      extend: {
        maxWidth: {
          'container': '1224px'
        }
      },
    },
    plugins: [],
  }