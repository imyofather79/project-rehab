import React from 'react';
import { NavLink } from "react-router-dom";


function NavBar() {
  const linkStyles = {
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "red",
    textDecoration: "none",
    color: "white",
  };

  return (
    <nav>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
        >
          Home
        </NavLink>
        <NavLink
        to="/room"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
        >
          Room
        </NavLink>
        <NavLink
        to="/backdoor"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
        >
          Backdoor
        </NavLink> 
    </nav>
  );
}

export default NavBar;
