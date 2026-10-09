import type { Metadata } from 'next'
import SiteShell from '@/app/components/SiteShell'
import HomeScreen from '@/app/screens/HomeScreen'

export const metadata: Metadata = {
  title: { absolute: 'كلية كامبردج العالمية - السودان | مشروع تخرج' },
  description: 'موقع ونظام تعليم إلكتروني تجريبي لكلية كامبردج العالمية - السودان. مشروع تخرج من إعداد طلاب الكلية.',
}

export default function Page() {
  return (
    <SiteShell lang="ar" path="/">
      <HomeScreen lang="ar" />
    </SiteShell>
  )
}
