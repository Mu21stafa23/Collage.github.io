import Link from 'next/link'
import PageHeader from '../components/PageHeader'
import { fieldNames, getProgram, programs } from '../data/college'
import { localize, ui, type Lang } from '../data/i18n'

/* One program's page. Everything it shows comes from app/data/college.ts. */
export default function DepartmentScreen({ slug, lang }: { slug: string; lang: Lang }) {
  const t = ui[lang].departments
  const program = getProgram(slug)
  const field = fieldNames[program.field][lang]
  const others = programs.filter((item) => item.field === program.field && item.slug !== slug)

  return (
    <>
      <PageHeader title={program.name[lang]} intro={t.degreeIn(program.degree[lang], program.name[lang])} />

      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-3 lg:gap-16 lg:px-8 lg:py-20">
        <div className="lg:col-span-2">
          <nav aria-label={t.breadcrumb} className="text-sm text-slate">
            <Link href={localize('/departments', lang)} className="underline underline-offset-4 hover:text-crimson">
              {t.breadcrumb}
            </Link>{' '}
            / {field} / <span className="text-ink">{program.name[lang]}</span>
          </nav>

          <h2 className="mt-8 font-display text-3xl font-bold">{t.aboutField}</h2>
          <div className="mt-5 space-y-5 text-lg leading-8 text-slate">
            {program.paragraphs.map((paragraph) => (
              <p key={paragraph.en}>{paragraph[lang]}</p>
            ))}
          </div>

          {others.length > 0 && (
            <>
              <h2 className="mt-12 font-display text-2xl font-bold">{t.alsoIn(field)}</h2>
              <ul className="mt-4 space-y-2">
                {others.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={localize(`/departments/${item.slug}`, lang)}
                      className="font-semibold text-navy underline decoration-crimson decoration-2 underline-offset-8 hover:text-crimson"
                    >
                      {t.degreeIn(item.degree[lang], item.name[lang])}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        <aside className="h-fit border border-mist bg-white p-6">
          <h2 className="font-display text-xl font-semibold">{t.covers}</h2>
          <ul className="mt-4 divide-y divide-mist">
            {program.topics.map((topic) => (
              <li key={topic.en} className="py-3">
                {topic[lang]}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </>
  )
}
