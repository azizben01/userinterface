import Link from "next/link";

export default function SignUpPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-400">
      <div className="flex flex-col lg:flex-row w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all lg:h-custom-height">
        {/* Left Panel */}
        <div className="w-full lg:w-1/2 bg-gray-900 flex flex-col items-center justify-center p-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-2 animate-slide-in">
              Welcome Back!
            </h1>
            <p className="text-white text-sm mb-6">
              Already have an account? Click below to continue using our
              service.
            </p>
          </div>
          <Link
            href="/signin"
            className="w-1/2 text-center px-3 py-1 bg-transparent border-2 text-white rounded-xl hover:bg-gray-800 transition-transform duration-300 transform hover:scale-105"
          >
            Login
          </Link>
        </div>

        {/* Right Panel: Sign Up Form */}
        <div className="w-full lg:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center animate-fade-in">
            Create an account
          </h2>
          <h6 className="mb-10 text-gray-500 text-center">
            Register into your account by filling the form below and pressing
            the sign-up button.
          </h6>

          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Username"
              className="border border-gray-300 px-4 py-2 rounded-3xl w-full focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
            />
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
              Sign up
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
