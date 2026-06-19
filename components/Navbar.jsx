'use client'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Publications', href: '#publications' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md border-b border-gray-200 dark:border-[#222] transition-colors">
      <nav className="max-w-5xl mx-auto px-[5%] py-4 flex justify-between items-center">
        <a href="#" className="font-bold text-[1.05rem] tracking-tight text-gray-900 dark:text-gray-100">
          Abhishek HS
        </a>

        <div className="flex items-center gap-5">
          <ul className="hidden md:flex items-center gap-6 list-none">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-xs border border-gray-200 dark:border-[#333] text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-[#1a1a1a] px-3 py-1.5 rounded-md transition-all"
            >
              {theme === 'dark' ? 'Light mode' : 'Dark mode'}
            </button>
          )}

          <button
            className="md:hidden text-gray-700 dark:text-gray-300 text-xl leading-none"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-gray-200 dark:border-[#222] bg-white/95 dark:bg-[#0a0a0a]/95 px-[5%] py-5 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          {mounted && (
            <button
              onClick={() => { setTheme(theme === 'dark' ? 'light' : 'dark'); setOpen(false) }}
              className="text-xs border border-gray-200 dark:border-[#333] text-gray-500 dark:text-gray-400 px-3 py-1.5 rounded-md w-fit transition-all"
            >
              {theme === 'dark' ? 'Light mode' : 'Dark mode'}
            </button>
          )}
        </div>
      )}
    </header>
  )
}
