import { ExternalLink, Folder, Github, ArrowUpRight } from 'lucide-react'
import { projects } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const PLACEHOLDER = (name) =>
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500"><rect width="800" height="500" fill="#eef2ff"/><text x="400" y="240" font-family="Arial" font-size="28" fill="#6366f1" text-anchor="middle" font-weight="bold">${name}</text><text x="400" y="280" font-family="Arial" font-size="16" fill="#94a3b8" text-anchor="middle">public/img/proyectos/…png</text></svg>`
  )

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="bg-white py-24 dark:bg-slate-900 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portafolio"
          title="Proyectos destacados"
          description="Proyectos reales que he construido con Angular, React y tecnologías web."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal
              key={project.name}
              delay={(index % 3) * 100}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800"
                aria-label={`Ver proyecto ${project.name} en vivo`}
              >
                <img
                  src={project.screenshot}
                  alt={`Captura del proyecto ${project.name}`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = PLACEHOLDER(project.name)
                  }}
                />
                <span className="absolute inset-0 grid place-items-center bg-indigo-600/0 opacity-0 transition-all duration-300 group-hover:bg-indigo-600/10 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-2 rounded-md bg-white/90 px-3 py-1.5 text-sm font-semibold text-indigo-700 shadow dark:bg-slate-900/90 dark:text-indigo-300">
                    Ver en vivo
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </span>
                </span>
              </a>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {project.name}
                  </h3>
                  <Folder className="h-5 w-5 shrink-0 text-indigo-500" aria-hidden="true" />
                </div>

                <span className="mt-1 inline-flex w-fit rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-semibold text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300">
                  {project.tech}
                </span>

                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>

                <div className="mt-4 flex items-center gap-3 border-t border-slate-100 pt-4 text-sm dark:border-slate-800">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-indigo-600 transition-colors hover:text-indigo-500 dark:text-indigo-400"
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    Demo
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                    >
                      <Github className="h-4 w-4" aria-hidden="true" />
                      Código
                    </a>
                  )}
                  <span className="ml-auto inline-flex text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}