/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        georgia: ['Georgia', 'serif'],
        'dancing-script': ['Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [],
}
// module.exports = {
//   theme: {
//     extend: {
//       fontFamily: {
//         georgia: ['Georgia', 'serif'],
//       },
//     },
//   },
//   variants: {},
//   plugins: [],
// };

