import data from '../data/projects.json'

export default function Projects() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold text-slate-900">Proyectos</h1>
      <p className="text-slate-600 mt-2">Ejemplos de trabajos en arquitectura, diseño estructural e hidráulico.</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {data.map((p) => (
          <article key={p.id} className="rounded-lg overflow-hidden border border-slate-200 bg-white hover:shadow-sm transition">
            <img src={p.image || '/placeholder.svg'} alt={p.title} className="w-full h-44 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-slate-900">{p.title}</h3>
              <p className="text-sm text-slate-600 mt-1">{p.description}</p>
              <div className="flex flex-wrap gap-2 mt-3 text-xs text-slate-500">
                <span className="px-2 py-0.5 rounded bg-slate-100">{p.category}</span>
                {p.year && <span className="px-2 py-0.5 rounded bg-slate-100">{p.year}</span>}
                {p.location && <span className="px-2 py-0.5 rounded bg-slate-100">{p.location}</span>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
