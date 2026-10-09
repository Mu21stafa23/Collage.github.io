import type { Metadata } from 'next'
import Dashboard, { type DashboardTab } from '../../components/Dashboard'

export const metadata: Metadata = {
  title: 'Student e-learning',
}

/* Sample data for the demo student. */
const tabs: DashboardTab[] = [
  {
    label: 'Lectures',
    heading: 'Lectures',
    columns: ['Course', 'Latest lecture', 'Week'],
    rows: [
      ['Web Development', 'Layouts with CSS Grid', 'Week 6'],
      ['Database Systems', 'Joins and relationships', 'Week 6'],
      ['Computer Networks', 'IP addressing', 'Week 5'],
      ['Programming Fundamentals', 'Functions and scope', 'Week 6'],
    ],
  },
  {
    label: 'Join class',
    heading: 'Online classes',
    columns: ['Course', 'Day', 'Time'],
    rows: [
      ['Web Development', 'Sunday', '10:00'],
      ['Database Systems', 'Monday', '12:00'],
      ['Computer Networks', 'Wednesday', '09:00'],
      ['Programming Fundamentals', 'Thursday', '11:00'],
    ],
  },
  {
    label: 'Attendance',
    heading: 'Attendance',
    columns: ['Course', 'Attended', 'Missed', 'Rate'],
    rows: [
      ['Web Development', '11', '1', '92%'],
      ['Database Systems', '10', '2', '83%'],
      ['Computer Networks', '9', '1', '90%'],
      ['Programming Fundamentals', '12', '0', '100%'],
    ],
  },
  {
    label: 'Assignments',
    heading: 'Assignments',
    columns: ['Assignment', 'Course', 'Due', 'Status'],
    rows: [
      ['Build a responsive page', 'Web Development', 'Week 7', 'Not started'],
      ['Design a library database', 'Database Systems', 'Week 7', 'In progress'],
      ['Subnetting exercises', 'Computer Networks', 'Week 6', 'Submitted'],
    ],
  },
  {
    label: 'Calendar',
    heading: 'Calendar',
    columns: ['When', 'Event'],
    rows: [
      ['Week 7', 'Web Development assignment due'],
      ['Week 8', 'Mid-term exams begin'],
      ['Week 9', 'Mid-term exams end'],
      ['Week 14', 'Final project presentations'],
    ],
  },
  {
    label: 'Notes',
    heading: 'Notes',
    columns: ['Course', 'Note'],
    rows: [
      ['Web Development', 'Bring your laptop to the next practical lab.'],
      ['Database Systems', 'Read chapter 4 before Monday.'],
    ],
  },
]

export default function StudentPage() {
  return (
    <Dashboard
      role="Student"
      name="Demo Student"
      details={[
        { label: 'Program', value: 'B.Sc. in Information Technology' },
        { label: 'Year', value: 'Third year' },
        { label: 'University number', value: 'DEMO-STUDENT' },
      ]}
      tabs={tabs}
    />
  )
}
