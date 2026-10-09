import Link from 'next/link'
import PageHeader from './components/PageHeader'

export default function NotFound() {
  return (
    <>
      <PageHeader title="Page not found" intro="The page you asked for does not exist or has moved." />

      <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
        <Link
          href="/"
          className="inline-block rounded-md bg-crimson px-6 py-3 font-semibold text-white transition-colors hover:bg-ink"
        >
          Go to the home page
        </Link>
      </div>
    </>
  )
}
