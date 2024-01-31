/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./content/**/*.{html,js,php}",
      "./public/**/*.{html,js}",
  ],
  theme: {
    colors: {
      "magenta": "#F6095E",
      "blue": "#095EF6",
      "dark-blue": "#043CB0",
      "pale-blue": "#556178",
      "indigo-blue": "#A7C6FC",
      "light-blue": "#EDF4FE",
      "yellow": "#F3F800",
      "grey": "#D9D9D9",
      "light-grey": "#ECECEC",
      "dark-grey": "#807E7E",
      "full-grey": "#F5F5F5",
      "white": "#FFFFFF",
      "black": "#403C3F",
      "dark-black": "#191903",
      "light-black": "#2B2A2A",
      "almost-black": "#403F3F",
      "green": "#93FF8A",
      "dark-green": "#01AE70",
      "light-green": "#EDFEEF",

    },
    fontFamily: {
      text: ['Inter', 'sans-serif'],
      title: ['Sora', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}
