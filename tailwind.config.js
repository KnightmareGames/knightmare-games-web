const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#242424',
    }),
    textColor: theme => ({
      ...theme('colors'),
      'primary': '#242424',
    }),
    extend: {
      fontFamily: {
        'sans': ["Roboto", ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [
  ],
}
