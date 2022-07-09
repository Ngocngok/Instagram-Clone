module.exports = {
    content: [
        './src/pages/**/*.{html,js}',
        './src/components/**/*.{html,js}'
      ],
    future: {
    },
    theme: {
      fill: (theme) => ({
        red: theme('colors.red.primary')
      }),
      colors: {
        white: '#ffffff',
        blue: {
          medium: '#0095f6'
        },
        black: {
          light: '#005c98',
          faded: '#00000059'
        },
        gray: {
          base: '#616161',
          background: '#fafafa',
          primary: '#dbdbdb'
        },
        red: {
          primary: '#ed4956'
        }
      }
    }
}