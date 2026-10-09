import Link from 'next/link'
import PageHeader from './PageHeader'

type DepartmentPageProps = {
  degree: string
  name: string
  paragraphs: string[]
  topics: string[]
}

export default function DepartmentPage({ degree, name, paragraphs, topics }: DepartmentPageProps) {
  return (
    <>
      <PageHeader title={name} intro={`${degree} in ${name}`} />

      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-3 lg:gap-16 lg:px-8 lg:py-20">
        <div className="lg:col-span-2">
          <h2 className="font-display text-3xl font-bold">About the field</h2>
          <div className="mt-5 space-y-5 text-lg leading-8 text-slate">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <Link
            href="/departments"
            className="mt-10 inline-block font-semibold text-navy underline decoration-crimson decoration-2 underline-offset-8 hover:text-crimson"
          >
            Back to all departments
          </Link>
        </div>

        <aside className="h-fit border border-mist bg-white p-6">
          <h2 className="font-display text-xl font-semibold">What the field covers</h2>
          <ul className="mt-4 divide-y divide-mist">
            {topics.map((topic) => (
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
