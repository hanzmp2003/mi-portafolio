export default function Header() {
  return (
    <header className="text-center py-20 relative overflow-hidden fade-in shadow-kawaii">
     
      {/* Imagen de fondo */}
      <img
        src="/mi-portafolio/portada.jpeg"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      {/* Contenido */}
      <div className="relative z-10">
        <img
          src="/mi-portafolio/avatar.jpeg"
          className="w-40 h-40 rounded-full mx-auto border-4 border-white shadow-softpink"
        />

        <h1 className="text-5xl font-bold mt-4 tracking-wide drop-shadow" style={{ color: "#a7c0e4ff" }}>
          Hanz Madrigal Porras
        </h1>

        <p className="text-lg mt-2 font-semibold" style={{ color: "#a7c0e4ff" }}>
          Estudiante de Ingeniería en Computación - UCR
        </p>
      </div>
    </header>
  );
}