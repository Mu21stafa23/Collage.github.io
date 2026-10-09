import type { Metadata } from 'next'
import TeacherDashboard from '../../components/elearning/TeacherDashboard'

export const metadata: Metadata = {
  title: 'Teacher e-learning',
}

export default function TeacherPage() {
  return <TeacherDashboard />
}
