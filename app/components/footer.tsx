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
          <p className="text-base text-sandBeige">
            © {new Date().getFullYear()} Garry Payton Law |{' '}
            <a href="tel:+19164614837" className="text-warmGold hover:text-softRed">
              (916) 461-4837
            </a>{' '}
            | Serving Sacramento and surrounding areas
          </p>
        </div>
      </div>
    </footer>
  )
}
