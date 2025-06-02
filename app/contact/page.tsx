import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Garry Payton Law',
  description: 'Get in touch with our legal team for assistance with your case, including Federal Sentence relief and drug convictions.',
  openGraph: {
    title: 'Contact Us | Garry Payton Law',
    description: 'Get in touch with our legal team for assistance with your case, including Federal Sentence relief and drug convictions.',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-midnight">
      <main className="pt-16">
        <section className="max-w-4xl mx-auto px-4 py-16">
          <div className="prose prose-neutral dark:prose-invert">
            <h1 className="text-3xl font-bold mb-8 text-sandBeige">Contact Us</h1>
            <p className="mb-4 text-white">
              Please reach out to us regarding your legal needs, especially if you require assistance with Federal Sentence relief or drug convictions. We are here to provide expert legal representation.
            </p>
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4 text-sandBeige">Contact Information</h2>
              <p className="mb-2 text-white">
                <strong>Law Offices of Garry A Payton</strong>
              </p>
              <p className="mb-2 text-white">
                320 West Ohio St
              </p>
               <p className="mb-2 text-white">
                Chicago, IL 60614
              </p>
               <p className="mb-2 text-white">
                US
              </p>
              <p className="mb-2 text-white">
                <strong>Phone:</strong>{' '}
                <a 
                  href="tel:+13126710751" 
                  className="text-warmGold hover:text-softRed focus:outline-none focus:ring-2 focus:ring-warmGold rounded"
                  aria-label="Call us at +1 312-671-0751"
                >
                  +1 312-671-0751
                </a>
              </p>
              <p className="mb-2 text-white">
                <strong>Email:</strong>{' '}
                <a 
                  href="mailto:staff@garrypaytonlaw.com" 
                  className="text-warmGold hover:text-softRed focus:outline-none focus:ring-2 focus:ring-warmGold rounded"
                  aria-label="Email us at staff@garrypaytonlaw.com"
                >
                  staff@garrypaytonlaw.com
                </a>
              </p>
            </div>
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4 text-sandBeige">Send us a Message</h2>
              <form className="space-y-4" action="/api/contact" method="POST">
                <div>
                  <label htmlFor="name" className="block mb-1 text-white">
                    Name <span className="text-softRed" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-2 border rounded-md bg-midnight border-tealBlue/20 text-sandBeige focus:outline-none focus:ring-2 focus:ring-warmGold"
                    required
                    aria-required="true"
                    placeholder="Your full name"
                    minLength={2}
                    maxLength={100}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1 text-white">
                    Email <span className="text-softRed" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-2 border rounded-md bg-midnight border-tealBlue/20 text-sandBeige focus:outline-none focus:ring-2 focus:ring-warmGold"
                    required
                    aria-required="true"
                    placeholder="your.email@example.com"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-1 text-white">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full p-2 border rounded-md bg-midnight border-tealBlue/20 text-sandBeige focus:outline-none focus:ring-2 focus:ring-warmGold"
                    placeholder="(123) 456-7890"
                    pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-1 text-white">
                    Message <span className="text-softRed" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full p-2 border rounded-md bg-midnight border-tealBlue/20 text-sandBeige focus:outline-none focus:ring-2 focus:ring-warmGold"
                    required
                    aria-required="true"
                    placeholder="Please describe your legal needs..."
                    minLength={10}
                    maxLength={1000}
                  ></textarea>
                </div>
                <div className="text-sm text-white mb-4">
                  <p>Fields marked with <span className="text-softRed" aria-hidden="true">*</span> are required</p>
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-warmGold text-midnight rounded-md hover:bg-softRed transition-colors focus:outline-none focus:ring-2 focus:ring-warmGold font-semibold"
                  aria-label="Submit contact form"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 