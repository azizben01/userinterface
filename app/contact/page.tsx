function ContactPage() {
  return (
    <div className="container mx-auto py-16 mt-24">
      <h1 className="text-4xl font-bold text-center mb-5">Contact Us</h1>
      <h6 className="px-5 text-lg mb-16">
        For any information or assistance you may need on Kigali Independent
        University ULK, please contact us at the addresses below.
        <br /> We ensure you to give a very prompt feedback.
      </h6>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4">Our Contact Information</h2>
          <p className="text-gray-700 mb-2">
            <span className="text-lg font-bold">Address:</span> KN 4 Av
            22,KIGALI - RWANDA
          </p>
          <p className="text-gray-700 mb-2">
            <span className="text-lg font-bold">Phone:</span> +250 798 812 499
          </p>
          <p className="text-gray-700 mb-2">
            <span className="text-lg font-bold">Email:</span>
            contact@generalconsultinggroups.com
          </p>
          <p className="text-gray-700 mb-2">
            <span className="text-lg font-bold">Whatsapp:</span> +254 111 827
            802 & +34 602 39 49 89
          </p>
        </div>
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row md:space-x-4 ">
              <input
                type="text"
                className="p-2 mb-4 rounded-xl input w-full md:w-1/2 border-2"
                placeholder="Name"
                required
              />
              <input
                type="email"
                className="p-2 mb-4 rounded-xl input w-full md:w-1/2 border-2"
                placeholder="Email"
                required
              />
            </div>
            <textarea
              className="p-4 input w-full h-40 border-2 rounded-xl"
              placeholder="Message"
              required
            ></textarea>
            <div className="flex justify-center">
              <button className="bg-gray-900 text-white px-4 py-2 rounded-3xl hover:from-green-600 hover:to-teal-600 hover:shadow-lg transform transition-transform duration-300 hover:scale-105 w-3/4 mx-auto">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
