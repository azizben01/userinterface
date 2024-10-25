import Link from "next/link";
import Image from "next/image";

export default function SignInPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-700 ">
      <div className="flex flex-col lg:flex-row w-full max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden transform transition-all lg:h-custom-height">
        {/* Left Panel */}
        <div className="w-full lg:w-1/2 bg-gray-900 flex flex-col items-center justify-center p-8">
          <div className="text-center">
            <Image
              src="/images/logo3.png"
              width={100}
              height={100}
              alt="softcreatix Logo"
              className="h-16 mb-4 animate-pulse "
            />
            <h1 className="text-3xl font-bold text-white mb-2 animate-slide-in">
              SoftCreatix
            </h1>
            <p className="text-white text-lg">
              Creating Tomorrow’s Solutions, Today.
            </p>
          </div>
        </div>

        {/* Right Panel: Sign In Form */}
        <div className="w-full lg:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center animate-fade-in">
            Log in
          </h2>
          <h6 className="mb-10 text-gray-500 text-center">
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
            <button className="bg-gradient-to-b from-gray-700 to-gray-500 text-white px-4 py-2 rounded-3xl hover:bg-gray-900 hover:shadow-lg transform transition-transform duration-300 hover:scale-105 w-full">
              Login
            </button>
          </form>

          <div className="mt-4 text-center">
            <Link
              href="/resetpassword"
              className="text-custom-gray2 hover:text-custom-gray3 transition-all duration-300"
            >
              Forgot Password?
            </Link>
          </div>

          <div className="mt-4 text-center">
            <Link
              href="/signup"
              className="text-custom-gray2 hover:underline justify-center"
            >
              Create an Account
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
