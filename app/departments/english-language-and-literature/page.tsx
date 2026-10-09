import type { Metadata } from 'next'
import SiteShell from '@/app/components/SiteShell'
import DepartmentScreen from '@/app/screens/DepartmentScreen'

export const metadata: Metadata = {
  title: "English Language and Literature",
}

export default function Page() {
  return (
    <SiteShell lang="en" path="/departments/english-language-and-literature">
      <DepartmentScreen slug="english-language-and-literature" lang="en" />
    </SiteShell>
  )
}
