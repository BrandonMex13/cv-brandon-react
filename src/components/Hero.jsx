import { Download, ArrowRight, Github, Linkedin, MapPin, BadgeCheck } from 'lucide-react'
import { profile } from '../data/portfolio'

const heroTech = ['Angular', 'React', 'Node.js', 'TypeScript', 'Java']

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-slate-50 pt-32 pb-24 dark:bg-slate-950 sm:pt-40 sm:pb-32"
    >
      <div
        className="absolute inset-x-0 top-0 -z-10 h-full bg-grid mask-fade-b opacity-60 dark:opacity-40"
        aria-hidden="true"
      />
      <div
        className="absolute -top-40 -z-10 left-1/2 h-80 w-[36.125rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 -z-10 -right-10 sm:right-0 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl dark:bg-indigo-500/10"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700 dark:border-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300">
            <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            Disponible para nuevos proyectos
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl">
            ¡Hola! Soy{' '}
            <span className="text-gradient">{profile.name}</span>
          </h1>

          <p className="mt-4 text-lg font-semibold text-indigo-600 dark:text-indigo-400 sm:text-xl">
            {profile.role} · {profile.headline}
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
            Creo soluciones web escalables y eficientes con Angular, React y
            TypeScript, combinando arquitectura sólida con interfaces que
            resuelven problemas reales de negocio.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={profile.cvUrl}
              download
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm shadow-indigo-600/30 transition-all hover:bg-indigo-500 hover:shadow-glow sm:w-auto"
            >
              <Download className="h-5 w-5" aria-hidden="true" />
              Descargar CV
            </a>
            <a
              href="#proyectos"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 sm:w-auto"
            >
              Ver proyectos
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {heroTech.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-1.5 rounded-full bg-slate-200/70 px-3 py-1 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
              >
                <BadgeCheck className="h-4 w-4 text-indigo-500" aria-hidden="true" />
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-4 text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-1.5 text-sm">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {profile.location}
            </span>
            <span className="h-4 w-px bg-slate-300 dark:bg-slate-700" aria-hidden="true" />
            <a
              href={profile.socials[0].href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center gap-1.5 text-sm transition-colors hover:text-slate-900 dark:hover:text-white"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
            <a
              href={profile.socials[1].href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center gap-1.5 text-sm transition-colors hover:text-slate-900 dark:hover:text-white"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}