"use client"; // For animations and interactive components
import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { MdPhoneIphone } from "react-icons/md";

export default function ServiceRequestpage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phonenumber: "",
    services: "",
    description: "",
  });

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
        console.log("Response from server:", data);
        alert("Service request submitted successfully!");
        setFormData({
          name: "",
          email: "",
          services: "",
          phonenumber: "",
          description: "",
        });
      } else {
        console.error("Server error:", response.statusText);
        alert("Failed to submit the service request.");
      }
    } catch (error) {
      console.error("Request error:", error);
      alert("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-custom-gray flex justify-center items-center p-8">
      <div className="bg-white mt-28 p-8 rounded-lg shadow-lg max-w-xl w-full max-h-lg h-full">
        <h1 className="text-3xl font-bold text-custom-gray1 mb-6 text-center">
          Request a Service
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Fill out the form below to request a service. We will get back to you
          as soon as possible.
        </p>

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
              placeholder="your name"
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
              placeholder="your email"
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
              placeholder="your phone number"
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
                Select a service
              </option>
              <option value="AI Creation">
                Creation of Artificial Intelligence
              </option>
              <option value="Digital Consulting">
                Digital Consulting and Strategy
              </option>
              <option value="E-commerce Development">
                E-commerce Development
              </option>
              <option value="Hosting">Web Hosting</option>
              <option value="Maintenance">Maintenance and Support</option>
              <option value="Mobile application development">
                Mobile application development
              </option>
              <option value="SEO">Search Engine Optimization (SEO)</option>
              <option value="System Integration">System Integration</option>
              <option value="UX/UI Design">UX/UI Design</option>
              <option value="Web Application Development">
                Web Application Development
              </option>
              <option value="Website Design and Development">
                Website Design and Development
              </option>
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
              placeholder="Describe your project or requirements in detail."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-900 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-800 hover:scale-105 transition-transform duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}
