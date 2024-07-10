import React, { useState } from "react";

function NavBar() {
  

 


  return (
    <header className="Navbar">
      <img src={logo} className="image" alt="logo" />
      <div className="List">
        <ul className="list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/AboutUs">AboutUs</Link>
          </li>
          <li>
            <Link to="/Services">Services</Link>
          </li>
          <li>
            <Link to="/Places">Places</Link>
          </li>
          
        </ul>
      </div>
      
    </header>
  );
}

export default NavBar;