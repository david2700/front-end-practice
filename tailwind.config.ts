import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0)' }, // Start and end at the same position
          '50%': { transform: 'translate(5px, -5px)' }, // Move slightly right and up
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite', // Infinite, smooth floating animation
      },
    },
  },
  plugins: [],
};
export default config;
