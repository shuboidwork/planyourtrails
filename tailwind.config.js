/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/*.css",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",

    "./node_modules/flowbite/**/*.js",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        pgreen: "#37b8ab",
        pblue: "#0f1e64",
        oceanblue: "#0857a0",
        offwhite: "#FAF9F6",
        oceanbluelight: "#ecfbff",
        obtext: "#0a3561",
      },
    },
    fontFamily: {
      sans: ["sans-serif"],
      roboto: ["Roboto"],
      denton: ["Denton"],
      sanchez: "var(--font-sanchez)",
      merriweather: "var(--font-merriweather)",
      abril: "var(--font-abril)",
    },
  },

  plugins: [
    require("flowbite/plugin"),
    require("tw-elements-react/dist/plugin.cjs"),
    require("@tailwindcss/forms"),
  ],
};
