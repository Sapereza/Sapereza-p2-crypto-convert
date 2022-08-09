/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./index.html"],
  theme: {
    extend: {
      colors: {
        switch: '#1070E0',
        sectionBg: '#F8F8F8',
        titleArea: '#F9FBFE',
        bodyBg: '#FFFFFF',
      }
    },
  },
  plugins: [],
}
