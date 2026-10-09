import type { Metadata } from 'next'
import SiteShell from '@/app/components/SiteShell'
import DepartmentScreen from '@/app/screens/DepartmentScreen'

export const metadata: Metadata = {
  title: { absolute: 'اللغة الإنجليزية وآدابها | كلية كامبردج العالمية - السودان' },
  description: 'موقع ونظام تعليم إلكتروني تجريبي لكلية كامبردج العالمية - السودان. مشروع تخرج من إعداد طلاب الكلية.',
}

export default function Page() {
  return (
    <SiteShell lang="ar" path="/departments/english-language-and-literature">
      <DepartmentScreen slug="english-language-and-literature" lang="ar" />
    </SiteShell>
  )
}
