import React from "react";
import { BsLinkedin, BsTwitter, BsArrowRight } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const About2 = () => {
  return (
    <section
      id="about"
      className="min-h-screen w-full bg-[#fafafa] flex items-center px-6 md:px-20 py-24"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="order-2 md:order-1">
            <div className="space-y-2 mb-8">
              <span className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase">
                Biography
              </span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
                About Me<span className="text-blue-600">.</span>
              </h2>
            </div>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <h3 className="text-2xl font-medium text-gray-800">
                I'm Priya, a Frontend Developer based in India.
              </h3>

              <p>
                Currently a 3rd-year engineering student, I bridge the gap between 
                design and code. I don't just build websites; I craft digital 
                experiences that feel seamless and intuitive.
              </p>

              <p>
                My philosophy is simple: <strong>clean code, purposeful motion, and 
                user-centric design.</strong> Whether it's React or Python, I focus on 
                scalability and performance.
              </p>

              <div className="flex flex-wrap items-center gap-8 pt-6">
                <div className="flex gap-5 text-gray-400">
                  <a href="mailto:priya0903kumari@gmail.com" className="hover:text-black transition-colors duration-300">
                    <MdEmail size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/priyakumari21-frontend-developer/" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors duration-300">
                    <BsLinkedin size={22} />
                  </a>
                  <a href="https://x.com/textrovert_39" target="_blank" rel="noreferrer" className="hover:text-sky-500 transition-colors duration-300">
                    <BsTwitter size={22} />
                  </a>
                </div>
                
                <a href="#projects" className="group flex items-center gap-2 font-semibold text-gray-900">
                  View My Work 
                  <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative group">
              
              <div className="absolute -inset-4 bg-gradient-to-tr from-gray-100 to-gray-200 rounded-[3rem] -z-10 group-hover:scale-105 transition-transform duration-500"></div>
              
              <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl border-[8px] border-white">
                <img
                  src="/3.jpg"
                  alt="Priya Portfolio"
                  className="w-72 md:w-85 lg:w-96 h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white text-sm font-medium tracking-widest uppercase">
                    Priya Kumari — 2024
                  </p>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 h-20 w-20 bg-white rounded-full shadow-xl flex items-center justify-center border border-gray-50 animate-bounce-slow">
                <div className="text-center">
                  <span className="block text-xl font-bold text-gray-900 leading-none">3rd</span>
                  <span className="text-[10px] uppercase tracking-tighter text-gray-500">Year Eng.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-10 border-t border-gray-100">
           <div className="flex flex-wrap justify-center md:justify-start gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="font-bold text-xl tracking-tighter">REACT</span>
              <span className="font-bold text-xl tracking-tighter">JAVASCRIPT</span>
              <span className="font-bold text-xl tracking-tighter">PYTHON</span>
              <span className="font-bold text-xl tracking-tighter">TAILWIND CSS</span>
              <span className="font-bold text-xl tracking-tighter">NEXT.JS</span>
           </div>
        </div>

      </div>
    </section>
  );
};

export default About2;


