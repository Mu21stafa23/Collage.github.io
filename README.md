# Cambridge International College Sudan — graduation project

A website and e-learning concept for Cambridge International College Sudan. It began as a graduation project by a team of three students, and is rebuilt here with Next.js and Tailwind CSS.

This is a student project. It is not the official website of the college.

**Live site:** https://cic-sudan-graduation-project.vercel.app ([Arabic](https://cic-sudan-graduation-project.vercel.app/ar))

![Homepage preview](./docs/preview.jpg)

## Pages

| Route | Page |
| :-- | :-- |
| `/` | Home: introduction, quick facts, vision, programs by field, e-learning, accreditation and contact |
| `/about` | About the college |
| `/departments` | All six degree programs, with a filter by field |
| `/departments/<program>` | One page for each of the six programs |
| `/e-learning` | Sign-in screen with a student / teacher switch |
| `/e-learning/student` | Student screen: overview, lectures, classes, attendance, assignments, calendar, notes |
| `/e-learning/teacher` | Teacher screen: overview, lectures, classes, attendance, assignments, reports, notes |

The e-learning part is a working demo. A student can join a class, move an assignment from started to submitted, and write notes. A teacher can start a class, take attendance and post notes to a class. It all runs in the browser with sample data: the sign-in fields are read-only, and nothing is sent or saved.

## Two languages

Every page exists in English and in Arabic. The Arabic version lives under `/ar` (for example `/ar/departments`), runs right to left, and is reached with the language button in the header, which opens the same page in the other language.

- Interface text for both languages is in `app/data/i18n.ts`.
- Content about the college (programs, address, accreditation) is in `app/data/college.ts`, with each piece of text written in both languages.

## Built with

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS 4](https://tailwindcss.com)

## Run it locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Where things are

```
app/
├── data/
│   ├── i18n.ts             # Languages and all interface text
│   └── college.ts          # Address, contacts, programs and accreditation
├── screens/                # What each page shows; every screen takes a language
│   ├── HomeScreen.tsx
│   ├── AboutScreen.tsx
│   ├── DepartmentsScreen.tsx
│   ├── DepartmentScreen.tsx
│   └── ELearningScreen.tsx
├── components/
│   ├── SiteShell.tsx       # Language, direction, header and footer around a page
│   ├── ProjectNotice.tsx   # "Graduation project" bar on every page
│   ├── SiteHeader.tsx      # Logo, navigation, language button and mobile menu
│   ├── SiteFooter.tsx      # Location, contact and links
│   ├── PageHeader.tsx      # Navy title band on inner pages
│   ├── FieldCards.tsx      # Programs grouped by field, on the home page
│   ├── ProgramList.tsx     # The list of degree programs
│   ├── ProgramExplorer.tsx # The list plus the filter by field
│   ├── SignInForm.tsx      # Demo sign-in
│   └── elearning/
│       ├── StudentDashboard.tsx
│       ├── TeacherDashboard.tsx
│       └── ui.tsx          # Tabs, cards, badges and bars both screens share
├── about/, departments/, e-learning/   # English pages
├── ar/                     # The same pages in Arabic
├── layout.tsx              # Fonts
├── not-found.tsx           # Shown for addresses that do not exist
├── page.tsx                # Home
└── globals.css             # Colors and fonts
public/                     # Logo, campus photo, accreditation logos, previews
```

Each `page.tsx` is only a few lines: it picks the language and the screen to show.

To add a program, add an entry to `programs` in `app/data/college.ts`, then create a folder with the same name as its `slug` under both `app/departments/` and `app/ar/departments/`, copying the `page.tsx` of an existing program.

## The original version

The first version of this project was plain HTML with Bootstrap. It is still in this repository's history, before the rebuild.
