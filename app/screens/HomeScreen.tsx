import Link from 'next/link'
import FieldCards from '../components/FieldCards'
import { accreditation, college, fields, programs } from '../data/college'
import { localize, ui, type Lang } from '../data/i18n'

const mapUrl = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(college.mapQuery)

const linkClass =
  'font-semibold text-navy underline decoration-crimson decoration-2 underline-offset-8 hover:text-crimson'

export default function HomeScreen({ lang }: { lang: Lang }) {
  const t = ui[lang].home
  const facts = [String(programs.length), String(fields.length), '2'].map((value, index) => ({
    value,
    label: t.facts[index],
  }))

  return (
    <>
      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <p className="font-display text-xl font-semibold text-crimson">{college.name[lang]}</p>
            <h1 className="mt-4 font-display text-5xl font-bold leading-[1.05] sm:text-6xl">{t.title}</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate">{t.lead}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={localize('/departments', lang)}
                className="rounded-md bg-crimson px-6 py-3 font-semibold text-white transition-colors hover:bg-ink"
              >
                {t.explore}
              </Link>
              <Link
                href={localize('/e-learning', lang)}
                className="rounded-md border-2 border-navy px-6 py-3 font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
              >
                {t.openElearning}
              </Link>
            </div>
          </div>

          <div className="relative">
            <div aria-hidden="true" className="absolute -bottom-4 -end-4 h-full w-full bg-navy" />
            <img
              src="/campus.jpg"
              alt={t.campusAlt}
              width={750}
              height={562}
              className="relative aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section aria-label={t.factsLabel} className="bg-navy text-white">
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
            <h2 className="font-display text-4xl font-bold">{t.aboutTitle}</h2>
            <p className="mt-6 text-lg leading-8 text-slate">{college.about[lang]}</p>
            <Link href={localize('/about', lang)} className={`mt-6 inline-block ${linkClass}`}>
              {t.aboutMore}
            </Link>
          </div>

          <figure className="border-s-4 border-crimson ps-6 lg:col-span-2">
            <figcaption className="font-semibold text-crimson">{t.visionLabel}</figcaption>
            <blockquote className="mt-3 font-display text-2xl font-medium leading-snug">
              {college.vision[lang]}
            </blockquote>
          </figure>
        </div>
      </section>

      {/* Programs by field */}
      <section className="border-y border-mist bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-4xl font-bold">{t.programsTitle}</h2>
              <p className="mt-4 text-lg leading-8 text-slate">{t.programsLead}</p>
            </div>
            <Link href={localize('/departments', lang)} className={linkClass}>
              {t.allDepartments}
            </Link>
          </div>
          <div className="mt-10">
            <FieldCards lang={lang} />
          </div>
        </div>
      </section>

      {/* E-learning */}
      <section className="bg-navy text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <h2 className="font-display text-4xl font-bold">{t.elearningTitle}</h2>
            <p className="mt-4 text-lg leading-8 text-white/80">{t.elearningLead}</p>
            <ul className="mt-6 space-y-2 text-white/80">
              {t.elearningPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <Link
              href={localize('/e-learning', lang)}
              className="mt-8 inline-block rounded-md bg-white px-6 py-3 font-semibold text-navy transition-colors hover:bg-crimson hover:text-white"
            >
              {t.elearningButton}
            </Link>
          </div>

          <Link
            href={localize('/e-learning', lang)}
            className="block border-4 border-white/20 transition-colors hover:border-white/50"
          >
            <img
              src={lang === 'ar' ? '/e-learning-preview-ar.jpg' : '/e-learning-preview.jpg'}
              alt={t.elearningAlt}
              width={1770}
              height={lang === 'ar' ? 1361 : 1326}
              className="w-full"
            />
          </Link>
        </div>
      </section>

      {/* Accreditation */}
      <section>
        <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
          <h2 className="font-display text-4xl font-bold">{t.approvedBy}</h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-3">
            {accreditation.map((body) => (
              <li key={body.logo} className="flex flex-col items-center gap-5 border border-mist bg-white p-8 text-center">
                <img src={body.logo} alt="" className="h-24 w-auto object-contain" />
                <span className="font-medium">{body.name[lang]}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24 border-t border-mist bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
          <h2 className="font-display text-4xl font-bold">{t.contactTitle}</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="border border-mist p-6">
              <h3 className="font-display text-xl font-semibold">{t.visit}</h3>
              <p className="mt-3 leading-7 text-slate">
                {college.name[lang]}
                <br />
                {college.address[lang]}
              </p>
              <a href={mapUrl} target="_blank" rel="noopener noreferrer" className={`mt-5 inline-block ${linkClass}`}>
                {t.openMap}
              </a>
            </div>

            <div className="border border-mist p-6">
              <h3 className="font-display text-xl font-semibold">{t.call}</h3>
              <ul className="mt-3 space-y-2">
                {college.phones.map((phone) => (
                  <li key={phone}>
                    <a href={`tel:${phone}`} dir="ltr" className="inline-block text-lg font-semibold text-navy hover:text-crimson">
                      {phone}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-mist p-6">
              <h3 className="font-display text-xl font-semibold">{t.write}</h3>
              <a
                href={`mailto:${college.email}`}
                className="mt-3 inline-block text-lg font-semibold text-navy hover:text-crimson"
              >
                {college.email}
              </a>
              <ul className="mt-5 flex gap-6">
                {college.social.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                      {item.label[lang]}
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
