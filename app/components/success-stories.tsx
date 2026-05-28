'use client'

import Link from 'next/link'

export function SuccessStories() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-midnight/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-sandBeige mb-4">Our Victories</h2>
        <p className="text-white text-center text-lg mb-12 max-w-2xl mx-auto">
          Real results for real clients. Our track record speaks for itself.
        </p>

        <div className="space-y-8 mb-12">
          {/* Case 1 */}
          <div className="bg-midnight/50 rounded-lg border-2 border-warmGold/30 p-6 md:p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-warmGold mb-2">
                  Not Guilty on All Counts After Week-Long Jury Trial
                </h3>
                <p className="text-white/90 text-sm mb-4">Cook County, Illinois</p>
              </div>

              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <p className="text-white mb-4">
                  In 2022, our client was wrongfully accused of attempted first-degree murder. After a hard-fought jury trial, Attorney Garry Payton's strategic defense and thorough investigation led to a full acquittal. The jury returned a not-guilty verdict, and the client walked away with their life and future intact.
                </p>
                
                <blockquote className="border-l-4 border-warmGold pl-4 my-6 italic text-white/90">
                  "I was facing life behind bars, but Garry believed in me and never gave up. I owe him everything."
                  <footer className="mt-2 text-warmGold">— Patrick N.</footer>
                </blockquote>

                <p className="text-white font-semibold">
                  We don't just fight cases — we fight for people.
                </p>
              </div>
            </div>
          </div>

          {/* Case 2 */}
          <div className="bg-midnight/50 rounded-lg border-2 border-warmGold/30 p-6 md:p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-warmGold mb-2">
                  Not Guilty Verdict
                </h3>
                <p className="text-white/90 text-sm mb-4">2023</p>
              </div>

              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <blockquote className="border-l-4 border-warmGold pl-4 my-6 italic text-white/90">
                  "I was charged with a serious drug case, facing 40 years in prison based on my prior background. The case went to jury trial, where Attorney Garry Payton was successful in getting not guilty verdicts on all counts. I was able to return to my wife and kids that day."
                  <footer className="mt-2 text-warmGold">— Former Client</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/practice-areas"
            className="inline-block px-6 py-3 bg-warmGold text-midnight rounded-md hover:bg-softRed transition-colors focus:outline-none focus:ring-2 focus:ring-warmGold font-semibold text-center"
          >
            View More Cases
          </Link>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 border-2 border-warmGold text-warmGold rounded-md hover:bg-warmGold hover:text-midnight transition-colors focus:outline-none focus:ring-2 focus:ring-warmGold font-semibold text-center"
          >
            Schedule Consultation
          </Link>
        </div>
      </div>
    </section>
  )
} 