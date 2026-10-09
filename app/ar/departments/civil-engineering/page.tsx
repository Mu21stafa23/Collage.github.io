import type { Metadata } from 'next'
import SiteShell from '@/app/components/SiteShell'
import DepartmentScreen from '@/app/screens/DepartmentScreen'

export const metadata: Metadata = {
  title: { absolute: 'الهندسة المدنية | كلية كامبردج العالمية - السودان' },
  description: 'موقع ونظام تعليم إلكتروني تجريبي لكلية كامبردج العالمية - السودان. مشروع تخرج من إعداد طلاب الكلية.',
}

export default function Page() {
  return (
    <SiteShell lang="ar" path="/departments/civil-engineering">
      <DepartmentScreen slug="civil-engineering" lang="ar" />
    </SiteShell>
  )
}
