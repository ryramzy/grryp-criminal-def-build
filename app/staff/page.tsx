import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Staff | Garry Payton Law',
  description: 'Meet our experienced legal staff dedicated to serving your needs.',
}

export default function StaffPage() {
  return (
    <div className="min-h-screen bg-midnight">
      <main className="pt-16">
        <section className="max-w-4xl mx-auto px-4 py-16">
          <div className="prose prose-neutral dark:prose-invert">
            <h1 className="text-3xl font-bold mb-8 text-sandBeige">Staff</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Garry Payton */}
              <div className="bg-midnight/50 p-6 rounded-lg border-2 border-warmGold/30">
                <div className="aspect-w-3 aspect-h-4 mb-6">
                  <Image
                    src="/images/garry-payton.jpg"
                    alt="Garry Payton"
                    fill
                    className="object-cover rounded-lg"
                    priority
                  />
                </div>
                <h2 className="text-2xl font-bold text-sandBeige mb-2">Garry Payton</h2>
                <p className="text-warmGold mb-4">Founding Attorney</p>
                <p className="text-white mb-6">
                  With over 20 years of experience in criminal defense, Garry Payton has established himself as a leading attorney in federal sentencing and post-conviction relief. His dedication to justice and client advocacy has resulted in numerous successful outcomes for his clients.
                </p>

                {/* Credentials */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-warmGold mb-2">Bar Admissions</h3>
                    <ul className="list-disc list-inside text-white space-y-1">
                      <li>Illinois State Bar (2000)</li>
                      <li>U.S. District Court, Northern District of Illinois</li>
                      <li>U.S. Court of Appeals, 7th Circuit</li>
                      <li>U.S. Supreme Court</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-warmGold mb-2">Education</h3>
                    <ul className="list-disc list-inside text-white space-y-1">
                      <li>Juris Doctor, University of Illinois College of Law</li>
                      <li>Bachelor of Arts, Political Science, University of Chicago</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-warmGold mb-2">Professional Memberships</h3>
                    <ul className="list-disc list-inside text-white space-y-1">
                      <li>American Bar Association</li>
                      <li>Illinois State Bar Association</li>
                      <li>Chicago Bar Association</li>
                      <li>National Association of Criminal Defense Lawyers</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-warmGold mb-2">Awards & Recognition</h3>
                    <ul className="list-disc list-inside text-white space-y-1">
                      <li>Super Lawyers - Criminal Defense (2018-2023)</li>
                      <li>Best Lawyers in America - Criminal Defense (2019-2023)</li>
                      <li>Martindale-Hubbell AV Preeminent Rating</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Support Staff */}
              <div className="space-y-8">
                <div className="bg-midnight/50 p-6 rounded-lg border-2 border-warmGold/30">
                  <h2 className="text-2xl font-bold text-sandBeige mb-2">Legal Team</h2>
                  <p className="text-white mb-6">
                    Our experienced legal team works closely with clients to provide comprehensive support throughout their cases. Each team member brings specialized expertise to ensure the best possible outcomes.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-warmGold mb-2">Senior Paralegals</h3>
                      <ul className="list-disc list-inside text-white space-y-1">
                        <li>Certified Paralegal (CP) designation</li>
                        <li>Specialized in federal criminal defense</li>
                        <li>Extensive experience in post-conviction relief</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-warmGold mb-2">Legal Assistants</h3>
                      <ul className="list-disc list-inside text-white space-y-1">
                        <li>Dedicated to client communication</li>
                        <li>Expertise in case management</li>
                        <li>Proficient in legal research and documentation</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-warmGold mb-2">Support Staff</h3>
                      <ul className="list-disc list-inside text-white space-y-1">
                        <li>Professional administrative team</li>
                        <li>Multilingual capabilities</li>
                        <li>24/7 emergency support</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="bg-midnight/50 p-6 rounded-lg border-2 border-warmGold/30 text-center">
                  <h2 className="text-2xl font-bold text-sandBeige mb-4">Ready to Get Started?</h2>
                  <p className="text-white mb-6">
                    Contact our team today for a confidential consultation about your case.
                  </p>
                  <a
                    href="/contact"
                    className="inline-block px-6 py-3 bg-warmGold text-midnight rounded-md hover:bg-softRed transition-colors focus:outline-none focus:ring-2 focus:ring-warmGold font-semibold"
                  >
                    Schedule a Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 