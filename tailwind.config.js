// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media'
  theme: {
    extend: {
      colors: {
        textLight: "#cccccc",
        textLightSecondary: "#999999",
        textDark: "#111111",
        bgLight: "#cccccc",
        bgDark: "#000000",
        bgDarkSecondary: "#111111",
        bgDarkTertiary: "#404040",
      },
      animation: {
        "shadow-pulse": "pulseShadow 5s infinite", // Animation name for border pulse
        "bounce-limited": "pulse 3s ease-in-out 2,pulseShadow 10s infinite ",
      },
      keyframes: {
        pulseShadow: {
          "0%": {
            // boxShadow: `1px 1px 2px rgba(255,244,244)`,
            background: "#111111",
          },

          "50%": {
            // boxShadow: `1px 1px 2px rgba(255,244,0)`,
            background: "#212121",
          },

          "100%": {
            // boxShadow: `1px 1px 2px rgba(0,244,244)`,
            background: "#111111",
          },
        },
      },
    },
  },
  plugins: [],
};
