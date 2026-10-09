import Link from 'next/link'
import type { Program } from '../data/college'

/* Programs as rows: degree first, then the name. Each row opens the
   program's page. */
export default function ProgramList({ programs }: { programs: Program[] }) {
  return (
    <ul className="divide-y divide-mist border-y border-mist bg-white">
      {programs.map((program) => (
        <li key={program.slug}>
          <Link
            href={`/departments/${program.slug}`}
            className="group grid items-baseline gap-x-6 gap-y-1 px-5 py-5 transition-colors hover:bg-paper sm:grid-cols-[9rem_1fr_auto] sm:px-6"
          >
            <span className="font-display text-lg font-semibold text-crimson">{program.degree}</span>
            <span>
              <span className="block font-display text-2xl font-semibold group-hover:text-navy">
                {program.name}
              </span>
              <span className="mt-1 block text-slate">{program.summary}</span>
            </span>
            <span className="text-sm text-slate">{program.field}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
