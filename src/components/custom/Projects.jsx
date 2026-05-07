import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    id: "01",
    category: "AI Short Video Generator",
    title: "Clip Crafter AI",
    year: "2026",
    accent: "#f5a623",
    src: "/clipcrafter.png",
    stack: ["Next.js","TypeScript","Tailwind","Neon PostgreSQL","Google Gemini","Firebase"],
    github: "https://github.com/priyacha123/Clip-Crafter-AI",
    live: "https://clip-crafter-ai.vercel.app/",
    description:
          `Built an AI-powered short video generator that transforms text input
          into fully rendered videos by automating the entire creation pipeline,
          including script generation, voiceovers, captions, images, and final
          video composition. The system delivers an end-to-end, hands-free media
          generation experience, enabling users to quickly produce engaging
          short-form video content from simple text prompts.
          <br /> <br />
          Integrated multiple AI services such as Gemini, Google Text-to-Speech,
          AssemblyAI, ClipDrop, and Remotion through an asynchronous processing
          pipeline to ensure smooth media generation, processing, and storage.
          Designed a scalable full-stack architecture using Next.js, Clerk for
          authentication, Neon PostgreSQL with Drizzle ORM, and Firebase Storage
          to support secure user management, reliable data handling, and
          efficient asset storage.`
  },
  {
    id: "02",
    category: "AI Trip Planner",
    title: "Voyage Tour",
    year: "2026",
    accent: "#f5a623",
    src: "/trip-planner.png",
    stack: ["React", "TypeScript", "Tailwind"],
    github: "https://github.com/priyacha123/AI-Trip-Planner",
    live: "https://ai-trip-planner-mu.vercel.app/",
    description: `Built an AI-powered Trip Planner using React, integrating the Google
          Places Autocomplete API for seamless location search and the Gemini
          API to generate personalized, structured JSON-based travel itineraries
          with hotel recommendations and detailed day-wise plans. The
          application delivers complete travel insights, helping users plan
          trips efficiently with AI-driven suggestions.
          <br /> <br />
          Implemented an interactive mapping system that allows users to
          navigate directly from itinerary items to live maps, displaying exact
          locations of destinations. Enhanced the experience by presenting rich
          trip details, including images, ratings, and optimized visiting
          schedules, enabling users to visualize and explore their travel plans
          more effectively. `
  },
  {
    id: "03",
    category: "Photo Editing Website",
    title: "Gallery Vault",
    year: "2026", 
    accent: "#f5a623",
    src: "/gallery-vault.png",
    stack: ["React", "TypeScript", "Tailwind"],
    github: "https://github.com/priyacha123/Gallery-Vault",
    live: "https://gallery-vault-lake.vercel.app/",
    description: 
          `Developed a Next.js and TypeScript–based photo editing web application
          that supports camera capture and a wide range of AI-powered image
          transformations, including generative fill, background removal, image
          enhancement, and advanced visual effects. The application provides an
          interactive and intuitive editing experience, enabling users to create
          and modify images directly within the browser.
          <br /> <br />
          Integrated Cloudinary using next-cloudinary for real-time image
          processing, secure cloud storage, and optimized media delivery of all
          user-generated content. Implemented comprehensive media management
          features such as photo liking, favorites collections, and album
          creation/deletion, significantly improving user engagement and
          ensuring organized, scalable asset handling. 
          </p>`
  },
  {
    id: "04",
    category: "Recipe Generator",
    title: "Chef Claude",
    year: "2026", 
    accent: "#f5a623",
    src: "/chef-claude.png",
    stack: ["React", "TypeScript", "Tailwind"],
    github: "https://github.com/priyacha123/Chef-Claude",
    live: "https://chef-claude-smoky.vercel.app/",
    description: 
          ` Created a recipe generator web application using React that generates
          recipes through the Hugging Face API based on user-provided
          ingredients. The system enforces a minimum of five ingredients to
          ensure more accurate and meaningful recipe generation.
          <br /> <br />
          Designed an intuitive user interface that guides users to input
          ingredients and instantly receive AI-generated recipes. The project
          highlights effective API integration, input validation, and dynamic
          rendering of AI-driven content within a React-based frontend.
          <br /> <br />
          Created a recipe generator web application using React that generates
          recipes through the Hugging Face API based on user-provided
          ingredients. The system enforces a minimum of five ingredients to
          ensure more accurate and meaningful recipe generation.
          <br /> <br />
          Designed an intuitive user interface that guides users to input
          ingredients and instantly receive AI-generated recipes. The project
          highlights effective API integration, input validation, and dynamic
          rendering of AI-driven content within a React-based frontend. `
  },
  {
    id: "05",
    category: "Meme Creation Website",
    title: "Meme Generator",
    year: "2026", 
    accent: "#f5a623",  
    src: "/meme-generator.png",
    stack: ["React", "TypeScript", "Tailwind"],
    github: "https://github.com/priyacha123/Meme-Generator",
    live: "https://meme-generator-iota-liart.vercel.app/",
    description: 
          ` Created a simple and interactive Meme Generator using React that
          fetches trending meme templates from a public Meme API. The
          application allows users to customize memes by adding top and bottom
          text, making meme creation quick and user-friendly.
          <br /> <br />
          Implemented features to download the final meme as a .jpg file and
          styled the interface using Tailwind CSS for a clean, responsive
          design. The project demonstrates practical API integration, state
          management, and dynamic UI updates in a modern React workflow. 
          <br /> <br />
          Developed a simple and interactive Meme Generator using React that
          fetches trending meme templates from a public Meme API. The
          application allows users to customize memes by adding top and bottom
          text, making meme creation quick and user-friendly.
          <br /> <br />
          Implemented features to download the final meme as a .jpg file and
          styled the interface using Tailwind CSS for a clean, responsive
          design. The project demonstrates practical API integration, state
          management, and dynamic UI updates in a modern React workflow. `
  },

  {
    id: "06",
    category: "Expense Tracker",
    title: "Savoneyy",
    year: "2026", 
    accent: "#f5a623",  
    src: "/savoneyy.png",
    stack: ["React", "TypeScript", "Tailwind"],
    github: "https://github.com/priyacha123/Savoneyy",
    live: "https://savoneyy.vercel.app/",
    description: 
          ` Developed Savoney, a personal finance management web application built
          with JavaScript that enables users to track income, expenses, and
          budgets through an interactive dashboard. The application provides
          real-time insights by displaying total income, total expenses, and
          remaining balance, helping users better understand and manage their
          finances.
          <br /> <br />
          Implemented features to add and manage income sources, categorize and
          track expenses, and define budgets with automatic balance
          calculations. Enhanced the user experience with clean, responsive UI
          design and interactive charts that visually represent income and
          expense data for clear and effective financial analysis.`
  },
];

/* ── Individual row entry ── */
const ProjectRow = ({ project, index, isOpen, onToggle }) => {
  const rowRef = useRef(null);
  const detailRef = useRef(null);

  useEffect(() => {
    if (!detailRef.current) return;
    if (isOpen) {
      gsap.fromTo(
        detailRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.45, ease: "power3.out" }
      );
    } else {
      gsap.to(detailRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.35,
        ease: "power3.in",
      });
    }
  }, [isOpen]);

  return (
    <div
      ref={rowRef}
      data-index={index}
      className="project-row"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        cursor: "pointer",
      }}
      onClick={onToggle}
    >
      {/* ── Main row ── */}
      <div
        className="row-main"
        style={{
          display: "grid",
          gridTemplateColumns: "64px 1fr auto",
          alignItems: "center",
          gap: "clamp(1rem, 3vw, 2.5rem)",
          padding: "clamp(1.25rem, 2.5vw, 2rem) 0",
          transition: "opacity 0.2s",
        }}
      >
        {/* Number */}
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "clamp(0.75rem, 1.2vw, 0.9rem)",
            color: isOpen ? project.accent : "rgba(43, 29, 20, 0.3)",
            letterSpacing: "0.05em",
            transition: "color 0.3s",
            userSelect: "none",
          }}
        >
          {project.id}
        </span>

        {/* Title + category */}
        <div style={{ overflow: "hidden" }}>
          <h3
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(1.5rem, 3.5vw, 3rem)",
              fontWeight: 400,
              color: isOpen ? project.accent : "#2b1d14",
              margin: 0,
              lineHeight: 1.1,
              transition: "color 0.3s",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {project.title}
          </h3>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "clamp(0.65rem, 1vw, 0.78rem)",
              color: "rgba(43, 29, 20, 0.45)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              display: "block",
              marginTop: "0.25rem",
            }}
          >
            {project.category} · {project.year}
          </span>
        </div>

        {/* Arrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          {/* Stack pills — hide on small */}
          <div
            className="stack-pills"
            style={{
              display: "flex",
              gap: "0.4rem",
              flexWrap: "wrap",
              justifyContent: "flex-end",
            }}
          >
            {project.stack.map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.65rem",
                  letterSpacing: "0.06em",
                  padding: "0.2rem 0.55rem",
                  borderRadius: "2px",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "rgba(43, 29, 20, 0.35)",
                  whiteSpace: "nowrap",
                }}
              >
                {t}
              </span>
            ))}
          </div>

          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            style={{
              flexShrink: 0,
              transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
              transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1)",
              color: isOpen ? project.accent : "rgba(43, 29, 20, 0.25)",
            }}
          >
            <line
              x1="4"
              y1="10"
              x2="16"
              y2="10"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <line
              x1="10"
              y1="4"
              x2="10"
              y2="16"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </div>
      </div>

      {/* ── Expandable detail panel ── */}
      <div
        ref={detailRef}
        style={{ height: 0, overflow: "hidden", opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "64px 1fr",
            gap: "clamp(1rem, 3vw, 2.5rem)",
            paddingBottom: "2rem",
          }}
        >
          <div />
          <div>
            <div
              style={{
                width: "2rem",
                height: "2px",
                background: project.accent,
                marginBottom: "1.25rem",
                borderRadius: "1px",
              }}
            />
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(0.9rem, 1.4vw, 1.05rem)",
                color: "#3a2a1f",
                lineHeight: 1.75,
                margin: "0 0 1.5rem 0",
                maxWidth: "680px",
              }}
            >
              {project.description}
            </p>
            <div style={{ display: "flex", gap: "1rem" }}>
              <a
                href={project.live}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.78rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: project.accent,
                  textDecoration: "none",
                  padding: "0.45rem 1.2rem",
                  border: `1px solid ${project.accent}`,
                  borderRadius: "2px",
                  transition: "background 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = project.accent;
                  e.currentTarget.style.color = "#0c0c0c";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = project.accent;
                }}
              >
                Live ↗
              </a>
              <a
                href={project.github}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.78rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.4)",
                  textDecoration: "none",
                  padding: "0.45rem 1.2rem",
                  border: "1px solid rgba(43, 29, 20, 0.15)",
                  borderRadius: "2px",
                  transition: "border-color 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(43, 29, 20, 0.4)";
                  e.currentTarget.style.color = "#2b1d14";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(43, 29, 20, 0.15)";
                  e.currentTarget.style.color = "rgba(43, 29, 20, 0.4)";
                }}
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ── Main section ── */
const Projects = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const listRef = useRef(null);
  const [openId, setOpenId] = useState(null);

  /* Google Fonts injection */
  useEffect(() => {
    if (!document.getElementById("projects-fonts")) {
      const link = document.createElement("link");
      link.id = "projects-fonts";
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  /* GSAP entrance animations */
  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Heading — character-by-character stagger using split lines */
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 60, skewY: 3 },
        {
          opacity: 1,
          y: 0,
          skewY: 0,
          duration: 1.1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        subRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        }
      );

      /* Stagger each row */
      const rows = listRef.current?.querySelectorAll(".project-row");
      if (rows?.length) {
        gsap.fromTo(
          rows,
          { opacity: 0, x: -24 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.1,
            delay: 0.3,
            scrollTrigger: {
              trigger: listRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      /* Subtle parallax on heading */
      gsap.to(headingRef.current, {
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "center top",
          scrub: 2,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleToggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <>
      {/* Responsive style overrides */}
      <style>{`
        @media (max-width: 640px) {
          .stack-pills { display: none !important; }
        }
        .project-row:hover .row-main {
          opacity: 0.85;
        }
      `}</style>

      <section
        ref={sectionRef}
        id="projects"
        style={{
          width: "100%",
          background: "#f2ede4",
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          color: "#2b1d14",
          padding: "clamp(5rem, 10vw, 9rem) clamp(1.5rem, 6vw, 6rem)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Background texture — faint dot grid */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            pointerEvents: "none",
          }}
        />

        {/* ── Section header ── */}
        <div style={{ marginBottom: "clamp(3rem, 6vw, 5rem)", position: "relative" }}>
          <p
            ref={subRef}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "clamp(0.7rem, 1vw, 0.8rem)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#f5a623",
              margin: "0 0 1rem 0",
            }}
          >
            Selected Work
          </p>

          <h2
            ref={headingRef}
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(3.5rem, 9vw, 8rem)",
              fontWeight: 400,
              color: "#2b1d14",
              margin: 0,
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              willChange: "transform",
            }}
          >
            Projects.
          </h2>
        </div>

        {/* ── Project list ── */}
        <div
          ref={listRef}
          style={{
            maxWidth: "1100px",
            position: "relative",
          }}
        >
          {PROJECTS.map((project, i) => (
            <ProjectRow
              key={project.id}
              project={project}
              index={i}
              isOpen={openId === project.id}
              onToggle={() => handleToggle(project.id)}
            />
          ))}

          {/* Bottom border */}
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.08)",
            }}
          />
        </div>
      </section>
    </>
  );
};

export default Projects;
