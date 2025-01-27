/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "theme-yellow": "hsl(47, 88%, 63%)",
        "theme-white": "hsl(0, 0%, 100%)",
        "theme-gray": "hsl(0, 0%, 50%)",
        "theme-black": "hsl(0, 0%, 7%)",
      },
      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
      },
    },
  },
  plugins: [],
};
