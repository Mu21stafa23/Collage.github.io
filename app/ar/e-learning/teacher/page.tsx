import type { Metadata } from 'next'
import SiteShell from '@/app/components/SiteShell'
import TeacherDashboard from '@/app/components/elearning/TeacherDashboard'

export const metadata: Metadata = {
  title: { absolute: 'التعليم الإلكتروني للأستاذ | كلية كامبردج العالمية - السودان' },
  description: 'موقع ونظام تعليم إلكتروني تجريبي لكلية كامبردج العالمية - السودان. مشروع تخرج من إعداد مصطفى حمد الأمين.',
}

export default function Page() {
  return (
    <SiteShell lang="ar" path="/e-learning/teacher">
      <TeacherDashboard lang="ar" />
    </SiteShell>
  )
}
