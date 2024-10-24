import Image from "next/image";
import { FaCogs, FaRocket, FaClipboardList } from "react-icons/fa";
import Link from "next/link";

function UserAccountPage() {
  // User's information (replace with dynamic content)
  const userInfo = {
    name: "Ben Aziz",
    email: "Benaziz@gmail.com",
    plan: "Pro Plan",
    avatar: "/images/avatar.jpg", // Replace with dynamic image URL
  };

  // Available services (example data, replace with your services)
  const services = [
    {
      title: "Software Development",
      description: "Custom-built software tailored to your business needs.",
      icon: <FaCogs className="text-3xl text-blue-500" />,
    },
    {
      title: "Web Design",
      description: "Modern and responsive web design for businesses.",
      icon: <FaRocket className="text-3xl text-green-500" />,
    },
    {
      title: "Digital Marketing",
      description:
        "Grow your business with our expert digital marketing services.",
      icon: <FaClipboardList className="text-3xl text-purple-500" />,
    },
    // Add more services as needed
  ];

  return (
    <div className="container bg-custom-gray mx-auto py-16 px-4 mt-24">
      {/* Header Section */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
          Welcome, {userInfo.name}
        </h1>
        <p className="text-center text-gray-500">
          Here’s a summary of your account and services.
        </p>
      </header>

      {/* Account Overview */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-12">
        <div className="flex items-center space-x-6">
          <Image
            src={userInfo.avatar}
            alt="User Avatar"
            width={100}
            height={100}
            className="rounded-full border-2 border-gray-300"
          />
          <div>
            <h2 className="text-2xl font-semibold">{userInfo.name}</h2>
            <p className="text-gray-600">{userInfo.email}</p>
            <p className="text-gray-800 font-bold">Plan: {userInfo.plan}</p>
            <Link
              href=""
              className="mt-4 inline-block px-4 py-2 bg-custom-gray1 text-white rounded-md hover:bg-blue-600"
            >
              Manage Account
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section>
        <h2 className="text-3xl font-bold text-gray-700 mb-6">
          Available Services
        </h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link
                href="/services"
                className="inline-block px-4 py-2 bg-custom-gray1 text-white rounded-md hover:bg-custom-gray2 transition-colors"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="mt-16 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Need Assistance?
        </h3>
        <p className="text-gray-600 mb-6">
          Contact our support team for any questions or issues related to your
          account or services.
        </p>
        <Link
          href="/contact"
          className="px-6 py-3 bg-custom-gray1 text-white hover:bg-custom-gray2 rounded-md transition-transform transform hover:scale-105"
        >
          Contact Support
        </Link>
      </section>
    </div>
  );
}

export default UserAccountPage;
