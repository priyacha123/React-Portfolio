// import { BsGithub } from "react-icons/bs";

// const Header = () => {
//   return (
//     <main id="home" className="min-h-screen flex flex-col justify-between bg-white text-black px-6 md:px-16">

//       <div className="flex flex-col items-center justify-center flex-1 gap-4 text-center">

//         <img 
//           src="/2026-2.png" 
//           alt="Top Design" 
//           className="w-32 md:w-40 opacity-90 pt-10"
//         />

//         <span className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-widest font-serif">
//           PORTFOLIO
//         </span>

//         <img 
//           src="about2.png" 
//           alt="PostFolio"
//           className="w-70 md:w-76 hover:scale-105 transition duration-300 rounded-full shadow-lg cursor-pointer bg-amber-100"
//         />

//       </div>

//       <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 pb-10 border-t border-black/10 pt-2 ">

//         <p className="text-sm md:text-base text-gray-700 leading-relaxed text-center md:text-left">
//           “I build things at my own pace,
//           <br />
//           and it feels good
//           <br />
//           when they finally come together.”
//         </p>

//         <a
//           href="https://github.com/priyacha123"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center gap-2 text-base md:text-lg font-semibold transition duration-300 hover:scale-105 hover:opacity-70 border-2 border-gray-800 rounded-lg px-4 py-2"
//         >
//           <BsGithub size={20} />
//           priyacha123
//         </a>

//       </div>

//     </main>
//   );
// };

// export default Header;





import { useEffect, useRef } from "react";
import { BsGithub } from "react-icons/bs";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Header = () => {
  const mainRef = useRef(null);
  const topImgRef = useRef(null);
  const titleRef = useRef(null);
  const profileImgRef = useRef(null);
  const footerRef = useRef(null);
  const quoteRef = useRef(null);
  const githubRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── 1. GLITCH FLASH OVERLAY on load ─────────────────────────────
      const overlay = overlayRef.current;
      gsap.set(overlay, { display: "block" });
      const glitchTl = gsap.timeline();
      glitchTl
        .to(overlay, { opacity: 1, duration: 0.05 })
        .to(overlay, { opacity: 0, duration: 0.05 })
        .to(overlay, { opacity: 0.7, duration: 0.03 })
        .to(overlay, { opacity: 0, duration: 0.08 })
        .to(overlay, { opacity: 0.4, duration: 0.04 })
        .to(overlay, { opacity: 0, duration: 0.1, onComplete: () => gsap.set(overlay, { display: "none" }) });

      // ── 2. TOP IMAGE — spin + slam down ─────────────────────────────
      // gsap.fromTo(
      //   topImgRef.current,
      //   { opacity: 0, y: -120, rotate: 720, scale: 0 },
      //   {
      //     opacity: 0.9, y: 0, rotate: 0, scale: 1,
      //     duration: 1.2, ease: "back.out(2.5)", delay: 0.3,
      //   }
      // );

      // ── 3. TITLE — SplitText char-by-char chaos ──────────────────────
      const split = new SplitText(titleRef.current, { type: "chars" });
      gsap.set(split.chars, { display: "inline-block" });

      gsap.fromTo(
        split.chars,
        {
          opacity: 0,
          y: () => gsap.utils.random(-120, 120),
          x: () => gsap.utils.random(-80, 80),
          rotate: () => gsap.utils.random(-90, 90),
          scale: () => gsap.utils.random(0, 3),
        },
        {
          opacity: 1, y: 0, x: 0, rotate: 0, scale: 1,
          duration: 0.8,
          ease: "back.out(3)",
          stagger: { each: 0.06, from: "random" },
          delay: 0.5,
        }
      );

      // ── 4. SCRAMBLE TEXT loop (requires gsap club or DIY version) ────
      // DIY scramble on the title — runs 3 rapid shuffle passes
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*";
      const originalText = "PORTFOLIO";
      let scrambleTimeout;

      const scramble = (el = 10) => {
        let count = 0;
        clearInterval(scrambleTimeout);
        scrambleTimeout = setInterval(() => {
          el.innerText = originalText
            .split("")
            .map((c, i) => (i < count ? c : chars[Math.floor(Math.random() * chars.length)]))
            .join("");
          if (++count >= originalText.length) clearInterval(scrambleTimeout);
        }, 40);
      };

      // Trigger scramble after intro, then on hover
      gsap.delayedCall(1.5, () => scramble(titleRef.current));
      titleRef.current.addEventListener("mouseenter", () => scramble(titleRef.current));

      // ── 5. PROFILE IMAGE — wobble entrance + continuous float ────────
      // gsap.fromTo(
      //   profileImgRef.current,
      //   { opacity: 0, scale: 0, rotate: -15 },
      //   {
      //     opacity: 1, scale: 1, rotate: 0,
      //     duration: 1, ease: "elastic.out(1.2, 0.4)", delay: 0.9,
      //   }
      // );

      // Perpetual floating animation
      gsap.to(profileImgRef.current, {
        y: -14, rotate: 2,
        duration: 2.5, ease: "sine.inOut",
        yoyo: true, repeat: -1,
      });

      // ── 6. MAGNETIC GITHUB BUTTON ────────────────────────────────────
      const btn = githubRef.current;
      const handleMouseMove = (e) => {
        const rect = btn.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) * 0.45;
        const dy = (e.clientY - cy) * 0.45;
        gsap.to(btn, { x: dx, y: dy, duration: 0.25, ease: "power2.out" });
      };
      const handleMouseLeave = () => {
        gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1.1, 0.4)" });
      };
      btn.addEventListener("mousemove", handleMouseMove);
      btn.addEventListener("mouseleave", handleMouseLeave);

      // ── 7. SCROLL: TITLE — skew + scale squeeze ───────────────────────
      gsap.to(titleRef.current, {
        skewX: 12, scale: 0.88, opacity: 0.2,
        ease: "none",
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top top",
          end: "center top",
          scrub: 1.5,
        },
      });

      // ── 8. SCROLL: PROFILE IMAGE — parallax drift ────────────────────
      gsap.to(profileImgRef.current, {
        y: -80, rotate: -10, scale: 0.85,
        ease: "none",
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
      });

      // ── 9. SCROLL: TOP IMAGE — counter-parallax spin ─────────────────
      gsap.to(topImgRef.current, {
        y: 60, rotate: 45, opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top top",
          end: "center top",
          scrub: 1,
        },
      });

      // ── 10. FOOTER — explosive reveal ────────────────────────────────
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 80, scaleX: 0.7, skewX: -8 },
        {
          opacity: 1, y: 0, scaleX: 1, skewX: 0,
          duration: 1.1, ease: "expo.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // ── 11. QUOTE — typewriter-style line reveal ─────────────────────
      // const lines = quoteRef.current.querySelectorAll("br");
      gsap.fromTo(
        quoteRef.current,
        { opacity: 0, x: -60, rotate: -3 },
        {
          opacity: 1, x: 0, rotate: 0,
          duration: 0.9, ease: "back.out(1.8)",
          scrollTrigger: {
            trigger: quoteRef.current,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // ── 12. GITHUB BUTTON — spin-in entrance ─────────────────────────
      gsap.fromTo(
        btn,
        { opacity: 0, scale: 0.3, rotate: -180 },
        {
          opacity: 1, scale: 1, rotate: 0,
          duration: 0.9, ease: "back.out(2)",
          scrollTrigger: {
            trigger: btn,
            start: "top 92%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // ── 13. CONTINUOUS GLITCH on title (random intervals) ────────────
      const triggerGlitch = () => {
        gsap.to(titleRef.current, {
          skewX: () => gsap.utils.random(-6, 6),
          x: () => gsap.utils.random(-4, 4),
          duration: 0.08,
          yoyo: true,
          repeat: 5,
          ease: "none",
          onComplete: () =>
            gsap.set(titleRef.current, { skewX: 0, x: 0 }),
        });
        gsap.delayedCall(gsap.utils.random(3, 7), triggerGlitch);
      };
      gsap.delayedCall(2.5, triggerGlitch);

      return () => {
        btn.removeEventListener("mousemove", handleMouseMove);
        btn.removeEventListener("mouseleave", handleMouseLeave);
        titleRef.current?.removeEventListener("mouseenter", () => scramble(titleRef.current));
        clearInterval(scrambleTimeout);
        split.revert();
      };

    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={mainRef}
      id="home"
      className="min-h-screen flex flex-col justify-between bg-white text-black px-6 md:px-16 overflow-hidden relative"
    >

      {/* Glitch overlay flash */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black z-50 pointer-events-none"
        style={{ display: "none", opacity: 0 }}
      />

      <div className="flex flex-col items-center justify-center flex-1 gap-4 text-center">

        <img
          ref={topImgRef}
          src="/2026-2.png"
          alt="Top Design"
          className="w-32 md:w-40 opacity-90 pt-10"
        />

        <span
          ref={titleRef}
          className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-widest font-serif cursor-default select-none"
        >
          PORTFOLIO
        </span>

        <img
          ref={profileImgRef}
          src="about2.png"
          alt="PostFolio"
          className="w-70 md:w-76 rounded-full shadow-lg cursor-pointer bg-amber-100"
        />

      </div>

      <div
        ref={footerRef}
        className="w-full flex flex-col md:flex-row justify-between items-center gap-6 pb-10 border-t border-black/10 pt-2"
      >

        <p
          ref={quoteRef}
          className="text-sm md:text-base text-gray-700 leading-relaxed text-center md:text-left"
        >
          "I build things at my own pace,
          <br />
          and it feels good
          <br />
          when they finally come together."
        </p>

        <a
          ref={githubRef}
          href="https://github.com/priyacha123"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-base md:text-lg font-semibold transition duration-300 hover:opacity-70 border-2 border-gray-800 rounded-lg px-4 py-2"
        >
          <BsGithub size={20} />
          priyacha123
        </a>

      </div>

    </main>
  );
};

export default Header;