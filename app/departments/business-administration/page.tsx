import type { Metadata } from 'next'
import DepartmentPage from '../../components/DepartmentPage'

export const metadata: Metadata = {
  title: 'Business Administration',
}

export default function BusinessAdministrationPage() {
  return <DepartmentPage slug="business-administration" />
}
