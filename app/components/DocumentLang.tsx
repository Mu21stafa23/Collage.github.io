'use client'

import { useEffect } from 'react'
import type { Lang } from '../data/i18n'

/* Keeps the <html> tag's language and direction in step with the page
   being shown. The page content already carries both on its own wrapper,
   so nothing jumps while this runs. */
export default function DocumentLang({ lang }: { lang: Lang }) {
  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }, [lang])

  return null
}
