import Link from "next/link";

export default function SignUpPage() {
  return (
    <main
      className="flex items-center justify-center min-h-screen bg-custom-gray bg-center"
      style={{ backgroundImage: "url('/images/auth-bg.jpg')" }}
    >
      {/* Main container with 50% width of the screen */}
      <div className="flex w-1/ bg-white rounded-lg shadow-lg overflow-hidden h-full">
        {/* Left part: the form */}
        <div className="w-1/2 p-8">
          <h1 className="text-2xl font-bold mb-2 text-custom-brown1">
            Welcome to SoftCreatix
          </h1>
          <h6 className="text-sm mb-10 text-custom-brown-hover">
            Enter the email address you used to create the account and we will
            email you instructions to reset your password.
          </h6>
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="border px-4 py-2 rounded-md w-full"
            />
            <input
              type="password"
              placeholder="Password"
              className="border px-4 py-2 rounded-md w-full"
            />
            <button className="bg-custom-gray1 text-white px-4 py-2 rounded-md hover:bg-custom-gray2 w-full">
              Sign Up
            </button>
          </form>
          <div className="mt-4 text-center">
            <Link
              href="/signin"
              className="text-custom-brown-hover hover:underline"
            >
              Already have an account? Sign In
            </Link>
          </div>
        </div>

        {/* Right part: background color or image */}
        <div
          className="w-1/2 bg-cover bg-center bg-custom-hover"
          style={{ backgroundImage: "url('/images/creativity.png')" }} // Replace with your own image
        >
          {/* You can also use a solid color instead of an image, e.g., bg-blue-600 */}
        </div>
      </div>
    </main>
  );
}
