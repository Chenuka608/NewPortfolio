"use client";

export default function Contact() {
  return (
    <section id="contact" className=" max-w-4xl mx-auto px-6 py-12  ">
      <h2 className="text-4xl font-extrabold mb-8 text-center">Contact Me</h2>

      <p className="text-lg  text-center mb-12">
        Have a project in mind or just want to say hi? Fill out the form below and I’ll get back to you as soon as possible.
      </p>

      <form
        action="https://getform.io/f/bxozowya"
        method="POST"
        className="space-y-6"
      >
        {/* Name */}
        <div>
          <label htmlFor="name" className="block  font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your Name"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your Email"
          />
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block  font-medium mb-2">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Project / Message Subject"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block  font-medium mb-2">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={6}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your Message"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-10 py-3 cursor-pointer text-white bg-black font-semibold rounded-md shadow-lg hover:bg-gray-800 transform hover:scale-105 transition-all duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}
