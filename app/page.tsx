import Link from 'next/link'
import ProgramList from './components/ProgramList'
import { accreditation, college, programs } from './data/college'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <p className="font-display text-xl font-semibold text-crimson">{college.name}</p>
            <h1 className="mt-4 font-display text-5xl font-bold leading-[1.05] sm:text-6xl">
              A technical college that prepares graduates for the job market
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate">
              Degree programs in engineering, information technology, business and languages, taught
              in Khartoum North.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/departments"
                className="rounded-md bg-crimson px-6 py-3 font-semibold text-white transition-colors hover:bg-ink"
              >
                Explore departments
              </Link>
              <Link
                href="/e-learning"
                className="rounded-md border-2 border-navy px-6 py-3 font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
              >
                Open e-learning
              </Link>
            </div>
          </div>

          <div className="relative">
            <div aria-hidden="true" className="absolute -bottom-4 -right-4 h-full w-full bg-navy" />
            <img
              src="/campus.jpg"
              alt="The college building in Khartoum North"
              width={750}
              height={562}
              className="relative aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="border-t border-mist">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-5 lg:gap-16 lg:px-8">
          <div className="lg:col-span-3">
            <h2 className="font-display text-4xl font-bold">About the college</h2>
            <p className="mt-6 text-lg leading-8 text-slate">
              Cambridge International College is a technical college. It works to strengthen the
              scientific disciplines and to prepare graduates who are ready, in theory and in
              practice, for advanced study and for the needs of development and the job market.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-block font-semibold text-navy underline decoration-crimson decoration-2 underline-offset-8 hover:text-crimson"
            >
              Read more about the college
            </Link>
          </div>

          <figure className="border-l-4 border-crimson pl-6 lg:col-span-2">
            <figcaption className="font-semibold text-crimson">Our vision</figcaption>
            <blockquote className="mt-3 font-display text-2xl font-medium leading-snug">
              To be an institution of education, knowledge and research with a competitive
              advantage and a place in the world rankings.
            </blockquote>
          </figure>
        </div>
      </section>

      {/* Programs */}
      <section className="border-t border-mist bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
          <h2 className="font-display text-4xl font-bold">Programs</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate">
            Six degree programs across four fields.
          </p>
          <div className="mt-10">
            <ProgramList programs={programs} />
          </div>
        </div>
      </section>

      {/* E-learning */}
      <section className="bg-navy text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-20 lg:grid-cols-3 lg:px-8">
          <div className="lg:col-span-2">
            <h2 className="font-display text-4xl font-bold">E-learning</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-white/80">
              One place for lectures, online classes, attendance, assignments, the calendar and
              notes, with a separate view for students and for teachers.
            </p>
          </div>
          <div className="lg:text-right">
            <Link
              href="/e-learning"
              className="inline-block rounded-md bg-white px-6 py-3 font-semibold text-navy transition-colors hover:bg-crimson hover:text-white"
            >
              Sign in to e-learning
            </Link>
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section>
        <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
          <h2 className="font-display text-4xl font-bold">Approved by</h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-3">
            {accreditation.map((body) => (
              <li key={body.name} className="flex flex-col items-center gap-5 border border-mist bg-white p-8 text-center">
                <img src={body.logo} alt="" className="h-24 w-auto object-contain" />
                <span className="font-medium">{body.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
