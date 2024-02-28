/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        Founders : "Founders",
        Founders_semibold : "Founders_semibold",
        Founders_bold : "Founders_bold",
        Founders_regular : "Founders_regular",
        Neue_Montreal : "Neue_Montreal",
        Neue_Montreal_medium : "Neue_Montreal_medium",
        Neue_Montreal_bold : "Neue_Montreal_bold",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

