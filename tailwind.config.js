const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./public/index.html', './src/**/*.svelte'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      "tan": `#C5BDB2`,
      "dark-tan": `#8E7461`,
      "medium-gray": `#777C83`,
      "dark-gray": `#5F5A58`,
      "light-tan": `#F3ECE4`,
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      blue_gray: colors.blueGray,
      cool_gray: colors.coolGray,
      gray: colors.gray,
      true_gray: colors.trueGray,
      warm_gray: colors.warmGray,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose
    },
    fontFamily: {
      roboto_bold: ['roboto_bold'],
      nunito_black: [`nunito_black`],
      nunito_black_italic: [`nunito_black_italic`],
      nunito_bold: [`nunito_bold`],
      nunito_bold_italic: [`nunito_bold_italic`],
      nunito_extrabold: [`nunito_extrabold`],
      nunito_extrabold_italic: [`nunito_extrabold_italic`],
      nunito_extralight: [`nunito_extralight`],
      nunito_extralight_italic: [`nunito_extralight_italic`],
      nunito_italic: [`nunito_italic`],
      nunito_light: [`nunito_light`],
      nunito_light_italic: [`nunito_light_italic`],
      nunito_regular: [`nunito_regular`],
      nunito_semibold: [`nunito_semibold`],
      nunito_semibold_italic: [`nunito_semibold_italic`],
      serif: [
        `roboto_slabregular`,
        `Georgia`,
        `Cambria`,
        `"Times New Roman"`,
        `Times`,
        `serif`
      ],
      mono: [
        `Menlo`,
        `Monaco`,
        `Consolas`,
        `"Liberation Mono"`,
        `"Courier New"`,
        `monospace`
      ]
    },
    extend: {
      width: {
        "1/14": `7.142857%`,
        "1/15": `6.666667%`
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
