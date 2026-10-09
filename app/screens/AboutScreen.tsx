import PageHeader from '../components/PageHeader'
import { college } from '../data/college'
import { ui, type Lang } from '../data/i18n'

export default function AboutScreen({ lang }: { lang: Lang }) {
  const t = ui[lang]

  return (
    <>
      <PageHeader title={t.about.title} intro={college.name[lang]} />

      <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">
        <div>
          <h2 className="font-display text-3xl font-bold">{t.about.who}</h2>
          <p className="mt-5 text-lg leading-8 text-slate">{college.about[lang]}</p>

          <h2 className="mt-12 font-display text-3xl font-bold">{t.about.vision}</h2>
          <p className="mt-5 text-lg leading-8 text-slate">{college.vision[lang]}</p>

          <h2 className="mt-12 font-display text-3xl font-bold">{t.about.where}</h2>
          <p className="mt-5 text-lg leading-8 text-slate">{college.address[lang]}</p>
        </div>

        <img
          src="/campus.jpg"
          alt={t.home.campusAlt}
          width={750}
          height={562}
          className="w-full border border-mist"
        />
      </div>
    </>
  )
}
