"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { PiEye, PiEyeSlash } from "react-icons/pi";

export default function SignInPage({ locale = "en" }: { locale: string }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://softcreatixbackend.onrender.com/adminlogin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await response.json();

      // Redirect to admin dashboard if login is successful
      if (data.message === "Login successful") {
        router.push("/adminrequestlist"); // Adjust the path as needed
      } else {
        setError("Invalid login. Please try again.");
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("an unknown error has occured");
      }
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-400 ">
      <div className="flex flex-col lg:flex-row w-full max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden transform transition-all lg:h-custom-height">
        {/* Left Panel */}
        <div className="w-full lg:w-1/2 bg-gray-900 flex flex-col items-center justify-center p-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-2 animate-slide-in">
              SoftCreatix
            </h1>
            <p className="text-white text-lg">
              Creating Tomorrow’s Solutions, Today.
            </p>
          </div>
        </div>

        {/* Right Panel: Sign In Form */}
        <div className="w-full lg:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center animate-fade-in">
            Log in
          </h2>
          <h6 className="mb-10 text-gray-500 text-center">
            To log into your account, enter your email address and password.
          </h6>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <form className="flex flex-col space-y-4" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 px-4 py-2 rounded-3xl w-full focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300"
              required
            />
            <div className="relative w-full">
              <input
                type={passwordVisible ? "text" : "password"} // Toggle type based on passwordVisible state
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-300 px-4 py-2 rounded-3xl w-full focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300"
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

            <button
              type="submit"
              className="bg-gradient-to-b from-gray-700 to-gray-500 text-white px-4 py-2 rounded-3xl hover:bg-gray-900 hover:shadow-lg transform transition-transform duration-300 hover:scale-105 w-full"
            >
              Login
            </button>
          </form>

          <div className="mt-4 text-center">
            <Link
              href={`${locale}/resetpassword`}
              className="text-custom-gray2 hover:text-custom-gray3 transition-all duration-300"
            >
              Forgot Password?
            </Link>
          </div>

          <div className="mt-4 text-center"></div>
        </div>
      </div>
    </main>
  );
}
