import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Practice Areas | Garry Payton Law',
  description: 'Explore our areas of legal expertise and how we can help you.',
}

export default function PracticeAreasPage() {
  return (
    <div className="min-h-screen bg-midnight">
      <main className="pt-16">
        <section className="max-w-4xl mx-auto px-4 py-16">
          <div className="prose prose-neutral dark:prose-invert">
            <h1 className="text-3xl font-bold mb-8 text-sandBeige">Practice Areas</h1>
            {/* Add your practice areas content here */}
          </div>
        </section>
      </main>
    </div>
  )
} 