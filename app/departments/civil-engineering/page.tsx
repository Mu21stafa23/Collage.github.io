import type { Metadata } from 'next'
import DepartmentPage from '../../components/DepartmentPage'

export const metadata: Metadata = {
  title: 'Civil Engineering',
}

export default function CivilEngineeringPage() {
  return (
    <DepartmentPage
      degree="B.Sc. (Hons)"
      name="Civil Engineering"
      paragraphs={[
        'Civil engineering is the branch of engineering concerned with the study, design and analysis of civil structures.',
        'These include residential and service buildings, roads, bridges, tunnels, airports and ports, as well as drinking-water networks, pumping stations, sewage networks, water treatment plants, dams and irrigation projects.',
        'It also covers supervising these facilities throughout their working life.',
      ]}
      topics={[
        'Buildings and structures',
        'Roads, bridges and tunnels',
        'Airports and ports',
        'Water supply and sewage networks',
        'Dams and irrigation',
      ]}
    />
  )
}
