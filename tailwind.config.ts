import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme';
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["selector", 'class'],
  theme: {
    extend: {
      transitionProperty: {
        DEFAULT: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, border-radius',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)'
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)'
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)'
        },
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
      },
      boxShadow: {
        DEFAULT: 'var(--shadow)',
      },
      fontWeight: {
        DEFAULT: 'var(--font-weight)',
      },
      borderWidth: {
        DEFAULT: 'var(--border-width)',
      }
    },
  },
  plugins: [
    addVariablesForColors, 
    require("tailwindcss-animate"),
    ({ addUtilities }: any) => {
      addUtilities({
        ".radius-theme": { borderRadius: 'var(--radius)' },
        ".shadow-theme": { boxShadow: 'var(--shadow)' },
        ".font-weight-theme": { fontWeight: 'var(--font-weight)' },
        ".border-theme": { borderWidth: 'var(--border-width)' },
      });
    }
  ],
};
export default config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

