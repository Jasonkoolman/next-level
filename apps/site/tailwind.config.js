const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { fontFamily } = require('tailwindcss/defaultTheme');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, '{app,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    darkMode: 'class',
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
