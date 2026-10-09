/* All the college's facts live here, so pages never repeat them. */

export const college = {
  name: 'Cambridge International College Sudan',
  shortName: 'CIC',
  address: 'Block 1, Kafuri, Khartoum North (Bahri)',
  email: 'info@cic.edu.sd',
  phones: ['+249960892222', '+249917115595'],
  social: [
    { label: 'Facebook', href: 'https://web.facebook.com/cambridgecollegesudan' },
    { label: 'YouTube', href: 'https://www.youtube.com/user/citcsudan' },
  ],
}

export const fields = ['Engineering', 'Technology', 'Business', 'Languages'] as const

export type Field = (typeof fields)[number]

export type Program = {
  /** Used in the page address: /departments/<slug> */
  slug: string
  /** Degree awarded, shown before the name */
  degree: string
  name: string
  field: Field
  /** One line for lists */
  summary: string
  /** The "About the field" text on the program's page */
  paragraphs: string[]
  /** The "What the field covers" list on the program's page */
  topics: string[]
}

export const programs: Program[] = [
  {
    slug: 'civil-engineering',
    degree: 'B.Sc. (Hons)',
    name: 'Civil Engineering',
    field: 'Engineering',
    summary: 'Designing and building the structures a country runs on.',
    paragraphs: [
      'Civil engineering is the branch of engineering concerned with the study, design and analysis of civil structures.',
      'These include residential and service buildings, roads, bridges, tunnels, airports and ports, as well as drinking-water networks, pumping stations, sewage networks, water treatment plants, dams and irrigation projects.',
      'It also covers supervising these facilities throughout their working life.',
    ],
    topics: [
      'Buildings and structures',
      'Roads, bridges and tunnels',
      'Airports and ports',
      'Water supply and sewage networks',
      'Dams and irrigation',
    ],
  },
  {
    slug: 'electrical-engineering',
    degree: 'B.Sc. (Hons)',
    name: 'Electrical Engineering',
    field: 'Engineering',
    summary: 'Power, electronics and the systems that control them.',
    paragraphs: [
      'Electrical engineering is the branch of engineering that deals with electricity, electronics and electromagnetism.',
      'It covers generating, transmitting and distributing electrical power, and designing the circuits, machines and control systems that use it.',
      'Its applications run from power stations and grids to electronics, communications and automation.',
    ],
    topics: [
      'Power generation and distribution',
      'Electrical machines',
      'Electronics and circuits',
      'Control systems',
      'Communications',
    ],
  },
  {
    slug: 'information-technology',
    degree: 'B.Sc.',
    name: 'Information Technology',
    field: 'Technology',
    summary: 'Building and running the systems that handle information.',
    paragraphs: [
      'Information technology is the study, design, development, implementation, support and management of computer-based information systems.',
      'It is concerned with using computers and software to convert, store, protect, process, transmit and securely retrieve information.',
      'It is a broad discipline that covers technology and everything related to processing and managing information, especially in large organizations.',
    ],
    topics: [
      'Designing and developing information systems',
      'Storing and protecting information',
      'Processing and transmitting data',
      'Supporting and managing systems',
    ],
  },
  {
    slug: 'accounting',
    degree: 'B.Sc.',
    name: 'Accounting',
    field: 'Business',
    summary: 'Recording and reporting how money moves through an organization.',
    paragraphs: [
      'Accounting is the practice of recording, classifying and reporting an organization\'s financial transactions.',
      'It produces the statements that owners, managers, lenders and regulators rely on to judge performance and make decisions.',
      'The field also covers auditing, cost control and taxation.',
    ],
    topics: [
      'Financial accounting',
      'Cost and management accounting',
      'Auditing',
      'Taxation',
      'Financial reporting',
    ],
  },
  {
    slug: 'business-administration',
    degree: 'B.Sc.',
    name: 'Business Administration',
    field: 'Business',
    summary: 'How organizations are planned, run and led.',
    paragraphs: [
      'Business administration is the study of how organizations are run.',
      'It brings together management, marketing, finance and human resources, and teaches how to plan, organize and lead work towards clear goals.',
      'It applies to companies of every size, as well as to public bodies and non-profit organizations.',
    ],
    topics: [
      'Management and organization',
      'Marketing',
      'Finance',
      'Human resources',
      'Entrepreneurship',
    ],
  },
  {
    slug: 'english-language-and-literature',
    degree: 'BA',
    name: 'English Language and Literature',
    field: 'Languages',
    summary: 'How English works, and the literature written in it.',
    paragraphs: [
      'This field is the study of the English language and of the literature written in it.',
      'On the language side it covers grammar, phonetics and linguistics, along with clear academic writing.',
      'On the literature side it covers reading, analysing and writing about poetry, drama and prose from different periods.',
    ],
    topics: [
      'Linguistics and phonetics',
      'Grammar and academic writing',
      'Poetry, drama and prose',
      'Literary criticism',
      'Translation',
    ],
  },
]

export function getProgram(slug: string): Program {
  const program = programs.find((item) => item.slug === slug)
  if (!program) throw new Error(`Unknown program: ${slug}`)
  return program
}

export const accreditation = [
  {
    name: 'International Accreditation Organization (IAO)',
    logo: '/accreditation/iao.png',
  },
  {
    name: 'Ministry of Higher Education and Scientific Research, Sudan',
    logo: '/accreditation/ministry-of-higher-education.jpeg',
  },
  {
    name: 'Cambridge College London',
    logo: '/accreditation/cambridge-college-london.png',
  },
]
