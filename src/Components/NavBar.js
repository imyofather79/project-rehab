import React from 'react';
import { NavLink } from "react-router-dom";


function NavBar() {


  return (
    <nav id="navbar">
          <NavLink to="/" exact className="button">
            Home
          </NavLink>
          <NavLink to="/room" exact className="button">
            Room
          </NavLink>
          <NavLink to="/backdoor" exact className="button">
            Backdoor
          </NavLink> 
    </nav>
  );
}

export default NavBar;
