"use client"; // Mark this component as a Client Component
// ask what is this use client.
import { useState } from "react";

const services = [
  {
    id: 1,
    name: "Web Development",
    description: "We build modern web applications.",
  },
  { id: 2, name: "SEO Optimization", description: "Improve your site's SEO." },
  {
    id: 3,
    name: "Mobile App Development",
    description: "Develop mobile apps for your business.",
  },
  {
    id: 4,
    name: "Computer Maintenance",
    description:
      "Having any issue with your computer device, we can help you!.",
  },
];

const ServicesPage = () => {
  const [, setSelectedService] = useState("");
  const [requestStatus, setRequestStatus] = useState("");

  const handleServiceRequest = (serviceName: string) => {
    setRequestStatus(`Your request for ${serviceName} has been sent.`);
    setSelectedService("");
  };

  return (
    <main className="p-10 justify-center items-center min-h-screen bg-custom-gray">
      <div className="">
        <h1 className="text-2xl font-bold mb-4 mt-20">Discover Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-100 p-4 rounded-lg shadow-sm"
            >
              <h2 className="font-bold">{service.name}</h2>
              <p>{service.description}</p>
              <button
                onClick={() => handleServiceRequest(service.name)}
                className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
              >
                Request Service
              </button>
            </div>
          ))}
        </div>
        {requestStatus && <p className="text-green-500">{requestStatus}</p>}
      </div>
    </main>
  );
};

export default ServicesPage;
