import React, { useEffect, useRef } from "react";
import { BsLinkedin, BsTwitter, BsArrowUpRight } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ── Rotating circular text badge ── */
const RotatingBadge = ({ text = "Frontend Dev · 3rd Year Eng · ", size = 130 }) => {
  const badgeRef = useRef(null);
  useEffect(() => {
    gsap.to(badgeRef.current, {
      rotate: 360,
      duration: 14,
      ease: "none",
      repeat: -1,
    });
  }, []);
  const r = size / 2 - 16;
  const chars = text.split("");
  return (
    <div
      style={{
        width: size,
        height: size,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      {/* Inner dot */}
      <div
        style={{
          position: "absolute",
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: "#f0c040",
          zIndex: 2,
        }}
      />
      <svg
        ref={badgeRef}
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        <defs>
          <path
            id="circle-path"
            d={`M ${size / 2},${size / 2} m -${r},0 a ${r},${r} 0 1,1 ${r * 2},0 a ${r},${r} 0 1,1 -${r * 2},0`}
          />
        </defs>
        <text
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10.5,
            fill: "#1a1a1a",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          <textPath href="#circle-path">{text}</textPath>
        </text>
      </svg>
    </div>
  );
};

/* ── Marquee strip ── */
const Marquee = ({ items }) => {
  const trackRef = useRef(null);
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const total = el.scrollWidth / 2;
    gsap.to(el, {
      x: -total,
      duration: 20,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % total),
      },
    });
  }, []);
  const doubled = [...items, ...items];
  return (
    <div
      style={{
        overflow: "hidden",
        borderTop: "1.5px solid #1a1a1a",
        borderBottom: "1.5px solid #1a1a1a",
        padding: "0.85rem 0",
        background: "#1a1a1a",
      }}
    >
      <div
        ref={trackRef}
        style={{ display: "flex", gap: "2.5rem", whiteSpace: "nowrap", willChange: "transform" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: i % 2 === 0 ? "#f2ede4" : "#f0c040",
              flexShrink: 0,
              userSelect: "none",
            }}
          >
            {item} <span style={{ color: "#f0c040", opacity: 0.6 }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
};

/* ── Main component ── */
const About2 = () => {
  const sectionRef = useRef(null);
  const eyebrowRef = useRef(null);
  const nameRef = useRef(null);
  const titleLineRef = useRef(null);
  const paraRefs = useRef([]);
  const socialsRef = useRef(null);
  const imageWrapRef = useRef(null);
  const imageRef = useRef(null);
  const badgeWrapRef = useRef(null);
  const marqueeRef = useRef(null);
  const bigTextRef = useRef(null);

  useEffect(() => {
    if (!document.getElementById("about-fonts")) {
      const link = document.createElement("link");
      link.id = "about-fonts";
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Anton&family=Literata:ital,wght@0,400;0,600;1,400&family=JetBrains+Mono:wght@400;500&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const st = { trigger: sectionRef.current, start: "top 72%", toggleActions: "play none none reverse" };

      // Big background text
      gsap.fromTo(bigTextRef.current,
        { opacity: 0, x: 60 },
        { opacity: 1, x: 0, duration: 1.4, ease: "expo.out", scrollTrigger: st }
      );

      // Eyebrow
      gsap.fromTo(eyebrowRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", scrollTrigger: st }
      );

      // Name — dramatic clip reveal
      gsap.fromTo(nameRef.current,
        { opacity: 0, y: 80, skewY: 5 },
        { opacity: 1, y: 0, skewY: 0, duration: 1, ease: "expo.out", delay: 0.1, scrollTrigger: st }
      );

      // Title line
      gsap.fromTo(titleLineRef.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.7, ease: "expo.out", delay: 0.3, transformOrigin: "left", scrollTrigger: st }
      );

      // Paragraphs stagger
      gsap.fromTo(paraRefs.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.75, ease: "power3.out",
          stagger: 0.15, delay: 0.2,
          scrollTrigger: { trigger: sectionRef.current, start: "top 65%", toggleActions: "play none none reverse" }
        }
      );

      // Socials
      gsap.fromTo(socialsRef.current,
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "back.out(1.8)", delay: 0.4,
          scrollTrigger: { trigger: socialsRef.current, start: "top 88%", toggleActions: "play none none reverse" }
        }
      );

      // Image entrance — tilt settle
      gsap.fromTo(imageWrapRef.current,
        { opacity: 0, scale: 0.85, rotate: -8 },
        {
          opacity: 1, scale: 1, rotate: -3, duration: 1.2, ease: "expo.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 65%", toggleActions: "play none none reverse" }
        }
      );

      // Image parallax
      gsap.to(imageRef.current, {
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.8,
        },
      });

      // Badge entrance
      gsap.fromTo(badgeWrapRef.current,
        { opacity: 0, scale: 0, rotate: -90 },
        {
          opacity: 1, scale: 1, rotate: 0, duration: 1, ease: "elastic.out(1, 0.5)", delay: 0.5,
          scrollTrigger: { trigger: imageWrapRef.current, start: "top 72%", toggleActions: "play none none reverse" }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stack = ["React", "JavaScript", "Python", "Tailwind CSS", "Next.js", "GSAP", "TypeScript", "Node.js"];

  return (
    <div ref={sectionRef} id="about" style={{ background: "#f2ede4", overflow: "hidden" }}>
      {/* ── Main content ── */}
      <section
        style={{
          minHeight: "100vh",
          padding: "clamp(4rem, 8vw, 7rem) clamp(1.5rem, 6vw, 6rem)",
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Giant background text */}
        <div
          ref={bigTextRef}
          aria-hidden
          style={{
            position: "absolute",
            top: "50%",
            right: "-2rem",
            transform: "translateY(-50%)",
            fontFamily: "'Anton', sans-serif",
            fontSize: "clamp(9rem, 24vw, 22rem)",
            lineHeight: 1,
            color: "transparent",
            WebkitTextStroke: "1.5px rgba(26,26,26,0.07)",
            userSelect: "none",
            pointerEvents: "none",
            letterSpacing: "-0.02em",
            whiteSpace: "nowrap",
          }}
        >
          ABOUT
        </div>

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "clamp(3rem, 6vw, 7rem)",
            alignItems: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* ── Left: Text ── */}
          <div style={{ maxWidth: "600px" }}>
            {/* Eyebrow */}
            <div
              ref={eyebrowRef}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1.5rem",
              }}
            >
              <div style={{ width: "2rem", height: "2px", background: "#f0c040" }} />
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.7rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#1a1a1a",
                  opacity: 0.5,
                }}
              >
                Biography
              </span>
            </div>

            {/* Name */}
            <div style={{ overflow: "hidden", marginBottom: "0.25rem" }}>
              <h2
                ref={nameRef}
                style={{
                  fontFamily: "'Anton', sans-serif",
                  fontSize: "clamp(3.5rem, 9vw, 7.5rem)",
                  fontWeight: 400,
                  color: "#1a1a1a",
                  margin: 0,
                  lineHeight: 0.92,
                  letterSpacing: "-0.01em",
                  willChange: "transform",
                }}
              >
                Priya<br />Kumari
              </h2>
            </div>

            {/* Yellow underline */}
            <div
              ref={titleLineRef}
              style={{
                height: "4px",
                background: "#f0c040",
                width: "100%",
                maxWidth: "320px",
                borderRadius: "2px",
                marginBottom: "2.5rem",
                marginTop: "1rem",
              }}
            />

            {/* Intro */}
            <h3
              ref={(el) => (paraRefs.current[0] = el)}
              style={{
                fontFamily: "'Literata', serif",
                fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
                fontWeight: 600,
                color: "#1a1a1a",
                margin: "0 0 1.25rem",
                fontStyle: "italic",
                lineHeight: 1.4,
              }}
            >
              Frontend Developer based in India.
            </h3>

            <p
              ref={(el) => (paraRefs.current[1] = el)}
              style={{
                fontFamily: "'Literata', serif",
                fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)",
                color: "rgba(26,26,26,0.65)",
                lineHeight: 1.8,
                margin: "0 0 1.1rem",
              }}
            >
              Currently a 3rd-year engineering student — I bridge the gap between
              design and code. I don't just build websites; I craft digital
              experiences that feel seamless and intuitive.
            </p>

            <p
              ref={(el) => (paraRefs.current[2] = el)}
              style={{
                fontFamily: "'Literata', serif",
                fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)",
                color: "rgba(26,26,26,0.65)",
                lineHeight: 1.8,
                margin: "0 0 2.5rem",
              }}
            >
              My philosophy: <em>clean code, purposeful motion, user-centric design.</em>{" "}
              Whether it's React or Python, I focus on scalability and performance.
            </p>

            {/* Socials + CTA */}
            <div
              ref={socialsRef}
              style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1.5rem" }}
            >
              {/* Icon links */}
              <div style={{ display: "flex", gap: "0.75rem" }}>
                {[
                  { href: "mailto:priya0903kumari@gmail.com", icon: <MdEmail size={20} />, label: "Email" },
                  { href: "https://www.linkedin.com/in/priyakumari21-frontend-developer/", icon: <BsLinkedin size={18} />, label: "LinkedIn" },
                  { href: "https://x.com/textrovert_39", icon: <BsTwitter size={18} />, label: "Twitter" },
                ].map(({ href, icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noreferrer"
                    aria-label={label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 42,
                      height: 42,
                      border: "1.5px solid rgba(26,26,26,0.18)",
                      borderRadius: "50%",
                      color: "#1a1a1a",
                      transition: "background 0.2s, border-color 0.2s, color 0.2s, transform 0.2s",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#1a1a1a";
                      e.currentTarget.style.color = "#f0c040";
                      e.currentTarget.style.borderColor = "#1a1a1a";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "#1a1a1a";
                      e.currentTarget.style.borderColor = "rgba(26,26,26,0.18)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    {icon}
                  </a>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#projects"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.78rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#f2ede4",
                  background: "#1a1a1a",
                  textDecoration: "none",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "3px",
                  transition: "background 0.2s, gap 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#f0c040";
                  e.currentTarget.style.color = "#1a1a1a";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#1a1a1a";
                  e.currentTarget.style.color = "#f2ede4";
                }}
              >
                View My Work <BsArrowUpRight size={13} />
              </a>
            </div>
          </div>

          {/* ── Right: Image ── */}
          <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
            {/* Tilted image frame */}
            <div
              ref={imageWrapRef}
              style={{
                position: "relative",
                transform: "rotate(-3deg)",
                flexShrink: 0,
              }}
            >
              {/* Yellow shadow offset */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "#f0c040",
                  borderRadius: "4px",
                  transform: "translate(10px, 10px)",
                  zIndex: 0,
                }}
              />
              {/* Image wrapper */}
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  overflow: "hidden",
                  borderRadius: "4px",
                  border: "6px solid #1a1a1a",
                  width: "clamp(220px, 28vw, 340px)",
                }}
              >
                <img
                  ref={imageRef}
                  src="/3.jpg"
                  alt="Priya Kumari"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    objectFit: "cover",
                    filter: "contrast(1.05) saturate(0.9)",
                    transition: "filter 0.4s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.filter = "contrast(1) saturate(1)")}
                  onMouseLeave={(e) => (e.currentTarget.style.filter = "contrast(1.05) saturate(0.9)")}
                />
                {/* Caption strip */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: "#1a1a1a",
                    padding: "0.5rem 0.75rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.62rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#f0c040",
                    }}
                  >
                    Priya Kumari — 2024
                  </span>
                </div>
              </div>
            </div>

            {/* Rotating circular badge */}
            <div
              ref={badgeWrapRef}
              style={{
                position: "absolute",
                top: "-2rem",
                right: "-2.5rem",
                zIndex: 10,
                background: "#f2ede4",
                borderRadius: "50%",
                border: "1.5px solid rgba(26,26,26,0.12)",
              }}
            >
              <RotatingBadge text="Frontend Dev · 3rd Year Eng · India · " size={120} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Marquee strip ── */}
      <div ref={marqueeRef}>
        <Marquee items={stack} />
      </div>
    </div>
  );
};

export default About2;
