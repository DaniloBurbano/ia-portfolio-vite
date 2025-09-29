import { useRef, useState } from 'react'

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus({ state: 'loading', message: '' })
    try {
      const [{ default: emailjs }] = await Promise.all([
        import('@emailjs/browser')
      ])

      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('Faltan variables de entorno de EmailJS (VITE_EMAILJS_*)')
      }

      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey,
      })
      setStatus({ state: 'success', message: '¡Mensaje enviado! Te responderemos pronto.' })
      formRef.current?.reset()
    } catch (err) {
      setStatus({ state: 'error', message: err?.message || 'No se pudo enviar el mensaje.' })
    }
  }

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold text-slate-900">Contáctanos</h1>
      <p className="text-slate-600 mt-2">Escríbenos y estaremos felices de responderte.</p>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div className="space-y-3">
          <p className="text-slate-700 flex items-center gap-2">
            {/* Mail icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-brand-700" aria-hidden="true">
              <path d="M1.5 8.67v8.58A2.25 2.25 0 003.75 19.5h16.5a2.25 2.25 0 002.25-2.25V8.67l-8.78 5.49a3.75 3.75 0 01-4 0L1.5 8.67z"/>
              <path d="M22.5 6.908V6.75A2.25 2.25 0 0020.25 4.5H3.75A2.25 2.25 0 001.5 6.75v.158l9.37 5.86a2.25 2.25 0 002.26 0l9.37-5.86z"/>
            </svg>
            <a href="mailto:eeburbanoa7@gmail.com" className="hover:underline underline-offset-2">eeburbanoa7@gmail.com</a>
          </p>
          <p className="text-slate-700 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-brand-700" aria-hidden="true">
              <path d="M1.5 8.67v8.58A2.25 2.25 0 003.75 19.5h16.5a2.25 2.25 0 002.25-2.25V8.67l-8.78 5.49a3.75 3.75 0 01-4 0L1.5 8.67z"/>
              <path d="M22.5 6.908V6.75A2.25 2.25 0 0020.25 4.5H3.75A2.25 2.25 0 001.5 6.75v.158l9.37 5.86a2.25 2.25 0 002.26 0l9.37-5.86z"/>
            </svg>
            <a href="mailto:dcorream5@gmail.com" className="hover:underline underline-offset-2">dcorream5@gmail.com</a>
          </p>
          <p className="text-slate-700 flex items-center gap-2">
            {/* WhatsApp icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-600" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 00-8.395 14.85L2.25 21.75l4.65-1.355A9.75 9.75 0 1012 2.25zm-6 9.75a6 6 0 1110.17 3.938.75.75 0 00-.163.254l-.66 1.807a.75.75 0 01-.93.46l-1.844-.553a.75.75 0 00-.497.025A6 6 0 016 12z" clipRule="evenodd"/>
            </svg>
            <a href="https://wa.me/573157078762?text=Hola%20Ingenier%C3%ADa%20%26%20Arquitectura%2C%20quisiera%20informaci%C3%B3n%20sobre%20sus%20servicios." target="_blank" rel="noreferrer" className="hover:underline underline-offset-2">+57 3157078762</a>
          </p>
          <p className="text-slate-700 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-600" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 00-8.395 14.85L2.25 21.75l4.65-1.355A9.75 9.75 0 1012 2.25zm-6 9.75a6 6 0 1110.17 3.938.75.75 0 00-.163.254l-.66 1.807a.75.75 0 01-.93.46l-1.844-.553a.75.75 0 00-.497.025A6 6 0 016 12z" clipRule="evenodd"/>
            </svg>
            <a href="https://wa.me/573127360053?text=Hola%20Ingenier%C3%ADa%20%26%20Arquitectura%2C%20quisiera%20informaci%C3%B3n%20sobre%20sus%20servicios." target="_blank" rel="noreferrer" className="hover:underline underline-offset-2">+57 3127360053</a>
          </p>
          <p className="text-slate-500">Manizales, Colombia</p>
        </div>
        <div className="rounded-lg border border-slate-200 p-6">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Nombre</label>
              <input name="from_name" type="text" required className="mt-1 w-full rounded-md border-slate-300 focus:border-brand-500 focus:ring-brand-500" placeholder="Tu nombre" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Correo electrónico</label>
              <input name="reply_to" type="email" required className="mt-1 w-full rounded-md border-slate-300 focus:border-brand-500 focus:ring-brand-500" placeholder="tu@email.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Mensaje</label>
              <textarea name="message" rows="5" required className="mt-1 w-full rounded-md border-slate-300 focus:border-brand-500 focus:ring-brand-500" placeholder="Cuéntanos sobre tu proyecto" />
            </div>

            <button type="submit" disabled={status.state === 'loading'} className="inline-flex items-center px-4 py-2 rounded-md bg-brand-600 text-white hover:bg-brand-700 disabled:opacity-60">
              {status.state === 'loading' ? 'Enviando…' : 'Enviar mensaje'}
            </button>

            {status.state === 'success' && (
              <p className="text-sm text-green-700">{status.message}</p>
            )}
            {status.state === 'error' && (
              <p className="text-sm text-red-700">{status.message}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}
