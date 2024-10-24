import Link from "next/link";
import Image from "next/image";

export default function SignInPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-700 ">
      <div className="flex w-3/4 max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden transform transition-all h-custom-height ">
        {/* Left Panel */}
        <div className="w-1/2 bg-gray-900 to-teal-600 flex flex-col items-center justify-center p-8">
          <div className="text-center">
            <Image
              src="/images/logo3.png"
              width={100}
              height={100}
              alt="softcreatix Logo"
              className="h-16 mb-4 animate-pulse absolute top-20 left-50 "
            />
            <h1 className="text-3xl font-bold text-white mb-2 animate-slide-in">
              SoftCreatix
            </h1>
            <p className="text-white text-lg">
              Creating Tomorrow’s Solutions, Today.{" "}
            </p>
          </div>
        </div>

        {/* Right Panel: Sign In Form */}
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center animate-fade-in">
            Log in
          </h2>
          <h6 className="mb-10 text-gray-500">
            {" "}
            To log into your account, enter your email address and password.
          </h6>

          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 px-4 py-2 rounded-3xl w-full focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-300 px-4 py-2 rounded-3xl w-full focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
            />
            <button className="bg-gradient-to-b from-gray-700 to-gray-500 text-white px-4 py-2 rounded-3xl hover:gray-900 hover:shadow-lg transform transition-transform duration-300 hover:scale-105 w-full">
              Login
            </button>
          </form>

          <div className="mt-4 text-center">
            <Link
              href="/resetpassword"
              className="text-gray-900 hover:text-teal-600 transition-all duration-300"
            >
              Forgot Password?
            </Link>
          </div>

          <div className="mt-4 text-center">
            <Link
              href="/signup"
              className="text-gray-900 hover:text-teal-800 hover:underline transition-all duration-300"
            >
              Create an Account
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
