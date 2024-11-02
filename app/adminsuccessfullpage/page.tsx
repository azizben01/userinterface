import Link from "next/link";

export default function AdminSuccessullPage() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center">
      <h4> Congratulations!!</h4>
      <p>
        Your password has been changed successfully. Use the button below to
        navigate to the login page and log in using your new password.
      </p>
      <Link
        href={"/adminlogin"}
        className="mt-10 bg-gradient-to-b from-gray-700 to-gray-500 text-white px-4 py-2 rounded-3xl hover:bg-gray-900 hover:shadow-lg transform transition-transform duration-300 hover:scale-105 "
      >
        Go to login page
      </Link>
    </main>
  );
}
