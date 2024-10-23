import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "SoftCreatix | Software Development Company",
  description: "We build creative software solutions for modern businesses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <header className="fixed top-0 left-0 right-0 z-20 bg-header-green text-white p-4 h-16">
          <nav className="flex justify-between items-center container mx-auto">
            <div className="flex items-center">
              <Image
                src="/images/logo1.png"
                alt="SoftCreatix Logo"
                width={100}
                height={100}
              />
              <span className="ml-2 text-2xl font-bold">SoftCreatix</span>
            </div>
            <div>
              <Link
                href="/"
                className="px-4 py-2 hover:bg-gray-700 rounded-2xl"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="px-4 py-2 hover:bg-gray-700 rounded-2xl"
              >
                Services
              </Link>
              <Link
                href="/user"
                className="px-4 py-2 hover:bg-gray-700 rounded-2xl"
              >
                User Account
              </Link>
              <Link
                href="/admin"
                className="px-4 py-2 hover:bg-gray-700 rounded-2xl"
              >
                Admin
              </Link>
              <Link
                href="/signin"
                className="px-4 py-2 hover:bg-gray-700 rounded-2xl"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="px-4 py-2 hover:bg-gray-700 rounded-2xl"
              >
                Sign Up
              </Link>
            </div>
          </nav>
        </header>

        {/* Ensure that the main section fills the available space */}
        <main className="flex-grow ">{children}</main>

        {/* Footer should always be visible */}
        {/* <footer className="bg-header-green text-white p-4 text-center">
          <p>&copy; 2024 SoftCreatix. All rights reserved.</p>
          <p>email: info@softcreatix.com</p>
          <p>tel: +250 782354872</p>
        </footer> */}
      </body>
    </html>
  );
}
