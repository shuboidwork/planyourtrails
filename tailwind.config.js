/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",

    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        pgreen: "#37b8ab",
        pblue: "#0f1e64",
        oceanblue: "#0066cc",
        offwhite: "#FAF9F6",
      },
    },
    fontFamily: {
      sans: ["sans-serif"],
      roboto: ["Roboto"],
      denton: ["Denton"],
    },
  },

  plugins: [require("flowbite/plugin")],
};
