import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Practice Areas | Garry Payton Law',
  description: 'Expert criminal defense and post-conviction relief services in Chicago. Specializing in habeas corpus, sentence modification, and compassionate release.',
  openGraph: {
    title: 'Practice Areas | Garry Payton Law',
    description: 'Expert criminal defense and post-conviction relief services in Chicago. Specializing in habeas corpus, sentence modification, and compassionate release.',
    type: 'website',
  },
}

export default function PracticeAreasPage() {
  return (
    <div className="min-h-screen gradient-midnight">
      <main className="pt-20">
        <section className="container section">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="heading-1 mb-6">Practice Areas</h1>
              <p className="body-large max-w-3xl mx-auto">
                At Garry Payton Law, we specialize in navigating complex post-conviction relief options to challenge unlawful convictions, reduce excessive sentences, and secure early release for deserving clients. Our practice is dedicated to pursuing justice through strategic advocacy in federal courts and administrative processes.
              </p>
            </div>
            
            {/* Post-Conviction Relief Section */}
            <section className="mb-16">
              <div className="card-elevated p-8">
                <h2 className="heading-2 mb-6">Post-Conviction Relief</h2>
                <p className="body-large mb-8">
                  We specialize in navigating complex post-conviction relief options to challenge unlawful convictions, reduce excessive sentences, and secure early release for deserving clients. Our practice is dedicated to pursuing justice through strategic advocacy in federal courts and administrative processes.
                </p>
              </div>
            </section>

            {/* Habeas Corpus Section */}
            <section className="mb-16">
              <div className="card p-8">
                <h2 className="heading-2 mb-6">Habeas Corpus & § 2255 Motions</h2>
                <p className="body-large mb-8">
                  We challenge unlawful convictions and sentences through federal habeas corpus petitions, including:
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                  <div className="card-elevated p-6">
                    <h3 className="heading-4 mb-4 text-warmGold">28 U.S.C. § 2241 Petitions</h3>
                    <p className="body mb-4">
                      Filed in the district of incarceration, these petitions allege that a defendant's custody violates U.S. laws or treaties. We advocate for resentencing hearings where both defense and government present arguments, potentially leading to sentence reduction or release.
                    </p>
                  </div>
                  <div className="card-elevated p-6">
                    <h3 className="heading-4 mb-4 text-warmGold">28 U.S.C. § 2255 Motions</h3>
                    <p className="body mb-4">
                      Brought before the sentencing court, these motions seek to vacate, set aside, or correct sentences due to constitutional violations such as ineffective assistance of counsel, lack of court jurisdiction, or excessive punishment under the Eighth Amendment.
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <Link href="/contact" className="btn">
                    Learn More
                  </Link>
                </div>
              </div>
            </section>

            {/* Judicial Sentence Modification Section */}
            <section className="mb-16">
              <div className="card p-8">
                <h2 className="heading-2 mb-6">Judicial Sentence Modification</h2>
                <p className="body-large mb-6">
                  We file motions to revisit or adjust federal sentences based on:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-warmGold/10 p-4 rounded-xl border border-warmGold/20">
                    <h4 className="font-semibold text-warmGold mb-2">Legal Changes</h4>
                    <p className="body-small">Amendments to sentencing guidelines</p>
                  </div>
                  <div className="bg-warmGold/10 p-4 rounded-xl border border-warmGold/20">
                    <h4 className="font-semibold text-warmGold mb-2">Mitigating Factors</h4>
                    <p className="body-small">Not adequately considered factors</p>
                  </div>
                  <div className="bg-warmGold/10 p-4 rounded-xl border border-warmGold/20">
                    <h4 className="font-semibold text-warmGold mb-2">Disproportionate Outcomes</h4>
                    <p className="body-small">Stacked 924(c) charges</p>
                  </div>
                </div>
                <div className="text-center">
                  <Link href="/contact" className="btn">
                    Learn More
                  </Link>
                </div>
              </div>
            </section>

            {/* Sentence Reduction & Clemency Section */}
            <section className="mb-16">
              <div className="card p-8">
                <h2 className="heading-2 mb-8 text-center">Sentence Reduction & Clemency</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="card-elevated p-6">
                    <h3 className="heading-4 mb-4 text-warmGold">Federal Sentence Reduction (First Step Act)</h3>
                    <p className="body mb-4">
                      We pursue sentence reductions under the First Step Act of 2018, including:
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-warmGold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="body-small">Retroactive application of the Fair Sentencing Act</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-warmGold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="body-small">Recalibrating custodial exposure under recidivism provisions</span>
                      </li>
                    </ul>
                    <Link href="/contact" className="btn w-full">
                      Learn More
                    </Link>
                  </div>

                  <div className="card-elevated p-6">
                    <h3 className="heading-4 mb-4 text-warmGold">Executive Clemency & Pardons</h3>
                    <p className="body mb-6">
                      We prepare thorough commutation and pardon petitions showcasing rehabilitation, community contributions, and mitigating life factors.
                    </p>
                    <Link href="/contact" className="btn w-full">
                      Learn More
                    </Link>
                  </div>

                  <div className="card-elevated p-6">
                    <h3 className="heading-4 mb-4 text-warmGold">Substantial Assistance & Rule 35 Motions</h3>
                    <p className="body mb-6">
                      For clients assisting federal investigations, we file Rule 35(b) motions for sentence reductions, ensuring proper documentation and strategic timing.
                    </p>
                    <Link href="/contact" className="btn w-full">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Compassionate & Humanitarian Release Section */}
            <section className="mb-16">
              <div className="card p-8">
                <h2 className="heading-2 mb-8 text-center">Compassionate & Humanitarian Release</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="card-elevated p-6">
                    <h3 className="heading-4 mb-4 text-warmGold">Compassionate Release Petitions</h3>
                    <p className="body mb-4">
                      Filed under 18 U.S.C. § 3582(c)(1)(A) for reasons like:
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-warmGold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="body-small">Terminal illness or severe health conditions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-warmGold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="body-small">Family responsibilities</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-warmGold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="body-small">Rehabilitation milestones</span>
                      </li>
                    </ul>
                    <p className="body-small mb-6 text-sandBeige/80">
                      We handle both the BOP administrative route and direct court filings.
                    </p>
                    <Link href="/contact" className="btn w-full">
                      Learn More
                    </Link>
                  </div>

                  <div className="card-elevated p-6">
                    <h3 className="heading-4 mb-4 text-warmGold">Elderly & Terminally Ill Inmate Advocacy</h3>
                    <p className="body mb-4">Focused on:</p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-warmGold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="body-small">Medical urgency and dignity</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-warmGold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="body-small">Sentence reduction eligibility</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-warmGold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="body-small">Rehabilitation evidence and risk assessment</span>
                      </li>
                    </ul>
                    <Link href="/contact" className="btn w-full">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* BOP Advocacy Section */}
            <section className="mb-16">
              <div className="card p-8">
                <h2 className="heading-2 mb-8 text-center">BOP Advocacy & Transition</h2>
                
                <div className="card-elevated p-8 max-w-4xl mx-auto">
                  <h3 className="heading-3 mb-6 text-warmGold text-center">BOP Advocacy & Home Confinement</h3>
                  <p className="body-large mb-8 text-center">We assist with:</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-warmGold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">⏰</span>
                      </div>
                      <h4 className="heading-4 mb-2">Earned Time Credits</h4>
                      <p className="body-small">Maximizing time credit opportunities</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-warmGold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🏢</span>
                      </div>
                      <h4 className="heading-4 mb-2">Facility Transfers</h4>
                      <p className="body-small">Reclassification and transfers</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-warmGold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🏠</span>
                      </div>
                      <h4 className="heading-4 mb-2">Home Confinement</h4>
                      <p className="body-small">Halfway house and home placement</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <Link href="/contact" className="btn">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  )
} 