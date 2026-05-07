import { useEffect, useRef } from "react";
import gsap from "gsap";

const Navbar = () => {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef([]);
  const lastScroll = useRef(0);

  useEffect(() => {
    // Logo animation
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, x: -40, scale: 0.8 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1,
        ease: "expo.out",
        delay: 0.2,
      }
    );

    // Nav links animation
    gsap.fromTo(
      linksRef.current,
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "back.out(2)",
        stagger: 0.1,
        delay: 0.5,
      }
    );

    // Scroll behavior
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll < 100) {
        gsap.to(navRef.current, { y: 0, duration: 0.3, ease: "power2.out" });
      } else if (currentScroll > lastScroll.current) {
        gsap.to(navRef.current, { y: "-100%", duration: 0.4, ease: "power2.out" });
      } else {
        gsap.to(navRef.current, { y: 0, duration: 0.4, ease: "power2.out" });
      }

      lastScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    // Magnetic hover effect
    const cleanupFns = [];
    linksRef.current.forEach((link) => {
      if (!link) return;

      const handleMove = (e) => {
        const rect = link.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) * 0.3;
        const dy = (e.clientY - cy) * 0.3;

        gsap.to(link, { x: dx, y: dy, duration: 0.2, ease: "power2.out" });
      };

      const handleMouseLeave = () => {
        gsap.to(link, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.4)",
        });
      };

      link.addEventListener("mousemove", handleMove);
      link.addEventListener("mouseleave", handleMouseLeave);

      cleanupFns.push(() => {
        link.removeEventListener("mousemove", handleMove);
        link.removeEventListener("mouseleave", handleMouseLeave);
      });
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cleanupFns.forEach((fn) => fn());
    };
  }, []);

  const navItems = ["Home", "About", "Projects", "Contact"];

  return (
    <>
      {/* Navbar */}
      <header
        ref={navRef}
        className="fixed top-0 left-0 w-full z-[999] backdrop-blur-xl bg-[#f7f1e8]/85 border-b border-[#3a2a1f]/10 shadow-[0_1px_30px_rgba(58,42,31,0.08)]"
        style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
      >
        {/* Top thin editorial strip */}
        {/* <div className="hidden md:flex items-center justify-between px-8 h-7 text-[10px] tracking-[0.25em] uppercase text-[#6b4f3b] border-b border-[#3a2a1f]/10 bg-[#efe5d4]/60">
          <span>Vol. 01 — Portfolio Edition</span>
          <span className="italic font-serif normal-case tracking-normal text-[11px]">
            "Crafted with intention."
          </span>
          <span>Est. MMXXV</span>
        </div> */}

        <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex justify-between items-center">
          {/* Logo */}
          <h1
            ref={logoRef}
            className="text-2xl md:text-3xl font-bold cursor-pointer text-[#2b1d14] leading-none flex items-baseline gap-2"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            <span className="italic">Developer</span>
            <span className="text-[#c1623f] text-3xl leading-none">.</span>
          </h1>

          {/* Nav Links */}
          <nav>
            <ul className="hidden md:flex items-center gap-10 text-[#3a2a1f] text-[13px] tracking-[0.18em] uppercase">
              {navItems.map((item, i) => (
                <li
                  key={item}
                  ref={(el) => (linksRef.current[i] = el)}
                  className="relative group cursor-pointer"
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="flex items-center gap-1.5 transition-colors duration-300 hover:text-[#c1623f] py-2"
                  >
                    <span className="text-[10px] text-[#a8896f] font-serif italic normal-case tracking-normal">
                      0{i + 1}
                    </span>
                    {item}
                  </a>

                  <span className="absolute left-0 -bottom-0.5 w-0 h-[1.5px] bg-[#c1623f] transition-all duration-500 group-hover:w-full" />
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 text-[12px] tracking-[0.2em] uppercase font-semibold rounded-full text-[#f7f1e8] bg-[#2b1d14] border border-[#2b1d14] transition-all duration-300 hover:bg-[#c1623f] hover:border-[#c1623f] hover:shadow-[0_8px_20px_rgba(193,98,63,0.3)] hover:-translate-y-0.5"
          >
            Let's Talk
            <span className="text-base leading-none">→</span>
          </a>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-20 md:h-[108px]"></div>
    </>
  );
};

export default Navbar;
