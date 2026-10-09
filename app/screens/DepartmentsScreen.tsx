import PageHeader from '../components/PageHeader'
import ProgramExplorer from '../components/ProgramExplorer'
import { ui, type Lang } from '../data/i18n'

export default function DepartmentsScreen({ lang }: { lang: Lang }) {
  const t = ui[lang].departments

  return (
    <>
      <PageHeader title={t.title} intro={t.lead} />

      <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-20">
        <ProgramExplorer lang={lang} />
      </div>
    </>
  )
}
