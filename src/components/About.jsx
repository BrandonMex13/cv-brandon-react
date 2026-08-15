import { Coffee, Mail, MapPin, User } from 'lucide-react'
import { profile } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function About() {
  const facts = [
    { icon: MapPin, label: 'Ubicación', value: profile.location },
    { icon: User, label: 'Perfil', value: 'Desarrollador Web · Arquitecto de Software' },
    { icon: Mail, label: 'Email', value: profile.email },
    { icon: Coffee, label: 'Estado', value: 'Abierto a nuevos retos' }
  ]

  return (
    <section id="sobre-mi" className="bg-white py-24 dark:bg-slate-900 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Sobre mí"
          title="Más allá del código"
          description="Un poco de quién soy y qué hago."
        />

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-2">
          <Reveal className="relative mx-auto w-full max-w-md">
            <div
              className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-20 blur-2xl"
              aria-hidden="true"
            />
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-slate-200 dark:bg-slate-800">
              <img
                src={profile.photo}
                alt={`Foto de ${profile.name}`}
                loading="lazy"
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    'data:image/svg+xml;utf8,' +
                    encodeURIComponent(
                      `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600"><rect width="600" height="600" fill="#e2e8f0"/><text x="300" y="320" font-family="Arial" font-size="32" fill="#64748b" text-anchor="middle">Agrega tu foto</text><text x="300" y="360" font-family="Arial" font-size="18" fill="#94a3b8" text-anchor="middle">public/img/foto.jpg</text></svg>`
                    )
                }}
              />
            </div>
          </Reveal>

          <div>
            <Reveal delay={100}>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {profile.name}
              </h3>
              <p className="mt-1 font-medium text-indigo-600 dark:text-indigo-400">
                {profile.role}
              </p>
            </Reveal>

            <Reveal delay={150}>
              <div className="mt-6 space-y-4 leading-8 text-slate-600 dark:text-slate-300">
                {profile.about.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={200}>
              <dl className="mt-8 grid gap-4 sm:grid-cols-2">
                {facts.map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/60"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-indigo-100 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <dt className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                        {label}
                      </dt>
                      <dd className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                        {value}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}