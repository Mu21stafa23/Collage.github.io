import type { Metadata } from 'next'
import SiteShell from '@/app/components/SiteShell'
import DepartmentScreen from '@/app/screens/DepartmentScreen'

export const metadata: Metadata = {
  title: { absolute: 'الهندسة الكهربائية | كلية كامبردج العالمية - السودان' },
  description: 'موقع ونظام تعليم إلكتروني تجريبي لكلية كامبردج العالمية - السودان. مشروع تخرج من إعداد مصطفى حمد الأمين.',
}

export default function Page() {
  return (
    <SiteShell lang="ar" path="/departments/electrical-engineering">
      <DepartmentScreen slug="electrical-engineering" lang="ar" />
    </SiteShell>
  )
}
