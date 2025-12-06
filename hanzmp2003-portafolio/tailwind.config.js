/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sakura: "#5a6d91",     // azul grisáceo más profundo
        sakuraDark: "#3f4f7a", // azul oscuro más intenso
        cream: "#e1e6ef",      // blanco azulado neutro
        lilac: "#a3b3d1",      // lavanda/azul más oscuro
        bubble: "#c2d1e8",     // azul bubble más profundo
        skyPastel: "#6fa3c0",  // azul pastel más marcado
      },
      boxShadow: {
        kawaii: "0 4px 15px rgba(63, 79, 122, 0.55)",    // sombra azul oscuro
        softpink: "0 2px 10px rgba(95, 115, 158, 0.45)", // sombra azul gris
      },
    },
  },
  plugins: [],
};
