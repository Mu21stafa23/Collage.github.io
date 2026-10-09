import SiteShell from '@/app/components/SiteShell'
import HomeScreen from '@/app/screens/HomeScreen'

export default function Page() {
  return (
    <SiteShell lang="en" path="/">
      <HomeScreen lang="en" />
    </SiteShell>
  )
}
