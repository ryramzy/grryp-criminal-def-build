import Link from 'next/link'

export function SocialBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-midnight/80 backdrop-blur-sm border-t border-tealBlue/20">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex justify-center space-x-6">
          <Link
            href="https://www.linkedin.com/in/garry-payton-93b57233/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sandBeige hover:text-warmGold transition-colors"
            aria-label="Visit our LinkedIn profile"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </Link>
          <Link
            href="https://www.facebook.com/share/16DPEiGVup/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sandBeige hover:text-warmGold transition-colors"
            aria-label="Visit our Facebook page"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
} 