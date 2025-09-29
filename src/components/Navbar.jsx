import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkBase = 'text-sm font-medium transition-colors duration-150'
  const linkInactive = 'text-slate-600 hover:text-slate-900'
  const linkActive = 'text-brand-700'

  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <img src="/images/simple_logo.png" alt="I&A" className="h-8 w-8"/>
          <span className="text-slate-900 font-semibold">Ingeniería & Arquitectura</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" end className={({isActive}) => `${linkBase} ${isActive? linkActive: linkInactive}`}>Inicio</NavLink>
          <NavLink to="/servicios" className={({isActive}) => `${linkBase} ${isActive? linkActive: linkInactive}`}>Servicios</NavLink>
          <NavLink to="/proyectos" className={({isActive}) => `${linkBase} ${isActive? linkActive: linkInactive}`}>Proyectos</NavLink>
          <NavLink to="/contacto" className={({isActive}) => `${linkBase} ${isActive? linkActive: linkInactive}`}>Contacto</NavLink>
        </nav>

        <button
          className="md:hidden p-2 rounded hover:bg-slate-100"
          onClick={() => setOpen(v => !v)}
          aria-label="Abrir menú"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M3.75 5.25a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 6.75c0-.414.336-.75.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm.75 6a.75.75 0 000 1.5h15a.75.75 0 000-1.5h-15z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <nav className="container py-2 flex flex-col gap-1">
            <NavLink to="/" end onClick={() => setOpen(false)} className={({isActive}) => `${linkBase} px-2 py-2 rounded ${isActive? 'bg-brand-50 text-brand-700' : linkInactive}`}>Inicio</NavLink>
            <NavLink to="/servicios" onClick={() => setOpen(false)} className={({isActive}) => `${linkBase} px-2 py-2 rounded ${isActive? 'bg-brand-50 text-brand-700' : linkInactive}`}>Servicios</NavLink>
            <NavLink to="/proyectos" onClick={() => setOpen(false)} className={({isActive}) => `${linkBase} px-2 py-2 rounded ${isActive? 'bg-brand-50 text-brand-700' : linkInactive}`}>Proyectos</NavLink>
            <NavLink to="/contacto" onClick={() => setOpen(false)} className={({isActive}) => `${linkBase} px-2 py-2 rounded ${isActive? 'bg-brand-50 text-brand-700' : linkInactive}`}>Contacto</NavLink>
          </nav>
        </div>
      )}
    </header>
  )
}
