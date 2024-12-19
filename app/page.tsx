import Header from './components/Header'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import HowItWorks from './components/HowItWorks'
import Benefits from './components/Benefits'
import Testimonial from './components/Testimonial'
import Pricing from './components/Pricing'
import InterestForm from './components/InterestForm'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <HowItWorks />
        <Benefits />
        <Testimonial />
        <Pricing />
        <InterestForm />
      </main>
      <Footer />
    </div>
  )
}

