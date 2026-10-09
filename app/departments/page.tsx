import type { Metadata } from 'next'
import PageHeader from '../components/PageHeader'
import ProgramList from '../components/ProgramList'

export const metadata: Metadata = {
  title: 'Departments',
}

export default function DepartmentsPage() {
  return (
    <>
      <PageHeader
        title="Departments and programs"
        intro="Six degree programs in engineering, technology, business and languages."
      />

      <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-20">
        <ProgramList />
      </div>
    </>
  )
}
