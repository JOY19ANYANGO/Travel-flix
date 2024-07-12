import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="absolute top-0 w-full m-4 flex justify-center items-center">
      <ul className="flex space-x-12">
        <li>
          <Link to="/" className="hover:underline">HOME</Link>
        </li>
        <li>
          <Link to="/AboutUs" className="hover:underline">LISTINGS</Link>
        </li>
        <li>
          <Link to="/Services" className="hover:underline">CONTACT</Link>
        </li>
        <li>
          <Link to="/Places" className="hover:underline">ABOUT</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;



