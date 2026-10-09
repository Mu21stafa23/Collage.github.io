'use client'

import { useState } from 'react'
import { Badge, Bar, Card, Panel, ProfileBand, Stat, TabBar, buttonClass, quietButtonClass } from './ui'

/* ---- Sample data for the demo student ---------------------------------- */

const courses = [
  {
    name: 'Web Development',
    day: 'Sunday',
    time: '10:00',
    attended: 11,
    missed: 1,
    lectures: ['HTML structure', 'CSS selectors', 'The box model', 'Flexbox', 'Responsive design', 'Layouts with CSS Grid'],
  },
  {
    name: 'Database Systems',
    day: 'Monday',
    time: '12:00',
    attended: 10,
    missed: 2,
    lectures: ['What a database is', 'Tables and keys', 'Basic queries', 'Filtering and sorting', 'Normalization', 'Joins and relationships'],
  },
  {
    name: 'Computer Networks',
    day: 'Wednesday',
    time: '09:00',
    attended: 9,
    missed: 1,
    lectures: ['How networks work', 'The OSI model', 'Ethernet and switching', 'Routing basics', 'IP addressing'],
  },
  {
    name: 'Programming Fundamentals',
    day: 'Thursday',
    time: '11:00',
    attended: 12,
    missed: 0,
    lectures: ['Variables and types', 'Conditions', 'Loops', 'Arrays', 'Strings', 'Functions and scope'],
  },
]

type Status = 'Not started' | 'In progress' | 'Submitted'

const firstAssignments: { title: string; course: string; due: string; status: Status }[] = [
  { title: 'Build a responsive page', course: 'Web Development', due: 'Week 7', status: 'Not started' },
  { title: 'Design a library database', course: 'Database Systems', due: 'Week 7', status: 'In progress' },
  { title: 'Subnetting exercises', course: 'Computer Networks', due: 'Week 6', status: 'Submitted' },
]

const calendar = [
  { when: 'Week 7', event: 'Web Development assignment due' },
  { when: 'Week 7', event: 'Database Systems assignment due' },
  { when: 'Week 8', event: 'Mid-term exams begin' },
  { when: 'Week 9', event: 'Mid-term exams end' },
  { when: 'Week 14', event: 'Final project presentations' },
]

const teacherNotes = [
  { course: 'Web Development', text: 'Bring your laptop to the next practical lab.' },
  { course: 'Database Systems', text: 'Read chapter 4 before Monday.' },
]

const statusTone = { 'Not started': 'warn', 'In progress': 'info', Submitted: 'good' } as const

const tabs = ['Overview', 'Lectures', 'Join class', 'Attendance', 'Assignments', 'Calendar', 'Notes']

function rate(attended: number, missed: number) {
  return Math.round((attended / (attended + missed)) * 100)
}

/* ---- The screen --------------------------------------------------------- */

export default function StudentDashboard() {
  const [tab, setTab] = useState('Overview')
  const [joined, setJoined] = useState<string[]>([])
  const [assignments, setAssignments] = useState(firstAssignments)
  const [myNotes, setMyNotes] = useState<string[]>([])
  const [draft, setDraft] = useState('')

  const totalAttended = courses.reduce((sum, course) => sum + course.attended, 0)
  const totalMissed = courses.reduce((sum, course) => sum + course.missed, 0)
  const open = assignments.filter((item) => item.status !== 'Submitted')

  /* Moves an assignment one step forward: not started, in progress, submitted. */
  function advance(title: string) {
    setAssignments((list) =>
      list.map((item) =>
        item.title === title
          ? { ...item, status: item.status === 'Not started' ? 'In progress' : 'Submitted' }
          : item,
      ),
    )
  }

  function addNote(event: React.FormEvent) {
    event.preventDefault()
    const text = draft.trim()
    if (!text) return
    setMyNotes((list) => [text, ...list])
    setDraft('')
  }

  return (
    <>
      <ProfileBand
        role="Student"
        name="Demo Student"
        details={[
          { label: 'Program', value: 'B.Sc. in Information Technology' },
          { label: 'Year', value: 'Third year' },
          { label: 'University number', value: 'DEMO-STUDENT' },
        ]}
      />

      <div className="mx-auto max-w-6xl px-5 py-10 lg:px-8">
        <TabBar label="Student sections" tabs={tabs} active={tab} onChange={setTab} />

        {tab === 'Overview' && (
          <Panel title="Overview">
            <div className="grid gap-6 sm:grid-cols-3">
              <Stat label="Next class" value={courses[0].name} note={`${courses[0].day} at ${courses[0].time}`} />
              <Stat
                label="Attendance this term"
                value={`${rate(totalAttended, totalMissed)}%`}
                note={`${totalAttended} of ${totalAttended + totalMissed} classes attended`}
              />
              <Stat
                label="Assignments to hand in"
                value={String(open.length)}
                note={open.length === 0 ? 'Everything is submitted' : `Next: ${open[0].title}`}
              />
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <Card>
                <h3 className="font-display text-xl font-semibold">Coming up</h3>
                <ul className="mt-4 divide-y divide-mist">
                  {calendar.slice(0, 3).map((item) => (
                    <li key={item.event} className="flex justify-between gap-4 py-3">
                      <span>{item.event}</span>
                      <span className="flex-none text-slate">{item.when}</span>
                    </li>
                  ))}
                </ul>
              </Card>
              <Card>
                <h3 className="font-display text-xl font-semibold">Notes from teachers</h3>
                <ul className="mt-4 divide-y divide-mist">
                  {teacherNotes.map((note) => (
                    <li key={note.text} className="py-3">
                      <p className="text-sm font-semibold text-crimson">{note.course}</p>
                      <p className="mt-1">{note.text}</p>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </Panel>
        )}

        {tab === 'Lectures' && (
          <Panel title="Lectures">
            <div className="space-y-4">
              {courses.map((course) => (
                <details key={course.name} className="group border border-mist bg-white">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 sm:px-6">
                    <span className="font-display text-xl font-semibold">{course.name}</span>
                    <span className="flex-none text-slate">
                      {course.lectures.length} lectures
                      <span className="ml-3 inline-block transition-transform group-open:rotate-180" aria-hidden="true">
                        ▾
                      </span>
                    </span>
                  </summary>
                  <ol className="divide-y divide-mist border-t border-mist">
                    {course.lectures.map((lecture, index) => (
                      <li key={lecture} className="flex gap-4 px-5 py-3 sm:px-6">
                        <span className="w-16 flex-none text-slate">Week {index + 1}</span>
                        <span>{lecture}</span>
                      </li>
                    ))}
                  </ol>
                </details>
              ))}
            </div>
          </Panel>
        )}

        {tab === 'Join class' && (
          <Panel title="Online classes">
            <ul className="grid gap-4 sm:grid-cols-2">
              {courses.map((course) => {
                const isJoined = joined.includes(course.name)
                return (
                  <li key={course.name}>
                    <Card className="flex h-full items-center justify-between gap-4">
                      <div>
                        <p className="font-display text-xl font-semibold">{course.name}</p>
                        <p className="mt-1 text-slate">
                          {course.day} at {course.time}
                        </p>
                      </div>
                      <button
                        type="button"
                        className={isJoined ? quietButtonClass : buttonClass}
                        onClick={() =>
                          setJoined((list) =>
                            isJoined ? list.filter((name) => name !== course.name) : [...list, course.name],
                          )
                        }
                      >
                        {isJoined ? 'Leave class' : 'Join class'}
                      </button>
                    </Card>
                  </li>
                )
              })}
            </ul>
            <p className="mt-6 text-slate" aria-live="polite">
              {joined.length === 0
                ? 'You have not joined a class yet.'
                : `You are in: ${joined.join(', ')}. This is a demo, so no real class opens.`}
            </p>
          </Panel>
        )}

        {tab === 'Attendance' && (
          <Panel title="Attendance">
            <Card>
              <ul className="divide-y divide-mist">
                {courses.map((course) => (
                  <li key={course.name} className="grid items-center gap-x-6 gap-y-2 py-4 first:pt-0 last:pb-0 sm:grid-cols-[16rem_1fr]">
                    <div>
                      <p className="font-semibold">{course.name}</p>
                      <p className="text-sm text-slate">
                        Attended {course.attended}, missed {course.missed}
                      </p>
                    </div>
                    <Bar value={rate(course.attended, course.missed)} label={`${course.name} attendance`} />
                  </li>
                ))}
              </ul>
            </Card>
          </Panel>
        )}

        {tab === 'Assignments' && (
          <Panel title="Assignments">
            <ul className="space-y-4">
              {assignments.map((item) => (
                <li key={item.title}>
                  <Card className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="font-display text-xl font-semibold">{item.title}</p>
                      <p className="mt-1 text-slate">
                        {item.course}, due {item.due}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge tone={statusTone[item.status]}>{item.status}</Badge>
                      {item.status !== 'Submitted' && (
                        <button type="button" className={buttonClass} onClick={() => advance(item.title)}>
                          {item.status === 'Not started' ? 'Start' : 'Submit'}
                        </button>
                      )}
                    </div>
                  </Card>
                </li>
              ))}
            </ul>
          </Panel>
        )}

        {tab === 'Calendar' && (
          <Panel title="Calendar">
            <ol className="border-l-2 border-mist pl-6">
              {calendar.map((item) => (
                <li key={item.event} className="relative pb-6 last:pb-0">
                  <span aria-hidden="true" className="absolute -left-[1.95rem] top-1.5 h-3 w-3 rounded-full bg-crimson" />
                  <p className="font-display text-lg font-semibold text-crimson">{item.when}</p>
                  <p className="mt-1">{item.event}</p>
                </li>
              ))}
            </ol>
          </Panel>
        )}

        {tab === 'Notes' && (
          <Panel title="Notes">
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <h3 className="font-display text-xl font-semibold">From teachers</h3>
                <ul className="mt-4 divide-y divide-mist">
                  {teacherNotes.map((note) => (
                    <li key={note.text} className="py-3">
                      <p className="text-sm font-semibold text-crimson">{note.course}</p>
                      <p className="mt-1">{note.text}</p>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card>
                <h3 className="font-display text-xl font-semibold">My notes</h3>
                <form onSubmit={addNote} className="mt-4">
                  <label className="block">
                    <span className="font-medium">New note</span>
                    <textarea
                      value={draft}
                      onChange={(event) => setDraft(event.target.value)}
                      rows={3}
                      className="mt-2 block w-full border border-mist px-4 py-3"
                    />
                  </label>
                  <button type="submit" className={`${buttonClass} mt-3`} disabled={draft.trim() === ''}>
                    Add note
                  </button>
                </form>
                {myNotes.length === 0 ? (
                  <p className="mt-4 text-slate">You have no notes yet. Notes stay only until you leave this page.</p>
                ) : (
                  <ul className="mt-4 divide-y divide-mist">
                    {myNotes.map((note, index) => (
                      <li key={`${index}-${note}`} className="py-3">
                        {note}
                      </li>
                    ))}
                  </ul>
                )}
              </Card>
            </div>
          </Panel>
        )}
      </div>
    </>
  )
}
