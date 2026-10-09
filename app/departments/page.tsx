import type { Metadata } from 'next'
import SiteShell from '@/app/components/SiteShell'
import DepartmentsScreen from '@/app/screens/DepartmentsScreen'

export const metadata: Metadata = {
  title: "Departments",
}

export default function Page() {
  return (
    <SiteShell lang="en" path="/departments">
      <DepartmentsScreen lang="en" />
    </SiteShell>
  )
}
