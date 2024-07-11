import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-gradient-to-r from-indigo-500 to-indigo-700 text-white p-4 shadow-lg">
      <div className="container mx-auto">
        <ul className="flex justify-around items-center space-x-6">
          <li className="relative group">
            <Link
              to="/"
              className="transition transform hover:scale-110 duration-300 hover:text-indigo-300"
            >
              Home
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link
              to="/AboutUs"
              className="transition transform hover:scale-110 duration-300 hover:text-indigo-300"
            >
              About Us
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link
              to="/Services"
              className="transition transform hover:scale-110 duration-300 hover:text-indigo-300"
            >
              Services
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link
              to="/Places"
              className="transition transform hover:scale-110 duration-300 hover:text-indigo-300"
            >
              Places
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

