import type { Metadata } from 'next'
import DepartmentPage from '../../components/DepartmentPage'

export const metadata: Metadata = {
  title: 'Information Technology',
}

export default function InformationTechnologyPage() {
  return (
    <DepartmentPage
      degree="B.Sc."
      name="Information Technology"
      paragraphs={[
        'Information technology is the study, design, development, implementation, support and management of computer-based information systems.',
        'It is concerned with using computers and software to convert, store, protect, process, transmit and securely retrieve information.',
        'It is a broad discipline that covers technology and everything related to processing and managing information, especially in large organizations.',
      ]}
      topics={[
        'Designing and developing information systems',
        'Storing and protecting information',
        'Processing and transmitting data',
        'Supporting and managing systems',
      ]}
    />
  )
}
