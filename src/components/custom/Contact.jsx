import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen w-full flex items-center justify-center bg-[#f3f4f6] px-6 py-20"
    >
      <div className="max-w-4xl w-full">

        <div className="mb-14 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Send me a message!
          </h1>

          <h3 className="text-lg md:text-xl text-gray-600">
            Got suggestions or just want to say hello?{" "}
            <span className="text-slate-700 font-medium">
              Go ahead 👋
            </span>
          </h3>
        </div>

        <div className="bg-white shadow-lg rounded-3xl p-8 md:p-12 border border-gray-200">

          <form className="space-y-8">

            <div className="flex flex-col md:flex-row gap-6">

              <div className="flex flex-col w-full">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-slate-500 transition"
                />
              </div>

              <div className="flex flex-col w-full">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-slate-500 transition"
                />
              </div>

            </div>

            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="text-sm font-medium text-gray-700 mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Type your message… I promise I read everything 👀"
                className="px-4 py-3 rounded-2xl border border-gray-300 bg-gray-50 resize-none focus:outline-none focus:ring-2 focus:ring-slate-500 transition"
              ></textarea>
            </div>

            {/* Button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="px-8 py-3 bg-slate-700 text-white rounded-full font-medium hover:bg-slate-800 transition duration-300"
              >
                Shoot ➡️
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
