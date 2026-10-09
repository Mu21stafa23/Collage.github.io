import Link from 'next/link'
import PageHeader from './components/PageHeader'
import SiteShell from './components/SiteShell'
import { ui } from './data/i18n'

export default function NotFound() {
  const t = ui.en.notFound

  return (
    <SiteShell lang="en" path="/">
      <PageHeader title={t.title} intro={t.lead} />

      <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
        <Link
          href="/"
          className="inline-block rounded-md bg-crimson px-6 py-3 font-semibold text-white transition-colors hover:bg-ink"
        >
          {t.home}
        </Link>
      </div>
    </SiteShell>
  )
}
