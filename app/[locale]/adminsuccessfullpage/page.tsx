import Link from "next/link";

export default function AdminSuccessullPage({
  params,
}: {
  params: {
    locale: "fr" | "en" | "ger" | "span" | "chin" | "arab" | "russ" | "portu";
  }; // Explicitly type the locale
}) {
  const locale = params.locale;
  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-b from-gray-300">
      <div className="w-full lg:w-1/2 flex flex-col items-center border-[3px] border justify-center rounded-3xl p-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-black mb-2 animate-slide-in">
            Congratulations!!
          </h1>
          <p className="text-black text-lg">
            Your password has been changed successfully. Use the button below to
            navigate to the login page and log in using your new password.
          </p>
        </div>
        <Link
          href={`/${locale}/adminlogin`}
          className="mt-10 bg-gradient-to-b from-gray-700 to-gray-500 text-white px-5 py-3 rounded-3xl hover:bg-gray-900 hover:shadow-lg transform transition-transform duration-300 hover:scale-105 "
        >
          Go to login page
        </Link>
      </div>
    </main>
  );
}
