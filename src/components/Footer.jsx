import { Code2, Github, Heart, Linkedin } from 'lucide-react'
import { navLinks, profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10 dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 sm:px-6 lg:flex-row lg:justify-between lg:px-8">
        <a href="#inicio" className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-indigo-600 text-white">
            <Code2 className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="text-sm">
            Brandon<span className="text-indigo-600 dark:text-indigo-400">.dev</span>
          </span>
        </a>

        <nav aria-label="Pie de página" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={profile.socials[0].href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid h-9 w-9 place-items-center rounded-md text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            <Github className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href={profile.socials[1].href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid h-9 w-9 place-items-center rounded-md text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            <Linkedin className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>

      <p className="mt-8 flex items-center justify-center gap-1.5 text-center text-sm text-slate-400 dark:text-slate-500">
        Hecho con <Heart className="h-4 w-4 fill-current text-rose-500" aria-hidden="true" />
        usando React, Vite y Tailwind CSS
      </p>
    </footer>
  )
}