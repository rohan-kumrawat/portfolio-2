"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import DeskIllustration from "@/components/DeskIllustration";

const featuredProjects = [
  {
    title: "Microfinance SaaS Dashboard",
    category: "Fintech / SaaS",
    description:
      "A secure dashboard for managing active microfinance loans, processing automated repayment tables, tracking logs, and analyzing monthly collections.",
    link: "https://mf-demo-nine.vercel.app/",
  },
  {
    title: "Clinic Branding Website",
    category: "Healthtech / Web",
    description:
      "An elegant clinic presence website with digital service pages, patient pricing modules, custom appointment scheduling forms, and interactive feedback widgets.",
    link: "https://www.drshashiphysio.com/",
  },
  {
    title: "Clinic Management CRM System",
    category: "Full-Stack / CRM",
    description:
      "A comprehensive internal clinical manager featuring queue status pages, appointment history records, patient cards, and database logs.",
    link: "https://physio-demo-project.vercel.app/login",
  },
];

const skillCategories = [
  {
    category: "languages",
    title: "JavaScript, TypeScript & SQL",
    description: "Developing robust backend APIs and high-performance frontend interfaces using modern ES6+ standards and type-safe systems."
  },
  {
    category: "frontend",
    title: "React, Next.js, Vite & Tailwind CSS",
    description: "Building fast, SEO-optimized web applications with components, state management (Zustand), and data-fetching hooks (TanStack Query)."
  },
  {
    category: "backend",
    title: "Node.js, NestJS & Express.js",
    description: "Designing structured backend architectures, microservices, and robust RESTful API endpoints following clean code patterns."
  },
  {
    category: "databases",
    title: "PostgreSQL, MySQL & MongoDB",
    description: "Configuring relational databases, designing normalization schemas, writing migrations (TypeORM), and indexing collections."
  },
  {
    category: "security",
    title: "JWT, RBAC & Multi-Tenant Data Isolation",
    description: "Securing APIs via JWT validation, enforcing Role-Based Access Control, and implementing tenant-level data partitioning."
  },
  {
    category: "integrations",
    title: "WhatsApp API, Razorpay & Cloudinary",
    description: "Configuring third-party services for automated patient notifications, digital invoicing, payment collections, and media CDNs."
  },
  {
    category: "devops",
    title: "Docker, AWS, Railway & Git",
    description: "Containerizing services, deploying to cloud platforms (Railway, AWS Lightsail, Vercel), and managing version control."
  },
  {
    category: "testing",
    title: "Jest, Postman API Testing & Agile",
    description: "Writing unit tests, writing API automated assertions, and developing software iteratively under Agile scrum workflows."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 70,
      damping: 15,
    },
  },
};

export default function Home() {
  return (
    <div
      className="home-page-container"
      style={{
        width: "100%",
        height: "100vh",
        overflowY: "auto",
        overflowX: "hidden",
        scrollBehavior: "smooth",
        background: "var(--color-light-fade)",
        transition: "background 0.3s ease",
      }}
    >
      {/* ─── Hero Section (100vh split screen) ─── */}
      <div className="hero-container">
        <div className="hero-inner">
          {/* Left Column: Desk Illustration */}
          <div className="hero-svg-wrapper">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              style={{ width: "100%", height: "100%", display: "flex", alignItems: "stretch" }}
            >
              <DeskIllustration />
            </motion.div>
          </div>

          {/* Right Column: Intro Copy */}
          <div className="hero-content-wrapper">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  fontFamily: "'Caveat', cursive",
                  fontSize: "clamp(26px, 2.8vw, 38px)",
                  fontWeight: 700,
                  color: "var(--border-color)",
                  transform: "rotate(-3deg)",
                  marginBottom: "16px",
                  display: "inline-block",
                  transition: "color 0.3s ease",
                }}
              >
                👋 Hi, I&apos;m Rohan
              </span>

              <h1
                style={{
                  fontFamily: "'Fredoka', sans-serif",
                  fontSize: "clamp(30px, 3.8vw, 62px)",
                  fontWeight: 700,
                  lineHeight: 1.15,
                  color: "var(--border-color)",
                  letterSpacing: "-0.01em",
                  transition: "color 0.3s ease",
                }}
              >
                I like building <span className="text-outline">robust</span>,{" "}
                <span className="text-outline">interactive</span> systems with code.
                I also <span className="text-outline">design</span> &amp;{" "}
                <span className="text-outline">scale</span> SaaS backends.
              </h1>

              <div style={{ marginTop: "32px" }}>
                <a
                  href="#projects-section"
                  className="nav-pill active"
                  style={{ display: "inline-block" }}
                >
                  View Projects
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ─── Projects Section (Scroll down) ─── */}
      <div
        id="projects-section"
        style={{
          background: "var(--color-lilac)",
          padding: "100px 10% 120px 10%",
          position: "relative",
          transition: "background 0.3s ease, color 0.3s ease",
          borderBottom: "var(--border-width) solid var(--border-color)",
        }}
      >
        <motion.div
          className="projects-layout-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left Column: Heading, Card 1, Desktop CTA */}
          <div className="projects-col-left">
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span
                style={{
                  fontFamily: "'Caveat', cursive",
                  fontSize: "clamp(22px, 2.5vw, 32px)",
                  color: "var(--border-color)",
                  transition: "color 0.3s ease",
                }}
              >
                some cool things I&apos;ve crafted
              </span>
              <h2
                style={{
                  fontFamily: "'Fredoka', sans-serif",
                  fontSize: "clamp(36px, 4.5vw, 70px)",
                  fontWeight: 700,
                  color: "var(--border-color)",
                  lineHeight: 1,
                  transition: "color 0.3s ease",
                }}
              >
                Projects.
              </h2>
            </div>

            {/* Card 1 */}
            <motion.div variants={cardVariants} className="project-card-wrapper">
              <a href={featuredProjects[0].link} target="_blank" rel="noopener noreferrer" className="project-card">
                {/* Mock Window Header bar */}
                <div
                  style={{
                    display: "flex",
                    gap: "6px",
                    padding: "16px 24px",
                    borderBottom: "var(--border-width) solid var(--border-color)",
                    background: "transparent",
                    transition: "border-color 0.3s ease",
                  }}
                >
                  <span
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "var(--border-color)",
                      transition: "background 0.3s ease",
                    }}
                  />
                  <span
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "var(--border-color)",
                      transition: "background 0.3s ease",
                    }}
                  />
                  <span
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "var(--border-color)",
                      transition: "background 0.3s ease",
                    }}
                  />
                </div>

                {/* Card Body */}
                <div
                  style={{
                    padding: "32px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    flexGrow: 1,
                  }}
                >
                  <h3 className="project-card-title">{featuredProjects[0].title}</h3>
                  <p
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "16px",
                      lineHeight: "1.6",
                      color: "var(--border-color)",
                      opacity: 0.85,
                      flexGrow: 1,
                      transition: "color 0.3s ease",
                    }}
                  >
                    {featuredProjects[0].description}
                  </p>

                  {/* Card Footer */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: "20px",
                      paddingTop: "20px",
                      borderTop: "1.5px dashed var(--border-color)",
                      transition: "border-color 0.3s ease",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "13px",
                        fontWeight: 700,
                        color: "var(--border-color)",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {featuredProjects[0].category}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Fredoka', sans-serif",
                        fontSize: "15px",
                        fontWeight: 700,
                        color: "var(--border-color)",
                        transition: "color 0.3s ease",
                      }}
                    >
                      Live Demo &rarr;
                    </span>
                  </div>
                </div>
              </a>
            </motion.div>

            {/* Desktop-Only CTA Button */}
            <div className="cta-desktop-only" style={{ marginTop: "24px" }}>
              <Link
                href="/projects"
                className="nav-pill active"
                style={{ fontSize: "16px", padding: "12px 32px" }}
              >
                View All Projects
              </Link>
            </div>
          </div>

          {/* Right Column: Card 2, Card 3 */}
          <div className="projects-col-right">
            {/* Card 2 */}
            <motion.div variants={cardVariants} className="project-card-wrapper">
              <a href={featuredProjects[1].link} target="_blank" rel="noopener noreferrer" className="project-card">
                {/* Mock Window Header bar */}
                <div
                  style={{
                    display: "flex",
                    gap: "6px",
                    padding: "16px 24px",
                    borderBottom: "var(--border-width) solid var(--border-color)",
                    background: "transparent",
                    transition: "border-color 0.3s ease",
                  }}
                >
                  <span
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "var(--border-color)",
                      transition: "background 0.3s ease",
                    }}
                  />
                  <span
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "var(--border-color)",
                      transition: "background 0.3s ease",
                    }}
                  />
                  <span
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "var(--border-color)",
                      transition: "background 0.3s ease",
                    }}
                  />
                </div>

                {/* Card Body */}
                <div
                  style={{
                    padding: "32px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    flexGrow: 1,
                  }}
                >
                  <h3 className="project-card-title">{featuredProjects[1].title}</h3>
                  <p
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "16px",
                      lineHeight: "1.6",
                      color: "var(--border-color)",
                      opacity: 0.85,
                      flexGrow: 1,
                      transition: "color 0.3s ease",
                    }}
                  >
                    {featuredProjects[1].description}
                  </p>

                  {/* Card Footer */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: "20px",
                      paddingTop: "20px",
                      borderTop: "1.5px dashed var(--border-color)",
                      transition: "border-color 0.3s ease",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "13px",
                        fontWeight: 700,
                        color: "var(--border-color)",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {featuredProjects[1].category}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Fredoka', sans-serif",
                        fontSize: "15px",
                        fontWeight: 700,
                        color: "var(--border-color)",
                        transition: "color 0.3s ease",
                      }}
                    >
                      Visit Site &rarr;
                    </span>
                  </div>
                </div>
              </a>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={cardVariants} className="project-card-wrapper">
              <a href={featuredProjects[2].link} target="_blank" rel="noopener noreferrer" className="project-card">
                {/* Mock Window Header bar */}
                <div
                  style={{
                    display: "flex",
                    gap: "6px",
                    padding: "16px 24px",
                    borderBottom: "var(--border-width) solid var(--border-color)",
                    background: "transparent",
                    transition: "border-color 0.3s ease",
                  }}
                >
                  <span
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "var(--border-color)",
                      transition: "background 0.3s ease",
                    }}
                  />
                  <span
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "var(--border-color)",
                      transition: "background 0.3s ease",
                    }}
                  />
                  <span
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "var(--border-color)",
                      transition: "background 0.3s ease",
                    }}
                  />
                </div>

                {/* Card Body */}
                <div
                  style={{
                    padding: "32px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    flexGrow: 1,
                  }}
                >
                  <h3 className="project-card-title">{featuredProjects[2].title}</h3>
                  <p
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "16px",
                      lineHeight: "1.6",
                      color: "var(--border-color)",
                      opacity: 0.85,
                      flexGrow: 1,
                      transition: "color 0.3s ease",
                    }}
                  >
                    {featuredProjects[2].description}
                  </p>

                  {/* Card Footer */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: "20px",
                      paddingTop: "20px",
                      borderTop: "1.5px dashed var(--border-color)",
                      transition: "border-color 0.3s ease",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "13px",
                        fontWeight: 700,
                        color: "var(--border-color)",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {featuredProjects[2].category}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Fredoka', sans-serif",
                        fontSize: "15px",
                        fontWeight: 700,
                        color: "var(--border-color)",
                        transition: "color 0.3s ease",
                      }}
                    >
                      Live Demo &rarr;
                    </span>
                  </div>
                </div>
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Mobile-Only CTA Button */}
        <div className="cta-mobile-only">
          <Link
            href="/projects"
            className="nav-pill active"
            style={{ fontSize: "16px", padding: "12px 32px" }}
          >
            View All Projects
          </Link>
        </div>
      </div>

      {/* ─── Skills Section ─── */}
      <div id="skills-section" className="skills-section">
        <div className="skills-layout-container">
          {/* Left Column: Heading & Skills list */}
          <div className="skills-col-left">
            <div>
              <span className="skills-intro-label">what I bring to the table</span>
              <h2 className="skills-heading">Skills.</h2>
            </div>
            
            <p className="skills-description">
              Over the last 2+ years, I&apos;ve focused on designing and scaling backend SaaS architectures, building robust React interfaces, and delivering complete applications in healthcare and fintech.
            </p>

            <div className="skills-list">
              {skillCategories.map((item, idx) => (
                <div key={idx} className="skills-item">
                  <span className="skills-item-category">{item.category}</span>
                  <div className="skills-item-line" />
                  <div className="skills-item-details">
                    <h3 className="skills-item-title">{item.title}</h3>
                    <p className="skills-item-desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Sticky Graphic Card */}
          <div className="skills-col-right">
            <div className="skills-image-card">
              <span className="skills-badge">FULL STACK</span>
              <img src="/rohan_avatar.png" alt="Rohan Kumrawat" />
            </div>
          </div>
        </div>
      </div>

      {/* ─── Contact Section (Footer) ─── */}
      <div className="contact-section">
        <motion.div
          className="contact-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 60, damping: 15 }}
        >
          {/* Left Column: Info & Links */}
          <div className="contact-info">
            <h3 className="contact-chat-heading">I&apos;m always up for a chat.</h3>
            <p className="contact-chat-text">
              <a href="mailto:rohan@kumrawat.com" className="contact-email-link">
                Pop me an email
              </a>{" "}
              at rohan@kumrawat.com or give me a shout on social media.
            </p>

            <div className="contact-socials-row">
              <a
                href="https://github.com/rohan-kumrawat"
                target="_blank"
                rel="noreferrer"
                className="contact-social-icon"
                title="GitHub"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 496 512"
                  height="28"
                  width="28"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5.7 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-.7zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/rohankumrawat/"
                target="_blank"
                rel="noreferrer"
                className="contact-social-icon"
                title="LinkedIn"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  height="28"
                  width="28"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Blob & Avatar */}
          <div className="contact-blob-wrapper">
            <div className="contact-blob">
              <img
                src="/rohan_avatar.png"
                alt="Rohan Kumrawat Avatar"
                className="contact-avatar"
              />
            </div>
          </div>

          {/* Absolute Overlapping text */}
          <h4 className="contact-overlapping-title">Hey there!</h4>
        </motion.div>
      </div>
    </div>
  );
}
