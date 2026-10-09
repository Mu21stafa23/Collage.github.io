import PageHeader from '../components/PageHeader'
import SignInForm from '../components/SignInForm'
import { ui, type Lang } from '../data/i18n'

export default function ELearningScreen({ lang }: { lang: Lang }) {
  const t = ui[lang].signIn

  return (
    <>
      <PageHeader title={t.title} intro={t.lead} />

      <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">
        <SignInForm lang={lang} />

        <div>
          <h2 className="font-display text-3xl font-bold">{t.inside}</h2>
          <dl className="mt-6 divide-y divide-mist border-y border-mist">
            {t.features.map(([title, text]) => (
              <div key={title} className="py-5">
                <dt className="font-display text-xl font-semibold">{title}</dt>
                <dd className="mt-1 text-slate">{text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  )
}
