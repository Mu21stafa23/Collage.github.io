'use client'

import { useState } from 'react'
import Link from 'next/link'

const roles = {
  student: {
    label: 'Student',
    idLabel: 'Roll number',
    idValue: 'DEMO-STUDENT',
    href: '/e-learning/student',
  },
  teacher: {
    label: 'Teacher',
    idLabel: 'Teacher ID',
    idValue: 'DEMO-TEACHER',
    href: '/e-learning/teacher',
  },
}

type Role = keyof typeof roles

/* A demo sign-in. The fields are filled in and read-only, and nothing is
   sent anywhere: the button simply opens the matching demo screen. */
export default function SignInForm() {
  const [role, setRole] = useState<Role>('student')
  const current = roles[role]

  return (
    <div className="border border-mist bg-white p-6 sm:p-10">
      <div role="tablist" aria-label="Sign in as" className="grid grid-cols-2 border border-mist">
        {(Object.keys(roles) as Role[]).map((key) => (
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

      <h2 className="mt-8 font-display text-3xl font-bold">{current.label} sign in</h2>

      <div className="mt-6 space-y-5">
        <label className="block">
          <span className="font-medium">{current.idLabel}</span>
          <input
            type="text"
            value={current.idValue}
            readOnly
            className="mt-2 block w-full border border-mist bg-paper px-4 py-3 text-slate"
          />
        </label>

        <label className="block">
          <span className="font-medium">Password</span>
          <input
            type="text"
            value="demo"
            readOnly
            className="mt-2 block w-full border border-mist bg-paper px-4 py-3 text-slate"
          />
        </label>
      </div>

      <Link
        href={current.href}
        className="mt-8 block rounded-md bg-crimson px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-ink"
      >
        Sign in as demo {current.label.toLowerCase()}
      </Link>

      <p className="mt-5 text-sm leading-6 text-slate">
        This is a demo account. The fields cannot be edited and nothing is sent or saved.
      </p>
    </div>
  )
}
