"use client";

const projects = [
  {
    title: "Student Progression Outcome",
    description: "A Python project to calculate students' progression outcomes based on their results and save them to a file.",
    image: "/images/python.png",
    link: "https://github.com/Chenuka608/SD1-CW",
  },
  {
    title: "Sports Website",
    description: "A group project where I developed the Sitemap page with SVG and a thumbnail image navigation system(HTML5,CSS & JavaScript).",
    image: "/images/sports.png",
    link: "https://github.com/aashif-m/Athletica",
  },
  {
    title: "Restaurant Queue Management System",
    description: "A Java and JavaFX app for queue management, burger stock tracking, and income analysis for each queue.",
    image: "/images/queue.png",
    link: "https://github.com/Chenuka608/Java-1st-Year",
  },
  {
    title: "Internship Prep Web app",
    description: "A ReactJS and Tailwind CSS web app offering interview demos and coding questionnaires prepared from RAG Models with OpenAI Integration for live responses to applicant doubts for internship prep. Software Development Group Project (SDGP - 70 Marks First Class Grading | Supervisor Mr Banuka Athuruliya - Visiting Lecturer at IIT",
    image: "/images/interview.png",
    link: "https://github.com/Chenuka608/sdgpprojectv2",
  },
  {
    title: "Online Shopping System",
    description: "A Java Swing-based system with product categories, a shopping cart, and data persistence.",
    image: "/images/shopping.png",
    link: "https://github.com/Chenuka608/New-OOP-Coursework",
  },
  {
    title: "Gamestop Springboot CRUD app",
    description: "The Gamestop Spring Boot CRUD app is built with a clean 5-layer architecture—controller, service, repository, model, and security layers—ensuring maintainability and clear separation of concerns. It features JWT authentication for secure access, backend pagination and search to optimize data fetching, and smart image handling to deliver only necessary images for faster loading. Additionally, it uses soft deletes to preserve data integrity while keeping the app responsive and scalable.",
    image: "/images/crud.png",
    link: "https://github.com/Chenuka608/GameStop",
  },
  {
    title: "BYD Landing Page Website",
    description: "Landing page website built for BYD with responsive video and info.",
    image: "/images/byd.png",
    link: "https://byd-rust.vercel.app/",
  },
  {
    title: "Minimalistic Portfolio Website",
    description: "Clean and minimal portfolio showcasing projects and skills.",
    image: "/images/portfolio.png",
    link: "#",
  },
  {
    title: "ShieldComms Cybersecurity Platform (FYP)",
    description: "Final Year Project focused on Multichannel Phishing Detection to boost cybersecurity. Leveraged TF-IDF vectorization and Artificial Neural Networks (ANNs) to detect phishing attacks across Discord, Telegram, and email channels. The system provides real-time, unbiased phishing alerts, earning a Second Upper Class (61%) grade under the supervision of Ms. Dileeka Alwis.",
    image: "/images/cyber.png",
    link: "https://github.com/Chenuka608/ShieldComms-FYP",
  },
];

export default function ProjectGallery() {
  return (
    <section id="works"className="max-w-6xl mx-auto px-6 py-12 bg-white text-gray-900">
      <h2 className="text-4xl font-extrabold mb-12 text-center">My Projects</h2>

      {projects.map((project, idx) => {
        const isEven = idx % 2 === 0;
        return (
          <div
            key={project.title}
            className={`flex flex-col md:flex-row items-center mb-12 ${
              isEven ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Project Image */}
            <div className="md:w-1/2 w-full rounded-lg overflow-hidden shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>

            {/* Project Details */}
            <div className="md:w-1/2 w-full md:px-12 mt-6 md:mt-0">
              <h3 className="text-3xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-700 mb-6">{project.description}</p>
              <a
                href={project.link}
                className="inline-block text-blue-600 font-medium hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        );
      })}
    </section>
  );
}
