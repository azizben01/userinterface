// layout.tsx
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
        <header className="fixed top-0 left-0 right-0 z-10 bg-header-green text-white p-4">
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
              <Link href="/" className="px-4 py-2 hover:bg-gray-700 rounded">
                Home
              </Link>
              <Link
                href="/signin"
                className="px-4 py-2 hover:bg-gray-700 rounded"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="px-4 py-2 hover:bg-gray-700 rounded"
              >
                Sign Up
              </Link>
            </div>
          </nav>
        </header>

        <main className="flex-grow mt-20">{children}</main>

        <footer className="bg-header-green text-white p-4 text-center mt-auto">
          <p>
            &copy; 2024 SoftCreatix official website. All rights reserved.
            Developed by SoftCreatix.
          </p>
        </footer>
      </body>
    </html>
  );
}
