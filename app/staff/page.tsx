import { Metadata } from 'next'

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
              {/* Profile Picture Placeholder */}
              <div className="flex-shrink-0 w-32 h-32 rounded-full bg-gray-700 flex items-center justify-center text-4xl text-sandBeige font-bold border-4 border-warmGold">
                {/* Replace with <Image /> when photo is available */}
                GP
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-warmGold mb-2">Garry A. Payton</h2>
                <h3 className="text-lg font-medium text-sandBeige mb-4">Attorney</h3>
                <p className="text-tealBlue mb-2">
                  With over 38 years of courtroom experience, Garry A. Payton is a relentless advocate for justice, specializing in federal sentencing, compassionate release, and high-stakes criminal defense. His proven track record and fearless approach have delivered transformative results for clients facing the most serious charges in both state and federal courts.
                </p>
                <p className="text-tealBlue">
                  Attorney Payton is dedicated to protecting the rights of the accused and providing expert legal representation with integrity, precision, and unwavering commitment.
                </p>
              </div>
            </div>

            {/* Paralegal Section */}
            <div className="flex flex-col md:flex-row items-center bg-midnight/70 border border-tealBlue/20 rounded-xl shadow p-6 md:p-8 gap-6 md:gap-10">
              {/* Profile Picture Placeholder */}
              <div className="flex-shrink-0 w-32 h-32 rounded-full bg-gray-700 flex items-center justify-center text-4xl text-sandBeige font-bold border-4 border-warmGold">
                {/* Replace with <Image /> when photo is available */}
                MS
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-warmGold mb-2">Matthew G. Sullivan</h2>
                <h3 className="text-lg font-medium text-sandBeige mb-4">Paralegal at the Law Offices of Garry A. Payton</h3>
                <p className="text-tealBlue mb-2">
                  With over a decade of experience fighting for the liberty of others, Matthew G. Sullivan is a dedicated paralegal committed to justice at both the state and federal levels. He began his career as a passionate advocate for federal prisoners seeking sentence reductions, honing his skills in complex criminal defense work.
                </p>
                <p className="text-tealBlue mb-2">
                  Sullivan's expertise spans a wide range of legal matters, including drafting parenting plans, speedy trial motions, Interstate Agreement on Detainer (IAD) letters and motions, clemency petitions, compassionate release motions, sentence reductions, and writs of certiorari before the United States Supreme Court. Known for his sharp legal research abilities and meticulous attention to detail, he is also a skilled legal writer who crafts compelling arguments to support his clients' cases.
                </p>
                <p className="text-tealBlue mb-2">
                  At the Law Offices of Garry A. Payton, Sullivan continues to be a relentless advocate for justice, ensuring every client receives thorough and strategic legal support. His unwavering dedication to defending individual rights makes him an invaluable asset to the legal team.
                </p>
                <p className="text-warmGold font-semibold mt-4">Fighting for Freedom. Protecting Your Rights.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 