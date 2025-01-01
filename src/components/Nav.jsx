import React, { useState } from "react";

export default function Nav() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="bg-[#19051F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#19051F]">
        <nav className="border-b-2 border-gray-200">
          <div className="container mx-auto flex items-center justify-between py-4">
            <a href="/" className="flex items-center space-x-2">
              {/* <svg
                className="h-10 text-blue-600"
                width="51"
                height="70"
                viewBox="0 0 51 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0)">
                  <path
                    d="M1 53H27.9022C40.6587 53 51 42.7025 51 30H24.0978C11.3412 30 1 40.2975 1 53Z"
                    fill="#76A9FA"
                  ></path>
                  <path
                    d="M-0.876544 32.1644L-0.876544 66.411C11.9849 66.411 22.4111 55.9847 22.4111 43.1233L22.4111 8.87674C10.1196 8.98051 0.518714 19.5571 -0.876544 32.1644Z"
                    fill="#A4CAFE"
                  ></path>
                  <path
                    d="M50 5H23.0978C10.3413 5 0 15.2975 0 28H26.9022C39.6588 28 50 17.7025 50 5Z"
                    fill="#1C64F2"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="51" height="70" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg> */}
              <span className="text-2xl font-semibold text-yellow-500">
                AJ Mehta Diamonds
              </span>
            </a>
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-gray-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg inline-flex items-center justify-center"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 text-white">
              <a
                href="/about"
                className="text-lg font-medium text-gray-100 hover:text-blue-600 transition duration-200"
              >
                About
              </a>
              {/* <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="text-lg font-medium text-gray-100 hover:text-blue-600 flex items-center space-x-1"
                >
                  <span>Diamonds</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-200 transform"
                    style={{
                      transform: dropdownOpen
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                {dropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-20">
                    <ul className="py-2">
                      <li>
                        <a
                          href="info"
                          className="block px-4 py-2 text-black hover:bg-gray-300 transition duration-200"
                        >
                          Information
                        </a>
                      </li>
                      <li>
                        <a
                          href="grade"
                          className="block px-4 py-2 text-black hover:bg-gray-300 transition duration-200"
                        >
                          Grading
                        </a>
                      </li>
                      <li>
                        <a
                          href="manuf"
                          className="block px-4 py-2 text-black hover:bg-gray-300 transition duration-200"
                        >
                          Manufacturing
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div> */}

              <a
                href="/grade"
                className="text-lg font-medium text-gray-100 hover:text-blue-600 transition duration-200"
              >
                Grading
              </a>

              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="text-lg font-medium text-gray-100 hover:text-blue-600 flex items-center space-x-1"
                >
                  <span>Policies</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-200 transform"
                    style={{
                      transform: dropdownOpen
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                {dropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-20">
                    <ul className="py-2">
                      <li>
                        <a
                          href="/privacy"
                          className="block px-4 py-2 text-black hover:bg-gray-300 transition duration-200"
                        >
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a
                          href="/tnc"
                          className="block px-4 py-2 text-black hover:bg-gray-300 transition duration-200"
                        >
                          Terms & Conditions
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <a
                href="/contact"
                className="text-lg font-medium text-gray-100 hover:text-blue-600 transition duration-200"
              >
                Contact
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
