const typography = require('@tailwindcss/typography');
const aspectRatio = require('@tailwindcss/aspect-ratio');
const lineClamp = require('@tailwindcss/line-clamp');
const forms = require('@tailwindcss/forms');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {
      // Palette 4
      colors: {
        // Primary
        'teal-050': '#EFFCF6',
        'teal-100': '#C6F7E2',
        'teal-200': '#8EEDC7',
        'teal-300': '#65D6AD',
        'teal-400': '#3EBD93',
        'teal-500': '#27AB83',
        'teal-600': '#199473',
        'teal-700': '#147D64',
        'teal-800': '#0C6B58',
        'teal-900': '#014D40',
        // Neutrals
        'gray-050': '#F0F4F8',
        'gray-100': '#D9E2EC',
        'gray-200': '#BCCCDC',
        'gray-300': '#9FB3C8',
        'gray-400': '#829AB1',
        'gray-500': '#627D98',
        'gray-600': '#486581',
        'gray-700': '#334E68',
        'gray-800': '#243B53',
        'gray-900': '#102A43',
        // Supporting
        'blue-050': '#DCEEFB',
        'blue-100': '#B6E0FE',
        'blue-200': '#84C5F4',
        'blue-300': '#62B0E8',
        'blue-400': '#4098D7',
        'blue-500': '#2680C2',
        'blue-600': '#186FAF',
        'blue-700': '#0F609B',
        'blue-800': '#0A558C',
        'blue-900': '#003E6B',
        'purple-050': '#EAE2F8',
        'purple-100': '#CFBCF2',
        'purple-200': '#A081D9',
        'purple-300': '#8662C7',
        'purple-400': '#724BB7',
        'purple-500': '#653CAD',
        'purple-600': '#51279B',
        'purple-700': '#421987',
        'purple-800': '#34126F',
        'purple-900': '#240754',
        'red-050': '#FFEEEE',
        'red-100': '#FACDCD',
        'red-200': '#F29B9B',
        'red-300': '#E66A6A',
        'red-400': '#D64545',
        'red-500': '#BA2525',
        'red-600': '#A61B1B',
        'red-700': '#911111',
        'red-800': '#780A0A',
        'red-900': '#610404',
        'yellow-050': '#FFFAEB',
        'yellow-100': '#FCEFC7',
        'yellow-200': '#F8E3A3',
        'yellow-300': '#F9DA8B',
        'yellow-400': '#F7D070',
        'yellow-500': '#E9B949',
        'yellow-600': '#C99A2E',
        'yellow-700': '#A27C1A',
        'yellow-800': '#7C5E10',
        'yellow-900': '#513C06',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [typography, aspectRatio, lineClamp, forms],
};
