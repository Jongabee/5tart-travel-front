import { Config } from "tailwindcss";
import colors from 'tailwindcss/colors';
// Importa solo el paquete sin usarlo como función
import nextui from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    './node_modules/@tremor/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {

      keyframes: {
        'underline-expand': {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        'shrink-line': {
          '0%': { transform: 'scaleY(1)', opacity: '1' },
          '50%': { transform: 'scaleY(0.05)', opacity: '1' },
          '100%': { transform: 'scaleY(0.05)', opacity: '0' },
        },
      },
      animation: {
        'underline-expand': 'underline-expand 0.3s ease-in-out forwards',
        'shrink-line': 'shrink-line 0.5s ease-in-out forwards',
      },
      
     
      width: {
        'nav': '29rem',
      },
      height: {
        'custom-1': '14rem',
        'custom-2': '20rem',
        'custom-3': '3.5rem',
        'custom-4': '2.8125rem',
      },
      invert: {
        100: '1',
      },
      screens: {
        xxs: '320px',  
        xs: '412px',
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1280px', 
      },
      maxWidth: {
        'xs': '20rem',  // 320px
        'sm': '24rem',  // 384px
        'md': '28rem',  // 448px
        'lg': '32rem',  // 512px
        'xl': '48rem',  // 768px
        '4xl': '64rem', // 1024px
      },
      colors: {
        indigo500: "#6366f1",
        violeta: "#A763F1",
        red500: "#e83c88",
        salmon500: "#e85555",
        orange500: "#d17533",
        yellow500: "#af8f2c",
        lime500: "#88a147",
        customGray: 'rgb(92, 91, 94)',
        tremor: {
          brand: {
            faint: colors.blue[50],
            muted: colors.blue[200],
            subtle: colors.blue[400],
            DEFAULT: colors.blue[500],
            emphasis: colors.blue[700],
            inverted: colors.white,
          },
          background: {
            muted: colors.gray[50],
            subtle: colors.gray[100],
            DEFAULT: colors.white,
            emphasis: colors.gray[700],
          },
          border: {
            DEFAULT: colors.gray[200],
          },
          ring: {
            DEFAULT: colors.gray[200],
          },
          content: {
            subtle: colors.gray[400],
            DEFAULT: colors.gray[500],
            emphasis: colors.gray[700],
            strong: colors.gray[900],
            inverted: colors.white,
          },
        },
        'dark-tremor': {
          brand: {
            faint: '#0B1229',
            muted: colors.blue[950],
            subtle: colors.blue[800],
            DEFAULT: colors.blue[500],
            emphasis: colors.blue[400],
            inverted: colors.blue[950],
          },
          background: {
            muted: '#131A2B',
            subtle: colors.gray[800],
            DEFAULT: colors.gray[900],
            emphasis: colors.gray[300],
          },
          border: {
            DEFAULT: colors.gray[800],
          },
          ring: {
            DEFAULT: colors.gray[800],
          },
          content: {
            subtle: colors.gray[600],
            DEFAULT: colors.gray[500],
            emphasis: colors.gray[200],
            strong: colors.gray[50],
            inverted: colors.gray[950],
          },
        },
      },
      boxShadow: {
        'tremor-input': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'tremor-card': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'tremor-dropdown': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'dark-tremor-input': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'dark-tremor-card': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'dark-tremor-dropdown': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      },
      borderRadius: {
        'tremor-small': '0.375rem',
        'tremor-default': '0.5rem',
        'tremor-full': '9999px',
      },
      fontSize: {
        'tremor-label': ['0.75rem', { lineHeight: '1rem' }],
        'tremor-default': ['0.875rem', { lineHeight: '1.25rem' }],
        'tremor-title': ['1.125rem', { lineHeight: '1.75rem' }],
        'tremor-metric': ['1.875rem', { lineHeight: '2.25rem' }],
      },
    },
  },
  darkMode: "class",
  plugins: [
    require('tailwind-scrollbar'),
    require('@headlessui/tailwindcss'), 
    require('@tailwindcss/forms'),
  ],
  safelist: [
    {
      pattern: /^(fill|bg|text|border|ring|stroke|hover:bg|hover:border|hover:text|ui-selected:bg|ui-selected:border|ui-selected:text)-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|400|500|600|700|800|900|950)$/,
    },
    ...["#ffcc33"].flatMap((customColor) => [
      `bg-${customColor}`,
      `border-${customColor}`,
      `hover:bg-${customColor}`,
      `hover:border-${customColor}`,
      `hover:text-${customColor}`,
      `fill-${customColor}`,
      `ring-${customColor}`,
      `stroke-${customColor}`,
      `text-${customColor}`,
      `ui-selected:bg-${customColor}`,
      `ui-selected:border-${customColor}`,
      `ui-selected:text-${customColor}`,
    ]),
  ],
};

export default config;
