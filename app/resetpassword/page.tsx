import Link from "next/link";

export default function ResetPasswordPage() {
  return (
    <main
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/auth-bg.jpg')" }}
    >
      <div className="bg-white p-8 rounded-lg shadow-xl w-2/6 h-96">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Forgot Password
        </h1>
        <h6 className="text-sm mb-10 text-custom-hover">
          {" "}
          Enter the email address you used to create the account and we will
          email you instructions to reset your password.
        </h6>
        <form className="flex flex-col space-y-4 mt-9">
          <input
            type="email"
            placeholder="Enter your email"
            className="border px-4 py-2 rounded-md"
          />
          <button className="bg-custom-gray1 text-white px-4 py-2 rounded-md hover:bg-custom-gray2 w-full">
            Send Reset Link
          </button>
          <div className="text-center">
            <Link
              href="/signin"
              className="text-custom-gray2 hover:underline justify-center"
            >
              Remember Password?Login
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
