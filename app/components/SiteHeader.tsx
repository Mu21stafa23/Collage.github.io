'use client'

import { useState } from 'react'
import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/departments', label: 'Departments' },
  { href: '/#contact', label: 'Contact' },
]

export default function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 border-b border-mist bg-white">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Cambridge International College Sudan, home">
          <img src="/logo.png" alt="" width={215} height={94} className="h-12 w-auto" />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="font-medium text-ink transition-colors hover:text-crimson">
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/e-learning"
              className="rounded-md bg-navy px-5 py-2.5 font-semibold text-white transition-colors hover:bg-ink"
            >
              E-learning
            </Link>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-ink hover:bg-paper md:hidden"
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {/* Mobile links */}
      {open && (
        <ul className="border-t border-mist px-5 py-3 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={() => setOpen(false)} className="block py-3 text-lg font-medium">
                {link.label}
              </Link>
            </li>
          ))}
          <li className="py-3">
            <Link
              href="/e-learning"
              onClick={() => setOpen(false)}
              className="block rounded-md bg-navy px-5 py-3 text-center font-semibold text-white"
            >
              E-learning
            </Link>
          </li>
        </ul>
      )}
    </header>
  )
}
