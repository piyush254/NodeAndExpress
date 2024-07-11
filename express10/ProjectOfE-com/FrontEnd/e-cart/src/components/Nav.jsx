import React from "react";
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";

import "./Nav.css";

function Nav() {
  return (
    <header>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" activeClassName="active">
          Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/addProducts" activeClassName="active">
          Add Products
          </NavLink>
        </li> 
        <li>
          <NavLink to="/updateProducts" activeClassName="active">
          Update Products
          </NavLink>
        </li> 
        <li>
          <NavLink to="/signup" activeClassName="active">
          Signup
          </NavLink>
        </li>
        <li className="cart">
          <NavLink to="/profile" activeClassName="active">
  
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