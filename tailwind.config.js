/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "todo-purple": "#8284FA",
        "todo-purple-dark": "#5E60CE",

        "todo-blue": "#4EA8DE",
        "todo-blue-dark": "#1E6F9F",

        "todo-gray-700": "#0D0D0D",
        "todo-gray-600": "#1A1A1A",
        "todo-gray-500": "#262626",
        "todo-gray-400": "#333333",
        "todo-gray-300": "#808080",
        "todo-gray-200": "#D9D9D9",
        "todo-gray-100": "#F2F2F2",

        "todo-danger": "#E25858",
      },

      fontFamily: {
        inter: "'Inter', sans-serif",
      },
    },
  },
  plugins: [],
};
