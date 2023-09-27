import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Main: "var(--Main)",
        Secondary: "var(--Secondary)",
        Another: "var(--Another)",
        Text: "var(--Text)",
      },
    },
  },
  plugins: [],
};
export default config;
