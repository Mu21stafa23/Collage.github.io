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

export type Program = {
  /** Degree awarded, shown before the name */
  degree: string
  name: string
  field: 'Engineering' | 'Technology' | 'Business' | 'Languages'
  /** Path of the program's own page, if it has one */
  href?: string
}

export const programs: Program[] = [
  {
    degree: 'B.Sc. (Hons)',
    name: 'Civil Engineering',
    field: 'Engineering',
    href: '/departments/civil-engineering',
  },
  { degree: 'B.Sc. (Hons)', name: 'Electrical Engineering', field: 'Engineering' },
  {
    degree: 'B.Sc.',
    name: 'Information Technology',
    field: 'Technology',
    href: '/departments/information-technology',
  },
  { degree: 'B.Sc.', name: 'Accounting', field: 'Business' },
  { degree: 'B.Sc.', name: 'Business Administration', field: 'Business' },
  { degree: 'BA', name: 'English Language and Literature', field: 'Languages' },
]

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
