/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgba(0, 105, 137, 1)",
        warning: "rgba(249, 58, 83, 1)",
        success: "rgba(0, 205, 157, 1)",
        white: "rgba(255, 255, 255, 1)",
        active: "rgba(131, 255, 220, 1)",
        yellow: {
          100: "rgba(255, 247, 174, 1)",
          200: "rgba(255, 222, 123, 1)",
          300: "rgba(255, 194, 59, 1)",
          400: "rgba(255, 146, 0, 1)",
        },
        blue: {
          100: "rgba(179, 217, 255, 1)",
          200: "rgba(121, 197, 252, 1)",
          300: "rgba(86, 178, 246, 1)",
          400: "rgba(43, 156, 239, 1)",
        },
        red: {
          100: "rgba(252, 192, 180, 1)",
          200: "rgba(255, 172, 149, 1)",
          300: "rgba(251, 132, 100, 1)",
          400: "rgba(231, 80, 39, 1)",
        },
        green: {
          100: "rgba(202, 246, 126, 1)",
          200: "rgba(186, 234, 105, 1)",
          300: "rgba(161, 213, 72, 1)",
          400: "rgba(121, 191, 0, 1)",
        },
        gray: {
          100: "rgba(219, 223, 224, 1)",
          200: "rgba(175, 183, 185, 1)",
          300: "rgba(145, 154, 156, 1)",
          400: "rgba(107, 115, 117, 1)",
        },
        "modal-overlay": "rgba(15, 42, 48, 0.9)",
      },
    },
    backgroundImage: {
      "yellow-grad-light": "linear-gradient(180deg, #FFFAD4 0%, #FFF7AE 100%)",
      "yellow-grad-dark": "linear-gradient(180deg, #FFF7AE 0%, #FF9200 100%)",
      "blue-grad-light": "linear-gradient(180deg, #CCE6FF 0%, #B3D9FF 100%)",
      "blue-grad-dark": "linear-gradient(180deg, #B3D9FF 0%, #2B9CEF 100%)",
      "red-grad-light": "linear-gradient(180deg, #FFD5CC 0%, #FCC0B4 100%)",
      "red-grad-dark": "linear-gradient(180deg, #FCC0B4 0%, #E75027 100%)",
      "green-grad-light": "linear-gradient(180deg, #E4FFB5 0%, #CAF67E 100%)",
      "green-grad-dark": "linear-gradient(180deg, #CAF67E 0%, #79BF00 100%)",
      "gray-grad-light": "linear-gradient(180deg, #FFFFFF 0%, #DBDFE0 100%)",
      "gray-grad-dark": "linear-gradient(180deg, #AFB7B9 0%, #6B7375 100%)"
    },
    boxShadow: {
      org: "0px 4px 0px 0px rgba(255, 146, 0, 1)",
      blue: "0px 20px 0px 0px rgba(39, 184, 224, 1)",
      gray: "0px 4px 0px 0px rgba(145, 154, 156, 1)"

    }
  },
  plugins: [],
}