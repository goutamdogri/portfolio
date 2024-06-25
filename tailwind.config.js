/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "page-light": "#E6F1FF",
        "page-dark": "#BBC7E2",
        "grad-light": "#B7C5DF",
        "grad-dark": "#343458",
        "btn-light": "#7676C2",
        "btn-dark": "#38385C",
      },
      spacing: {
        'custom-height': 'calc(w-5/12 + (w-5/12 / 11)px)'
      }
    },
    fontFamily: {
      normalText: ["Roboto", "sans-serif"],
      logoText: ['"Playwrite NG Modern"', "cursive"],
    },
  },
};
