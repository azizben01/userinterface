import Link from "next/link";

const UserDashboard = () => {
  // Mock user data for now
  const userData = {
    name: "Ben Aziz",
    email: "ben@gmail.com",
    services: ["Web Development", "SEO Optimization"],
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
      <div className="bg-white p-4 rounded shadow-sm mb-6">
        <h2 className="text-xl font-bold">Account Overview</h2>
        <p>
          <strong>Name:</strong> {userData.name}
        </p>
        <p>
          <strong>Email:</strong> {userData.email}
        </p>
        <p>
          <strong>Subscribed Services:</strong> {userData.services.join(", ")}
        </p>
      </div>
      <Link href="/services">
        <span className="bg-blue-500 text-white px-4 py-2 rounded">
          View Available Services
        </span>
      </Link>
    </div>
  );
};

export default UserDashboard;
