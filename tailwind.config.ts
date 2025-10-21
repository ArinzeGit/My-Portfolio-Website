import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        homePrimary: "rgb(52, 152, 219)",
        aboutPrimary: "rgb(230, 126, 34)",
        projectsPrimary: "rgb(39, 174, 96)",
        contactMePrimary: "rgb(155, 89, 182)",
        secondary: "rgb(240, 240, 240)",
      },
      fontFamily: {
        roboto: ['Roboto', 'Montserrat', 'sans-serif'],
        montserrat: ['Montserrat', 'Roboto', 'sans-serif'],
      },
      screens: {
        tablet: '730px',
        desktop: '1000px',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
} satisfies Config;
