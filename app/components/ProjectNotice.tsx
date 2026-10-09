import { ui, type Lang } from '../data/i18n'

/* Shown on every page so nobody mistakes this for the college's own site. */
export default function ProjectNotice({ lang }: { lang: Lang }) {
  return <p className="bg-ink px-4 py-2 text-center text-sm text-white">{ui[lang].notice}</p>
}
