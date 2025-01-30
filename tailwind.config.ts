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
        homeSecondary: "#F3F4F6",
      },
      fontFamily: {
        roboto: ['Roboto', 'Montserrat', 'sans-serif'],
        montserrat: ['Montserrat', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
