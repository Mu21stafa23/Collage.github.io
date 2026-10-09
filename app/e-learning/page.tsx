import type { Metadata } from 'next'
import SiteShell from '@/app/components/SiteShell'
import ELearningScreen from '@/app/screens/ELearningScreen'

export const metadata: Metadata = {
  title: "E-learning",
}

export default function Page() {
  return (
    <SiteShell lang="en" path="/e-learning">
      <ELearningScreen lang="en" />
    </SiteShell>
  )
}
