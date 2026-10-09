'use client'

import { useState } from 'react'
import Link from 'next/link'
import { localize, ui, type Lang } from '../data/i18n'

type Role = 'student' | 'teacher'

/* A demo sign-in. The fields are filled in and read-only, and nothing is
   sent anywhere: the button simply opens the matching demo screen. */
export default function SignInForm({ lang }: { lang: Lang }) {
  const [role, setRole] = useState<Role>('student')
  const t = ui[lang].signIn

  const roles = {
    student: {
      label: t.student,
      heading: t.studentHeading,
      idLabel: t.rollNumber,
      idValue: 'DEMO-STUDENT',
      button: t.studentButton,
      href: localize('/e-learning/student', lang),
    },
    teacher: {
      label: t.teacher,
      heading: t.teacherHeading,
      idLabel: t.teacherId,
      idValue: 'DEMO-TEACHER',
      button: t.teacherButton,
      href: localize('/e-learning/teacher', lang),
    },
  }
  const current = roles[role]

  return (
    <div className="border border-mist bg-white p-6 sm:p-10">
      <div role="tablist" aria-label={t.tabsLabel} className="grid grid-cols-2 border border-mist">
        {(['student', 'teacher'] as const).map((key) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={role === key}
            onClick={() => setRole(key)}
            className={`px-4 py-3 font-semibold transition-colors ${
              role === key ? 'bg-navy text-white' : 'bg-white text-ink hover:bg-paper'
            }`}
          >
            {roles[key].label}
          </button>
        ))}
      </div>

      <h2 className="mt-8 font-display text-3xl font-bold">{current.heading}</h2>

      <div className="mt-6 space-y-5">
        <label className="block">
          <span className="font-medium">{current.idLabel}</span>
          <input
            type="text"
            value={current.idValue}
            readOnly
            dir="ltr"
            className={`mt-2 block w-full border border-mist bg-paper px-4 py-3 text-slate ${lang === 'ar' ? 'text-right' : ''}`}
          />
        </label>

        <label className="block">
          <span className="font-medium">{t.password}</span>
          <input
            type="text"
            value="demo"
            readOnly
            dir="ltr"
            className={`mt-2 block w-full border border-mist bg-paper px-4 py-3 text-slate ${lang === 'ar' ? 'text-right' : ''}`}
          />
        </label>
      </div>

      <Link
        href={current.href}
        className="mt-8 block rounded-md bg-crimson px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-ink"
      >
        {current.button}
      </Link>

      <p className="mt-5 text-sm leading-6 text-slate">{t.note}</p>
    </div>
  )
}
