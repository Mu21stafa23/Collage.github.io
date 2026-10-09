'use client'

import { useState } from 'react'
import { Badge, Bar, Card, Panel, ProfileBand, Stat, TabBar, buttonClass, quietButtonClass } from './ui'
import { tx, ui, type Lang } from '../../data/i18n'

/* ---- Sample data for the demo teacher ---------------------------------- */

const classes = [
  {
    course: tx('Web Development', 'تطوير الويب'),
    group: tx('IT, third year', 'تقنية المعلومات، السنة الثالثة'),
    day: tx('Sunday', 'الأحد'),
    time: '10:00',
    students: [
      tx('Ahmed', 'أحمد'),
      tx('Sara', 'سارة'),
      tx('Omer', 'عمر'),
      tx('Fatima', 'فاطمة'),
      tx('Mohamed', 'محمد'),
      tx('Rania', 'رانيا'),
      tx('Khalid', 'خالد'),
      tx('Mariam', 'مريم'),
    ],
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
    course: tx('Programming Fundamentals', 'أساسيات البرمجة'),
    group: tx('IT, first year', 'تقنية المعلومات، السنة الأولى'),
    day: tx('Thursday', 'الخميس'),
    time: '11:00',
    students: [
      tx('Hassan', 'حسن'),
      tx('Lina', 'لينا'),
      tx('Yousif', 'يوسف'),
      tx('Amna', 'آمنة'),
      tx('Tariq', 'طارق'),
      tx('Hiba', 'هبة'),
    ],
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

const assignments = [
  { title: tx('Build a responsive page', 'بناء صفحة متجاوبة'), course: 0, dueWeek: 7, submitted: 3, total: 8 },
  { title: tx('Write a grade calculator', 'كتابة حاسبة درجات'), course: 1, dueWeek: 6, submitted: 5, total: 6 },
]

const reports = [
  { name: tx('Attendance summary', 'ملخص الحضور'), period: tx('Weeks 1 to 6', 'الأسابيع 1 إلى 6'), ready: true },
  { name: tx('Assignment results', 'نتائج الواجبات'), period: tx('Weeks 1 to 6', 'الأسابيع 1 إلى 6'), ready: true },
  { name: tx('Mid-term results', 'نتائج منتصف الفصل'), period: tx('Week 9', 'الأسبوع 9'), ready: false },
]

/* A note is either one of the sample notes (in both languages) or one the
   teacher typed during this visit. */
type Note = { group: number; text: string | { en: string; ar: string } }

const firstNotes: Note[] = [
  { group: 0, text: tx('Bring your laptop to the next practical lab.', 'أحضروا حواسيبكم المحمولة للمعمل العملي القادم.') },
  { group: 1, text: tx('Revise loops before Thursday.', 'راجعوا الحلقات قبل يوم الخميس.') },
]

const tabKeys = ['overview', 'lectures', 'join', 'attendance', 'assignments', 'reports', 'notes'] as const

type TabKey = (typeof tabKeys)[number]

/* ---- The screen --------------------------------------------------------- */

export default function TeacherDashboard({ lang }: { lang: Lang }) {
  const t = ui[lang].dash
  const [tab, setTab] = useState<TabKey>('overview')
  /* Indexes of the classes that are open right now. */
  const [started, setStarted] = useState<number[]>([])
  const [selected, setSelected] = useState(0)
  /* For each class, the indexes of the students marked absent. */
  const [absent, setAbsent] = useState<Record<number, number[]>>({})
  const [notes, setNotes] = useState(firstNotes)
  const [noteGroup, setNoteGroup] = useState(0)
  const [draft, setDraft] = useState('')

  const tabLabels = tabKeys.map((key) => t.tabs[key])
  const current = classes[selected]
  const currentAbsent = absent[selected] ?? []
  const totalStudents = classes.reduce((sum, item) => sum + item.students.length, 0)
  const toReview = assignments.reduce((sum, item) => sum + item.submitted, 0)

  function toggleAbsent(student: number) {
    setAbsent((record) => {
      const list = record[selected] ?? []
      return {
        ...record,
        [selected]: list.includes(student) ? list.filter((item) => item !== student) : [...list, student],
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
        role={t.teacher}
        name={lang === 'ar' ? 'أستاذ تجريبي' : 'Demo Teacher'}
        details={[
          { label: t.department, value: lang === 'ar' ? 'تقنية المعلومات' : 'Information Technology' },
          { label: t.lecturerType, value: lang === 'ar' ? 'دوام كامل' : 'Full-time' },
          { label: t.teacherId, value: 'DEMO-TEACHER' },
        ]}
      />

      <div className="mx-auto max-w-6xl px-5 py-10 lg:px-8">
        <TabBar
          label={t.teacherSections}
          tabs={tabLabels}
          active={t.tabs[tab]}
          onChange={(label) => setTab(tabKeys[tabLabels.indexOf(label)])}
        />

        {tab === 'overview' && (
          <Panel title={t.tabs.overview} sample={t.sample}>
            <div className="grid gap-6 sm:grid-cols-3">
              <Stat label={t.nextClass} value={classes[0].course[lang]} note={t.at(classes[0].day[lang], classes[0].time)} />
              <Stat label={t.students} value={String(totalStudents)} note={t.across(classes.length)} />
              <Stat label={t.toReview} value={String(toReview)} note={t.fromAssignments(assignments.length)} />
            </div>

            <Card className="mt-6">
              <h3 className="font-display text-xl font-semibold">{t.myClasses}</h3>
              <ul className="mt-4 divide-y divide-mist">
                {classes.map((item) => (
                  <li key={item.course.en} className="flex flex-wrap justify-between gap-x-6 gap-y-1 py-3">
                    <span className="font-semibold">{item.course[lang]}</span>
                    <span className="text-slate">
                      {t.classLine(item.group[lang], item.students.length, item.day[lang], item.time)}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          </Panel>
        )}

        {tab === 'lectures' && (
          <Panel title={t.tabs.lectures} sample={t.sample}>
            <div className="space-y-4">
              {classes.map((item) => (
                <details key={item.course.en} className="group border border-mist bg-white">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 sm:px-6">
                    <span>
                      <span className="block font-display text-xl font-semibold">{item.course[lang]}</span>
                      <span className="text-slate">{item.group[lang]}</span>
                    </span>
                    <span className="flex-none text-slate">
                      {t.lecturesCount(item.lectures.length)}
                      <span className="ms-3 inline-block transition-transform group-open:rotate-180" aria-hidden="true">
                        ▾
                      </span>
                    </span>
                  </summary>
                  <ol className="divide-y divide-mist border-t border-mist">
                    {item.lectures.map((lecture, index) => (
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
              {classes.map((item, index) => {
                const isLive = started.includes(index)
                return (
                  <li key={item.course.en}>
                    <Card className="flex h-full items-center justify-between gap-4">
                      <div>
                        <p className="font-display text-xl font-semibold">{item.course[lang]}</p>
                        <p className="mt-1 text-slate">
                          {item.group[lang]}
                          <br />
                          {t.at(item.day[lang], item.time)}
                        </p>
                        {isLive && (
                          <p className="mt-2">
                            <Badge tone="good">{t.classOpen}</Badge>
                          </p>
                        )}
                      </div>
                      <button
                        type="button"
                        className={isLive ? quietButtonClass : buttonClass}
                        onClick={() =>
                          setStarted((list) => (isLive ? list.filter((value) => value !== index) : [...list, index]))
                        }
                      >
                        {isLive ? t.endClass : t.startClass}
                      </button>
                    </Card>
                  </li>
                )
              })}
            </ul>
            <p className="mt-6 text-slate">{t.demoClass}</p>
          </Panel>
        )}

        {tab === 'attendance' && (
          <Panel title={t.takeAttendance} sample={t.sample}>
            <label className="block max-w-sm">
              <span className="font-medium">{t.classLabel}</span>
              <select
                value={selected}
                onChange={(event) => setSelected(Number(event.target.value))}
                className="mt-2 block w-full border border-mist bg-white px-4 py-3"
              >
                {classes.map((item, index) => (
                  <option key={item.course.en} value={index}>
                    {item.course[lang]} ({item.group[lang]})
                  </option>
                ))}
              </select>
            </label>

            <p className="mt-6 font-semibold" aria-live="polite">
              {t.presentOf(current.students.length - currentAbsent.length, current.students.length)}
            </p>

            <ul className="mt-4 divide-y divide-mist border border-mist bg-white">
              {current.students.map((name, index) => {
                const isAbsent = currentAbsent.includes(index)
                return (
                  <li key={name.en} className="flex items-center justify-between gap-4 px-5 py-3 sm:px-6">
                    <span className="font-medium">{name[lang]}</span>
                    <span className="flex items-center gap-4">
                      <Badge tone={isAbsent ? 'warn' : 'good'}>{isAbsent ? t.absent : t.present}</Badge>
                      <button type="button" className={quietButtonClass} onClick={() => toggleAbsent(index)}>
                        {isAbsent ? t.markPresent : t.markAbsent}
                      </button>
                    </span>
                  </li>
                )
              })}
            </ul>
          </Panel>
        )}

        {tab === 'assignments' && (
          <Panel title={t.tabs.assignments} sample={t.sample}>
            <ul className="space-y-4">
              {assignments.map((item) => (
                <li key={item.title.en}>
                  <Card>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                      <p className="font-display text-xl font-semibold">{item.title[lang]}</p>
                      <p className="text-slate">{t.due(classes[item.course].course[lang], t.week(item.dueWeek))}</p>
                    </div>
                    <p className="mt-4 text-sm text-slate">{t.submittedOf(item.submitted, item.total)}</p>
                    <div className="mt-2">
                      <Bar
                        value={Math.round((item.submitted / item.total) * 100)}
                        label={t.submissionsOf(item.title[lang])}
                      />
                    </div>
                  </Card>
                </li>
              ))}
            </ul>
          </Panel>
        )}

        {tab === 'reports' && (
          <Panel title={t.tabs.reports} sample={t.sample}>
            <ul className="divide-y divide-mist border border-mist bg-white">
              {reports.map((report) => (
                <li key={report.name.en} className="flex flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-6">
                  <div>
                    <p className="font-semibold">{report.name[lang]}</p>
                    <p className="text-sm text-slate">{report.period[lang]}</p>
                  </div>
                  <Badge tone={report.ready ? 'good' : 'neutral'}>{report.ready ? t.ready : t.notReady}</Badge>
                </li>
              ))}
            </ul>
          </Panel>
        )}

        {tab === 'notes' && (
          <Panel title={t.notesToClasses} sample={t.sample}>
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <h3 className="font-display text-xl font-semibold">{t.postNote}</h3>
                <form onSubmit={postNote} className="mt-4 space-y-4">
                  <label className="block">
                    <span className="font-medium">{t.classLabel}</span>
                    <select
                      value={noteGroup}
                      onChange={(event) => setNoteGroup(Number(event.target.value))}
                      className="mt-2 block w-full border border-mist bg-white px-4 py-3"
                    >
                      {classes.map((item, index) => (
                        <option key={item.group.en} value={index}>
                          {item.group[lang]}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="block">
                    <span className="font-medium">{t.note}</span>
                    <textarea
                      value={draft}
                      onChange={(event) => setDraft(event.target.value)}
                      rows={3}
                      className="mt-2 block w-full border border-mist px-4 py-3"
                    />
                  </label>
                  <button type="submit" className={buttonClass} disabled={draft.trim() === ''}>
                    {t.post}
                  </button>
                </form>
              </Card>

              <Card>
                <h3 className="font-display text-xl font-semibold">{t.posted}</h3>
                <ul className="mt-4 divide-y divide-mist">
                  {notes.map((note, index) => (
                    <li key={index} className="py-3">
                      <p className="text-sm font-semibold text-crimson">{classes[note.group].group[lang]}</p>
                      <p className="mt-1">{typeof note.text === 'string' ? note.text : note.text[lang]}</p>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-slate">{t.notesStay}</p>
              </Card>
            </div>
          </Panel>
        )}
      </div>
    </>
  )
}
