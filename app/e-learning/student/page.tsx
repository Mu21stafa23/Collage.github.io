import type { Metadata } from 'next'
import StudentDashboard from '../../components/elearning/StudentDashboard'

export const metadata: Metadata = {
  title: 'Student e-learning',
}

export default function StudentPage() {
  return <StudentDashboard />
}
