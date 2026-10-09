'use client'

import { useState } from 'react'
import ProgramList from './ProgramList'
import { fields, programs, type Field } from '../data/college'

/* The departments page: the program list with a filter by field. */
export default function ProgramExplorer() {
  const [field, setField] = useState<Field | 'All'>('All')
  const visible = field === 'All' ? programs : programs.filter((program) => program.field === field)

  return (
    <>
      <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter programs by field">
        {(['All', ...fields] as const).map((option) => (
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
            {option}
          </button>
        ))}
      </div>

      <p className="mt-6 text-slate" aria-live="polite">
        Showing {visible.length} of {programs.length} programs
      </p>

      <div className="mt-4">
        <ProgramList programs={visible} />
      </div>
    </>
  )
}
