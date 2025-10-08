import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Apps", path: "/apps" },
  { name: "Installation", path: "/installation" },
];

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);


  const isLinkActive = (path) => {
    return (
      location.pathname === path || location.pathname.startsWith(path + "/")
    );
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="py-3 shadow bg-white">
        <div className="flex items-center justify-between max-w-[1500px] mx-auto px-4">
          <Link to={"/"}>
            <div className="flex items-center gap-1">
              <img className="w-10 h-10" src="../assets/logo.png" alt="" />
              <h2 className="text-xl md:text-2xl lg:text-2xl text-[#603cb4] font-bold">
                HERO.IO
              </h2>
            </div>
          </Link>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-6">
              {navLinks.map((link, i) => (
                <li
                  key={i}
                  className={`font-medium text-xl pb-2 ${
                    isLinkActive(link.path)
                      ? "text-[#8452e9] border-b-2 border-[#8452e9]"
                      : "text-gray-600"
                  }`}
                >
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-8 md:gap-0">
            <a
              href="https://github.com/mdriyazakondo"
              target="_blank"
              className="flex items-center text-sm md:text-xl font-bold gap-2 px-6 py-2 rounded-md bg-gradient-to-r from-[#642fe3] to-[#9f62f2] text-white cursor-pointer"
            >
              <FaGithub className="w-4 md:w-6 h-4 md:h-6" /> Contribute
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="block md:hidden"
            >
              {isOpen ? (
                <X className="w-8 h-8 cursor-pointer text-gray-700" />
              ) : (
                <Menu className="w-8 h-8 cursor-pointer text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <nav className="md:hidden block shadow bg-gray-100">
          <ul className="flex flex-col items-start gap-4 p-4">
            {navLinks.map((link, i) => (
              <li
                key={i}
                className={`font-medium text-xl pb-2 w-full ${
                  isLinkActive(link.path)
                    ? "text-[#8452e9] border-b-2 border-[#8452e9]"
                    : "text-gray-600"
                }`}
                onClick={() => setIsOpen(false)} 
              >
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
