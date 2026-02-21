import { BsGithub } from "react-icons/bs";

const Header = () => {
  return (
    <main id="home" className="min-h-screen flex flex-col justify-between bg-white text-black px-6 md:px-16">

      <div className="flex flex-col items-center justify-center flex-1 gap-4 text-center">

        <img 
          src="/2026-2.png" 
          alt="Top Design" 
          className="w-32 md:w-40 opacity-90 pt-10"
        />

        <span className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-widest font-serif">
          PORTFOLIO
        </span>

        <img 
          src="about2.png" 
          alt="PostFolio"
          className="w-70 md:w-76 hover:scale-105 transition duration-300 rounded-full shadow-lg cursor-pointer bg-amber-100"
        />

      </div>

      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 pb-10 border-t border-black/10 pt-2 ">

        <p className="text-sm md:text-base text-gray-700 leading-relaxed text-center md:text-left">
          “I build things at my own pace,
          <br />
          and it feels good
          <br />
          when they finally come together.”
        </p>

        <a
          href="https://github.com/priyacha123"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-base md:text-lg font-semibold transition duration-300 hover:scale-105 hover:opacity-70 border-2 border-gray-800 rounded-lg px-4 py-2"
        >
          <BsGithub size={20} />
          priyacha123
        </a>

      </div>

    </main>
  );
};

export default Header;
