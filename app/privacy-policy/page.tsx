import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Garry Payton Law',
  description: 'Privacy policy and terms of use for Garry Payton Law website.',
  openGraph: {
    title: 'Privacy Policy | Garry Payton Law',
    description: 'Privacy policy and terms of use for Garry Payton Law website.',
    type: 'website',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-midnight">
      <main className="pt-16">
        <section className="max-w-4xl mx-auto px-4 py-16">
          <div className="prose prose-neutral dark:prose-invert">
            <h1 className="text-3xl font-bold mb-8 text-sandBeige">Privacy Policy</h1>
            
            <div className="space-y-8 text-white">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-sandBeige">Information Collection</h2>
                <p>
                  We collect information that you provide directly to us, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name and contact information</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Case-related information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-sandBeige">Use of Information</h2>
                <p>
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Respond to your inquiries</li>
                  <li>Provide legal services</li>
                  <li>Send you updates about your case</li>
                  <li>Improve our website and services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-sandBeige">Information Sharing</h2>
                <p>
                  We do not sell or rent your personal information to third parties. We may share your information with:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Service providers who assist in our operations</li>
                  <li>Legal authorities when required by law</li>
                  <li>Other parties with your consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-sandBeige">Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-sandBeige">Your Rights</h2>
                <p>
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of communications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-sandBeige">Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy, please contact us at:
                </p>
                <div className="mt-4">
                  <p>Law Offices of Garry A Payton</p>
                  <p>320 West Ohio St</p>
                  <p>Chicago, IL 60614</p>
                  <p>Phone: <a href="tel:+13126710751" className="text-warmGold hover:text-softRed">+1 312-671-0751</a></p>
                  <p>Email: <a href="mailto:staff@garrypaytonlaw.com" className="text-warmGold hover:text-softRed">staff@garrypaytonlaw.com</a></p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-sandBeige">Updates to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. The latest version will always be posted on this page with the effective date.
                </p>
                <p className="mt-4">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 