import type { Config } from "tailwindcss";

const PRIMARY = "#588d11";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('/images/hero.webp')",
      },
      textColor: {
        primary: PRIMARY,
      },
      backgroundColor: {
        primary: PRIMARY,
      },
      maxWidth: {
        "8xl": "1920px",
      },
      borderColor: {
        primary: PRIMARY,
      },
    },
  },
  plugins: [],
};
export default config;
