/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body:['Poppins'],
        curly:['Cinzel']
      },
      visibility: ["group-hover"]
    },
  },
  plugins: [],
}
