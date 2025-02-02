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
        background: "var(--background)",
        foreground: "var(--foreground)",
        homePrimary: "#3498DB",
        aboutPrimary: "#E67E22",
        projectsPrimary: "#27AE60",
        contactMePrimary: "#9B59B6",
        secondary: "#F0F0F0",
      },
      fontFamily: {
        roboto: ['Roboto', 'Montserrat', 'sans-serif'],
        montserrat: ['Montserrat', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
} satisfies Config;
