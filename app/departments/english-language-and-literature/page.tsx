import type { Metadata } from 'next'
import DepartmentPage from '../../components/DepartmentPage'

export const metadata: Metadata = {
  title: 'English Language and Literature',
}

export default function EnglishPage() {
  return <DepartmentPage slug="english-language-and-literature" />
}
