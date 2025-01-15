/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#32abbf",
          deep: "#0f9ab1",
          dark: "#312e81",
        },
        secondary: {
          light: "#99dde9",
        },
      },
    },
  },
  plugins: [],
};
