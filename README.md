# Cambridge International College Sudan — graduation project

A website and e-learning concept for Cambridge International College Sudan, built as my graduation project and rebuilt here with Next.js and Tailwind CSS.

This is a student project. It is not the official website of the college.

![Homepage preview](./docs/preview.jpg)

## Pages

| Route | Page |
| :-- | :-- |
| `/` | Home: introduction, vision, programs, e-learning and accreditation |
| `/about` | About the college |
| `/departments` | All six degree programs |
| `/departments/information-technology` | Information Technology |
| `/departments/civil-engineering` | Civil Engineering |
| `/e-learning` | Sign-in screen with a student / teacher switch |
| `/e-learning/student` | Student screen: lectures, classes, attendance, assignments, calendar, notes |
| `/e-learning/teacher` | Teacher screen: lectures, classes, attendance, assignments, reports, notes |

The e-learning part is a demo. The sign-in fields are filled in and read-only, nothing is sent or saved, and the tables show sample data.

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
├── data/college.ts        # Address, contacts, programs and accreditation
├── components/
│   ├── ProjectNotice.tsx  # "Graduation project" bar on every page
│   ├── SiteHeader.tsx     # Logo, navigation and mobile menu
│   ├── SiteFooter.tsx     # Location, contact and links
│   ├── PageHeader.tsx     # Navy title band on inner pages
│   ├── ProgramList.tsx    # The list of degree programs
│   ├── DepartmentPage.tsx # Layout shared by the department pages
│   ├── SignInForm.tsx     # Demo sign-in
│   └── Dashboard.tsx      # Profile, tabs and tables for e-learning
├── about/                 # /about
├── departments/           # /departments and the two program pages
├── e-learning/            # Sign-in, student and teacher screens
├── layout.tsx             # Fonts, header and footer around every page
├── page.tsx               # Home
└── globals.css            # Colors and fonts
public/                    # Logo, campus photo and accreditation logos
```

To add a program, add an entry to `programs` in `app/data/college.ts`. To give it its own page, create a folder under `app/departments/` and set the entry's `href`.

## The original version

The first version of this project was plain HTML with Bootstrap. It is still in this repository's history, before the rebuild.
