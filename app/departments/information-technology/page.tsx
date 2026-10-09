import type { Metadata } from 'next'
import DepartmentPage from '../../components/DepartmentPage'

export const metadata: Metadata = {
  title: 'Information Technology',
}

export default function InformationTechnologyPage() {
  return <DepartmentPage slug="information-technology" />
}
