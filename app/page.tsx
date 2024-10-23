// app/page.tsx
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Hero Section with Gradient */}
      <main className="flex-1 flex flex-col items-center justify-center text-center relative pt-20 min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-sm"
          style={{ backgroundImage: "url('/images/background5.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black opacity-70" />
        <div className="relative z-10 p-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome to SoftCreatix
          </h1>
          <p className="text-lg text-white mb-6">
            We build innovative software solutions to drive your business
            forward. SoftCreatix is a leading software development company in
            Rwanda, specializing in creating innovative software applications.
            We are dedicated to delivering exceptional solutions that drive
            business growth and empower our clients to achieve their goals. With
            a focus on local insights and global expertise.
          </p>
          <div className="space-x-4 ">
            <Link
              href="/signup"
              className="px-6 py-3 bg-get-started text-white rounded-xl hover:bg-get-started-hover transition-transform duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              href="/signin"
              className="px-6 py-3 bg-gray-600 text-white rounded-xl hover:bg-gray-800"
            >
              Login
            </Link>
          </div>
        </div>
      </main>

      {/* Services Overview */}
      <section className="p-8 bg-white mt-8">
        <h2 className="text-3xl font-bold text-center text-gray-500 mb-6">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-50 rounded-xl shadow-md transform transiton-transform duration-300 hover:scale-90 hover:shadow-xl hover:bg-get-started hover:text-white">
            <h3 className="text-xl font-semibold">
              Custom Software Development
            </h3>
            <p>Tailored solutions to meet your specific business needs.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl shadow-lg transform transiton-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-get-started hover:text-white">
            <h3 className="text-xl font-semibold">Mobile App Development</h3>
            <p>
              Engaging mobile applications for both iOS and Android platforms.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-md transform transiton-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-get-started hover:text-white">
            <h3 className="text-xl font-semibold">Web Development</h3>
            <p>Modern, responsive websites that enhance user experience.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-md transform transiton-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-get-started hover:text-white">
            <h3 className="text-xl font-semibold">Maintenance</h3>
            <p>
              Our team ensures the smooth and uninterrupted operation of your IT
              systems through regular maintenance, updates, and troubleshooting,
              minimizing downtime and maximizing efficiency.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-md transform transiton-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-get-started hover:text-white">
            <h3 className="text-xl font-semibold">Cloud Consulting</h3>
            <p>
              We provide expert guidance and solutions for businesses to
              leverage cloud technology effectively, optimizing costs,
              scalability, and security.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-md transform transiton-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-get-started hover:text-white">
            <h3 className="text-xl font-semibold">Software Prototyping</h3>
            <p>
              We rapidly develop functional prototypes of your software
              concepts, allowing you to visualize and validate ideas before
              investing in full-scale development.
            </p>
          </div>
        </div>
      </section>
      {/* Why choose us */}
      <section className="p-8 bg-gray-50 mt-8">
        <h2 className="text-3xl font-bold text-gray-500 text-center mb-6">
          Why Choose SoftCreatix?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <Image
              src="/images/background5.jpg"
              alt="Experience"
              width={100}
              height={100}
              className="mx-auto h-16 mb-4"
            />
            <h3 className="text-xl font-semibold">Decades of Experience</h3>
            <p>
              With over 10 years in the industry, we have successfully delivered
              hundreds of software projects across industries.
            </p>
          </div>
          <div className="text-center">
            <Image
              src="/images/background4.png"
              alt="Innovation"
              width={100}
              height={100}
              className="mx-auto h-16 mb-4"
            />
            <h3 className="text-xl font-semibold">Cutting-Edge Innovation</h3>
            <p>
              We stay at the forefront of technology to provide the latest and
              most efficient solutions for your business.
            </p>
          </div>
          <div className="text-center">
            <Image
              src="/images/background3.jpg"
              alt="Support"
              width={100}
              height={100}
              className="mx-auto h-16 mb-4"
            />
            <h3 className="text-xl font-semibold">24/7 Support</h3>
            <p>
              Our dedicated team provides around-the-clock support, ensuring
              your systems are always up and running.
            </p>
          </div>
        </div>
      </section>

      {/* About us section */}
      <section className="p-8 bg-gray-50 mt-8">
        <h2 className="text-3xl font-bold text-gray-500 text-center mb-6">
          About SoftCreatix
        </h2>
        <p className="text-lg text-center mb-6">
          SoftCreatix is a leading software development company committed to
          creating innovative digital solutions for businesses worldwide. Our
          passion for technology and dedication to customer satisfaction drives
          us to deliver cutting-edge software tailored to your needs.
        </p>
        <div className="text-center">
          <Link
            href="/about"
            className="px-6 py-3 bg-get-started text-white rounded-md hover:bg-gray-800"
          >
            Learn More
          </Link>
        </div>
      </section>
      {/* Technology and tools */}
      <section className="p-8 bg-white mt-8">
        <h2 className="text-3xl font-bold text-gray-500 text-center mb-6">
          Technologies We Use
        </h2>
        <div className="flex space-x-6 animate-slide-logo">
          <Image
            src="/images/reactnative.png"
            alt="AWS"
            width={100}
            height={100}
            className="h-16 hover:scale-110 hover:shadow-2xl transform transition duration-300 ease-in-out"
          />
          <Image
            src="/images/python.jpg"
            alt="Node.js"
            width={100}
            height={100}
            className="h-16 hover:scale-110 hover:shadow-2xl transform transition duration-300 ease-in-out "
          />
          <Image
            src="/images/htmllogo.png"
            alt="AWS"
            width={100}
            height={100}
            className="h-16 hover:scale-110 hover:shadow-2xl transform transition duration-300 ease-in-out"
          />
          <Image
            src="/images/Golang.png"
            alt="AWS"
            width={100}
            height={100}
            className="h-16 hover:scale-110 hover:shadow-2xl transform transition duration-300 ease-in-out"
          />
          <Image
            src="/images/nextjs.jpg"
            alt="AWS"
            width={100}
            height={100}
            className="h-16 hover:scale-110 hover:shadow-2xl transform transition duration-300 ease-in-out"
          />
          <Image
            src="/images/javascript.png"
            alt="React"
            width={100}
            height={100}
            className="h-16 hover:scale-110 hover:shadow-2xl transform transition duration-300 ease-in-out"
          />
          <Image
            src="/images/csslogo.png"
            alt="AWS"
            width={100}
            height={100}
            className="h-16 hover:scale-110 hover:shadow-xl transform transition duration-300 ease-in-out"
          />
          <Image
            src="/images/angular.png"
            alt="AWS"
            width={100}
            height={100}
            className="h-16 hover:scale-110 hover:shadow-xl transform transition duration-300 ease-in-out"
          />
          <Image
            src="/images/postgresql.png"
            alt="AWS"
            width={100}
            height={100}
            className="h-16 hover:scale-110 hover:shadow-xl transform transition duration-300 ease-in-out"
          />
          <Image
            src="/images/sqlite.png"
            alt="AWS"
            width={100}
            height={100}
            className="h-16 hover:scale-110 hover:shadow-xl transform transition duration-300 ease-in-out"
          />
        </div>
        <div className="text-center mt-20">
          <Link
            href="/about"
            className="px-6 py-3 bg-get-started text-white rounded-md hover:bg-gray-800"
          >
            View entire tools
          </Link>
        </div>
      </section>
      {/* Testimonials  */}
      <section className="p-8 bg-gray-50 mt-8">
        <h2 className="text-3xl font-bold text-gray-500 text-center mb-6">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <p className="text-lg font-italic">
              SoftCreatix helped us streamline our business processes with a
              custom solution. The team was incredibly professional, and the
              results exceeded our expectations.
            </p>
            <p className="text-md font-bold mt-4">John Doe, CEO of TechBiz</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <p className="text-lg font-italic">
              Their mobile app development service transformed our customer
              engagement strategy. Highly recommend!
            </p>
            <p className="text-md font-bold mt-4">
              Jane Smith, CTO of FinStart
            </p>
          </div>
        </div>
      </section>
      {/* Portfolio */}
      <section className="p-8 bg-white mt-8">
        <h2 className="text-3xl font-bold text-gray-500 text-center mb-6">
          Our Portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:scale-105 transform transiton-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-get-started hover:text-white">
            <h3 className="text-xl font-semibold">Project Name</h3>
            <p>
              A brief description of the project and the technology stack used.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:scale-105 transform transiton-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-get-started hover:text-white">
            <h3 className="text-xl font-semibold">Project Name</h3>
            <p>
              A brief description of the project and the technology stack used.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:scale-105 transform transiton-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-get-started hover:text-white">
            <h3 className="text-xl font-semibold">Project Name</h3>
            <p>
              A brief description of the project and the technology stack used.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:scale-105 transform transiton-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-get-started hover:text-white">
            <h3 className="text-xl font-semibold">Project Name</h3>
            <p>
              A brief description of the project and the technology stack used.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:scale-105 transform transiton-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-get-started hover:text-white">
            <h3 className="text-xl font-semibold">Project Name</h3>
            <p>
              A brief description of the project and the technology stack used.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:scale-105 transform transiton-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-get-started hover:text-white">
            <h3 className="text-xl font-semibold">Project Name</h3>
            <p>
              A brief description of the project and the technology stack used.
            </p>
          </div>
        </div>
        <div className="text-center mt-6">
          <Link
            href="/portfolio"
            className="px-6 py-3 bg-get-started text-white rounded-md hover:bg-gray-800"
          >
            View Full Portfolio
          </Link>
        </div>
      </section>
      {/* Team members */}
      <section className="p-8 bg-white mt-8">
        <h2 className="text-3xl font-bold text-gray-500 text-center mb-6">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <Image
              src="/images/ceopicture.jpg"
              width={100}
              height={100}
              alt="Ben Aziz"
              className="rounded-full mx-auto h-32 w-32 mb-4"
            />
            <h3 className="text-xl font-semibold">Ben Aziz</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="text-center">
            <Image
              src="/images/backenddevelopper.jpeg"
              width={100}
              height={100}
              alt="Jane Smith"
              className="rounded-full mx-auto h-32 w-32 mb-4"
            />
            <h3 className="text-xl font-semibold">Mbokani Predit</h3>
            <p>Backend Developper</p>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="p-8 bg-get-started mt-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-lg mb-6">
          Let work together to build something amazing.
        </p>
        <Link
          href="/contact"
          className="px-6 py-3 bg-white text-get-started rounded-md hover:bg-gray-100"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}
