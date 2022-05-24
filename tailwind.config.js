module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'font1': ['Didot'],
    },
    extend: {

      screens: {
        'mobile': { 'raw': '(max-width: 800px)' },
        'md': { 'raw': '(min-width: 800px)' },
      },

      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary': '#172121',
        'secondary': '#444554',
        'tetiary': '#E5D0CC',
        'quaternary': '#7F7B82',
        'warn': '#995c1f',
        'critical': '#751f1b',
        'sucsess': '#2d751e',

        "light": "#878787",

        'messsageBG': '#7F7B82',
        'messageAlt': '#000000',

        'grouptbg': '#535466',
        'grouptbord': '#383942',

        'notifi-green': "#185915",
        'notifi-red': "#a3130b",
        'notifi-btn-green': "#21941e",
        'notifi-btn-green-hover': "#28b823",
        'notifi-btn-red': "#bf3028",
        'notifi-btn-red-hover': "#bf3028",

        'button': '#444554',
        'button-hover': '#565769',

        'red': '#b50f04',
        'green': '#008a0e',
        'orange': '#8a4e00',


      },
    },
    animation: {
      fade: 'fadeIn 0.2s ease-in',
    },

    keyframes: theme => ({
      fadeIn: {
        '0%': { backgroundColor: theme('colors.transparent') },
        '100%': { backgroundColor: theme('colors.quaternary') },
      },
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
