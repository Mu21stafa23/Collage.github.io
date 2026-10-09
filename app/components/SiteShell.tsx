import DocumentLang from './DocumentLang'
import ProjectNotice from './ProjectNotice'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import type { Lang } from '../data/i18n'

type SiteShellProps = {
  lang: Lang
  /** The page's address without the language part, for example "/about" */
  path: string
  children: React.ReactNode
}

/* Wraps every page: sets the language and direction, then the notice,
   header, content and footer. */
export default function SiteShell({ lang, path, children }: SiteShellProps) {
  return (
    <div lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'} className="flex min-h-screen flex-col">
      <DocumentLang lang={lang} />
      <ProjectNotice lang={lang} />
      <SiteHeader lang={lang} path={path} />
      <main className="flex-1">{children}</main>
      <SiteFooter lang={lang} />
    </div>
  )
}
