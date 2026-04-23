import Nav        from '@/components/Nav'
import Hero       from '@/components/Hero'
import Problems   from '@/components/Problems'
import Why        from '@/components/Why'
import Process    from '@/components/Process'
import Services   from '@/components/Services'
import Projects   from '@/components/Projects'
import Value      from '@/components/Value'
import Clients    from '@/components/Clients'
import CTABanner  from '@/components/CTABanner'
import Footer     from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problems />
        <Why />
        <Process />
        <Services />
        <Projects />
        <Value />
        <Clients />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
