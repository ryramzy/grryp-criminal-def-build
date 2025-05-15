import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Team | Garry Payton Law',
  description: 'Meet our experienced legal team dedicated to serving your needs.',
}

export default function StaffPage() {
  return (
    <div className="min-h-screen bg-midnight">
      <main className="pt-16">
        <section className="max-w-4xl mx-auto px-4 py-16">
          <div className="prose prose-neutral dark:prose-invert">
            <h1 className="text-3xl font-bold mb-8 text-sandBeige">Our Team</h1>
            {/* Add your staff content here */}
          </div>
        </section>
      </main>
    </div>
  )
} 