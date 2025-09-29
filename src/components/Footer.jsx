export default function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-16">
      <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-sm text-slate-500">I&A — Conocimiento, creatividad y excelencia a tu servicio</p>
          <p className="text-xs text-slate-400">© {new Date().getFullYear()} Ingeniería & Arquitectura</p>
        </div>
        <img src="/images/white_logo.png" alt="I&A" className="h-8 w-8" />
      </div>
    </footer>
  )
}
