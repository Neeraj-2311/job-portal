import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        worksans: ['"Work Sans"', 'sans-serif'],
      },
      colors: {
        primary: "#76FF7A",
        "primary-dark": "#4fd35c",
        "background-light": "#f0fff4",
      },
    },
  },
  darkMode: "class",
  plugins: [],
}

export default config;
