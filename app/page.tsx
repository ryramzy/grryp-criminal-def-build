import { Metadata } from 'next'
import { Header } from './components/header'
import { Hero } from './components/hero'

export const metadata: Metadata = {
  title: 'Garry Payton Law | Criminal Defense Attorney',
  description: 'Experienced criminal defense attorney serving Sacramento and surrounding areas. Dedicated to protecting your rights and providing expert legal representation.',
}

export default function Page() {
  return (
    <div className="min-h-screen bg-midnight">
      <Header />
      <main className="pt-16">
        <Hero />
        <section className="max-w-4xl mx-auto px-4 py-16">
          <div className="prose prose-neutral dark:prose-invert">
            <h1 className="text-3xl font-bold mb-8 text-sandBeige">Welcome to Garry Payton Law</h1>
            <p className="mb-6 text-tealBlue">
              With decades of experience in criminal defense, we are committed to protecting your rights and providing expert legal representation. Our team understands that facing criminal charges can be overwhelming, and we're here to guide you through every step of the process.
            </p>
            <p className="mb-6 text-tealBlue">
              We believe in personalized attention and aggressive defense strategies tailored to your unique situation. Whether you're facing misdemeanor or felony charges, our experienced attorneys will fight tirelessly to achieve the best possible outcome for your case.
            </p>
          </div>
        </section>
      </main>
      <footer className="bg-midnight/80 backdrop-blur-sm border-t border-tealBlue/20">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-base text-sandBeige">
              Garry Payton Law |{' '}
              <a href="tel:+19164614837" className="text-warmGold hover:text-softRed">
                (916) 461-4837
              </a>{' '}
              | Serving Sacramento and surrounding areas
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
