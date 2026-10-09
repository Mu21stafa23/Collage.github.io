import type { Metadata } from 'next'
import SiteShell from '@/app/components/SiteShell'
import TeacherDashboard from '@/app/components/elearning/TeacherDashboard'

export const metadata: Metadata = {
  title: "Teacher e-learning",
}

export default function Page() {
  return (
    <SiteShell lang="en" path="/e-learning/teacher">
      <TeacherDashboard lang="en" />
    </SiteShell>
  )
}
