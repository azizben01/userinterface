import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function HomePage({
  params,
}: {
  params: { locale: "en" | "fr" | "ger" | "span" };
}) {
  const { locale } = params;
  const translate = useTranslations("Home");

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
            {translate("title")}
          </h1>
          <p className="text-center md:text-lg text-white mb-6">
            {translate("subtitle")}
          </p>
          <p className="text-sm md:text-lg text-white font-bold mb-2">
            {translate("subtitle1")}
          </p>
          <p className="text-sm sm:text-base md:text-lg text-white font-bold mb-10">
            {translate("subtitle2")}
          </p>

          <div className="space-x-4">
            <Link
              href={`/${locale}/services`}
              className="slide-up px-4 py-2 sm:px-6 sm:py-3 bg-custom-gray1 text-white rounded-3xl hover:bg-custom-gray2 transition-transform duration-300 transform hover:scale-105"
            >
              {translate("button")}
            </Link>
          </div>
        </div>
      </main>

      {/* Services Overview */}
      <section className="px-responsive-px md:px-custom-px py-responsive-py mt-4 md:mt-8bg-white">
        <h2 className="text-xl md:text-3xl font-bold text-center text-gray-500 mb-6">
          {translate("services.title")}
        </h2>
        <h6 className="text-lg font-bold text-center text-gray-500 mb-6">
          {translate("services.subtitle")}
        </h6>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          <div className="p-3 md:p-6 bg-gray-50 rounded-3xl shadow-md transform transiton-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-900 hover:text-white">
            <h3 className="text-lg md:text-xl font-semibold">
              {translate("services.website")}
            </h3>
            <p>{translate("services.websiteDescription")}</p>
          </div>
          <div className="p-3 md:p-6 bg-gray-50 rounded-3xl shadow-md transform transiton-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-900 hover:text-white">
            <h3 className="text-lg md:text-xl font-semibold">
              {translate("services.design")}
            </h3>
            <p>{translate("services.designDescription")}</p>
          </div>
          <div className="p-3 md:p-6 bg-gray-50 rounded-3xl shadow-md transform transiton-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-900 hover:text-white">
            <h3 className="text-lg md:text-xl font-semibold">
              {translate("services.commerce")}
            </h3>
            <p>{translate("services.commerceDescription")}</p>
          </div>
          <div className="p-3 md:p-6 bg-gray-50 rounded-3xl shadow-md transform transiton-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-900 hover:text-white">
            <h3 className="text-lg md:text-xl font-semibold">
              {translate("services.searchEngine")}
            </h3>
            <p>{translate("services.searchEngineDescription")}</p>
          </div>
          <div className="p-3 md:p-6 bg-gray-50 rounded-3xl shadow-md transform transiton-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-900 hover:text-white">
            <h3 className="text-lg md:text-xl font-semibold">
              {translate("services.maintenance")}
            </h3>
            <p>{translate("services.maintenanceDescription")}</p>
          </div>
          <div className="p-3 md:p-6 bg-gray-50 rounded-3xl shadow-md transform transiton-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-900 hover:text-white">
            <h3 className="text-lg md:text-xl font-semibold">
              {translate("services.Host")}
            </h3>
            <p>{translate("services.HostDescription")}</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-3xl shadow-md transform transiton-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-900 hover:text-white">
            <h3 className="text-lg md:text-xl font-semibold">
              {translate("services.app")}
            </h3>
            <p>{translate("services.appDescription")}</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-3xl shadow-md transform transiton-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-900 hover:text-white">
            <h3 className="text-xl font-semibold">
              {translate("services.integration")}
            </h3>
            <p>{translate("services.integrationDescription")}</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-3xl shadow-md transform transiton-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-900 hover:text-white">
            <h3 className="text-xl font-semibold">
              {translate("services.mobile")}
            </h3>
            <p>{translate("services.mobileDescription")}</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-3xl shadow-md transform transiton-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-900 hover:text-white">
            <h3 className="text-xl font-semibold">
              {translate("services.consulting")}
            </h3>
            <p>{translate("services.consultingDescription")}</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-3xl shadow-md transform transiton-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-900 hover:text-white">
            <h3 className="text-xl font-semibold">
              {translate("services.AI")}
            </h3>
            <p>{translate("services.AIdescription")}</p>
          </div>
        </div>
        <div className="text-center items-center mt-8">
          <Link
            href={`${locale}/services`}
            className="px-6 py-3 bg-gray-600 text-white rounded-2xl hover:bg-gray-800"
          >
            {translate("services.requestbutton")}
          </Link>
        </div>
      </section>
      {/* Why choose us */}
      <section className="px-responsive-px py-reponsive-py md: px-custom-px bg-gray-50 mt-4 md:mt-8">
        <h2 className="text-xl md:text-3xl font-bold text-gray-500 text-center mb-6">
          {translate("chooseus.title")}
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
            <h3 className="text-xl font-semibold">
              {translate("chooseus.one")}
            </h3>
            <p>{translate("chooseus.onedescription")}</p>
          </div>
          <div className="text-center">
            <Image
              src="/images/background4.png"
              alt="Innovation"
              width={100}
              height={100}
              className="mx-auto h-16 mb-4"
            />
            <h3 className="text-xl font-semibold">
              {translate("chooseus.two")}
            </h3>
            <p>{translate("chooseus.twodescription")}</p>
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
            <p>{translate("chooseus.threedescription")}</p>
          </div>
        </div>
      </section>

      {/* Technology and tools */}
      <section className="px-responsive-px py-reponsive-py bg-white mt-4 md:mt-8 mb-4">
        <h2 className="text-xl md:text-3xl font-bold text-gray-500 text-center mb-6">
          {translate("tech.title")}
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
      <section className="md: px-custom-px px-responsive-px py-responsive-py bg-gray-50 mt-4 md:mt-8">
        <h2 className="text-xl md:text-3xl font-bold text-gray-500 text-center mb-6">
          {translate("testimonial.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-3 md:p-6 bg-white rounded-lg shadow-lg">
            <p className="text-sm md:text-lg font-italic">
              {translate("testimonial.client1Description")}
            </p>
            <p className="text-md font-bold mt-4">
              {translate("testimonial.client1")}
            </p>
          </div>
          <div className="p-3 md:p-6 bg-white rounded-lg shadow-lg">
            <p className="text-sm md:text-lg font-italic">
              {translate("testimonial.client2Description")}
            </p>
            <p className="text-md font-bold mt-4">
              {translate("testimonial.client2")}
            </p>
          </div>
          <div className="p-3 md:p-6 bg-white rounded-lg shadow-lg">
            <p className="text-sm md:text-lg font-italic">
              {translate("testimonial.client3Description")}
            </p>
            <p className="text-md font-bold mt-4">
              {translate("testimonial.client3")}
            </p>
          </div>
        </div>
      </section>
      {/* Portfolio */}
      <section className="md: px-custom-px px-responsive-px py-responsive-py bg-white mt-8">
        <h2 className="text-xl md:text-3xl font-bold text-gray-500 text-center mb-6">
          {translate("portfolio.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-3 md:p-6 bg-gray-50 rounded-3xl shadow-md hover:scale-105 transform transiton-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-900 hover:text-white">
            <h3 className="text-lg md:text-xl font-semibold">
              {translate("portfolio.project1")}
            </h3>
            <p>{translate("portfolio.project1Description")}</p>
          </div>
          <div className="p-3 md:p-6 bg-gray-50 rounded-3xl shadow-md hover:scale-105 transform transiton-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-900 hover:text-white">
            <h3 className="text-lg md:text-xl font-semibold">
              {translate("portfolio.project2")}
            </h3>
            <p>{translate("portfolio.project2Description")} </p>
          </div>
          <div className="p-3 md:p-6 bg-gray-50 rounded-3xl shadow-md hover:scale-105 transform transiton-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-900 hover:text-white">
            <h3 className="text-lg md:text-xl font-semibold">
              {translate("portfolio.project3")}
            </h3>
            <p>{translate("portfolio.project3Description")}</p>
          </div>
        </div>
      </section>
      {/* Team members */}
      <section className="px-reponsive-px py-reponsive-py bg-white mt-4 md:mt-8">
        <h2 className="text-xl md:text-3xl font-bold text-gray-500 text-center mb-6">
          {translate("meet.title")}
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
            <p>{translate("meet.ceo")}</p>
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
            <p>{translate("meet.fullstack")}</p>
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
            <p>{translate("meet.fullstack")}</p>
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
            <p>{translate("meet.front")}</p>
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
            <p>{translate("meet.front")}</p>
          </div>
          {/* <div className="text-center">
            <Image
              src="/images/questionmark.png"
              width={100}
              height={100}
              alt="Jane Smith"
              className="rounded-full mx-auto h-32 w-32 mb-4"
            />
            <h3 className="text-xl font-semibold">Loic </h3>
            <p>Lead Developer</p>
          </div> */}
          <div className="text-center">
            <Image
              src="/images/anicet.jpg"
              width={100}
              height={100}
              alt="Jane Smith"
              className="rounded-full mx-auto h-32 w-32 mb-4"
            />
            <h3 className="text-xl font-semibold">Anicet </h3>
            <p>{translate("meet.front")}</p>
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
            <p>{translate("meet.front")}</p>
          </div>
        </div>
      </section>

      {/* About us section */}
      <section className="md: px-custom-px px-responsive-px py-responsive-py bg-gray-50 mt-4 md:mt-8">
        <h2 className="text-3xl font-bold text-gray-500 text-center mb-6">
          {translate("homeabout.title")}
        </h2>
        <p className="text-lg text-center mb-6">
          {translate("homeabout.subtitle")}
        </p>
        <div className="text-center">
          <Link
            href={`/${locale}/about`}
            className="px-6 py-3 bg-gray-600 text-white rounded-2xl hover:bg-gray-800"
          >
            {translate("homeabout.button")}
          </Link>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-responsive-py px-responsive-px bg-gray-900 mt-4 md:mt-8 text-white text-center">
        <h2 className="text-lg md:text-3xl font-bold mb-4">
          {translate("homecall.title")}
        </h2>
        <p className="text-sm md:text-lg mb-6">
          {translate("homecall.subtitle")}
        </p>
        <Link
          href={`/${locale}/contact`}
          className="px-6 py-3 bg-white text-gray-900 rounded-2xl hover:bg-gray-100"
        >
          {translate("homecall.button")}
        </Link>
        <p className="mt-8 text-sm md:text-lg">
          <Link href={`${locale}/adminlogin`}>
            {translate("homecall.copyright")}
          </Link>
        </p>
        <p className="text-sm md:text-lg">{translate("homecall.developped")}</p>
      </section>
    </div>
  );
}
