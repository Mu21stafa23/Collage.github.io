'use client'

import { useState } from 'react'
import { Badge, Bar, Card, Panel, ProfileBand, Stat, TabBar, buttonClass, quietButtonClass } from './ui'

/* ---- Sample data for the demo teacher ---------------------------------- */

const classes = [
  {
    course: 'Web Development',
    group: 'IT, third year',
    day: 'Sunday',
    time: '10:00',
    students: ['Ahmed', 'Sara', 'Omer', 'Fatima', 'Mohamed', 'Rania', 'Khalid', 'Mariam'],
    lectures: ['HTML structure', 'CSS selectors', 'The box model', 'Flexbox', 'Responsive design', 'Layouts with CSS Grid'],
  },
  {
    course: 'Programming Fundamentals',
    group: 'IT, first year',
    day: 'Thursday',
    time: '11:00',
    students: ['Hassan', 'Lina', 'Yousif', 'Amna', 'Tariq', 'Hiba'],
    lectures: ['Variables and types', 'Conditions', 'Loops', 'Arrays', 'Strings', 'Functions and scope'],
  },
]

const assignments = [
  { title: 'Build a responsive page', course: 'Web Development', due: 'Week 7', submitted: 3, total: 8 },
  { title: 'Write a grade calculator', course: 'Programming Fundamentals', due: 'Week 6', submitted: 5, total: 6 },
]

const reports = [
  { name: 'Attendance summary', period: 'Weeks 1 to 6', ready: true },
  { name: 'Assignment results', period: 'Weeks 1 to 6', ready: true },
  { name: 'Mid-term results', period: 'Week 9', ready: false },
]

const firstNotes = [
  { group: 'IT, third year', text: 'Bring your laptop to the next practical lab.' },
  { group: 'IT, first year', text: 'Revise loops before Thursday.' },
]

const tabs = ['Overview', 'Lectures', 'Join class', 'Attendance', 'Assignments', 'Reports', 'Notes']

/* ---- The screen --------------------------------------------------------- */

export default function TeacherDashboard() {
  const [tab, setTab] = useState('Overview')
  const [started, setStarted] = useState<string[]>([])
  const [selected, setSelected] = useState(classes[0].course)
  /* Names marked absent, per course. Everyone starts as present. */
  const [absent, setAbsent] = useState<Record<string, string[]>>({})
  const [notes, setNotes] = useState(firstNotes)
  const [noteGroup, setNoteGroup] = useState(classes[0].group)
  const [draft, setDraft] = useState('')

  const current = classes.find((item) => item.course === selected) ?? classes[0]
  const currentAbsent = absent[current.course] ?? []
  const totalStudents = classes.reduce((sum, item) => sum + item.students.length, 0)
  const toReview = assignments.reduce((sum, item) => sum + item.submitted, 0)

  function toggleAbsent(name: string) {
    setAbsent((record) => {
      const list = record[current.course] ?? []
      return {
        ...record,
        [current.course]: list.includes(name) ? list.filter((item) => item !== name) : [...list, name],
      }
    })
  }

  function postNote(event: React.FormEvent) {
    event.preventDefault()
    const text = draft.trim()
    if (!text) return
    setNotes((list) => [{ group: noteGroup, text }, ...list])
    setDraft('')
  }

  return (
    <>
      <ProfileBand
        role="Teacher"
        name="Demo Teacher"
        details={[
          { label: 'Department', value: 'Information Technology' },
          { label: 'Lecturer type', value: 'Full-time' },
          { label: 'Teacher ID', value: 'DEMO-TEACHER' },
        ]}
      />

      <div className="mx-auto max-w-6xl px-5 py-10 lg:px-8">
        <TabBar label="Teacher sections" tabs={tabs} active={tab} onChange={setTab} />

        {tab === 'Overview' && (
          <Panel title="Overview">
            <div className="grid gap-6 sm:grid-cols-3">
              <Stat label="Next class" value={classes[0].course} note={`${classes[0].day} at ${classes[0].time}`} />
              <Stat label="Students" value={String(totalStudents)} note={`Across ${classes.length} classes`} />
              <Stat label="Submissions to review" value={String(toReview)} note={`From ${assignments.length} assignments`} />
            </div>

            <Card className="mt-6">
              <h3 className="font-display text-xl font-semibold">My classes</h3>
              <ul className="mt-4 divide-y divide-mist">
                {classes.map((item) => (
                  <li key={item.course} className="flex flex-wrap justify-between gap-x-6 gap-y-1 py-3">
                    <span className="font-semibold">{item.course}</span>
                    <span className="text-slate">
                      {item.group}, {item.students.length} students, {item.day} at {item.time}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          </Panel>
        )}

        {tab === 'Lectures' && (
          <Panel title="Lectures">
            <div className="space-y-4">
              {classes.map((item) => (
                <details key={item.course} className="group border border-mist bg-white">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 sm:px-6">
                    <span>
                      <span className="block font-display text-xl font-semibold">{item.course}</span>
                      <span className="text-slate">{item.group}</span>
                    </span>
                    <span className="flex-none text-slate">
                      {item.lectures.length} lectures
                      <span className="ml-3 inline-block transition-transform group-open:rotate-180" aria-hidden="true">
                        ▾
                      </span>
                    </span>
                  </summary>
                  <ol className="divide-y divide-mist border-t border-mist">
                    {item.lectures.map((lecture, index) => (
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
              {classes.map((item) => {
                const isLive = started.includes(item.course)
                return (
                  <li key={item.course}>
                    <Card className="flex h-full items-center justify-between gap-4">
                      <div>
                        <p className="font-display text-xl font-semibold">{item.course}</p>
                        <p className="mt-1 text-slate">
                          {item.group}, {item.day} at {item.time}
                        </p>
                        {isLive && (
                          <p className="mt-2">
                            <Badge tone="good">Class is open</Badge>
                          </p>
                        )}
                      </div>
                      <button
                        type="button"
                        className={isLive ? quietButtonClass : buttonClass}
                        onClick={() =>
                          setStarted((list) =>
                            isLive ? list.filter((name) => name !== item.course) : [...list, item.course],
                          )
                        }
                      >
                        {isLive ? 'End class' : 'Start class'}
                      </button>
                    </Card>
                  </li>
                )
              })}
            </ul>
            <p className="mt-6 text-slate">This is a demo, so no real class opens.</p>
          </Panel>
        )}

        {tab === 'Attendance' && (
          <Panel title="Take attendance">
            <label className="block max-w-sm">
              <span className="font-medium">Class</span>
              <select
                value={selected}
                onChange={(event) => setSelected(event.target.value)}
                className="mt-2 block w-full border border-mist bg-white px-4 py-3"
              >
                {classes.map((item) => (
                  <option key={item.course} value={item.course}>
                    {item.course} ({item.group})
                  </option>
                ))}
              </select>
            </label>

            <p className="mt-6 font-semibold" aria-live="polite">
              Present {current.students.length - currentAbsent.length} of {current.students.length}
            </p>

            <ul className="mt-4 divide-y divide-mist border border-mist bg-white">
              {current.students.map((name) => {
                const isAbsent = currentAbsent.includes(name)
                return (
                  <li key={name} className="flex items-center justify-between gap-4 px-5 py-3 sm:px-6">
                    <span className="font-medium">{name}</span>
                    <span className="flex items-center gap-4">
                      <Badge tone={isAbsent ? 'warn' : 'good'}>{isAbsent ? 'Absent' : 'Present'}</Badge>
                      <button type="button" className={quietButtonClass} onClick={() => toggleAbsent(name)}>
                        Mark {isAbsent ? 'present' : 'absent'}
                      </button>
                    </span>
                  </li>
                )
              })}
            </ul>
          </Panel>
        )}

        {tab === 'Assignments' && (
          <Panel title="Assignments">
            <ul className="space-y-4">
              {assignments.map((item) => (
                <li key={item.title}>
                  <Card>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                      <p className="font-display text-xl font-semibold">{item.title}</p>
                      <p className="text-slate">
                        {item.course}, due {item.due}
                      </p>
                    </div>
                    <p className="mt-4 text-sm text-slate">
                      {item.submitted} of {item.total} submitted
                    </p>
                    <div className="mt-2">
                      <Bar
                        value={Math.round((item.submitted / item.total) * 100)}
                        label={`${item.title} submissions`}
                      />
                    </div>
                  </Card>
                </li>
              ))}
            </ul>
          </Panel>
        )}

        {tab === 'Reports' && (
          <Panel title="Reports">
            <ul className="divide-y divide-mist border border-mist bg-white">
              {reports.map((report) => (
                <li key={report.name} className="flex flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-6">
                  <div>
                    <p className="font-semibold">{report.name}</p>
                    <p className="text-sm text-slate">{report.period}</p>
                  </div>
                  <Badge tone={report.ready ? 'good' : 'neutral'}>{report.ready ? 'Ready' : 'Not yet available'}</Badge>
                </li>
              ))}
            </ul>
          </Panel>
        )}

        {tab === 'Notes' && (
          <Panel title="Notes to classes">
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <h3 className="font-display text-xl font-semibold">Post a note</h3>
                <form onSubmit={postNote} className="mt-4 space-y-4">
                  <label className="block">
                    <span className="font-medium">Class</span>
                    <select
                      value={noteGroup}
                      onChange={(event) => setNoteGroup(event.target.value)}
                      className="mt-2 block w-full border border-mist bg-white px-4 py-3"
                    >
                      {classes.map((item) => (
                        <option key={item.group} value={item.group}>
                          {item.group}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="block">
                    <span className="font-medium">Note</span>
                    <textarea
                      value={draft}
                      onChange={(event) => setDraft(event.target.value)}
                      rows={3}
                      className="mt-2 block w-full border border-mist px-4 py-3"
                    />
                  </label>
                  <button type="submit" className={buttonClass} disabled={draft.trim() === ''}>
                    Post note
                  </button>
                </form>
              </Card>

              <Card>
                <h3 className="font-display text-xl font-semibold">Posted notes</h3>
                <ul className="mt-4 divide-y divide-mist">
                  {notes.map((note, index) => (
                    <li key={`${index}-${note.text}`} className="py-3">
                      <p className="text-sm font-semibold text-crimson">{note.group}</p>
                      <p className="mt-1">{note.text}</p>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-slate">New notes stay only until you leave this page.</p>
              </Card>
            </div>
          </Panel>
        )}
      </div>
    </>
  )
}
