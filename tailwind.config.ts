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
      colors: {
        _FEC432: '#FEC432',
        _514321: '#514321',
        _E6E6E6: '#E6E6E6',
        _F2890F: '#F2890F',
        _A6A6A6: '#A6A6A6',
        _FFFFFF: '#FFFFFF',
        _535353: '#535353',
        _615E5C: '#615E5C',
        _D9D9D9: '#D9D9D9',
        _B8B8B8: '#B8B8B8',
        _rgba21721721701: 'rgba(217, 217, 217, 0.1)',
      }
    },
  },
  plugins: [],
};
export default config;
