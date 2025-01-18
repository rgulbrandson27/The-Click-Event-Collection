/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],

  safelist: [
    "border-t-cyan-600",
    "border-t-blue-600",
    "border-t-orange-500",
    "border-t-amber-400",
    "border-t-teal-400",
    "border-t-pink-500",
    "border-t-violet-600",
    "border-t-fuchsia-500", // Corrected typo
    "border-t-emerald-600",
    "border-t-gray-400",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}



