"use client"; // Ensure this is a client component for state management
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

// List of languages for the dropdown
const languages = [
  { code: "en", name: "English" },
  { code: "fr", name: "Français" },
  { code: "es", name: "Español" },
  { code: "de", name: "Deutsch" },
  { code: "pt", name: "Português" },
  { code: "ru", name: "Русский" },
  { code: "ar", name: "العربية" },
  { code: "zh", name: "中文" },
];

// RootLayout component that wraps the entire app
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to manage dropdown visibility
  const [menuOpen, setMenuOpen] = useState(false); // State to manage mobile menu visibility
  const [isScrolled, setIsScrolled] = useState(false); // State to manage header background color on scroll

  // Use effect to load selected language from localStorage (if available)
  useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage");
    if (savedLanguage) {
      setSelectedLanguage(savedLanguage);
    }
  }, []);

  // Handle language change
  const handleLanguageChange = (languageName: string) => {
    setSelectedLanguage(languageName);
    localStorage.setItem("selectedLanguage", languageName);
    setDropdownOpen(false); // Close dropdown after selecting a language
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Effect to handle scroll event for header background color change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // Set true if scrolled down, otherwise false
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* Header Section */}
        <header
          className={`fixed top-0 left-0 right-0 z-20 text-lg text-custom-gray1 p-1 transition-all duration-300 ease-in-out backdrop-blur-md border-b border-transparent h-29 ${
            isScrolled ? "bg-gray-900 text-white" : "bg-transparent"
          }`}
        >
          <nav className="flex justify-between items-center container mx-auto">
            <div className="flex flex-col sm:flex-row items-center">
              {/* Logo with responsive size adjustments */}
              <Image
                src="/images/logo2.jpg"
                alt="softreatixlogo"
                width={190} // smaller width on mobile
                height={180} // smaller height on mobile
                // className="sm:w-[200px] sm:h-[140px] hover:scale-105 transition-transform duration-300"
              />
              <span className="mt-2 sm:mt-0 sm:ml-4 text-2xl sm:text-3xl font-bold tracking-wide text-center sm:text-left">
                SoftCreatix
              </span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex space-x-6 items-center">
              <Link
                href="/"
                className="px-4 py-2 text-md rounded-full hover:bg-gray-800 hover:text-white transition-colors duration-300 "
              >
                Home
              </Link>
              <Link
                href="/services"
                className="px-4 py-2 text-md rounded-full hover:bg-gray-800 hover:text-white transition-colors duration-300"
              >
                Services
              </Link>
              <Link
                href="/user"
                className="px-4 py-2 text-md rounded-full hover:bg-gray-800 hover:text-white transition-colors duration-300"
              >
                User Account
              </Link>
              <Link
                href="/admin"
                className="px-4 py-2 text-md rounded-full hover:bg-gray-800 hover:text-white transition-colors duration-300"
              >
                Admin
              </Link>
              <Link
                href="/signin"
                className="px-4 py-2 text-md rounded-full bg-transparent hover:bg-gray-800 hover:text-white transition-colors duration-300"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="px-4 py-2 text-md rounded-full bg-gray-800 hover:bg-gray-900 transition-colors duration-300 text-white"
              >
                Sign Up
              </Link>
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="px-4 py-2 bg-gray-900 text-white rounded-full flex items-center"
                >
                  🌐 {selectedLanguage}
                  <svg
                    className={`ml-2 w-4 h-4 transition-transform duration-200 ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>

                {/* Dropdown Menu (only shown when dropdownOpen is true) */}
                {dropdownOpen && (
                  <ul className="absolute mt-2 w-40 bg-gray-800 text-white rounded-lg shadow-lg">
                    {languages.map((lang) => (
                      <li key={lang.code}>
                        <button
                          onClick={() => handleLanguageChange(lang.name)}
                          className="block w-full text-left px-4 py-2 hover:bg-gray-700"
                        >
                          {lang.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-white focus:outline-none"
              >
                {/* Hamburger Menu Icon */}
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
          </nav>

          {/* Mobile Navigation Menu */}
          {menuOpen && (
            <div className="md:hidden mt-4 bg-gray-900 text-white py-4">
              <div className="flex flex-col items-center space-y-4">
                <Link
                  href="/"
                  className="px-4 py-2 text-lg hover:bg-gray-800 rounded-lg"
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  className="px-4 py-2 text-lg hover:bg-gray-800 rounded-lg"
                >
                  Services
                </Link>
                <Link
                  href="/user"
                  className="px-4 py-2 text-lg hover:bg-gray-800 rounded-lg"
                >
                  User Account
                </Link>
                <Link
                  href="/admin"
                  className="px-4 py-2 text-lg hover:bg-gray-800 rounded-lg"
                >
                  Admin
                </Link>
                <Link
                  href="/signin"
                  className="px-4 py-2 text-lg hover:bg-gray-800 rounded-lg"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="px-4 py-2 text-lg bg-gray-800 hover:bg-gray-700 rounded-lg"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          )}
        </header>

        {/* Main content to ensure it fills the available space */}
        <main className="flex-grow">{children}</main>

        {/* Footer (commented out, you can uncomment when needed) */}
        {/* <footer className="bg-header-green text-white p-4 text-center">
          <p>&copy; 2024 SoftCreatix. All rights reserved.</p>
          <p>email: info@softcreatix.com</p>
          <p>tel: +250 782354872</p>
        </footer> */}
      </body>
    </html>
  );
}
