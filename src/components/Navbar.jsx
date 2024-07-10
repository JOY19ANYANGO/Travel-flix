import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {

  return (
      <div >
        <ul >
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
      
   
  );
}

export default NavBar;