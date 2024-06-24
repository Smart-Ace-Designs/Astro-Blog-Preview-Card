/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        PrimaryYellow: "hsl(47, 88%, 63%)",
        NeutralWhite: "hsl(0, 0%, 100%)",
        NeutralGrey: "hsl(0, 0%, 50%)",
        NeutralBlack: "hsl(0, 0%, 7%)",
      },
      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
      },
    },
  },
  plugins: [],
};
