'use client'

import { useState } from 'react'
import Link from 'next/link'
import { localize, ui, type Lang } from '../data/i18n'

type SiteHeaderProps = {
  lang: Lang
  /** The current page's address without the language part */
  path: string
}

export default function SiteHeader({ lang, path }: SiteHeaderProps) {
  const [open, setOpen] = useState(false)
  const t = ui[lang]
  const other: Lang = lang === 'en' ? 'ar' : 'en'

  const links = [
    { href: localize('/', lang), label: t.nav.home },
    { href: localize('/about', lang), label: t.nav.about },
    { href: localize('/departments', lang), label: t.nav.departments },
    { href: `${localize('/', lang)}#contact`, label: t.nav.contact },
  ]

  /* Opens the same page in the other language. */
  const languageLink = (
    <Link
      href={localize(path, other)}
      lang={other}
      hrefLang={other}
      className="rounded-md border border-mist px-3 py-2 font-semibold text-ink transition-colors hover:border-navy"
    >
      {ui[other].languageName}
    </Link>
  )

  return (
    <header className="sticky top-0 z-30 border-b border-mist bg-white">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-5 lg:px-8">
        <Link href={localize('/', lang)} className="flex items-center gap-3" aria-label={t.homeAria}>
          <img src="/logo.png" alt="" width={215} height={94} className="h-12 w-auto" />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="font-medium text-ink transition-colors hover:text-crimson">
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href={localize('/e-learning', lang)}
              className="rounded-md bg-navy px-5 py-2.5 font-semibold text-white transition-colors hover:bg-ink"
            >
              {t.nav.elearning}
            </Link>
          </li>
          <li>{languageLink}</li>
        </ul>

        {/* Mobile: language switch and menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          {languageLink}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? t.menu.close : t.menu.open}
            aria-expanded={open}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-ink hover:bg-paper"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile links */}
      {open && (
        <ul className="border-t border-mist px-5 py-3 lg:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={() => setOpen(false)} className="block py-3 text-lg font-medium">
                {link.label}
              </Link>
            </li>
          ))}
          <li className="py-3">
            <Link
              href={localize('/e-learning', lang)}
              onClick={() => setOpen(false)}
              className="block rounded-md bg-navy px-5 py-3 text-center font-semibold text-white"
            >
              {t.nav.elearning}
            </Link>
          </li>
        </ul>
      )}
    </header>
  )
}
