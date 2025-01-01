import React from 'react'

export default function Footer() {
  return (
<footer className="bg-black py-12 text-white">
<div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Addresses */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Locations</h3>
            <ul>
              <li className="mb-2 text-gray-300">
                7th Floor Bharat Diamond Bourse, Bandra Mumbai.
              </li>
              <li className="mb-2 text-gray-300">
                1105, Chevelair House, Kowloon, HONG KONG
              </li>
              <li className="mb-2 text-gray-300">
                18 E, Almas Tower, JLT, Sheikh Zayed Road, Dubai.
              </li>
            </ul>
          </div>

          {/* Contact & Email */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul>
              <li className="mb-2 text-gray-300">
                Email:{' '}
                <a
                  href="mailto:contact@pnshahdiamonds.com"
                  className="text-yellow-400 hover:text-yellow-300 transition-all"
                >
                  info@ajmehta.com
                </a>
              </li>
              <li className="mb-2 text-gray-300">
                Phone:{' '}
                <a
                  href="tel:+1234567890"
                  className="text-yellow-400 hover:text-yellow-300 transition-all"
                >
                  (+91) 22 4249 1111
                </a>
              </li>
            </ul>
          </div>

          {/* Links & Policies */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-300 hover:text-yellow-400 transition-all duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="about"
                  className="text-gray-300 hover:text-yellow-400 transition-all duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="grade"
                  className="text-gray-300 hover:text-yellow-400 transition-all duration-300"
                >
                  Grading
                </a>
              </li>
              <li>
                <a
                  href="contact"
                  className="text-gray-300 hover:text-yellow-400 transition-all duration-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="privacy"
                  className="text-gray-300 hover:text-yellow-400 transition-all duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="tnc"
                  className="text-gray-300 hover:text-yellow-400 transition-all duration-300"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} AJ Mehta Diamonds. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
