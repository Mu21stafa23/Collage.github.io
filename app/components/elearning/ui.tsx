/* Small building blocks shared by the student and teacher screens. */

type Detail = { label: string; value: string }

export function ProfileBand({ role, name, details }: { role: string; name: string; details: Detail[] }) {
  return (
    <div className="bg-navy text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-6 px-5 py-12 lg:px-8">
        <div
          aria-hidden="true"
          className="flex h-24 w-24 flex-none items-center justify-center rounded-full bg-white font-display text-4xl font-bold text-navy"
        >
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-white/70">{role}</p>
          <h1 className="font-display text-4xl font-bold">{name}</h1>
          <dl className="mt-3 flex flex-wrap gap-x-8 gap-y-1 text-white/80">
            {details.map((detail) => (
              <div key={detail.label} className="flex gap-2">
                <dt className="text-white/60">{detail.label}:</dt>
                <dd>{detail.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export function TabBar({
  label,
  tabs,
  active,
  onChange,
}: {
  label: string
  tabs: string[]
  active: string
  onChange: (tab: string) => void
}) {
  return (
    <div role="tablist" aria-label={label} className="flex gap-1 overflow-x-auto border-b border-mist">
      {tabs.map((tab) => (
        <button
          key={tab}
          type="button"
          role="tab"
          aria-selected={active === tab}
          aria-controls="tab-panel"
          onClick={() => onChange(tab)}
          className={`-mb-px flex-none border-b-4 px-4 py-3 font-semibold ${
            active === tab ? 'border-crimson text-ink' : 'border-transparent text-slate hover:text-ink'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}

/* The content area under the tabs: a heading, the "Sample data" tag, then
   whatever the tab shows. */
export function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section id="tab-panel" role="tabpanel" aria-label={title} className="py-10">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h2 className="font-display text-3xl font-bold">{title}</h2>
        <span className="border border-mist bg-white px-3 py-1 text-sm text-slate">Sample data</span>
      </div>
      <div className="mt-6">{children}</div>
    </section>
  )
}

export function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`border border-mist bg-white p-5 sm:p-6 ${className}`}>{children}</div>
}

/* A headline number with a label, used on the overview tabs. */
export function Stat({ label, value, note }: { label: string; value: string; note?: string }) {
  return (
    <Card>
      <p className="text-slate">{label}</p>
      <p className="mt-2 font-display text-4xl font-bold">{value}</p>
      {note && <p className="mt-2 text-sm text-slate">{note}</p>}
    </Card>
  )
}

const tones = {
  neutral: 'border-mist bg-paper text-slate',
  good: 'border-emerald-200 bg-emerald-50 text-emerald-800',
  warn: 'border-amber-200 bg-amber-50 text-amber-800',
  info: 'border-blue-200 bg-blue-50 text-navy',
}

export function Badge({ tone = 'neutral', children }: { tone?: keyof typeof tones; children: React.ReactNode }) {
  return (
    <span className={`inline-block whitespace-nowrap border px-2.5 py-1 text-sm font-semibold ${tones[tone]}`}>
      {children}
    </span>
  )
}

/* A horizontal bar for a percentage, with the number beside it. */
export function Bar({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <div
        role="progressbar"
        aria-label={label}
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        className="h-2.5 flex-1 bg-paper"
      >
        <div className={`h-full ${value >= 75 ? 'bg-navy' : 'bg-crimson'}`} style={{ width: `${value}%` }} />
      </div>
      <span className="w-12 text-right font-semibold tabular-nums">{value}%</span>
    </div>
  )
}

export const buttonClass =
  'rounded-md bg-navy px-4 py-2 font-semibold text-white transition-colors hover:bg-ink disabled:cursor-default disabled:bg-paper disabled:text-slate'

export const quietButtonClass =
  'rounded-md border border-mist bg-white px-4 py-2 font-semibold text-ink transition-colors hover:border-navy'
