import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Garry Payton Law',
  description: 'Get in touch with our legal team for assistance with your case, including Federal Sentence relief and drug convictions.',
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
                <a href="tel:+13126710751" className="text-warmGold hover:text-softRed">
                  +1 312-671-0751
                </a>
              </p>
              <p className="mb-2 text-white">
                <strong>Email:</strong>{' '}
                <a href="mailto:staff@garrypaytonlaw.com" className="text-warmGold hover:text-softRed">
                  staff@garrypaytonlaw.com
                </a>
              </p>
            </div>
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4 text-sandBeige">Send us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1 text-white">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-2 border rounded-md bg-midnight border-tealBlue/20 text-sandBeige"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1 text-white">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-2 border rounded-md bg-midnight border-tealBlue/20 text-sandBeige"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-1 text-white">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full p-2 border rounded-md bg-midnight border-tealBlue/20 text-sandBeige"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-warmGold text-midnight rounded-md hover:bg-softRed transition-colors"
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