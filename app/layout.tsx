"use client"; // Ensure this is a client component for state management
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi"; // Icon for dropdown arrow
import { CiGlobe } from "react-icons/ci";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "../lib/i18n"; // Import the i18n configuration

// RootLayout component that wraps the entire app
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage mobile menu visibility
  const [isScrolled, setIsScrolled] = useState(false); // State to manage header background color on scroll
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for language dropdown
  const pathname = usePathname();
  const showHeader = pathname != "/adminrequestlist";

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false); // Closes the menu when a link is clicked
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const { t } = useTranslation(); // Get translation function

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng); // Change language
    setDropdownOpen(false); // Close the dropdown
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // Set true if scrolled down, otherwise false
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <html lang="eng">
        <body className="flex-col min-h-screen">
          {/* Header Section */}
          {showHeader && (
            <header
              className={`fixed top-0 left-0 right-0 z-20 text-lg text-custom-gray1 transition-all duration-300 ease-in-out backdrop-blur-md border border-transparent md:px-custom-px md:py-custom-py px-responsive-px py-responsive-py ${
                isScrolled ? "bg-gray-900 text-white" : "bg-transparent"
              }`}
            >
              <nav className="flex justify-between items-center container mx-auto">
                <div className="flex flex-col items-center">
                  {/* Logo */}
                  <Image
                    src="/images/GENERALCONSLOGO-removebg-preview.png"
                    alt="softcreatixlogo"
                    width={150}
                    height={100}
                  />
                </div>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex space-x-6 items-center">
                  <Link
                    href="/"
                    className="px-4 py-2 text-md rounded-full hover:bg-gray-800 hover:text-white transition-colors duration-300"
                  >
                    {t("welcome")}
                  </Link>
                  <Link
                    href="/services"
                    className="px-4 py-2 text-md rounded-full hover:bg-gray-800 hover:text-white transition-colors duration-300"
                  >
                    {t("services")}
                  </Link>

                  {/* Language Dropdown */}
                  <div className="relative">
                    <button
                      onClick={toggleDropdown}
                      className="flex items-center space-x-2 px-4 py-2 text-md rounded-full hover:bg-gray-800 hover:text-white transition-colors duration-300 focus:outline-none"
                    >
                      <CiGlobe className="w-6 h-6" />
                      <span>Languages</span>
                      <FiChevronDown className="w-4 h-4" />
                    </button>
                    {dropdownOpen && (
                      <div className="absolute right-0 mt-2 w-40 bg-gray-800 text-white rounded-lg shadow-lg">
                        <ul className="py-2">
                          <li
                            onClick={() => handleLanguageChange("eng")}
                            className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                          >
                            English
                          </li>
                          <li
                            onClick={() => handleLanguageChange("fr")}
                            className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                          >
                            French
                          </li>
                          <li
                            onClick={() => handleLanguageChange("es")}
                            className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                          >
                            Spanish
                          </li>
                          <li
                            onClick={() => handleLanguageChange("deu")}
                            className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                          >
                            German
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Mobile Menu Icon (visible only on mobile) */}
                <div className="md:hidden">
                  <button
                    onClick={toggleMobileMenu}
                    className="text-gray-500 focus:outline-none"
                  >
                    <HiOutlineMenuAlt3 className="w-8 h-8" />
                  </button>
                </div>
              </nav>

              {/*Mobile navigation menu*/}
              {menuOpen && (
                <div className="md:hidden mt-4 bg-gray-900 text-white py-8">
                  <div className="flex flex-col items-center space-y-4">
                    <Link
                      href="/"
                      onClick={handleLinkClick}
                      className="px-2 py-2 text-lg hover:bg-gray-800 rounded-lg"
                    >
                      {t("welcome")}
                    </Link>
                    <Link
                      href="/services"
                      onClick={handleLinkClick}
                      className="px-2 py-2 text-lg hover:bg-gray-800 rounded-lg"
                    >
                      {t("services")}
                    </Link>

                    {/* Language Dropdown for Mobile */}
                    <div className="relative">
                      <button
                        onClick={toggleDropdown}
                        className="flex items-center space-x-2 px-4 py-2 text-lg rounded-full hover:bg-gray-800 hover:text-white transition-colors duration-300"
                      >
                        <span>Languages</span>
                        <FiChevronDown className="w-4 h-4" />
                        <CiGlobe className="w-4 h-4" />
                      </button>
                      {dropdownOpen && (
                        <div className="mt-2 bg-gray-800 text-white rounded-lg shadow-lg">
                          <ul className="py-2">
                            <li
                              onClick={() => handleLanguageChange("en")}
                              className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                            >
                              English
                            </li>
                            <li
                              onClick={() => handleLanguageChange("fr")}
                              className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                            >
                              French
                            </li>
                            <li
                              onClick={() => handleLanguageChange("es")}
                              className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                            >
                              Spanish
                            </li>
                            <li
                              onClick={() => handleLanguageChange("de")}
                              className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                            >
                              German
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </header>
          )}
          {/* Main content to ensure it fills the available space */}
          <main className="flex-grow">{children}</main>
        </body>
      </html>
    </I18nextProvider>
  );
}
