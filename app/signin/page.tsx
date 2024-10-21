import Link from "next/link";

export default function SignInPage() {
  return (
    <main
      className="flex items-center justify-center min-h-screen bg-custom-gray bg-center"
      style={{ backgroundImage: "url('/images/auth-bg.jpg')" }}
    >
      <div className="flex w-1/2 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className=" w-1/2 p-8 bg-custom-gray3">
          <h1 className="text-2xl font-bold mb-2 text-gray-800">
            Sign In to your account
          </h1>
          <h6 className="mb-8">
            {" "}
            To log into your account, enter your email address and password.
          </h6>
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="border px-4 py-2 rounded-md w-75"
            />
            <input
              type="password"
              placeholder="Password"
              className="border px-4 py-2 rounded-md w-75"
            />
            <button className="bg-custom-gray1 text-white px-4 py-2 rounded-md hover:bg-custom-gray2 w-full">
              Sign In
            </button>
          </form>
          <div className="mt-4 text-center">
            <Link href="/signup" className="text-blue-600 hover:underline">
              Create an Account
            </Link>
          </div>
          <div className="mt-2 text-center">
            <Link
              href="/resetpassword"
              className="text-blue-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
        </div>
        {/* Right part: background color or image */}
        <div
          className="w-1/2 bg-cover bg-center bg-custom-hover"
          style={{ backgroundImage: "url('/images/idea.jpg')" }} // Replace with your own image
        >
          {/* You can also use a solid color instead of an image, e.g., bg-blue-600 */}
        </div>
      </div>
    </main>
  );
}
