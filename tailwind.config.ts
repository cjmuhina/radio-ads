import type { Config } from 'tailwindcss'
import {nextui} from "@nextui-org/react";


const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  // theme: {
  //   extend: {
  //     backgroundImage: {
  //       'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  //       'gradient-conic':
  //         'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
  //     },
  //   },
  // },
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        ['sky-blue']: '#BEE2FD',
        denim: '#022959',
        bg: '#EFF5FF',
        ['light-blue']: '#ABBCFF',
        grey: '#9699AA',
        red: '#EE374A',
        'border-grey': '#D6D9E6',
        purple: '#483EFF',
        'very-light-grey': '#F8F9FF'
      }
    }
  },
  // plugins: [],
  // plugins: [
  //   require('@headlessui/tailwindcss')

  //   // Or with a custom prefix:
  //   // require('@headlessui/tailwindcss')({ prefix: 'ui' })
  // ],

  darkMode: "class",
  plugins: [nextui()]

}
export default config
