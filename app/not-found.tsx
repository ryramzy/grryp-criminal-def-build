import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-midnight text-white p-8">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl mb-8">The page you are looking for does not exist.</p>
      <Link 
        href="/" 
        className="bg-warmGold text-midnight px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
      >
        Return Home
      </Link>
    </div>
  )
}
