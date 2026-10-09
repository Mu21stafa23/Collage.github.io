import Link from 'next/link'
import FieldCards from './components/FieldCards'
import { accreditation, college, fields, programs } from './data/college'

const mapUrl =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent(`${college.name}, ${college.address}`)

const linkClass =
  'font-semibold text-navy underline decoration-crimson decoration-2 underline-offset-8 hover:text-crimson'

export default function Home() {
  const facts = [
    { value: String(programs.length), label: 'degree programs' },
    { value: String(fields.length), label: 'fields of study' },
    { value: '2', label: 'e-learning views, for students and teachers' },
  ]

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

      {/* Quick facts */}
      <section aria-label="The college in numbers" className="bg-navy text-white">
        <dl className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:grid-cols-3 lg:px-8">
          {facts.map((fact) => (
            <div key={fact.label} className="flex flex-col-reverse gap-1">
              <dt className="text-white/80">{fact.label}</dt>
              <dd className="font-display text-5xl font-bold">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* About */}
      <section>
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-5 lg:gap-16 lg:px-8">
          <div className="lg:col-span-3">
            <h2 className="font-display text-4xl font-bold">About the college</h2>
            <p className="mt-6 text-lg leading-8 text-slate">
              Cambridge International College is a technical college. It works to strengthen the
              scientific disciplines and to prepare graduates who are ready, in theory and in
              practice, for advanced study and for the needs of development and the job market.
            </p>
            <Link href="/about" className={`mt-6 inline-block ${linkClass}`}>
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

      {/* Programs by field */}
      <section className="border-y border-mist bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-4xl font-bold">Programs</h2>
              <p className="mt-4 text-lg leading-8 text-slate">Choose a field to see what you can study.</p>
            </div>
            <Link href="/departments" className={linkClass}>
              See all departments
            </Link>
          </div>
          <div className="mt-10">
            <FieldCards />
          </div>
        </div>
      </section>

      {/* E-learning */}
      <section className="bg-navy text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <h2 className="font-display text-4xl font-bold">E-learning</h2>
            <p className="mt-4 text-lg leading-8 text-white/80">
              One place for lectures, online classes, attendance, assignments, the calendar and
              notes, with a separate view for students and for teachers.
            </p>
            <ul className="mt-6 space-y-2 text-white/80">
              <li>Students follow their lectures, attendance and assignments.</li>
              <li>Teachers start classes, take attendance and post notes.</li>
            </ul>
            <Link
              href="/e-learning"
              className="mt-8 inline-block rounded-md bg-white px-6 py-3 font-semibold text-navy transition-colors hover:bg-crimson hover:text-white"
            >
              Sign in to e-learning
            </Link>
          </div>

          <Link href="/e-learning" className="block border-4 border-white/20 transition-colors hover:border-white/50">
            <img
              src="/e-learning-preview.jpg"
              alt="The student screen, showing the next class, attendance and assignments"
              width={1770}
              height={1326}
              className="w-full"
            />
          </Link>
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

      {/* Contact */}
      <section id="contact" className="scroll-mt-24 border-t border-mist bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
          <h2 className="font-display text-4xl font-bold">Contact the college</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="border border-mist p-6">
              <h3 className="font-display text-xl font-semibold">Visit</h3>
              <p className="mt-3 leading-7 text-slate">
                {college.name}
                <br />
                {college.address}
              </p>
              <a href={mapUrl} target="_blank" rel="noopener noreferrer" className={`mt-5 inline-block ${linkClass}`}>
                Open in Google Maps
              </a>
            </div>

            <div className="border border-mist p-6">
              <h3 className="font-display text-xl font-semibold">Call</h3>
              <ul className="mt-3 space-y-2">
                {college.phones.map((phone) => (
                  <li key={phone}>
                    <a href={`tel:${phone}`} className="text-lg font-semibold text-navy hover:text-crimson">
                      {phone}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-mist p-6">
              <h3 className="font-display text-xl font-semibold">Write</h3>
              <a
                href={`mailto:${college.email}`}
                className="mt-3 inline-block text-lg font-semibold text-navy hover:text-crimson"
              >
                {college.email}
              </a>
              <ul className="mt-5 flex gap-6">
                {college.social.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
