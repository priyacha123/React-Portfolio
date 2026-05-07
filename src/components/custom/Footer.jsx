import React, { useEffect, useRef } from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef    = useRef(null);
  const marqueeRef   = useRef(null);
  const nameRef      = useRef(null);
  const taglineRef   = useRef(null);
  const linksRef     = useRef([]);
  const dividerRef   = useRef(null);
  const bottomRef    = useRef(null);
  const backTopRef   = useRef(null);

  useEffect(() => {
    if (!document.getElementById("portfolio-fonts")) {
      const link = document.createElement("link");
      link.id = "portfolio-fonts";
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const st = {
        trigger: footerRef.current,
        start: "top 88%",
        toggleActions: "play none none reverse",
      };

      // Divider — expand from left (matches accent-bar style)
      gsap.fromTo(dividerRef.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 1, ease: "expo.out", transformOrigin: "left", scrollTrigger: st }
      );

      // Name reveal
      gsap.fromTo(nameRef.current,
        { opacity: 0, y: 50, skewY: 3 },
        { opacity: 1, y: 0, skewY: 0, duration: 1, ease: "expo.out", delay: 0.1, scrollTrigger: st }
      );

      // Tagline
      gsap.fromTo(taglineRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", delay: 0.25, scrollTrigger: st }
      );

      // Social icons stagger
      gsap.fromTo(linksRef.current,
        { opacity: 0, y: 24, scale: 0.8 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "back.out(2)",
          stagger: 0.08, delay: 0.3, scrollTrigger: st,
        }
      );

      // Bottom bar
      gsap.fromTo(bottomRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", delay: 0.4, scrollTrigger: st }
      );

      // Back to top button
      gsap.fromTo(backTopRef.current,
        { opacity: 0, scale: 0.7, rotate: -45 },
        {
          opacity: 1, scale: 1, rotate: 0, duration: 0.8, ease: "elastic.out(1, 0.5)",
          delay: 0.5, scrollTrigger: st,
        }
      );

      // Marquee — continuous scroll
      const track = marqueeRef.current;
      if (track) {
        const totalW = track.scrollWidth / 2;
        gsap.to(track, {
          x: -totalW,
          duration: 22,
          ease: "none",
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize((x) => parseFloat(x) % totalW),
          },
        });
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const socialLinks = [
    { icon: <MdEmail size={18} />,    href: "mailto:priya0903kumari@gmail.com", label: "Email" },
    { icon: <BsGithub size={17} />,   href: "https://github.com/priyacha123",   label: "GitHub" },
    { icon: <BsLinkedin size={17} />, href: "https://www.linkedin.com/in/priyakumari21-frontend-developer/", label: "LinkedIn" },
    { icon: <BsTwitter size={17} />,  href: "https://x.com/textrovert_39",      label: "Twitter" },
  ];

  const marqueeItems = [
    "Frontend Developer", "Priya Kumari", "React", "GSAP",
    "Frontend Developer", "Priya Kumari", "Next.js", "TypeScript",
    "Frontend Developer", "Priya Kumari", "React", "GSAP",
    "Frontend Developer", "Priya Kumari", "Next.js", "TypeScript",
  ];

  return (
    <>
      <style>{`
        .footer-social-btn:hover {
          background: rgba(43, 29, 20, 0.05) !important;
          border-color: #c1623f !important;
          color: #c1623f !important;
          transform: translateY(-2px);
        }
        .back-top-btn:hover {
          background: #c1623f !important;
          color: #f7f1e8 !important;
          border-color: #c1623f !important;
        }
      `}</style>

      <footer
        ref={footerRef}
        style={{
          background: "#f7f1e8",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Dot grid */}
        <div aria-hidden style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "radial-gradient(circle, rgba(58,42,31,0.07) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }} />

        {/* ── Marquee strip ── */}
        <div style={{
          borderTop: "1px solid rgba(58, 42, 31, 0.08)",
          borderBottom: "1px solid rgba(58, 42, 31, 0.08)",
          padding: "1rem 0",
          overflow: "hidden",
        }}>
          <div
            ref={marqueeRef}
            style={{ display: "flex", gap: "0", whiteSpace: "nowrap", willChange: "transform" }}
          >
            {marqueeItems.map((item, i) => (
              <span key={i} style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "clamp(0.7rem, 1.1vw, 0.82rem)",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: i % 2 === 0 ? "rgba(43, 29, 20, 0.15)" : "#c1623f",
                padding: "0 2rem",
                userSelect: "none",
                flexShrink: 0,
              }}>
                {item}
                <span style={{ marginLeft: "2rem", opacity: 0.3 }}>·</span>
              </span>
            ))}
          </div>
        </div>

        {/* ── Main body ── */}
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "clamp(3.5rem, 6vw, 5.5rem) clamp(1.5rem, 6vw, 6rem) 0",
          position: "relative",
          zIndex: 1,
        }}>
          {/* Top row: Name + back-to-top */}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "2.5rem",
            gap: "1rem",
          }}>
            <div>
              <h2
                ref={nameRef}
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: "clamp(2.8rem, 7vw, 6rem)",
                  fontWeight: 400,
                  color: "#2b1d14",
                  margin: "0 0 0.6rem",
                  lineHeight: 0.95,
                  letterSpacing: "-0.02em",
                  willChange: "transform",
                }}
              >
                Priya Kumari
              </h2>
              <p
                ref={taglineRef}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "clamp(0.65rem, 1vw, 0.78rem)",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(43, 29, 20, 0.45)",
                  margin: 0,
                }}
              >
                Crafting digital experiences with code & creativity
              </p>
            </div>

            {/* Back to top */}
            <button
              ref={backTopRef}
              className="back-top-btn"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.3rem",
                width: 64,
                height: 64,
                border: "1px solid rgba(43, 29, 20, 0.15)",
                background: "transparent",
                color: "rgba(43, 29, 20, 0.4)",
                cursor: "pointer",
                transition: "background 0.2s, border-color 0.2s, color 0.2s, transform 0.2s",
                flexShrink: 0,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 12V4M4 7l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.5rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}>Top</span>
            </button>
          </div>

          {/* Amber divider */}
          <div
            ref={dividerRef}
            style={{
              height: "1px",
              background: "rgba(193, 98, 63, 0.25)",
              marginBottom: "2rem",
            }}
          />

          {/* Bottom row */}
          <div
            ref={bottomRef}
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "1.5rem",
              paddingBottom: "2.5rem",
            }}
          >
            {/* Copyright */}
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(43, 29, 20, 0.35)",
              margin: 0,
            }}>
              © {new Date().getFullYear()} Priya Kumari — Built with React & GSAP
            </p>

            {/* Social icons */}
            <div style={{ display: "flex", gap: "0.6rem" }}>
              {socialLinks.map((link, i) => (
                <a
                  key={link.label}
                  ref={(el) => (linksRef.current[i] = el)}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="footer-social-btn"
                  style={{
                    width: 40,
                    height: 40,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid rgba(43, 29, 20, 0.12)",
                    borderRadius: "3px",
                    color: "rgba(43, 29, 20, 0.35)",
                    textDecoration: "none",
                    transition: "background 0.2s, border-color 0.2s, color 0.2s, transform 0.2s",
                  }}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
