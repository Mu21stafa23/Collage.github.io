import type { Metadata } from 'next'
import SiteShell from '@/app/components/SiteShell'
import DepartmentScreen from '@/app/screens/DepartmentScreen'

export const metadata: Metadata = {
  title: "Civil Engineering",
}

export default function Page() {
  return (
    <SiteShell lang="en" path="/departments/civil-engineering">
      <DepartmentScreen slug="civil-engineering" lang="en" />
    </SiteShell>
  )
}
