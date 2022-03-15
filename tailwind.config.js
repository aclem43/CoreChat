module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
   theme: {
     fontFamily:{
      'font1': ['Didot'],
     },
      extend: {
        colors: { 
          transparent: 'transparent',
          current: 'currentColor',
          'primary': '#172121',
          'secondary': '#444554',
          'tetiary':'#E5D0CC',
          'quaternary':'#7F7B82',
          'warn':'#995c1f',
          'critical':'#751f1b',
          'sucsess':'#2d751e',

          'messsageBG':'#7F7B82',
          'messageAlt':'#000000',

          'grouptbg':  '#535466',
          'grouptbord':'#383942',

          'button':'#444554',
          'button-hover':'#565769',
          
        },
    },
    animation: {
        fade: 'fadeIn 0.2s ease-in',
      },

      // that is actual animation
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
 