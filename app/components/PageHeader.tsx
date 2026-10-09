type PageHeaderProps = {
  title: string
  intro?: string
}

/* The navy band at the top of every inner page. */
export default function PageHeader({ title, intro }: PageHeaderProps) {
  return (
    <div className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="h-1.5 w-16 bg-crimson" />
        <h1 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">{intro}</p>}
      </div>
    </div>
  )
}
