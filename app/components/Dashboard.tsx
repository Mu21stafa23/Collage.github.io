'use client'

import { useState } from 'react'

export type DashboardTab = {
  label: string
  heading: string
  columns: string[]
  rows: string[][]
}

type DashboardProps = {
  role: string
  name: string
  details: { label: string; value: string }[]
  tabs: DashboardTab[]
}

/* The e-learning screen: profile on top, then one table per tab. */
export default function Dashboard({ role, name, details, tabs }: DashboardProps) {
  const [active, setActive] = useState(0)
  const tab = tabs[active]

  return (
    <>
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

      <div className="mx-auto max-w-6xl px-5 py-10 lg:px-8">
        <div role="tablist" aria-label={`${role} sections`} className="flex gap-1 overflow-x-auto border-b border-mist">
          {tabs.map((item, index) => (
            <button
              key={item.label}
              type="button"
              role="tab"
              id={`tab-${index}`}
              aria-selected={active === index}
              aria-controls="tab-panel"
              onClick={() => setActive(index)}
              className={`-mb-px flex-none border-b-4 px-4 py-3 font-semibold transition-colors ${
                active === index
                  ? 'border-crimson text-ink'
                  : 'border-transparent text-slate hover:text-ink'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <section id="tab-panel" role="tabpanel" aria-labelledby={`tab-${active}`} className="py-10">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="font-display text-3xl font-bold">{tab.heading}</h2>
            <span className="border border-mist bg-white px-3 py-1 text-sm text-slate">Sample data</span>
          </div>

          <div className="mt-6 overflow-x-auto border border-mist bg-white">
            <table className="w-full min-w-[36rem] text-left">
              <thead className="border-b border-mist bg-paper">
                <tr>
                  {tab.columns.map((column) => (
                    <th key={column} scope="col" className="px-5 py-3 font-semibold">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-mist">
                {tab.rows.map((row) => (
                  <tr key={row.join('|')}>
                    {row.map((cell, index) => (
                      <td key={index} className={`px-5 py-4 ${index === 0 ? 'font-medium' : 'text-slate'}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  )
}
