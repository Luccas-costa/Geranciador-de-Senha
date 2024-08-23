import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        screen01: "1900px",
        screen02: "1800px",
        screen03: "1700px",
        screen04: "1600px",
        screen05: "1500px",
        screen06: "1400px",
        screen07: "1300px",
        screen08: "1200px",
        screen09: "1100px",
        screen10: "1000px",
        screen11: "900px",
        screen12: "800px",
        screen13: "700px",
        screen14: "600px",
        screen15: "500px",
        screen16: "450px",
        screen17: "400px",
        screen18: "350px",
        screen19: "300px",
      },
    },
  },
  plugins: [],
};
export default config;
