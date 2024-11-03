"use client";
import { useState } from "react";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(
        //"http://192.168.1.69/submitcontact",
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
        console.log("Response fron server", data);
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        // console.error("Failed to send message:", response.statusText);
        // alert("There was an error sending your message. Please try again.");
        const errorData = await response.json(); // Parse the JSON error response
        const errorMessage = errorData.message || response.statusText; // Use the specific error message if available
        console.error("Failed to send message:", errorMessage);
        alert(`There was an error sending your message: ${errorMessage}`);
      }
    } catch (error) {
      console.error("Request error:", error);
      alert("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <div className="container mx-auto py-16 mt-24">
      <h1 className="text-4xl font-bold text-center mb-5">Contact Us</h1>
      <h6 className="px-5 text-lg mb-16">
        For any information or assistance you may need, please contact us at the
        addresses below. We ensure prompt feedback.
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
            <span className="text-lg font-bold">WhatsApp:</span> +254 111 827
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
                className="bg-gray-900 text-white px-4 py-2 rounded-3xl hover:from-green-600 hover:to-teal-600 hover:shadow-lg transform transition-transform duration-300 hover:scale-105 w-3/4 mx-auto"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
