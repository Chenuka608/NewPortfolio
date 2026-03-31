"use client";

import Navbar from "@/components/Navbar";
import { useScrollAnimation } from "@/components/useScrollAnimation";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiAmazon,
  SiFirebase,
  SiVercel,
  SiCss3,
  SiMongodb,
  SiGithub,
} from "react-icons/si";
import { MdDesignServices, MdSpeed, MdSearch, MdSecurity, MdSmartToy, MdBuild, MdCode, MdArrowRight, MdWork, MdSchool, MdStars } from "react-icons/md";
import { BiSolidRightArrow } from "react-icons/bi";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const heroSection = useScrollAnimation();
  const aboutSection = useScrollAnimation();
  const projectsSection = useScrollAnimation();
  const skillsSection = useScrollAnimation();
  const contactSection = useScrollAnimation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const projects = [
    {
      title: "GameStop",
      description:
        "A comprehensive Spring Boot project for game inventory management and e-commerce. Built with robust backend architecture, RESTful APIs, and Spring Security for admin and user privilege management.",
      tech: ["Spring Boot", "Java", "Spring Security", "Backend"],
      link: "https://github.com/Chenuka608/GameStop",
      image: "🎮",
    },
    {
      title: "ShieldComms-FYP",
      description:
        "Final Year Project - A Multi-Channel Phishing Detection Platform that identifies phishing attempts across Discord, Telegram, and Email simultaneously. Uses Machine Learning with ANNs and TF-IDF Vectorization to classify messages as Legitimate, Phishing, or Suspicious. Leverages Keras ANN model for fast, accurate detection.",
      tech: ["Machine Learning", "Python", "TF-IDF", "Keras ANN"],
      link: "https://github.com/Chenuka608/ShieldComms-FYP",
      image: "🛡️",
    },
    {
      title: "Internship Prep App - SDGP",
      description:
        "Senior Design Group Project - An intelligent internship preparation application helping students with interview prep, resume building, and job matching.",
      tech: ["Full Stack", "React", "Node.js", "AI Integration"],
      link: "https://github.com/Chenuka608/sdgpprojectv2",
      image: "💼",
    },
    {
      title: "BYD",
      description:
        "A modern landing page template built with Next.js and Vite. A sleek, responsive design project created in free time showcasing web design and frontend development skills.",
      tech: ["Next.js", "Vite", "React", "Frontend Design"],
      link: "https://github.com/Chenuka608/BYD",
      image: "⚡",
    },
  ];

  const skills = [
    {
      category: "Web Development",
      icon: SiReact,
      color: "#61DAFB",
      items: [
        { name: "React.js", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
        { name: "HTML5", icon: SiHtml5, color: "#E34C26" },
        { name: "CSS3", icon: SiCss3, color: "#1572B6" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      ],
    },
    {
      category: "Programming",
      icon: SiPython,
      color: "#3776AB",
      items: [
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "Java", icon: MdCode, color: "#007396" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "JavaScript", icon: SiReact, color: "#F7DF1E" },
      ],
    },
    {
      category: "Backend & Frameworks",
      icon: SiNodedotjs,
      color: "#68A063",
      items: [
        { name: "Node.js", icon: SiNodedotjs, color: "#68A063" },
        { name: "Express.js", icon: SiExpress, color: "#000000" },
        { name: "REST APIs", icon: SiNodedotjs, color: "#68A063" },
        { name: "Authentication", icon: MdBuild, color: "#FF9800" },
      ],
    },
    {
      category: "Databases",
      icon: SiPostgresql,
      color: "#336791",
      items: [
        { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
        { name: "MongoDB", icon: SiMongodb, color: "#13AA52" },
        { name: "SQL", icon: SiPostgresql, color: "#336791" },
        { name: "Data Modeling", icon: SiPostgresql, color: "#336791" },
      ],
    },
    {
      category: "DevOps & Tools",
      icon: SiDocker,
      color: "#2496ED",
      items: [
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "Git", icon: SiGit, color: "#F1502F" },
        { name: "AWS", icon: SiAmazon, color: "#FF9900" },
        { name: "Vercel", icon: SiVercel, color: "#000000" },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      ],
    },
    {
      category: "Cybersecurity",
      icon: MdSecurity,
      color: "#D32F2F",
      items: [
        { name: "Threat Analysis", icon: MdSecurity, color: "#D32F2F" },
        { name: "Encryption", icon: MdSecurity, color: "#D32F2F" },
        { name: "Authentication", icon: MdSecurity, color: "#D32F2F" },
        { name: "Security Best Practices", icon: MdSecurity, color: "#D32F2F" },
      ],
    },
    {
      category: "Design & Performance",
      icon: MdDesignServices,
      color: "#FF6B6B",
      items: [
        { name: "UI/UX Design", icon: MdDesignServices, color: "#FF6B6B" },
        { name: "Responsive Design", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Web Performance", icon: MdSpeed, color: "#4CAF50" },
        { name: "SEO", icon: MdSearch, color: "#1F88E8" },
      ],
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section - POSH & DRAMATIC */}
      <section
        id="home"
        ref={heroSection.ref}
        className="min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 w-full relative overflow-hidden"
        style={{
          backgroundImage: isMobile ? "none" : "url('/assets/cs.png')",
          backgroundSize: "65%",
          backgroundPosition: "calc(100% + 60px) center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-primary/95 via-primary/80 to-primary/40" />
        
        {/* Background Gradient Orbs */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="relative z-10 max-w-7xl w-full mx-auto">
          <div className="max-w-2xl">
            {/* Left Content - Text */}
            <div
              className={`transition-all duration-1000 ${heroSection.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <div className="mb-6">
                <p className="hidden md:block text-sm sm:text-base font-600 text-accent-1 mb-3 uppercase tracking-widest">Welcome to my portfolio</p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-900 leading-tight text-primary mb-4">
                  I&apos;m <span className="text-gradient-1">Chenuka</span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-purple-600 to-pink-600">Sarathchandra</span>
                </h1>
              </div>

              <div className="space-y-4 mb-8">
                <h2 className="text-lg sm:text-2xl font-700 text-secondary">
                  Full Stack Developer & <br /> Cybersecurity Enthusiast
                </h2>
                <p className="text-sm sm:text-base text-secondary leading-relaxed max-w-lg">
                  Crafting secure, modern web applications with a focus on elegant design and bulletproof security. Currently innovating at Peoples Leasing and Finance PLC.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={() =>
                    document.getElementById("projects")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className="px-8 py-3.5 gradient-accent-1 hover:shadow-2xl hover:shadow-blue-500/50 text-white font-700 rounded-xl transition-all duration-300 hover:-translate-y-1 text-base group flex items-center justify-center gap-2"
                >
                  View My Work
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                <button
                  onClick={() =>
                    document.getElementById("contact")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className="px-8 py-3.5 border-2 border-accent-1 text-accent-1 hover:bg-linear-to-r hover:from-blue-600 hover:to-pink-500 hover:border-transparent hover:text-white font-700 rounded-xl transition-all duration-300 text-base group cursor-pointer"
                >
                  Let&apos;s Connect
                </button>
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-8 pb-24 md:pb-0 border-t border-color">
                <div>
                  <p className="text-3xl font-900 text-accent-1">20+</p>
                  <p className="text-secondary text-sm">Projects Completed</p>
                </div>
                <div>
                  <p className="text-3xl font-900 text-accent-1">6+</p>
                  <p className="text-secondary text-sm">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-900 text-accent-1">∞</p>
                  <p className="text-secondary text-sm">Skills Always Expanding</p>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2">
            <button
              onClick={() =>
                document.getElementById("about")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="flex justify-center animate-bounce hover:scale-110 transition-transform duration-300 cursor-pointer"
              aria-label="Scroll to next section"
            >
              <svg className="w-6 h-6 text-secondary hover:text-accent-1 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* About Section - With Containers */}
      <section
        id="about"
        ref={aboutSection.ref}
        className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/50 w-full"
      >
        <div className="max-w-6xl mx-auto w-full">
          <h2 className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-900 mb-16 sm:mb-20 text-center transition-all duration-1000 px-2 ${
            aboutSection.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}>
            About Me
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            {/* Left Content - Story Container */}
            <div
              className={`transition-all duration-1000 delay-200 ${
                aboutSection.isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="space-y-4">
                {/* Story Card 1 */}
                <div className="relative bg-primary/50 backdrop-blur-lg border border-color rounded-2xl p-6 sm:p-8 hover:border-accent-1 transition-all duration-300 group hover:shadow-lg hover:shadow-blue-500/15 hover:-translate-y-1 cursor-default">
                  <div className="absolute inset-0 bg-linear-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  <div className="relative z-10">
                    <h3 className="text-lg sm:text-xl font-800 text-accent-1 mb-3 group-hover:text-blue-400 transition-colors duration-300">Who I Am</h3>
                    <p className="text-sm sm:text-base text-secondary leading-relaxed font-300">
                      I&apos;m Chenuka Sarathchandra, a passionate full-stack developer with a laser focus on cybersecurity. I build secure, scalable web applications that don&apos;t just work—they excel.
                    </p>
                  </div>
                </div>

                {/* Story Card 2 */}
                <div className="relative bg-primary/50 backdrop-blur-lg border border-color rounded-2xl p-6 sm:p-8 hover:border-accent-1 transition-all duration-300 group hover:shadow-lg hover:shadow-purple-500/15 hover:-translate-y-1 cursor-default">
                  <div className="absolute inset-0 bg-linear-to-br from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  <div className="relative z-10">
                    <h3 className="text-lg sm:text-xl font-800 text-accent-1 mb-3 group-hover:text-purple-400 transition-colors duration-300">My Expertise</h3>
                    <p className="text-sm sm:text-base text-secondary leading-relaxed font-300">
                      My toolkit spans modern JavaScript frameworks, robust backend systems, and cybersecurity fundamentals. I&apos;m obsessed with creating applications that are both beautiful and bulletproof.
                    </p>
                  </div>
                </div>

                {/* Story Card 3 */}
                <div className="relative bg-primary/50 backdrop-blur-lg border border-color rounded-2xl p-6 sm:p-8 hover:border-accent-1 transition-all duration-300 group hover:shadow-lg hover:shadow-pink-500/15 hover:-translate-y-1 cursor-default">
                  <div className="absolute inset-0 bg-linear-to-br from-pink-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  <div className="relative z-10">
                    <h3 className="text-lg sm:text-xl font-800 text-accent-1 mb-3 group-hover:text-pink-400 transition-colors duration-300">Interests & Activities</h3>
                    <p className="text-sm sm:text-base text-secondary leading-relaxed font-300">
                      I&apos;m currently pursuing ISO:27001 2022 Certification. I sing Tenor in Soundarie David Rodrigo&apos;s Soul Sounds Academy Choir (Intermediate level), and stay active through swimming and cycling. I&apos;m passionate about driving cars, building websites, and optimizing SEO.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Experience Containers */}
            <div
              className={`transition-all duration-1000 delay-400 ${
                aboutSection.isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="space-y-6">
                {/* Current Role Container */}
                <div className="relative bg-linear-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-lg border border-accent-1/30 rounded-2xl p-8 hover:border-accent-1/60 transition-all duration-300 group hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 cursor-default overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent-1/20 border border-accent-1/50 group-hover:scale-110 transition-transform duration-300">
                      <MdWork size={28} style={{ color: '#61DAFB' }} />
                    </div>
                    <h3 className="text-2xl sm:text-2xl font-800 text-primary mb-2 group-hover:text-blue-400 transition-colors duration-300">Current Role</h3>
                    <p className="text-base sm:text-lg font-700 text-accent-1 mb-1">Information Security Intern</p>
                    <p className="text-sm sm:text-base text-secondary font-600 mb-3">Peoples Leasing and Finance PLC</p>
                    <p className="text-xs sm:text-sm text-secondary italic">Mastering threat analysis and enterprise security best practices</p>
                  </div>
                </div>

                {/* Education Container */}
                <div className="relative bg-linear-to-br from-green-600/20 to-teal-600/20 backdrop-blur-lg border border-accent-1/30 rounded-2xl p-8 hover:border-accent-1/60 transition-all duration-300 group hover:shadow-lg hover:shadow-green-500/20 hover:-translate-y-1 cursor-default overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent-1/20 border border-accent-1/50 group-hover:scale-110 transition-transform duration-300">
                      <MdSchool size={28} style={{ color: '#4CAF50' }} />
                    </div>
                    <h3 className="text-2xl sm:text-2xl font-800 text-primary mb-2 group-hover:text-green-400 transition-colors duration-300">Education</h3>
                    <p className="text-base sm:text-lg font-700 text-accent-1 mb-1">BEng(Hons) Software Engineering</p>
                    <p className="text-sm sm:text-base text-secondary font-600 mb-3">University of Westminster</p>
                    <p className="text-xs sm:text-sm text-secondary font-600 bg-accent-1/10 px-3 py-1 rounded-lg inline-block group-hover:bg-accent-1/20 transition-colors duration-300">Second Class Honours</p>
                  </div>
                </div>

                {/* Key Areas Container */}
                <div className="relative bg-linear-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-lg border border-accent-1/30 rounded-2xl p-8 hover:border-accent-1/60 transition-all duration-300 group hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1 cursor-default overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent-1/20 border border-accent-1/50 group-hover:scale-110 transition-transform duration-300">
                      <MdStars size={28} style={{ color: '#FF6B6B' }} />
                    </div>
                    <h3 className="text-2xl font-800 text-primary mb-4 group-hover:text-purple-400 transition-colors duration-300">Key Specializations</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 group/item">
                        <div className="w-2 h-2 rounded-full bg-accent-1 group-hover/item:scale-150 transition-transform duration-300" />
                        <span className="text-secondary font-600 group-hover/item:text-accent-1 transition-colors duration-300">Cybersecurity Fundamentals</span>
                      </li>
                      <li className="flex items-center gap-3 group/item">
                        <div className="w-2 h-2 rounded-full bg-accent-1 group-hover/item:scale-150 transition-transform duration-300" />
                        <span className="text-secondary font-600 group-hover/item:text-accent-1 transition-colors duration-300">Full Stack Web Development</span>
                      </li>
                      <li className="flex items-center gap-3 group/item">
                        <div className="w-2 h-2 rounded-full bg-accent-1 group-hover/item:scale-150 transition-transform duration-300" />
                        <span className="text-secondary font-600 group-hover/item:text-accent-1 transition-colors duration-300">Secure Architecture Design</span>
                      </li>
                      <li className="flex items-center gap-3 group/item">
                        <div className="w-2 h-2 rounded-full bg-accent-1 group-hover/item:scale-150 transition-transform duration-300" />
                        <span className="text-secondary font-600 group-hover/item:text-accent-1 transition-colors duration-300">Threat Analysis & Mitigation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        ref={projectsSection.ref}
        className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 w-full"
      >
        <div className="max-w-6xl mx-auto w-full">
          <h2 className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-900 mb-12 sm:mb-16 text-center transition-all duration-1000 px-2 ${
            projectsSection.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}>
            Featured Work
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative transition-all duration-1000 ${
                  projectsSection.isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${projectsSection.isVisible ? index * 100 : 0}ms`,
                }}
              >
                <div className="relative h-full bg-primary rounded-2xl border border-color overflow-hidden hover:border-accent-1 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 group cursor-pointer">
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-linear-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Project Image/Icon with Enhanced Background */}
                  <div className="relative h-32 bg-linear-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-6xl overflow-hidden group-hover:from-blue-500/40 group-hover:to-purple-500/40 transition-all duration-300">
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rotate-45" />
                    <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">{project.image}</span>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 sm:p-8 relative z-10">
                    <h3 className="text-2xl sm:text-3xl font-800 mb-3 text-primary group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-secondary mb-4 sm:mb-6 leading-relaxed font-300">
                      {project.description}
                    </p>

                    {/* Tech Stack with Enhanced Hover */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1.5 text-xs font-600 bg-secondary/50 rounded-full border border-color/50 text-secondary hover:border-accent-1 hover:text-accent-1 hover:bg-accent-1/10 transition-all duration-300 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* View Project Link with Enhanced Hover */}
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-accent-1 font-700 hover:text-blue-400 group/link transition-colors duration-300"
                    >
                      View Project
                      <svg className="w-5 h-5 ml-2 group-hover/link:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        ref={skillsSection.ref}
        className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/50 w-full"
      >
        <div className="max-w-6xl mx-auto w-full">
          <h2 className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-900 mb-12 sm:mb-16 text-center transition-all duration-1000 px-2 ${
            skillsSection.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}>
            Skills & Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className={`group transition-all duration-1000 ${
                  skillsSection.isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${skillsSection.isVisible ? index * 100 : 0}ms`,
                }}
              >
                <div className="relative h-full bg-primary rounded-2xl p-8 border border-color hover:border-accent-1 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/10">
                  <div className="relative z-10">
                    {/* Category Header with Icon */}
                    <div className="mb-6 flex items-center gap-3">
                      <div className="transition-transform duration-300 group-hover:scale-110" style={{ color: skillGroup.color }}>
                        <skillGroup.icon size={40} />
                      </div>
                      <h3 className="text-lg font-800 text-primary group-hover:text-accent-1 transition-colors duration-300">
                        {skillGroup.category}
                      </h3>
                    </div>
                    
                    {/* Skills List as Badges */}
                    <div className="space-y-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="px-4 py-2 bg-secondary/30 hover:bg-accent-1/20 rounded-lg transition-all duration-300 cursor-pointer group-hover/item:text-accent-1"
                        >
                          <span className="text-sm font-600 text-secondary group-hover:text-accent-1 transition-colors duration-300">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        ref={contactSection.ref}
        className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 w-full"
      >
        <div className="max-w-3xl mx-auto text-center w-full">
          <div
            className={`relative z-10 transition-all duration-1000 px-2 ${
              contactSection.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-900 mb-4 sm:mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-secondary mb-8 sm:mb-12 font-300">
              Have an exciting project in mind? I&apos;d love to hear about it. 
              Let&apos;s connect and create something amazing together.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center">
              <Link
                href="mailto:chenuka478@gmail.com"
                className="px-8 sm:px-10 py-3 sm:py-4 bg-linear-to-r from-blue-600 to-blue-700 text-white font-700 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1 text-sm sm:text-base md:text-lg inline-block"
              >
                Send Me an Email
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary border-t border-color py-12 sm:py-16 px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
            {/* Logo & Branding */}
            <div className="flex flex-col items-start gap-4">
              <Image 
                src="/assets/logo.png" 
                alt="Logo" 
                width={150}
                height={40}
                className="object-contain"
              />
              <p className="text-secondary text-sm leading-relaxed">
                Building secure, modern web applications with a passion for elegant design and bulletproof security.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-800 text-primary mb-4">Quick Links</h4>
              <div className="space-y-2">
                {[
                  { label: "Home", id: "home" },
                  { label: "About", id: "about" },
                  { label: "Work", id: "projects" },
                  { label: "Skills", id: "skills" },
                  { label: "Contact", id: "contact" },
                ].map((link) => (
                  <button
                    key={link.id}
                    onClick={() => {
                      document.getElementById(link.id)?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                    className="block text-secondary hover:text-accent-1 transition-colors duration-300 text-sm font-600"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Get in Touch */}
            <div>
              <h4 className="font-800 text-primary mb-4">Get in Touch</h4>
              <div className="space-y-3">
                <a
                  href="mailto:chenuka478@gmail.com"
                  className="block text-secondary hover:text-accent-1 transition-colors duration-300 text-sm font-600"
                >
                  chenuka478@gmail.com
                </a>
                <div className="pt-2 border-t border-color">
                  <p className="text-xs text-secondary mb-3">Follow me</p>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/Chenuka608"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-secondary/20 hover:bg-accent-1/30 text-secondary hover:text-accent-1 transition-all duration-300 hover:scale-110 cursor-pointer"
                      title="GitHub"
                    >
                      <SiGithub size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-linear-to-r from-transparent via-accent-1 to-transparent opacity-30 mb-6" />

          {/* Bottom Section */}
          <div className="text-center text-tertiary font-500 text-xs sm:text-sm">
            <p>
              © 2026 Chenuka Sarathchandra. Built with Next.js, TypeScript & Tailwind CSS. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
