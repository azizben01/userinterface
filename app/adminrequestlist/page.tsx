"use client";
import { useEffect, useState } from "react";
import { PiTrashFill, PiCheckCircleFill } from "react-icons/pi";

interface Service {
  id: number;
  name: string;
  email: string;
  phonenumber: number;
  description: string;
  status?: string;
}

const AdminPage = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("http://192.168.1.72:2020/requestlist");
        if (!response.ok) {
          throw new Error("Failed to fetch services");
        }
        const data: Service[] = await response.json();
        setServices(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  const handleComplete = async (id: number) => {
    try {
      const response = await fetch(
        `http://192.168.1.72:2020/markAsCompleted/${id}/complete`,
        {
          method: "PUT",
        }
      );
      if (response.ok) {
        setServices((prevServices) =>
          prevServices.map((service) =>
            service.id === id ? { ...service, status: "completed" } : service
          )
        );
      }
    } catch (error) {
      console.error("Error marking as completed:", error);
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this request?")) {
      try {
        const response = await fetch(
          `http://192.168.1.72:2020/deleteRequest/${id}`,
          {
            method: "PUT", // Update to PUT to match backend
          }
        );
        if (response.ok) {
          setServices((prevServices) =>
            prevServices.filter((service) => service.id !== id)
          );
        }
      } catch (error) {
        console.error("Error marking request as deleted:", error);
      }
    }
  };

  return (
    <main className="min-h-screen bg-custom-gray flex justify-center items-center p-8">
      <div className="w-full mt-24 max-w-4xl p-6 bg-white rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold text-center text-custom-gray1 mb-6">
          Available client requests
        </h1>

        <section className="mb-8">
          {services.length > 0 ? (
            <ul>
              {services.map((service) => (
                <li
                  key={service.id}
                  className="p-4 bg-custom-gray rounded-lg shadow mb-6 flex justify-between items-center"
                >
                  <div>
                    <h3 className="text-lg font-bold">{service.name}</h3>
                    <p className="text-sm text-gray-600">{service.email}</p>
                    <p className="text-sm text-gray-600">
                      {service.phonenumber}
                    </p>
                    <p>{service.description}</p>

                    <button
                      onClick={() => handleComplete(service.id)}
                      className="text-green-600 hover:text-green-800"
                    >
                      <PiCheckCircleFill
                        className={`text-2xl ${
                          service.status === "completed"
                            ? "text-blue-900"
                            : "text-blue-400"
                        }`}
                      />
                    </button>
                  </div>

                  <PiTrashFill
                    onClick={() => handleDelete(service.id)}
                    className="text-2xl text-gray-500 hover:text-gray-700 cursor-pointer"
                  />
                </li>
              ))}
            </ul>
          ) : (
            <p>No service requests available.</p>
          )}
        </section>
      </div>
    </main>
  );
};

export default AdminPage;
