"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function ResetPasswordPage({
  params,
}: {
  params: {
    locale: "fr" | "en" | "ger" | "span" | "chin" | "arab" | "russ" | "portu";
  }; // Explicitly type the locale
}) {
  const locale = params.locale;
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleRequestCode = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://softcreatixbackend.onrender.com/requestpasswordreset",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );
      if (!response.ok) {
        throw new Error("Invalid Email");
      }
      const data = await response.json();
      // redirect to verify code if email correct
      // data.message == "Password reset email sent";

      if (response.ok && data.message === "Password reset email sent") {
        router.push(`/${locale}/verifycode`);
      } else {
        setError("Email not sent");
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("an error occured");
      }
    }
  };
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-300 bg-center px-4 sm:px-0">
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xl w-full sm:w-3/4 md:w-2/6 max-w-md">
        <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800">
          Forgot Password
        </h1>
        <h6 className="text-sm mb-8 sm:mb-10 text-custom-hover">
          Enter the email address you used to create the account and we will
          email you instructions to reset your password.
        </h6>
        {error && <p className="text-red-500 text-center mb-4"> {error} </p>}
        <form
          onSubmit={handleRequestCode}
          className="flex flex-col space-y-4 mt-6"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="border px-4 py-2 rounded-3xl w-full"
            required
          />
          <button className="bg-gradient-to-b from-gray-700 to-gray-500 text-white px-4 py-2 rounded-3xl hover:bg-gray-900 hover:shadow-lg transform transition-transform duration-300 hover:scale-105 w-full">
            Send Reset Code
          </button>
          <div className="text-center">
            <Link
              href={`/${locale}/adminlogin`}
              className="text-custom-gray2 hover:underline"
            >
              Remember Password? Login
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
