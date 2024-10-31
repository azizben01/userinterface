// app/page.tsx
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Hero Section with Gradient */}
      <main className="flex-1 flex flex-col items-center justify-center text-center relative pt-20 min-h-screen">
        <div
          className="absolute bg-fixed inset-0 bg-cover bg-center filter blur-sm object-cover"
          style={{ backgroundImage: "url('/images/backgroundimage4.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black opacity-70" />
        <div className="relative p-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome to SoftCreatix
          </h1>
          <p className=" text-white mb-6">
            At SoftCreatix, we are thrilled to have you on board! Whether you
            are here to explore innovative solutions or looking to collaborate
            with a team of experts in software development, web design, and
            digital transformation, you have come to the right place.
            SoftCreatix is a leading software development company in Rwanda,
            specializing in creating innovative software applications. We are
            passionate about crafting custom-made solutions tailored to your
            specific needs, from seamless mobile applications to advanced
            business platforms that drive growth and efficiency. Our mission is
            to deliver exceptional quality, foster innovation, and create
            digital experiences that leave a lasting impact.
          </p>
          <p className="text-white text-lg font-bold">
            Let’s work together to transform your ideas into reality!
          </p>
          <p className="text-white text-lg font-bold mb-10">
            SoftCreatix - Creating Tomorrow Solutions, Today.
          </p>

          <div className="space-x-4 ">
            <Link
              href="/services"
              className="slide-up px-6 py-3 bg-custom-gray1 text-white rounded-3xl hover:bg-custom-gray2 transition-transform duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>
        </div>
      </main>

      {/* Services Overview */}
      <section className="p-8 bg-white mt-8">
        <h2 className="text-3xl font-bold text-center text-gray-500 mb-6">
          Our Services
        </h2>
        <h6 className="text-lg font-bold text-center text-gray-500 mb-6">
          Softcreatix, a specialized web development company, offers a
          comprehensive range of services to meet the needs of its clients. Here
          a list of the main services provided:
        </h6>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-50 rounded-3xl shadow-md transform transiton-transform duration-300 hover:scale-90 hover:shadow-xl hover:bg-gray-900 hover:text-white">
            <h3 className="text-xl font-semibold">
              Website Design and Development
            </h3>
            <p>
              Creation of custom websites optimized for an exceptional user
              experience.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-3xl shadow-lg transform transiton-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-900 hover:text-white">
            <h3 className="text-xl font-semibold">UX/UI Design</h3>
            <p>
              Design of intuitive and aesthetically pleasing user interfaces to
              enhance visitor engagement.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-3xl shadow-md transform transiton-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-900 hover:text-white">
            <h3 className="text-xl font-semibold">E-commerce Development</h3>
            <p>Robust and secure online commerce solutions to boost sales.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-3xl shadow-md transform transiton-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-900 hover:text-white">
            <h3 className="text-xl font-semibold">
              Search Engine Optimization (SEO)
            </h3>
            <p>
              SEO strategies to improve website visibility and ranking on search
              engines.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-3xl shadow-md transform transiton-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-900 hover:text-white">
            <h3 className="text-xl font-semibold">Maintenance and Support</h3>
            <p>
              Ongoing maintenance services to ensure website functionality and
              security.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-3xl shadow-md transform transiton-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-900 hover:text-white">
            <h3 className="text-xl font-semibold">Web Hosting</h3>
            <p>
              Reliable and high-performance hosting solutions to guarantee
              maximum website uptime.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-3xl shadow-md transform transiton-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-900 hover:text-white">
            <h3 className="text-xl font-semibold">
              Web Application Development
            </h3>
            <p>
              Creation of custom web applications to meet specific business
              needs.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-3xl shadow-md transform transiton-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-900 hover:text-white">
            <h3 className="text-xl font-semibold">System Integration</h3>
            <p>
              Integration of various systems and tools for efficient online
              operations management.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-3xl shadow-md transform transiton-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-900 hover:text-white">
            <h3 className="text-xl font-semibold">Mobile Application</h3>
            <p>
              Creation of custom mobile applications to meet specific business
              needs.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-3xl shadow-md transform transiton-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-900 hover:text-white">
            <h3 className="text-xl font-semibold">
              Digital Consulting and Strategy
            </h3>
            <p>
              Advice and strategies to maximize online impact and achieve
              business objectives.
            </p>
          </div>
        </div>
        <div className="text-center items-center mt-10">
          <Link
            href="/services"
            className="px-6 py-3 bg-gray-600 text-white rounded-2xl hover:bg-gray-800"
          >
            Request a service
          </Link>
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

      {/* Technology and tools */}
      <section className="p-8 bg-white mt-8 mb-4">
        <h2 className="text-3xl font-bold text-gray-500 text-center mb-6">
          Technologies We Use
        </h2>
        <div className="overflow-hidden">
          <div className="mb-4 mt-3 flex space-x-6 animate-slide-logo">
            <Image
              src="/images/reactnative.png"
              alt="React Native"
              width={170}
              height={265}
              className="h-16 hover:scale-110 hover:shadow-2xl transform transition duration-300 ease-in-out"
            />
            <Image
              src="/images/python.jpg"
              alt="Python"
              width={60}
              height={500}
              className="h-16 hover:scale-110 hover:shadow-2xl transform transition duration-300 ease-in-out"
            />
            <Image
              src="/images/htmllogo.png"
              alt="HTML"
              width={70}
              height={50}
              className="h-16 hover:scale-110 hover:shadow-2xl transform transition duration-300 ease-in-out"
            />
            <Image
              src="/images/Golang.png"
              alt="Go"
              width={100}
              height={100}
              className="h-16 hover:scale-110 hover:shadow-2xl transform transition duration-300 ease-in-out"
            />
            <Image
              src="/images/nextjs.jpeg"
              alt="Next.js"
              width={150}
              height={5}
              className="h-16 hover:scale-110 hover:shadow-2xl transform transition duration-300 ease-in-out"
            />
            <Image
              src="/images/javascript.png"
              alt="JavaScript"
              width={70}
              height={50}
              className="h-16 hover:scale-110 hover:shadow-2xl transform transition duration-300 ease-in-out"
            />
            <Image
              src="/images/csslogo.png"
              alt="CSS"
              width={80}
              height={100}
              className="h-16 hover:scale-110 hover:shadow-xl transform transition duration-300 ease-in-out"
            />
            <Image
              src="/images/angular.png"
              alt="Angular"
              width={150}
              height={50}
              className="h-16 hover:scale-110 hover:shadow-xl transform transition duration-300 ease-in-out"
            />
            <Image
              src="/images/postgresql.png"
              alt="PostgreSQL"
              width={150}
              height={50}
              className="h-16 hover:scale-110 hover:shadow-xl transform transition duration-300 ease-in-out"
            />
            <Image
              src="/images/sqlite.png"
              alt="SQLite"
              width={100}
              height={270}
              className="h-16 hover:scale-110 hover:shadow-xl transform transition duration-300 ease-in-out"
            />
            <Image
              src="/images/nodejs.jpeg"
              alt="node"
              width={200}
              height={270}
              className="h-16 hover:scale-110 hover:shadow-xl transform transition duration-300 ease-in-out"
            />
            <Image
              src="/images/PHP.jpeg"
              alt="php"
              width={200}
              height={270}
              className="h-16 hover:scale-110 hover:shadow-xl transform transition duration-300 ease-in-out"
            />
            <Image
              src="/images/git.jpeg"
              alt="git"
              width={200}
              height={270}
              className="h-16 hover:scale-110 hover:shadow-xl transform transition duration-300 ease-in-out"
            />
            <Image
              src="/images/django.jpeg"
              alt="django"
              width={200}
              height={270}
              className="h-16 hover:scale-110 hover:shadow-xl transform transition duration-300 ease-in-out"
            />
            <Image
              src="/images/mysql.jpeg"
              alt="mysql"
              width={200}
              height={270}
              className="h-16 hover:scale-110 hover:shadow-xl transform transition duration-300 ease-in-out"
            />
            <Image
              src="/images/slack logo.jpeg"
              alt="mysql"
              width={200}
              height={270}
              className="h-16 hover:scale-110 hover:shadow-xl transform transition duration-300 ease-in-out"
            />
          </div>
          <div className="flex space-x-6 animate-slide-logo-back mb-4">
            <Image
              src="/images/reactnative.png"
              alt="React Native"
              width={170}
              height={265}
              className="h-16 hover:scale-110 hover:shadow-2xl transform transition duration-300 ease-in-out"
            />
            <Image
              src="/images/python.jpg"
              alt="Python"
              width={60}
              height={500}
              className="h-16 hover:scale-110 hover:shadow-2xl transform transition duration-300 ease-in-out"
            />
            <Image
              src="/images/htmllogo.png"
              alt="HTML"
              width={70}
              height={50}
              className="h-16 hover:scale-110 hover:shadow-2xl transform transition duration-300 ease-in-out"
            />
            <Image
              src="/images/Golang.png"
              alt="Go"
              width={70}
              height={50}
              className="h-16 hover:scale-110 hover:shadow-2xl transform transition duration-300 ease-in-out"
            />
            <Image
              src="/images/nextjs.jpeg"
              alt="Next.js"
              width={150}
              height={5}
              className="h-16 hover:scale-110 hover:shadow-2xl transform transition duration-300 ease-in-out"
            />
            <Image
              src="/images/javascript.png"
              alt="JavaScript"
              width={70}
              height={50}
              className="h-16 hover:scale-110 hover:shadow-2xl transform transition duration-300 ease-in-out"
            />
            <Image
              src="/images/csslogo.png"
              alt="CSS"
              width={80}
              height={100}
              className="h-16 hover:scale-110 hover:shadow-xl transform transition duration-300 ease-in-out"
            />
            <Image
              src="/images/angular.png"
              alt="Angular"
              width={150}
              height={50}
              className="h-16 hover:scale-110 hover:shadow-xl transform transition duration-300 ease-in-out"
            />
            <Image
              src="/images/postgresql.png"
              alt="PostgreSQL"
              width={150}
              height={50}
              className="h-16 hover:scale-110 hover:shadow-xl transform transition duration-300 ease-in-out"
            />
            <Image
              src="/images/sqlite.png"
              alt="SQLite"
              width={100}
              height={270}
              className="h-16 hover:scale-110 hover:shadow-xl transform transition duration-300 ease-in-out"
            />
            <Image
              src="/images/nodejs.jpeg"
              alt="node"
              width={200}
              height={270}
              className="h-16 hover:scale-110 hover:shadow-xl transform transition duration-300 ease-in-out"
            />
            <Image
              src="/images/php.jpeg"
              alt="php"
              width={200}
              height={270}
              className="h-16 hover:scale-110 hover:shadow-xl transform transition duration-300 ease-in-out"
            />
            <Image
              src="/images/git.jpeg"
              alt="git"
              width={200}
              height={270}
              className="h-16 hover:scale-110 hover:shadow-xl transform transition duration-300 ease-in-out"
            />
            <Image
              src="/images/django.jpeg"
              alt="django"
              width={200}
              height={270}
              className="h-16 hover:scale-110 hover:shadow-xl transform transition duration-300 ease-in-out"
            />
            <Image
              src="/images/mysql.jpeg"
              alt="mysql"
              width={200}
              height={270}
              className="h-16 hover:scale-110 hover:shadow-xl transform transition duration-300 ease-in-out"
            />
            <Image
              src="/images/slack logo.jpeg"
              alt="mysql"
              width={200}
              height={270}
              className="h-16 hover:scale-110 hover:shadow-xl transform transition duration-300 ease-in-out"
            />
          </div>
          {/* <div className="text-center mt-20">
          <Link
            href="/about"
            className="px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-800"
          >
            View entire tools
          </Link>
        </div> */}
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
            <p className="text-md font-bold mt-4">
              Mina Mapaluza, CEO of TechBiz
            </p>
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
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <p className="text-lg font-italic">
              They created my Holy Spirit Academia website in no time and with
              all the custom features I needed. Highly recommend!
            </p>
            <p className="text-md font-bold mt-4">Pastor Jean Bosco</p>
          </div>
        </div>
      </section>
      {/* Portfolio */}
      <section className="p-8 bg-white mt-8">
        <h2 className="text-3xl font-bold text-gray-500 text-center mb-6">
          Our Portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-50 rounded-3xl shadow-md hover:scale-105 transform transiton-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-900 hover:text-white">
            <h3 className="text-xl font-semibold">Holy Spirit Academia</h3>
            <p>The Custome website for the church Holy Spirit Academia.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-3xl shadow-md hover:scale-105 transform transiton-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-900 hover:text-white">
            <h3 className="text-xl font-semibold">The SoftCreatix Website</h3>
            <p>
              We, SOftCreatix created our own modern website where you can view
              and request our services.{" "}
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-3xl shadow-md hover:scale-105 transform transiton-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-900 hover:text-white">
            <h3 className="text-xl font-semibold">Project Name</h3>
            <p>
              A brief description of the project and the technology stack used.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-3xl shadow-md hover:scale-105 transform transiton-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-900 hover:text-white">
            <h3 className="text-xl font-semibold">Project Name</h3>
            <p>
              A brief description of the project and the technology stack used.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-3xl shadow-md hover:scale-105 transform transiton-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-900 hover:text-white">
            <h3 className="text-xl font-semibold">Project Name</h3>
            <p>
              A brief description of the project and the technology stack used.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-3xl shadow-md hover:scale-105 transform transiton-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-900 hover:text-white">
            <h3 className="text-xl font-semibold">Project Name</h3>
            <p>
              A brief description of the project and the technology stack used.
            </p>
          </div>
        </div>
        {/* <div className="text-center mt-6">
          <Link
            href=""
            className="px-6 py-3 bg-gray-600 text-white rounded-2xl hover:bg-gray-800"
          >
            View Full Portfolio
          </Link>
        </div> */}
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
            <h3 className="text-xl font-semibold">Mr Patrick</h3>
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
            <p>Lead Developper</p>
          </div>
          <div className="text-center">
            <Image
              src="/images/gloire.jpg"
              width={100}
              height={100}
              alt="Jane Smith"
              className="rounded-full mx-auto h-32 w-32 mb-4"
            />
            <h3 className="text-xl font-semibold"> Gloire</h3>
            <p>Full Stack Developper</p>
          </div>
          <div className="text-center">
            <Image
              src="/images/armel.jpg"
              width={100}
              height={100}
              alt="Jane Smith"
              className="rounded-full mx-auto h-32 w-32 mb-4"
            />
            <h3 className="text-xl font-semibold">Armel </h3>
            <p>UI/UX Designer</p>
          </div>
          <div className="text-center">
            <Image
              src="/images/armel.jpg"
              width={100}
              height={100}
              alt="Jane Smith"
              className="rounded-full mx-auto h-32 w-32 mb-4"
            />
            <h3 className="text-xl font-semibold">Loic </h3>
            <p>Backend Developper</p>
          </div>
          <div className="text-center">
            <Image
              src="/images/armel.jpg"
              width={100}
              height={100}
              alt="Jane Smith"
              className="rounded-full mx-auto h-32 w-32 mb-4"
            />
            <h3 className="text-xl font-semibold">Ben Aziz </h3>
            <p>Full stack Developper</p>
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
            className="px-6 py-3 bg-gray-600 text-white rounded-2xl hover:bg-gray-800"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Call to action */}
      <section className="p-8 bg-gray-900 mt-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-lg mb-6">
          Let’s work together to transform your ideas into reality!{" "}
        </p>
        <Link
          href="/contact"
          className="px-6 py-3 bg-white text-gray-900 rounded-2xl hover:bg-gray-100"
        >
          Contact Us
        </Link>
        <p className="mt-8">
          <Link href="/adminlogin">
            &copy; 2024 SoftCreatix. All rights reserved.
          </Link>
        </p>
        <p>Developped by SoftCreatix.</p>
      </section>
    </div>
  );
}
