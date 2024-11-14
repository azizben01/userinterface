// app/page.tsx
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Hero Section with Gradient */}
      <main className="relative flex items-center text-center min-h-screen py-responsive-py px-responsive-px md:px-custom-px md:py-custom-py">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-fixed"
          style={{ backgroundImage: "url('/images/background7.jpg')" }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black opacity-70" />

        {/* Main Content */}
        <div className="relative z-10 sm:p-8 md:animate-fade-in">
          <h1 className="text-3xl mt-12 md:text-5xl font-bold text-white mb-4">
            Welcome to SoftCreatix
          </h1>
          <p className="text-center md:text-lg text-white mb-6">
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
          <p className="text-sm md:text-lg text-white font-bold mb-2">
            Let’s work together to transform your ideas into reality!
          </p>
          <p className="text-sm sm:text-base md:text-lg text-white font-bold mb-10">
            SoftCreatix - Creating Tomorrow Solutions, Today.
          </p>

          <div className="space-x-4">
            <Link
              href="/services"
              className="slide-up px-4 py-2 sm:px-6 sm:py-3 bg-custom-gray1 text-white rounded-3xl hover:bg-custom-gray2 transition-transform duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>
        </div>
      </main>

      {/* Services Overview */}
      <section className="px-responsive-px md:px-custom-px py-responsive-py mt-4 md:mt-8bg-white">
        <h2 className="text-xl md:text-3xl font-bold text-center text-gray-500 mb-6">
          Our Services
        </h2>
        <h6 className="text-lg font-bold text-center text-gray-500 mb-6">
          Softcreatix, a specialized web development company, offers a
          comprehensive range of services to meet the needs of its clients. Here
          a list of the main services provided:
        </h6>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          <div className="p-3 md:p-6 bg-gray-50 rounded-3xl shadow-md transform transiton-transform duration-300 hover:scale-90 hover:shadow-xl hover:bg-gray-900 hover:text-white">
            <h3 className="text-lg md:text-xl font-semibold">
              Website Design and Development
            </h3>
            <p>
              Creation of custom websites optimized for an exceptional user
              experience.
            </p>
          </div>
          <div className="p-3 md:p-6 bg-gray-50 rounded-3xl shadow-lg transform transiton-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-900 hover:text-white">
            <h3 className="text-lg md:text-xl font-semibold">UX/UI Design</h3>
            <p>
              Design of intuitive and aesthetically pleasing user interfaces to
              enhance visitor engagement.
            </p>
          </div>
          <div className="p-3 md:p-6 bg-gray-50 rounded-3xl shadow-md transform transiton-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-900 hover:text-white">
            <h3 className="text-lg md:text-xl font-semibold">
              E-commerce Development
            </h3>
            <p>Robust and secure online commerce solutions to boost sales.</p>
          </div>
          <div className="p-3 md:p-6 bg-gray-50 rounded-3xl shadow-md transform transiton-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-900 hover:text-white">
            <h3 className="text-lg md:text-xl font-semibold">
              Search Engine Optimization (SEO)
            </h3>
            <p>
              SEO strategies to improve website visibility and ranking on search
              engines.
            </p>
          </div>
          <div className="p-3 md:p-6 bg-gray-50 rounded-3xl shadow-md transform transiton-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-900 hover:text-white">
            <h3 className="text-lg md:text-xl font-semibold">
              Maintenance and Support
            </h3>
            <p>
              Ongoing maintenance services to ensure website functionality and
              security.
            </p>
          </div>
          <div className="p-3 md:p-6 bg-gray-50 rounded-3xl shadow-md transform transiton-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-900 hover:text-white">
            <h3 className="text-lg md:text-xl font-semibold">Web Hosting</h3>
            <p>
              Reliable and high-performance hosting solutions to guarantee
              maximum website uptime.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-3xl shadow-md transform transiton-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-900 hover:text-white">
            <h3 className="text-lg md:text-xl font-semibold">
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
          <div className="p-6 bg-gray-50 rounded-3xl shadow-md transform transiton-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-900 hover:text-white">
            <h3 className="text-xl font-semibold">Artificial Intelligence</h3>
            <p>
              We leverage advanced AI technologies to build intelligent
              solutions. Our AI solutions can enhance your business processes
              and customer experiences.
            </p>
          </div>
        </div>
        <div className="text-center items-center mt-8">
          <Link
            href="/services"
            className="px-6 py-3 bg-gray-600 text-white rounded-2xl hover:bg-gray-800"
          >
            Request a service
          </Link>
        </div>
      </section>
      {/* Why choose us */}
      <section className="px-responsive-px py-reponsive-py bg-gray-50 mt-4 md:mt-8">
        <h2 className="text-xl md:text-3xl font-bold text-gray-500 text-center mb-6">
          Why Choose SoftCreatix?
        </h2>
        <div className="grid grid-cols-1 sm:px-responsive-px md:grid-cols-3 gap-6">
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
      <section className="px-responsive-px py-reponsive-py bg-white mt-4 md:mt-8 mb-4">
        <h2 className="text-xl md:text-3xl font-bold text-gray-500 text-center mb-6">
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
        </div>
      </section>

      {/* Testimonials  */}
      <section className="px-responsive-px py-responsive-py bg-gray-50 mt-4 md:mt-8">
        <h2 className="text-xl md:text-3xl font-bold text-gray-500 text-center mb-6">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-3 md:p-6 bg-white rounded-lg shadow-lg">
            <p className="text-sm md:text-lg font-italic">
              SoftCreatix helped us streamline our business processes with a
              custom solution. The team was incredibly professional, and the
              results exceeded our expectations.
            </p>
            <p className="text-md font-bold mt-4">
              Mina Mapaluza, CEO of TechBiz
            </p>
          </div>
          <div className="p-3 md:p-6 bg-white rounded-lg shadow-lg">
            <p className="text-sm md:text-lg font-italic">
              Their mobile app development service transformed our customer
              engagement strategy. Highly recommend!
            </p>
            <p className="text-md font-bold mt-4">
              Jane Smith, CTO of FinStart
            </p>
          </div>
          <div className="p-3 md:p-6 bg-white rounded-lg shadow-lg">
            <p className="text-sm md:text-lg font-italic">
              They created my Holy Spirit Academia website in no time and with
              all the custom features I needed. Highly recommend!
            </p>
            <p className="text-md font-bold mt-4">Pastor Jean Bosco</p>
          </div>
        </div>
      </section>
      {/* Portfolio */}
      <section className="px-responsive-px py-responsive-py bg-white mt-8">
        <h2 className="text-xl md:text-3xl font-bold text-gray-500 text-center mb-6">
          Our Portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-3 md:p-6 bg-gray-50 rounded-3xl shadow-md hover:scale-105 transform transiton-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-900 hover:text-white">
            <h3 className="text-lg md:text-xl font-semibold">
              Holy Spirit Academia
            </h3>
            <p>The Custome website for the church Holy Spirit Academia.</p>
          </div>
          <div className="p-3 md:p-6 bg-gray-50 rounded-3xl shadow-md hover:scale-105 transform transiton-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-900 hover:text-white">
            <h3 className="text-lg md:text-xl font-semibold">
              The SoftCreatix Website
            </h3>
            <p>
              We, SOftCreatix created our own modern website where you can view
              and request our services.{" "}
            </p>
          </div>
          <div className="p-3 md:p-6 bg-gray-50 rounded-3xl shadow-md hover:scale-105 transform transiton-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-900 hover:text-white">
            <h3 className="text-lg md:text-xl font-semibold">
              Online Motel Reservation
            </h3>
            <p>
              Similar in a better way then booking or rbnb, we simplify the
              process of booking accommodation accross different cities and
              countries.
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
      <section className="px-reponsive-px py-reponsive-py bg-white mt-4 md:mt-8">
        <h2 className="text-xl md:text-3xl font-bold text-gray-500 text-center mb-6">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
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
              src="/images/obama.jpg"
              width={100}
              height={100}
              alt="Jane Smith"
              className="rounded-full mx-auto h-26 w-32 mb-4"
            />
            <h3 className="text-xl font-semibold">Ben Obama</h3>
            <p>Backend Developer</p>
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
            <p>Full Stack Developer</p>
          </div>
          <div className="text-center">
            <Image
              src="/images/gabriel.jpg"
              width={100}
              height={100}
              alt="Jane Smith"
              className="rounded-full mx-auto h-32 w-32 mb-4"
            />
            <h3 className="text-xl font-semibold"> Gabriel</h3>
            <p>Frontend Developer</p>
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
            <p>frontend Developer</p>
          </div>
          <div className="text-center">
            <Image
              src="/images/questionmark.png"
              width={100}
              height={100}
              alt="Jane Smith"
              className="rounded-full mx-auto h-32 w-32 mb-4"
            />
            <h3 className="text-xl font-semibold">Loic </h3>
            <p>Lead Developer</p>
          </div>
          <div className="text-center">
            <Image
              src="/images/anicet.jpg"
              width={100}
              height={100}
              alt="Jane Smith"
              className="rounded-full mx-auto h-32 w-32 mb-4"
            />
            <h3 className="text-xl font-semibold">Anicet </h3>
            <p>Frontend Developer</p>
          </div>
          <div className="text-center">
            <Image
              src="/images/ben.jpg"
              width={100}
              height={100}
              alt="Jane Smith"
              className="rounded-full mx-auto h-26 w-32 mb-4"
            />
            <h3 className="text-xl font-semibold">Ben Aziz </h3>
            <p>Full stack Developer</p>
          </div>
        </div>
      </section>

      {/* About us section */}
      <section className="px-responsive-px py-responsive-py bg-gray-50 mt-4 md:mt-8">
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
      <section className="py-responsive-py px-responsive-px bg-gray-900 mt-4 md:mt-8 text-white text-center">
        <h2 className="text-lg md:text-3xl font-bold mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-sm md:text-lg mb-6">
          Let’s work together to transform your ideas into reality!{" "}
        </p>
        <Link
          href="/contact"
          className="px-6 py-3 bg-white text-gray-900 rounded-2xl hover:bg-gray-100"
        >
          Contact Us
        </Link>
        <p className="mt-8 text-sm md:text-lg">
          <Link href="/adminlogin">
            &copy; 2024 SoftCreatix. All rights reserved.
          </Link>
        </p>
        <p className="text-sm md:text-lg">Developped by SoftCreatix.</p>
      </section>
    </div>
  );
}
