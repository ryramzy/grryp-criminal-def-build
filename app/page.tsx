import { Metadata } from 'next'
import { Header } from './components/header'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Garry Payton Law | Criminal Defense Attorney',
  description: 'Experienced criminal defense attorney serving Sacramento and surrounding areas. Dedicated to protecting your rights and providing expert legal representation.',
}

export default function Page() {
  return (
    <div className="min-h-screen bg-midnight">
      <Header />
      <main className="pt-16">
        {/* Full-Screen Hero Section */}
        <div className="relative h-screen w-full bg-midnight">
          <Image
            src="/hero.jpeg"
            alt="Garry Payton Law background"
            fill
            className="object-cover object-center z-0"
            priority
            style={{ zIndex: 0 }}
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-10 transition-all duration-300">
            <div className="text-center text-white px-6">
              <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">Garry Payton Law</h1>
              <p className="mt-4 text-lg md:text-2xl max-w-2xl mx-auto drop-shadow-lg">
                Fierce Criminal Defense • Federal Sentence Relief • Since 1987
              </p>
            </div>
          </div>
        </div>

        {/* About Us Card Section */}
        <section className="flex justify-center px-4 -mt-16 z-10 relative">
          <div className="bg-midnight rounded-2xl shadow-lg p-6 md:p-10 max-w-xl w-full border border-tealBlue/20">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">About Us</h2>
            <p className="text-white text-center font-semibold mb-4">We handle serious federal drug cases — and win.</p>
            <p className="text-white text-center mb-4">
              At Garry Payton Law, we specialize in defending individuals facing the most severe drug-related charges in both state and federal courts. With a track record of courtroom success and a fearless approach to high-stakes litigation, our firm is committed to delivering transformative outcomes, not just legal representation.
            </p>
            <p className="text-white text-center mb-4">
              Led by Attorney Garry Payton, a veteran criminal defense lawyer with over three decades of experience, we blend legal precision with strategic innovation to navigate the complex realities of today&apos;s justice system. We don&apos;t back down from challenges — we redefine them.
            </p>
            <div className="flex justify-center mt-6">
              <a
                href="/staff"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors text-lg shadow"
              >
                Meet Our Staff
              </a>
            </div>
          </div>
        </section>

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
