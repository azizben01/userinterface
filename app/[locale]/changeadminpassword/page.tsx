"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { PiEye, PiEyeSlash } from "react-icons/pi";

export default function ChangeAdminPassword({
  params,
}: {
  params: {
    locale: "fr" | "en" | "ger" | "span" | "chin" | "arab" | "russ" | "portu";
  }; // Explicitly type the locale
}) {
  const locale = params.locale;
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Redirect back to verify page if no email is in session storage
    if (!sessionStorage.getItem("resetEmail")) {
      router.push(`/verifycode`);
    }
  }, [router]);

  const handleRequestCode = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const email = sessionStorage.getItem("resetEmail");

      const response = await fetch(
        "https://softcreatix.com/api/resetpassword",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to reset password");
      }

      if (data.message === "Password has been reset successfully") {
        setPassword("");
        setConfirmPassword("");
        sessionStorage.removeItem("resetEmail");
        router.push(`/${locale}/adminsuccessfullpage`);
      } else {
        setError("Password was not changed");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-300 bg-center px-4 sm:px-0">
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xl w-full sm:w-3/4 md:w-2/6 max-w-md">
        <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800">
          Reset your password
        </h1>
        <h6 className="text-sm mb-8 sm:mb-10 text-custom-hover">
          You can now provide your new password.
        </h6>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form
          onSubmit={handleRequestCode}
          className="flex flex-col space-y-4 mt-6"
        >
          <div className="relative">
            <input
              type={passwordVisible ? "text" : "password"} // Toggle type based on passwordVisible state            value={confirmPassword}
              // value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter new password"
              className="border px-4 py-2 rounded-3xl w-full"
              required
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)} // Toggle password visibility
              className="absolute inset-y-0 right-4 flex items-center text-gray-500 hover:text-gray-700"
            >
              {passwordVisible ? (
                <PiEyeSlash className="text-xl" /> // Eye slash icon if visible
              ) : (
                <PiEye className="text-xl" /> // Eye icon if hidden
              )}
            </button>
          </div>
          <div className="relative w-full">
            <input
              type={passwordVisible ? "text" : "password"} // Toggle type based on passwordVisible state            value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              className="border px-4 py-2 rounded-3xl w-full"
              required
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)} // Toggle password visibility
              className="absolute inset-y-0 right-4 flex items-center text-gray-500 hover:text-gray-700"
            >
              {passwordVisible ? (
                <PiEyeSlash className="text-xl" /> // Eye slash icon if visible
              ) : (
                <PiEye className="text-xl" /> // Eye icon if hidden
              )}
            </button>
          </div>
          <button className="bg-gradient-to-b from-gray-700 to-gray-500 text-white px-4 py-2 rounded-3xl hover:bg-gray-900 hover:shadow-lg transform transition-transform duration-300 hover:scale-105 w-full">
            Save new password
          </button>
        </form>
      </div>
    </main>
  );
}
