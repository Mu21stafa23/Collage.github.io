import type { Metadata } from 'next'
import SiteShell from '@/app/components/SiteShell'
import AboutScreen from '@/app/screens/AboutScreen'

export const metadata: Metadata = {
  title: "About",
}

export default function Page() {
  return (
    <SiteShell lang="en" path="/about">
      <AboutScreen lang="en" />
    </SiteShell>
  )
}
