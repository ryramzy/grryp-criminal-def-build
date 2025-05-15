import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Practice Areas | Garry Payton Law',
  description: 'Expert criminal defense and post-conviction relief services in Sacramento. Specializing in habeas corpus, sentence modification, and compassionate release.',
}

export default function PracticeAreasPage() {
  return (
    <div className="min-h-screen bg-midnight">
      <main className="pt-16">
        <section className="max-w-4xl mx-auto px-4 py-16">
          <div className="prose prose-neutral dark:prose-invert">
            <h1 className="text-3xl font-bold mb-8 text-sandBeige">Practice Areas</h1>
            
            {/* Post-Conviction Relief Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-sandBeige">Post-Conviction Relief</h2>
              <p className="mb-6 text-tealBlue">
                At Garry Payton Law, we specialize in navigating complex post-conviction relief options to challenge unlawful convictions, reduce excessive sentences, and secure early release for deserving clients. Our practice is dedicated to pursuing justice through strategic advocacy in federal courts and administrative processes.
              </p>
            </section>

            {/* Habeas Corpus Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-sandBeige">Habeas Corpus & § 2255 Motions</h2>
              <p className="mb-4 text-tealBlue">
                We challenge unlawful convictions and sentences through federal habeas corpus petitions, including:
              </p>
              <div className="space-y-6">
                <div className="bg-midnight/50 p-6 rounded-lg border-2 border-warmGold">
                  <h3 className="text-xl font-semibold mb-3 text-sandBeige">28 U.S.C. § 2241 Petitions</h3>
                  <p className="mb-4 text-tealBlue">
                    Filed in the district of incarceration, these petitions allege that a defendant's custody violates U.S. laws or treaties. We advocate for resentencing hearings where both defense and government present arguments, potentially leading to sentence reduction or release.
                  </p>
                </div>
                <div className="bg-midnight/50 p-6 rounded-lg border-2 border-warmGold">
                  <h3 className="text-xl font-semibold mb-3 text-sandBeige">28 U.S.C. § 2255 Motions</h3>
                  <p className="mb-4 text-tealBlue">
                    Brought before the sentencing court, these motions seek to vacate, set aside, or correct sentences due to constitutional violations such as ineffective assistance of counsel, lack of court jurisdiction, or excessive punishment under the Eighth Amendment.
                  </p>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-block mt-6 px-6 py-3 bg-warmGold text-midnight rounded-md hover:bg-softRed transition-colors"
              >
                Learn More
              </Link>
            </section>

            {/* Judicial Sentence Modification Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-sandBeige">Judicial Sentence Modification</h2>
              <p className="mb-4 text-tealBlue">
                We file motions to revisit or adjust federal sentences based on:
              </p>
              <ul className="list-disc pl-6 mb-6 text-tealBlue space-y-2">
                <li>Legal changes (e.g., amendments to sentencing guidelines)</li>
                <li>Mitigating factors not adequately considered</li>
                <li>Disproportionate outcomes (e.g., stacked 924(c) charges)</li>
              </ul>
              <Link
                href="/contact"
                className="inline-block mt-6 px-6 py-3 bg-warmGold text-midnight rounded-md hover:bg-softRed transition-colors"
              >
                Learn More
              </Link>
            </section>

            {/* Sentence Reduction & Clemency Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-sandBeige">Sentence Reduction & Clemency</h2>
              
              <div className="space-y-8">
                <div className="bg-midnight/50 p-6 rounded-lg border-2 border-warmGold">
                  <h3 className="text-xl font-semibold mb-3 text-sandBeige">Federal Sentence Reduction (First Step Act)</h3>
                  <p className="mb-4 text-tealBlue">
                    We pursue sentence reductions under the First Step Act of 2018, including:
                  </p>
                  <ul className="list-disc pl-6 mb-4 text-tealBlue space-y-2">
                    <li>Retroactive application of the Fair Sentencing Act</li>
                    <li>Recalibrating custodial exposure under recidivism provisions</li>
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-block mt-4 px-6 py-3 bg-warmGold text-midnight rounded-md hover:bg-softRed transition-colors"
                  >
                    Learn More
                  </Link>
                </div>

                <div className="bg-midnight/50 p-6 rounded-lg border-2 border-warmGold">
                  <h3 className="text-xl font-semibold mb-3 text-sandBeige">Executive Clemency & Pardons</h3>
                  <p className="mb-4 text-tealBlue">
                    We prepare thorough commutation and pardon petitions showcasing rehabilitation, community contributions, and mitigating life factors.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block mt-4 px-6 py-3 bg-warmGold text-midnight rounded-md hover:bg-softRed transition-colors"
                  >
                    Learn More
                  </Link>
                </div>

                <div className="bg-midnight/50 p-6 rounded-lg border-2 border-warmGold">
                  <h3 className="text-xl font-semibold mb-3 text-sandBeige">Substantial Assistance & Rule 35 Motions</h3>
                  <p className="mb-4 text-tealBlue">
                    For clients assisting federal investigations, we file Rule 35(b) motions for sentence reductions, ensuring proper documentation and strategic timing.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block mt-4 px-6 py-3 bg-warmGold text-midnight rounded-md hover:bg-softRed transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </section>

            {/* Compassionate & Humanitarian Release Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-sandBeige">Compassionate & Humanitarian Release</h2>
              
              <div className="space-y-8">
                <div className="bg-midnight/50 p-6 rounded-lg border-2 border-warmGold">
                  <h3 className="text-xl font-semibold mb-3 text-sandBeige">Compassionate Release Petitions</h3>
                  <p className="mb-4 text-tealBlue">
                    Filed under 18 U.S.C. § 3582(c)(1)(A) for reasons like:
                  </p>
                  <ul className="list-disc pl-6 mb-4 text-tealBlue space-y-2">
                    <li>Terminal illness or severe health conditions</li>
                    <li>Family responsibilities</li>
                    <li>Rehabilitation milestones</li>
                  </ul>
                  <p className="mb-4 text-tealBlue">
                    We handle both the BOP administrative route and direct court filings.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block mt-4 px-6 py-3 bg-warmGold text-midnight rounded-md hover:bg-softRed transition-colors"
                  >
                    Learn More
                  </Link>
                </div>

                <div className="bg-midnight/50 p-6 rounded-lg border-2 border-warmGold">
                  <h3 className="text-xl font-semibold mb-3 text-sandBeige">Elderly & Terminally Ill Inmate Advocacy</h3>
                  <p className="mb-4 text-tealBlue">Focused on:</p>
                  <ul className="list-disc pl-6 mb-4 text-tealBlue space-y-2">
                    <li>Medical urgency and dignity</li>
                    <li>Sentence reduction eligibility</li>
                    <li>Rehabilitation evidence and risk assessment</li>
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-block mt-4 px-6 py-3 bg-warmGold text-midnight rounded-md hover:bg-softRed transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </section>

            {/* BOP Advocacy Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-sandBeige">BOP Advocacy & Transition</h2>
              
              <div className="bg-midnight/50 p-6 rounded-lg border-2 border-warmGold">
                <h3 className="text-xl font-semibold mb-3 text-sandBeige">BOP Advocacy & Home Confinement</h3>
                <p className="mb-4 text-tealBlue">We assist with:</p>
                <ul className="list-disc pl-6 mb-4 text-tealBlue space-y-2">
                  <li>Earned time credits</li>
                  <li>Facility transfers or reclassification</li>
                  <li>Halfway house placement and home confinement</li>
                </ul>
                <Link
                  href="/contact"
                  className="inline-block mt-4 px-6 py-3 bg-warmGold text-midnight rounded-md hover:bg-softRed transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  )
} 