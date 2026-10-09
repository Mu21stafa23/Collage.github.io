import type { Metadata } from 'next'
import PageHeader from '../components/PageHeader'
import { college } from '../data/college'

export const metadata: Metadata = {
  title: 'About',
}

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About the college" intro={college.name} />

      <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">
        <div>
          <h2 className="font-display text-3xl font-bold">Who we are</h2>
          <p className="mt-5 text-lg leading-8 text-slate">
            Cambridge International College is a technical college. It works to strengthen the
            scientific disciplines and to prepare graduates who are ready, in theory and in
            practice, for advanced study and for the needs of development and the job market.
          </p>

          <h2 className="mt-12 font-display text-3xl font-bold">Our vision</h2>
          <p className="mt-5 text-lg leading-8 text-slate">
            To be an institution of education, knowledge and research with a competitive advantage
            and a place in the world rankings.
          </p>

          <h2 className="mt-12 font-display text-3xl font-bold">Where to find us</h2>
          <p className="mt-5 text-lg leading-8 text-slate">{college.address}</p>
        </div>

        <img
          src="/campus.jpg"
          alt="The college building in Khartoum North"
          width={750}
          height={562}
          className="w-full border border-mist"
        />
      </div>
    </>
  )
}
