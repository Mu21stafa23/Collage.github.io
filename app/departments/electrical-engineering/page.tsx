import type { Metadata } from 'next'
import SiteShell from '@/app/components/SiteShell'
import DepartmentScreen from '@/app/screens/DepartmentScreen'

export const metadata: Metadata = {
  title: "Electrical Engineering",
}

export default function Page() {
  return (
    <SiteShell lang="en" path="/departments/electrical-engineering">
      <DepartmentScreen slug="electrical-engineering" lang="en" />
    </SiteShell>
  )
}
