import Link from 'next/link'
import { programs } from '../data/college'

/* Every program as a row: degree first, then the name. Rows with their
   own page are links. */
export default function ProgramList() {
  return (
    <ul className="divide-y divide-mist border-y border-mist bg-white">
      {programs.map((program) => {
        const row = (
          <div className="grid items-baseline gap-x-6 gap-y-1 px-5 py-5 sm:grid-cols-[9rem_1fr_auto] sm:px-6">
            <span className="font-display text-lg font-semibold text-crimson">{program.degree}</span>
            <span className="font-display text-2xl font-semibold">{program.name}</span>
            <span className="text-sm text-slate">
              {program.field}
              {program.href && <span className="ml-4 font-semibold text-navy">View program</span>}
            </span>
          </div>
        )

        return (
          <li key={program.name}>
            {program.href ? (
              <Link href={program.href} className="block transition-colors hover:bg-paper">
                {row}
              </Link>
            ) : (
              row
            )}
          </li>
        )
      })}
    </ul>
  )
}
