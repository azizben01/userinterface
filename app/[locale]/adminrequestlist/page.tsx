"use client";
import { useEffect, useState } from "react";
import { PiTrashFill, PiCheckCircleFill } from "react-icons/pi";

interface Service {
  id: number;
  name: string;
  email: string;
  phonenumber: number;
  services: string;
  description: string;
  status?: string;
}

interface Message {
  id: number;
  name: string;
  email: string;
  message: string;
}

const AdminPage = ({
  params,
}: {
  params: { locale: "en" | "fr" | "ger" | "span" };
}) => {
  const { locale } = params;
  const [services, setServices] = useState<Service[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  console.log("Current Email:", sessionStorage.getItem("loginEmail"));
  useEffect(() => {
    // Fetch service requests
    const fetchServices = async () => {
      try {
        const response = await fetch(
          "https://softcreatix.com/api/requestlist",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(services),
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch services");
        }
        const data: Service[] = await response.json();
        setServices(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    // Fetch contact messages
    const fetchMessages = async () => {
      try {
        const response = await fetch("");
        if (!response.ok) {
          throw new Error("Failed to fetch messages");
        }
        const data: Message[] = await response.json();
        console.log("Fetched messages:", data); // Ensure each message has an id
        setMessages(data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchServices();
    fetchMessages();
  }, []);

  //Function to mark a task as completed
  const handleComplete = async (id: number) => {
    try {
      const response = await fetch(
        `https://softcreatix.com/api/markAsCompleted/${id}/complete`,
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

  //Function to delete a request service
  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this request?")) {
      try {
        const response = await fetch(
          `https://softcreatix.com/api/deleteRequest/${id}`,
          {
            method: "DELETE",
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

  //function to delete a customer message
  const handleDeleteMessage = async (id: number) => {
    if (id === undefined) {
      console.error("Message ID is undefined, cannot delete");
      return;
    }
    if (window.confirm("Are you sure you want to delete this message?")) {
      try {
        const response = await fetch(
          `https://softcreatix.com/api/deletecustomermessage/${id}`,
          {
            method: "DELETE",
          }
        );
        console.log("Response:", response);

        if (response.ok) {
          setMessages((prevMessages) => {
            return prevMessages.filter((message) => message.id !== id);
          });
        } else {
          console.error("Failed to delete message:", response.statusText);
        }
      } catch (error) {
        console.error("Error deleting message:", error);
      }
    }
  };

  return (
    <main className="min-h-screen bg-gray-300 flex flex-col items-center p-8">
      <div className="w-full mt-24 max-w-6xl p-6 bg-white rounded-2xl shadow-md">
        <div className="flex justify-end flex-wrap space-x-2 ">
          <a
            href={`/${locale}/changeadminemail`}
            className="text-xl text-custom-gray1 py-2 px-2 text-md rounded-full hover:bg-gray-800 hover:text-white transition-colors duration-300"
          >
            Change admin email
          </a>
          <a
            href={`/${locale}/adminrequestlist`}
            className="text-xl text-custom-gray1 py-2 px-2 text-md rounded-full hover:bg-gray-800 hover:text-white transition-colors duration-300"
          >
            Admin dashboard
          </a>
        </div>
        <h1 className="text-3xl font-bold text-start text-custom-gray1 mb-6">
          Client Requests and Messages
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Requests */}
          <section className="lg:w-1/2">
            <h5 className="text-green-900 text-sm">
              TIPS: Only tick a request when it has been completed. Ticked
              requests cannot be unticked!{" "}
            </h5>
            <h2 className="text-2xl font-bold text-center mb-4">
              Service Requests
            </h2>
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
                      <p className="text-lg font-bold">{service.services}</p>
                      <p>{service.description}</p>
                      <button
                        onClick={() => handleComplete(service.id)}
                        className="text-green-600 hover:text-green-800"
                      >
                        <PiCheckCircleFill
                          className={`text-2xl ${
                            service.status === "completed"
                              ? "text-green-900"
                              : "text-blue-400"
                          }`}
                        />
                      </button>
                    </div>
                    <PiTrashFill
                      onClick={() => handleDelete(service.id)}
                      className="text-2xl text-gray-500 hover:text-red-700 cursor-pointer"
                    />
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center text-gray-700">
                No service requests available.
              </p>
            )}
          </section>

          {/* Right Column - Messages */}
          <section className="lg:w-1/2">
            <h2 className="text-2xl font-bold text-center mb-4 mt-10">
              Customers Messages
            </h2>
            {messages.length > 0 ? (
              <ul>
                {messages.map((message) => (
                  <li
                    key={message.id}
                    className="p-4 bg-custom-gray rounded-lg shadow mb-6 flex justify-between items-center"
                  >
                    <div>
                      <h3 className="text-lg font-bold">{message.name}</h3>
                      <p className="text-sm text-gray-600">{message.email}</p>
                      <p>{message.message}</p>
                    </div>
                    <PiTrashFill
                      onClick={() => {
                        console.log(
                          "Attempting to delete message with id:",
                          message.id
                        ); // Log the id
                        handleDeleteMessage(message.id);
                      }}
                      className="text-2xl text-gray-500 hover:text-red-700 cursor-pointer"
                    />
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center text-gray-700">
                No messages available.
              </p>
            )}
          </section>
        </div>
      </div>
    </main>
  );
};

export default AdminPage;
