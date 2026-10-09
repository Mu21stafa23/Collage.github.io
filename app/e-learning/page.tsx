import type { Metadata } from 'next'
import PageHeader from '../components/PageHeader'
import SignInForm from '../components/SignInForm'

export const metadata: Metadata = {
  title: 'E-learning',
}

const features = [
  { title: 'Lectures', text: 'Lecture material for every course, in one list.' },
  { title: 'Online classes', text: 'The weekly schedule, with a way to join each class.' },
  { title: 'Attendance', text: 'Attendance per course for students, and per class for teachers.' },
  { title: 'Assignments', text: 'What is due, when, and what has been handed in.' },
  { title: 'Calendar and notes', text: 'Key dates for the term and notes from teachers.' },
]

export default function ELearningPage() {
  return (
    <>
      <PageHeader
        title="E-learning"
        intro="Lectures, classes, attendance and assignments for students and teachers."
      />

      <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">
        <SignInForm />

        <div>
          <h2 className="font-display text-3xl font-bold">What is inside</h2>
          <dl className="mt-6 divide-y divide-mist border-y border-mist">
            {features.map((feature) => (
              <div key={feature.title} className="py-5">
                <dt className="font-display text-xl font-semibold">{feature.title}</dt>
                <dd className="mt-1 text-slate">{feature.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  )
}
