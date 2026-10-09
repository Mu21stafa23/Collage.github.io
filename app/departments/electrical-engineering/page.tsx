import type { Metadata } from 'next'
import DepartmentPage from '../../components/DepartmentPage'

export const metadata: Metadata = {
  title: 'Electrical Engineering',
}

export default function ElectricalEngineeringPage() {
  return <DepartmentPage slug="electrical-engineering" />
}
