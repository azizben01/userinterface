"use client"; // Ensure this is a client component for state management
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

// RootLayout component that wraps the entire app
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage mobile menu visibility
  const [isScrolled, setIsScrolled] = useState(false); // State to manage header background color on scroll

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
      <body className=" flex-col min-h-screen">
        {/* Header Section */}
        <header
          className={`fixed top-0 left-0 right-0 z-10 text-lg text-custom-gray1 transition-all duration-300 ease-in-out backdrop-blur-md border-b border-transparent p-[7px] ${
            isScrolled ? "bg-gray-900 text-white" : "bg-transparent"
          }`}
        >
          <nav className="flex justify-between items-center container mx-auto">
            <div className="flex flex-col sm:flex-row items-center">
              {/* Logo with responsive size adjustments */}
              <Image
                src="/images/logobackground.png"
                alt="softreatixlogo"
                width={150} // smaller width on mobile
                height={100} // smaller height on mobile
                // className="sm:w-[200px] sm:h-[140px] hover:scale-105 transition-transform duration-300"
              />
              <span className="mt-6 sm:mt-0 sm:ml-4 text-2xl sm:text-3xl font-bold tracking-wide text-center sm:text-left">
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
                href="/adminlogin"
                className="px-4 py-2 text-md rounded-full hover:bg-gray-800 hover:text-white transition-colors duration-300"
              >
                Admin
              </Link>
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
                  href="/requestlist"
                  className="px-4 py-2 text-lg hover:bg-gray-800 rounded-lg"
                >
                  Requests
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
