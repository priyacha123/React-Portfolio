import React from "react";
import { BsLinkedin, BsTwitter, BsArrowRight, BsCodeSlash } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { HiLightningBolt } from "react-icons/hi";

const About3 = () => {
  return (
    <section id="about" className="min-h-screen w-full bg-[#f8f9fa] flex items-center px-6 md:px-20 py-20">
      <div className="max-w-6xl mx-auto w-full">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="md:col-span-2 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full w-fit text-xs font-bold uppercase tracking-wider">
              <HiLightningBolt /> 3rd Year Engineering Student
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Hi, I'm Priya. I build <span className="text-blue-600 underline decoration-blue-100 decoration-4">digital experiences</span> that matter.
            </h2>
            <p className="text-gray-500 text-lg max-w-xl">
              I bridge the gap between complex logic and intuitive design. Currently focused on mastering the art of modern frontend development.
            </p>
          </div>

          <div className="bg-white p-4 rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden group">
            <div className="relative h-full w-full">
              <img
                src="/about2.png"
                alt="Priya"
                className="w-full h-full object-cover rounded-[2rem] grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">Frontend Developer</p>
                <p className="text-sm font-semibold text-gray-900">Priya Kumari</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gray-900 text-white rounded-lg">
                <BsCodeSlash size={20} />
              </div>
              <h3 className="font-bold text-gray-900">Tech Stack</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'Tailwind', 'Python', 'JavaScript'].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-gray-50 border border-gray-100 rounded-xl text-sm font-medium text-gray-600 hover:bg-white hover:border-blue-200 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 bg-gray-900 p-8 md:p-10 rounded-[2.5rem] shadow-xl text-white flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl font-bold italic">Got a project in mind?</h3>
              <p className="text-gray-400">Let's build something extraordinary together.</p>
            </div>
            
            <div className="flex items-center gap-4">
               <div className="flex gap-4 px-6 py-4 bg-white/5 rounded-2xl border border-white/10">
                  <a href="#" className="hover:text-blue-400 transition-colors"><BsLinkedin size={22} /></a>
                  <a href="#" className="hover:text-sky-400 transition-colors"><BsTwitter size={22} /></a>
                  <a href="mailto:priya0903kumari@gmail.com" className="hover:text-red-400 transition-colors"><MdEmail size={24} /></a>
               </div>
               <a href="#contact" className="p-5 bg-white text-black rounded-2xl hover:scale-105 transition-transform">
                  <BsArrowRight size={24} />
               </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About3;