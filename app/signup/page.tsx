import Link from "next/link";

export default function SignUpPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-200 ">
      <div className="flex w-3/4 max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden transform transition-all h-custom-height ">
        {/* Left Panel */}
        <div className="w-1/2 bg-gradient-to-b from-green-500 to-teal-600 flex flex-col items-center justify-center p-8">
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

        {/* Right Panel: Sign In Form */}
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center animate-fade-in">
            Create an account
          </h2>
          <h6 className="mb-10 text-gray-500">
            {" "}
            Register into your account by filling the form below and pressing
            the sign up button.
          </h6>

          <form className="flex flex-col space-y-4">
            <input
              type="username"
              placeholder="user name"
              className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
            />
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
              Sign up
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
