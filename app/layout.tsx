"use client"; // Ensure this is a client component for state management
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
// RootLayout component that wraps the entire app
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage mobile menu visibility
  const [isScrolled, setIsScrolled] = useState(false); // State to manage header background color on scroll
  const pathname = usePathname();
  const showHeader = pathname != "/adminrequestlist";

  // Toggle mobile menu visibility
  // const toggleMobileMenu = () => {
  //   setMenuOpen((prev) => !prev);
  // };

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleLinkClick = () => {
    setMenuOpen(false); // Closes the menu when a link is clicked
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
                  src="/images/logobackground.png"
                  alt="softcreatixlogo"
                  width={130}
                  height={100}
                />
              </div>

              {/* Desktop Navigation Links */}
              <div className="hidden md:flex space-x-6 items-center">
                <Link
                  href="/"
                  className="px-4 py-2 text-md rounded-full hover:bg-gray-800 hover:text-white transition-colors duration-300"
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  className="px-4 py-2 text-md rounded-full hover:bg-gray-800 hover:text-white transition-colors duration-300"
                >
                  Services
                </Link>
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
                    Home
                  </Link>
                  <Link
                    href="/services"
                    onClick={handleLinkClick}
                    className="px-2 py-2 text-lg hover:bg-gray-800 rounded-lg"
                  >
                    Services
                  </Link>
                </div>
              </div>
            )}
          </header>
        )}
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
