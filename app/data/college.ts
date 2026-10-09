/* Everything about the college, in both languages, lives here so pages
   never repeat it. */

import { tx, type Text } from './i18n'

export const college = {
  name: tx('Cambridge International College Sudan', 'كلية كامبردج العالمية - السودان'),
  address: tx('Block 1, Kafuri, Khartoum North (Bahri)', 'مربع 1، كافوري، الخرطوم بحري'),
  /** Used for the Google Maps search link, always in English */
  mapQuery: 'Cambridge International College Sudan, Block 1, Kafuri, Khartoum North (Bahri)',
  email: 'info@cic.edu.sd',
  phones: ['+249960892222', '+249917115595'],
  social: [
    { label: tx('Facebook', 'فيسبوك'), href: 'https://web.facebook.com/cambridgecollegesudan' },
    { label: tx('YouTube', 'يوتيوب'), href: 'https://www.youtube.com/user/citcsudan' },
  ],
  about: tx(
    'Cambridge International College is a technical college. It works to strengthen the scientific disciplines and to prepare graduates who are ready, in theory and in practice, for advanced study and for the needs of development and the job market.',
    'كلية كامبردج العالمية كلية تقنية، تعمل على الارتقاء بالتخصصات العلمية وإعداد خريجين مؤهلين نظرياً وعملياً للدراسات المتقدمة ولتلبية احتياجات التنمية وسوق العمل.',
  ),
  vision: tx(
    'To be an institution of education, knowledge and research with a competitive advantage and a place in the world rankings.',
    'أن نكون مؤسسة تعليمية ومعرفية وبحثية ذات ميزة تنافسية وتصنيف عالمي.',
  ),
}

export const fields = ['engineering', 'technology', 'business', 'languages'] as const

export type Field = (typeof fields)[number]

export const fieldNames: Record<Field, Text> = {
  engineering: tx('Engineering', 'الهندسة'),
  technology: tx('Technology', 'التقنية'),
  business: tx('Business', 'الأعمال'),
  languages: tx('Languages', 'اللغات'),
}

const bscHons = tx('B.Sc. (Hons)', 'بكالوريوس العلوم (الشرف)')
const bsc = tx('B.Sc.', 'بكالوريوس العلوم')
const ba = tx('BA', 'بكالوريوس الآداب')

export type Program = {
  /** Used in the page address: /departments/<slug> */
  slug: string
  /** Degree awarded, shown before the name */
  degree: Text
  name: Text
  field: Field
  /** One line for lists */
  summary: Text
  /** The "About the field" text on the program's page */
  paragraphs: Text[]
  /** The "What the field covers" list on the program's page */
  topics: Text[]
}

export const programs: Program[] = [
  {
    slug: 'civil-engineering',
    degree: bscHons,
    name: tx('Civil Engineering', 'الهندسة المدنية'),
    field: 'engineering',
    summary: tx('Designing and building the structures a country runs on.', 'تصميم وبناء المنشآت التي تقوم عليها البلاد.'),
    paragraphs: [
      tx(
        'Civil engineering is the branch of engineering concerned with the study, design and analysis of civil structures.',
        'الهندسة المدنية فرع من فروع الهندسة يُعنى بدراسة المنشآت المدنية وتصميمها وتحليلها.',
      ),
      tx(
        'These include residential and service buildings, roads, bridges, tunnels, airports and ports, as well as drinking-water networks, pumping stations, sewage networks, water treatment plants, dams and irrigation projects.',
        'وتشمل المباني السكنية والخدمية والطرق والجسور والأنفاق والمطارات والموانئ، وكذلك شبكات مياه الشرب ومحطات الضخ وشبكات الصرف الصحي ومحطات تنقية المياه ومعالجتها والسدود ومشاريع الري.',
      ),
      tx(
        'It also covers supervising these facilities throughout their working life.',
        'ويشمل أيضاً الإشراف على هذه المنشآت طوال فترة تشغيلها.',
      ),
    ],
    topics: [
      tx('Buildings and structures', 'المباني والمنشآت'),
      tx('Roads, bridges and tunnels', 'الطرق والجسور والأنفاق'),
      tx('Airports and ports', 'المطارات والموانئ'),
      tx('Water supply and sewage networks', 'شبكات المياه والصرف الصحي'),
      tx('Dams and irrigation', 'السدود والري'),
    ],
  },
  {
    slug: 'electrical-engineering',
    degree: bscHons,
    name: tx('Electrical Engineering', 'الهندسة الكهربائية'),
    field: 'engineering',
    summary: tx('Power, electronics and the systems that control them.', 'الطاقة والإلكترونيات والأنظمة التي تتحكم بها.'),
    paragraphs: [
      tx(
        'Electrical engineering is the branch of engineering that deals with electricity, electronics and electromagnetism.',
        'الهندسة الكهربائية فرع من فروع الهندسة يتعامل مع الكهرباء والإلكترونيات والكهرومغناطيسية.',
      ),
      tx(
        'It covers generating, transmitting and distributing electrical power, and designing the circuits, machines and control systems that use it.',
        'وتشمل توليد الطاقة الكهربائية ونقلها وتوزيعها، وتصميم الدوائر والآلات وأنظمة التحكم التي تستخدمها.',
      ),
      tx(
        'Its applications run from power stations and grids to electronics, communications and automation.',
        'وتمتد تطبيقاتها من محطات وشبكات الكهرباء إلى الإلكترونيات والاتصالات والأتمتة.',
      ),
    ],
    topics: [
      tx('Power generation and distribution', 'توليد الطاقة وتوزيعها'),
      tx('Electrical machines', 'الآلات الكهربائية'),
      tx('Electronics and circuits', 'الإلكترونيات والدوائر'),
      tx('Control systems', 'أنظمة التحكم'),
      tx('Communications', 'الاتصالات'),
    ],
  },
  {
    slug: 'information-technology',
    degree: bsc,
    name: tx('Information Technology', 'تقنية المعلومات'),
    field: 'technology',
    summary: tx('Building and running the systems that handle information.', 'بناء وتشغيل الأنظمة التي تتعامل مع المعلومات.'),
    paragraphs: [
      tx(
        'Information technology is the study, design, development, implementation, support and management of computer-based information systems.',
        'تقنية المعلومات هي دراسة نظم المعلومات المعتمدة على الحاسوب وتصميمها وتطويرها وتفعيلها ودعمها وإدارتها.',
      ),
      tx(
        'It is concerned with using computers and software to convert, store, protect, process, transmit and securely retrieve information.',
        'وتهتم باستخدام الحواسيب والبرمجيات لتحويل المعلومات وتخزينها وحمايتها ومعالجتها ونقلها واسترجاعها بشكل آمن.',
      ),
      tx(
        'It is a broad discipline that covers technology and everything related to processing and managing information, especially in large organizations.',
        'وهي تخصص واسع يشمل التقنية وكل ما يتعلق بمعالجة المعلومات وإدارتها، خصوصاً في المؤسسات الكبيرة.',
      ),
    ],
    topics: [
      tx('Designing and developing information systems', 'تصميم نظم المعلومات وتطويرها'),
      tx('Storing and protecting information', 'تخزين المعلومات وحمايتها'),
      tx('Processing and transmitting data', 'معالجة البيانات ونقلها'),
      tx('Supporting and managing systems', 'دعم الأنظمة وإدارتها'),
    ],
  },
  {
    slug: 'accounting',
    degree: bsc,
    name: tx('Accounting', 'المحاسبة'),
    field: 'business',
    summary: tx('Recording and reporting how money moves through an organization.', 'تسجيل حركة الأموال في المؤسسة وإعداد التقارير عنها.'),
    paragraphs: [
      tx(
        "Accounting is the practice of recording, classifying and reporting an organization's financial transactions.",
        'المحاسبة هي تسجيل المعاملات المالية للمؤسسة وتصنيفها وإعداد التقارير عنها.',
      ),
      tx(
        'It produces the statements that owners, managers, lenders and regulators rely on to judge performance and make decisions.',
        'وتُنتج القوائم التي يعتمد عليها الملّاك والمديرون والمقرضون والجهات الرقابية لتقييم الأداء واتخاذ القرارات.',
      ),
      tx('The field also covers auditing, cost control and taxation.', 'ويشمل التخصص أيضاً المراجعة وضبط التكاليف والضرائب.'),
    ],
    topics: [
      tx('Financial accounting', 'المحاسبة المالية'),
      tx('Cost and management accounting', 'محاسبة التكاليف والمحاسبة الإدارية'),
      tx('Auditing', 'المراجعة'),
      tx('Taxation', 'الضرائب'),
      tx('Financial reporting', 'التقارير المالية'),
    ],
  },
  {
    slug: 'business-administration',
    degree: bsc,
    name: tx('Business Administration', 'إدارة الأعمال'),
    field: 'business',
    summary: tx('How organizations are planned, run and led.', 'كيف تُخطَّط المؤسسات وتُدار وتُقاد.'),
    paragraphs: [
      tx('Business administration is the study of how organizations are run.', 'إدارة الأعمال هي دراسة كيفية إدارة المؤسسات.'),
      tx(
        'It brings together management, marketing, finance and human resources, and teaches how to plan, organize and lead work towards clear goals.',
        'وتجمع بين الإدارة والتسويق والتمويل والموارد البشرية، وتعلّم كيف يُخطَّط العمل ويُنظَّم ويُقاد نحو أهداف واضحة.',
      ),
      tx(
        'It applies to companies of every size, as well as to public bodies and non-profit organizations.',
        'وتنطبق على الشركات بمختلف أحجامها، وكذلك على الجهات الحكومية والمنظمات غير الربحية.',
      ),
    ],
    topics: [
      tx('Management and organization', 'الإدارة والتنظيم'),
      tx('Marketing', 'التسويق'),
      tx('Finance', 'التمويل'),
      tx('Human resources', 'الموارد البشرية'),
      tx('Entrepreneurship', 'ريادة الأعمال'),
    ],
  },
  {
    slug: 'english-language-and-literature',
    degree: ba,
    name: tx('English Language and Literature', 'اللغة الإنجليزية وآدابها'),
    field: 'languages',
    summary: tx('How English works, and the literature written in it.', 'كيف تعمل اللغة الإنجليزية، والأدب المكتوب بها.'),
    paragraphs: [
      tx(
        'This field is the study of the English language and of the literature written in it.',
        'هذا التخصص هو دراسة اللغة الإنجليزية والأدب المكتوب بها.',
      ),
      tx(
        'On the language side it covers grammar, phonetics and linguistics, along with clear academic writing.',
        'في جانب اللغة يشمل القواعد والصوتيات واللسانيات، مع الكتابة الأكاديمية الواضحة.',
      ),
      tx(
        'On the literature side it covers reading, analysing and writing about poetry, drama and prose from different periods.',
        'وفي جانب الأدب يشمل قراءة الشعر والمسرح والنثر من عصور مختلفة وتحليلها والكتابة عنها.',
      ),
    ],
    topics: [
      tx('Linguistics and phonetics', 'اللسانيات والصوتيات'),
      tx('Grammar and academic writing', 'القواعد والكتابة الأكاديمية'),
      tx('Poetry, drama and prose', 'الشعر والمسرح والنثر'),
      tx('Literary criticism', 'النقد الأدبي'),
      tx('Translation', 'الترجمة'),
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
    name: tx('International Accreditation Organization (IAO)', 'منظمة الاعتماد الدولية (IAO)'),
    logo: '/accreditation/iao.png',
  },
  {
    name: tx(
      'Ministry of Higher Education and Scientific Research, Sudan',
      'وزارة التعليم العالي والبحث العلمي، السودان',
    ),
    logo: '/accreditation/ministry-of-higher-education.jpeg',
  },
  {
    name: tx('Cambridge College London', 'كلية كامبردج لندن'),
    logo: '/accreditation/cambridge-college-london.png',
  },
]
