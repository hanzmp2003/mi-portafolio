export default function Aprendizajes() {
  return (
    <section className="px-6 md:px-24 py-14 fade-up">
      <h2 className="text-4xl text-sakuraDark font-semibold mb-6 drop-shadow">
        Aprendizajes
      </h2>

      <div className="p-6 bg-bubble rounded-2xl shadow-kawaii">
        <p className="text-lg leading-8 text-[#4a4453] mb-6">
          Este proyecto se me hizo algo complicado. Aprender a usar Vite, configurar correctamente el repositorio 
          y publicar en GitHub Pages me llevó un tiempo y varios intentos. 
          También tuve que tener cuidado con la carpeta <code>node_modules</code>, que podía causar problemas si se subía.
          <br /><br />
          A pesar de los tropiezos iniciales, trabajar en este portafolio me ayudó a entender mejor cómo organizar y publicar un proyecto web, 
          y me dejó motivado para seguir aprendiendo.
        </p>

        <div className="flex justify-center">
          <img 
            src="/mi-portafolio/Goku.png" 
            alt="Aprendizaje del proyecto" 
            className="absolute bottom-4 right-4 w-36 opacity-90"
          />
        </div>
      </div>
    </section>
  );
}
