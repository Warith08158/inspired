/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem'
      },
      screens: {
        sm: '640px',

        md: '768px',

        lg: '1024px',

        xl: '1280px'
      }
    },
    colors: {
      cyan: {
        400: '#23BDEE',
        500: '#49BBBD'
      },
      gray: {
        600: '#5B5B5B',
        100: '#595959'
      },
      white: {
        100: '#FFFFFF'
      },
      orange: {
        10: '#FCD980',
        100: '#F48C06'
      },
      blue: {
        10: '#F4F6FC',
        40: '#29B9E7',
        50: '#2405F2',
        70: '#282938',
        80: '#282938',
        100: '#252641'
      },
      purple: {
        80: '#5B72EE',
        90: '#696984',
        100: '#2F327D'
      },
      teal: {
        100: '#00CBB8'
      },
      green: {
        100: '#00CBB8'
      }
    },
    extend: {}
  },
  plugins: []
}
