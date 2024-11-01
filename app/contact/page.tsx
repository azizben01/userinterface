"use client"; // For animations and interactive components
import { useState } from "react";

export default function ContactPage() {
  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://softcreatixbackend.onrender.com/submitcontact",
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
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        console.error("Server error:", response.statusText);
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Request error:", error);
      alert("There was an error sending your message. Please try again.");
    }
  };

  return (
    <div className="container mx-auto py-16 mt-24">
      <h1 className="text-4xl font-bold text-center mb-5">Contact Us</h1>
      <h6 className="px-5 text-lg mb-16">
        For any information or assistance you may need at General Consulting
        Groups SARL, please contact us at the addresses below.
        <br /> We ensure you a very prompt response.
      </h6>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4">Our Contact Information</h2>
          <p className="text-gray-700 mb-2">
            <span className="text-lg font-bold">Address:</span> KN 4 Av 22,
            KIGALI - RWANDA
          </p>
          <p className="text-gray-700 mb-2">
            <span className="text-lg font-bold">Phone:</span> +250 798 812 499
          </p>
          <p className="text-gray-700 mb-2">
            <span className="text-lg font-bold">Email:</span>{" "}
            contact@generalconsultinggroups.com
          </p>
          <p className="text-gray-700 mb-2">
            <span className="text-lg font-bold">Whatsapp:</span> +254 111 827
            802 & +34 602 39 49 89
          </p>
        </div>
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col md:flex-row md:space-x-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="p-2 mb-4 rounded-xl input w-full md:w-1/2 border-2"
                placeholder="Name"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="p-2 mb-4 rounded-xl input w-full md:w-1/2 border-2"
                placeholder="Email"
                required
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="p-4 input w-full h-40 border-2 rounded-xl"
              placeholder="Message"
              required
            ></textarea>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-gray-900 text-white px-4 py-2 rounded-3xl hover:shadow-lg transform transition-transform duration-300 hover:scale-105 w-3/4 mx-auto"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
