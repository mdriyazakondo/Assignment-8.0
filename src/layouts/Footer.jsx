import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-[#011b34] text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-600 pb-6">
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <img
              src="../assets/logo.png"
              alt="HERO.IO Logo"
              className="w-10 h-10"
            />
            <h2 className="text-xl font-bold tracking-wide text-purple-400">
              HERO.IO
            </h2>
          </div>


          <div className="flex flex-col md:flex-row md:space-x-8 text-gray-300 text-sm text-center md:text-left space-y-2 md:space-y-0 mb-6 md:mb-0">
            <Link to={"/"} href="#" className="hover:text-white transition">
              Home
            </Link>
            <Link to={"/Apps"} href="#" className="hover:text-white transition">
              Apps
            </Link>
            <Link
              to={"/installation"}
              href="#"
              className="hover:text-white transition"
            >
              Installation
            </Link>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-300 text-sm mb-2">Social Links</p>
            <div className="flex justify-center md:justify-end space-x-4">
              <Link
                to={"/"}
                href="#"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition"
              >
                <FaXTwitter className="text-xl" />
              </Link>
              <Link
                to={"/"}
                href="#"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition"
              >
                <FaLinkedinIn className="text-xl" />
              </Link>
              <Link
                to={"/"}
                href="#"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition"
              >
                <FaFacebookF className="text-xl" />
              </Link>
            </div>
          </div>
        </div>


        <div className="text-center text-gray-400 text-sm mt-6">
          <p className="mt-2">
            Copyright © 2025 <span className="font-semibold">HERO.IO</span> —
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
