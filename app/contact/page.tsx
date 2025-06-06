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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-sandBeige">Contact Information</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-warmGold">Address</h3>
                    <p className="text-white">320 West Ohio Street, Suite 3W<br />Chicago, Illinois 60654</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-warmGold">Phone</h3>
                    <a 
                      href="tel:+13126710751" 
                      className="text-white hover:text-warmGold transition-colors"
                      aria-label="Call us at 312-671-0751"
                    >
                      312-671-0751
                    </a>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-warmGold">Email</h3>
                    <a 
                      href="mailto:info@garrypaytonlaw.com" 
                      className="text-white hover:text-warmGold transition-colors"
                      aria-label="Email us at info@garrypaytonlaw.com"
                    >
                      info@garrypaytonlaw.com
                    </a>
                  </div>
                </div>

                {/* Office Hours */}
                <div>
                  <h3 className="text-lg font-medium text-warmGold mb-2">Office Hours</h3>
                  <p className="text-white">Monday - Friday: 9:00 AM - 5:00 PM<br />Saturday - Sunday: By Appointment</p>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="h-[400px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.1227425499997!2d-87.6319268!3d41.8781136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2s320%20W%20Ohio%20St%2C%20Chicago%2C%20IL%2060654!5e0!3m2!1sen!2sus!4v1645564759431!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                  aria-label="Map showing our office location at 320 West Ohio Street, Suite 3W, Chicago, Illinois 60654"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="mt-12">
              <h2 className="text-2xl font-semibold text-sandBeige mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-sandBeige mb-2">
                      Name <span className="text-softRed">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 bg-midnight/50 border-2 border-warmGold/30 rounded-md text-white focus:outline-none focus:border-warmGold"
                      aria-required="true"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-sandBeige mb-2">
                      Email <span className="text-softRed">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      className="w-full px-4 py-2 bg-midnight/50 border-2 border-warmGold/30 rounded-md text-white focus:outline-none focus:border-warmGold"
                      aria-required="true"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-sandBeige mb-2">
                    Phone <span className="text-softRed">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="123-456-7890"
                    className="w-full px-4 py-2 bg-midnight/50 border-2 border-warmGold/30 rounded-md text-white focus:outline-none focus:border-warmGold"
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-sandBeige mb-2">
                    Message <span className="text-softRed">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-2 bg-midnight/50 border-2 border-warmGold/30 rounded-md text-white focus:outline-none focus:border-warmGold"
                    aria-required="true"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full md:w-auto px-6 py-3 bg-warmGold text-midnight rounded-md hover:bg-softRed transition-colors focus:outline-none focus:ring-2 focus:ring-warmGold font-semibold"
                  >
                    Send Message
                  </button>
                </div>
              </form>

              {/* Legal Disclaimer */}
              <div className="mt-8 p-4 bg-midnight/50 rounded-lg border-2 border-warmGold/30">
                <p className="text-sm text-white">
                  <strong className="text-warmGold">Legal Disclaimer:</strong> The information provided through this contact form does not create an attorney-client relationship. Please do not send any confidential information through this form. An attorney-client relationship is only established after a formal agreement is signed. By submitting this form, you agree to our{' '}
                  <a href="/privacy-policy" className="text-warmGold hover:text-softRed transition-colors">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 