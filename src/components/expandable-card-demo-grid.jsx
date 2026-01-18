"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export default function ExpandableCardDemoGrid() {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10" />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-100">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}>
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden">
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top" />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base">
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base">
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white">
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]">
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul
        className="max-w-full mx-auto w-full grid grid-cols-1 md:grid-cols-3 items-start gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer">
            <div className="flex gap-4 flex-col  w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-full  rounded-lg object-cover object-top" />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base">
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base">
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "AI Short Video Generator",
    title: "Clip Crafter AI",
    src: "/public/clipcrafter.png",
    ctaText: "View Details",
    ctaLink: "https://clip-crafter-ai.vercel.app/",
    content: () => {
      return (
        <p>
          Built an AI-powered short video generator that transforms text input
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
          efficient asset storage.
        </p>
      );
    },
  },
  {
    description: "AI Trip Planner",
    title: "Voyage Tour",
    src: "/public/trip-planner.png",
    ctaText: "View Details",
    ctaLink: "https://ai-trip-planner-mu.vercel.app/",
    content: () => {
      return (
        <p>
          Built an AI-powered Trip Planner using React, integrating the Google
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
          more effectively.
        </p>
      );
    },
  },
  {
    description: "Photo Editing Website",
    title: "Gallery Vault",
    src: "/public/gallery-vault.png",
    ctaText: "View Details",
    ctaLink: "https://gallery-vault-lake.vercel.app/",
    content: () => {
      return (
        <p>
          Developed a Next.js and TypeScript–based photo editing web application
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
        </p>
      );
    },
  },
  {
    description: "Recipe Generator",
    title: "Chef Claude",
    src: "/public/chef-claude.png",
    ctaText: "View Details",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Created a recipe generator web application using React that generates
          recipes through the Hugging Face API based on user-provided
          ingredients. The system enforces a minimum of five ingredients to
          ensure more accurate and meaningful recipe generation.
          <br /> <br />
          Designed an intuitive user interface that guides users to input
          ingredients and instantly receive AI-generated recipes. The project
          highlights effective API integration, input validation, and dynamic
          rendering of AI-driven content within a React-based frontend.
        </p>
      );
    },
  },
  {
    description: "Meme Creation Website",
    title: "Meme Generator",
    src: "/public/meme-generator.png",
    ctaText: "View Details",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Developed a simple and interactive Meme Generator using React that
          fetches trending meme templates from a public Meme API. The
          application allows users to customize memes by adding top and bottom
          text, making meme creation quick and user-friendly.
          <br /> <br />
          Implemented features to download the final meme as a .jpg file and
          styled the interface using Tailwind CSS for a clean, responsive
          design. The project demonstrates practical API integration, state
          management, and dynamic UI updates in a modern React workflow.
        </p>
      );
    },
  },

  {
    description: "Expense Tracker",
    title: "Savoneyy",
    src: "/public/savoneyy.png",
    ctaText: "View Details",
    ctaLink: "https://savoneyy.vercel.app/",
    content: () => {
      return (
        <p>
          Developed Savoney, a personal finance management web application built
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
          expense data for clear and effective financial analysis.
        </p>
      );
    },
  },
];
