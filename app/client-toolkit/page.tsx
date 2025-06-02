import { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '../components/header'
import Footer from '../components/footer'

export const metadata: Metadata = {
  title: 'Client Toolkit | Garry Payton Law',
  description: 'Essential resources and guidance to support you through your legal journey. Download helpful documents, find answers to common questions, and access emergency contacts.',
  openGraph: {
    title: 'Client Toolkit | Garry Payton Law',
    description: 'Essential resources and guidance to support you through your legal journey.',
    type: 'website',
  },
}

const resources = [
  {
    title: "What to Do If You're Arrested",
    description: "A step-by-step guide to protect your rights and prepare for legal proceedings.",
    pdf: "/resources/arrest-guide.pdf"
  },
  {
    title: "How to Prepare for Your Consultation",
    description: "Make the most of your initial meeting with our legal team.",
    pdf: "/resources/consultation-prep.pdf"
  },
  {
    title: "Client Rights in Criminal Defense Cases",
    description: "Understand your fundamental rights and how we protect them.",
    pdf: "/resources/client-rights.pdf"
  },
  {
    title: "Courtroom Do's and Don'ts",
    description: "Essential guidelines for courtroom conduct and preparation.",
    pdf: "/resources/courtroom-guide.pdf"
  }
]

const faqs = [
  {
    question: "What should I expect during my first court appearance?",
    answer: "Your first court appearance, or arraignment, is where you'll be formally charged and enter your plea. We'll be there to guide you through the process, explain the charges, and help you understand your options. The hearing typically lasts 15-30 minutes, and we'll prepare you thoroughly beforehand."
  },
  {
    question: "How long does a typical criminal case take?",
    answer: "The duration varies significantly based on the case's complexity, court schedule, and specific circumstances. Simple misdemeanors might resolve in weeks, while complex felonies could take months or longer. We'll provide a realistic timeline during your initial consultation."
  },
  {
    question: "Can I contact Garry Payton directly?",
    answer: "Yes, Attorney Payton is directly accessible to all clients. While our support team handles many initial communications, Garry personally oversees all cases and is available for critical matters. We maintain an open line of communication throughout your case."
  },
  {
    question: "What's attorney-client privilege?",
    answer: "Attorney-client privilege is a fundamental legal protection that keeps your communications with us confidential. This means you can speak freely with us about your case without fear of disclosure. This privilege extends to all communications between you and our legal team."
  }
]

const emergencyContacts = [
  {
    category: "Local Courts",
    contacts: [
      { name: "Sacramento County Superior Court", number: "(916) 874-5522" },
      { name: "Federal Court - Eastern District", number: "(916) 930-4000" }
    ]
  },
  {
    category: "Local Jails",
    contacts: [
      { name: "Sacramento County Main Jail", number: "(916) 874-6752" },
      { name: "Rio Cosumnes Correctional Center", number: "(916) 874-6752" }
    ]
  },
  {
    category: "Emergency Resources",
    contacts: [
      { name: "Firm Emergency Line (24/7)", number: "(916) 555-0123" },
      { name: "Legal Aid Services", number: "(916) 551-2150" }
    ]
  }
]

export default function ClientToolkit() {
  return (
    <div className="min-h-screen bg-midnight">
      <Header />
      <main className="pt-16">
        {/* Header Section */}
        <section className="bg-midnight/80 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-sandBeige mb-4">Client Toolkit</h1>
            <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
              Essential resources and guidance to support you through your legal journey.
            </p>
          </div>
        </section>

        {/* Downloadable Documents */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-sandBeige mb-8">Downloadable Documents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resources.map((resource, index) => (
                <div key={index} className="bg-midnight/50 rounded-lg border-2 border-warmGold/30 p-6">
                  <h3 className="text-xl font-semibold text-warmGold mb-2">{resource.title}</h3>
                  <p className="text-white mb-4">{resource.description}</p>
                  <a
                    href={resource.pdf}
                    className="inline-block px-4 py-2 bg-warmGold text-midnight rounded-md hover:bg-softRed transition-colors focus:outline-none focus:ring-2 focus:ring-warmGold font-semibold"
                  >
                    Download PDF
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-midnight/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-sandBeige mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-midnight/50 rounded-lg border-2 border-warmGold/30 p-6">
                  <h3 className="text-xl font-semibold text-warmGold mb-2">{faq.question}</h3>
                  <p className="text-white">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Contacts */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-sandBeige mb-8">Emergency Contacts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {emergencyContacts.map((category, index) => (
                <div key={index} className="bg-midnight/50 rounded-lg border-2 border-warmGold/30 p-6">
                  <h3 className="text-xl font-semibold text-warmGold mb-4">{category.category}</h3>
                  <ul className="space-y-3">
                    {category.contacts.map((contact, contactIndex) => (
                      <li key={contactIndex} className="text-white">
                        <p className="font-semibold">{contact.name}</p>
                        <p className="text-warmGold">{contact.number}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-midnight/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-sandBeige mb-4">Need personalized help?</h2>
            <p className="text-white text-lg mb-8">
              Contact us for a confidential consultation.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-warmGold text-midnight rounded-md hover:bg-softRed transition-colors focus:outline-none focus:ring-2 focus:ring-warmGold font-semibold text-lg"
            >
              Contact Us Now
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 