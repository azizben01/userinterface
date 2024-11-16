"use client";
import { useEffect, useState } from "react";
import ClientHeader from "./ClientHeader";
import { useParams } from "next/navigation";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isScrolled, setIsScrolled] = useState(false);

  const params = useParams();
  let locale = params.locale; // Extract the 'locale' parameter from the route
  // Ensure 'locale' is a single string
  if (Array.isArray(locale)) {
    locale = locale[0]; // Use the first value if it's an array
  }

  // Detect scroll to adjust header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <ClientHeader isScrolled={isScrolled} locale={locale || "en"} />
      <main>{children}</main>
    </>
  );
}
