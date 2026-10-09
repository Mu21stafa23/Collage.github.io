import Link from 'next/link'
import { fields, programs, type Field } from '../data/college'

const icons: Record<Field, React.ReactNode> = {
  Engineering: (
    <>
      <path d="M12 3l7.8 4.5v9L12 21l-7.8-4.5v-9L12 3z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  Technology: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="1.5" />
      <path d="M8 20h8M12 16v4" />
    </>
  ),
  Business: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="1.5" />
      <path d="M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2M3 13h18" />
    </>
  ),
  Languages: (
    <>
      <path d="M4 5h16v11H9l-5 4V5z" />
      <path d="M8 9h8M8 12h5" />
    </>
  ),
}

/* The home page's program section: one card per field, listing the
   programs taught in it. */
export default function FieldCards() {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {fields.map((field) => (
        <li key={field} className="flex flex-col border border-mist bg-paper p-6">
          <svg
            className="h-10 w-10 text-crimson"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {icons[field]}
          </svg>
          <h3 className="mt-5 font-display text-2xl font-bold">{field}</h3>
          <ul className="mt-4 divide-y divide-mist border-t border-mist">
            {programs
              .filter((program) => program.field === field)
              .map((program) => (
                <li key={program.slug}>
                  <Link href={`/departments/${program.slug}`} className="group block py-3">
                    <span className="block text-sm font-semibold text-crimson">{program.degree}</span>
                    <span className="block font-semibold underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-crimson">
                      {program.name}
                    </span>
                  </Link>
                </li>
              ))}
          </ul>
        </li>
      ))}
    </ul>
  )
}
