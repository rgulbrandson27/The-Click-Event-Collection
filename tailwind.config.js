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
    "border-t-fuchsia-500", 
    "border-t-emerald-600",
    "border-t-green-500",
    "border-t-gray-400",
    "border-b-cyan-600",
    "border-b-blue-600",
    "border-b-orange-500",
    "border-b-amber-400",
    "border-b-teal-400",
    "border-b-pink-500",
    "border-b-violet-600",
    "border-b-fuchsia-500", 
    "border-b-emerald-600",
    "border-b-green-500",
    "border-b-gray-400",
    "border-l-cyan-600",
    "border-l-blue-600",
    "border-l-orange-500",
    "border-l-amber-400",
    "border-l-teal-400",
    "border-l-pink-500",
    "border-l-violet-600",
    "border-l-fuchsia-500", 
    "border-l-emerald-600",
    "border-l-gray-400",
    "border-l-green-500",
    "shadow-cyan-600",
    "shadow-blue-600",
    "shadow-orange-500",
    "shadow-amber-400",
    "shadow-teal-400",
    "shadow-pink-500",
    "shadow-violet-600",
    "shadow-fuchsia-500", 
    "shadow-emerald-600",
    "shadow-green-500",
    "shadow-gray-400",

  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
}



