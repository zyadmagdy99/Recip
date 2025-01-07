import type { Config } from "tailwindcss";

const config: Config = {
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
      },
      animation: {
        slowspin: 'spin 10s linear infinite',  // 3 seconds per rotation
        fastspin: 'spin 500ms linear infinite', // Faster spin
      },
    },
  },
  plugins: [],
};
export default config;
