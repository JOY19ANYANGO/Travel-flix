import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">Explore Nairobi</h2>
          <p className="text-gray-400">
            Discover the heart and soul of Nairobi with us.
          </p>
        </div>

        <div className="flex space-x-6 text-red-500 mb-4 md:mb-0">
          <a href="#" className="hover:text-red-600 transition-colors duration-300">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="hover:text-red-600 transition-colors duration-300">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="hover:text-red-600 transition-colors duration-300">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="hover:text-red-600 transition-colors duration-300">
            <FaLinkedin size={24} />
          </a>
        </div>

        <div className="text-gray-400">
          <p>&copy; {new Date().getFullYear()} Explore Nairobi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
