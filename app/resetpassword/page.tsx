import Link from "next/link";

export default function ResetPasswordPage() {
  return (
    <main
      className="flex flex-col items-center justify-center min-h-screen bg-custom-gray bg-center px-4 sm:px-0"
      style={{ backgroundImage: "url('/images/auth-bg.jpg')" }}
    >
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xl w-full sm:w-3/4 md:w-2/6 max-w-md">
        <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800">
          Forgot Password
        </h1>
        <h6 className="text-sm mb-8 sm:mb-10 text-custom-hover">
          Enter the email address you used to create the account and we will
          email you instructions to reset your password.
        </h6>
        <form className="flex flex-col space-y-4 mt-6">
          <input
            type="email"
            placeholder="Enter your email"
            className="border px-4 py-2 rounded-3xl w-full"
          />
          <button className="bg-gradient-to-b from-gray-700 to-gray-500 text-white px-4 py-2 rounded-3xl hover:bg-gray-900 hover:shadow-lg transform transition-transform duration-300 hover:scale-105 w-full">
            Send Reset Link
          </button>
          <div className="text-center">
            <Link href="/signin" className="text-custom-gray2 hover:underline">
              Remember Password? Login
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
