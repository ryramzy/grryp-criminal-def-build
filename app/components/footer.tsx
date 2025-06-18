import Link from 'next/link'

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-midnight/80 backdrop-blur-sm border-t border-tealBlue/20 mt-16">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-base text-sandBeige font-semibold">
            © {new Date().getFullYear()} Garry A. Payton Law. All rights reserved.
          </p>
          <div className="mt-2 text-sandBeige text-sm">
            <div>Law Offices of Garry A. Payton</div>
            <div>320 West Ohio Street, Suite 3W</div>
            <div>Chicago, Illinois 60654</div>
            <div>US</div>
            <div>
              tel: <a href="tel:+13126710751" className="text-warmGold hover:text-softRed focus:outline-none focus:ring-2 focus:ring-warmGold rounded">+1 312-671-0751</a>
            </div>
            <div>
              <a href="mailto:garry.payton@gmail.com" className="text-warmGold hover:text-softRed focus:outline-none focus:ring-2 focus:ring-warmGold rounded">garry.payton@gmail.com</a>
            </div>
            <div className="mt-2">Serving throughout the United States and its territories</div>
          </div>
          <div className="mt-4 text-sm text-sandBeige">
            <Link 
              href="/privacy-policy" 
              className="text-warmGold hover:text-softRed focus:outline-none focus:ring-2 focus:ring-warmGold rounded"
              aria-label="View our privacy policy"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
