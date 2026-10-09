import Link from 'next/link'
import PageHeader from './PageHeader'
import { getProgram, programs } from '../data/college'

/* One program's page. Everything it shows comes from app/data/college.ts. */
export default function DepartmentPage({ slug }: { slug: string }) {
  const program = getProgram(slug)
  const others = programs.filter((item) => item.field === program.field && item.slug !== slug)

  return (
    <>
      <PageHeader title={program.name} intro={`${program.degree} in ${program.name}`} />

      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-3 lg:gap-16 lg:px-8 lg:py-20">
        <div className="lg:col-span-2">
          <nav aria-label="Breadcrumb" className="text-sm text-slate">
            <Link href="/departments" className="underline underline-offset-4 hover:text-crimson">
              Departments
            </Link>{' '}
            / {program.field} / <span className="text-ink">{program.name}</span>
          </nav>

          <h2 className="mt-8 font-display text-3xl font-bold">About the field</h2>
          <div className="mt-5 space-y-5 text-lg leading-8 text-slate">
            {program.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {others.length > 0 && (
            <>
              <h2 className="mt-12 font-display text-2xl font-bold">Also in {program.field}</h2>
              <ul className="mt-4 space-y-2">
                {others.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/departments/${item.slug}`}
                      className="font-semibold text-navy underline decoration-crimson decoration-2 underline-offset-8 hover:text-crimson"
                    >
                      {item.degree} in {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        <aside className="h-fit border border-mist bg-white p-6">
          <h2 className="font-display text-xl font-semibold">What the field covers</h2>
          <ul className="mt-4 divide-y divide-mist">
            {program.topics.map((topic) => (
              <li key={topic} className="py-3">
                {topic}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </>
  )
}
