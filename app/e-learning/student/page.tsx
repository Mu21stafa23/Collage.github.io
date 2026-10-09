import type { Metadata } from 'next'
import SiteShell from '@/app/components/SiteShell'
import StudentDashboard from '@/app/components/elearning/StudentDashboard'

export const metadata: Metadata = {
  title: "Student e-learning",
}

export default function Page() {
  return (
    <SiteShell lang="en" path="/e-learning/student">
      <StudentDashboard lang="en" />
    </SiteShell>
  )
}
