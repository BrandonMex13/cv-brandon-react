import { useState } from 'react'
import { Download, Menu, Moon, Sun, X, Code2 } from 'lucide-react'
import { navLinks, profile } from '../data/portfolio'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { useTheme } from '../hooks/useTheme'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { dark, toggle } = useTheme()
  const active = useScrollSpy(navLinks.map((l) => l.href.slice(1)))

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-950/80 border-b border-slate-200/60 dark:border-slate-800/60">
      <nav
        aria-label="Global"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <a
          href="#inicio"
          className="flex items-center gap-2 font-bold text-slate-900 dark:text-white"
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-indigo-600 text-white">
            <Code2 className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="hidden sm:inline">
            Brandon<span className="text-indigo-600 dark:text-indigo-400">.dev</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={active === link.href.slice(1) ? 'true' : undefined}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                active === link.href.slice(1)
                  ? 'text-indigo-600 dark:text-indigo-400'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            aria-label={dark ? 'Activar modo claro' : 'Activar modo oscuro'}
            className="grid h-9 w-9 place-items-center rounded-md text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            {dark ? (
              <Sun className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Moon className="h-5 w-5" aria-hidden="true" />
            )}
          </button>

          <a
            href={profile.cvUrl}
            download
            className="hidden items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-500 sm:inline-flex"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Descargar CV
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-md text-slate-700 dark:text-slate-200 lg:hidden"
          >
            {open ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-950 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block rounded-md px-3 py-2.5 text-sm font-medium ${
                active === link.href.slice(1)
                  ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400'
                  : 'text-slate-700 dark:text-slate-200'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.cvUrl}
            download
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Descargar CV
          </a>
        </div>
      )}
    </header>
  )
}