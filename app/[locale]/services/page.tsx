"use client"; // For animations and interactive components
import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { MdPhoneIphone } from "react-icons/md";
import { useTranslations } from "next-intl";

export default function ServiceRequestPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phonenumber: "",
    services: "",
    description: "",
  });
  // map of service key:

  const serviceKeys = [
    "AI_Creation",
    "Digital_Consulting",
    "E-commerce_Development",
    "Maintenance",
    "Mobile_application_development",
    "SEO",
    "System_Integration",
    "UX/UI_Design",
    "Web Application_Development",
    "Website_Design_and_Development",
    "Hosting",
  ];

  const t = useTranslations("services"); // Load translations for this page

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://softcreatixbackend.onrender.com/services",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(t("serverSuccess"), data);
        alert(t("formSuccess"));
        setFormData({
          name: "",
          email: "",
          services: "",
          phonenumber: "",
          description: "",
        });
      } else {
        console.error(t("serverError"), response.statusText);
        alert(t("formError"));
      }
    } catch (error) {
      console.error(t("requestError"), error);
      alert(t("networkError"));
    }
  };

  return (
    <div className="min-h-screen bg-gray-300 flex justify-center items-center p-8">
      <div className="bg-white mt-28 p-8 rounded-lg shadow-lg max-w-xl w-full max-h-lg h-full">
        <h1 className="text-3xl font-bold text-custom-gray1 mb-6 text-center">
          {t("title")}
        </h1>
        <p className="text-center text-gray-500 mb-8">{t("description")}</p>

        {/* Service Request Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative mt-1">
            <IoPersonSharp className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder={t("placeholder.name")}
              required
              className="pl-10 mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
          </div>

          <div className="relative mt-1">
            <MdEmail className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder={t("placeholder.email")}
              required
              className="pl-10 mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
          </div>
          <div className="relative mt-1">
            <MdPhoneIphone className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
            <input
              type="phonenumber"
              id="phonenumber"
              name="phonenumber"
              value={formData.phonenumber}
              onChange={handleInputChange}
              placeholder={t("placeholder.phonenumber")}
              required
              className="pl-10 border border-gray-300 w-full px-4 py-2 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
          </div>

          <div>
            <select
              id="services"
              name="services"
              value={formData.services}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
            >
              <option value="" disabled>
                {t("placeholder.services")}
              </option>
              {serviceKeys.map((key) => (
                <option key={key} value={key}>
                  {t(`services.${key.replace(/ /g, "_")}`)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={2}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
              placeholder={t("placeholder.description")}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-900 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-800 hover:scale-105 transition-transform duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
          >
            {t("formAction.submit")}
          </button>
        </form>
      </div>
    </div>
  );
}
