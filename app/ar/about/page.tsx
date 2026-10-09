import type { Metadata } from 'next'
import SiteShell from '@/app/components/SiteShell'
import AboutScreen from '@/app/screens/AboutScreen'

export const metadata: Metadata = {
  title: { absolute: 'عن الكلية | كلية كامبردج العالمية - السودان' },
  description: 'موقع ونظام تعليم إلكتروني تجريبي لكلية كامبردج العالمية - السودان. مشروع تخرج من إعداد طلاب الكلية.',
}

export default function Page() {
  return (
    <SiteShell lang="ar" path="/about">
      <AboutScreen lang="ar" />
    </SiteShell>
  )
}
