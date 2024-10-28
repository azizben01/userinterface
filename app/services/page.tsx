"use client"; // For animations and interactive components
import { useState } from "react";

export default function ServiceRequestpage() {
  const [formData, setFormData] = useState({
    //formData holds the valu entered on the form and setFormData updates it.
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to backend)
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-custom-gray flex justify-center items-center mt-16 p-8">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl w-full max-h-lg h-full">
        <h1 className="text-3xl font-bold text-custom-gray1 mb-6 text-center">
          Request a Service
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Fill out the form below to request a service. We will get back to you
          as soon as possible.
        </p>

        {/* Service Request Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            {/* <label
              htmlFor="name"
              className="block text-md font-medium text-gray-700"
            >
              Your Name
            </label> */}
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="your name"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
          </div>

          <div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your email"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
          </div>

          <div>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
            >
              <option value="" disabled>
                Select a service
              </option>
              <option value="Website Design and Development">
                Website Design and Development
              </option>
              <option value="UX/UI Design">UX/UI Design</option>
              <option value="E-commerce Development">
                E-commerce Development
              </option>
              <option value="SEO">Search Engine Optimization (SEO)</option>
              <option value="Maintenance">Maintenance and Support</option>
              <option value="Hosting">Web Hosting</option>
              <option value="Web Application Development">
                Web Application Development
              </option>
              <option value="System Integration">System Integration</option>
              <option value="Digital Consulting">
                Digital Consulting and Strategy
              </option>
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-md font-medium text-gray-700"
            >
              Additional Details
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
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
