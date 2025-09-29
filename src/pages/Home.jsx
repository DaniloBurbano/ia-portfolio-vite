import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <section className="relative">
        <img src="/images/banner.jpg" alt="Banner" className="w-full h-[440px] md:h-[520px] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/30 to-transparent"></div>
        <div className="absolute inset-0">
          <div className="container h-full flex items-center py-8">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                Conocimiento, <span className="font-extrabold text-brand-700">creatividad</span> y <span className="text-brand-700">excelencia</span> a tu servicio
              </h1>
              <p className="mt-4 text-slate-700">
                Ingeniería & Arquitectura: soluciones funcionales, estéticas y de alto desempeño, con experiencia en la región del Eje Cafetero y en toda Colombia.
              </p>
              <div className="mt-6 flex gap-3">
                <Link to="/servicios" className="inline-flex items-center px-4 py-2 rounded-md bg-brand-600 text-white hover:bg-brand-700">Ver servicios</Link>
                <a href="#portfolio" className="inline-flex items-center px-4 py-2 rounded-md border border-brand-600 text-brand-700 hover:bg-brand-50 hover:text-brand-800">Portafolio</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enfoques */}
      <section className="container py-16">
        <h2 className="text-2xl font-bold text-slate-900">Nuestros enfoques</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <Link to="/servicios" className="group rounded-lg border border-slate-200 overflow-hidden bg-white hover:shadow-sm transition">
            <div className="w-full aspect-[4/3] overflow-hidden flex items-center justify-center">
              <img src="/images/img4.png" alt="Ingeniería Hidráulica" className="max-w-[90%] max-h-[90%] object-contain" />
            </div>
            <div className="p-2 pb-4 text-center">
              <h3 className="font-semibold">Ingeniería Hidráulica</h3>
            </div>
          </Link>
          <Link to="/servicios" className="group rounded-lg border border-slate-200 overflow-hidden bg-white hover:shadow-sm transition">
            <div className="w-full aspect-[4/3] overflow-hidden flex items-center justify-center">
              <img src="/images/img5.png" alt="Arquitectura" className="max-w-[90%] max-h-[90%] object-contain" />
            </div>
            <div className="p-2 pb-4 text-center">
              <h3 className="font-semibold">Arquitectura</h3>
            </div>
          </Link>
          <Link to="/servicios" className="group rounded-lg border border-slate-200 overflow-hidden bg-white hover:shadow-sm transition">
            <div className="w-full aspect-[4/3] overflow-hidden flex items-center justify-center">
              <img src="/images/img6.png" alt="Ingeniería Estructural" className="max-w-[90%] max-h-[90%] object-contain" />
            </div>
            <div className="p-2 pb-4 text-center">
              <h3 className="font-semibold">Ingeniería Estructural</h3>
            </div>
          </Link>
        </div>
      </section>

      {/* Nosotros */}
      <section className="container py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Nosotros</h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Ingeniería & Arquitectura es un equipo de dos profesionales independientes con un enfoque integral para el desarrollo de proyectos en arquitectura, ingeniería estructural, ingeniería hidráulica e hidrológica. Nos dedicamos a convertir sus ideas en realidad, ofreciendo soluciones que no solo son funcionales y estéticas, sino que también garantizan superar sus expectativas.
          </p>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Hemos desarrollado nuestra experiencia principalmente en la ciudad de Manizales y en el área del Eje Cafetero, lo que nos ha permitido comprender las particularidades de la región. No obstante, estamos dispuestas a desarrollar proyectos en toda Colombia, llevando nuestra dedicación y conocimiento a cada rincón del país.
          </p>
        </div>
        <div className="flex justify-center">
          <img src="/images/img7.png" alt="Nosotros" className="rounded-lg shadow w-full max-w-sm md:max-w-md lg:max-w-lg" />
        </div>
      </section>

      {/* Portafolio */}
      <section id="portfolio" className="bg-slate-50">
        <div className="container py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Portafolio</h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Hemos trabajado en una variedad de proyectos, demostrando nuestra experiencia en arquitectura, diseño estructural y diseños hidráulicos. Viviendas, levantamientos y diagnósticos, mobiliario, viaductos, estructuras de alivio y estaciones de bombeo, plantas de tratamiento, proyectos de drenaje y sistemas contra incendio, entre otros.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a className="inline-flex items-center px-4 py-2 rounded-md bg-brand-600 text-white hover:bg-brand-700" href="https://drive.google.com/file/d/1Tcgly7VAjuATIPvSJRK32l2Q09Qcny6N/view?usp=sharing" target="_blank" rel="noreferrer">Ver portafolio</a>
              <Link to="/proyectos" className="text-brand-700 hover:underline">Ver proyectos</Link>
            </div>
          </div>
          <div className="flex justify-center">
            <img src="/images/logo_text.png" alt="I&A" className="w-64" />
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="container py-16">
        <h2 className="text-2xl font-bold text-slate-900">Nuestro Equipo</h2>
        <div className="grid md:grid-cols-2 gap-10 mt-6">
          <div>
            <h3 className="text-lg font-semibold">Evelyn Esperanza Burbano Argoty</h3>
            <p className="text-slate-700">Ingeniera Civil</p>
            <p className="text-slate-700">Especialista en Estructuras</p>
            <p className="text-slate-700">Magíster en Ingeniería - Recursos Hidráulicos</p>
            <p className="text-slate-700">Universidad Nacional de Colombia</p>
            <p className="mt-3 text-slate-700 leading-relaxed">
              Experiencia en diseño, coordinación y consultoría en proyectos de Ingeniería civil de gran envergadura, que han comprendido diseños Hidráulicos, Hidrológicos y Estructurales. Además, con una amplia trayectoria en diseños hidráulicos y de redes contra incendios, para proyectos públicos y privados.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Daniela Correa Merchán</h3>
            <p className="text-slate-700">Arquitecta</p>
            <p className="text-slate-700">Magíster en Arquitectura</p>
            <p className="text-slate-700">Universidad Nacional de Colombia</p>
            <p className="mt-3 text-slate-700 leading-relaxed">
              Experiencia en el diseño arquitectónico de viviendas unifamiliares, bifamiliares y multifamiliares, así como en proyectos de interiorismo y diseño de mobiliario. Además, con trayectoria en proyectos institucionales, comerciales, urbanos y de espacios públicos a diversas escalas.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
