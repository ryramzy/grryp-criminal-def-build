import Link from 'next/link'

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block ml-1 transition-transform duration-200 group-hover:translate-x-1"
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
    <footer className="gradient-midnight border-t border-warmGold/30 mt-20">
      <div className="container">
        <div className="py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="text-center md:text-left">
              <h3 className="heading-4 mb-4">Garry A. Payton Law</h3>
              <p className="body-small text-sandBeige/80 mb-4">
                Experienced criminal defense attorney serving Chicago and surrounding areas. 
                Dedicated to protecting your rights and providing expert legal representation.
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a
                  href="tel:+13126710751"
                  className="btn-ghost text-sm"
                  aria-label="Call us at +1 312-671-0751"
                >
                  📞 Call Now
                </a>
                <a
                  href="mailto:garry.payton@gmail.com"
                  className="btn-ghost text-sm"
                  aria-label="Email us at garry.payton@gmail.com"
                >
                  ✉️ Email
                </a>
              </div>
            </div>

            {/* Contact Information */}
            <div className="text-center md:text-left">
              <h4 className="heading-4 mb-4">Contact Information</h4>
              <div className="space-y-3">
                <div className="body-small">
                  <div className="font-semibold text-sandBeige">Law Offices of Garry A. Payton</div>
                  <div className="text-sandBeige/80">320 West Ohio Street, Suite 3W</div>
                  <div className="text-sandBeige/80">Chicago, Illinois 60654</div>
                  <div className="text-sandBeige/80">United States</div>
                </div>
                <div className="space-y-2">
                  <div>
                    <a 
                      href="tel:+13126710751" 
                      className="link group"
                      aria-label="Call us at +1 312-671-0751"
                    >
                      +1 312-671-0751
                      <ArrowIcon />
                    </a>
                  </div>
                  <div>
                    <a 
                      href="mailto:garry.payton@gmail.com" 
                      className="link group"
                      aria-label="Email us at garry.payton@gmail.com"
                    >
                      garry.payton@gmail.com
                      <ArrowIcon />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="text-center md:text-left">
              <h4 className="heading-4 mb-4">Service Areas</h4>
              <div className="space-y-2">
                <div className="body-small text-sandBeige/80">
                  Serving throughout the United States and its territories
                </div>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  <span className="px-3 py-1 bg-warmGold/10 text-warmGold text-xs rounded-full">
                    Federal Courts
                  </span>
                  <span className="px-3 py-1 bg-warmGold/10 text-warmGold text-xs rounded-full">
                    State Courts
                  </span>
                  <span className="px-3 py-1 bg-warmGold/10 text-warmGold text-xs rounded-full">
                    Post-Conviction
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-warmGold/20 my-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="body-small text-sandBeige/80">
                © {new Date().getFullYear()} Garry A. Payton Law. All rights reserved.
              </p>
            </div>
            
            <div className="flex space-x-6">
              <Link 
                href="/privacy-policy" 
                className="link-ghost text-sm group"
                aria-label="View our privacy policy"
              >
                Privacy Policy
                <ArrowIcon />
              </Link>
              <Link 
                href="/contact" 
                className="link-ghost text-sm group"
                aria-label="Contact us"
              >
                Contact Us
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
