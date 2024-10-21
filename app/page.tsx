import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content section */}
      <main
        className="relative flex-1 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/background5.jpg')" }}
      >
        {/* Blur effect overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

        {/* Content in front of the background */}
        <div className="relative z-10 text-center p-8 bg-white/40 rounded-lg shadow-lg animate-fade-in">
          {/* Logo placeholder */}

          {/* Slogan with animation */}
          <h1 className="text-5xl font-bold text-gray-1000 mb-4 animate-slide-in">
            Empowering Ideas, Transforming Software
          </h1>

          {/* Company description with animation */}
          <p className="text-lg text-gray-900 mb-6 animate-fade-in-delay">
            SoftCreatix is a leading software development company in Rwanda,
            specializing in creating innovative software applications. We are
            dedicated to delivering exceptional solutions that drive business
            growth and empower our clients to achieve their goals. With a focus
            on local insights and global expertise.
          </p>

          {/* Call to action buttons with hover animations */}
          <div className="space-x-4">
            <a
              href="/signup"
              className="px-6 py-3 bg-get-started text-white rounded-md hover:bg-get-started-hover transition-transform duration-300 transform hover:scale-105"
            >
              Get Started
            </a>
            <a
              href="/signin"
              className="px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-800 transition-transform duration-300 transform hover:scale-105"
            >
              Sign In
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
