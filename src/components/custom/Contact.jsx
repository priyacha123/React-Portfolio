import React, { useEffect, useRef, useState } from "react";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const eyebrowRef = useRef(null);
  const subRef = useRef(null);
  const socialsRef = useRef(null);
  const formRef = useRef(null);
  const fieldsRef = useRef([]);
  const buttonRef = useRef(null);
  const lineRef = useRef(null);
  const bgTextRef = useRef(null);

  const [sent, setSent] = useState(false);

  /* ── Google Fonts (Warm Editorial set) */
  useEffect(() => {
    if (!document.getElementById("portfolio-fonts")) {
      const link = document.createElement("link");
      link.id = "portfolio-fonts";
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;1,500;1,600&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  /* ── GSAP animations */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const st = {
        trigger: sectionRef.current,
        start: "top 72%",
        toggleActions: "play none none reverse",
      };

      gsap.fromTo(bgTextRef.current,
        { opacity: 0, x: -80 },
        { opacity: 1, x: 0, duration: 1.6, ease: "expo.out", scrollTrigger: st }
      );

      gsap.fromTo(eyebrowRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", scrollTrigger: st }
      );

      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 80, skewY: 4 },
        { opacity: 1, y: 0, skewY: 0, duration: 1.1, ease: "expo.out", delay: 0.1, scrollTrigger: st }
      );

      gsap.fromTo(lineRef.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.7, ease: "expo.out", delay: 0.35, transformOrigin: "left", scrollTrigger: st }
      );

      gsap.fromTo(subRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.25, scrollTrigger: st }
      );

      gsap.fromTo(socialsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", delay: 0.4, scrollTrigger: st }
      );

      gsap.fromTo(fieldsRef.current,
        { opacity: 0, y: 40, x: 20 },
        {
          opacity: 1, y: 0, x: 0, duration: 0.7, ease: "power3.out", stagger: 0.12, delay: 0.2,
          scrollTrigger: { trigger: formRef.current, start: "top 78%", toggleActions: "play none none reverse" }
        }
      );

      gsap.fromTo(buttonRef.current,
        { opacity: 0, scale: 0.6, rotate: -8 },
        {
          opacity: 1, scale: 1, rotate: 0, duration: 0.9, ease: "elastic.out(1, 0.5)", delay: 0.5,
          scrollTrigger: { trigger: formRef.current, start: "top 80%", toggleActions: "play none none reverse" }
        }
      );

      const btn = buttonRef.current;
      const onMove = (e) => {
        const r = btn.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) * 0.3;
        const dy = (e.clientY - (r.top + r.height / 2)) * 0.3;
        gsap.to(btn, { x: dx, y: dy, duration: 0.25, ease: "power2.out" });
      };
      const onLeave = () =>
        gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1.1, 0.4)" });

      btn.addEventListener("mousemove", onMove);
      btn.addEventListener("mouseleave", onLeave);
      return () => {
        btn.removeEventListener("mousemove", onMove);
        btn.removeEventListener("mouseleave", onLeave);
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    gsap.to(buttonRef.current, {
      scale: 0.92, duration: 0.12, yoyo: true, repeat: 1, ease: "power2.inOut",
      onComplete: () => setSent(true),
    });
  };

  const socials = [
    { href: "mailto:priya0903kumari@gmail.com", icon: <MdEmail size={18} />, label: "Email" },
    { href: "https://www.linkedin.com/in/priyakumari21-frontend-developer/", icon: <BsLinkedin size={16} />, label: "LinkedIn" },
    { href: "https://x.com/textrovert_39", icon: <BsTwitter size={16} />, label: "Twitter" },
  ];

  return (
    <>
      <style>{`
        .contact-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(43,29,20,0.18);
          padding: 0.85rem 0;
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.9rem, 1.3vw, 1rem);
          color: #2b1d14;
          outline: none;
          transition: border-color 0.3s;
          caret-color: #c1623f;
        }
        .contact-input::placeholder {
          color: rgba(43,29,20,0.32);
          font-style: italic;
        }
        .contact-input:focus { border-bottom-color: #c1623f; }
        .contact-input:-webkit-autofill {
          -webkit-box-shadow: 0 0 0 1000px #f7f1e8 inset;
          -webkit-text-fill-color: #2b1d14;
        }
        .contact-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #6b4f3b;
          display: block;
          margin-bottom: 0.4rem;
          font-weight: 600;
        }
        .contact-label .num {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-weight: 500;
          color: #a8896f;
          margin-right: 0.4rem;
          letter-spacing: 0;
          text-transform: none;
          font-size: 0.78rem;
        }
        .social-pill:hover {
          background: #efe5d4 !important;
          border-color: #c1623f !important;
        }
      `}</style>

      <section
        ref={sectionRef}
        id="contact"
        style={{
          background: "#f7f1e8",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "clamp(5rem, 10vw, 8rem) clamp(1.5rem, 6vw, 6rem)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Subtle paper grain dot grid */}
        <div aria-hidden style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "radial-gradient(circle, rgba(58,42,31,0.07) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }} />

        {/* Editorial masthead strip */}
        <div style={{
          position: "absolute",
          top: "2rem",
          left: "clamp(1.5rem, 6vw, 6rem)",
          right: "clamp(1.5rem, 6vw, 6rem)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.62rem",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "#6b4f3b",
          fontWeight: 500,
        }}>
          <span style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontWeight: 500,
            textTransform: "none",
            letterSpacing: 0,
            fontSize: "0.78rem",
            color: "#3a2a1f",
          }}>
            "Every letter begins a story."
          </span>
        </div>

        {/* Ghost background text */}
        <div
          ref={bgTextRef}
          aria-hidden
          style={{
            position: "absolute",
            bottom: "-2rem",
            left: "-1rem",
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontWeight: 500,
            fontSize: "clamp(8rem, 22vw, 20rem)",
            lineHeight: 1,
            color: "transparent",
            WebkitTextStroke: "1.5px rgba(58,42,31,0.08)",
            userSelect: "none",
            pointerEvents: "none",
            whiteSpace: "nowrap",
          }}
        >
          Contact.
        </div>

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(3rem, 7vw, 8rem)",
            alignItems: "flex-start",
            position: "relative",
            zIndex: 1,
          }}
          className="contact-grid"
        >
          {/* ── Left: Header + info ── */}
          <div>
            <div
              ref={eyebrowRef}
              style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}
            >
              <div style={{ width: "2rem", height: "1.5px", background: "#c1623f" }} />
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.68rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#6b4f3b",
                fontWeight: 600,
              }}>
                Get In Touch
              </span>
              <span style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                color: "#a8896f",
                fontSize: "0.85rem",
              }}>
                — 04
              </span>
            </div>

            <div style={{ overflow: "hidden", marginBottom: "0.5rem" }}>
              <h2
                ref={headingRef}
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(3rem, 7vw, 6rem)",
                  fontWeight: 500,
                  color: "#2b1d14",
                  margin: 0,
                  lineHeight: 0.95,
                  letterSpacing: "-0.02em",
                  willChange: "transform",
                }}
              >
                Let's<br />
                <span style={{ fontStyle: "italic", color: "#c1623f" }}>Talk.</span>
              </h2>
            </div>

            <div
              ref={lineRef}
              style={{
                height: "2px",
                background: "#c1623f",
                width: "clamp(100px, 30%, 180px)",
                marginTop: "1.25rem",
                marginBottom: "2.5rem",
              }}
            />

            <p
              ref={subRef}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
                color: "#3a2a1f",
                lineHeight: 1.75,
                maxWidth: "420px",
                margin: "0 0 3rem",
                fontWeight: 400,
              }}
            >
              Got a project idea, a collaboration in mind, or simply wish to say hello?
              My inbox is always open — <em style={{ color: "#6b4f3b" }}>I read every letter.</em>
            </p>

            {/* Social links */}
            <div ref={socialsRef} style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {socials.map(({ href, icon, label }, i) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="social-pill"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.85rem",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.78rem",
                    letterSpacing: "0.1em",
                    color: "#3a2a1f",
                    textDecoration: "none",
                    padding: "0.65rem 1.1rem",
                    border: "1px solid rgba(58,42,31,0.2)",
                    borderRadius: "999px",
                    transition: "background 0.25s, border-color 0.25s, color 0.25s",
                    width: "fit-content",
                    background: "rgba(255,255,255,0.4)",
                  }}
                >
                  <span style={{
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: "italic",
                    color: "#a8896f",
                    fontSize: "0.85rem",
                    letterSpacing: 0,
                  }}>
                    0{i + 1}
                  </span>
                  <span style={{ color: "#c1623f", display: "flex", alignItems: "center" }}>{icon}</span>
                  {href.startsWith("mailto") ? href.replace("mailto:", "") : label}
                </a>
              ))}
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div ref={formRef} style={{ paddingTop: "0.5rem" }}>
            {sent ? (
              <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "1rem",
                padding: "3rem 0",
              }}>
                <div style={{
                  width: "3.25rem", height: "3.25rem",
                  border: "1.5px solid #c1623f",
                  borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: "#fff8ec",
                }}>
                  <svg width="20" height="20" viewBox="0 0 18 18" fill="none">
                    <polyline points="3,9 7,13 15,5" stroke="#c1623f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                  fontWeight: 500,
                  color: "#2b1d14",
                  margin: 0,
                }}>
                  Message <span style={{ fontStyle: "italic", color: "#c1623f" }}>sent.</span>
                </h3>
                <p style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1rem",
                  color: "#6b4f3b",
                  lineHeight: 1.75,
                  margin: 0,
                  fontStyle: "italic",
                }}>
                  Thanks for reaching out — I'll write back soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                {/* Name + Email row */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                  <div ref={(el) => (fieldsRef.current[0] = el)}>
                    <label htmlFor="name" className="contact-label">
                      <span className="num">i.</span>Name
                    </label>
                    <input type="text" id="name" name="name" placeholder="Your name" required className="contact-input" />
                  </div>
                  <div ref={(el) => (fieldsRef.current[1] = el)}>
                    <label htmlFor="email" className="contact-label">
                      <span className="num">ii.</span>Email
                    </label>
                    <input type="email" id="email" name="email" placeholder="your@email.com" required className="contact-input" />
                  </div>
                </div>

                {/* Subject */}
                <div ref={(el) => (fieldsRef.current[2] = el)}>
                  <label htmlFor="subject" className="contact-label">
                    <span className="num">iii.</span>Subject
                  </label>
                  <input type="text" id="subject" name="subject" placeholder="What's this about?" className="contact-input" />
                </div>

                {/* Message */}
                <div ref={(el) => (fieldsRef.current[3] = el)}>
                  <label htmlFor="message" className="contact-label">
                    <span className="num">iv.</span>Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="I promise I read every word…"
                    required
                    className="contact-input"
                    style={{ resize: "none", lineHeight: 1.75 }}
                  />
                </div>

                {/* Submit */}
                <div style={{ paddingTop: "0.5rem" }}>
                  <button
                    ref={buttonRef}
                    type="submit"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.65rem",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.75rem",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "#f7f1e8",
                      background: "#2b1d14",
                      border: "1px solid #2b1d14",
                      cursor: "pointer",
                      padding: "1.05rem 2.2rem",
                      borderRadius: "999px",
                      fontWeight: 600,
                      transition: "background 0.25s, color 0.25s, border-color 0.25s, box-shadow 0.25s",
                      willChange: "transform",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#c1623f";
                      e.currentTarget.style.borderColor = "#c1623f";
                      e.currentTarget.style.boxShadow = "0 8px 22px rgba(193,98,63,0.32)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#2b1d14";
                      e.currentTarget.style.borderColor = "#2b1d14";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    Send Message
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Bottom footer line */}
        <div style={{
          position: "absolute",
          bottom: "2rem",
          left: "clamp(1.5rem, 6vw, 6rem)",
          right: "clamp(1.5rem, 6vw, 6rem)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}>
          <div style={{ height: "1px", background: "rgba(58,42,31,0.15)", flex: 1 }} />
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.62rem",
            letterSpacing: "0.22em",
            color: "#6b4f3b",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
            fontWeight: 500,
          }}>
            Priya Kumari · <span style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              letterSpacing: 0,
              textTransform: "none",
              fontSize: "0.78rem",
              color: "#3a2a1f",
            }}>Est. {new Date().getFullYear()}</span>
          </span>
          <div style={{ height: "1px", background: "rgba(58,42,31,0.15)", flex: 1 }} />
        </div>

        {/* Responsive grid collapse */}
        <style>{`
          @media (max-width: 768px) {
            .contact-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </>
  );
};

export default Contact;
