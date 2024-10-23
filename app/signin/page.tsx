import Link from "next/link";

export default function SignInPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-200 ">
      <div className="flex w-3/4 max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden transform transition-all h-custom-height ">
        {/* Left Panel */}
        <div className="w-1/2 bg-gradient-to-b from-green-500 to-teal-600 flex flex-col items-center justify-center p-8">
          <div className="text-center">
            <img
              src="/images/logo3.png" // Replace with your logo
              alt="softcreatix Logo"
              className="h-16 mb-4 animate-pulse absolute top-20 left-50 "
            />
            <h1 className="text-3xl font-bold text-white mb-2 animate-slide-in">
              SoftCreatix
            </h1>
            <p className="text-white text-lg">
              Empowering Ideas, Transforming Software
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
              className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
            />
            <button className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-md hover:from-green-600 hover:to-teal-600 hover:shadow-lg transform transition-transform duration-300 hover:scale-105 w-full">
              Login
            </button>
          </form>

          <div className="mt-4 text-center">
            <Link
              href="/resetpassword"
              className="text-gray-500 hover:text-teal-600 transition-all duration-300"
            >
              Forgot Password?
            </Link>
          </div>

          <div className="mt-4 text-center">
            <Link
              href="/signup"
              className="text-teal-600 hover:text-teal-800 hover:underline transition-all duration-300"
            >
              Create an Account
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
