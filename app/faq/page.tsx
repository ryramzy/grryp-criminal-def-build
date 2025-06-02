import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Garry Payton Law',
  description: 'Get answers to common questions about criminal defense, federal sentencing, and legal representation.',
  openGraph: {
    title: 'Frequently Asked Questions | Garry Payton Law',
    description: 'Get answers to common questions about criminal defense, federal sentencing, and legal representation.',
    type: 'website',
  },
}

const faqs = [
  {
    question: 'What should I do if I am arrested?',
    answer: 'If you are arrested, remain silent and request an attorney immediately. Do not make any statements to law enforcement without legal representation. Contact our office as soon as possible, and we will guide you through the process.'
  },
  {
    question: 'How much does a criminal defense attorney cost?',
    answer: 'Legal fees vary depending on the complexity of your case, the charges you face, and the level of representation required. We offer initial consultations to discuss your case and provide transparent fee information.'
  },
  {
    question: 'What is the difference between state and federal charges?',
    answer: "State charges are prosecuted by state authorities and typically involve violations of state laws. Federal charges are prosecuted by federal authorities and involve violations of federal laws. Federal cases often carry more severe penalties and are handled in federal court."
  },
  {
    question: 'Can I get my sentence reduced?',
    answer: "Yes, there are several ways to seek sentence reduction, including compassionate release, sentence modification, and clemency. Our firm specializes in post-conviction relief and can evaluate your case to determine the best approach."
  },
  {
    question: 'What is compassionate release?',
    answer: "Compassionate release allows for early release from prison based on extraordinary and compelling circumstances, such as serious medical conditions, advanced age, or family circumstances. We can help you determine if you qualify and guide you through the application process."
  },
  {
    question: 'How long does a criminal case typically take?',
    answer: "The duration of a criminal case varies widely depending on its complexity, the court's schedule, and whether it goes to trial. Some cases can be resolved in months, while others may take years. We will keep you informed throughout the process."
  },
  {
    question: 'What should I bring to my initial consultation?',
    answer: 'Bring any relevant documents, such as court papers, police reports, or correspondence with law enforcement. Also, prepare a timeline of events and any questions you have. The more information you can provide, the better we can assess your case.'
  },
  {
    question: 'Do you handle cases outside of Illinois?',
    answer: 'Yes, we handle federal criminal cases throughout the United States. While our office is in Chicago, we can represent clients in federal courts across the country.'
  }
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-midnight">
      <main className="pt-16">
        <section className="max-w-4xl mx-auto px-4 py-16">
          <div className="prose prose-neutral dark:prose-invert">
            <h1 className="text-3xl font-bold mb-8 text-sandBeige">Frequently Asked Questions</h1>
            
            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-midnight/50 p-6 rounded-lg border-2 border-warmGold/30"
                >
                  <h2 className="text-xl font-semibold mb-4 text-sandBeige">{faq.question}</h2>
                  <p className="text-white">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <h2 className="text-2xl font-semibold mb-4 text-sandBeige">Still Have Questions?</h2>
              <p className="text-white mb-6">
                Contact us for a confidential consultation about your specific case.
              </p>
              <a
                href="/contact"
                className="inline-block px-6 py-3 bg-warmGold text-midnight rounded-md hover:bg-softRed transition-colors focus:outline-none focus:ring-2 focus:ring-warmGold font-semibold"
              >
                Contact Us Now
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 