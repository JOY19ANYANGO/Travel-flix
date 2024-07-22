import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="absolute top-0 w-full m-4 flex justify-center items-center">
      <ul className="flex space-x-12">
        <li>
          <Link to="/" className="hover:underline">HOME</Link>
        </li>
        <li className="relative">
          <button 
            onClick={toggleDropdown} 
            className="hover:underline focus:outline-none"
          >
            LISTINGS
          </button>
          {isDropdownOpen && (
            <ul className="absolute top-full left-0 bg-black text-white shadow-lg rounded-lg mt-2 p-2 w-48 z-50">
              <li className="p-2 hover:bg-gray-700 rounded">
                <Link to="/Places/restaurants" className="block">RESTAURANTS</Link>
              </li>
              <li className="p-2 hover:bg-gray-700 rounded">
                <Link to="/Places/bars-clubs" className="block">BARS & CLUBS</Link>
              </li>
              <li className="p-2 hover:bg-gray-700 rounded">
                <Link to="/Places/games-funs" className="block">GAMES & FUNS</Link>
              </li>
              <li className="p-2 hover:bg-gray-700 rounded">
                <Link to="/Places/malls" className="block">MALLS</Link>
              </li>
              <li className="p-2 hover:bg-gray-700 rounded">
                <Link to="/Places/museums" className="block">MUSEUMS</Link>
              </li>
              <li className="p-2 hover:bg-gray-700 rounded">
                <Link to="/Places/nature" className="block">NATURE</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/Services" className="hover:underline">CONTACT</Link>
        </li>
        <li>
          <Link to="/AboutUs" className="hover:underline">ABOUT</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;







