import type { Metadata } from 'next'
import Dashboard, { type DashboardTab } from '../../components/Dashboard'

export const metadata: Metadata = {
  title: 'Teacher e-learning',
}

/* Sample data for the demo teacher. */
const tabs: DashboardTab[] = [
  {
    label: 'Lectures',
    heading: 'Lectures',
    columns: ['Course', 'Class', 'Latest lecture'],
    rows: [
      ['Web Development', 'IT, third year', 'Layouts with CSS Grid'],
      ['Programming Fundamentals', 'IT, first year', 'Functions and scope'],
    ],
  },
  {
    label: 'Join class',
    heading: 'Online classes',
    columns: ['Course', 'Class', 'Day', 'Time'],
    rows: [
      ['Web Development', 'IT, third year', 'Sunday', '10:00'],
      ['Programming Fundamentals', 'IT, first year', 'Thursday', '11:00'],
    ],
  },
  {
    label: 'Attendance',
    heading: 'Attendance',
    columns: ['Class', 'Students', 'Present last class', 'Absent last class'],
    rows: [
      ['Web Development, IT third year', '28', '25', '3'],
      ['Programming Fundamentals, IT first year', '41', '38', '3'],
    ],
  },
  {
    label: 'Assignments',
    heading: 'Assignments',
    columns: ['Assignment', 'Class', 'Due', 'Submitted'],
    rows: [
      ['Build a responsive page', 'IT, third year', 'Week 7', '9 of 28'],
      ['Write a grade calculator', 'IT, first year', 'Week 6', '37 of 41'],
    ],
  },
  {
    label: 'Reports',
    heading: 'Reports',
    columns: ['Report', 'Period', 'Status'],
    rows: [
      ['Attendance summary', 'Weeks 1 to 6', 'Ready'],
      ['Assignment results', 'Weeks 1 to 6', 'Ready'],
      ['Mid-term results', 'Week 9', 'Not yet available'],
    ],
  },
  {
    label: 'Notes',
    heading: 'Notes',
    columns: ['Class', 'Note'],
    rows: [
      ['IT, third year', 'Bring your laptop to the next practical lab.'],
      ['IT, first year', 'Revise loops before Thursday.'],
    ],
  },
]

export default function TeacherPage() {
  return (
    <Dashboard
      role="Teacher"
      name="Demo Teacher"
      details={[
        { label: 'Department', value: 'Information Technology' },
        { label: 'Lecturer type', value: 'Full-time' },
        { label: 'Teacher ID', value: 'DEMO-TEACHER' },
      ]}
      tabs={tabs}
    />
  )
}
