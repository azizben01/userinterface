import { FaHandsHelping, FaRocket, FaUsers } from "react-icons/fa";
import { useTranslations } from "next-intl";

function AboutUsPage() {
  const t = useTranslations("about");
  const values = t("values.list", { returnObjects: true });
  const team = t("team.list", { returnObjects: true });

  // Fallback if values is not an array
  const valuesArray = Array.isArray(values) ? values : [];
  return (
    <div className="container mt-32">
      <h1 className="text-2xl md:text-3xl sm:text-5xl font-extrabold text-center mb-6 sm:mb-10 text-gray-800">
        {t("title")}
      </h1>
      <p className="px-responsive-px md:px-custom-px text-center mb-8 sm:mb-12 text-gray-600 leading-relaxed">
        {t("description")}
      </p>
      {/* Vision and Values Section */}
      <section className=" px-responsive-px py-responsive-py md:px-custom-px flex flex-col lg:flex-row text-white space-y-6 lg:space-y-0 lg:space-x-10 ml-0 sm:ml-3 mb-12 sm:mb-16">
        <div className="lg:w-1/2 p-4 md-p-4 bg-gray-800 rounded-2xl shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            {" "}
            {t("vision.title")}
          </h2>
          <p className="text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
            {t("vision.description")}
          </p>
          <FaRocket className="text-2xl md:text-4xl sm:text-5xl mx-auto" />
        </div>
        <div className="lg:w-1/2 p-4 md-p-4 bg-gray-800 text-white rounded-2xl shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            {t("values.title")}
          </h2>
          <p className="text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
            {t("values.description")}
          </p>
          <ul>
            {valuesArray.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
          <FaHandsHelping className="text-2xl md:text-4xl sm:text-5xl mx-auto mt-4 sm:mt-6" />
        </div>
      </section>

      {/* Our Team Section */}
      <section className=" px-responsive-px py-responsive-py md:px-custom-px">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-6 sm:mb-10 text-gray-700">
          {t("team.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 text-white">
          {[
            {
              name: "Patrick",
              title: "Founder & CEO",
              desc: "With years of experience in software development, Patrick leads our team with vision and integrity.",
            },
            {
              name: "Ben Obama",
              title: "backend Developer",
              desc: "Ben Obama oversees all technical aspects, ensuring that we always stay at the forefront of innovation.",
            },
            // {
            //   name: "Loic",
            //   title: "Lead developer",
            //   desc: "Loic brings technical expertise and creativity to every project.",
            //   contact: "+250 785 703 429",
            // },
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
            {
              name: "Anicet",
              title: "Frontend developer",
              desc: "Anicet brings technical expertise and creativity to every project.",
            },
            {
              name: "Gabriel",
              title: "Frontend developer",
              desc: "Gabriel brings technical expertise and creativity to every project.",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="p-2 md:p-4 bg-gray-800 shadow-md rounded-xl"
            >
              <h3 className="text-lg md:text-2xl font-bold mb-2">
                {member.name}
              </h3>
              <p className="text-lg mb-2">{member.title}</p>
              <p className="text-white">{member.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* History Section */}
      <section className="py-custom-py bg-gray-50 md:px-custom-px">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-6 text-gray-700">
          {t("journey.title")}
        </h2>
        <div className="px-responsive-px mx-auto text-center text-gray-600 leading-relaxed">
          <p className="mb-6 sm:mb-8">{t("journey.description")}</p>
          <FaUsers className="text-gray-900 text-5xl sm:text-6xl mx-auto" />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-responsive-py px-responsive-px bg-white ">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
          {t("testimonial.title")}
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
      <section className="py-responsive-py px-responsive-px bg-gray-900 text-white text-center">
        <h2 className="text-lg md:text-2xl font-bold mb-4 max-w-[90%] mx-auto">
          {t("cta.title")}
        </h2>
        <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-[90%] mx-auto">
          {t("cta.contact")}
        </p>
        <a
          href="/contact"
          className="px-4 md:px-8 py-3 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-200 transition duration-300"
        >
          {t("cta.touch")}
        </a>
      </section>
    </div>
  );
}
export default AboutUsPage;
