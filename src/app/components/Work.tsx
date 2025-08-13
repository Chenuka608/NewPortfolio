"use client";

export default function MoreAboutMe() {
  const services = [
    "Full Stack Development",
    "Spring Boot Backend",
    "Machine Learning Integration",
    "REST & GraphQL APIs",
    "React & Next.js Frontend",
    "Cloud Deployment & DevOps",
    "Database Design & Optimization",
    "Postman API Testing",
  ];

  return (
    <section id="about"className="max-w-4xl mx-auto px-6 py-12 bg-white text-gray-900">
      {/* Heading */}
      <h2 className="text-4xl font-extrabold mb-4">What I Offer</h2>

      {/* Commitment text */}
      <p className="text-2xl max-w-xl text-gray-700 mb-8">
        I’m committed to delivering perfected services that push boundaries and bring your vision to life.
      </p>

      {/* Description */}
      <p className="text-2xl max-w-xl text-gray-700 mb-10">
        Committed to finding innovative and unconventional solutions. Pushing boundaries to exceed client goals.
      </p>

      {/* Services pills */}
      <div className="flex flex-wrap gap-4 mb-12">
        {services.map((service) => (
          <span
            key={service}
            className="px-5 py-2 rounded-full border border-gray-300 text-gray-800 font-semibold cursor-default hover:bg-gray-100 transition"
          >
            {service}
          </span>
        ))}
      </div>

      {/* More About Me Section */}
      <div className="mt-16">
        <h3 className="text-3xl font-semibold mb-6">More About Me</h3>

        <ul className="space-y-4 text-gray-700 text-lg mb-6">
          <li>
            <strong>Phone:</strong> +94 72 3856210
          </li>
          <li>
            <strong>Email:</strong> chenuka478@gmail.com
          </li>
          <li>
            <strong>Other Qualifications:</strong> Wendy Whatmore Academy – Spoken English, Speech & Drama
          </li>
          <li>
            <strong>Extracurricular Activities:</strong> Swimming at St Thomas's College, Mt Lavinia; IIT Chess; Esports – Valorant Player; Soul Sounds Academy Choir Member (Directed by Soundarie David Rodrigo)
          </li>
        </ul>

        {/* Choir Image */}
        <div className="mt-6">
          <img
            src="/images/choir.png"
            alt="Soul Sounds Academy Choir"
            className="w-full max-w-3xl mx-auto rounded-md shadow-lg object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
