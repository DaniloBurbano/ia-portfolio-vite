export default function Services() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold text-slate-900">Servicios</h1>

      {/* Ingeniería Hidráulica */}
      <h2 className="mt-10 text-2xl font-semibold">Ingeniería Hidráulica</h2>
      <div className="mt-4 grid md:grid-cols-2 gap-8 items-start">
        <div>
          <img className="rounded-lg w-full object-cover" src="/images/img8.png" alt="Ingeniería Hidráulica" />
        </div>
        <ul className="list-disc ml-5 text-slate-700 space-y-2">
          <li>Diseño de redes hidráulicas de acueducto y alcantarillado</li>
          <li>Diseño de redes hidrosanitarias</li>
          <li>Diseño de redes contra incendio</li>
          <li>Diseño hidráulico de piscinas y jacuzzis</li>
          <li>Proyectos de drenaje vial y estructuras hidráulicas</li>
          <li>Estudios hidrológicos y de gestión del agua</li>
        </ul>
      </div>

      {/* Arquitectura (disposición responsive) */}
      {/* Versión móvil: imagen a la izquierda, texto a la derecha (stack) */}
      <h2 className="mt-14 text-2xl font-semibold">Arquitectura</h2>
      <div className="md:hidden mt-4 grid grid-cols-1 gap-8 items-start">
        <div>
          <img className="rounded-lg w-full object-cover" src="/images/img9.jpg" alt="Arquitectura" />
        </div>
        <ul className="list-disc ml-5 text-slate-700 space-y-2">
          <li>Diseño arquitectónico</li>
          <li>Remodelaciones y ampliaciones</li>
          <li>Diseño de interiores</li>
          <li>Diseño de mobiliario</li>
          <li>Espacio público y urbanismo</li>
          <li>Levantamientos y diagnósticos</li>
        </ul>
      </div>

      {/* Versión desktop: texto a la izquierda, imagen a la derecha */}
      <div className="hidden md:grid mt-4 md:grid-cols-2 gap-8 items-start">
        <ul className="list-disc ml-5 text-slate-700 space-y-2">
          <li>Diseño arquitectónico</li>
          <li>Remodelaciones y ampliaciones</li>
          <li>Diseño de interiores</li>
          <li>Diseño de mobiliario</li>
          <li>Espacio público y urbanismo</li>
          <li>Levantamientos y diagnósticos</li>
        </ul>
        <div>
          <img className="rounded-lg w-full object-cover" src="/images/img9.jpg" alt="Arquitectura" />
        </div>
      </div>

      {/* Ingeniería Estructural */}
      <h2 className="mt-14 text-2xl font-semibold">Ingeniería Estructural</h2>
      <div className="mt-4 grid md:grid-cols-2 gap-8 items-start">
        <div>
          <img className="rounded-lg w-full object-cover" src="/images/img10.png" alt="Ingeniería Estructural" />
        </div>
        <ul className="list-disc ml-5 text-slate-700 space-y-2">
          <li>Diseño y análisis estructural</li>
          <li>Cálculo y dimensionamiento de estructuras</li>
          <li>Proyectos de refuerzo y rehabilitación</li>
        </ul>
      </div>
    </div>
  )
}
