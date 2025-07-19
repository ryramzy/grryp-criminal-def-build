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

            {/* Attorney Section */}
            <div className="mb-12 flex flex-col md:flex-row items-center bg-midnight/70 border border-tealBlue/20 rounded-xl shadow p-6 md:p-8 gap-6 md:gap-10">
              <div className="flex-shrink-0 w-32 h-32 rounded-full overflow-hidden border-4 border-warmGold">
                <Image
                  src="/payton-headshot.jpg"
                  alt="Garry A. Payton"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-warmGold mb-2">Garry A. Payton</h2>
                <h3 className="text-lg font-medium text-sandBeige mb-4">Attorney</h3>
                <p className="text-white mb-2">
                  With over 38 years of courtroom experience, Garry A. Payton is a relentless advocate for justice, specializing in federal sentencing, compassionate release, and high-stakes criminal defense. His proven track record and fearless approach have delivered transformative results for clients facing the most serious charges in both state and federal courts.
                </p>
                <p className="text-white">
                  Attorney Payton is dedicated to protecting the rights of the accused and providing expert legal representation with integrity, precision, and unwavering commitment.
                </p>

                {/* Credentials */}
                <div className="mt-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-warmGold mb-2">Bar Admissions</h3>
                    <ul className="list-disc list-inside text-white space-y-1">
                      <li>Illinois State Bar (1987)</li>
                      <li>U.S. District Court, Northern District of Illinois</li>
                      <li>U.S. Court of Appeals, 7th Circuit</li>
                      <li>U.S. Court of Appeals, 8th Circuit</li>
                      <li>U.S. Supreme Court</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-warmGold mb-2">Education</h3>
                    <ul className="list-disc list-inside text-white space-y-1">
                      <li>Juris Doctor, University of Minnesota</li>
                      <li>Bachelor of Arts, Political Science, Southern Illinois University</li>
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
                </div>
              </div>
            </div>

            {/* Paralegal Section */}
            <div className="flex flex-col md:flex-row items-center bg-midnight/70 border border-tealBlue/20 rounded-xl shadow p-6 md:p-8 gap-6 md:gap-10">
              <div className="flex-shrink-0 w-32 h-32 rounded-full overflow-hidden border-4 border-warmGold">
                <Image
                  src="/sulivan-headshot.jpg"
                  alt="Matthew G. Sullivan"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-warmGold mb-2">Matthew G. Sullivan</h2>
                <h3 className="text-lg font-medium text-sandBeige mb-4">Paralegal at the Law Offices of Garry A. Payton</h3>
                <p className="text-white mb-2">
                  With over a decade of experience fighting for the liberty of others, Matthew G. Sullivan is a dedicated paralegal committed to justice at both the state and federal levels. He began his career as a passionate advocate for federal prisoners seeking sentence reductions, honing his skills in complex criminal defense work.
                </p>
                <p className="text-white mb-2">
                  Sullivan's expertise spans a wide range of legal matters, including drafting parenting plans, speedy trial motions, Interstate Agreement on Detainer (IAD) letters and motions, clemency petitions, compassionate release motions, sentence reductions, and writs of certiorari before the United States Supreme Court. Known for his sharp legal research abilities and meticulous attention to detail, he is also a skilled legal writer who crafts compelling arguments to support his clients' cases.
                </p>
                <p className="text-white mb-2">
                  At the Law Offices of Garry A. Payton, Sullivan continues to be a relentless advocate for justice, ensuring every client receives thorough and strategic legal support. His unwavering dedication to defending individual rights makes him an invaluable asset to the legal team.
                </p>
                <p className="text-warmGold font-semibold mt-4">Fighting for Freedom. Protecting Your Rights.</p>
              </div>
            </div>

            {/* Support Staff Section */}
            <div className="mt-12 bg-midnight/50 p-6 rounded-lg border-2 border-warmGold/30">
              <h2 className="text-2xl font-bold text-sandBeige mb-4">Legal Team</h2>
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
            <div className="mt-12 bg-midnight/50 p-6 rounded-lg border-2 border-warmGold/30 text-center">
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
        </section>
      </main>
    </div>
  )
} 