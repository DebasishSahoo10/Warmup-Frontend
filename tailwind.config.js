/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E5167",
        borderColor: "#7A9AA8",
        errorColor: "#ef4444",
        btnBackground : "#00B2FE"
      },
    },
  },
  plugins: [],
};
