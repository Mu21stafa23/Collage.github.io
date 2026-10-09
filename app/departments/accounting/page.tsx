import type { Metadata } from 'next'
import SiteShell from '@/app/components/SiteShell'
import DepartmentScreen from '@/app/screens/DepartmentScreen'

export const metadata: Metadata = {
  title: "Accounting",
}

export default function Page() {
  return (
    <SiteShell lang="en" path="/departments/accounting">
      <DepartmentScreen slug="accounting" lang="en" />
    </SiteShell>
  )
}
