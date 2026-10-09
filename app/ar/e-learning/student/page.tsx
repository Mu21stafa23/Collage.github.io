import type { Metadata } from 'next'
import SiteShell from '@/app/components/SiteShell'
import StudentDashboard from '@/app/components/elearning/StudentDashboard'

export const metadata: Metadata = {
  title: { absolute: 'التعليم الإلكتروني للطالب | كلية كامبردج العالمية - السودان' },
  description: 'موقع ونظام تعليم إلكتروني تجريبي لكلية كامبردج العالمية - السودان. مشروع تخرج من إعداد طلاب الكلية.',
}

export default function Page() {
  return (
    <SiteShell lang="ar" path="/e-learning/student">
      <StudentDashboard lang="ar" />
    </SiteShell>
  )
}
