/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primaryYellow: "hsl(47, 88%, 63%)",
        neutralWhite: "hsl(0, 0%, 100%)",
        neutralGrey: "hsl(0, 0%, 50%)",
        neutralBlack: "hsl(0, 0%, 7%)",
      },
      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
      },
    },
  },
  plugins: [],
};
