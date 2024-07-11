import React from "react";
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";

import "./Nav.css";

function Nav() {
  return (
    <header>
      <ul>
        <li>
          <NavLink exact to="/" activeclassname="active" >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" activeclassname= "active">
          Product
          </NavLink>
        </li>
        <li>
          <NavLink to="/addProducts" activeclassname="active">
          Add Products
          </NavLink>
        </li> 
        <li>
          <NavLink to="/updateProducts" activeclassname="active">
          Update Products
          </NavLink>
        </li> 
        <li>
          <NavLink to="/signup" activeclassname="active">
          Signup
          </NavLink>
        </li>
        <li className="cart">
          <NavLink to="/profile" activeclassname="active">
  
            <span>Profile <FaUser/></span>
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Nav;

// Products
//Add Products
// Update Products
//Logout
//Profile