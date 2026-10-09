'use client'

import { useState } from 'react'
import { Badge, Bar, Card, Panel, ProfileBand, Stat, TabBar, buttonClass, quietButtonClass } from './ui'
import { tx, ui, type Lang } from '../../data/i18n'

/* ---- Sample data for the demo student ---------------------------------- */

const courses = [
  {
    name: tx('Web Development', 'تطوير الويب'),
    day: tx('Sunday', 'الأحد'),
    time: '10:00',
    attended: 11,
    missed: 1,
    lectures: [
      tx('HTML structure', 'بنية HTML'),
      tx('CSS selectors', 'محددات CSS'),
      tx('The box model', 'نموذج الصندوق'),
      tx('Flexbox', 'Flexbox'),
      tx('Responsive design', 'التصميم المتجاوب'),
      tx('Layouts with CSS Grid', 'التخطيط باستخدام CSS Grid'),
    ],
  },
  {
    name: tx('Database Systems', 'نظم قواعد البيانات'),
    day: tx('Monday', 'الاثنين'),
    time: '12:00',
    attended: 10,
    missed: 2,
    lectures: [
      tx('What a database is', 'ما هي قاعدة البيانات'),
      tx('Tables and keys', 'الجداول والمفاتيح'),
      tx('Basic queries', 'الاستعلامات الأساسية'),
      tx('Filtering and sorting', 'التصفية والترتيب'),
      tx('Normalization', 'تطبيع البيانات'),
      tx('Joins and relationships', 'الربط والعلاقات'),
    ],
  },
  {
    name: tx('Computer Networks', 'شبكات الحاسوب'),
    day: tx('Wednesday', 'الأربعاء'),
    time: '09:00',
    attended: 9,
    missed: 1,
    lectures: [
      tx('How networks work', 'كيف تعمل الشبكات'),
      tx('The OSI model', 'نموذج OSI'),
      tx('Ethernet and switching', 'الإيثرنت والتبديل'),
      tx('Routing basics', 'أساسيات التوجيه'),
      tx('IP addressing', 'عنونة IP'),
    ],
  },
  {
    name: tx('Programming Fundamentals', 'أساسيات البرمجة'),
    day: tx('Thursday', 'الخميس'),
    time: '11:00',
    attended: 12,
    missed: 0,
    lectures: [
      tx('Variables and types', 'المتغيرات والأنواع'),
      tx('Conditions', 'الشروط'),
      tx('Loops', 'الحلقات'),
      tx('Arrays', 'المصفوفات'),
      tx('Strings', 'النصوص'),
      tx('Functions and scope', 'الدوال والنطاق'),
    ],
  },
]

type Status = 'notStarted' | 'inProgress' | 'submitted'

const firstAssignments: { title: { en: string; ar: string }; course: number; dueWeek: number; status: Status }[] = [
  { title: tx('Build a responsive page', 'بناء صفحة متجاوبة'), course: 0, dueWeek: 7, status: 'notStarted' },
  { title: tx('Design a library database', 'تصميم قاعدة بيانات لمكتبة'), course: 1, dueWeek: 7, status: 'inProgress' },
  { title: tx('Subnetting exercises', 'تمارين تقسيم الشبكات'), course: 2, dueWeek: 6, status: 'submitted' },
]

const calendar = [
  { week: 7, event: tx('Web Development assignment due', 'موعد تسليم واجب تطوير الويب') },
  { week: 7, event: tx('Database Systems assignment due', 'موعد تسليم واجب نظم قواعد البيانات') },
  { week: 8, event: tx('Mid-term exams begin', 'بداية امتحانات منتصف الفصل') },
  { week: 9, event: tx('Mid-term exams end', 'نهاية امتحانات منتصف الفصل') },
  { week: 14, event: tx('Final project presentations', 'عروض المشاريع النهائية') },
]

const teacherNotes = [
  { course: 0, text: tx('Bring your laptop to the next practical lab.', 'أحضر حاسوبك المحمول للمعمل العملي القادم.') },
  { course: 1, text: tx('Read chapter 4 before Monday.', 'اقرأ الفصل الرابع قبل يوم الاثنين.') },
]

const statusTone = { notStarted: 'warn', inProgress: 'info', submitted: 'good' } as const

const tabKeys = ['overview', 'lectures', 'join', 'attendance', 'assignments', 'calendar', 'notes'] as const

type TabKey = (typeof tabKeys)[number]

function rate(attended: number, missed: number) {
  return Math.round((attended / (attended + missed)) * 100)
}

/* ---- The screen --------------------------------------------------------- */

export default function StudentDashboard({ lang }: { lang: Lang }) {
  const t = ui[lang].dash
  const [tab, setTab] = useState<TabKey>('overview')
  /* Indexes of the courses whose class the student has joined. */
  const [joined, setJoined] = useState<number[]>([])
  const [assignments, setAssignments] = useState(firstAssignments)
  const [myNotes, setMyNotes] = useState<string[]>([])
  const [draft, setDraft] = useState('')

  const tabLabels = tabKeys.map((key) => t.tabs[key])
  const totalAttended = courses.reduce((sum, course) => sum + course.attended, 0)
  const totalMissed = courses.reduce((sum, course) => sum + course.missed, 0)
  const open = assignments.filter((item) => item.status !== 'submitted')

  /* Moves an assignment one step forward: not started, in progress, submitted. */
  function advance(index: number) {
    setAssignments((list) =>
      list.map((item, position) =>
        position === index
          ? { ...item, status: item.status === 'notStarted' ? 'inProgress' : 'submitted' }
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

  const teacherNoteList = (
    <ul className="mt-4 divide-y divide-mist">
      {teacherNotes.map((note) => (
        <li key={note.text.en} className="py-3">
          <p className="text-sm font-semibold text-crimson">{courses[note.course].name[lang]}</p>
          <p className="mt-1">{note.text[lang]}</p>
        </li>
      ))}
    </ul>
  )

  return (
    <>
      <ProfileBand
        role={t.student}
        name={lang === 'ar' ? 'طالب تجريبي' : 'Demo Student'}
        details={[
          { label: t.program, value: lang === 'ar' ? 'بكالوريوس العلوم في تقنية المعلومات' : 'B.Sc. in Information Technology' },
          { label: t.year, value: lang === 'ar' ? 'السنة الثالثة' : 'Third year' },
          { label: t.universityNumber, value: 'DEMO-STUDENT' },
        ]}
      />

      <div className="mx-auto max-w-6xl px-5 py-10 lg:px-8">
        <TabBar
          label={t.studentSections}
          tabs={tabLabels}
          active={t.tabs[tab]}
          onChange={(label) => setTab(tabKeys[tabLabels.indexOf(label)])}
        />

        {tab === 'overview' && (
          <Panel title={t.tabs.overview} sample={t.sample}>
            <div className="grid gap-6 sm:grid-cols-3">
              <Stat label={t.nextClass} value={courses[0].name[lang]} note={t.at(courses[0].day[lang], courses[0].time)} />
              <Stat
                label={t.attendanceTerm}
                value={`${rate(totalAttended, totalMissed)}%`}
                note={t.attendedOf(totalAttended, totalAttended + totalMissed)}
              />
              <Stat
                label={t.toHandIn}
                value={String(open.length)}
                note={open.length === 0 ? t.allSubmitted : t.next(open[0].title[lang])}
              />
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <Card>
                <h3 className="font-display text-xl font-semibold">{t.comingUp}</h3>
                <ul className="mt-4 divide-y divide-mist">
                  {calendar.slice(0, 3).map((item) => (
                    <li key={item.event.en} className="flex justify-between gap-4 py-3">
                      <span>{item.event[lang]}</span>
                      <span className="flex-none text-slate">{t.week(item.week)}</span>
                    </li>
                  ))}
                </ul>
              </Card>
              <Card>
                <h3 className="font-display text-xl font-semibold">{t.fromTeachers}</h3>
                {teacherNoteList}
              </Card>
            </div>
          </Panel>
        )}

        {tab === 'lectures' && (
          <Panel title={t.tabs.lectures} sample={t.sample}>
            <div className="space-y-4">
              {courses.map((course) => (
                <details key={course.name.en} className="group border border-mist bg-white">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 sm:px-6">
                    <span className="font-display text-xl font-semibold">{course.name[lang]}</span>
                    <span className="flex-none text-slate">
                      {t.lecturesCount(course.lectures.length)}
                      <span className="ms-3 inline-block transition-transform group-open:rotate-180" aria-hidden="true">
                        ▾
                      </span>
                    </span>
                  </summary>
                  <ol className="divide-y divide-mist border-t border-mist">
                    {course.lectures.map((lecture, index) => (
                      <li key={lecture.en} className="flex gap-4 px-5 py-3 sm:px-6">
                        <span className="w-24 flex-none text-slate">{t.week(index + 1)}</span>
                        <span>{lecture[lang]}</span>
                      </li>
                    ))}
                  </ol>
                </details>
              ))}
            </div>
          </Panel>
        )}

        {tab === 'join' && (
          <Panel title={t.onlineClasses} sample={t.sample}>
            <ul className="grid gap-4 sm:grid-cols-2">
              {courses.map((course, index) => {
                const isJoined = joined.includes(index)
                return (
                  <li key={course.name.en}>
                    <Card className="flex h-full items-center justify-between gap-4">
                      <div>
                        <p className="font-display text-xl font-semibold">{course.name[lang]}</p>
                        <p className="mt-1 text-slate">{t.at(course.day[lang], course.time)}</p>
                      </div>
                      <button
                        type="button"
                        className={isJoined ? quietButtonClass : buttonClass}
                        onClick={() =>
                          setJoined((list) => (isJoined ? list.filter((item) => item !== index) : [...list, index]))
                        }
                      >
                        {isJoined ? t.leaveClass : t.joinClass}
                      </button>
                    </Card>
                  </li>
                )
              })}
            </ul>
            <p className="mt-6 text-slate" aria-live="polite">
              {joined.length === 0
                ? t.notJoined
                : t.youAreIn(joined.map((index) => courses[index].name[lang]).join(lang === 'ar' ? '، ' : ', '))}
            </p>
          </Panel>
        )}

        {tab === 'attendance' && (
          <Panel title={t.tabs.attendance} sample={t.sample}>
            <Card>
              <ul className="divide-y divide-mist">
                {courses.map((course) => (
                  <li
                    key={course.name.en}
                    className="grid items-center gap-x-6 gap-y-2 py-4 first:pt-0 last:pb-0 sm:grid-cols-[16rem_1fr]"
                  >
                    <div>
                      <p className="font-semibold">{course.name[lang]}</p>
                      <p className="text-sm text-slate">{t.attendedMissed(course.attended, course.missed)}</p>
                    </div>
                    <Bar value={rate(course.attended, course.missed)} label={t.attendanceOf(course.name[lang])} />
                  </li>
                ))}
              </ul>
            </Card>
          </Panel>
        )}

        {tab === 'assignments' && (
          <Panel title={t.tabs.assignments} sample={t.sample}>
            <ul className="space-y-4">
              {assignments.map((item, index) => (
                <li key={item.title.en}>
                  <Card className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="font-display text-xl font-semibold">{item.title[lang]}</p>
                      <p className="mt-1 text-slate">{t.due(courses[item.course].name[lang], t.week(item.dueWeek))}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge tone={statusTone[item.status]}>{t.status[item.status]}</Badge>
                      {item.status !== 'submitted' && (
                        <button type="button" className={buttonClass} onClick={() => advance(index)}>
                          {item.status === 'notStarted' ? t.start : t.submit}
                        </button>
                      )}
                    </div>
                  </Card>
                </li>
              ))}
            </ul>
          </Panel>
        )}

        {tab === 'calendar' && (
          <Panel title={t.tabs.calendar} sample={t.sample}>
            <ol className="border-s-2 border-mist ps-6">
              {calendar.map((item) => (
                <li key={item.event.en} className="relative pb-6 last:pb-0">
                  <span aria-hidden="true" className="absolute -start-[1.95rem] top-1.5 h-3 w-3 rounded-full bg-crimson" />
                  <p className="font-display text-lg font-semibold text-crimson">{t.week(item.week)}</p>
                  <p className="mt-1">{item.event[lang]}</p>
                </li>
              ))}
            </ol>
          </Panel>
        )}

        {tab === 'notes' && (
          <Panel title={t.tabs.notes} sample={t.sample}>
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <h3 className="font-display text-xl font-semibold">{t.fromTeachersShort}</h3>
                {teacherNoteList}
              </Card>

              <Card>
                <h3 className="font-display text-xl font-semibold">{t.myNotes}</h3>
                <form onSubmit={addNote} className="mt-4">
                  <label className="block">
                    <span className="font-medium">{t.newNote}</span>
                    <textarea
                      value={draft}
                      onChange={(event) => setDraft(event.target.value)}
                      rows={3}
                      className="mt-2 block w-full border border-mist px-4 py-3"
                    />
                  </label>
                  <button type="submit" className={`${buttonClass} mt-3`} disabled={draft.trim() === ''}>
                    {t.addNote}
                  </button>
                </form>
                {myNotes.length === 0 ? (
                  <p className="mt-4 text-slate">{t.noNotes}</p>
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
