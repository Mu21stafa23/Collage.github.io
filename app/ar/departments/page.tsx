import type { Metadata } from 'next'
import SiteShell from '@/app/components/SiteShell'
import DepartmentsScreen from '@/app/screens/DepartmentsScreen'

export const metadata: Metadata = {
  title: { absolute: 'الأقسام | كلية كامبردج العالمية - السودان' },
  description: 'موقع ونظام تعليم إلكتروني تجريبي لكلية كامبردج العالمية - السودان. مشروع تخرج من إعداد طلاب الكلية.',
}

export default function Page() {
  return (
    <SiteShell lang="ar" path="/departments">
      <DepartmentsScreen lang="ar" />
    </SiteShell>
  )
}
