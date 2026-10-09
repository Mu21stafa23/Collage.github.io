import Link from 'next/link'
import { college } from '../data/college'

export default function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <h2 className="font-display text-xl font-semibold">Location</h2>
          <p className="mt-4 leading-7 text-white/80">
            {college.name}
            <br />
            {college.address}
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold">Contact</h2>
          <ul className="mt-4 space-y-2 text-white/80">
            <li>
              <a href={`mailto:${college.email}`} className="underline decoration-white/30 underline-offset-4 hover:decoration-white">
                {college.email}
              </a>
            </li>
            {college.phones.map((phone) => (
              <li key={phone}>
                <a href={`tel:${phone}`} className="hover:text-white">
                  {phone}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold">Academics</h2>
          <ul className="mt-4 space-y-2 text-white/80">
            <li>
              <Link href="/departments" className="hover:text-white">
                Departments
              </Link>
            </li>
            <li>
              <Link href="/e-learning" className="hover:text-white">
                E-learning
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                About the college
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold">Social media</h2>
          <ul className="mt-4 space-y-2 text-white/80">
            {college.social.map((item) => (
              <li key={item.label}>
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="border-t border-white/15 px-5 py-6 text-center text-sm text-white/70">
        Graduation project by Mustafa Hamad ElAmin, {new Date().getFullYear()}. Not affiliated with
        the college&apos;s official website.
      </p>
    </footer>
  )
}
