import Link from 'next/link'

export function Hero() {
  return (
    <div className="relative bg-midnight overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-midnight sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-sandBeige sm:text-5xl md:text-6xl">
                <span className="block">Garry A. Payton Law</span>
                <span className="block text-warmGold">Criminal Defense Attorney</span>
              </h1>
              <p className="mt-3 text-base text-tealBlue sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Experienced criminal defense attorney serving Sacramento and surrounding areas. Dedicated to protecting your rights and providing expert legal representation.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    href="/contact"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-midnight bg-warmGold hover:bg-softRed md:py-4 md:text-lg md:px-10"
                  >
                    Schedule a Consultation
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="tel:+19164614837"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-sandBeige bg-softRed hover:bg-warmGold md:py-4 md:text-lg md:px-10"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
} 