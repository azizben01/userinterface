"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // For client-side navigation
import Link from "next/link";
import Image from "next/image";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";
import { CiGlobe } from "react-icons/ci";
import { useTranslations } from "next-intl";

export default function ClientHeader({
  isScrolled,
  locale = "en",
}: {
  isScrolled: boolean;
  locale: string;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();
  const translate = useTranslations("header");

  const toggleMobileMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleLanguageChange = (language: string) => {
    // Navigate to the same page but with the selected language
    const currentPath = window.location.pathname; // Get current path
    const newPath = currentPath.replace(`/${locale}`, `/${language}`); // Replace the locale in the path
    router.push(newPath); // Navigate to the new path
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-20 text-lg text-custom-gray1 transition-all duration-300 ease-in-out backdrop-blur-md border border-transparent md:px-custom-px md:py-custom-py px-responsive-px py-responsive-py ${
        isScrolled ? "bg-gray-900 text-white" : "bg-transparent"
      }`}
    >
      <nav className="flex justify-between items-center container mx-auto">
        {/* Logo */}
        <div className="flex flex-col items-center">
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
            {translate("home")}
          </Link>
          <Link
            href={`/${locale}/services`}
            className="px-4 py-2 text-md rounded-full hover:bg-gray-800 hover:text-white transition-colors duration-300"
          >
            {translate("services")}
          </Link>

          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center space-x-2 px-4 py-2 text-md rounded-full hover:bg-gray-800 hover:text-white transition-colors duration-300 focus:outline-none"
            >
              <CiGlobe className="w-6 h-6" />
              <span> {translate("language")}</span>
              <FiChevronDown className="w-4 h-4" />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-gray-800 text-white rounded-lg shadow-lg">
                <ul className="py-2">
                  <li
                    className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                    onClick={() => handleLanguageChange("en")}
                  >
                    English
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                    onClick={() => handleLanguageChange("fr")}
                  >
                    French
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                    onClick={() => handleLanguageChange("span")}
                  >
                    Spanish
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                    onClick={() => handleLanguageChange("ger")}
                  >
                    German
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                    onClick={() => handleLanguageChange("chin")}
                  >
                    Chenese
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                    onClick={() => handleLanguageChange("russ")}
                  >
                    Russian
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                    onClick={() => handleLanguageChange("arab")}
                  >
                    Arabic
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                    onClick={() => handleLanguageChange("portu")}
                  >
                    Portuguese
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-500 focus:outline-none"
          >
            <HiOutlineMenuAlt3 className="w-8 h-8" />
          </button>
        </div>
      </nav>

      {/* Mobile navigation menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-gray-900 text-white py-8">
          <div className="flex flex-col items-center space-y-4">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="px-2 py-2 text-lg hover:bg-gray-800 rounded-lg"
            >
              Home
            </Link>
            <Link
              href="/services"
              onClick={() => setMenuOpen(false)}
              className="px-2 py-2 text-lg hover:bg-gray-800 rounded-lg"
            >
              Services
            </Link>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-2 px-4 py-2 text-md rounded-full hover:bg-gray-800 hover:text-white transition-colors duration-300 focus:outline-none"
              >
                <CiGlobe className="w-6 h-6" />
                <span> {translate("language")}</span>
                <FiChevronDown className="w-4 h-4" />
              </button>
              {dropdownOpen && (
                <div className="items-center mt-2 w-40 bg-gray-800 text-white rounded-lg shadow-lg">
                  <ul className="py-2">
                    <li
                      className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                      onClick={() => handleLanguageChange("en")}
                    >
                      English
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                      onClick={() => handleLanguageChange("fr")}
                    >
                      French
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                      onClick={() => handleLanguageChange("span")}
                    >
                      Spanish
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                      onClick={() => handleLanguageChange("ger")}
                    >
                      German
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                      onClick={() => handleLanguageChange("chin")}
                    >
                      Chenese
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                      onClick={() => handleLanguageChange("russ")}
                    >
                      Russian
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                      onClick={() => handleLanguageChange("arab")}
                    >
                      Arabic
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                      onClick={() => handleLanguageChange("portu")}
                    >
                      Portuguese
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
