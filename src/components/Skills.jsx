import { skills, skillLevels } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const levelColors = {
  Avanzado: 'bg-emerald-500',
  Intermedio: 'bg-indigo-500',
  Básico: 'bg-amber-500'
}

export default function Skills() {
  return (
    <section
      id="habilidades"
      className="bg-slate-50 py-24 dark:bg-slate-950 sm:py-32"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Stack"
          title="Habilidades"
          description="Tecnologías con las que construyo, con su nivel de dominio."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, groupIndex) => (
            <Reveal
              key={group.category}
              delay={groupIndex * 100}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {group.category}
              </h3>
              <ul className="mt-5 space-y-4">
                {group.items.map((skill) => {
                  const value = skillLevels[skill.level] ?? 50
                  return (
                    <li key={skill.name}>
                      <div className="mb-1.5 flex items-center justify-between text-sm">
                        <span className="font-semibold text-slate-700 dark:text-slate-200">
                          {skill.name}
                        </span>
                        <span className="font-medium text-slate-500 dark:text-slate-400">
                          {skill.level}
                        </span>
                      </div>
                      <div
                        className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700"
                        role="progressbar"
                        aria-valuenow={value}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        aria-label={`Nivel de ${skill.name}: ${skill.level}`}
                      >
                        <div
                          className={`h-full rounded-full ${levelColors[skill.level] ?? 'bg-indigo-500'}`}
                          style={{ width: `${value}%` }}
                        />
                      </div>
                    </li>
                  )
                })}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}