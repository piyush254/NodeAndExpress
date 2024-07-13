import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";

import "./Nav.css";

function Nav() {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate()
  const Logout = ()=> {
    localStorage.clear()
    navigate("/signup") 
  }
  return (
    <header>
      <ul>
        <li>
          <NavLink
            exact
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Product
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/addProducts"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Add Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/updateProducts"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Update Products
          </NavLink>
        </li>
        <li>
        { auth ?  <NavLink
            to="/signup"
            className={({ isActive }) => (isActive ? "active" : "")}
         onClick={() =>{
          Logout();
         }} >
            Logout
          </NavLink> :  <NavLink
            to="/signup"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Signup
          </NavLink>} 
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Login
          </NavLink>
        </li>
        <li className="cart">
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <span>
              Profile <FaUser />{" "}
            </span>
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
