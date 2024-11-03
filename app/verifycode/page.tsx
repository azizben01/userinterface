"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function VerifyCode() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleRequestCode = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://softcreatixbackend.onrender.com/verifycode",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ code }),
        }
      );
      const data = await response.json();

      if (!response.ok || data.message !== "Code verified") {
        setError("Invalid code");
        return;
      }

      // Store the email or reset token in sessionStorage
      sessionStorage.setItem("resetEmail", data.email);

      // Redirect to the reset password page
      router.push("/changeadminpassword");
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-t from-gray-300 bg-center px-4 sm:px-0">
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xl w-full sm:w-3/4 md:w-2/6 max-w-md">
        <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800">
          Verify code
        </h1>
        <h6 className="text-sm mb-8 sm:mb-10 text-custom-hover">
          Enter the 6-digit verification code sent to your email.
        </h6>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form
          onSubmit={handleRequestCode}
          className="flex flex-col space-y-4 mt-6"
        >
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter your 6-digit code"
            className="border px-4 py-2 rounded-3xl w-full"
            required
          />
          <button className="bg-gradient-to-b from-gray-700 to-gray-500 text-white px-4 py-2 rounded-3xl hover:bg-gray-900 hover:shadow-lg transform transition-transform duration-300 hover:scale-105 w-full">
            Verify
          </button>
        </form>
      </div>
    </main>
  );
}
