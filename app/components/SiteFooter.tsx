import Link from 'next/link'
import { college } from '../data/college'
import { localize, ui, type Lang } from '../data/i18n'

export default function SiteFooter({ lang }: { lang: Lang }) {
  const t = ui[lang]

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <h2 className="font-display text-xl font-semibold">{t.footer.location}</h2>
          <p className="mt-4 leading-7 text-white/80">
            {college.name[lang]}
            <br />
            {college.address[lang]}
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold">{t.footer.contact}</h2>
          <ul className="mt-4 space-y-2 text-white/80">
            <li>
              <a href={`mailto:${college.email}`} className="underline decoration-white/30 underline-offset-4 hover:decoration-white">
                {college.email}
              </a>
            </li>
            {college.phones.map((phone) => (
              <li key={phone}>
                <a href={`tel:${phone}`} dir="ltr" className="hover:text-white">
                  {phone}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold">{t.footer.academics}</h2>
          <ul className="mt-4 space-y-2 text-white/80">
            <li>
              <Link href={localize('/departments', lang)} className="hover:text-white">
                {t.nav.departments}
              </Link>
            </li>
            <li>
              <Link href={localize('/e-learning', lang)} className="hover:text-white">
                {t.nav.elearning}
              </Link>
            </li>
            <li>
              <Link href={localize('/about', lang)} className="hover:text-white">
                {t.footer.aboutLink}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold">{t.footer.social}</h2>
          <ul className="mt-4 space-y-2 text-white/80">
            {college.social.map((item) => (
              <li key={item.href}>
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  {item.label[lang]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="border-t border-white/15 px-5 py-6 text-center text-sm text-white/70">
        {t.footerNote(new Date().getFullYear())}
      </p>
    </footer>
  )
}
