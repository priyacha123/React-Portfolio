




import { BiPhoneCall } from 'react-icons/bi'
import { BsLinkedin, BsTwitter } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

const About = () => {
  return (
    <section id="about" className='min-h-screen w-full flex items-center justify-center bg-white py-24'>
      <div className="max-w-6xl w-full flex flex-col md:flex-row px-8 md:px-12 justify-between items-center gap-16 lg:gap-24">
        
        {/* LEFT CONTENT - Balanced Spacing */}
        <div className="flex flex-col gap-8 md:w-3/5">
          <div className="space-y-2">
            <h2 className='text-5xl md:text-7xl font-bold tracking-tighter text-gray-900'>
              About me<span className="text-gray-300">!!</span>
            </h2>
            <div className="h-1.5 w-20 bg-black rounded-full"></div>
          </div>

          <div className="space-y-6">
            <p className="text-2xl font-medium text-gray-800">
              I'm <span className="underline decoration-gray-200 underline-offset-8">Priya</span>. 
              A Frontend Developer
            </p>

            <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
              <p>
                Hi! I’m a passionate Web Developer and Python Enthusiast currently 
                in my 3rd year of engineering. I enjoy creating clean, responsive, 
                and engaging digital experiences using HTML, CSS, JavaScript, 
                React, and Python.
              </p>

              <p>
                I love building websites, tools, and games that combine creativity 
                with strong logic and smooth functionality. Every project is a 
                chance to grow, solve problems, and bring ideas to life through code.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT CARD - Airy & Floating */}
        <div className="md:w-2/5 flex justify-center md:justify-end">
          <div className="relative group max-w-[340px] w-full">
            
            {/* The Floating Frame Shadow */}
            <div className="absolute inset-0 border border-gray-200 rounded-[2.5rem] translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-500"></div>
            
            <div className="bg-white border border-gray-100 rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
              {/* Image Section with Padding to avoid "tight" look */}
              <div className="p-4">
                <div className="rounded-[2rem] overflow-hidden bg-gray-50">
                  <img 
                    src="/about2.png" 
                    alt="Priya" 
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>
              </div>

              {/* Contact Section - Clean & Spacious */}
              <div className="px-8 pb-8 pt-2 flex flex-col gap-4">
                <div className="flex items-center gap-3 text-sm text-gray-500 hover:text-black transition-colors">
                  <BiPhoneCall size={20} className="text-gray-400" />
                  <span>+91 8595357924</span>
                </div>
                
                <div className="flex items-center gap-3 text-sm text-gray-500 hover:text-black transition-colors">
                  <MdEmail size={20} className="text-gray-400" />
                  <span className="truncate">priya0903kumari@gmail.com</span>
                </div>

                <div className="pt-4 border-t border-gray-50 flex gap-5 justify-start">
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all">
                    <BsLinkedin size={20} />
                  </a>
                  <a href="https://x.com" target="_blank" rel="noreferrer" className="p-2 hover:bg-gray-50 hover:text-black rounded-lg transition-all">
                    <BsTwitter size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About






