import { Menu } from "lucide-react";
import React from "react";
import { MobileDrawer } from "./mobile-menus";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-gray-300 border-b border-black/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 md:px-5 h-20 flex justify-between items-center">
        
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide  text-blue-400  bg-clip-text cursor-pointer">
          DEVELOPER
        </h1>

        <ul className="flex items-center gap-8 text-black font-medium">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <li key={item} className="relative group cursor-pointer">
              <a
                href={`#${item.toLowerCase()}`}
                className="transition duration-300 group-hover:text-white"
              >
                {item}
              </a>

              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* <div className="md:hidden text-white text-2xl cursor-pointer">
          <Button onClick={<MobileDrawer />} className="p-2">
            <Menu />
          </Button>
        </div> */}
      </div>
    </header>
  );
};

export default Navbar;
