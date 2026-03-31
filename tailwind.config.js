/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        scroll: 'scroll 40s linear infinite',
      },
      colors: {
        brand: {
          900: '#983000',
          800: '#B24200',
          700: '#CB5400',
          600: '#E56600',
          500: '#FE7800',
          400: '#FE9333',
          300: '#FEAE66',
          200: '#FFC999',
          100: '#FFE4CC',
        },
        navy: {
          900: '#000C20',
          800: '#001840',
          700: '#334666',
          600: '#66748C',
          500: '#99A3B3',
          400: '#CCD1D9',
        },
        teal: {
          900: '#005848',
          800: '#00765C',
          700: '#00946F',
          600: '#00B283',
          500: '#00D096',
          400: '#33D9AB',
          300: '#66E3C0',
          200: '#99ECD5',
          100: '#CCF6EA',
        },
        gold: {
          900: '#C09848',
          800: '#D0A955',
          700: '#E0B962',
          600: '#EFCA6F',
          500: '#FFDB7C',
          400: '#FFE296',
          300: '#FFE9B0',
          200: '#FFF0CB',
          100: '#FFF8E5',
        },
        sky: {
          900: '#005092',
          800: '#0E70AC',
          700: '#1C90C5',
          600: '#2AB0DF',
          500: '#38D0F8',
          400: '#60D9F9',
          300: '#88E3FB',
          200: '#AFECFC',
          100: '#D7F6FE',
        },
        purple: {
          900: '#6F4890',
          800: '#855CA6',
          700: '#9C71BC',
          600: '#B285D2',
          500: '#C899E8',
          400: '#D3ADED',
          300: '#DEC2F1',
          200: '#E9D6F6',
          100: '#F4EBFA',
        },
        pink: {
          900: '#A75865',
          800: '#BD717B',
          700: '#D38991',
          600: '#E8A2A6',
          500: '#FEBABC',
          400: '#FEC8C9',
          300: '#FED6D7',
          200: '#FFE3E4',
          100: '#FFF1F2',
        },
        gmd: {
          white: '#FFFFFF',
          light: '#F7F7F7',
        }
      }
    },
  },
  plugins: [],
}
