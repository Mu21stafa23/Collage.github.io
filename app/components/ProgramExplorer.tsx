'use client'

import { useState } from 'react'
import ProgramList from './ProgramList'
import { fieldNames, fields, programs, type Field } from '../data/college'
import { ui, type Lang } from '../data/i18n'

/* The departments page: the program list with a filter by field. */
export default function ProgramExplorer({ lang }: { lang: Lang }) {
  const [field, setField] = useState<Field | 'all'>('all')
  const t = ui[lang].departments
  const visible = field === 'all' ? programs : programs.filter((program) => program.field === field)

  return (
    <>
      <div className="flex flex-wrap items-center gap-2" role="group" aria-label={t.filterLabel}>
        {(['all', ...fields] as const).map((option) => (
          <button
            key={option}
            type="button"
            aria-pressed={field === option}
            onClick={() => setField(option)}
            className={`rounded-md border px-4 py-2 font-semibold transition-colors ${
              field === option
                ? 'border-navy bg-navy text-white'
                : 'border-mist bg-white text-ink hover:border-navy'
            }`}
          >
            {option === 'all' ? t.all : fieldNames[option][lang]}
          </button>
        ))}
      </div>

      <p className="mt-6 text-slate" aria-live="polite">
        {t.showing(visible.length, programs.length)}
      </p>

      <div className="mt-4">
        <ProgramList programs={visible} lang={lang} />
      </div>
    </>
  )
}
