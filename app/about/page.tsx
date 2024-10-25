import { FaHandsHelping, FaRocket, FaUsers } from "react-icons/fa";

function AboutUsPage() {
  return (
    <div className="container mx-auto py-8 sm:py-16 mt-16 sm:mt-24 px-4">
      <h1 className="text-3xl sm:text-5xl font-extrabold text-center mb-6 sm:mb-10 text-gray-800">
        About SoftCreatix
      </h1>
      <p className="text-base sm:text-lg text-center mb-8 sm:mb-12 px-2 md:px-20 lg:px-48 text-gray-600 leading-relaxed">
        SoftCreatix is a leading provider of innovative digital solutions,
        offering a comprehensive range of services that help businesses and
        individuals achieve their full potential through cutting-edge technology
        and unparalleled service. We are committed to driving growth and
        fostering innovation through the power of digital transformation.
      </p>

      {/* Vision and Values Section */}
      <section className="flex flex-col lg:flex-row text-white space-y-6 lg:space-y-0 lg:space-x-10 ml-0 sm:ml-3 mb-12 sm:mb-16">
        <div className="lg:w-1/2 p-4 bg-gray-800 rounded-2xl shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
            Our vision is to be a global leader in digital transformation,
            enabling businesses to thrive in a rapidly evolving technological
            landscape. We strive to create impactful solutions that empower
            individuals and organizations to unlock new opportunities, stay
            ahead of the curve, and achieve their ultimate goals.
          </p>
          <FaRocket className="text-4xl sm:text-5xl mx-auto" />
        </div>
        <div className="lg:w-1/2 p-4 bg-gray-800 text-white rounded-2xl shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Values</h2>
          <p className="text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
            At SoftCreatix, we are driven by our core values, which guide our
            approach to everything we do:
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>
              Innovation: We foster creativity to provide cutting-edge
              solutions.
            </li>
            <li>
              Excellence: We deliver exceptional quality in everything we do.
            </li>
            <li>
              Collaboration: We believe in the power of teamwork and
              partnerships.
            </li>
            <li>
              Client Focus: Our clients success is at the heart of our mission.
            </li>
            <li>
              Integrity: We conduct our business with honesty and transparency.
            </li>
          </ul>
          <FaHandsHelping className="text-4xl sm:text-5xl mx-auto mt-4 sm:mt-6" />
        </div>
      </section>

      {/* Our Team Section */}
      <section className="mb-12 sm:mb-16 px-2 sm:px-3">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-10 text-gray-700">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 text-white">
          {[
            {
              name: "Patrick",
              title: "Founder & CEO",
              desc: "With years of experience in software development, Patrick leads our team with vision and integrity.",
            },
            {
              name: "Mbokani Predit",
              title: "Lead Developer",
              desc: "Mbokani oversees all technical aspects, ensuring that we always stay at the forefront of innovation.",
            },
            {
              name: "Gloire",
              title: "Full Stack Developer",
              desc: "Gloire transforms ideas into visually stunning and user-friendly interfaces.",
            },
            {
              name: "Armel",
              title: "UI/UX Designer",
              desc: "Armel ensures that every project runs smoothly and is delivered on time.",
            },
            {
              name: "Aziz",
              title: "Full Stack Developer",
              desc: "Aziz brings technical expertise and creativity to every project.",
            },
          ].map((member, index) => (
            <div key={index} className="p-4 bg-gray-800 shadow-md rounded-xl">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                {member.name}
              </h3>
              <p className="text-lg mb-2">{member.title}</p>
              <p className="text-white">{member.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* History Section */}
      <section className="py-8 sm:py-16 bg-gray-50">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-gray-700">
          Our Journey
        </h2>
        <div className="max-w-5xl mx-auto text-center text-base sm:text-lg text-gray-600 leading-relaxed">
          <p className="mb-6 sm:mb-8">
            Founded in 2015, SoftCreatix started with a vision to revolutionize
            the digital space. What began as a small startup has now evolved
            into a thriving company that serves clients across the globe. Over
            the years, we have built a team of experts and expanded our
            portfolio to include cutting-edge software solutions, custom web and
            mobile applications, and comprehensive digital transformation
            services.
          </p>
          <FaUsers className="text-gray-900 text-5xl sm:text-6xl mx-auto" />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-8 sm:py-16 bg-white ">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-10 text-gray-700">
          What Our Clients Say
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 text-center">
          {[
            {
              quote:
                "SoftCreatix transformed our business with their innovative solutions. Their team expertise and professionalism exceeded our expectations.",
              name: "Ben Aziz",
              title: "Professional Intern",
            },
            {
              quote:
                "Thanks to SoftCreatix, our mobile app has seen tremendous growth. Their commitment to quality and customer satisfaction is unmatched.",
              name: "Gloire",
              title: "Professional Intern",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-gray-100 shadow-lg rounded-xl transform transition-transform duration-300 hover:scale-95 hover:shadow-xl hover:bg-gray-800 hover:text-white"
            >
              <p className="text-base sm:text-lg italic mb-4">
                {testimonial.quote}
              </p>
              <h4 className="font-bold text-gray-800 hover:text-white">
                {testimonial.name}
              </h4>
              <p className="text-gray-600 hover:text-white">
                {testimonial.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-16 bg-gray-900 text-white text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Ready to Transform Your Business?
        </h2>
        <p className="text-base sm:text-lg mb-6 sm:mb-8">
          Contact SoftCreatix today to find out how we can help you turn your
          vision into reality.
        </p>
        <a
          href="/contact"
          className="px-6 sm:px-8 py-3 bg-white text-get-started font-bold rounded-full hover:bg-gray-200 transition duration-300"
        >
          Get in Touch
        </a>
      </section>
    </div>
  );
}

export default AboutUsPage;
