import type { Metadata } from 'next'
import DepartmentPage from '../../components/DepartmentPage'

export const metadata: Metadata = {
  title: 'Accounting',
}

export default function AccountingPage() {
  return <DepartmentPage slug="accounting" />
}
