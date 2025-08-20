import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0B6E8A',
          600: '#0B6E8A',
          700: '#0B3954',
          800: '#0B3954',
          900: '#0B3954',
        },
        secondary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          500: '#1C7C68',
          600: '#1C7C68',
          700: '#134e4a',
          800: '#134e4a',
          900: '#134e4a',
        },
        accent: {
          purple: '#6E6BAA',
          coral: '#F28A8A',
          teal: '#2AB1A0',
        },
        neutral: {
          cream: '#E7E1D6',
          light: '#F3F5F6',
          dark: '#273033',
          black: '#121417',
        },
      },
      fontFamily: {
        'title': ['Cormorant Garamond', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
      fontWeight: {
        'title-medium': '500',
        'title-semibold': '600',
        'body-normal': '400',
        'body-medium': '500',
        'body-semibold': '600',
      },
      backgroundImage: {
        'grad-iridescent': 'linear-gradient(135deg, #0B6E8A, #2AB1A0 40%, #6E6BAA)',
      },
      borderRadius: {
        'card': '12px',
        'button': '999px',
      },
      boxShadow: {
        'card': '0 4px 16px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 8px 24px rgba(0, 0, 0, 0.12)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      maxWidth: {
        '8xl': '1280px',
      },
      gridTemplateColumns: {
        '24': 'repeat(24, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
}
export default config