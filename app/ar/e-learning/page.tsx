import type { Metadata } from 'next'
import SiteShell from '@/app/components/SiteShell'
import ELearningScreen from '@/app/screens/ELearningScreen'

export const metadata: Metadata = {
  title: { absolute: 'التعليم الإلكتروني | كلية كامبردج العالمية - السودان' },
  description: 'موقع ونظام تعليم إلكتروني تجريبي لكلية كامبردج العالمية - السودان. مشروع تخرج من إعداد طلاب الكلية.',
}

export default function Page() {
  return (
    <SiteShell lang="ar" path="/e-learning">
      <ELearningScreen lang="ar" />
    </SiteShell>
  )
}
