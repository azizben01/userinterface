"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { PiEye, PiEyeSlash } from "react-icons/pi";
import { IoLockOpenOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";

const ChangeAdminEmail = ({
  params,
}: {
  params: {
    locale: "fr" | "en" | "ger" | "span" | "chin" | "arab" | "russ" | "portu";
  };
}) => {
  const locale = params.locale;
  const [password, setPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();
  //   console.log("Current Email:", sessionStorage.getItem("resetEmail"));

  const handleUpdateEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const currentEmail = sessionStorage.getItem("loginEmail");
      const response = await fetch(
        "https://softcreatixbackend.onrender.com/adminEmail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ currentEmail, password, newEmail }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to update email");
      }

      setSuccess("Email updated successfully");
      setError("");
      setPassword("");
      setNewEmail("");

      // Redirect to admin success page
      setTimeout(() => {
        router.push(`/${locale}/adminsuccessfullpage`);
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      setSuccess("");
    }
  };

  return (
    <main className="min-h-screen bg-gray-300 flex flex-col items-center p-8">
      <div className="w-[700px] mt-24 max-w-6xl p-6 bg-white rounded-2xl shadow-md ">
        <div className="flex justify-end flex-wrap space-x-2">
          <a
            href={`/${locale}/changeadminemail`}
            className="text-lg text-center text-custom-gray1 py-2 px-2 text-md rounded-full hover:bg-gray-800 hover:text-white transition-colors duration-300"
          >
            Change admin email
          </a>
          <a
            href={`/${locale}/adminrequestlist`}
            className="text-lg text-center text-custom-gray1 py-2 px-2 text-md rounded-full hover:bg-gray-800 hover:text-white transition-colors duration-300"
          >
            Admin dashboard
          </a>
        </div>
        <h1 className="text-3xl font-bold text-start text-custom-gray1 mb-4">
          Change your email address.
        </h1>
        <h6 className="text-sm mb-8 sm:mb-10 text-custom-hover">
          Provide your password to change your email.
        </h6>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {success && (
          <p className="text-green-500 text-center mb-4">{success}</p>
        )}
        <form
          onSubmit={handleUpdateEmail}
          className="flex flex-col space-y-4 mt-6"
        >
          {/* Password Input */}
          <div className="relative w-full">
            <IoLockOpenOutline className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-800 text-lg" />
            <input
              type={passwordVisible ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your current password"
              className="pl-10 border px-4 py-2 rounded-3xl w-full"
              required
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute inset-y-0 right-4 flex items-center text-gray-500 hover:text-gray-700"
            >
              {passwordVisible ? (
                <PiEyeSlash className="text-xl" />
              ) : (
                <PiEye className="text-xl" />
              )}
            </button>
          </div>

          {/* New Email Input */}
          <div className="relative w-full">
            <MdOutlineMailOutline className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-800 text-lg" />
            <input
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              placeholder="Enter your new email"
              className="pl-10 border px-4 py-2 rounded-3xl w-full"
              required
            />
          </div>

          {/* Submit Button */}
          <button className="bg-gradient-to-b from-gray-700 to-gray-500 text-white px-4 py-2 rounded-3xl hover:bg-gray-900 hover:shadow-lg transform transition-transform duration-300 hover:scale-105 w-full">
            Update Email
          </button>
        </form>
      </div>
    </main>
  );
};

export default ChangeAdminEmail;
