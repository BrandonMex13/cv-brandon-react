import { Download, Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react'
import { profile } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Contact() {
  const channels = [
    {
      icon: Mail,
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`
    },
    {
      icon: Phone,
      label: 'Teléfono',
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, '')}`
    },
    {
      icon: MapPin,
      label: 'Ubicación',
      value: profile.location,
      href: `https://www.google.com/maps/search/${encodeURIComponent(profile.location)}`
    }
  ]

  return (
    <section
      id="contacto"
      className="bg-white py-24 dark:bg-slate-900 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contacto"
          title="Hablemos de tu proyecto"
          description="¿Buscas un desarrollador para tu equipo o proyecto? Escríbeme."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 p-8 text-white shadow-xl shadow-indigo-600/20">
              <h3 className="text-xl font-bold">Información de contacto</h3>
              <p className="mt-2 text-sm leading-6 text-indigo-100">
                Estoy abierto a oportunidades laborales y proyectos freelance.
                Respondo lo antes posible.
              </p>

              <ul className="mt-8 space-y-4">
                {channels.map(({ icon: Icon, label, value, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group flex items-center gap-4 rounded-xl p-2 transition-colors hover:bg-white/10"
                    >
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-white/15 backdrop-blur-sm">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-xs font-medium uppercase tracking-wide text-indigo-200">
                          {label}
                        </span>
                        <span className="block font-semibold">{value}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <div className="flex items-center gap-3">
                  <a
                    href={profile.socials[0].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="grid h-10 w-10 place-items-center rounded-lg bg-white/15 transition-colors hover:bg-white/25"
                  >
                    <Github className="h-5 w-5" aria-hidden="true" />
                  </a>
                  <a
                    href={profile.socials[1].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="grid h-10 w-10 place-items-center rounded-lg bg-white/15 transition-colors hover:bg-white/25"
                  >
                    <Linkedin className="h-5 w-5" aria-hidden="true" />
                  </a>
                  <a
                    href={profile.cvUrl}
                    download
                    className="ml-auto inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-indigo-700 transition-colors hover:bg-indigo-50"
                  >
                    <Download className="h-4 w-4" aria-hidden="true" />
                    CV en PDF
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form
              action={`mailto:${profile.email}`}
              method="post"
              encType="text/plain"
              className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-700 dark:bg-slate-800/60"
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Envíame un mensaje
              </h3>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                El formulario abre tu cliente de correo con el mensaje listo.
              </p>

              <div className="mt-6 space-y-4">
                <div>
                  <label
                    htmlFor="nombre"
                    className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200"
                  >
                    Nombre
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    placeholder="Tu nombre"
                    className="w-full rounded-md border border-slate-300 bg-white px-4 py-2.5 text-slate-900 placeholder-slate-400 outline-none transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="correo"
                    className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200"
                  >
                    Correo
                  </label>
                  <input
                    id="correo"
                    name="correo"
                    type="email"
                    required
                    placeholder="tu@correo.com"
                    className="w-full rounded-md border border-slate-300 bg-white px-4 py-2.5 text-slate-900 placeholder-slate-400 outline-none transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="mensaje"
                    className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows="5"
                    required
                    placeholder="Cuéntame sobre tu proyecto..."
                    className="w-full resize-none rounded-md border border-slate-300 bg-white px-4 py-2.5 text-slate-900 placeholder-slate-400 outline-none transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-indigo-600 px-6 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-indigo-500"
              >
                <Send className="h-5 w-5" aria-hidden="true" />
                Enviar mensaje
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}