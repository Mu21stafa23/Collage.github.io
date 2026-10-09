import type { Metadata } from 'next'
import SiteShell from '@/app/components/SiteShell'
import DepartmentScreen from '@/app/screens/DepartmentScreen'

export const metadata: Metadata = {
  title: { absolute: 'تقنية المعلومات | كلية كامبردج العالمية - السودان' },
  description: 'موقع ونظام تعليم إلكتروني تجريبي لكلية كامبردج العالمية - السودان. مشروع تخرج من إعداد مصطفى حمد الأمين.',
}

export default function Page() {
  return (
    <SiteShell lang="ar" path="/departments/information-technology">
      <DepartmentScreen slug="information-technology" lang="ar" />
    </SiteShell>
  )
}
