export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F9F4EE",
        bread: "#C28A3D",
        coffee: "#3A2314",
        caramel: "#6E4B2A",
        soft: "#FFFDFB",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}