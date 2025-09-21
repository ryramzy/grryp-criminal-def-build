import { Metadata } from 'next'
import { Header } from './components/header'
import Image from 'next/image'
import { Testimonials } from './components/testimonials'
import { SuccessStories } from './components/success-stories'

export const metadata: Metadata = {
  title: 'Garry A. Payton Law | Criminal Defense Attorney',
  description: 'Experienced criminal defense attorney serving Chicago and surrounding areas. Dedicated to protecting your rights and providing expert legal representation.',
  openGraph: {
    title: 'Garry A. Payton Law | Criminal Defense Attorney',
    description: 'Experienced criminal defense attorney serving Chicago and surrounding areas. Dedicated to protecting your rights and providing expert legal representation.',
    type: 'website',
  },
}

export default function Page() {
  return (
    <div className="min-h-screen gradient-midnight">
      {/* Floating Garry Payton Profile Image */}
      <img
        src="/payton-headshot.jpg"
        alt="Attorney Garry Payton"
        className="fixed left-2 bottom-1/2 translate-y-1/2 w-12 h-12 rounded-full border-2 border-warmGold shadow-glow z-50 sm:left-4 sm:bottom-4 sm:translate-y-0 sm:w-16 sm:h-16 transition-all duration-300 hover:scale-110 hover:shadow-glow-strong"
        aria-hidden="true"
      />
      <Header />
      <main className="pt-20">
        {/* Full-Screen Hero Section */}
        <div className="relative h-screen w-full bg-midnight overflow-hidden">
          <Image
            src="/hero-landing-3.jpg"
            alt="Garry A. Payton Law background"
            fill
            className="object-cover object-center z-0"
            priority
            style={{ zIndex: 0 }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-midnight/80 via-midnight/60 to-midnight/80 backdrop-blur-xs flex items-center justify-center z-10 transition-all duration-500">
            <div className="text-center text-sandBeige px-6 max-w-5xl mx-auto">
              <h1 className="heading-1 mb-6 drop-shadow-2xl animate-fade-in">
                Garry A. Payton Law
              </h1>
              <p className="body-large max-w-3xl mx-auto drop-shadow-lg animate-slide-up">
                Fierce Criminal Defense • Federal Sentence Relief • Since 1987
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
                <a
                  href="/contact"
                  className="btn text-lg px-8 py-4"
                  aria-label="Contact us for a consultation"
                >
                  Get Free Consultation
                </a>
                <a
                  href="/practice-areas"
                  className="btn-secondary text-lg px-8 py-4"
                  aria-label="Learn about our practice areas"
                >
                  Our Services
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* About Us Card Section */}
        <section className="flex justify-center px-4 -mt-20 z-10 relative">
          <div className="card-elevated p-8 md:p-12 max-w-4xl w-full animate-slide-up">
            <div className="text-center mb-8">
              <h2 className="heading-2 mb-6">About Us</h2>
              <p className="body-large font-semibold mb-6 text-warmGold">
                We handle serious federal drug cases — and win.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="body mb-6">
                  At Garry A. Payton Law, we specialize in defending individuals facing the most severe drug-related charges in both state and federal courts. With a track record of courtroom success and a fearless approach to high-stakes litigation, our firm is committed to delivering transformative outcomes, not just legal representation.
                </p>
              </div>
              <div>
                <p className="body mb-6">
                  Led by Attorney Garry Payton, a veteran criminal defense lawyer with over three decades of experience, we blend legal precision with strategic innovation to navigate the complex realities of today&apos;s justice system. We don&apos;t back down from challenges — we redefine them.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/staff"
                className="btn"
                aria-label="Meet our legal team"
              >
                Meet Our Staff
              </a>
              <a
                href="/practice-areas"
                className="btn-secondary"
                aria-label="Learn about our practice areas"
              >
                Our Practice Areas
              </a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="heading-2 mb-8">Welcome to Garry A. Payton Law</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="card p-6">
                  <p className="body">
                    With decades of experience in criminal defense, we are committed to protecting your rights and providing expert legal representation. Our team understands that facing criminal charges can be overwhelming, and we're here to guide you through every step of the process.
                  </p>
                </div>
                <div className="card p-6">
                  <p className="body">
                    We believe in personalized attention and aggressive defense strategies tailored to your unique situation. Whether you're facing misdemeanor or felony charges, our experienced attorneys will fight tirelessly to achieve the best possible outcome for your case.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />

        {/* Success Stories Section */}
        <SuccessStories />

        {/* Practice Areas Preview */}
        <section className="section bg-midnightLight/30">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="heading-2 text-center mb-16">Practice Areas</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="card-elevated p-6 group">
                  <div className="w-12 h-12 bg-warmGold/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-warmGold/30 transition-colors duration-200">
                    <span className="text-2xl">⚖️</span>
                  </div>
                  <h3 className="heading-4 text-warmGold mb-4">Federal Sentencing</h3>
                  <p className="body mb-6">
                    Expert representation in federal court, focusing on minimizing sentences and protecting your rights.
                  </p>
                  <a
                    href="/practice-areas"
                    className="link group"
                    aria-label="Learn more about federal sentencing"
                  >
                    Learn More →
                  </a>
                </div>
                <div className="card-elevated p-6 group">
                  <div className="w-12 h-12 bg-warmGold/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-warmGold/30 transition-colors duration-200">
                    <span className="text-2xl">❤️</span>
                  </div>
                  <h3 className="heading-4 text-warmGold mb-4">Compassionate Release</h3>
                  <p className="body mb-6">
                    Helping eligible clients seek early release based on medical conditions, age, or family circumstances.
                  </p>
                  <a
                    href="/practice-areas"
                    className="link group"
                    aria-label="Learn more about compassionate release"
                  >
                    Learn More →
                  </a>
                </div>
                <div className="card-elevated p-6 group">
                  <div className="w-12 h-12 bg-warmGold/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-warmGold/30 transition-colors duration-200">
                    <span className="text-2xl">📋</span>
                  </div>
                  <h3 className="heading-4 text-warmGold mb-4">Post-Conviction Relief</h3>
                  <p className="body mb-6">
                    Challenging unlawful convictions and sentences through federal habeas corpus petitions and motions.
                  </p>
                  <a
                    href="/practice-areas"
                    className="link group"
                    aria-label="Learn more about post-conviction relief"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section gradient-midnight">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="heading-2 mb-6">Ready to Get Started?</h2>
              <p className="body-large mb-8">
                Contact us today for a confidential consultation about your case.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="btn text-lg px-8 py-4"
                  aria-label="Contact us for a consultation"
                >
                  Contact Us Now
                </a>
                <a
                  href="tel:+13126710751"
                  className="btn-secondary text-lg px-8 py-4"
                  aria-label="Call us at +1 312-671-0751"
                >
                  Call (312) 671-0751
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
