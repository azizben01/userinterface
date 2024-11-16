import { FaHandsHelping, FaRocket, FaUsers } from "react-icons/fa";
import { useTranslations } from "next-intl";

function AboutUsPage() {
  const t = useTranslations("about");
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
          <div>
            <p className="py-[8px]">{t("list.l1")}</p>
            <p className="py-[8px]">{t("list.l2")}</p>
            <p className="py-[8px]">{t("list.l3")}</p>
            <p className="py-[8px]">{t("list.l4")}</p>
            <p className="py-[8px]">{t("list.l5")}</p>
          </div>
          <FaHandsHelping className="text-2xl md:text-4xl sm:text-5xl mx-auto mt-4 sm:mt-6" />
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center max-w-4xl mx-auto">
          <div className="p-3 md:p-6 bg-white rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-xl hover:bg-gray-800 hover:text-white">
            <p className="text-sm md:text-lg font-italic">
              {t("testimonial.first")}
            </p>
            <p className="text-md font-bold mt-4">
              {t("testimonial.firstopinion")}
            </p>
          </div>

          <div className="p-3 md:p-6 bg-white rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-xl hover:bg-gray-800 hover:text-white">
            <p className="text-sm md:text-lg font-italic">
              {t("testimonial.second")}{" "}
            </p>
            <p className="text-md font-bold mt-4">
              {t("testimonial.secondopinion")}
            </p>
          </div>
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
