import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
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
  plugins: [],
}
export default config
