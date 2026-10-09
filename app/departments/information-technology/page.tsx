import type { Metadata } from 'next'
import SiteShell from '@/app/components/SiteShell'
import DepartmentScreen from '@/app/screens/DepartmentScreen'

export const metadata: Metadata = {
  title: "Information Technology",
}

export default function Page() {
  return (
    <SiteShell lang="en" path="/departments/information-technology">
      <DepartmentScreen slug="information-technology" lang="en" />
    </SiteShell>
  )
}
