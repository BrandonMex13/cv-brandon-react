import { Briefcase, Building2, CalendarDays, CheckCircle2 } from 'lucide-react'
import { experience } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section
      id="experiencia"
      className="bg-slate-50 py-24 dark:bg-slate-950 sm:py-32"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Trayectoria"
          title="Experiencia laboral"
          description="Puestos y logros que demuestran mi impacto en cada proyecto."
        />

        <ol className="relative mt-14 space-y-10 border-l-2 border-indigo-200 pl-8 dark:border-indigo-900">
          {experience.map((job, index) => (
            <li key={`${job.role}-${index}`} className="relative">
              <span
                className="absolute -left-[41px] grid h-5 w-5 place-items-center rounded-full border-4 border-indigo-600 bg-white dark:bg-slate-950"
                aria-hidden="true"
              />
              <Reveal>
                <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
                        <Briefcase className="h-5 w-5 text-indigo-500" aria-hidden="true" />
                        {job.role}
                      </h3>
                      <p className="mt-1 flex items-center gap-2 font-medium text-slate-600 dark:text-slate-300">
                        <Building2 className="h-4 w-4 text-slate-400" aria-hidden="true" />
                        {job.company}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300">
                      <CalendarDays className="h-4 w-4" aria-hidden="true" />
                      {job.period}
                    </span>
                  </div>

                  <p className="mt-4 text-slate-600 dark:text-slate-300">{job.summary}</p>

                  <ul className="mt-4 space-y-2">
                    {job.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                      >
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500"
                          aria-hidden="true"
                        />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}